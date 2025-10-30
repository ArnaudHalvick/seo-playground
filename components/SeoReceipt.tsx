'use client';

import React, { useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Info, CheckCircle2, XCircle, AlertTriangle, Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { SEO_BEST_PRACTICES_CONFIG } from '@/lib/rules/params';
import { computeCanonical } from '@/lib/rules/canonical';
import { generateSitemapEntries } from '@/lib/rules/sitemap';
import { diffUrls } from '@/lib/utils/url-diff';

export function SeoReceipt() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlSearchParams = new URLSearchParams(searchParams.toString());
  const result = computeCanonical(pathname, urlSearchParams, SEO_BEST_PRACTICES_CONFIG);
  const sitemapEntries = generateSitemapEntries(SEO_BEST_PRACTICES_CONFIG);
  const inSitemap = sitemapEntries.some((e) => e.included && e.loc === result.canonical);

  const inputUrl = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
  const { segments } = diffUrls(inputUrl, result.canonical);

  const isIndexable = result.robots === 'index,follow';
  const isNoindexFollow = result.robots === 'noindex,follow';
  const isNoindexNofollow = result.robots === 'noindex,nofollow';

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const copyTrace = async () => {
    const traceText = result.trace.join('\n');
    await copyToClipboard(traceText, 'trace');
  };

  return (
    <>
      <div className="hidden lg:block fixed top-16 right-0 h-[calc(100vh-4rem)] w-96 border-l bg-white shadow-xl z-30">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 p-4 border-b bg-slate-50">
            <Info className="h-5 w-5 text-blue-600" />
            <h2 className="font-semibold text-lg">SEO Receipt</h2>
          </div>

          <div className="flex-1 overflow-y-auto">
            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="w-full rounded-none border-b">
                <TabsTrigger value="summary" className="flex-1">Summary</TabsTrigger>
                <TabsTrigger value="trace" className="flex-1">Rule Trace</TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="p-4 space-y-4 m-0">
                <div>
                  <div className="font-semibold mb-2 text-sm text-slate-700">URL Comparison</div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Input URL</div>
                      <div className="relative group">
                        <div className="text-xs break-all bg-slate-100 p-2 rounded font-mono pr-8">
                          {inputUrl}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(inputUrl, 'input')}
                          className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {copiedField === 'input' ? (
                            <Check className="h-3 w-3 text-green-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-slate-500 mb-1">Canonical URL</div>
                      <div className="relative group">
                        <div className="text-xs break-all bg-blue-50 border border-blue-200 p-2 rounded font-mono pr-8">
                          {segments.map((seg, idx) => {
                            if (seg.type === 'removed') {
                              return (
                                <span key={idx} className="bg-red-200 line-through">
                                  {seg.text}
                                </span>
                              );
                            }
                            if (seg.type === 'added') {
                              return (
                                <span key={idx} className="bg-green-200 font-semibold">
                                  {seg.text}
                                </span>
                              );
                            }
                            return <span key={idx}>{seg.text}</span>;
                          })}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(result.canonical, 'canonical')}
                          className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {copiedField === 'canonical' ? (
                            <Check className="h-3 w-3 text-green-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="font-semibold mb-2 text-sm text-slate-700 flex items-center justify-between">
                    <span>Indexability</span>
                    {isIndexable && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                    {isNoindexFollow && <AlertTriangle className="h-5 w-5 text-amber-600" />}
                    {isNoindexNofollow && <XCircle className="h-5 w-5 text-red-600" />}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant={isIndexable ? 'default' : isNoindexFollow ? 'secondary' : 'destructive'}
                      className="text-xs"
                    >
                      {result.robots}
                    </Badge>
                    {result.blockInRobots && (
                      <Badge variant="destructive" className="text-xs">
                        Blocked by robots.txt
                      </Badge>
                    )}
                  </div>
                  {result.robotsMatchedRules && result.robotsMatchedRules.length > 0 && (
                    <div className="mt-2 text-xs text-slate-600 space-y-1">
                      {result.robotsMatchedRules.map((rule, idx) => (
                        <div key={idx} className="bg-red-50 border border-red-200 p-2 rounded">
                          {rule}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t pt-4">
                  <div className="font-semibold mb-2 text-sm text-slate-700 flex items-center justify-between">
                    <span>Sitemap Inclusion</span>
                    {inSitemap ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-slate-400" />
                    )}
                  </div>
                  <Badge variant={inSitemap ? 'default' : 'outline'} className="text-xs">
                    {inSitemap ? 'Included in Sitemap' : 'Excluded from Sitemap'}
                  </Badge>
                </div>

                {result.warnings.length > 0 && (
                  <div className="border-t pt-4">
                    <div className="font-semibold mb-2 text-sm text-amber-700 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Warnings
                    </div>
                    <ul className="space-y-1">
                      {result.warnings.map((warning, idx) => (
                        <li key={idx} className="text-xs text-amber-700 bg-amber-50 p-2 rounded">
                          {warning}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="text-xs text-slate-600">
                    <a href="/how-it-works" className="hover:underline text-blue-600">
                      How does this work?
                    </a>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="trace" className="p-4 m-0">
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold text-sm text-slate-700">Decision Log</div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyTrace}
                      className="h-7 text-xs"
                    >
                      {copiedField === 'trace' ? (
                        <>
                          <Check className="h-3 w-3 mr-1 text-green-600" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3 mr-1" />
                          Copy All
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="bg-slate-900 text-green-400 p-3 rounded text-xs font-mono space-y-1 max-h-[calc(100vh-16rem)] overflow-y-auto">
                    {result.trace.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-30 max-h-[70vh] flex flex-col">
        <div className="flex items-center gap-2 p-3 border-b bg-slate-50">
          <Info className="h-5 w-5 text-blue-600" />
          <h2 className="font-semibold">SEO Receipt</h2>
        </div>

        <div className="flex-1 overflow-y-auto">
          <Tabs defaultValue="summary" className="w-full">
            <TabsList className="w-full rounded-none border-b">
              <TabsTrigger value="summary" className="flex-1">Summary</TabsTrigger>
              <TabsTrigger value="trace" className="flex-1">Rule Trace</TabsTrigger>
            </TabsList>

            <TabsContent value="summary" className="p-3 space-y-3 m-0">
              <div>
                <div className="font-semibold mb-2 text-sm text-slate-700">URL Comparison</div>
                <div className="space-y-2">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Input URL</div>
                    <div className="relative group">
                      <div className="text-xs break-all bg-slate-100 p-2 rounded font-mono pr-8">
                        {inputUrl}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(inputUrl, 'input')}
                        className="absolute top-1 right-1 h-6 w-6 p-0"
                      >
                        {copiedField === 'input' ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500 mb-1">Canonical URL</div>
                    <div className="relative group">
                      <div className="text-xs break-all bg-blue-50 border border-blue-200 p-2 rounded font-mono pr-8">
                        {segments.map((seg, idx) => {
                          if (seg.type === 'removed') {
                            return (
                              <span key={idx} className="bg-red-200 line-through">
                                {seg.text}
                              </span>
                            );
                          }
                          if (seg.type === 'added') {
                            return (
                              <span key={idx} className="bg-green-200 font-semibold">
                                {seg.text}
                              </span>
                            );
                          }
                          return <span key={idx}>{seg.text}</span>;
                        })}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(result.canonical, 'canonical')}
                        className="absolute top-1 right-1 h-6 w-6 p-0"
                      >
                        {copiedField === 'canonical' ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-3">
                <div className="font-semibold mb-2 text-sm text-slate-700 flex items-center justify-between">
                  <span>Indexability</span>
                  {isIndexable && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                  {isNoindexFollow && <AlertTriangle className="h-5 w-5 text-amber-600" />}
                  {isNoindexNofollow && <XCircle className="h-5 w-5 text-red-600" />}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant={isIndexable ? 'default' : isNoindexFollow ? 'secondary' : 'destructive'}
                    className="text-xs"
                  >
                    {result.robots}
                  </Badge>
                  {result.blockInRobots && (
                    <Badge variant="destructive" className="text-xs">
                      Blocked by robots.txt
                    </Badge>
                  )}
                </div>
                {result.robotsMatchedRules && result.robotsMatchedRules.length > 0 && (
                  <div className="mt-2 text-xs text-slate-600 space-y-1">
                    {result.robotsMatchedRules.map((rule, idx) => (
                      <div key={idx} className="bg-red-50 border border-red-200 p-2 rounded">
                        {rule}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t pt-3">
                <div className="font-semibold mb-2 text-sm text-slate-700 flex items-center justify-between">
                  <span>Sitemap Inclusion</span>
                  {inSitemap ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-slate-400" />
                  )}
                </div>
                <Badge variant={inSitemap ? 'default' : 'outline'} className="text-xs">
                  {inSitemap ? 'Included in Sitemap' : 'Excluded from Sitemap'}
                </Badge>
              </div>

              {result.warnings.length > 0 && (
                <div className="border-t pt-3">
                  <div className="font-semibold mb-2 text-sm text-amber-700 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Warnings
                  </div>
                  <ul className="space-y-1">
                    {result.warnings.map((warning, idx) => (
                      <li key={idx} className="text-xs text-amber-700 bg-amber-50 p-2 rounded">
                        {warning}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="border-t pt-3">
                <div className="text-xs text-slate-600">
                  <a href="/how-it-works" className="hover:underline text-blue-600">
                    How does this work?
                  </a>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="trace" className="p-3 m-0">
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-sm text-slate-700">Decision Log</div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyTrace}
                    className="h-7 text-xs"
                  >
                    {copiedField === 'trace' ? (
                      <>
                        <Check className="h-3 w-3 mr-1 text-green-600" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 mr-1" />
                        Copy All
                      </>
                    )}
                  </Button>
                </div>
                <div className="bg-slate-900 text-green-400 p-3 rounded text-xs font-mono space-y-1 max-h-[50vh] overflow-y-auto">
                  {result.trace.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
