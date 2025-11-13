import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  FileCode,
  Search,
  Shield,
  Gauge,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  Zap,
  Bot,
  Server,
} from "lucide-react";

export default function UnderstandingTab() {
  return (
    <div className="space-y-6">
      {/* What is robots.txt */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5 text-blue-600" />
            What is robots.txt?
          </CardTitle>
          <CardDescription>
            A simple text file that controls how search engine crawlers access your website
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-700">
            <strong>robots.txt</strong> is a text file placed in the root directory of your website
            (e.g., example.com/robots.txt) that tells search engine crawlers which pages or sections
            of your site they should and shouldn&apos;t access. It&apos;s part of the{" "}
            <strong>Robots Exclusion Protocol (REP)</strong>, a standard followed by all major
            search engines.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                What robots.txt Does
              </h4>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Controls crawler access to specific URLs or patterns</li>
                <li>• Prevents crawling of low-value or duplicate pages</li>
                <li>• Protects server resources from excessive crawling</li>
                <li>• References your XML sitemap location</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                What robots.txt Does NOT Do
              </h4>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Does NOT prevent URLs from being indexed</li>
                <li>• Does NOT provide security (use authentication instead)</li>
                <li>• Does NOT guarantee compliance (crawlers can ignore it)</li>
                <li>• Does NOT remove already indexed pages</li>
              </ul>
            </div>
          </div>

          <Alert className="border-red-300 bg-red-50">
            <Shield className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Critical Misconception:</strong> Blocking a URL in robots.txt does NOT prevent
              it from appearing in search results. If other sites link to a blocked page, it can
              still be indexed (though without content). Use{" "}
              <code className="bg-red-100 px-1 rounded">noindex</code> meta tags to prevent
              indexing.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Why It Matters for SEO */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-600" />
            Why robots.txt Matters for SEO
          </CardTitle>
          <CardDescription>
            Proper robots.txt configuration is crucial for crawl budget optimization and site
            performance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {/* Crawl Budget */}
            <div className="border border-green-200 bg-green-50 p-4 rounded">
              <div className="flex items-start gap-3">
                <Gauge className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">1. Crawl Budget Optimization</h4>
                  <p className="text-xs text-slate-700 mb-2">
                    Search engines allocate a limited &quot;crawl budget&quot; to each site—the
                    number of pages they&apos;ll crawl in a given timeframe. Wasting it on low-value
                    pages means important content gets crawled less frequently.
                  </p>
                  <div className="bg-white border border-green-200 p-2 rounded text-xs">
                    <strong>Example:</strong> A site with 100,000 paginated URLs (page=2, page=3...)
                    and 5,000 product pages. Without robots.txt blocking pagination, Google may
                    spend 95% of crawl budget on duplicates instead of new products.
                  </div>
                </div>
              </div>
            </div>

            {/* Preventing Duplicate Content Issues */}
            <div className="border border-purple-200 bg-purple-50 p-4 rounded">
              <div className="flex items-start gap-3">
                <FileCode className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">
                    2. Preventing Duplicate Content Discovery
                  </h4>
                  <p className="text-xs text-slate-700 mb-2">
                    Many sites generate infinite URL variations through filters, sorting, and
                    parameters. robots.txt prevents crawlers from discovering these duplicates in
                    the first place.
                  </p>
                  <div className="bg-white border border-purple-200 p-2 rounded text-xs">
                    <strong>Common culprits:</strong> ?sort=price, ?filter=color-red, ?page=47,
                    /search?q=shoes, /cart, /checkout, /thank-you
                  </div>
                </div>
              </div>
            </div>

            {/* Server Load */}
            <div className="border border-blue-200 bg-blue-50 p-4 rounded">
              <div className="flex items-start gap-3">
                <Server className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">3. Reducing Server Load</h4>
                  <p className="text-xs text-slate-700 mb-2">
                    Aggressive crawlers can overload servers, especially for database-heavy pages
                    like search results or complex filters. robots.txt provides a first line of
                    defense.
                  </p>
                  <div className="bg-white border border-blue-200 p-2 rounded text-xs">
                    <strong>High-risk pages:</strong> Internal search, faceted navigation,
                    user-generated content pages, calendar views, archive pages
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-green-300 bg-green-50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Impact:</strong> Proper robots.txt can reduce crawl waste by 70-90% on large
              sites, allowing Google to discover new content faster and crawl important pages more
              frequently.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* How Search Engines Read robots.txt */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-indigo-600" />
            How Search Engines Read robots.txt
          </CardTitle>
          <CardDescription>Understanding the crawler perspective</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-indigo-100 rounded-full p-2 flex-shrink-0">
                <span className="text-xs font-bold text-indigo-700">1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">First Thing Checked</h4>
                <p className="text-xs text-slate-700">
                  Before crawling any page on your site, search engines request{" "}
                  <code className="bg-slate-100 px-1 rounded">example.com/robots.txt</code>. If it
                  doesn&apos;t exist (404), they assume everything is allowed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-indigo-100 rounded-full p-2 flex-shrink-0">
                <span className="text-xs font-bold text-indigo-700">2</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">Parse Rules by User-Agent</h4>
                <p className="text-xs text-slate-700">
                  Each crawler (Googlebot, Bingbot, etc.) looks for rules specific to its
                  user-agent, falling back to
                  <code className="bg-slate-100 px-1 rounded">User-agent: *</code> (all bots) if no
                  specific rules exist.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-indigo-100 rounded-full p-2 flex-shrink-0">
                <span className="text-xs font-bold text-indigo-700">3</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">Match Most Specific Rule</h4>
                <p className="text-xs text-slate-700">
                  When multiple rules could apply, the longest matching pattern wins.{" "}
                  <code className="bg-slate-100 px-1 rounded">Disallow: /admin/</code>
                  beats <code className="bg-slate-100 px-1 rounded">Allow: /</code> for{" "}
                  <code className="bg-slate-100 px-1 rounded">/admin/settings</code>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-indigo-100 rounded-full p-2 flex-shrink-0">
                <span className="text-xs font-bold text-indigo-700">4</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">Cached for Hours</h4>
                <p className="text-xs text-slate-700">
                  robots.txt is cached by search engines (typically 24 hours). Changes won&apos;t
                  take effect immediately. Test with Google Search Console&apos;s robots.txt Tester
                  before deploying.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3 mt-4">
            <div className="bg-slate-50 border border-slate-200 p-3 rounded text-xs">
              <div className="font-semibold mb-1 flex items-center gap-2">
                <Search className="h-4 w-4 text-slate-600" />
                Major Crawlers
              </div>
              <ul className="space-y-1 text-slate-700">
                <li>
                  • <strong>Googlebot:</strong> Respects all directives
                </li>
                <li>
                  • <strong>Bingbot:</strong> Respects all + crawl-delay
                </li>
                <li>
                  • <strong>Yandexbot:</strong> Respects all + crawl-delay
                </li>
                <li>
                  • <strong>Applebot:</strong> Respects basic directives
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 p-3 rounded text-xs">
              <div className="font-semibold mb-1 flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-600" />
                Bad Bots
              </div>
              <ul className="space-y-1 text-slate-700">
                <li>• Scrapers often ignore robots.txt</li>
                <li>• Spambots don&apos;t respect it</li>
                <li>• Security: robots.txt is NOT protection</li>
                <li>• Use server-side blocking for bad actors</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Misconceptions */}
      <Card className="border-2 border-red-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            Common Misconceptions That Hurt SEO
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="bg-red-50 border border-red-200 p-3 rounded">
              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xs mb-1">
                    MYTH: &quot;Blocking in robots.txt prevents indexing&quot;
                  </h4>
                  <p className="text-xs text-slate-700">
                    <strong>Reality:</strong> Blocked URLs can still appear in search results if
                    other sites link to them (shown as &quot;A description for this result is not
                    available&quot;). Use noindex meta tags instead.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-3 rounded">
              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xs mb-1">
                    MYTH: &quot;Block CSS/JS to speed up crawling&quot;
                  </h4>
                  <p className="text-xs text-slate-700">
                    <strong>Reality:</strong> Google needs CSS/JS to render pages properly. Blocking
                    them can hurt rankings for JavaScript-heavy sites. Only block if absolutely
                    necessary.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-3 rounded">
              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xs mb-1">
                    MYTH: &quot;robots.txt provides security&quot;
                  </h4>
                  <p className="text-xs text-slate-700">
                    <strong>Reality:</strong> robots.txt is publicly accessible. It actually reveals
                    URLs you&apos;re trying to hide! Use proper authentication and server-side
                    access controls for sensitive pages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Impact */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Real-World Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="bg-white border border-green-200 p-3 rounded">
              <h4 className="font-semibold mb-2 text-green-700">
                ✓ E-commerce Site (50k products)
              </h4>
              <p className="text-slate-700">
                Blocked paginated category pages and filter URLs. Result:{" "}
                <strong>73% reduction</strong> in wasted crawl, new products indexed{" "}
                <strong>4x faster</strong>, organic traffic increased 31% over 6 months.
              </p>
            </div>

            <div className="bg-white border border-green-200 p-3 rounded">
              <h4 className="font-semibold mb-2 text-green-700">✓ News Site (1M+ articles)</h4>
              <p className="text-slate-700">
                Blocked search results and tag archive pages. Result: Crawl efficiency improved{" "}
                <strong>86%</strong>, Google crawled breaking news within <strong>2 hours</strong>{" "}
                instead of 12+ hours.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
