export type ParamPolicy = 'stable' | 'unstable' | 'blocked' | 'pagination' | 'search';

export type RobotsDirective = 'index,follow' | 'noindex,follow' | 'noindex,nofollow';

export interface ParamRule {
  name: string;
  policy: ParamPolicy;
  description: string;
  explanation: string;  // Educational explanation of WHY this policy
  mapToPath?: (ctx: { pathname: string; params: URLSearchParams }) => string | null;
  comboOverrides?: Array<{
    when: (ctx: { pathname: string; params: URLSearchParams }) => boolean;
    robots?: RobotsDirective;
    canonicalTo?: (ctx: { pathname: string; params: URLSearchParams }) => string;
    blockInRobotsTxt?: boolean;
  }>;
}

export interface PaginationPolicy {
  param: string;
  pageOneIndexable: boolean;
  pageTwoPlus: RobotsDirective;
  canonicalStrategy: 'self' | 'base';
}

export interface RobotsToggle {
  enabled: boolean;
  label: string;
  description: string;
  explanation: string;  // WHY this rule exists or doesn't
  rules: string[];
}

export interface ParamConfig {
  rules: ParamRule[];
  pagination: PaginationPolicy;
  robotsToggles?: Record<string, RobotsToggle>;
  demos: {
    blockPaginationInRobots: boolean;
    noindexSearch: boolean;
  };
}

