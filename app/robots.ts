import { MetadataRoute } from 'next';
import { getServerConfig } from '@/lib/config/server';
import { generateRobotsTxt } from '@/lib/rules/robots';

export default function robots(): MetadataRoute.Robots {
  const config = getServerConfig();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const robotsTxt = generateRobotsTxt(config, baseUrl);

  const lines = robotsTxt.split('\n').filter(line => line.trim());
  const rules: MetadataRoute.Robots['rules'] = [];
  const sitemap: string[] = [];

  let currentUserAgent = '*';
  const allow: string[] = [];
  const disallow: string[] = [];

  for (const line of lines) {
    if (line.startsWith('User-agent:')) {
      currentUserAgent = line.replace('User-agent:', '').trim();
    } else if (line.startsWith('Disallow:')) {
      const path = line.replace('Disallow:', '').trim();
      if (path) disallow.push(path);
    } else if (line.startsWith('Allow:')) {
      const path = line.replace('Allow:', '').trim();
      if (path) allow.push(path);
    } else if (line.startsWith('Sitemap:')) {
      const sitemapUrl = line.replace('Sitemap:', '').trim();
      if (sitemapUrl) sitemap.push(sitemapUrl);
    }
  }

  rules.push({
    userAgent: currentUserAgent,
    allow: allow.length > 0 ? allow : undefined,
    disallow: disallow.length > 0 ? disallow : undefined,
  });

  return {
    rules,
    sitemap: sitemap.length > 0 ? sitemap : undefined,
  };
}
