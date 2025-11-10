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

  // Main static pages (real content for SEO Workshop)
  const staticPages = [
    { path: '/', priority: 1.0 },
    { path: '/shop/', priority: 0.9 },
    
    // Shop categories and clean path facets
    { path: '/shop/t-shirts/', priority: 0.7 },
    { path: '/shop/shoes/', priority: 0.7 },
    { path: '/shop/t-shirts/for/women/', priority: 0.6 },
    { path: '/shop/t-shirts/for/men/', priority: 0.6 },
    { path: '/shop/t-shirts/for/girls/', priority: 0.6 },
    { path: '/shop/t-shirts/for/boys/', priority: 0.6 },
    { path: '/shop/shoes/for/women/', priority: 0.6 },
    { path: '/shop/shoes/for/men/', priority: 0.6 },
    { path: '/shop/t-shirts/color/black/', priority: 0.5 },
    { path: '/shop/t-shirts/color/blue/', priority: 0.5 },
    { path: '/shop/t-shirts/color/white/', priority: 0.5 },
    { path: '/shop/t-shirts/color/red/', priority: 0.5 },
    { path: '/shop/t-shirts/color/green/', priority: 0.5 },
    { path: '/shop/t-shirts/size/S/', priority: 0.5 },
    { path: '/shop/t-shirts/size/M/', priority: 0.5 },
    { path: '/shop/t-shirts/size/L/', priority: 0.5 },
    
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
    { path: '/strategic-seo/tools/', priority: 0.8 },
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

  // Note: Parameter-based shop URLs (e.g., ?color=black) are excluded per parameter policy
  // Only clean paths and root pages are included to demonstrate best practices

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
