import type { ParamConfig } from './params';
import { computeCanonical } from './canonical';
import { getCategories } from '@/lib/catalog/data';

export interface SitemapEntry {
  loc: string;
  lastmod?: string;
  priority?: number;
  included: boolean;
  reason?: string;
}

type SitemapCandidate = {
  path: string;
  priority: number;
};

function parsePathAndParams(path: string, baseUrl: string): { pathname: string; searchParams: URLSearchParams } {
  const url = new URL(path, baseUrl);
  return {
    pathname: url.pathname,
    searchParams: url.searchParams,
  };
}

function generateShopUrls(): Array<SitemapCandidate> {
  const urls: Array<SitemapCandidate> = [];
  const categories = getCategories();
  const genders = ['women', 'men', 'girls', 'boys'];
  
  // Root shop
  urls.push({ path: '/shop/', priority: 0.9 });
  
  // For each category
  categories.forEach(category => {
    const categorySlug = category.slug;
    
    // Base category
    urls.push({ path: `/shop/${categorySlug}/`, priority: 0.7 });
    
    // Gender facets (all 4 genders for all categories)
    genders.forEach(gender => {
      urls.push({ 
        path: `/shop/${categorySlug}/for/${gender}/`, 
        priority: 0.6 
      });
    });
  });
  
  return urls;
}

export function generateSitemapEntries(config: ParamConfig, baseUrl: string = 'https://example.com'): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  // Main static pages (real content for SEO Workshop)
  const staticPages: SitemapCandidate[] = [
    { path: '/', priority: 1.0 },
    
    // Shop URLs generated dynamically
    ...generateShopUrls(),
    
    // Technical SEO Hub & Pages
    { path: '/technical-seo/', priority: 0.9 },
    { path: '/technical-seo/robots/', priority: 0.8 },
    { path: '/technical-seo/sitemap/', priority: 0.8 },
    { path: '/technical-seo/parameters/', priority: 0.8 },
    { path: '/technical-seo/duplicate-content/', priority: 0.8 },
    { path: '/technical-seo/pagination/', priority: 0.8 },
    { path: '/technical-seo/site-search/', priority: 0.8 },
    { path: '/technical-seo/site-architecture/', priority: 0.8 },
    { path: '/technical-seo/protected-routes/', priority: 0.8 },
    { path: '/technical-seo/international/', priority: 0.8 },
    { path: '/technical-seo/core-web-vitals/', priority: 0.8 },
    { path: '/technical-seo/product-urls/', priority: 0.8 },
    { path: '/technical-seo/pattern-gallery/', priority: 0.8 },
    { path: '/technical-seo/structured-data/', priority: 0.8 },
    { path: '/technical-seo/seo-dev-tools/', priority: 0.8 },
    
    // Strategic SEO Hub & Pages
    { path: '/strategic-seo/', priority: 0.9 },
    { path: '/strategic-seo/research-strategy/', priority: 0.8 },
    { path: '/strategic-seo/content-architecture/', priority: 0.8 },
    { path: '/strategic-seo/content-production/', priority: 0.8 },
    { path: '/strategic-seo/measurement-optimization/', priority: 0.8 },
    { path: '/strategic-seo/authority-building/', priority: 0.8 },
    { path: '/strategic-seo/strategic-tools/', priority: 0.8 },
    { path: '/strategic-seo/resources/', priority: 0.8 },
  ];

  // Inclusion rule: only emit URLs that the rules engine marks indexable and not robots-blocked.
  for (const page of staticPages) {
    const { pathname, searchParams } = parsePathAndParams(page.path, baseUrl);
    const result = computeCanonical(pathname, searchParams, config, baseUrl);
    const isIndexable = result.robots === 'index,follow' && !result.blockInRobots;

    entries.push({
      loc: result.canonical,
      lastmod: new Date().toISOString().split('T')[0],
      priority: page.priority,
      included: isIndexable,
      reason: isIndexable ? 'Indexable page (index,follow)' : `Excluded: ${result.robots}${result.blockInRobots ? ' + robots blocked' : ''}`,
    });
  }

  // Sitemap Strategy (DYNAMIC GENERATION):
  // - Shop URLs generated dynamically from catalog data (getCategories)
  // - Base categories and gender facets only (clean, indexable URLs)
  // - All parameterized variants (filters, search, tracking, multi-select) are excluded up front
  //   and will also be rejected by computeCanonical due to noindex/robots rules
  // - Pagination can be added deliberately as candidates; computeCanonical decides indexability
  // - No combinatorial or educational param URLs are emitted

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
