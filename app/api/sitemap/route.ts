import { NextResponse } from 'next/server';
import { generateSitemapEntries, generateSitemapXml } from '@/lib/rules/sitemap';
import { SEO_BEST_PRACTICES_CONFIG } from '@/lib/rules/params';

export async function GET() {
  const config = SEO_BEST_PRACTICES_CONFIG;
  const entries = generateSitemapEntries(config);
  const sitemapXml = generateSitemapXml(entries);

  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
