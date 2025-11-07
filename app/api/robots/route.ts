import { NextResponse } from 'next/server';
import { generateRobotsTxt } from '@/lib/rules/robots';
import { DEFAULT_PARAM_CONFIG } from '@/lib/rules/params';

export async function GET(request: Request) {
  // Get base URL from request headers
  const host = request.headers.get('host') || 'example.com';
  const protocol = request.headers.get('x-forwarded-proto') || 'http';
  const baseUrl = `${protocol}://${host}`;

  const robotsTxt = generateRobotsTxt(DEFAULT_PARAM_CONFIG, baseUrl);

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
