import type { Metadata } from 'next';
import type { ParamConfig } from '../rules/params';
import { computeCanonical } from '../rules/canonical';

export interface MetadataContext {
  pathname: string;
  searchParams: URLSearchParams;
  config: ParamConfig;
  baseUrl?: string;
  title?: string;
  description?: string;
}

export function generatePageMetadata(ctx: MetadataContext): Metadata {
  const baseUrl = ctx.baseUrl || 'https://example.com';
  const result = computeCanonical(ctx.pathname, ctx.searchParams, ctx.config, baseUrl);

  const title = ctx.title || 'SEO Playground';
  const description = ctx.description || 'Learn technical SEO through interactive demonstrations';

  const metadata: Metadata = {
    title,
    description,
    robots: {
      index: result.robots.includes('index'),
      follow: result.robots.includes('follow'),
    },
    alternates: {
      canonical: result.canonical,
    },
  };

  return metadata;
}

export function getTitleForPath(pathname: string): string {
  if (pathname === '/') return 'SEO Robots & Parameters Playground';
  if (pathname.startsWith('/shop') && pathname === '/shop') return 'Shop | SEO Playground';
  if (pathname.startsWith('/shop/t-shirts')) return 'T-Shirts | Shop | SEO Playground';
  if (pathname.startsWith('/shop/shoes')) return 'Shoes | Shop | SEO Playground';
  if (pathname.startsWith('/robots')) return 'Robots.txt | SEO Playground';
  if (pathname.startsWith('/sitemap')) return 'Sitemap | SEO Playground';
  if (pathname.startsWith('/parameters')) return 'Parameters | SEO Playground';
  if (pathname.startsWith('/duplicate-content')) return 'Duplicate Content | SEO Playground';
  if (pathname.startsWith('/pagination')) return 'Pagination | SEO Playground';
  if (pathname.startsWith('/site-search')) return 'Site Search | SEO Playground';
  if (pathname.startsWith('/site-architecture')) return 'Site Architecture | SEO Playground';
  if (pathname.startsWith('/protected-routes')) return 'Protected Routes | SEO Playground';
  if (pathname.startsWith('/international')) return 'International SEO | SEO Playground';
  if (pathname.startsWith('/pattern-gallery')) return 'Pattern Gallery | SEO Playground';
  if (pathname.startsWith('/structured-data')) return 'Structured Data | SEO Playground';

  return 'SEO Playground';
}

export function getDescriptionForPath(pathname: string): string {
  if (pathname === '/') return 'Interactive playground for learning technical SEO, URL management, and crawl control';
  if (pathname.startsWith('/shop')) return 'Demo e-commerce catalog for learning SEO best practices. This is an educational demonstration, not a real online store.';
  if (pathname.startsWith('/robots')) return 'Learn robots.txt best practices and pattern-based crawl control';
  if (pathname.startsWith('/sitemap')) return 'Understand intelligent sitemap generation based on indexability rules';
  if (pathname.startsWith('/parameters')) return 'Explore URL parameter handling and canonical strategies';
  if (pathname.startsWith('/duplicate-content')) return 'Diagnose and fix duplicate content at its root cause';
  if (pathname.startsWith('/pagination')) return 'Best practices for pagination SEO and canonicalization';
  if (pathname.startsWith('/site-search')) return 'Site search SEO strategy with noindex,follow and crawl trap prevention';
  if (pathname.startsWith('/site-architecture')) return 'URL structure, hierarchy, and internal linking best practices';
  if (pathname.startsWith('/protected-routes')) return 'Protected routes and authentication page SEO strategy';
  if (pathname.startsWith('/international')) return 'International SEO: URL strategies, hreflang, and localization';
  if (pathname.startsWith('/pattern-gallery')) return 'Comprehensive reference of production-ready SEO patterns';
  if (pathname.startsWith('/structured-data')) return 'Schema.org educational overview for rich results';

  return 'Learn technical SEO through interactive demonstrations';
}
