import { NextResponse } from 'next/server';
import { generateSitemapEntries, generateSitemapXml } from '@/lib/rules/sitemap';
import { getServerConfig } from '@/lib/config/server';

export async function GET() {
  const config = getServerConfig();
  const entries = generateSitemapEntries(config);
  const sitemapXml = generateSitemapXml(entries);

  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
