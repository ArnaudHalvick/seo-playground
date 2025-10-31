import type { ParamConfig } from './params';
import { computeCanonical } from './canonical';

export interface SitemapEntry {
  loc: string;
  lastmod?: string;
  priority?: number;
  included: boolean;
  reason?: string;
}

export function generateSitemapEntries(config: ParamConfig, baseUrl: string = 'https://example.com'): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  const staticPages = [
    { path: '/', priority: 1.0 },
    { path: '/about/', priority: 0.8 },
    { path: '/how-it-works/', priority: 0.8 },
    { path: '/concepts/', priority: 0.8 },
    { path: '/best-practices/', priority: 0.9 },
    { path: '/catalog/', priority: 0.9 },
    { path: '/catalog/t-shirts/', priority: 0.8 },
  ];

  for (const page of staticPages) {
    const result = computeCanonical(page.path, new URLSearchParams(), config, baseUrl);
    const isIndexable = result.robots === 'index,follow' && !result.blockInRobots;

    entries.push({
      loc: result.canonical,
      lastmod: new Date().toISOString().split('T')[0],
      priority: page.priority,
      included: isIndexable,
      reason: isIndexable ? 'Indexable page (index,follow)' : `Excluded: ${result.robots}${result.blockInRobots ? ' + robots blocked' : ''}`,
    });
  }

  const stableFacetPages = [
    { params: 'color=black', label: 'Color facet' },
    { params: 'size=m', label: 'Size facet' },
    { params: 'color=black&size=m', label: 'Multiple stable facets' },
  ];

  for (const facet of stableFacetPages) {
    const params = new URLSearchParams(facet.params);
    const result = computeCanonical('/catalog/t-shirts/', params, config, baseUrl);
    const isIndexable = result.robots === 'index,follow' && !result.blockInRobots;

    entries.push({
      loc: result.canonical,
      lastmod: new Date().toISOString().split('T')[0],
      priority: 0.7,
      included: isIndexable,
      reason: isIndexable ? `${facet.label} - indexable` : `Excluded: ${result.robots}${result.blockInRobots ? ' + robots blocked' : ''}`,
    });
  }

  const searchPage = computeCanonical('/search/', new URLSearchParams(), config, baseUrl);
  entries.push({
    loc: searchPage.canonical,
    included: false,
    reason: `Search page excluded: ${searchPage.robots}`,
  });

  const accountPages = ['/account/orders/', '/account/billing/'];
  for (const path of accountPages) {
    const result = computeCanonical(path, new URLSearchParams(), config, baseUrl);
    entries.push({
      loc: result.canonical,
      included: false,
      reason: `Protected route excluded: ${result.robots}${result.blockInRobots ? ' + robots blocked' : ''}`,
    });
  }

  const page2Params = new URLSearchParams();
  page2Params.set(config.pagination.param, '2');
  const page2Result = computeCanonical('/catalog/t-shirts/', page2Params, config, baseUrl);
  entries.push({
    loc: page2Result.canonical,
    included: false,
    reason: `Page 2+ excluded: ${page2Result.robots} (noindex)`,
  });

  const sortParams = new URLSearchParams();
  sortParams.set('sort', 'price_desc');
  const sortResult = computeCanonical('/catalog/t-shirts/', sortParams, config, baseUrl);
  entries.push({
    loc: sortResult.canonical,
    included: false,
    reason: `Unstable param page excluded: ${sortResult.robots} (noindex)`,
  });

  const stackedParams = new URLSearchParams();
  stackedParams.set('sort', 'price_desc');
  stackedParams.set('color', 'black');
  const stackedResult = computeCanonical('/catalog/t-shirts/', stackedParams, config, baseUrl);
  const stackedIsIndexable = stackedResult.robots === 'index,follow' && !stackedResult.blockInRobots;
  entries.push({
    loc: stackedResult.canonical,
    included: stackedIsIndexable,
    reason: stackedIsIndexable
      ? 'Canonical resolves to stable facet page (indexable)'
      : `Stacked param page excluded: ${stackedResult.robots} (noindex)`,
  });

  return entries;
}

export function generateSitemapXml(entries: SitemapEntry[]): string {
  const includedEntries = entries.filter((e) => e.included);

  const lines: string[] = [];
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

  for (const entry of includedEntries) {
    lines.push('  <url>');
    lines.push(`    <loc>${entry.loc}</loc>`);
    if (entry.lastmod) {
      lines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
    }
    if (entry.priority) {
      lines.push(`    <priority>${entry.priority}</priority>`);
    }
    lines.push('  </url>');
  }

  lines.push('</urlset>');

  return lines.join('\n');
}
