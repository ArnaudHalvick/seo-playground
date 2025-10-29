export type ParamPolicy = 'stable' | 'unstable' | 'blocked' | 'pagination' | 'search';

export type RobotsDirective = 'index,follow' | 'noindex,follow' | 'noindex,nofollow';

export interface ParamRule {
  name: string;
  policy: ParamPolicy;
  description: string;
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

export const DEFAULT_PARAM_CONFIG: ParamConfig = {
  rules: [
    {
      name: 'sort',
      policy: 'unstable',
      description: 'Sorting changes order only; no unique value.',
    },
    {
      name: 'color',
      policy: 'stable',
      description: 'Color is a meaningful facet worth indexing.',
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
      description: 'Size is a meaningful attribute worth indexing.',
    },
    {
      name: 'utm_source',
      policy: 'blocked',
      description: 'Tracking parameter; strip from canonical and block in robots.',
    },
    {
      name: 'utm_medium',
      policy: 'blocked',
      description: 'Tracking parameter; strip from canonical and block in robots.',
    },
    {
      name: 'utm_campaign',
      policy: 'blocked',
      description: 'Tracking parameter; strip from canonical and block in robots.',
    },
    {
      name: 'gclid',
      policy: 'blocked',
      description: 'Google Click ID tracking parameter.',
    },
    {
      name: 'fbclid',
      policy: 'blocked',
      description: 'Facebook Click ID tracking parameter.',
    },
  ],
  pagination: {
    param: 'page',
    pageOneIndexable: true,
    pageTwoPlus: 'noindex,follow',
    canonicalStrategy: 'self',
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