// SEO Best Practices Configuration
// This configuration represents industry best practices for technical SEO
// All settings are static to demonstrate proper implementation
export const SEO_BEST_PRACTICES_CONFIG: ParamConfig = {
  rules: [
    {
      name: 'sort',
      policy: 'unstable',
      description: 'Sorting parameter',
      explanation: 'Sort changes presentation order without creating unique content. Using noindex,follow allows discovery of links while consolidating ranking signals to the canonical URL. This prevents index bloat (thousands of duplicate pages) while maintaining crawlability. Best practice: Never block sort in robots.txt as it prevents discovery of paginated content.',
    },
    {
      name: 'color',
      policy: 'stable',
      description: 'Color filter',
      explanation: 'Color creates distinct product subsets that users specifically search for ("blue shoes"). These pages should be indexed as they provide unique value. We map color to clean URL paths (e.g., /t-shirts/blue/) for better UX and SEO. Stable parameters are kept in the canonical URL and marked index,follow.',
      mapToPath: (ctx) => {
        if (ctx.pathname.match(/^\/catalog\/[^/]+\/?$/)) {
          const color = ctx.params.get('color');
          if (color) {
            return `${ctx.pathname.replace(/\/$/, '')}/${color}/`;
          }
        }
        return null;
      },
    },
    {
      name: 'size',
      policy: 'stable',
      description: 'Size filter',
      explanation: 'Like color, size represents a meaningful product attribute that users search for. "Size 10 running shoes" is a distinct search intent. These filtered views provide unique value and should be indexed. Keeping size in the canonical URL ensures proper indexation of these product subsets.',
    },
    {
      name: 'utm_source',
      policy: 'blocked',
      description: 'UTM tracking parameter',
      explanation: 'Tracking parameters create infinite duplicate URLs (same page from different marketing sources). These waste crawl budget and dilute ranking signals. Best practice: Strip from canonical URL and block in robots.txt to prevent crawling entirely. This saves resources and prevents duplicate content issues.',
    },
    {
      name: 'utm_medium',
      policy: 'blocked',
      description: 'UTM tracking parameter',
      explanation: 'Part of UTM tracking system. Same rationale as utm_source - prevents duplicate content from different marketing mediums (email, social, cpc, etc.). Blocking these parameters is essential for any site using marketing tracking.',
    },
    {
      name: 'utm_campaign',
      policy: 'blocked',
      description: 'UTM tracking parameter',
      explanation: 'Campaign identifiers can create hundreds of duplicate URLs for the same content. Blocking prevents search engines from crawling and indexing these variants, focusing crawl budget on actual content.',
    },
    {
      name: 'gclid',
      policy: 'blocked',
      description: 'Google Ads click identifier',
      explanation: 'Auto-appended by Google Ads for conversion tracking. Each click gets a unique ID, creating infinite duplicate URLs. Must be blocked to prevent massive duplicate content issues. Google understands this is a tracking param and expects it to be blocked.',
    },
    {
      name: 'fbclid',
      policy: 'blocked',
      description: 'Facebook click identifier',
      explanation: 'Similar to gclid but from Facebook/Meta ads. Auto-appended for tracking, creates unique URLs per click. Must be blocked to prevent duplicate content and crawl waste. Part of standard SEO hygiene for any site using Facebook ads.',
    },
  ],
  pagination: {
    param: 'page',
    pageOneIndexable: true,  // Page 1 is unique content
    pageTwoPlus: 'noindex,follow',  // Page 2+ consolidates to page 1 while allowing link following
    canonicalStrategy: 'self',  // Self-canonical for large catalogs (allows deep content discovery)
    // Explanation: Self-canonical strategy means each page canonicals to itself (page 2 → page 2)
    // This is best for large catalogs where page 2+ contains unique products not on page 1
    // Alternative: 'base' strategy (all pages canonical to page 1) works for small catalogs
    // We use noindex,follow on page 2+ to prevent low-quality thin pages in index
    // while still allowing Googlebot to discover product links
  },
  // robots.txt rules based on SEO best practices
  // Only enabled rules that prevent crawl waste without blocking content discovery
  robotsToggles: {
    protectedPaths: {
      enabled: true,
      label: 'Protected & System Paths',
      description: 'BEST PRACTICE: Block user-specific and system paths. Protects privacy and prevents indexing of non-content pages.',
      explanation: 'Account pages contain user-specific data that should never be indexed (privacy + duplicate content). Internal APIs are not content. We explicitly Allow robots/sitemap endpoints so they remain accessible.',
      rules: [
        'Disallow: /account/',
        'Disallow: /api/',
        'Allow: /api/robots',
        'Allow: /api/sitemap',
      ],
    },
    trackingParams: {
      enabled: true,
      label: 'Tracking & Session Parameters',
      description: 'BEST PRACTICE: Block URLs with tracking parameters to save crawl budget and prevent duplicate content.',
      explanation: 'Tracking parameters create infinite URL variations of the same content. Blocking in robots.txt prevents wasting crawl budget. This is essential for any site using marketing tracking or analytics.',
      rules: [
        'Disallow: /*?*utm_source=*',
        'Disallow: /*?*utm_medium=*',
        'Disallow: /*?*utm_campaign=*',
        'Disallow: /*?*gclid=*',
        'Disallow: /*?*fbclid=*',
        'Disallow: /*?*sid=*',
      ],
    },
    searchPages: {
      enabled: false,
      label: 'Internal Search Pages (Not Recommended)',
      description: 'NOT ENABLED: Prefer noindex,follow in meta robots instead of robots.txt blocking.',
      explanation: 'We do NOT block search pages in robots.txt because it prevents link discovery. Instead, we use noindex,follow meta robots tag on search pages. This allows Googlebot to find product links while not indexing the search results themselves.',
      rules: ['Disallow: /search'],
    },
    uiPrefs: {
      enabled: true,
      label: 'UI Preference Parameters',
      description: 'BEST PRACTICE: Block display preference parameters that create duplicate views of the same content.',
      explanation: 'View mode (grid/list) and items-per-page parameters create duplicate content without adding value. Blocking these focuses crawl budget on actual content variations.',
      rules: ['Disallow: /*?*view=*', 'Disallow: /*?*per_page=*'],
    },
    calendarPattern: {
      enabled: true,
      label: 'Calendar Date Parameters',
      description: 'BEST PRACTICE: Prevent crawling infinite date combinations in calendar interfaces.',
      explanation: 'Date parameters can create infinite URLs (every possible date combination). Blocking these patterns prevents crawl traps. This is especially important for event calendars, booking systems, etc.',
      rules: ['Disallow: /calendar/*?date=*'],
    },
    sortBlocking: {
      enabled: false,
      label: 'Sort Parameter Blocking (NOT RECOMMENDED)',
      description: 'NOT ENABLED: Blocking sort prevents discovery. We use noindex,follow instead.',
      explanation: 'This demonstrates why NOT to block sort in robots.txt. Blocking would prevent Googlebot from discovering products on page 2, 3, etc. when sort is applied. We use noindex,follow meta robots instead, which consolidates signals while maintaining discoverability.',
      rules: ['Disallow: /*?*sort=*'],
    },
    stackedUnstableStable: {
      enabled: false,
      label: 'Stacked Parameter Blocking (NOT RECOMMENDED)',
      description: 'NOT ENABLED: May prevent discovery of valid facet combinations.',
      explanation: 'This shows an overly aggressive approach that could block valid URLs like /catalog?color=blue&sort=price. Better to handle via canonical tags and meta robots. Demonstrates the trade-off between crawl efficiency and content discovery.',
      rules: ['Disallow: /*?*sort=*&*color=*', 'Disallow: /*?*sort=*&*size=*'],
    },
  },
  demos: {
    blockPaginationInRobots: false,
    noindexSearch: true,
  },
};

