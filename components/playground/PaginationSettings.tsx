'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Alert, AlertDescription } from '../ui/alert';
import { CheckCircle2, Info, XCircle } from 'lucide-react';

export function PaginationSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Pagination Policy - Best Practices</CardTitle>
          <CardDescription>
            Recommended approach for handling paginated content in SEO
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-300 bg-blue-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Pagination requires a careful balance: allow crawlers to discover all pages while preventing duplicate content issues and crawl waste.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <div className="border rounded-lg p-5 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-lg">Page 1: Fully Indexable</h3>
              </div>
              <div className="space-y-3 pl-7">
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800 border-green-300">
                    index,follow
                  </Badge>
                  <span className="text-sm text-muted-foreground">Meta robots directive</span>
                </div>
                <p className="text-sm text-slate-700">
                  The first page is the primary landing page and should be fully indexed. It represents the canonical view of the content and typically has the most value for users and search engines.
                </p>
                <div className="bg-slate-50 p-3 rounded text-xs font-mono">
                  {'<meta name="robots" content="index,follow" />'}
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-5 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-amber-600" />
                <h3 className="font-semibold text-lg">Page 2+: Noindex with Follow</h3>
              </div>
              <div className="space-y-3 pl-7">
                <div className="flex items-center gap-2">
                  <Badge className="bg-amber-100 text-amber-800 border-amber-300">
                    noindex,follow
                  </Badge>
                  <span className="text-sm text-muted-foreground">Recommended for page 2+</span>
                </div>
                <p className="text-sm text-slate-700">
                  Pagination pages beyond the first should use <code className="bg-muted px-1 py-0.5 rounded text-xs">noindex,follow</code>. This allows crawlers to discover deeper content and follow links to individual items, while preventing duplicate content issues.
                </p>
                <div className="bg-slate-50 p-3 rounded text-xs font-mono">
                  {'<meta name="robots" content="noindex,follow" />'}
                </div>
                <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                  <li>Prevents duplicate content and thin pages in the index</li>
                  <li>Preserves crawl budget by avoiding indexing similar pages</li>
                  <li>Allows discovery of products/items linked from pagination</li>
                  <li>Maintains link equity flow through the site</li>
                </ul>
              </div>
            </div>

            <div className="border rounded-lg p-5 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-lg">Canonical Strategy: Self-Referencing</h3>
              </div>
              <div className="space-y-3 pl-7">
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                    self-canonical
                  </Badge>
                  <span className="text-sm text-muted-foreground">Page 2 points to itself</span>
                </div>
                <p className="text-sm text-slate-700">
                  Each pagination page should have a self-referencing canonical. This is the standard approach recommended by Google for paginated content.
                </p>
                <div className="bg-slate-50 p-3 rounded text-xs font-mono space-y-1">
                  <div>{'<!-- Page 1 -->'}</div>
                  <div>{'<link rel="canonical" href="/catalog/shirts" />'}</div>
                  <div className="mt-2">{'<!-- Page 2 -->'}</div>
                  <div>{'<link rel="canonical" href="/catalog/shirts?page=2" />'}</div>
                </div>
                <p className="text-sm text-slate-700 mt-2">
                  <strong>Why not canonical to page 1?</strong> Pointing page 2+ to page 1 would signal that the content is duplicate, which it is not. Each page shows different items and should maintain its own identity.
                </p>
              </div>
            </div>

            <div className="border-2 border-red-200 rounded-lg p-5 bg-red-50">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="h-5 w-5 text-red-600" />
                <h3 className="font-semibold text-lg text-red-900">Anti-Pattern: Blocking in robots.txt</h3>
              </div>
              <div className="space-y-3 pl-7">
                <Badge className="bg-red-100 text-red-800 border-red-300">
                  Not Recommended
                </Badge>
                <p className="text-sm text-slate-700">
                  <strong>Never block pagination in robots.txt.</strong> This prevents crawlers from discovering content on subsequent pages. Instead, use noindex,follow meta tags to control indexing while allowing discovery.
                </p>
                <div className="bg-white p-3 rounded text-xs font-mono border border-red-200">
                  <div className="text-red-600">{'# BAD: Do not do this'}</div>
                  <div className="line-through">{'Disallow: /*?page='}</div>
                </div>
                <p className="text-sm text-slate-700">
                  Blocking pagination prevents crawlers from accessing products, articles, or items that might only appear on page 2 or beyond.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
