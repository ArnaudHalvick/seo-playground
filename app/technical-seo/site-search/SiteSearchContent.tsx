"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  TrendingUp,
  Eye,
  Link as LinkIcon,
  Code2,
  Zap,
} from "lucide-react";

export default function SiteSearchContent() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Search className="h-10 w-10 text-amber-600" />
            <h1 className="text-4xl font-bold">Site Search SEO Strategy</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            How to handle internal search result pages without creating crawl traps or wasting crawl
            budget
          </p>
          <Alert className="border-amber-300 bg-amber-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Critical:</strong> Search pages are one of the biggest crawl trap risks on
              e-commerce sites. Every query creates a unique URL, leading to infinite combinations
              that can consume your entire crawl budget.
            </AlertDescription>
          </Alert>
        </div>

        {/* Section 1: Why Search Pages Are Problematic */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Search Pages Are Problematic</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Problem 1: Infinite URLs */}
            <Card className="border-2 border-red-300">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-red-600" />
                  Infinite URL Combinations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-slate-700">
                  Every search query creates a unique URL, leading to unlimited possible pages:
                </p>
                <div className="bg-red-50 p-3 rounded border border-red-200 text-xs font-mono space-y-1">
                  <div>/search?q=shoes</div>
                  <div>/search?q=blue+shoes</div>
                  <div>/search?q=shoes+size+10</div>
                  <div>/search?q=nike+shoes</div>
                  <div>/search?q=running+shoes</div>
                  <div className="text-red-600">... infinite possibilities</div>
                </div>
                <Alert className="border-red-300 bg-red-50">
                  <AlertDescription className="text-xs">
                    <strong>Impact:</strong> Crawlers can waste weeks discovering and crawling
                    search variations, never reaching your actual product pages.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Problem 2: Duplicate Content */}
            <Card className="border-2 border-orange-300">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Eye className="h-5 w-5 text-orange-600" />
                  Duplicate Content Issues
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-slate-700">
                  Search results often duplicate category and faceted navigation pages:
                </p>
                <div className="bg-orange-50 p-3 rounded border border-orange-200 text-xs space-y-2">
                  <div>
                    <div className="font-semibold mb-1">Same products, different URLs:</div>
                    <div className="font-mono">/category/shoes</div>
                    <div className="font-mono">/search?q=shoes</div>
                    <div className="font-mono">/shop?filter=shoes</div>
                  </div>
                  <div className="text-orange-700">→ All show identical products!</div>
                </div>
                <Alert className="border-orange-300 bg-orange-50">
                  <AlertDescription className="text-xs">
                    <strong>Risk:</strong> Google sees duplicate content and may choose the wrong
                    URL to index, or worse, penalize your site for excessive duplication.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Problem 3: Thin/Unstable Content */}
            <Card className="border-2 border-amber-300">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5 text-amber-600" />
                  Thin & Unstable Content
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-slate-700">
                  Search pages often have low-value or changing content:
                </p>
                <div className="bg-amber-50 p-3 rounded border border-amber-200 text-xs space-y-2">
                  <div className="space-y-1">
                    <div className="font-semibold">Zero-result pages:</div>
                    <div className="font-mono">/search?q=purple+unicorn+shoes</div>
                    <div className="text-amber-700">→ No products found (thin content)</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold">Typos & misspellings:</div>
                    <div className="font-mono">/search?q=sheos</div>
                    <div className="text-amber-700">→ Useless page nobody will search</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold">Inventory changes:</div>
                    <div className="text-amber-700">
                      → Results change as products go in/out of stock
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Problem 4: Crawl Budget Waste */}
            <Card className="border-2 border-red-300">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  Crawl Budget Catastrophe
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-slate-700">
                  The real cost: wasted crawl budget that should go to important pages.
                </p>
                <div className="bg-red-50 p-3 rounded border border-red-200 text-xs space-y-2">
                  <div className="font-semibold">Typical scenario:</div>
                  <div className="space-y-1 text-slate-700">
                    <div>• Crawler finds 10,000 search URLs</div>
                    <div>• Spends days crawling search variations</div>
                    <div>• Never reaches new product pages</div>
                    <div>• New products remain undiscovered for weeks</div>
                  </div>
                </div>
                <Alert className="border-red-300 bg-red-50">
                  <AlertDescription className="text-xs">
                    <strong>Bottom Line:</strong> For large sites, search pages can consume 80%+ of
                    crawl budget if not handled correctly.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section 2: The Standard Strategy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">The Standard Strategy: noindex,follow</h2>

          <Card className="bg-green-50 border-2 border-green-300 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
                Core Rule: ALL Search Result Pages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded border-2 border-green-400">
                <p className="font-semibold text-lg mb-2">Meta Robots Directive:</p>
                <div className="bg-slate-900 text-green-400 p-3 rounded font-mono text-sm">
                  {'<meta name="robots" content="noindex,follow" />'}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-green-300">
                  <p className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Why noindex?
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Prevents indexing duplicate content</li>
                    <li>• Avoids thin/zero-result pages in index</li>
                    <li>• Stops unstable URLs from appearing in SERPs</li>
                    <li>• Protects crawl budget from infinite combinations</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-green-300">
                  <p className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Why follow?
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Allows crawlers to discover product links</li>
                    <li>• Products might only be linked from search</li>
                    <li>• Passes link equity to product pages</li>
                    <li>• Enables deep product discovery</li>
                  </ul>
                </div>
              </div>

              <Alert className="border-green-300 bg-green-50">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  <strong>Key Insight:</strong> We want crawlers to <em>access</em> search pages (to
                  find products), but we don&apos;t want them to <em>index</em> search pages
                  (because they&apos;re low-value URLs).
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Canonical Exception */}
          <Card className="border-2 border-blue-300">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-blue-600" />
                Exception: Keep Query in Canonical
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-700">
                Unlike other noindex pages, search pages should use{" "}
                <strong>self-referencing canonicals</strong> that include the query parameter.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-green-300 rounded p-4 bg-white">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <p className="font-semibold text-sm">Correct</p>
                  </div>
                  <div className="bg-slate-900 text-green-400 p-3 rounded text-xs font-mono space-y-1">
                    <div className="text-slate-400">{"<!-- Search: ?q=shoes -->"}</div>
                    <div>{'<link rel="canonical"'}</div>
                    <div>{'  href="/search?q=shoes" />'}</div>
                  </div>
                  <p className="text-xs text-slate-600 mt-2">Query preserved in canonical ✓</p>
                </div>

                <div className="border-2 border-red-300 rounded p-4 bg-white">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="h-5 w-5 text-red-600" />
                    <p className="font-semibold text-sm">Wrong</p>
                  </div>
                  <div className="bg-slate-900 text-red-400 p-3 rounded text-xs font-mono space-y-1">
                    <div className="text-slate-400">{"<!-- Search: ?q=shoes -->"}</div>
                    <div className="line-through">{'<link rel="canonical"'}</div>
                    <div className="line-through">{'  href="/search" />'}</div>
                  </div>
                  <p className="text-xs text-slate-600 mt-2">Don&apos;t strip query parameter ✗</p>
                </div>
              </div>

              <Alert className="border-blue-300 bg-blue-50">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  <strong>Why keep the query?</strong> Since search pages are already noindex,
                  there&apos;s no duplication risk. Keeping the query parameter preserves context
                  for analytics and maintains URL structure consistency.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {/* Section 3: Why NOT Robots.txt Blocking */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why NOT Robots.txt Blocking</h2>

          <Alert className="border-red-300 bg-red-50 mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Common Mistake:</strong> Many developers think blocking{" "}
              <code className="bg-red-100 px-1 rounded text-xs">Disallow: /search</code> in
              robots.txt is the solution. This is <strong>WRONG</strong> and will hurt your SEO.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Wrong Approach */}
            <Card className="border-2 border-red-300 bg-red-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  Wrong: robots.txt Blocking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-slate-900 text-red-400 p-3 rounded text-xs font-mono space-y-1">
                  <div className="text-slate-400"># robots.txt</div>
                  <div>User-agent: *</div>
                  <div className="text-red-400 font-bold">
                    Disallow: /search # ❌ DON&apos;T DO THIS
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold text-sm">Why this is wrong:</p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-3 w-3 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Crawlers can&apos;t access search pages at all</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-3 w-3 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Product links on search pages won&apos;t be discovered</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-3 w-3 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>New products only linked from search remain hidden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-3 w-3 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Breaks link equity flow to products</span>
                    </li>
                  </ul>
                </div>

                <Alert className="border-red-400 bg-red-50">
                  <AlertDescription className="text-xs">
                    <strong>Bottom Line:</strong> Blocking prevents the good (product discovery) to
                    avoid the bad (search indexing). There&apos;s a better way!
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Right Approach */}
            <Card className="border-2 border-green-300 bg-green-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Correct: Allow Crawling, Block Indexing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-slate-900 text-green-400 p-3 rounded text-xs font-mono space-y-1">
                  <div className="text-slate-400"># robots.txt</div>
                  <div>User-agent: *</div>
                  <div className="text-green-400"># No disallow for /search ✓</div>
                  <div className="text-slate-400 mt-2"># Use meta robots instead</div>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold text-sm">Why this is correct:</p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Crawlers can access and follow links</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Products linked from search get discovered</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Meta noindex prevents search page indexing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Link equity flows to products</span>
                    </li>
                  </ul>
                </div>

                <Alert className="border-green-400 bg-green-50">
                  <AlertDescription className="text-xs">
                    <strong>Best of Both:</strong> Crawlers discover products (good), but don&apos;t
                    index search pages (also good).
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>

          {/* Visual Example */}
          <Card className="bg-white border-2">
            <CardHeader>
              <CardTitle>Visual Comparison: Discovery Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-sm mb-3 text-red-700">
                    ❌ With robots.txt Blocking
                  </p>
                  <div className="bg-red-50 border-2 border-red-200 rounded p-4 text-xs space-y-2">
                    <div className="font-mono">/search?q=shoes</div>
                    <div className="text-red-600 font-semibold">🚫 BLOCKED by robots.txt</div>
                    <div className="pl-4 space-y-1 text-slate-600">
                      <div>→ /product/nike-air-123 ❌ NOT discovered</div>
                      <div>→ /product/adidas-runner ❌ NOT discovered</div>
                      <div>→ /product/reebok-classic ❌ NOT discovered</div>
                    </div>
                    <p className="text-red-700 pt-2">These products remain hidden from Google!</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-sm mb-3 text-green-700">✓ With noindex,follow</p>
                  <div className="bg-green-50 border-2 border-green-200 rounded p-4 text-xs space-y-2">
                    <div className="font-mono">/search?q=shoes</div>
                    <div className="text-green-600 font-semibold">✓ Crawled (noindex,follow)</div>
                    <div className="pl-4 space-y-1 text-slate-600">
                      <div>→ /product/nike-air-123 ✓ Discovered & indexed</div>
                      <div>→ /product/adidas-runner ✓ Discovered & indexed</div>
                      <div>→ /product/reebok-classic ✓ Discovered & indexed</div>
                    </div>
                    <p className="text-green-700 pt-2">Search not indexed, but products are!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 4: Implementation Guide */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Implementation Guide</h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-indigo-600" />
                Complete Implementation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-700">
                Here&apos;s the complete HTML head section for a search results page:
              </p>

              <div className="bg-slate-900 text-green-400 p-4 rounded-lg text-xs font-mono space-y-1 overflow-x-auto">
                <div className="text-slate-400">{"<!DOCTYPE html>"}</div>
                <div className="text-slate-400">{'<html lang="en">'}</div>
                <div className="text-slate-400">{"<head>"}</div>
                <div className="pl-2">{'<meta charset="UTF-8" />'}</div>
                <div className="pl-2">{"<title>Search Results: shoes | Your Store</title>"}</div>
                <div className="pl-2 text-slate-400 mt-2">
                  {"<!-- Critical: noindex,follow -->"}
                </div>
                <div className="pl-2 text-yellow-400">
                  {'<meta name="robots" content="noindex,follow" />'}
                </div>
                <div className="pl-2 text-slate-400 mt-2">
                  {"<!-- Self-referencing canonical with query -->"}
                </div>
                <div className="pl-2 text-cyan-400">
                  {'<link rel="canonical" href="https://example.com/search?q=shoes" />'}
                </div>
                <div className="pl-2 text-slate-400 mt-2">
                  {"<!-- Optional: Help search engines understand this is search -->"}
                </div>
                <div className="pl-2">
                  {'<meta name="description" content="Search results for: shoes" />'}
                </div>
                <div className="text-slate-400">{"</head>"}</div>
              </div>

              <div className="grid md:grid-cols-3 gap-3">
                <Alert className="border-green-300 bg-green-50">
                  <AlertDescription className="text-xs">
                    <strong>1. noindex,follow</strong>
                    <br />
                    Prevents indexing, allows discovery
                  </AlertDescription>
                </Alert>
                <Alert className="border-blue-300 bg-blue-50">
                  <AlertDescription className="text-xs">
                    <strong>2. Self-canonical</strong>
                    <br />
                    Keeps query in URL
                  </AlertDescription>
                </Alert>
                <Alert className="border-purple-300 bg-purple-50">
                  <AlertDescription className="text-xs">
                    <strong>3. No robots.txt block</strong>
                    <br />
                    Allow crawling
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* Sitemap Exclusion */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Sitemap Exclusion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-700">
                Never include search result pages in your XML sitemap. Sitemaps should only contain
                pages you want indexed.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-red-300 rounded p-4 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-5 w-5 text-red-600" />
                    <p className="font-semibold text-sm">Wrong</p>
                  </div>
                  <div className="bg-slate-900 text-red-400 p-3 rounded text-xs font-mono space-y-1">
                    <div>{"<url>"}</div>
                    <div className="pl-2 line-through">{"<loc>/search?q=shoes</loc>"}</div>
                    <div>{"</url>"}</div>
                  </div>
                  <p className="text-xs text-slate-600 mt-2">Don&apos;t include search URLs ✗</p>
                </div>

                <div className="border-2 border-green-300 rounded p-4 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <p className="font-semibold text-sm">Correct</p>
                  </div>
                  <div className="bg-slate-900 text-green-400 p-3 rounded text-xs font-mono space-y-1">
                    <div>{"<url>"}</div>
                    <div className="pl-2">{"<loc>/category/shoes</loc>"}</div>
                    <div>{"</url>"}</div>
                  </div>
                  <p className="text-xs text-slate-600 mt-2">Include category pages ✓</p>
                </div>
              </div>

              <Alert className="border-amber-300 bg-amber-50">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  <strong>Rule:</strong> If a page has noindex, it should NOT be in your sitemap.
                  Including noindex pages in sitemaps sends mixed signals to search engines.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Google Search Console */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Google Search Console Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-700">
                Tell Google Search Console how to handle the search query parameter:
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded p-4 space-y-3">
                <p className="font-semibold text-sm">Steps:</p>
                <ol className="text-xs text-slate-700 space-y-2 list-decimal list-inside">
                  <li>Go to Google Search Console → Legacy Tools → URL Parameters</li>
                  <li>
                    Add parameter: <code className="bg-blue-100 px-1 rounded">q</code>
                  </li>
                  <li>
                    Select: <strong>&quot;Representative URL: Let Googlebot decide&quot;</strong>
                  </li>
                  <li>
                    Or select:{" "}
                    <strong>&quot;No URLs: Doesn&apos;t affect page content&quot;</strong>
                  </li>
                </ol>
              </div>

              <Alert className="border-blue-300 bg-blue-50">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  <strong>Note:</strong> This is optional since meta noindex already handles it, but
                  it provides an extra signal to Google about parameter handling.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {/* Section 5: Rare Exceptions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Rare Exception: When to Index Search Pages</h2>

          <Alert className="border-amber-300 bg-amber-50 mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Warning:</strong> 99% of sites should NOT index search pages. Only consider
              this for very specific, high-volume branded queries with custom content.
            </AlertDescription>
          </Alert>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>When You MIGHT Index a Search Page</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">High-volume branded query</p>
                    <p className="text-xs text-slate-600">
                      Example: Target.com indexing{" "}
                      <code className="bg-slate-100 px-1 rounded">/search?q=nintendo+switch</code>
                      because thousands search for it monthly
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Manually curated content</p>
                    <p className="text-xs text-slate-600">
                      Add unique descriptions, buying guides, FAQs - make it a real landing page,
                      not auto-generated results
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Unique value proposition</p>
                    <p className="text-xs text-slate-600">
                      The page must offer something the category/product pages don&apos;t already
                      provide
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">No category page alternative</p>
                    <p className="text-xs text-slate-600">
                      If you could create a proper category page instead, do that - it&apos;s better
                      SEO
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-2 border-amber-300 rounded p-4">
                <p className="font-semibold text-sm mb-2">The bar is VERY high:</p>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Must justify with search volume data (1000+ searches/month)</li>
                  <li>• Requires ongoing content maintenance</li>
                  <li>• Better to create a real category page instead</li>
                  <li>• Only index 5-10 queries max, not hundreds</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-red-50 border-2 border-red-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <XCircle className="h-6 w-6 text-red-600" />
                Do NOT Index If...
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Auto-generated results with no unique content</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Low search volume (under 1000/month)</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Results duplicate existing category pages</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>You&apos;re considering indexing dozens/hundreds of searches</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Results change frequently with inventory</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 6: Common Mistakes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Common Mistakes to Avoid</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-red-500 bg-red-50 p-4">
              <p className="font-semibold text-sm mb-1">❌ Blocking /search in robots.txt</p>
              <p className="text-xs text-slate-700">
                Prevents product discovery. Use noindex,follow in meta tags instead.
              </p>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 p-4">
              <p className="font-semibold text-sm mb-1">
                ❌ Using noindex,nofollow (instead of noindex,follow)
              </p>
              <p className="text-xs text-slate-700">
                The <code className="bg-red-100 px-1 rounded">nofollow</code> prevents link
                discovery. Always use <code className="bg-green-100 px-1 rounded">follow</code>.
              </p>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 p-4">
              <p className="font-semibold text-sm mb-1">
                ❌ Indexing all search results (index,follow)
              </p>
              <p className="text-xs text-slate-700">
                Creates massive crawl trap. Only use for hand-picked, high-volume queries with
                custom content.
              </p>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 p-4">
              <p className="font-semibold text-sm mb-1">❌ Including search URLs in sitemap</p>
              <p className="text-xs text-slate-700">
                Sitemap signals indexation intent. Never include noindex pages in sitemaps.
              </p>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 p-4">
              <p className="font-semibold text-sm mb-1">
                ❌ Linking to search from main navigation
              </p>
              <p className="text-xs text-slate-700">
                Encourages crawlers to explore search. Use search box (form with POST) instead of
                direct links.
              </p>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 p-4">
              <p className="font-semibold text-sm mb-1">❌ Not monitoring crawl stats</p>
              <p className="text-xs text-slate-700">
                Check Google Search Console to ensure search pages aren&apos;t consuming excessive
                crawl budget.
              </p>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 p-4">
              <p className="font-semibold text-sm mb-1">❌ Removing query from canonical URL</p>
              <p className="text-xs text-slate-700">
                Unlike other parameters, search queries should stay in canonical for context
                preservation.
              </p>
            </div>
          </div>
        </div>

        {/* Section 7: Best Practices Checklist */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              Implementation Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Add <code className="bg-slate-100 px-1 rounded text-xs">noindex,follow</code> to
                    ALL search result pages
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Use self-referencing canonical with query parameter</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Do NOT block <code className="bg-slate-100 px-1 rounded text-xs">/search</code>{" "}
                    in robots.txt
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Exclude all search URLs from XML sitemap</span>
                </li>
              </ul>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Configure query parameter in Google Search Console (optional)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Avoid linking to search from main navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Monitor crawl stats for search URL patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Only index hand-picked queries with unique content (if at all)</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Search className="h-5 w-5 text-amber-600" />
              Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <p className="font-semibold text-green-700">✓ Do This:</p>
                <ul className="text-slate-700 space-y-1 text-xs">
                  <li>• Use noindex,follow for all search pages</li>
                  <li>• Allow crawling (no robots.txt block)</li>
                  <li>• Keep query in canonical URL</li>
                  <li>• Let crawlers discover product links</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-red-700">✗ Don&apos;t Do This:</p>
                <ul className="text-slate-700 space-y-1 text-xs">
                  <li>• Block /search in robots.txt</li>
                  <li>• Use noindex,nofollow (use follow!)</li>
                  <li>• Include search in sitemap</li>
                  <li>• Index auto-generated results</li>
                </ul>
              </div>
            </div>
            <Alert className="mt-4 border-amber-300 bg-amber-50">
              <AlertDescription className="text-xs">
                <strong>Remember:</strong> The goal is to let crawlers discover products through
                search pages, without wasting crawl budget on indexing the search pages themselves.
                This is why noindex,follow (NOT robots.txt blocking) is the correct strategy.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
