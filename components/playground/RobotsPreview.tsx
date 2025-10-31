'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { FileCode, CheckCircle2, Info, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert';
import { Badge } from '../ui/badge';

export function RobotsPreview() {
  const bestPracticeRobotsTxt = `# robots.txt - Best Practice Example
# Generated for SEO demonstration purposes

User-agent: *

# Allow important SEO endpoints
Allow: /api/robots
Allow: /api/sitemap

# Block private and system areas
Disallow: /account/
Disallow: /api/

# Block tracking parameters to prevent crawl waste
# These create duplicate content with no SEO value
Disallow: /*?*utm_source=*
Disallow: /*?*utm_medium=*
Disallow: /*?*utm_campaign=*
Disallow: /*?*gclid=*
Disallow: /*?*fbclid=*
Disallow: /*?*sid=*

# Block UI preference parameters
# These explode crawl space without adding value
Disallow: /*?*view=*
Disallow: /*?*per_page=*

# Block numeric range filters
# These create infinite URL combinations
Disallow: /*?*price_min=*
Disallow: /*?*price_max=*

# Block calendar date patterns
# Prevents infinite date combinations
Disallow: /calendar/*?date=*

# Sitemap location
Sitemap: https://example.com/api/sitemap`;

  const rules = [
    {
      title: 'Protected & System Paths',
      icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
      type: 'good',
      description: 'Block account pages and internal APIs while explicitly allowing robots/sitemap endpoints.',
      rules: [
        'Allow: /api/robots',
        'Allow: /api/sitemap',
        'Disallow: /account/',
        'Disallow: /api/',
      ],
      explanation: 'Private user data and system APIs should never be crawled. Use explicit Allow rules for public API endpoints before broader Disallow patterns.'
    },
    {
      title: 'Tracking & Session Parameters',
      icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
      type: 'good',
      description: 'Block URLs with tracking parameters to prevent crawl waste and duplicate content.',
      rules: [
        'Disallow: /*?*utm_source=*',
        'Disallow: /*?*utm_medium=*',
        'Disallow: /*?*utm_campaign=*',
        'Disallow: /*?*gclid=*',
        'Disallow: /*?*fbclid=*',
        'Disallow: /*?*sid=*',
      ],
      explanation: 'Marketing tracking parameters create massive duplicate content. Blocking them saves crawl budget while canonical tags handle any leaked URLs.'
    },
    {
      title: 'UI Preference Parameters',
      icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
      type: 'good',
      description: 'Block view modes and pagination size to prevent explosive URL growth.',
      rules: [
        'Disallow: /*?*view=*',
        'Disallow: /*?*per_page=*',
      ],
      explanation: 'Parameters like view=grid/list or per_page=20/50/100 create unnecessary URL variants that waste crawl budget without adding unique content.'
    },
    {
      title: 'Numeric Range Filters',
      icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
      type: 'good',
      description: 'Block price ranges and numeric filters that create infinite URL combinations.',
      rules: [
        'Disallow: /*?*price_min=*',
        'Disallow: /*?*price_max=*',
      ],
      explanation: 'Numeric filters can produce infinite URL combinations (price_min=1&price_max=2, price_min=1.5&price_max=2.5, etc.). These create massive crawl traps with no unique content value.'
    },
    {
      title: 'Calendar Date Patterns',
      icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
      type: 'good',
      description: 'Prevent crawling of infinite date combinations in calendar interfaces.',
      rules: [
        'Disallow: /calendar/*?date=*',
      ],
      explanation: 'Date pickers can create millions of URL combinations. Block them to prevent crawl budget waste on low-value pages.'
    },
  ];

  const antiPatterns = [
    {
      title: 'Blocking Pagination Parameters',
      icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
      rule: 'Disallow: /*?*page=*',
      reason: 'This prevents crawlers from discovering products or content on page 2+. Use noindex,follow meta tags instead to allow discovery while controlling indexing.',
    },
    {
      title: 'Blocking Sort Parameters',
      icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
      rule: 'Disallow: /*?*sort=*',
      reason: 'While sort creates duplicate content, blocking it can prevent discovery of deeper paginated content. Use noindex,follow in meta robots instead.',
    },
    {
      title: 'Blocking Search Pages',
      icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
      rule: 'Disallow: /search',
      reason: 'Blocking search entirely prevents discovering useful content. Better to use noindex,follow on search result pages to allow link discovery.',
    },
  ];

  return (
    <div className="space-y-6">
      <Alert className="border-blue-300 bg-blue-50">
        <Info className="h-4 w-4" />
        <AlertDescription>
          A well-crafted robots.txt file is essential for managing crawl budget and protecting sensitive areas. Focus on blocking truly problematic patterns while allowing discovery of valuable content.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Best Practice Rules</CardTitle>
          <CardDescription>
            Essential robots.txt patterns for production SEO
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {rules.map((rule, index) => (
            <div key={index} className="border rounded-lg p-5 bg-white">
              <div className="flex items-center gap-2 mb-3">
                {rule.icon}
                <h3 className="font-semibold text-lg">{rule.title}</h3>
              </div>
              <div className="space-y-3 pl-7">
                <Badge className="bg-green-100 text-green-800 border-green-300">
                  Recommended
                </Badge>
                <p className="text-sm text-slate-700">{rule.description}</p>
                <div className="bg-slate-900 text-green-400 p-3 rounded text-xs font-mono space-y-1">
                  {rule.rules.map((r, idx) => (
                    <div key={idx}>{r}</div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 italic">{rule.explanation}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-900">
            <AlertTriangle className="h-5 w-5" />
            Common Anti-Patterns to Avoid
          </CardTitle>
          <CardDescription>
            These patterns can harm crawlability and content discovery
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {antiPatterns.map((pattern, index) => (
            <div key={index} className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
              <div className="flex items-center gap-2 mb-2">
                {pattern.icon}
                <h3 className="font-semibold text-red-900">{pattern.title}</h3>
              </div>
              <div className="space-y-2 pl-7">
                <div className="bg-white p-2 rounded text-xs font-mono border border-red-200">
                  <span className="text-red-600"># BAD: </span>
                  <span className="line-through">{pattern.rule}</span>
                </div>
                <p className="text-sm text-slate-700">{pattern.reason}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5" />
            Complete robots.txt Example
          </CardTitle>
          <CardDescription>
            Production-ready configuration with best practices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono max-h-96 overflow-y-auto">
            {bestPracticeRobotsTxt}
          </pre>
        </CardContent>
      </Card>

      <Alert className="border-green-300 bg-green-50">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-sm">
          <strong>Key Principle:</strong> Use robots.txt to block patterns that create crawl waste (tracking params, UI prefs) but use meta robots tags (noindex,follow) for content discovery scenarios like pagination and sorting.
        </AlertDescription>
      </Alert>
    </div>
  );
}
