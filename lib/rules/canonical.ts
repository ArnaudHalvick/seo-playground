import type { ParamConfig, RobotsDirective } from './params';
import { evaluateParams, getParamRule } from './params';
import { checkRobotsBlocking } from './robots';

export interface CanonicalResult {
  canonical: string;
  robots: RobotsDirective;
  blockInRobots: boolean;
  robotsMatchedRules: string[];
  warnings: string[];
  trace: string[];
  sitemapIncluded: boolean;
}

function normalizePath(path: string): string {
  let normalized = path.toLowerCase();
  if (!normalized.endsWith('/') && !normalized.includes('?') && normalized !== '/') {
    normalized += '/';
  }
  return normalized;
}

export function computeCanonical(
  pathname: string,
  searchParams: URLSearchParams,
  config: ParamConfig,
  baseUrl: string = 'https://example.com'
): CanonicalResult {
  const trace: string[] = [];
  const warnings: string[] = [];

  trace.push(`═══ SEO DECISION FLOW ═══`);
  trace.push(`Input URL: ${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`);
  trace.push('');

  let normalizedPath = normalizePath(pathname);
  trace.push(`Step 1: Normalize path → ${normalizedPath}`);

  let robots: RobotsDirective = 'index,follow';
  let blockInRobots = false;
  let sitemapIncluded = true;

  const evaluated = evaluateParams(normalizedPath, searchParams, config);
  trace.push(`Step 2: Classify parameters`);
  trace.push(`  Stable: ${Array.from(evaluated.stableParams.keys()).join(', ') || 'none'}`);
  trace.push(`  Unstable: ${Array.from(evaluated.unstableParams.keys()).join(', ') || 'none'}`);
  trace.push(`  Blocked: ${Array.from(evaluated.blockedParams.keys()).join(', ') || 'none'}`);
  trace.push(`  Search: ${Array.from(evaluated.searchParams.keys()).join(', ') || 'none'}`);
  trace.push(`  Pagination: ${evaluated.pagination.isPaginated ? `page ${evaluated.pagination.pageNumber}` : 'no'}`);
  trace.push('');

  trace.push(`Step 3: Detect pagination`);
  if (evaluated.pagination.isPaginated && evaluated.pagination.pageNumber >= 2) {
    robots = config.pagination.pageTwoPlus;
    sitemapIncluded = false;
    trace.push(`  ✓ Page ${evaluated.pagination.pageNumber} detected → ${robots}`);
    trace.push(`  ✓ Page 2+ excluded from sitemap`);
  } else {
    trace.push(`  Page 1 or no pagination`);
  }
  trace.push('');

  trace.push(`Step 4: Check protected routes`);
  if (pathname.startsWith('/account/')) {
    robots = 'noindex,nofollow';
    blockInRobots = true;
    sitemapIncluded = false;
    trace.push(`  ✓ Protected route detected → noindex,nofollow + robots block`);
  } else if (pathname.startsWith('/search')) {
    if (config.demos.noindexSearch) {
      robots = 'noindex,follow';
      sitemapIncluded = false;
      trace.push(`  ✓ Search page → noindex,follow`);
    }
  } else {
    trace.push(`  Not a protected/special route`);
  }
  trace.push('');

  trace.push(`Step 5: Apply parameter policies`);
  if (evaluated.unstableParams.size > 0) {
    robots = 'noindex,follow';
    sitemapIncluded = false;
    trace.push(`  ✓ Unstable params present → noindex,follow`);
    trace.push(`  ✓ Excluded from sitemap`);
  } else if (evaluated.searchParams.size > 0) {
    robots = 'noindex,follow';
    sitemapIncluded = false;
    trace.push(`  ✓ Search params present → noindex,follow`);
    trace.push(`  ✓ Excluded from sitemap`);
  } else {
    trace.push(`  No unstable/search params`);
  }
  trace.push('');

  trace.push(`Step 6: Check robots.txt blocking`);
  const robotsCheck = checkRobotsBlocking(pathname, searchParams, config);
  if (robotsCheck.isBlocked) {
    blockInRobots = true;
    sitemapIncluded = false;
    trace.push(`  ✓ Blocked by robots.txt`);
    for (const rule of robotsCheck.matchedRules) {
      trace.push(`    → ${rule}`);
    }
    if (robotsCheck.warnings.length > 0) {
      warnings.push(...robotsCheck.warnings);
    }
  } else {
    trace.push(`  Not blocked by robots.txt`);
  }
  trace.push('');

  trace.push(`Step 7: Build canonical URL`);
  let finalPath = normalizedPath;
  const canonicalParams = new URLSearchParams();

  for (const [key, value] of evaluated.stableParams.entries()) {
    const rule = getParamRule(key, config);
    if (rule?.mapToPath) {
      const mapped = rule.mapToPath({ pathname: normalizedPath, params: searchParams });
      if (mapped && !mapped.includes(finalPath)) {
        finalPath = mapped;
        trace.push(`  Mapped "${key}=${value}" → ${finalPath}`);
      } else {
        canonicalParams.set(key, value);
        trace.push(`  Kept stable param: ${key}=${value}`);
      }
    } else {
      canonicalParams.set(key, value);
      trace.push(`  Kept stable param: ${key}=${value}`);
    }
  }

  if (evaluated.unstableParams.size > 0) {
    trace.push(`  Dropped unstable params: ${Array.from(evaluated.unstableParams.keys()).join(', ')}`);
  }

  if (evaluated.blockedParams.size > 0) {
    trace.push(`  Dropped blocked params: ${Array.from(evaluated.blockedParams.keys()).join(', ')}`);
  }

  if (evaluated.searchParams.size > 0) {
    for (const [key, value] of evaluated.searchParams.entries()) {
      canonicalParams.set(key, value);
      trace.push(`  Kept search param: ${key}=${value}`);
    }
  }

  if (evaluated.pagination.isPaginated) {
    if (config.pagination.canonicalStrategy === 'self') {
      const pageNumber = evaluated.pagination.pageNumber;
      canonicalParams.set(config.pagination.param, pageNumber.toString());
      trace.push(`  Kept pagination (self-canonical): ${config.pagination.param}=${pageNumber}`);
    } else {
      trace.push(`  Dropped pagination (base-canonical strategy)`);
    }
  }

  const queryString = canonicalParams.toString();
  const fullCanonical = baseUrl + finalPath + (queryString ? '?' + queryString : '');
  trace.push(`  Final canonical: ${fullCanonical}`);
  trace.push('');

  trace.push(`Step 8: Determine sitemap inclusion`);
  if (sitemapIncluded) {
    trace.push(`  ✓ Included in sitemap (indexable + not blocked)`);
  } else {
    const reasons = [];
    if (robots.includes('noindex')) reasons.push('noindex');
    if (blockInRobots) reasons.push('robots blocked');
    trace.push(`  ✗ Excluded from sitemap (${reasons.join(', ')})`);
  }
  trace.push('');

  trace.push(`═══ FINAL RESULTS ═══`);
  trace.push(`Canonical URL: ${fullCanonical}`);
  trace.push(`Robots: ${robots}`);
  trace.push(`Blocked by robots.txt: ${blockInRobots ? 'YES' : 'NO'}`);
  trace.push(`Sitemap inclusion: ${sitemapIncluded ? 'INCLUDED' : 'EXCLUDED'}`);

  if (robots.includes('noindex')) {
    trace.push('');
    trace.push(`ℹ️  This page uses noindex to consolidate signals to the canonical`);
    trace.push(`   while allowing crawlers to discover and follow links.`);
  }

  if (blockInRobots && robots.includes('noindex')) {
    warnings.push('This URL is both noindex and blocked by robots.txt. Relying on robots.txt alone for canonical consolidation is risky - noindex provides the primary signal.');
  }

  return {
    canonical: fullCanonical,
    robots,
    blockInRobots,
    robotsMatchedRules: robotsCheck.matchedRules,
    warnings,
    trace,
    sitemapIncluded,
  };
}

export function detectCanonicalLoop(canonical: string, maxDepth: number = 5): { isLoop: boolean; chain: string[] } {
  const chain = [canonical];
  return { isLoop: false, chain };
}
