'use client';

import React, { useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ChevronDown, ChevronUp, Info, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { useConfig } from '@/lib/config/provider';
import { computeCanonical } from '@/lib/rules/canonical';
import { generateSitemapEntries } from '@/lib/rules/sitemap';

export function SeoReceipt() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { config } = useConfig();

  const urlSearchParams = new URLSearchParams(searchParams.toString());
  const result = computeCanonical(pathname, urlSearchParams, config);
  const sitemapEntries = generateSitemapEntries(config);
  const inSitemap = sitemapEntries.some((e) => e.included && e.loc === result.canonical);

  const isIndexable = result.robots === 'index,follow';
  const isNoindexFollow = result.robots === 'noindex,follow';
  const isNoindexNofollow = result.robots === 'noindex,nofollow';

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 max-w-[calc(100vw-2rem)]">
      <Card className="shadow-lg border-2">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Info className="h-5 w-5" />
              SEO Receipt
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="h-8 w-8 p-0"
            >
              {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
            </Button>
          </div>
        </CardHeader>
        {isOpen && (
          <CardContent className="space-y-3 text-sm">
            <div>
              <div className="font-semibold mb-1 flex items-center justify-between">
                <span>Indexability</span>
                {isIndexable && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                {isNoindexFollow && <AlertTriangle className="h-4 w-4 text-amber-600" />}
                {isNoindexNofollow && <XCircle className="h-4 w-4 text-red-600" />}
              </div>
              <Badge
                variant={isIndexable ? 'default' : isNoindexFollow ? 'secondary' : 'destructive'}
                className="text-xs"
              >
                {result.robots}
              </Badge>
              {result.blockInRobots && (
                <Badge variant="destructive" className="ml-2 text-xs">
                  Blocked in robots.txt
                </Badge>
              )}
            </div>

            <div>
              <div className="font-semibold mb-1">Canonical URL</div>
              <div className="text-xs break-all bg-muted p-2 rounded">{result.canonical}</div>
            </div>

            <div>
              <div className="font-semibold mb-1 flex items-center justify-between">
                <span>Sitemap Inclusion</span>
                {inSitemap ? (
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                ) : (
                  <XCircle className="h-4 w-4 text-gray-400" />
                )}
              </div>
              <Badge variant={inSitemap ? 'default' : 'outline'} className="text-xs">
                {inSitemap ? 'Included' : 'Excluded'}
              </Badge>
            </div>

            {result.warnings.length > 0 && (
              <div>
                <div className="font-semibold mb-1 text-amber-700 flex items-center gap-1">
                  <AlertTriangle className="h-4 w-4" />
                  Warnings
                </div>
                <ul className="text-xs space-y-1">
                  {result.warnings.map((warning, idx) => (
                    <li key={idx} className="text-amber-700">
                      {warning}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="sm" className="w-full text-xs">
                  View Rule Trace
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <div className="bg-muted p-3 rounded text-xs space-y-1 max-h-48 overflow-y-auto">
                  {result.trace.map((line, idx) => (
                    <div key={idx} className="font-mono">
                      {line}
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            <div className="pt-2 border-t text-xs text-muted-foreground">
              <a href="/how-it-works" className="hover:underline">
                How does this work?
              </a>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
