import type { ParamConfig } from './params';
import { computeCanonical } from './canonical';
import { getCategories, getAvailableColors, getAvailableSizes } from '@/lib/catalog/data';

export interface SitemapEntry {
  loc: string;
  lastmod?: string;
  priority?: number;
  included: boolean;
  reason?: string;
}

function generateShopUrls(): Array<{ path: string; priority: number }> {
  const urls: Array<{ path: string; priority: number }> = [];
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
    
    // Educational: Single-param URLs (colors)
    const colors = getAvailableColors(categorySlug);
    colors.forEach(color => {
      urls.push({ 
        path: `/shop/${categorySlug}?color=${color}`, 
        priority: 0.5 
      });
    });
    
    // Educational: Single-param URLs (sizes)
    const sizes = getAvailableSizes(categorySlug);
    sizes.forEach(size => {
      urls.push({ 
        path: `/shop/${categorySlug}?size=${size}`, 
        priority: 0.5 
      });
    });
  });
  
  return urls;
}

export function generateSitemapEntries(config: ParamConfig, baseUrl: string = 'https://example.com'): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  // Main static pages (real content for SEO Workshop)
  const staticPages = [
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

  // Sitemap Strategy (DYNAMIC GENERATION):
  // - Shop URLs generated dynamically from catalog data (getCategories, getAvailableColors, getAvailableSizes)
  // - Base categories and all gender facets (4 per category) - always included
  // - Single-param URLs for ALL colors and sizes per category - included for educational purposes
  //   (shows that param approach works, with SEO Receipt recommending clean paths)
  // - Clean path URLs (/color/black/) - NOT included (exist as recommendations only, no generateMetadata)
  // - Gender + param combos - NOT included (would create combinatorial explosion)

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
