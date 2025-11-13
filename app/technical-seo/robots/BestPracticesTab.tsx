import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ShieldAlert,
  ShoppingCart,
  Search,
  Filter,
  FileText,
  Settings,
  Info,
  Code,
  TestTube,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function BestPracticesTab() {
  return (
    <div className="space-y-6">
      {/* What to Block */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <XCircle className="h-5 w-5 text-red-600" />
            What to Block: Common Patterns
          </CardTitle>
          <CardDescription>Prevent crawlers from wasting budget on low-value pages</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {/* Admin Areas */}
            <div className="border-2 border-red-200 bg-red-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-sm">1. Admin & Private Areas</h4>
              </div>
              <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs mb-2">
                <div className="text-yellow-300">Disallow: /admin/</div>
                <div className="text-yellow-300">Disallow: /wp-admin/</div>
                <div className="text-yellow-300">Disallow: /user/*/settings</div>
                <div className="text-yellow-300">Disallow: /dashboard/</div>
              </div>
              <p className="text-xs text-slate-700">
                <strong>Why:</strong> Admin pages have no SEO value and waste crawl budget. Block
                them even if protected by authentication (don&apos;t rely on robots.txt for security
                though).
              </p>
            </div>

            {/* Search Results */}
            <div className="border-2 border-purple-200 bg-purple-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Search className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-sm">2. Internal Search Results</h4>
              </div>
              <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs mb-2">
                <div className="text-yellow-300">Disallow: /search</div>
                <div className="text-yellow-300">Disallow: /*?q=</div>
                <div className="text-yellow-300">Disallow: /*?search=</div>
                <div className="text-yellow-300">Disallow: /*?s=</div>
              </div>
              <p className="text-xs text-slate-700">
                <strong>Why:</strong> Search results are dynamic, user-specific, and infinite. They
                create massive duplicate content issues and burn through crawl budget rapidly.
              </p>
            </div>

            {/* Filtered/Sorted URLs */}
            <div className="border-2 border-orange-200 bg-orange-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Filter className="h-5 w-5 text-orange-600" />
                <h4 className="font-semibold text-sm">3. Filtered & Sorted URLs</h4>
              </div>
              <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs mb-2">
                <div className="text-yellow-300">Disallow: /*?filter=</div>
                <div className="text-yellow-300">Disallow: /*?sort=</div>
                <div className="text-yellow-300">Disallow: /*?color=</div>
                <div className="text-yellow-300">Disallow: /*?price=</div>
              </div>
              <p className="text-xs text-slate-700">
                <strong>Why:</strong> Filters create exponential URL combinations. A category with
                100 products and 5 filters can generate 100,000+ duplicate URLs. Block or use
                parameter handling.
              </p>
              <Link href="/technical-seo/parameters">
                <Button size="sm" variant="outline" className="mt-2 text-xs">
                  Learn Parameter Handling
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </div>

            {/* Pagination */}
            <div className="border-2 border-blue-200 bg-blue-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-sm">4. Paginated Pages (Selective)</h4>
              </div>
              <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs mb-2">
                <div className="text-yellow-300">Disallow: /*?page=</div>
                <div className="text-yellow-300">Disallow: /*&page=</div>
                <div className="text-slate-400"># Or allow page 2-5, block rest:</div>
                <div className="text-green-400">Allow: /*?page=2</div>
                <div className="text-green-400">Allow: /*?page=3</div>
                <div className="text-yellow-300">Disallow: /*?page=</div>
              </div>
              <p className="text-xs text-slate-700">
                <strong>Strategy:</strong> Block deep pagination (page 10+) but allow first few
                pages if they have unique content. Use rel=&quot;prev/next&quot; tags for better
                handling.
              </p>
              <Link href="/technical-seo/pagination">
                <Button size="sm" variant="outline" className="mt-2 text-xs">
                  Learn Pagination Best Practices
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </div>

            {/* E-commerce Specific */}
            <div className="border-2 border-green-200 bg-green-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <ShoppingCart className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-sm">5. E-commerce Checkout Flow</h4>
              </div>
              <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs mb-2">
                <div className="text-yellow-300">Disallow: /cart</div>
                <div className="text-yellow-300">Disallow: /checkout</div>
                <div className="text-yellow-300">Disallow: /my-account/</div>
                <div className="text-yellow-300">Disallow: /thank-you</div>
                <div className="text-yellow-300">Disallow: /order-confirmation</div>
              </div>
              <p className="text-xs text-slate-700">
                <strong>Why:</strong> These pages are user-specific, have no SEO value, and should
                never appear in search results. Indexing them wastes budget and confuses users.
              </p>
            </div>

            {/* Session/Tracking Parameters */}
            <div className="border-2 border-amber-200 bg-amber-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-sm">6. Session & Tracking Parameters</h4>
              </div>
              <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs mb-2">
                <div className="text-yellow-300">Disallow: /*?sessionid=</div>
                <div className="text-yellow-300">Disallow: /*?sid=</div>
                <div className="text-yellow-300">Disallow: /*?utm_source=</div>
                <div className="text-yellow-300">Disallow: /*?fbclid=</div>
              </div>
              <p className="text-xs text-slate-700">
                <strong>Why:</strong> Session IDs and tracking parameters create infinite duplicate
                URLs. Better solution: use cookies for sessions and configure Google Analytics to
                ignore UTM parameters.
              </p>
            </div>
          </div>

          <Alert className="border-red-300 bg-red-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Pro Tip:</strong> Use Google Search Console&apos;s URL Inspection tool to see
              which of your URLs are being crawled most. Focus on blocking patterns that appear
              frequently but have low value.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* What NOT to Block */}
      <Card className="border-2 border-green-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            What NOT to Block
          </CardTitle>
          <CardDescription>Avoid these common mistakes that hurt SEO</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {/* CSS & JavaScript */}
            <div className="border border-green-200 bg-green-50 p-4 rounded">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">✓ CSS & JavaScript Files</h4>
                  <p className="text-xs text-slate-700 mb-2">
                    <strong>DO NOT block</strong> unless absolutely necessary. Google needs to
                    render your page properly to understand its content and mobile-friendliness.
                  </p>
                  <div className="bg-white border border-green-200 p-2 rounded text-xs text-slate-700">
                    <strong>Old (wrong) practice:</strong>{" "}
                    <code className="bg-red-100 px-1 rounded">Disallow: /*.js$</code> and
                    <code className="bg-red-100 px-1 rounded ml-1">Disallow: /*.css$</code>
                    <br />
                    <strong>Modern (correct):</strong> Allow Google to access all rendering
                    resources
                  </div>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="border border-green-200 bg-green-50 p-4 rounded">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">✓ Images (Usually)</h4>
                  <p className="text-xs text-slate-700 mb-2">
                    Don&apos;t block images unless you specifically don&apos;t want them in Google
                    Image Search. Images can drive significant organic traffic.
                  </p>
                  <div className="bg-white border border-green-200 p-2 rounded text-xs text-slate-700">
                    <strong>Exception:</strong> Block user-uploaded content if it&apos;s low quality
                    or could contain inappropriate material affecting your site&apos;s reputation.
                  </div>
                </div>
              </div>
            </div>

            {/* Canonical Pages */}
            <div className="border border-green-200 bg-green-50 p-4 rounded">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">✓ Pages You Want Indexed</h4>
                  <p className="text-xs text-slate-700 mb-2">
                    Never block pages with valuable content. Use{" "}
                    <code className="bg-slate-100 px-1 rounded">noindex</code> meta tags if you want
                    to prevent indexing while allowing crawling.
                  </p>
                  <div className="bg-white border border-amber-200 p-2 rounded text-xs text-amber-700">
                    <AlertTriangle className="h-3 w-3 inline mr-1" />
                    <strong>Common mistake:</strong> Blocking /blog/ or /products/ by accident with
                    overly broad rules
                  </div>
                </div>
              </div>
            </div>

            {/* API Endpoints (Depends) */}
            <div className="border border-blue-200 bg-blue-50 p-4 rounded">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">
                    ? API Endpoints (Context-Dependent)
                  </h4>
                  <p className="text-xs text-slate-700 mb-2">
                    Block API endpoints if they return JSON/XML with no user-facing content. Allow
                    if they serve actual content pages (e.g., headless CMS APIs).
                  </p>
                  <div className="bg-white border border-blue-200 p-2 rounded text-xs">
                    <div className="text-slate-700">
                      <strong>Block:</strong>{" "}
                      <code className="bg-slate-100 px-1 rounded">/api/v1/</code> (data endpoints)
                    </div>
                    <div className="text-slate-700">
                      <strong>Allow:</strong>{" "}
                      <code className="bg-slate-100 px-1 rounded">/api/pages/</code> (if serves
                      content)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Example */}
      <Card className="border-2 border-indigo-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-600" />
            Complete Real-World Example
          </CardTitle>
          <CardDescription>
            A well-structured robots.txt for a typical e-commerce site
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <div className="text-green-400"># E-commerce Site robots.txt</div>
            <div className="text-green-400"># Updated: 2024-01-15</div>
            <div className="mt-2 text-blue-300">User-agent: *</div>
            <div className="mt-2 text-green-400"># Block admin and user areas</div>
            <div className="text-yellow-300">Disallow: /admin/</div>
            <div className="text-yellow-300">Disallow: /user/*/settings</div>
            <div className="text-yellow-300">Disallow: /my-account/</div>
            <div className="mt-2 text-green-400"># Block checkout flow</div>
            <div className="text-yellow-300">Disallow: /cart</div>
            <div className="text-yellow-300">Disallow: /checkout</div>
            <div className="text-yellow-300">Disallow: /order-confirmation</div>
            <div className="text-yellow-300">Disallow: /thank-you</div>
            <div className="mt-2 text-green-400"># Block search results</div>
            <div className="text-yellow-300">Disallow: /search</div>
            <div className="text-yellow-300">Disallow: /*?q=</div>
            <div className="text-yellow-300">Disallow: /*?search=</div>
            <div className="mt-2 text-green-400"># Block filter and sort parameters</div>
            <div className="text-yellow-300">Disallow: /*?filter=</div>
            <div className="text-yellow-300">Disallow: /*?sort=</div>
            <div className="text-yellow-300">Disallow: /*?color=</div>
            <div className="text-yellow-300">Disallow: /*?size=</div>
            <div className="text-yellow-300">Disallow: /*?price=</div>
            <div className="mt-2 text-green-400"># Block deep pagination (allow first 5 pages)</div>
            <div className="text-purple-300">Allow: /*?page=2</div>
            <div className="text-purple-300">Allow: /*?page=3</div>
            <div className="text-purple-300">Allow: /*?page=4</div>
            <div className="text-purple-300">Allow: /*?page=5</div>
            <div className="text-yellow-300">Disallow: /*?page=</div>
            <div className="mt-2 text-green-400"># Block session and tracking parameters</div>
            <div className="text-yellow-300">Disallow: /*?sessionid=</div>
            <div className="text-yellow-300">Disallow: /*?sid=</div>
            <div className="text-yellow-300">Disallow: /*?utm_</div>
            <div className="text-yellow-300">Disallow: /*?fbclid=</div>
            <div className="mt-2 text-green-400"># Block print and PDF versions</div>
            <div className="text-yellow-300">Disallow: /*/print$</div>
            <div className="text-yellow-300">Disallow: /*?print=1</div>
            <div className="mt-2 text-green-400"># Sitemap location</div>
            <div className="text-pink-300">Sitemap: https://example.com/sitemap.xml</div>
          </div>

          <Alert className="border-indigo-300 bg-indigo-50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Result:</strong> This configuration typically reduces crawl waste by 75-85% on
              a medium-sized e-commerce site, allowing Google to focus on products and categories.
            </AlertDescription>
          </Alert>

          <Alert className="border-blue-300 bg-blue-50 mt-4">
            <Sparkles className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Advanced Strategy:</strong> Instead of blocking filter parameters like{" "}
              <code className="bg-slate-100 px-1 rounded">?color=red</code> or
              <code className="bg-slate-100 px-1 rounded">?size=large</code>, consider converting
              high-value filters into clean URL paths like{" "}
              <code className="bg-slate-100 px-1 rounded">/shoes/red</code> or{" "}
              <code className="bg-slate-100 px-1 rounded">/shoes/size-10</code>. This works when
              there&apos;s <strong>real search intent</strong> (people actually search for &quot;red
              shoes&quot; or &quot;size 10 shoes&quot;) and the filtered pages have enough unique
              products to warrant indexation. Not every filter deserves a clean URL—only those with
              demonstrated search volume and unique value. This approach gives you indexable filter
              pages while still blocking infinite parameter combinations.
            </AlertDescription>
          </Alert>

          <div className="mt-4 pt-4 border-t border-indigo-200">
            <p className="text-xs text-slate-600 mb-2">
              <strong>Explore More Patterns:</strong> See these blocking strategies in action with
              live examples.
            </p>
            <Link href="/technical-seo/pattern-gallery">
              <Button size="sm" variant="outline" className="text-xs">
                View Pattern Gallery
                <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Testing */}
      <Card className="border-2 border-amber-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TestTube className="h-5 w-5 text-amber-600" />
            Testing Before Deployment
          </CardTitle>
          <CardDescription>Never deploy robots.txt changes without testing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-amber-100 rounded-full p-2 flex-shrink-0">
                <span className="text-xs font-bold text-amber-700">1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">Test with Google Search Console</h4>
                <p className="text-xs text-slate-700">
                  Use the robots.txt Tester tool (Settings → robots.txt) to test URLs against your
                  new rules before deploying. Identifies accidentally blocked important pages.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-amber-100 rounded-full p-2 flex-shrink-0">
                <span className="text-xs font-bold text-amber-700">2</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">Test Critical URLs</h4>
                <p className="text-xs text-slate-700">
                  Manually verify your homepage, top products/articles, and key category pages are
                  NOT blocked. Test both with and without common parameters.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-amber-100 rounded-full p-2 flex-shrink-0">
                <span className="text-xs font-bold text-amber-700">3</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">Monitor Crawl Stats</h4>
                <p className="text-xs text-slate-700">
                  After deploying, watch Google Search Console&apos;s crawl stats for 2-4 weeks. You
                  should see reduced crawl volume on blocked patterns and increased focus on
                  important pages.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-amber-100 rounded-full p-2 flex-shrink-0">
                <span className="text-xs font-bold text-amber-700">4</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">Check for Indexation Drops</h4>
                <p className="text-xs text-slate-700">
                  If you accidentally block important pages, you&apos;ll see indexation drop in GSC.
                  Monitor &quot;Coverage&quot; report for &quot;Blocked by robots.txt&quot; errors.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-amber-200 rounded p-3">
            <h4 className="font-semibold text-xs mb-2 flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-amber-600" />
              Common Testing Mistakes
            </h4>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• Not testing with trailing slashes: /admin vs /admin/</li>
              <li>• Forgetting to test mobile vs desktop Googlebot</li>
              <li>• Not considering subdirectory priority rules</li>
              <li>• Testing in production instead of staging first</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-purple-600" />
            Quick Reference Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Block admin/private areas</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Block internal search results</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Block filter/sort parameters</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Block checkout/cart pages</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Block session/tracking params</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Test with GSC robots.txt tester</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Allow CSS/JS for rendering</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Include sitemap reference</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Document rules with comments</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Monitor crawl stats after changes</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