export interface EvaluatedParams {
  stableParams: Map<string, string>;
  unstableParams: Map<string, string>;
  blockedParams: Map<string, string>;
  searchParams: Map<string, string>;
  pagination: {
    isPaginated: boolean;
    pageNumber: number;
  };
  notes: string[];
}

export function normalizeParamValue(value: string): string {
  if (!value) return value;

  if (value.includes(',')) {
    const parts = value.split(',').map(p => p.trim()).filter(Boolean);
    parts.sort();
    return parts.join(',');
  }

  return value;
}

export function evaluateParams(
  pathname: string,
  searchParams: URLSearchParams,
  config: ParamConfig
): EvaluatedParams {
  const stableParams = new Map<string, string>();
  const unstableParams = new Map<string, string>();
  const blockedParams = new Map<string, string>();
  const searchParamsMap = new Map<string, string>();
  const notes: string[] = [];

  const pageParam = searchParams.get(config.pagination.param);
  const pageNumber = pageParam ? parseInt(pageParam, 10) : 1;
  const isPaginated = pageNumber > 1;

  if (isPaginated) {
    notes.push(`Pagination detected: page ${pageNumber} (param: ${config.pagination.param})`);
  }

  const keys = Array.from(searchParams.keys());

  for (const key of keys) {
    if (key === config.pagination.param) {
      continue;
    }

    const value = searchParams.get(key) || '';
    const rule = config.rules.find((r) => r.name === key);

    if (!rule) {
      notes.push(`Unknown param "${key}" - treating as unstable`);
      unstableParams.set(key, value);
      continue;
    }

    const normalizedValue = normalizeParamValue(value);

    if (normalizedValue !== value && normalizedValue.includes(',')) {
      notes.push(`Param "${key}": multi-select normalized "${value}" → "${normalizedValue}"`);
    }

    notes.push(`Param "${key}": ${rule.policy} - ${rule.description}`);

    switch (rule.policy) {
      case 'stable':
        stableParams.set(key, normalizedValue);
        break;
      case 'unstable':
        unstableParams.set(key, normalizedValue);
        break;
      case 'blocked':
        blockedParams.set(key, normalizedValue);
        break;
      case 'search':
        searchParamsMap.set(key, normalizedValue);
        break;
      case 'pagination':
        break;
    }
  }

  if (unstableParams.size > 0) {
    notes.push(`Unstable params detected: ${Array.from(unstableParams.keys()).join(', ')} - will be dropped from canonical`);
  }

  if (blockedParams.size > 0) {
    notes.push(`Blocked params detected: ${Array.from(blockedParams.keys()).join(', ')} - will be stripped from canonical`);
  }

  if (searchParamsMap.size > 0) {
    notes.push(`Search params detected: ${Array.from(searchParamsMap.keys()).join(', ')} - page will be noindex,follow`);
  }

  return {
    stableParams,
    unstableParams,
    blockedParams,
    searchParams: searchParamsMap,
    pagination: { isPaginated, pageNumber },
    notes,
  };
}

export function getParamRule(paramName: string, config: ParamConfig): ParamRule | undefined {
  return config.rules.find((r) => r.name === paramName);
}

// Backwards compatibility: export as DEFAULT_PARAM_CONFIG
export const DEFAULT_PARAM_CONFIG = SEO_BEST_PRACTICES_CONFIG;
