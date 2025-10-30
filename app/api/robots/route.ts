import { NextResponse } from 'next/server';
import { generateRobotsTxt } from '@/lib/rules/robots';
import { DEFAULT_PARAM_CONFIG } from '@/lib/rules/params';

export async function GET() {
  const robotsTxt = generateRobotsTxt(DEFAULT_PARAM_CONFIG);

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
