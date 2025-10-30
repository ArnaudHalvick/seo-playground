import { NextResponse } from 'next/server';
import { generateSitemapEntries, generateSitemapXml } from '@/lib/rules/sitemap';
import { DEFAULT_PARAM_CONFIG } from '@/lib/rules/params';

export async function GET() {
  const entries = generateSitemapEntries(DEFAULT_PARAM_CONFIG);
  const sitemapXml = generateSitemapXml(entries);

  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
