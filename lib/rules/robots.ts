import type { ParamConfig } from './params';

export interface RobotsRule {
  userAgent: string;
  disallow: string[];
  allow: string[];
}

export interface RobotsMatchResult {
  isBlocked: boolean;
  matchedRules: string[];
  warnings: string[];
}

export function generateRobotsTxt(config: ParamConfig, baseUrl: string = 'https://example.com'): string {
  const lines: string[] = [];
  lines.push('User-agent: *');
  lines.push('');

  const toggles = config.robotsToggles || {};

  if (toggles.protectedPaths?.enabled && Array.isArray(toggles.protectedPaths.rules)) {
    lines.push(`# ${toggles.protectedPaths.label}`);
    lines.push(`# ${toggles.protectedPaths.description}`);
    lines.push(...toggles.protectedPaths.rules);
    lines.push('');
  }

  if (toggles.trackingParams?.enabled && Array.isArray(toggles.trackingParams.rules)) {
    lines.push(`# ${toggles.trackingParams.label}`);
    lines.push(`# ${toggles.trackingParams.description}`);
    lines.push(...toggles.trackingParams.rules);
    lines.push('');
  }

  if (toggles.searchPages?.enabled && Array.isArray(toggles.searchPages.rules)) {
    lines.push(`# ${toggles.searchPages.label}`);
    lines.push(`# ${toggles.searchPages.description}`);
    lines.push(...toggles.searchPages.rules);
    lines.push('');
  }

  if (toggles.uiPrefs?.enabled && Array.isArray(toggles.uiPrefs.rules)) {
    lines.push(`# ${toggles.uiPrefs.label}`);
    lines.push(`# ${toggles.uiPrefs.description}`);
    lines.push(...toggles.uiPrefs.rules);
    lines.push('');
  }

  if (toggles.calendarPattern?.enabled && Array.isArray(toggles.calendarPattern.rules)) {
    lines.push(`# ${toggles.calendarPattern.label}`);
    lines.push(`# ${toggles.calendarPattern.description}`);
    lines.push(...toggles.calendarPattern.rules);
    lines.push('');
  }

  if (toggles.sortBlocking?.enabled && Array.isArray(toggles.sortBlocking.rules)) {
    lines.push(`# ${toggles.sortBlocking.label}`);
    lines.push(`# ${toggles.sortBlocking.description}`);
    lines.push(...toggles.sortBlocking.rules);
    lines.push('');
  }

  if (toggles.stackedUnstableStable?.enabled && Array.isArray(toggles.stackedUnstableStable.rules)) {
    lines.push(`# ${toggles.stackedUnstableStable.label}`);
    lines.push(`# ${toggles.stackedUnstableStable.description}`);
    lines.push(...toggles.stackedUnstableStable.rules);
    lines.push('');
  }

  lines.push(`Sitemap: ${baseUrl}/api/sitemap`);

  return lines.join('\n');
}

function matchesPattern(url: string, pattern: string): boolean {
  const regexPattern = pattern
    .replace(/\*/g, '.*')
    .replace(/\?/g, '\\?')
    .replace(/\./g, '\\.');

  const regex = new RegExp(`^${regexPattern}$`);
  return regex.test(url);
}

export function checkRobotsBlocking(
  pathname: string,
  searchParams: URLSearchParams,
  config: ParamConfig
): RobotsMatchResult {
  const fullUrl = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
  const matchedRules: string[] = [];
  const warnings: string[] = [];
  let isBlocked = false;

  const toggles = config.robotsToggles || {};

  if (toggles.protectedPaths?.enabled) {
    if (pathname.startsWith('/account/')) {
      matchedRules.push('Protected & System Paths: Disallow /account/');
      isBlocked = true;
    }
    if (pathname.startsWith('/api/') && pathname !== '/api/robots' && pathname !== '/api/sitemap') {
      matchedRules.push('Protected & System Paths: Disallow /api/');
      isBlocked = true;
    }
  }

  if (toggles.trackingParams?.enabled) {
    const trackingParams = ['utm_source', 'utm_medium', 'utm_campaign', 'gclid', 'fbclid', 'sid'];
    for (const param of trackingParams) {
      if (searchParams.has(param)) {
        matchedRules.push(`Tracking Parameters: Disallow /*?*${param}=*`);
        isBlocked = true;
      }
    }
  }

  if (toggles.searchPages?.enabled) {
    if (pathname.startsWith('/search')) {
      matchedRules.push('Internal Search Pages: Disallow /search');
      isBlocked = true;
      warnings.push('Note: Blocking search pages entirely prevents discovery. Consider using noindex,follow instead.');
    }
  }

  if (toggles.uiPrefs?.enabled) {
    if (searchParams.has('view') || searchParams.has('per_page')) {
      const blocked = [];
      if (searchParams.has('view')) blocked.push('view');
      if (searchParams.has('per_page')) blocked.push('per_page');
      matchedRules.push(`UI Preference Parameters: Disallow /*?*${blocked.join('|')}=*`);
      isBlocked = true;
    }
  }

  if (toggles.sortBlocking?.enabled) {
    if (searchParams.has('sort')) {
      matchedRules.push('Sort Parameter Blocking: Disallow /*?*sort=*');
      isBlocked = true;
      warnings.push('Discovery risk: Blocking sort can prevent finding deeper paginated content. Use noindex,follow instead.');
    }
  }

  if (toggles.stackedUnstableStable?.enabled) {
    const hasSort = searchParams.has('sort');
    const hasColor = searchParams.has('color');
    const hasSize = searchParams.has('size');

    if (hasSort && (hasColor || hasSize)) {
      matchedRules.push('Stacked Unstable+Stable Blocking: Disallow /*?*sort=*&*color|size=*');
      isBlocked = true;
      warnings.push('Discovery risk: This rule may prevent finding stable facet pages. Signals should consolidate via canonical instead.');
    }
  }

  return {
    isBlocked,
    matchedRules,
    warnings,
  };
}

export function isBlockedByRobots(pathname: string, searchParams: URLSearchParams, config: ParamConfig): boolean {
  const result = checkRobotsBlocking(pathname, searchParams, config);
  return result.isBlocked;
}
