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
  if (pathname.startsWith('/best-practices')) return 'SEO Best Practices | SEO Playground';
  if (pathname.startsWith('/shop') && !pathname.includes('/')) return 'Shop | SEO Playground';
  if (pathname.startsWith('/shop/t-shirts')) return 'T-Shirts | Shop | SEO Playground';
  if (pathname.startsWith('/shop/shoes')) return 'Shoes | Shop | SEO Playground';
  if (pathname.startsWith('/search')) return 'Search Results | SEO Playground';
  if (pathname.startsWith('/account/orders')) return 'My Orders | Account | SEO Playground';
  if (pathname.startsWith('/account/billing')) return 'Billing | Account | SEO Playground';
  if (pathname.startsWith('/about')) return 'About | SEO Playground';
  if (pathname.startsWith('/how-it-works')) return 'How It Works | SEO Playground';
  if (pathname.startsWith('/concepts')) return 'SEO Concepts | SEO Playground';
  if (pathname.startsWith('/dup-clinic')) return 'Duplication Clinic | SEO Playground';
  if (pathname.startsWith('/utm')) return 'UTM Demo | SEO Playground';

  return 'SEO Playground';
}

export function getDescriptionForPath(pathname: string): string {
  if (pathname === '/') return 'Interactive playground for learning technical SEO, URL management, and crawl control';
  if (pathname.startsWith('/best-practices')) return 'Configure parameter policies, robots rules, and canonical strategies';
  if (pathname.startsWith('/shop')) return 'Demo product shop showing SEO best practices for e-commerce sites';
  if (pathname.startsWith('/search')) return 'Search results demonstration with noindex policy';
  if (pathname.startsWith('/account')) return 'Protected account area demonstrating noindex and robots disallow';

  return 'Learn technical SEO through interactive demonstrations';
}
