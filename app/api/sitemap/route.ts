import { NextResponse } from 'next/server';
import { generateSitemapEntries, generateSitemapXml } from '@/lib/rules/sitemap';
import { DEFAULT_PARAM_CONFIG } from '@/lib/rules/params';

export async function GET(request: Request) {
  // Get base URL from request headers
  const host = request.headers.get('host') || 'example.com';
  const protocol = request.headers.get('x-forwarded-proto') || 'http';
  const baseUrl = `${protocol}://${host}`;

  const entries = generateSitemapEntries(DEFAULT_PARAM_CONFIG, baseUrl);
  const sitemapXml = generateSitemapXml(entries);

  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
