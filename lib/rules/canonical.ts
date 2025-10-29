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

  trace.push(`Input URL: ${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`);

  let normalizedPath = normalizePath(pathname);
  trace.push(`Normalized path: ${normalizedPath}`);

  const evaluated = evaluateParams(normalizedPath, searchParams, config);
  trace.push(...evaluated.notes);

  let finalPath = normalizedPath;
  const canonicalParams = new URLSearchParams();
  let robots: RobotsDirective = 'index,follow';
  let blockInRobots = false;

  if (evaluated.unstableParams.size > 0) {
    robots = 'noindex,follow';
    trace.push(`Unstable params present → setting robots to noindex,follow`);
    trace.push(`  → Unstable params dropped from canonical: ${Array.from(evaluated.unstableParams.keys()).join(', ')}`);
  }

  if (evaluated.searchParams.size > 0) {
    robots = 'noindex,follow';
    trace.push(`Search params present → setting robots to noindex,follow`);
    for (const [key, value] of evaluated.searchParams.entries()) {
      canonicalParams.set(key, value);
    }
  }

  for (const [key, value] of evaluated.stableParams.entries()) {
    const rule = getParamRule(key, config);
    if (rule?.mapToPath) {
      const mapped = rule.mapToPath({ pathname: normalizedPath, params: searchParams });
      if (mapped && !mapped.includes(finalPath)) {
        finalPath = mapped;
        trace.push(`Mapped stable param "${key}=${value}" to clean path: ${finalPath}`);
      } else {
        canonicalParams.set(key, value);
      }
    } else {
      canonicalParams.set(key, value);
    }
  }

  if (evaluated.blockedParams.size > 0) {
    blockInRobots = true;
    trace.push(`Blocked/tracking params present → will generate robots.txt disallow patterns`);
    trace.push(`  → Blocked params stripped: ${Array.from(evaluated.blockedParams.keys()).join(', ')}`);
  }

  if (evaluated.pagination.isPaginated) {
    const pageNumber = evaluated.pagination.pageNumber;

    if (config.pagination.canonicalStrategy === 'self') {
      canonicalParams.set(config.pagination.param, pageNumber.toString());
      trace.push(`Pagination: self-canonical strategy → keeping ?${config.pagination.param}=${pageNumber} in canonical`);
    } else {
      trace.push(`Pagination: base-canonical strategy → removing ?${config.pagination.param}=${pageNumber} from canonical`);
    }

    robots = config.pagination.pageTwoPlus;
    trace.push(`Page ${pageNumber} (page 2+) → applying robots: ${robots}`);
  }

  if (pathname.startsWith('/search')) {
    if (config.demos.noindexSearch) {
      robots = 'noindex,follow';
      trace.push(`Search page → applying noindex,follow policy`);
    }
  }

  if (pathname.startsWith('/account/')) {
    robots = 'noindex,nofollow';
    blockInRobots = true;
    trace.push(`Protected route (/account/) → noindex,nofollow + robots disallow`);
  }

  const queryString = canonicalParams.toString();
  const fullCanonical = baseUrl + finalPath + (queryString ? '?' + queryString : '');

  const robotsCheck = checkRobotsBlocking(pathname, searchParams, config);
  if (robotsCheck.isBlocked) {
    blockInRobots = true;
    trace.push(`🚫 BLOCKED BY ROBOTS.TXT`);
    for (const rule of robotsCheck.matchedRules) {
      trace.push(`  → Matched rule: ${rule}`);
    }
    warnings.push(...robotsCheck.warnings);
  }

  trace.push(`Final canonical URL: ${fullCanonical}`);
  trace.push(`Final robots directive: ${robots}`);

  if (robots.includes('noindex')) {
    trace.push(`⚠️ This page is NOINDEX - it won't appear in search results`);
    trace.push(`💡 noindex,follow consolidates signals to canonical while allowing link equity to flow`);
  }

  if (blockInRobots) {
    trace.push(`🤖 robots.txt blocks crawling of this URL`);
  }

  return {
    canonical: fullCanonical,
    robots,
    blockInRobots,
    robotsMatchedRules: robotsCheck.matchedRules,
    warnings,
    trace,
  };
}

export function detectCanonicalLoop(canonical: string, maxDepth: number = 5): { isLoop: boolean; chain: string[] } {
  const chain = [canonical];
  return { isLoop: false, chain };
}
