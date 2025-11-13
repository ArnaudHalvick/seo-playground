import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  Search,
  Map,
  Zap,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  Clock,
  BarChart3,
  Globe,
  TrendingUp,
} from 'lucide-react';

export default function UnderstandingTab() {
  return (
    <div className="space-y-6">
      {/* What is a Sitemap */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="h-5 w-5 text-blue-600" />
            What is an XML Sitemap?
          </CardTitle>
          <CardDescription>
            A roadmap of your website that helps search engines discover and prioritize content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-700">
            An <strong>XML sitemap</strong> is a file (typically at example.com/sitemap.xml) that lists all the important 
            URLs on your website, along with metadata like when they were last updated and how often they change. It acts 
            as a <strong>discovery mechanism</strong> for search engines to find pages they might otherwise miss.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                What Sitemaps Do
              </h4>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Help search engines discover pages faster</li>
                <li>• Prioritize important/frequently updated content</li>
                <li>• Signal canonical versions of pages</li>
                <li>• Provide last modified dates for content</li>
                <li>• Useful for new sites or sites with poor internal linking</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                What Sitemaps Don&apos;t Do
              </h4>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Don&apos;t guarantee indexing (just discovery)</li>
                <li>• Don&apos;t directly improve rankings</li>
                <li>• Don&apos;t replace proper internal linking</li>
                <li>• Priority/changefreq largely ignored by Google</li>
                <li>• Not a substitute for good site architecture</li>
              </ul>
            </div>
          </div>

          <Alert className="border-blue-300 bg-blue-50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Key Insight:</strong> A sitemap is a <em>discovery tool</em>, not a ranking signal. It helps search 
              engines find pages but doesn&apos;t make them rank better. Think of it as a map—useful for navigation, but 
              the quality of the destination (your content) still matters most.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* How Search Engines Use Sitemaps */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-purple-600" />
            How Search Engines Use Sitemaps
          </CardTitle>
          <CardDescription>
            Understanding the crawler perspective on sitemap data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                <span className="text-xs font-bold text-purple-700">1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">Discovery Source</h4>
                <p className="text-xs text-slate-700">
                  Search engines check your sitemap regularly to discover new or updated pages. This is especially 
                  important for pages deep in your site structure or pages added frequently (like news articles or 
                  product launches).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                <span className="text-xs font-bold text-purple-700">2</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">Crawl Priority Signal</h4>
                <p className="text-xs text-slate-700">
                  When you update <code className="bg-slate-100 px-1 rounded">&lt;lastmod&gt;</code> dates in your sitemap, 
                  Google may prioritize recrawling those pages. This helps fresh content get indexed faster than waiting 
                  for natural link discovery.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                <span className="text-xs font-bold text-purple-700">3</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">Canonical URL Reference</h4>
                <p className="text-xs text-slate-700">
                  URLs in your sitemap are treated as strong canonical signals. If you have duplicate content, only 
                  include the preferred version in the sitemap—this helps Google understand your intent.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                <span className="text-xs font-bold text-purple-700">4</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">Coverage Monitoring</h4>
                <p className="text-xs text-slate-700">
                  Google Search Console uses your sitemap to track indexation coverage. Pages in the sitemap that 
                  aren&apos;t indexed appear as issues, helping you identify crawl or indexation problems.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 p-3 rounded text-xs">
            <div className="font-semibold mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4 text-purple-600" />
              Crawl Frequency
            </div>
            <p className="text-slate-700">
              Google checks popular sitemaps multiple times per day, while less popular sites may only be checked weekly. 
              You can manually request a sitemap crawl in Google Search Console after major updates.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Sitemap vs robots.txt */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-green-600" />
            Sitemap vs robots.txt: Complementary Tools
          </CardTitle>
          <CardDescription>
            Understanding how these two files work together
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-2 border-green-200 bg-green-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-sm">XML Sitemap</h4>
              </div>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Purpose:</strong> &quot;Here are the pages I WANT you to crawl&quot;</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Approach:</strong> Whitelist of important URLs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Effect:</strong> Helps discovery, signals importance</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Example:</strong> List all product pages</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-red-200 bg-red-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold text-sm">robots.txt</h4>
              </div>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <XCircle className="h-3 w-3 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Purpose:</strong> &quot;Here are pages I DON&apos;T want you to crawl&quot;</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-3 w-3 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Approach:</strong> Blocklist of URL patterns</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-3 w-3 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Effect:</strong> Prevents crawling, saves budget</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-3 w-3 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Example:</strong> Block filter parameters</span>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-green-300 bg-green-50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Best Practice:</strong> Use robots.txt to block low-value URLs (filters, admin, search results) 
              and use your sitemap to highlight high-value URLs (products, articles, categories). Together, they guide 
              search engines to your best content efficiently.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* When Sitemaps Are Critical */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-600" />
            When Sitemaps Are Critical
          </CardTitle>
          <CardDescription>
            Situations where sitemaps make the biggest impact
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-3">
            {/* Large Sites */}
            <div className="border border-yellow-200 bg-yellow-50 p-4 rounded">
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Large Sites (10,000+ pages)</h4>
                  <p className="text-xs text-slate-700">
                    With thousands or millions of pages, search engines can&apos;t crawl everything frequently. Sitemaps 
                    ensure important pages are discovered and prioritized, especially deep content that may be 4+ clicks 
                    from the homepage.
                  </p>
                  <div className="bg-white border border-yellow-200 p-2 rounded text-[10px] mt-2 text-slate-600">
                    <strong>Example:</strong> E-commerce with 50k products, news sites with archives dating back years
                  </div>
                </div>
              </div>
            </div>

            {/* New Sites */}
            <div className="border border-blue-200 bg-blue-50 p-4 rounded">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">New Sites (Low/No Backlinks)</h4>
                  <p className="text-xs text-slate-700">
                    Without external links, Google has limited ways to discover your content. A sitemap accelerates 
                    initial indexation by providing a complete list of pages to crawl. Critical during launch phase.
                  </p>
                  <div className="bg-white border border-blue-200 p-2 rounded text-[10px] mt-2 text-slate-600">
                    <strong>Impact:</strong> Can reduce time to first indexation from weeks to days
                  </div>
                </div>
              </div>
            </div>

            {/* Poor Internal Linking */}
            <div className="border border-purple-200 bg-purple-50 p-4 rounded">
              <div className="flex items-start gap-3">
                <Map className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Sites with Poor Internal Linking</h4>
                  <p className="text-xs text-slate-700">
                    If pages are &quot;orphaned&quot; (no internal links pointing to them) or require many clicks to reach, 
                    Google may never discover them through normal crawling. Sitemap ensures nothing is missed.
                  </p>
                  <div className="bg-white border border-purple-200 p-2 rounded text-[10px] mt-2 text-slate-600">
                    <strong>Solution:</strong> Use sitemap as a safety net, but also improve internal linking structure
                  </div>
                </div>
              </div>
            </div>

            {/* Frequently Updated Content */}
            <div className="border border-green-200 bg-green-50 p-4 rounded">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Frequently Updated Content</h4>
                  <p className="text-xs text-slate-700">
                    News sites, blogs, job boards, real estate listings—any site where content changes daily needs 
                    sitemaps to signal freshness. Update <code className="bg-green-100 px-1 rounded">&lt;lastmod&gt;</code> dates 
                    to prioritize recrawling.
                  </p>
                  <div className="bg-white border border-green-200 p-2 rounded text-[10px] mt-2 text-slate-600">
                    <strong>Pro Tip:</strong> Update sitemap immediately after publishing new content for fastest indexation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Misconceptions */}
      <Card className="border-2 border-red-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            Common Misconceptions About Sitemaps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="bg-red-50 border border-red-200 p-3 rounded">
              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xs mb-1">MYTH: &quot;All pages in sitemap will be indexed&quot;</h4>
                  <p className="text-xs text-slate-700">
                    <strong>Reality:</strong> Being in the sitemap is NOT a guarantee of indexation. Google still evaluates 
                    page quality, duplicate content, and crawl budget. Sitemaps help discovery, not indexation quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-3 rounded">
              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xs mb-1">MYTH: &quot;More URLs = better sitemap&quot;</h4>
                  <p className="text-xs text-slate-700">
                    <strong>Reality:</strong> Including low-value pages (pagination, filters, duplicates) dilutes your 
                    sitemap&apos;s effectiveness. Google may trust your sitemap less if it contains many unindexable URLs. 
                    Quality over quantity.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-3 rounded">
              <div className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xs mb-1">MYTH: &quot;Priority tags control rankings&quot;</h4>
                  <p className="text-xs text-slate-700">
                    <strong>Reality:</strong> <code className="bg-red-100 px-1 rounded">&lt;priority&gt;</code> and 
                    <code className="bg-red-100 px-1 rounded">&lt;changefreq&gt;</code> are largely ignored by Google. 
                    They don&apos;t affect rankings or crawl priority. Focus on <code className="bg-slate-100 px-1 rounded">&lt;lastmod&gt;</code> instead.
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
              <h4 className="font-semibold mb-2 text-green-700">✓ News Site (5k articles/week)</h4>
              <p className="text-slate-700">
                Implemented dynamic sitemap with real-time <code className="bg-slate-100 px-1 rounded">&lt;lastmod&gt;</code> updates. 
                Result: New articles indexed in <strong>under 30 minutes</strong> (vs 4-6 hours previously), 
                <strong>23% increase</strong> in organic traffic to breaking news.
              </p>
            </div>

            <div className="bg-white border border-green-200 p-3 rounded">
              <h4 className="font-semibold mb-2 text-green-700">✓ E-commerce (80k products)</h4>
              <p className="text-slate-700">
                Cleaned sitemap to remove filtered/paginated URLs (from 500k to 80k URLs). Result: 
                <strong>85% indexation rate</strong> (vs 40% with bloated sitemap), important products crawled 
                <strong>3x more frequently</strong>.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

