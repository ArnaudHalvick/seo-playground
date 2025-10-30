import { NextResponse } from 'next/server';
import { generateRobotsTxt } from '@/lib/rules/robots';
import { SEO_BEST_PRACTICES_CONFIG } from '@/lib/rules/params';

export async function GET() {
  const config = SEO_BEST_PRACTICES_CONFIG;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const robotsTxt = generateRobotsTxt(config, baseUrl);

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
