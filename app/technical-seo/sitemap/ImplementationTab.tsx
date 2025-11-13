import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Clock,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Info,
  FileCode,
  Server,
  RefreshCw,
  Globe,
  FolderTree,
  Settings,
  BarChart3,
} from "lucide-react";

export default function ImplementationTab() {
  return (
    <div className="space-y-6">
      {/* XML Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-600" />
            XML Sitemap Structure
          </CardTitle>
          <CardDescription>Understanding the basic format and required elements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <p className="text-xs text-slate-700">
              XML sitemaps follow a standardized format defined by <strong>sitemaps.org</strong>.
              They must be valid XML and follow specific schema requirements to be parsed correctly
              by search engines.
            </p>

            {/* Basic Structure */}
            <div className="border-2 border-blue-200 bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <FileCode className="h-4 w-4 text-blue-600" />
                Basic Sitemap Structure
              </h4>
              <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                <div className="text-purple-300">
                  &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
                </div>
                <div className="text-green-400">
                  &lt;urlset xmlns=&quot;http://www.sitemaps.org/schemas/sitemap/0.9&quot;&gt;
                </div>
                <div className="mt-2 text-blue-300"> &lt;url&gt;</div>
                <div className="text-yellow-300">
                  {" "}
                  &lt;loc&gt;https://example.com/page&lt;/loc&gt;
                </div>
                <div className="text-orange-300"> &lt;lastmod&gt;2024-01-15&lt;/lastmod&gt;</div>
                <div className="text-pink-300"> &lt;changefreq&gt;weekly&lt;/changefreq&gt;</div>
                <div className="text-cyan-300"> &lt;priority&gt;0.8&lt;/priority&gt;</div>
                <div className="text-blue-300"> &lt;/url&gt;</div>
                <div className="mt-2 text-blue-300"> &lt;url&gt;</div>
                <div className="text-yellow-300">
                  {" "}
                  &lt;loc&gt;https://example.com/another-page&lt;/loc&gt;
                </div>
                <div className="text-orange-300"> &lt;lastmod&gt;2024-01-10&lt;/lastmod&gt;</div>
                <div className="text-blue-300"> &lt;/url&gt;</div>
                <div className="mt-2 text-green-400">&lt;/urlset&gt;</div>
              </div>
            </div>

            {/* Required vs Optional Tags */}
            <div className="grid md:grid-cols-2 gap-3">
              <div className="border border-green-200 bg-green-50 p-3 rounded">
                <h4 className="font-semibold text-xs mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Required Tags
                </h4>
                <div className="space-y-2 text-xs text-slate-700">
                  <div>
                    <code className="bg-green-100 px-1 rounded">&lt;urlset&gt;</code>
                    <span className="ml-2">Container for all URLs</span>
                  </div>
                  <div>
                    <code className="bg-green-100 px-1 rounded">&lt;url&gt;</code>
                    <span className="ml-2">Container for each URL</span>
                  </div>
                  <div>
                    <code className="bg-green-100 px-1 rounded">&lt;loc&gt;</code>
                    <span className="ml-2">The actual URL (required)</span>
                  </div>
                </div>
              </div>

              <div className="border border-blue-200 bg-blue-50 p-3 rounded">
                <h4 className="font-semibold text-xs mb-2 flex items-center gap-2">
                  <Info className="h-4 w-4 text-blue-600" />
                  Optional Tags
                </h4>
                <div className="space-y-2 text-xs text-slate-700">
                  <div>
                    <code className="bg-blue-100 px-1 rounded">&lt;lastmod&gt;</code>
                    <span className="ml-2">Last modified date (useful)</span>
                  </div>
                  <div>
                    <code className="bg-blue-100 px-1 rounded">&lt;changefreq&gt;</code>
                    <span className="ml-2">Change frequency (ignored)</span>
                  </div>
                  <div>
                    <code className="bg-blue-100 px-1 rounded">&lt;priority&gt;</code>
                    <span className="ml-2">Priority 0.0-1.0 (ignored)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Constraints */}
            <Alert className="border-amber-300 bg-amber-50">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-xs">
                <strong>Constraints:</strong> Max 50,000 URLs per sitemap file. Max file size 50MB
                uncompressed (or 10MB gzipped). URLs must be absolute (full https://...). All URLs
                must be from the same domain/protocol.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Static vs Dynamic */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-purple-600" />
            Static vs Dynamic Sitemap Generation
          </CardTitle>
          <CardDescription>Choosing the right approach for your site</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Static */}
            <div className="border-2 border-slate-200 bg-slate-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-3">
                <FileCode className="h-5 w-5 text-slate-600" />
                <h4 className="font-semibold text-sm">Static Sitemaps</h4>
              </div>
              <div className="space-y-3 text-xs">
                <p className="text-slate-700">
                  Manually created XML file or generated once and saved. Best for small sites with
                  infrequent content changes.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Pros:</strong> Simple, no server processing, cacheable
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-3 w-3 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Cons:</strong> Manual updates, outdated lastmod dates, doesn&apos;t
                      scale
                    </span>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 p-2 rounded">
                  <strong>Use for:</strong> Portfolio sites, small blogs (&lt;50 pages), brochure
                  sites
                </div>
              </div>
            </div>

            {/* Dynamic */}
            <div className="border-2 border-purple-200 bg-purple-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-3">
                <Server className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-sm">Dynamic Sitemaps</h4>
              </div>
              <div className="space-y-3 text-xs">
                <p className="text-slate-700">
                  Generated on-the-fly from database or CMS. Automatically reflects current site
                  state. Best for most modern websites.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Pros:</strong> Always up-to-date, scales infinitely, accurate lastmod
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-3 w-3 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Cons:</strong> Requires server-side code, slight performance overhead
                    </span>
                  </div>
                </div>
                <div className="bg-white border border-purple-200 p-2 rounded">
                  <strong>Use for:</strong> E-commerce, news sites, blogs, any site with frequent
                  updates
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sitemap Index Files */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderTree className="h-5 w-5 text-green-600" />
            Sitemap Index Files (For Large Sites)
          </CardTitle>
          <CardDescription>Organizing sitemaps for sites with 50,000+ URLs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xs text-slate-700">
            When your site exceeds 50,000 URLs or 50MB, you need to split your sitemap into multiple
            files and use a<strong> sitemap index</strong> to reference them all. This is common for
            large e-commerce or news sites.
          </p>

          <div className="border-2 border-green-200 bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-sm mb-2">Sitemap Index Structure</h4>
            <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs overflow-x-auto mb-3">
              <div className="text-purple-300">
                &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
              </div>
              <div className="text-green-400">
                &lt;sitemapindex xmlns=&quot;http://www.sitemaps.org/schemas/sitemap/0.9&quot;&gt;
              </div>
              <div className="mt-2 text-blue-300"> &lt;sitemap&gt;</div>
              <div className="text-yellow-300">
                {" "}
                &lt;loc&gt;https://example.com/sitemap-products.xml&lt;/loc&gt;
              </div>
              <div className="text-orange-300"> &lt;lastmod&gt;2024-01-15&lt;/lastmod&gt;</div>
              <div className="text-blue-300"> &lt;/sitemap&gt;</div>
              <div className="mt-2 text-blue-300"> &lt;sitemap&gt;</div>
              <div className="text-yellow-300">
                {" "}
                &lt;loc&gt;https://example.com/sitemap-blog.xml&lt;/loc&gt;
              </div>
              <div className="text-orange-300"> &lt;lastmod&gt;2024-01-14&lt;/lastmod&gt;</div>
              <div className="text-blue-300"> &lt;/sitemap&gt;</div>
              <div className="mt-2 text-blue-300"> &lt;sitemap&gt;</div>
              <div className="text-yellow-300">
                {" "}
                &lt;loc&gt;https://example.com/sitemap-categories.xml&lt;/loc&gt;
              </div>
              <div className="text-orange-300"> &lt;lastmod&gt;2024-01-10&lt;/lastmod&gt;</div>
              <div className="text-blue-300"> &lt;/sitemap&gt;</div>
              <div className="mt-2 text-green-400">&lt;/sitemapindex&gt;</div>
            </div>
            <p className="text-xs text-slate-700">
              Submit the sitemap index file to Google Search Console. Google will automatically
              discover and crawl all referenced sitemaps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="border border-blue-200 bg-blue-50 p-3 rounded text-xs">
              <h4 className="font-semibold mb-2">Common Split Strategies</h4>
              <ul className="space-y-1 text-slate-700">
                <li>• By content type (products, blog, pages)</li>
                <li>• By date (year/month for archives)</li>
                <li>• By category/section</li>
                <li>• By language/region</li>
                <li>• Numeric chunks (sitemap-1.xml, sitemap-2.xml)</li>
              </ul>
            </div>

            <div className="border border-green-200 bg-green-50 p-3 rounded text-xs">
              <h4 className="font-semibold mb-2">Benefits of Splitting</h4>
              <ul className="space-y-1 text-slate-700">
                <li>• Faster generation for individual sections</li>
                <li>• Can update just one file when content changes</li>
                <li>• Better organization and debugging</li>
                <li>• Clearer analytics on what&apos;s being indexed</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Update Strategies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5 text-orange-600" />
            How to Update Sitemaps
          </CardTitle>
          <CardDescription>Keeping your sitemap fresh and accurate</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {/* Manual Updates */}
            <div className="border border-slate-200 bg-slate-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="h-5 w-5 text-slate-600" />
                <h4 className="font-semibold text-sm">Manual Updates (Small Sites)</h4>
              </div>
              <p className="text-xs text-slate-700 mb-2">
                For static sites or small blogs, manually edit your sitemap.xml file when
                adding/removing pages. Update{" "}
                <code className="bg-slate-100 px-1 rounded">&lt;lastmod&gt;</code> dates when
                content changes significantly.
              </p>
              <div className="bg-white border border-slate-200 p-2 rounded text-xs">
                <strong>Tools:</strong> Online sitemap generators, XML editors, or simple text
                editors
              </div>
            </div>

            {/* Automated with Cron Jobs */}
            <div className="border-2 border-orange-200 bg-orange-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-orange-600" />
                <h4 className="font-semibold text-sm">Automated with Cron Jobs (Medium Sites)</h4>
                <Badge className="bg-orange-600 text-[10px]">Recommended</Badge>
              </div>
              <p className="text-xs text-slate-700 mb-3">
                Schedule a script to regenerate your sitemap periodically (hourly, daily, weekly)
                based on content change frequency. This balances freshness with server resources.
              </p>

              <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-xs mb-3">
                <div className="text-green-400"># Run sitemap generation daily at 2 AM</div>
                <div className="text-yellow-300">
                  0 2 * * * /usr/bin/node /path/to/generate-sitemap.js
                </div>
              </div>

              <div className="bg-white border border-orange-200 p-3 rounded text-xs space-y-2">
                <div>
                  <strong>Frequency Guidelines:</strong>
                </div>
                <ul className="space-y-1 text-slate-700 ml-4">
                  <li>• News sites: Every 15-60 minutes</li>
                  <li>• E-commerce: Every 1-6 hours</li>
                  <li>• Blogs: Daily</li>
                  <li>• Corporate sites: Weekly</li>
                </ul>
              </div>
            </div>

            {/* Real-time Updates */}
            <div className="border-2 border-blue-200 bg-blue-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-sm">Real-Time Updates (Large Dynamic Sites)</h4>
              </div>
              <p className="text-xs text-slate-700 mb-3">
                Generate sitemap on-demand when requested. Query database for current page list and
                modification dates. Optional: cache for 1-24 hours to reduce server load.
              </p>

              <div className="bg-white border border-blue-200 p-3 rounded text-xs space-y-2">
                <div>
                  <strong>Best for:</strong>
                </div>
                <ul className="space-y-1 text-slate-700 ml-4">
                  <li>• Sites with frequent content changes (multiple per hour)</li>
                  <li>• Sites where immediate indexation is critical</li>
                  <li>• Modern frameworks (Next.js, Laravel, Django)</li>
                  <li>• When using CDN caching for performance</li>
                </ul>
              </div>
            </div>
          </div>

          <Alert className="border-blue-300 bg-blue-50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Pro Tip:</strong> After significant sitemap updates (adding many URLs),
              manually request a crawl in Google Search Console (Sitemaps → Select sitemap →
              &quot;Refresh&quot;) to speed up discovery.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Where to Submit */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-indigo-600" />
            Where to Submit Your Sitemap
          </CardTitle>
          <CardDescription>Making sure search engines can find your sitemap</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-indigo-100 rounded-full p-2 flex-shrink-0">
                <span className="text-xs font-bold text-indigo-700">1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">robots.txt Reference</h4>
                <p className="text-xs text-slate-700 mb-2">
                  Add a <code className="bg-slate-100 px-1 rounded">Sitemap:</code> directive to
                  your robots.txt file. This is the most universal method—all crawlers check
                  robots.txt.
                </p>
                <div className="bg-slate-900 text-slate-100 p-2 rounded font-mono text-xs">
                  <div className="text-pink-300">Sitemap: https://example.com/sitemap.xml</div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-indigo-100 rounded-full p-2 flex-shrink-0">
                <span className="text-xs font-bold text-indigo-700">2</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">Google Search Console</h4>
                <p className="text-xs text-slate-700 mb-2">
                  Submit your sitemap manually:{" "}
                  <strong>Indexing → Sitemaps → Add new sitemap</strong>. Provides detailed
                  indexation stats and error reporting.
                </p>
                <div className="bg-green-50 border border-green-200 p-2 rounded text-xs text-slate-700">
                  <strong>Benefit:</strong> See exactly how many URLs submitted vs indexed, discover
                  coverage issues
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-indigo-100 rounded-full p-2 flex-shrink-0">
                <span className="text-xs font-bold text-indigo-700">3</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">Bing Webmaster Tools</h4>
                <p className="text-xs text-slate-700 mb-2">
                  Submit to Bing separately: <strong>Sitemaps → Submit Sitemap</strong>. Bing
                  doesn&apos;t automatically discover sitemaps from Google.
                </p>
                <div className="bg-blue-50 border border-blue-200 p-2 rounded text-xs text-slate-700">
                  <strong>Note:</strong> Bing powers Yahoo and DuckDuckGo search, so this covers
                  multiple engines
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-indigo-100 rounded-full p-2 flex-shrink-0">
                <span className="text-xs font-bold text-indigo-700">4</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-1">Ping After Updates (Optional)</h4>
                <p className="text-xs text-slate-700 mb-2">
                  Notify search engines immediately after major sitemap updates with an HTTP
                  request.
                </p>
                <div className="bg-slate-900 text-slate-100 p-2 rounded font-mono text-xs">
                  <div className="text-yellow-300">
                    https://www.google.com/ping?sitemap=https://example.com/sitemap.xml
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monitoring and Troubleshooting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-purple-600" />
            Monitoring & Troubleshooting
          </CardTitle>
          <CardDescription>Ensuring your sitemap is working effectively</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Healthy Sitemap Indicators
              </h4>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• 70%+ indexation rate in GSC</li>
                <li>• No &quot;submitted not indexed&quot; errors</li>
                <li>• Sitemap fetched successfully</li>
                <li>• URLs match current site structure</li>
                <li>• &lt;lastmod&gt; dates accurate</li>
              </ul>
            </div>

            <div className="border border-red-200 bg-red-50 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                Common Problems
              </h4>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• URLs blocked by robots.txt</li>
                <li>• URLs return 404 or redirect</li>
                <li>• Invalid XML format</li>
                <li>• Including noindex pages</li>
                <li>• Exceeding 50k URLs/50MB limit</li>
              </ul>
            </div>
          </div>

          <div className="border-2 border-purple-200 bg-purple-50 p-4 rounded text-xs">
            <h4 className="font-semibold mb-2">Regular Maintenance Checklist</h4>
            <div className="space-y-1 text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-3 w-3 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Weekly: Check GSC coverage report for new errors</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-3 w-3 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Monthly: Review indexation rate (should stay stable or improve)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-3 w-3 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Quarterly: Audit URLs in sitemap vs actually indexed</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-3 w-3 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>After major site changes: Regenerate and resubmit sitemap</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Checklist */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-blue-600" />
            Implementation Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Valid XML format with required tags</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Absolute URLs (full https://...)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Under 50k URLs per file</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Accurate &lt;lastmod&gt; dates</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Canonical URLs only</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Referenced in robots.txt</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Submitted to GSC and Bing</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Automated update process</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Regular monitoring in GSC</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Use sitemap index if &gt;50k URLs</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
