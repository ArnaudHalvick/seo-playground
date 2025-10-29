import type { ParamConfig } from './params';

export interface RobotsRule {
  userAgent: string;
  disallow: string[];
  allow: string[];
}

export function generateRobotsTxt(config: ParamConfig, baseUrl: string = 'https://example.com'): string {
  const lines: string[] = [];

  lines.push('User-agent: *');
  lines.push('');

  lines.push('# Protected routes');
  lines.push('Disallow: /account/');
  lines.push('Disallow: /api/');
  lines.push('Allow: /api/robots');
  lines.push('Allow: /api/sitemap');
  lines.push('');

  const blockedParams = config.rules.filter((r) => r.policy === 'blocked');
  if (blockedParams.length > 0) {
    lines.push('# Tracking parameters');
    for (const param of blockedParams) {
      lines.push(`Disallow: /*?*${param.name}=*`);
    }
    lines.push('');
  }

  if (config.demos.blockPaginationInRobots) {
    lines.push('# Pagination (DEMO: BAD PRACTICE - blocks discovery!)');
    lines.push(`Disallow: /*?*${config.pagination.param}=*`);
    lines.push('');
  }

  const unstableParams = config.rules.filter((r) => r.policy === 'unstable');
  if (unstableParams.length > 0 && config.demos.blockPaginationInRobots) {
    lines.push('# Unstable parameter combinations (optional)');
    for (const param of unstableParams) {
      lines.push(`# Disallow: /*?*${param.name}=*`);
    }
    lines.push('');
  }

  lines.push(`Sitemap: ${baseUrl}/api/sitemap`);

  return lines.join('\n');
}

export function isBlockedByRobots(pathname: string, searchParams: URLSearchParams, config: ParamConfig): boolean {
  if (pathname.startsWith('/account/')) return true;
  if (pathname.startsWith('/api/') && pathname !== '/api/robots' && pathname !== '/api/sitemap') return true;

  const keys = Array.from(searchParams.keys());
  for (const key of keys) {
    const rule = config.rules.find((r) => r.name === key);
    if (rule && rule.policy === 'blocked') return true;
  }

  if (config.demos.blockPaginationInRobots) {
    if (searchParams.has(config.pagination.param)) return true;
  }

  return false;
}
