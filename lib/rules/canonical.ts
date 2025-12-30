import type { ParamConfig, RobotsDirective } from "./params";
import { evaluateParams } from "./params";
import { checkRobotsBlocking } from "./robots";

export interface CanonicalResult {
  canonical: string;
  robots: RobotsDirective;
  blockInRobots: boolean;
  robotsMatchedRules: string[];
  warnings: string[];
  trace: string[];
  sitemapIncluded: boolean;
  hasBlockedParams: boolean;
}

function normalizePath(path: string): string {
  let normalized = path.toLowerCase();
  if (!normalized.endsWith("/") && !normalized.includes("?") && normalized !== "/") {
    normalized += "/";
  }
  return normalized;
}

export function computeCanonical(
  pathname: string,
  searchParams: URLSearchParams,
  config: ParamConfig,
  baseUrl: string = "https://example.com"
): CanonicalResult {
  const trace: string[] = [];
  const warnings: string[] = [];

  trace.push(`═══ SEO DECISION FLOW ═══`);
  trace.push(
    `Input URL: ${pathname}${searchParams.toString() ? "?" + searchParams.toString() : ""}`
  );
  trace.push("");

  let normalizedPath = normalizePath(pathname);
  trace.push(`Step 1: Normalize path → ${normalizedPath}`);

  const evaluated = evaluateParams(normalizedPath, searchParams, config);
  trace.push(`Step 2: Classify parameters`);
  trace.push(`  Stable: ${Array.from(evaluated.stableParams.keys()).join(", ") || "none"}`);
  trace.push(`  Unstable: ${Array.from(evaluated.unstableParams.keys()).join(", ") || "none"}`);
  trace.push(`  Blocked: ${Array.from(evaluated.blockedParams.keys()).join(", ") || "none"}`);
  trace.push(`  Search: ${Array.from(evaluated.searchParams.keys()).join(", ") || "none"}`);
  trace.push(
    `  Pagination: ${
      evaluated.pagination.isPaginated ? `page ${evaluated.pagination.pageNumber}` : "no"
    }`
  );
  trace.push("");

  const hasStable = evaluated.stableParams.size > 0;
  const hasUnstable = evaluated.unstableParams.size > 0;
  const hasBlocked = evaluated.blockedParams.size > 0;
  const hasSearch = evaluated.searchParams.size > 0;
  const isPaginated = evaluated.pagination.isPaginated;
  const pageNumber = evaluated.pagination.pageNumber;

  const multiSelectDetected = Array.from(searchParams.entries()).some(
    ([key, value]) => value.includes(",") && key !== config.pagination.param
  );

  const hasVariantParams =
    hasStable || hasUnstable || hasBlocked || hasSearch || multiSelectDetected;

  let robots: RobotsDirective = "index,follow";
  let blockInRobots = false;
  let sitemapIncluded = true;

  trace.push(`Step 3: Apply pagination & variant priority`);
  if (!hasVariantParams && isPaginated && pageNumber >= 2) {
    robots = config.pagination.pageTwoPlus;
    trace.push(`  ✓ Pure pagination (page ${pageNumber}) → ${robots}`);
  } else if (isPaginated && pageNumber >= 2) {
    robots = "noindex,follow";
    sitemapIncluded = false;
    trace.push(`  ✓ Pagination with variants → treated as variant (noindex,follow)`);
  } else {
    trace.push(`  Page 1 or no pagination`);
  }
  trace.push("");

  trace.push(`Step 4: Check robots.txt blocking & apply parameter policies`);

  const robotsCheck = checkRobotsBlocking(pathname, searchParams, config);
  const isBlockedByRobots = robotsCheck.isBlocked;

  if (isBlockedByRobots) {
    blockInRobots = true;
    sitemapIncluded = false;
    robots = "noindex,follow";
    trace.push(`  ✓ Blocked by robots.txt`);
    for (const rule of robotsCheck.matchedRules) {
      trace.push(`    → ${rule}`);
    }
    trace.push(`  ✓ Excluded from sitemap`);
    if (robotsCheck.warnings.length > 0) {
      warnings.push(...robotsCheck.warnings);
    }
  } else {
    trace.push(`  Not blocked by robots.txt → apply parameter policies`);

    if (multiSelectDetected) {
      robots = "noindex,follow";
      blockInRobots = true;
      sitemapIncluded = false;
      const multiSelectParam = Array.from(searchParams.entries()).find(([k, v]) =>
        v.includes(",")
      )?.[0];
      trace.push(`  ✓ Multi-select detected → blocked in robots.txt`);
      trace.push(`    ℹ️  Pattern: Disallow: /*?*${multiSelectParam}=*,*`);
      trace.push(`  ✓ Excluded from sitemap`);
    } else if (hasVariantParams) {
      robots = "noindex,follow";
      sitemapIncluded = false;
      trace.push(`  ✓ Variant parameters detected → noindex,follow`);
      trace.push(`    ℹ️  Canonical will point to clean base path`);
    } else {
      trace.push(`  No variant parameters detected`);
    }
  }
  trace.push("");

  trace.push(`Step 5: Build canonical URL`);
  let finalPath = normalizedPath;
  const canonicalParams = new URLSearchParams();

  if (hasVariantParams) {
    trace.push(`  Canonicalizing variants to clean base path (drop filters, sorts, pagination)`);
  } else {
    if (evaluated.pagination.isPaginated) {
      if (config.pagination.canonicalStrategy === "self") {
        canonicalParams.set(config.pagination.param, pageNumber.toString());
        trace.push(
          `  Kept pagination (self-canonical, matches URL format): ${config.pagination.param}=${pageNumber}`
        );
      } else {
        trace.push(`  Dropped pagination (base-canonical strategy)`);
      }
    }
  }

  const queryString = canonicalParams.toString();
  const fullCanonical = baseUrl + finalPath + (queryString ? "?" + queryString : "");
  trace.push(`  Final canonical: ${fullCanonical}`);
  trace.push("");

  trace.push(`Step 6: Determine sitemap inclusion`);
  if (sitemapIncluded) {
    trace.push(`  ✓ Included in sitemap (indexable + not blocked)`);
  } else {
    const reasons = [];
    if (robots && robots.includes("noindex")) reasons.push("noindex");
    if (blockInRobots) reasons.push("robots blocked");
    trace.push(`  ✗ Excluded from sitemap (${reasons.join(", ")})`);
  }
  trace.push("");

  trace.push(`═══ FINAL RESULTS ═══`);
  trace.push(`Canonical URL: ${fullCanonical}`);
  trace.push(`Robots: ${robots}`);
  trace.push(`Blocked by robots.txt: ${blockInRobots ? "YES" : "NO"}`);
  trace.push(`Sitemap inclusion: ${sitemapIncluded ? "INCLUDED" : "EXCLUDED"}`);

  if (robots && robots.includes("noindex")) {
    trace.push("");
    trace.push(`ℹ️  This page uses noindex to consolidate signals to the canonical`);
    trace.push(`   while allowing crawlers to discover and follow links.`);
  }

  return {
    canonical: fullCanonical,
    robots,
    blockInRobots,
    robotsMatchedRules: robotsCheck.matchedRules,
    warnings,
    trace,
    sitemapIncluded,
    hasBlockedParams: hasBlocked || blockInRobots || multiSelectDetected,
  };
}

export function detectCanonicalLoop(
  canonical: string,
  maxDepth: number = 5
): { isLoop: boolean; chain: string[] } {
  const chain = [canonical];
  return { isLoop: false, chain };
}
