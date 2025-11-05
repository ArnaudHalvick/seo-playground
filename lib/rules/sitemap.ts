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
    { path: '/shop/', priority: 0.9 },
    { path: '/shop/t-shirts/', priority: 0.8 },
    { path: '/shop/shoes/', priority: 0.8 },
    { path: '/robots/', priority: 0.8 },
    { path: '/sitemap/', priority: 0.8 },
    { path: '/parameters/', priority: 0.8 },
    { path: '/duplicate-content/', priority: 0.8 },
    { path: '/pagination/', priority: 0.8 },
    { path: '/site-search/', priority: 0.8 },
    { path: '/site-architecture/', priority: 0.8 },
    { path: '/protected-routes/', priority: 0.8 },
    { path: '/international/', priority: 0.8 },
    { path: '/pattern-gallery/', priority: 0.8 },
    { path: '/structured-data/', priority: 0.8 },
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

  // Gender clean paths (stable, indexable)
  const genderPages = [
    { category: 't-shirts', gender: 'women' },
    { category: 't-shirts', gender: 'men' },
    { category: 't-shirts', gender: 'girls' },
    { category: 't-shirts', gender: 'boys' },
    { category: 'shoes', gender: 'women' },
    { category: 'shoes', gender: 'men' },
    { category: 'shoes', gender: 'girls' },
    { category: 'shoes', gender: 'boys' },
  ];

  for (const genderPage of genderPages) {
    const result = computeCanonical(`/shop/${genderPage.category}/for/${genderPage.gender}/`, new URLSearchParams(), config, baseUrl);
    const isIndexable = result.robots === 'index,follow' && !result.blockInRobots;

    entries.push({
      loc: result.canonical,
      lastmod: new Date().toISOString().split('T')[0],
      priority: 0.8,
      included: isIndexable,
      reason: isIndexable ? `Gender clean path - indexable` : `Excluded: ${result.robots}${result.blockInRobots ? ' + robots blocked' : ''}`,
    });
  }

  // Color clean paths (stable, indexable)
  const colorPages = [
    { category: 't-shirts', color: 'black' },
    { category: 't-shirts', color: 'blue' },
    { category: 't-shirts', color: 'white' },
    { category: 'shoes', color: 'black' },
    { category: 'shoes', color: 'white' },
    { category: 'shoes', color: 'brown' },
  ];

  for (const colorPage of colorPages) {
    const result = computeCanonical(`/shop/${colorPage.category}/color/${colorPage.color}/`, new URLSearchParams(), config, baseUrl);
    const isIndexable = result.robots === 'index,follow' && !result.blockInRobots;

    entries.push({
      loc: result.canonical,
      lastmod: new Date().toISOString().split('T')[0],
      priority: 0.7,
      included: isIndexable,
      reason: isIndexable ? `Color clean path - indexable` : `Excluded: ${result.robots}${result.blockInRobots ? ' + robots blocked' : ''}`,
    });
  }

  // Size clean paths (stable, indexable) - sampling key sizes
  const sizePages = [
    { category: 't-shirts', size: 'M' },
    { category: 't-shirts', size: 'L' },
    { category: 'shoes', size: '10' },
    { category: 'shoes', size: '11' },
  ];

  for (const sizePage of sizePages) {
    const result = computeCanonical(`/shop/${sizePage.category}/size/${sizePage.size}/`, new URLSearchParams(), config, baseUrl);
    const isIndexable = result.robots === 'index,follow' && !result.blockInRobots;

    entries.push({
      loc: result.canonical,
      lastmod: new Date().toISOString().split('T')[0],
      priority: 0.7,
      included: isIndexable,
      reason: isIndexable ? `Size clean path - indexable` : `Excluded: ${result.robots}${result.blockInRobots ? ' + robots blocked' : ''}`,
    });
  }

  const stableFacetPages = [
    { params: 'color=black', label: 'Color facet' },
    { params: 'size=m', label: 'Size facet' },
    { params: 'color=black&size=m', label: 'Multiple stable facets' },
  ];

  for (const facet of stableFacetPages) {
    const params = new URLSearchParams(facet.params);
    const result = computeCanonical('/shop/t-shirts/', params, config, baseUrl);
    const isIndexable = result.robots === 'index,follow' && !result.blockInRobots;

    entries.push({
      loc: result.canonical,
      lastmod: new Date().toISOString().split('T')[0],
      priority: 0.7,
      included: isIndexable,
      reason: isIndexable ? `${facet.label} - indexable` : `Excluded: ${result.robots}${result.blockInRobots ? ' + robots blocked' : ''}`,
    });
  }


  const page2Params = new URLSearchParams();
  page2Params.set(config.pagination.param, '2');
  const page2Result = computeCanonical('/shop/t-shirts/', page2Params, config, baseUrl);
  entries.push({
    loc: page2Result.canonical,
    included: false,
    reason: `Page 2+ excluded: ${page2Result.robots} (noindex)`,
  });

  const sortParams = new URLSearchParams();
  sortParams.set('sort', 'price_desc');
  const sortResult = computeCanonical('/shop/t-shirts/', sortParams, config, baseUrl);
  entries.push({
    loc: sortResult.canonical,
    included: false,
    reason: `Unstable param page excluded: ${sortResult.robots} (noindex)`,
  });

  const stackedParams = new URLSearchParams();
  stackedParams.set('sort', 'price_desc');
  stackedParams.set('color', 'black');
  const stackedResult = computeCanonical('/shop/t-shirts/', stackedParams, config, baseUrl);
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
