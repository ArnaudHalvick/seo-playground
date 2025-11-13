import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  ShoppingBag,
  FileText,
  Filter,
  Search,
  Target,
  Sparkles,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export default function InclusionTab() {
  return (
    <div className="space-y-6">
      {/* Philosophy */}
      <Alert className="border-purple-300 bg-purple-50">
        <Sparkles className="h-4 w-4" />
        <AlertDescription className="text-sm">
          <strong>Core Principle:</strong> Your sitemap should be a curated list of indexable,
          valuable pages—not an exhaustive dump of every URL. Quality and strategic selection matter
          more than quantity.
        </AlertDescription>
      </Alert>

      {/* What to Include */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            What to Include in Your Sitemap
          </CardTitle>
          <CardDescription>
            Prioritize pages that should be indexed and crawled regularly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {/* Important Indexable Pages */}
            <div className="border-2 border-green-200 bg-green-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-sm">1. Core Indexable Pages</h4>
              </div>
              <p className="text-xs text-slate-700 mb-3">
                These are your money pages—the ones you want ranking in search results. Include
                every page that has unique, valuable content for users.
              </p>
              <div className="grid md:grid-cols-2 gap-2 text-xs">
                <div className="bg-white border border-green-200 p-2 rounded">
                  <div className="font-semibold mb-1 text-green-700">✓ Include</div>
                  <ul className="space-y-0.5 text-slate-700">
                    <li>• Homepage</li>
                    <li>• Product/service pages</li>
                    <li>• Category pages</li>
                    <li>• Blog posts/articles</li>
                    <li>• Landing pages</li>
                    <li>• About/Contact pages</li>
                  </ul>
                </div>
                <div className="bg-white border border-green-200 p-2 rounded">
                  <div className="font-semibold mb-1 text-green-700">Example URLs</div>
                  <ul className="space-y-0.5 text-slate-700 font-mono text-[10px]">
                    <li>• /</li>
                    <li>• /products/blue-sneakers</li>
                    <li>• /categories/shoes</li>
                    <li>• /blog/seo-guide-2024</li>
                    <li>• /landing/summer-sale</li>
                    <li>• /about</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recent/Updated Content */}
            <div className="border-2 border-blue-200 bg-blue-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-sm">2. Recently Updated Content</h4>
              </div>
              <p className="text-xs text-slate-700 mb-2">
                Prioritize pages with fresh updates by using accurate{" "}
                <code className="bg-blue-100 px-1 rounded">&lt;lastmod&gt;</code> dates. This
                signals to Google which pages deserve recrawling first.
              </p>
              <div className="bg-white border border-blue-200 p-3 rounded text-xs">
                <strong>Strategy:</strong> Set{" "}
                <code className="bg-slate-100 px-1 rounded">&lt;lastmod&gt;</code> to the actual
                content modification date (not template/CSS changes). Pages with recent dates may be
                crawled more frequently.
              </div>
            </div>

            {/* Deep/Orphan Pages */}
            <div className="border-2 border-purple-200 bg-purple-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <ShoppingBag className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-sm">3. Deep or Hard-to-Reach Pages</h4>
              </div>
              <p className="text-xs text-slate-700 mb-2">
                Pages that are 4+ clicks from the homepage or have few internal links pointing to
                them may not be discovered through normal crawling. Sitemaps ensure they&apos;re
                found.
              </p>
              <div className="bg-white border border-purple-200 p-3 rounded text-xs">
                <strong>Examples:</strong> Archived blog posts, niche product categories, seasonal
                landing pages, deep subcategories. Better solution: improve internal linking, but
                use sitemap as a safety net.
              </div>
            </div>

            {/* Canonical Versions Only */}
            <div className="border-2 border-orange-200 bg-orange-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <h4 className="font-semibold text-sm">4. Canonical Versions Only</h4>
              </div>
              <p className="text-xs text-slate-700 mb-2">
                If you have duplicate content with canonical tags,{" "}
                <strong>only include the canonical URL</strong> in your sitemap. Including
                duplicates weakens the canonical signal.
              </p>
              <div className="bg-white border border-orange-200 p-3 rounded text-xs">
                <div className="mb-1">
                  <strong>✓ Include:</strong>{" "}
                  <code className="bg-green-50 px-1 rounded">example.com/product</code> (canonical)
                </div>
                <div>
                  <strong>✗ Exclude:</strong>{" "}
                  <code className="bg-red-50 px-1 rounded">example.com/product?ref=email</code>{" "}
                  (duplicate)
                </div>
              </div>
              <Link href="/technical-seo/duplicate-content">
                <Button size="sm" variant="outline" className="mt-2 text-xs">
                  Learn About Canonical URLs
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What to Exclude */}
      <Card className="border-2 border-red-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <XCircle className="h-5 w-5 text-red-600" />
            What to Exclude from Your Sitemap
          </CardTitle>
          <CardDescription>
            Pages that dilute sitemap quality and waste crawl budget
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {/* Paginated Pages */}
            <div className="border-2 border-red-200 bg-red-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-sm">1. Paginated Pages (page=2, page=3...)</h4>
                <Badge className="bg-red-600 text-[10px]">Critical</Badge>
              </div>
              <p className="text-xs text-slate-700 mb-3">
                <strong>Why exclude:</strong> Pagination creates massive numbers of duplicate/thin
                content pages. Only the first page (page=1 or no param) should be in your sitemap.
                Use
                <code className="bg-slate-100 px-1 rounded mx-1">
                  rel=&quot;next&quot;/&quot;prev&quot;
                </code>{" "}
                tags for proper pagination handling.
              </p>
              <div className="grid md:grid-cols-2 gap-2 text-xs">
                <div className="bg-white border border-green-200 p-2 rounded">
                  <div className="font-semibold mb-1 text-green-700">✓ Include</div>
                  <ul className="space-y-0.5 text-slate-700 font-mono text-[10px]">
                    <li>• /category/shoes</li>
                    <li>• /blog</li>
                  </ul>
                </div>
                <div className="bg-white border border-red-200 p-2 rounded">
                  <div className="font-semibold mb-1 text-red-700">✗ Exclude</div>
                  <ul className="space-y-0.5 text-slate-700 font-mono text-[10px]">
                    <li>• /category/shoes?page=2</li>
                    <li>• /category/shoes?page=47</li>
                    <li>• /blog?page=5</li>
                  </ul>
                </div>
              </div>
              <Link href="/technical-seo/pagination">
                <Button size="sm" variant="outline" className="mt-2 text-xs">
                  Learn Pagination Best Practices
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </div>

            {/* Filtered/Sorted URLs */}
            <div className="border-2 border-orange-200 bg-orange-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Filter className="h-5 w-5 text-orange-600" />
                <h4 className="font-semibold text-sm">
                  2. Filtered & Sorted URLs (Nuanced Strategy)
                </h4>
                <Badge className="bg-orange-600 text-[10px]">Context-Dependent</Badge>
              </div>
              <p className="text-xs text-slate-700 mb-3">
                <strong>Default strategy:</strong> Exclude filtered URLs to avoid exponential
                duplicate content. However, there&apos;s an important exception for single
                high-value filters with real search intent.
              </p>

              <div className="space-y-3">
                {/* Always Exclude */}
                <div className="bg-white border-2 border-red-300 p-3 rounded text-xs">
                  <div className="font-semibold mb-2 text-red-700">
                    ✗ Always Exclude: Multiple Parameters
                  </div>
                  <div className="space-y-1 text-slate-700">
                    <div>
                      <code className="bg-red-50 px-1 rounded">/shop/shoes?color=red&size=10</code>{" "}
                      - Multiple params create exponential combinations
                    </div>
                    <div>
                      <code className="bg-red-50 px-1 rounded">
                        /shop/shoes?color=red&size=10&sort=price
                      </code>{" "}
                      - Crawl trap territory
                    </div>
                    <div>
                      <code className="bg-red-50 px-1 rounded">/shop/shoes?sort=price</code> - No
                      search intent, just UX sorting
                    </div>
                  </div>
                </div>

                {/* Single Parameter Exception */}
                <div className="bg-white border-2 border-blue-300 p-3 rounded text-xs">
                  <div className="font-semibold mb-2 text-blue-700">
                    ⚠️ Exception: Single Stable Filters (If No Clean Paths)
                  </div>
                  <div className="space-y-2 text-slate-700">
                    <div>
                      <strong>Can include IF:</strong>
                      <ul className="ml-4 mt-1 space-y-0.5">
                        <li>• Real search intent (people search &quot;red shoes&quot;)</li>
                        <li>• Limited stable values (8-10 colors, not 1000s)</li>
                        <li>• Unique content per filter (not just sorting)</li>
                        <li>• You can&apos;t implement clean paths yet</li>
                      </ul>
                    </div>
                    <div className="mt-2">
                      <div>
                        <code className="bg-blue-50 px-1 rounded">/shop/shoes?color=red</code> -
                        Acceptable if criteria met
                      </div>
                      <div>
                        <code className="bg-blue-50 px-1 rounded">/shop/shoes?size=10</code> -
                        Acceptable if criteria met
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preferred Approach */}
                <div className="bg-white border-2 border-green-300 p-3 rounded text-xs">
                  <div className="font-semibold mb-2 text-green-700">
                    ✓ Best Practice: Convert to Clean Paths
                  </div>
                  <div className="space-y-2 text-slate-700">
                    <div>
                      <strong>Always prefer clean paths over query parameters:</strong>
                    </div>
                    <div className="mt-2">
                      <div>
                        <code className="bg-green-50 px-1 rounded">/shop/shoes</code> - Base
                        category (always include)
                      </div>
                      <div>
                        <code className="bg-green-50 px-1 rounded">/shop/shoes/red</code> - Clean
                        path for color filter (ideal)
                      </div>
                      <div>
                        <code className="bg-green-50 px-1 rounded">/shop/shoes/size-10</code> -
                        Clean path for size (ideal)
                      </div>
                    </div>
                    <div className="mt-2 text-green-700 italic">
                      Clean paths provide better keyword targeting, user experience, and eliminate
                      parameter complexity.
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="border-orange-300 bg-orange-50 mt-3">
                <Sparkles className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  <strong>Decision Framework:</strong> Multi-params = always exclude. Single stable
                  filter with search intent = can include as interim solution. Clean paths = always
                  the goal. Your choice depends on your implementation capabilities and whether
                  filters represent real search queries.
                </AlertDescription>
              </Alert>

              <Link href="/technical-seo/parameters">
                <Button size="sm" variant="outline" className="mt-2 text-xs">
                  Learn Parameter Handling
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </div>

            {/* Search Results */}
            <div className="border-2 border-red-200 bg-red-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Search className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-sm">3. Internal Search Results</h4>
              </div>
              <p className="text-xs text-slate-700 mb-2">
                <strong>Why exclude:</strong> Search result pages are dynamic, user-specific, and
                infinite in number. They create duplicate content and provide no unique value to
                search engines.
              </p>
              <div className="bg-white border border-red-200 p-3 rounded text-xs">
                <strong>✗ Exclude:</strong>{" "}
                <code className="bg-red-50 px-1 rounded">/search?q=shoes</code>,
                <code className="bg-red-50 px-1 rounded ml-1">/search?query=red+sneakers</code>
              </div>
            </div>

            {/* Duplicate Content */}
            <div className="border-2 border-red-200 bg-red-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-sm">4. Duplicate Content Variations</h4>
              </div>
              <p className="text-xs text-slate-700 mb-2">
                <strong>Why exclude:</strong> Including multiple versions of the same content
                confuses Google about which version to index and dilutes ranking signals.
              </p>
              <div className="bg-white border border-red-200 p-3 rounded text-xs">
                <div className="mb-1">
                  <strong>✓ Include:</strong>{" "}
                  <code className="bg-green-50 px-1 rounded">/product/blue-sneakers</code>
                </div>
                <div className="mb-1">
                  <strong>✗ Exclude:</strong>{" "}
                  <code className="bg-red-50 px-1 rounded">/product/blue-sneakers?print=1</code>
                </div>
                <div className="mb-1">
                  <strong>✗ Exclude:</strong>{" "}
                  <code className="bg-red-50 px-1 rounded">/product/blue-sneakers?ref=email</code>
                </div>
                <div>
                  <strong>✗ Exclude:</strong>{" "}
                  <code className="bg-red-50 px-1 rounded">/products/view/12345</code> (if same as
                  first)
                </div>
              </div>
            </div>

            {/* noindex Pages */}
            <div className="border-2 border-red-200 bg-red-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-sm">5. Pages with noindex Tag</h4>
              </div>
              <p className="text-xs text-slate-700 mb-2">
                <strong>Why exclude:</strong> Including pages marked{" "}
                <code className="bg-slate-100 px-1 rounded">noindex</code> in your sitemap sends
                conflicting signals. Google may penalize sitemap quality for including unindexable
                URLs.
              </p>
              <div className="bg-white border border-red-200 p-3 rounded text-xs">
                <strong>✗ Exclude:</strong> Admin pages, thank-you pages, checkout flow, user
                account pages (if noindex), staging/test pages
              </div>
            </div>

            {/* Low-Value Pages */}
            <div className="border-2 border-red-200 bg-red-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-sm">6. Low-Value or Thin Content</h4>
              </div>
              <p className="text-xs text-slate-700 mb-2">
                <strong>Why exclude:</strong> Pages with minimal unique content don&apos;t deserve
                indexation priority. Including them dilutes your sitemap&apos;s signal strength.
              </p>
              <div className="bg-white border border-red-200 p-3 rounded text-xs">
                <strong>Examples:</strong> Tag archives with 1-2 posts, empty category pages,
                placeholder pages, very short or auto-generated content without user value
              </div>
            </div>
          </div>

          <Alert className="border-red-300 bg-red-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Quality Signal:</strong> Google evaluates sitemap quality. If your sitemap is
              full of unindexable, low-value, or duplicate URLs, it may trust your sitemap less
              overall. Aim for 70%+ indexation rate.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Why Not Index Everything */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-600" />
            Why We Don&apos;t Want to Index Everything
          </CardTitle>
          <CardDescription>Strategic curation is better than exhaustive coverage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="border border-blue-200 bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-blue-600" />
                1. Crawl Budget Limitations
              </h4>
              <p className="text-xs text-slate-700">
                Google allocates limited crawl budget to each site. Every low-value URL in your
                sitemap takes crawling time away from important pages. Sites with 500k URLs in their
                sitemap but only 50k worth indexing waste 90% of their crawl budget.
              </p>
            </div>

            <div className="border border-blue-200 bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Target className="h-4 w-4 text-blue-600" />
                2. Quality Dilution
              </h4>
              <p className="text-xs text-slate-700">
                When you have thousands of thin, duplicate, or low-value pages indexed, it can hurt
                your site&apos;s overall quality score with Google. Fewer high-quality indexed pages
                often outperform many low-quality ones.
              </p>
            </div>

            <div className="border border-blue-200 bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-blue-600" />
                3. Ranking Signal Dilution
              </h4>
              <p className="text-xs text-slate-700">
                When duplicate or very similar pages compete for the same keywords, they split
                ranking signals (backlinks, engagement, authority) across multiple URLs.
                Consolidating these signals to one canonical page is more effective.
              </p>
            </div>

            <div className="border border-blue-200 bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Search className="h-4 w-4 text-blue-600" />
                4. User Experience
              </h4>
              <p className="text-xs text-slate-700">
                When users search for your brand and see 50 variations of the same page with
                different URL parameters, it creates confusion. One clean canonical URL provides a
                better search experience.
              </p>
            </div>
          </div>

          <Alert className="border-green-300 bg-green-50">
            <Sparkles className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Best Practice:</strong> Aim for a sitemap that includes 100% of your important
              pages and 0% of low-value pages. A sitemap with 10,000 quality URLs is more effective
              than one with 500,000 mixed-quality URLs.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Priority and Changefreq Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            Priority & Changefreq Tags: Mostly Ignored
          </CardTitle>
          <CardDescription>Understanding what Google actually uses</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-amber-200 bg-amber-50 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2">&lt;priority&gt; Tag</h4>
              <p className="text-xs text-slate-700 mb-2">
                <strong>Purpose:</strong> Indicate relative importance of URLs (0.0 to 1.0 scale)
              </p>
              <p className="text-xs text-slate-700 mb-2">
                <strong>Reality:</strong> Google largely ignores this. Your internal linking
                structure is a much stronger signal of page importance.
              </p>
              <div className="bg-white border border-amber-200 p-2 rounded text-xs text-amber-700">
                Not worth your time to configure precisely
              </div>
            </div>

            <div className="border border-amber-200 bg-amber-50 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2">&lt;changefreq&gt; Tag</h4>
              <p className="text-xs text-slate-700 mb-2">
                <strong>Purpose:</strong> Suggest how often a page changes (daily, weekly, etc.)
              </p>
              <p className="text-xs text-slate-700 mb-2">
                <strong>Reality:</strong> Google ignores this entirely. They determine crawl
                frequency based on observed change patterns, not suggested ones.
              </p>
              <div className="bg-white border border-amber-200 p-2 rounded text-xs text-amber-700">
                Skip this tag completely
              </div>
            </div>
          </div>

          <div className="border-2 border-green-200 bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              &lt;lastmod&gt; Tag: Actually Useful
            </h4>
            <p className="text-xs text-slate-700 mb-2">
              <strong>This one matters!</strong> Accurate{" "}
              <code className="bg-green-100 px-1 rounded">&lt;lastmod&gt;</code> dates tell Google
              which pages have changed recently and may deserve recrawling priority.
            </p>
            <div className="bg-white border border-green-200 p-2 rounded text-xs">
              <strong>Best Practice:</strong> Only update{" "}
              <code className="bg-slate-100 px-1 rounded">&lt;lastmod&gt;</code> for meaningful
              content changes, not CSS/template updates. Use ISO 8601 format:
              <code className="bg-slate-100 px-1 rounded ml-1">2024-01-15T10:30:00+00:00</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strategic Checklist */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-green-600" />
            Sitemap Inclusion Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Include all indexable product/article pages</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Include category/section pages</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Use canonical URLs only</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Accurate &lt;lastmod&gt; dates</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Include deep/orphan pages</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Exclude paginated pages (page 2+)</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Exclude filtered/sorted URLs</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Exclude search result pages</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Exclude noindex pages</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Exclude duplicate content</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
