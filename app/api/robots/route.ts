import { NextResponse } from 'next/server';
import { generateRobotsTxt } from '@/lib/rules/robots';
import { getServerConfig } from '@/lib/config/server';

export async function GET() {
  const config = getServerConfig();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const robotsTxt = generateRobotsTxt(config, baseUrl);

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
