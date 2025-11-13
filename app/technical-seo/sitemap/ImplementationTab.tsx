import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Code,
  Database,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Info,
  Globe,
  FolderTree,
  Zap,
} from "lucide-react";

export default function ImplementationTab() {
  return (
    <div className="space-y-6">
      {/* XML Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-600" />
            XML Sitemap Basics
          </CardTitle>
          <CardDescription>Essential format and structure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <div className="text-purple-300">
              &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
            </div>
            <div className="text-green-400">
              &lt;urlset xmlns=&quot;http://www.sitemaps.org/schemas/sitemap/0.9&quot;&gt;
            </div>
            <div className="mt-2 text-blue-300"> &lt;url&gt;</div>
            <div className="text-yellow-300"> &lt;loc&gt;https://example.com/page&lt;/loc&gt;</div>
            <div className="text-orange-300"> &lt;lastmod&gt;2024-01-15&lt;/lastmod&gt;</div>
            <div className="text-blue-300"> &lt;/url&gt;</div>
            <div className="mt-2 text-green-400">&lt;/urlset&gt;</div>
          </div>

          <div className="grid md:grid-cols-3 gap-3 text-xs">
            <div className="border border-green-200 bg-green-50 p-3 rounded">
              <h4 className="font-semibold mb-2">✓ Required</h4>
              <ul className="space-y-1 text-slate-700">
                <li>• &lt;urlset&gt; container</li>
                <li>• &lt;url&gt; for each page</li>
                <li>• &lt;loc&gt; URL (absolute)</li>
              </ul>
            </div>

            <div className="border border-blue-200 bg-blue-50 p-3 rounded">
              <h4 className="font-semibold mb-2">⚠️ Optional but Useful</h4>
              <ul className="space-y-1 text-slate-700">
                <li>• &lt;lastmod&gt; (important!)</li>
                <li>• &lt;changefreq&gt; (ignored)</li>
                <li>• &lt;priority&gt; (ignored)</li>
              </ul>
            </div>

            <div className="border border-amber-200 bg-amber-50 p-3 rounded">
              <h4 className="font-semibold mb-2">⚡ Constraints</h4>
              <ul className="space-y-1 text-slate-700">
                <li>• Max 50,000 URLs/file</li>
                <li>• Max 50MB uncompressed</li>
                <li>• Absolute URLs only</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Generation Approaches */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-purple-600" />
            Generation Approaches
          </CardTitle>
          <CardDescription>Static vs dynamic implementation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Static */}
            <div className="border-2 border-slate-200 bg-slate-50 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2">📄 Static Sitemap</h4>
              <div className="space-y-2 text-xs text-slate-700">
                <div>
                  <strong>Best for:</strong> Small sites (&lt;50 pages), infrequent updates
                </div>
                <div>
                  <strong>Pros:</strong> Simple, no server processing
                </div>
                <div>
                  <strong>Cons:</strong> Manual updates, doesn&apos;t scale
                </div>
              </div>
            </div>

            {/* Dynamic */}
            <div className="border-2 border-purple-200 bg-purple-50 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2">⚙️ Dynamic Generation</h4>
              <div className="space-y-2 text-xs text-slate-700">
                <div>
                  <strong>Best for:</strong> E-commerce, blogs, frequently updated content
                </div>
                <div>
                  <strong>Pros:</strong> Always up-to-date, accurate lastmod dates
                </div>
                <div>
                  <strong>Cons:</strong> Requires server-side logic
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-purple-300 bg-purple-50">
            <Zap className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Recommended:</strong> Dynamic generation for most modern sites. Query your
              database/CMS for current pages and generate XML on-the-fly or with scheduled updates
              (cron jobs).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Sitemap Index */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderTree className="h-5 w-5 text-green-600" />
            Sitemap Index Files
          </CardTitle>
          <CardDescription>
            Best practice: split at 5,000-10,000 URLs (50K is the technical limit)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xs text-slate-700">
            While Google allows up to 50,000 URLs per sitemap, splitting earlier (5K-10K URLs)
            improves processing speed, troubleshooting, and maintenance. Use a sitemap index to
            reference multiple files.
          </p>

          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
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
            <div className="text-blue-300"> &lt;/sitemap&gt;</div>
            <div className="mt-2 text-blue-300"> &lt;sitemap&gt;</div>
            <div className="text-yellow-300">
              {" "}
              &lt;loc&gt;https://example.com/sitemap-blog.xml&lt;/loc&gt;
            </div>
            <div className="text-blue-300"> &lt;/sitemap&gt;</div>
            <div className="mt-2 text-green-400">&lt;/sitemapindex&gt;</div>
          </div>

          <div className="grid md:grid-cols-2 gap-3 text-xs">
            <div className="bg-blue-50 border border-blue-200 p-3 rounded">
              <h4 className="font-semibold mb-2">Common Split Strategies</h4>
              <ul className="space-y-1 text-slate-700">
                <li>• By content type (products, blog)</li>
                <li>• By date (year/month)</li>
                <li>• By category/section</li>
                <li>• By language/region</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 p-3 rounded">
              <h4 className="font-semibold mb-2">Benefits</h4>
              <ul className="space-y-1 text-slate-700">
                <li>• Update individual sections</li>
                <li>• Faster generation per file</li>
                <li>• Better organization</li>
                <li>• Clearer analytics</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Update Strategies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-600" />
            Update Frequency
          </CardTitle>
          <CardDescription>When and how to refresh your sitemap</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-3 text-xs">
            <div className="border border-slate-200 bg-slate-50 p-3 rounded">
              <h4 className="font-semibold mb-2">Manual Updates</h4>
              <div className="text-slate-700">
                Edit XML file when adding/removing pages. Best for small, static sites.
              </div>
            </div>

            <div className="border border-orange-200 bg-orange-50 p-3 rounded">
              <h4 className="font-semibold mb-2">Cron Jobs ⭐</h4>
              <div className="text-slate-700">
                Regenerate periodically (hourly/daily). Ideal for most sites with regular updates.
              </div>
            </div>

            <div className="border border-blue-200 bg-blue-50 p-3 rounded">
              <h4 className="font-semibold mb-2">Real-Time</h4>
              <div className="text-slate-700">
                Generate on-demand from database. For sites with frequent changes (news, etc).
              </div>
            </div>
          </div>

          <Alert className="border-orange-300 bg-orange-50">
            <Clock className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Frequency Guidelines:</strong> News sites: 15-60 min | E-commerce: 1-6 hours |
              Blogs: Daily | Corporate sites: Weekly. Match update frequency to your content
              velocity.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Submission */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-indigo-600" />
            Where to Submit
          </CardTitle>
          <CardDescription>Making your sitemap discoverable</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3 text-xs">
            <div className="bg-indigo-50 border border-indigo-200 p-3 rounded">
              <div className="font-semibold mb-1">1. robots.txt</div>
              <div className="text-slate-700 mb-2">
                Add sitemap reference (most universal method)
              </div>
              <div className="bg-slate-900 text-slate-100 p-2 rounded font-mono text-[10px]">
                Sitemap: https://example.com/sitemap.xml
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-3 rounded">
              <div className="font-semibold mb-1">2. Google Search Console</div>
              <div className="text-slate-700">
                Submit manually in Indexing → Sitemaps. Provides detailed indexation stats.
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-3 rounded">
              <div className="font-semibold mb-1">3. Bing Webmaster Tools</div>
              <div className="text-slate-700">
                Submit separately (also covers Yahoo & DuckDuckGo)
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-3 rounded">
              <div className="font-semibold mb-1">4. Ping After Updates</div>
              <div className="text-slate-700 font-mono text-[10px]">
                google.com/ping?sitemap=URL
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monitoring */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Monitoring & Health
          </CardTitle>
          <CardDescription>Ensuring your sitemap works effectively</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="bg-green-50 border border-green-200 p-4 rounded">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Healthy Sitemap Signs
              </h4>
              <ul className="space-y-1 text-slate-700">
                <li>• 70%+ indexation rate in GSC</li>
                <li>• No &quot;submitted not indexed&quot; errors</li>
                <li>• Sitemap fetched successfully</li>
                <li>• URLs match current site</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 p-4 rounded">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                Common Problems
              </h4>
              <ul className="space-y-1 text-slate-700">
                <li>• URLs blocked by robots.txt</li>
                <li>• URLs return 404 or redirect</li>
                <li>• Invalid XML format</li>
                <li>• Including noindex pages</li>
              </ul>
            </div>
          </div>

          <Alert className="border-green-300 bg-green-50 mt-4">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Maintenance:</strong> Check GSC weekly for errors, review indexation rates
              monthly, audit sitemap URLs quarterly. After major site changes, regenerate and
              resubmit immediately.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Quick Checklist */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-blue-600" />
            Implementation Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3 text-xs">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Valid XML format</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Absolute URLs only</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Under 50k URLs/file</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Accurate lastmod dates</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Canonical URLs only</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Referenced in robots.txt</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Submitted to GSC & Bing</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Automated updates</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Regular monitoring</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
