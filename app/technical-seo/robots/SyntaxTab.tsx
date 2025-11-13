import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import {
  Code,
  Hash,
  Users,
  Ban,
  CheckCircle2,
  FileText,
  Asterisk,
  DollarSign,
  Info,
  MapPin,
  Clock,
} from 'lucide-react';

export default function SyntaxTab() {
  return (
    <div className="space-y-6">
      {/* Basic Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-600" />
            Basic Structure
          </CardTitle>
          <CardDescription>
            Understanding the fundamental building blocks of robots.txt
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs">
            <div className="text-green-400"># Comment - ignored by crawlers</div>
            <div className="text-blue-300">User-agent: *</div>
            <div className="text-yellow-300">Disallow: /admin/</div>
            <div className="text-yellow-300">Disallow: /cart</div>
            <div className="text-purple-300">Allow: /admin/public/</div>
            <div className="mt-2 text-blue-300">User-agent: Googlebot</div>
            <div className="text-yellow-300">Disallow: /search</div>
            <div className="mt-2 text-pink-300">Sitemap: https://example.com/sitemap.xml</div>
          </div>

          <Alert className="border-blue-300 bg-blue-50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Key Rules:</strong> Case-sensitive for paths (not directives). One directive per line. 
              Blank lines separate rule groups. Order matters within a group.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* User-agent Directive */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-indigo-600" />
            User-agent Directive
          </CardTitle>
          <CardDescription>
            Specifies which crawler(s) the following rules apply to
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="border border-green-200 bg-green-50 p-3 rounded">
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-green-600 text-[10px]">Most Common</Badge>
                <Code className="h-4 w-4 text-green-600" />
              </div>
              <div className="bg-slate-900 text-slate-100 p-2 rounded font-mono text-xs mb-2">
                <div className="text-blue-300">User-agent: *</div>
                <div className="text-yellow-300">Disallow: /private/</div>
              </div>
              <p className="text-xs text-slate-700">
                <strong>Applies to all crawlers.</strong> Use this as your default ruleset. The asterisk (*) is a wildcard 
                meaning &quot;any bot.&quot;
              </p>
            </div>

            <div className="border border-blue-200 bg-blue-50 p-3 rounded">
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-blue-600 text-[10px]">Specific Bot</Badge>
                <Users className="h-4 w-4 text-blue-600" />
              </div>
              <div className="bg-slate-900 text-slate-100 p-2 rounded font-mono text-xs mb-2">
                <div className="text-blue-300">User-agent: Googlebot</div>
                <div className="text-yellow-300">Disallow: /search</div>
                <div className="mt-2 text-blue-300">User-agent: Bingbot</div>
                <div className="text-yellow-300">Disallow: /search</div>
                <div className="text-yellow-300">Crawl-delay: 10</div>
              </div>
              <p className="text-xs text-slate-700">
                <strong>Target specific crawlers.</strong> More specific rules override <code className="bg-blue-100 px-1 rounded">User-agent: *</code>. 
                Each bot needs its own user-agent block.
              </p>
            </div>

            <div className="border border-slate-200 bg-slate-50 p-3 rounded text-xs">
              <h4 className="font-semibold mb-2">Common User-Agent Names:</h4>
              <div className="grid grid-cols-2 gap-2">
                <div>• <code className="bg-slate-200 px-1 rounded">Googlebot</code> - Google</div>
                <div>• <code className="bg-slate-200 px-1 rounded">Bingbot</code> - Bing</div>
                <div>• <code className="bg-slate-200 px-1 rounded">Slurp</code> - Yahoo (defunct)</div>
                <div>• <code className="bg-slate-200 px-1 rounded">DuckDuckBot</code> - DuckDuckGo</div>
                <div>• <code className="bg-slate-200 px-1 rounded">Baiduspider</code> - Baidu</div>
                <div>• <code className="bg-slate-200 px-1 rounded">Yandex</code> - Yandex</div>
                <div>• <code className="bg-slate-200 px-1 rounded">Applebot</code> - Apple</div>
                <div>• <code className="bg-slate-200 px-1 rounded">facebot</code> - Facebook</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disallow Directive */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ban className="h-5 w-5 text-red-600" />
            Disallow Directive
          </CardTitle>
          <CardDescription>
            Tells crawlers which URLs or patterns NOT to access
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="border border-red-200 bg-red-50 p-3 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-red-600 text-[10px]">Block Everything</Badge>
              </div>
              <div className="bg-slate-900 text-slate-100 p-2 rounded font-mono text-xs mb-2">
                <div className="text-blue-300">User-agent: *</div>
                <div className="text-yellow-300">Disallow: /</div>
              </div>
              <p className="text-xs text-slate-700">
                <strong>Blocks all pages on the site.</strong> Only use during development or for truly private staging sites. 
                Trailing slash not required but recommended for clarity.
              </p>
            </div>

            <div className="border border-green-200 bg-green-50 p-3 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-green-600 text-[10px]">Allow Everything</Badge>
              </div>
              <div className="bg-slate-900 text-slate-100 p-2 rounded font-mono text-xs mb-2">
                <div className="text-blue-300">User-agent: *</div>
                <div className="text-yellow-300">Disallow:</div>
              </div>
              <p className="text-xs text-slate-700">
                <strong>Empty Disallow = Allow all.</strong> Explicitly allows crawling of entire site. 
                Same as having no robots.txt at all.
              </p>
            </div>

            <div className="border border-purple-200 bg-purple-50 p-3 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-purple-600 text-[10px]">Specific Path</Badge>
              </div>
              <div className="bg-slate-900 text-slate-100 p-2 rounded font-mono text-xs mb-2">
                <div className="text-yellow-300">Disallow: /admin/</div>
                <div className="text-yellow-300">Disallow: /cart</div>
                <div className="text-yellow-300">Disallow: /checkout.php</div>
              </div>
              <p className="text-xs text-slate-700">
                <strong>Blocks specific paths.</strong> Trailing slash matters! <code className="bg-purple-100 px-1 rounded">/admin/</code> blocks 
                /admin/settings but <code className="bg-purple-100 px-1 rounded">/admin</code> blocks /admin, /administrative, /admins, etc.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Allow Directive */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Allow Directive
          </CardTitle>
          <CardDescription>
            Creates exceptions to Disallow rules (supported by Google, Bing)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs">
            <div className="text-blue-300">User-agent: *</div>
            <div className="text-yellow-300">Disallow: /admin/</div>
            <div className="text-green-400">Allow: /admin/public/</div>
            <div className="mt-2 text-slate-400"># Blocks all /admin/* EXCEPT /admin/public/*</div>
          </div>

          <Alert className="border-green-300 bg-green-50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Rule Priority:</strong> More specific rules override less specific ones. 
              <code className="bg-green-100 px-1 rounded">Allow: /admin/public/</code> beats 
              <code className="bg-green-100 px-1 rounded">Disallow: /admin/</code> for /admin/public/page.html
            </AlertDescription>
          </Alert>

          <div className="border border-amber-200 bg-amber-50 p-3 rounded text-xs">
            <div className="font-semibold mb-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-amber-600" />
              Real-World Example
            </div>
            <div className="bg-slate-900 text-slate-100 p-2 rounded font-mono text-xs mb-2">
              <div className="text-blue-300">User-agent: *</div>
              <div className="text-yellow-300">Disallow: /*.pdf$</div>
              <div className="text-green-400">Allow: /public/*.pdf$</div>
            </div>
            <p className="text-slate-700">
              Blocks all PDFs except those in /public/ directory. Useful for hiding internal documents while sharing 
              public resources.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Wildcards */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Asterisk className="h-5 w-5 text-orange-600" />
            Wildcards: * and $
          </CardTitle>
          <CardDescription>
            Pattern matching for flexible URL blocking
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {/* Asterisk */}
            <div className="border-2 border-orange-200 bg-orange-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-3">
                <Asterisk className="h-5 w-5 text-orange-600" />
                <h4 className="font-semibold text-sm">* (Asterisk) = Match any sequence of characters</h4>
              </div>

              <div className="space-y-3">
                <div className="bg-white border border-orange-200 p-3 rounded">
                  <div className="bg-slate-900 text-slate-100 p-2 rounded font-mono text-xs mb-2">
                    <div className="text-yellow-300">Disallow: /*?sort=</div>
                  </div>
                  <p className="text-xs text-slate-700 mb-1">
                    <strong>Blocks any URL with ?sort= parameter</strong>
                  </p>
                  <div className="text-[10px] text-slate-600 space-y-0.5">
                    <div>✓ Blocks: /products?sort=price</div>
                    <div>✓ Blocks: /category/shoes?sort=newest</div>
                    <div>✓ Blocks: /shop?filter=red&sort=rating</div>
                  </div>
                </div>

                <div className="bg-white border border-orange-200 p-3 rounded">
                  <div className="bg-slate-900 text-slate-100 p-2 rounded font-mono text-xs mb-2">
                    <div className="text-yellow-300">Disallow: /search/*page=</div>
                  </div>
                  <p className="text-xs text-slate-700 mb-1">
                    <strong>Blocks search results with pagination</strong>
                  </p>
                  <div className="text-[10px] text-slate-600 space-y-0.5">
                    <div>✓ Blocks: /search/shoes?page=2</div>
                    <div>✓ Blocks: /search/anything?q=test&page=5</div>
                    <div>✗ Allows: /search/shoes (no page param)</div>
                  </div>
                </div>

                <div className="bg-white border border-orange-200 p-3 rounded">
                  <div className="bg-slate-900 text-slate-100 p-2 rounded font-mono text-xs mb-2">
                    <div className="text-yellow-300">Disallow: /*.json</div>
                  </div>
                  <p className="text-xs text-slate-700 mb-1">
                    <strong>Blocks all JSON files</strong>
                  </p>
                  <div className="text-[10px] text-slate-600 space-y-0.5">
                    <div>✓ Blocks: /api/data.json</div>
                    <div>✓ Blocks: /config/settings.json</div>
                    <div>✓ Blocks: /deep/path/file.json</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dollar Sign */}
            <div className="border-2 border-blue-200 bg-blue-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-sm">$ (Dollar Sign) = End of URL</h4>
              </div>

              <div className="space-y-3">
                <div className="bg-white border border-blue-200 p-3 rounded">
                  <div className="bg-slate-900 text-slate-100 p-2 rounded font-mono text-xs mb-2">
                    <div className="text-yellow-300">Disallow: /*.pdf$</div>
                  </div>
                  <p className="text-xs text-slate-700 mb-1">
                    <strong>Blocks URLs ending in .pdf (no parameters)</strong>
                  </p>
                  <div className="text-[10px] text-slate-600 space-y-0.5">
                    <div>✓ Blocks: /documents/report.pdf</div>
                    <div>✗ Allows: /documents/report.pdf?download=1</div>
                    <div>✗ Allows: /pdf-viewer/page.html</div>
                  </div>
                </div>

                <div className="bg-white border border-blue-200 p-3 rounded">
                  <div className="bg-slate-900 text-slate-100 p-2 rounded font-mono text-xs mb-2">
                    <div className="text-yellow-300">Disallow: /cart$</div>
                  </div>
                  <p className="text-xs text-slate-700 mb-1">
                    <strong>Blocks exactly /cart (not /cart/anything)</strong>
                  </p>
                  <div className="text-[10px] text-slate-600 space-y-0.5">
                    <div>✓ Blocks: /cart</div>
                    <div>✗ Allows: /cart/checkout</div>
                    <div>✗ Allows: /cart?item=123</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Combined */}
            <div className="border-2 border-purple-200 bg-purple-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-3">
                <Code className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-sm">Combining Wildcards</h4>
              </div>

              <div className="bg-white border border-purple-200 p-3 rounded">
                <div className="bg-slate-900 text-slate-100 p-2 rounded font-mono text-xs mb-2">
                  <div className="text-yellow-300">Disallow: /*?*session=</div>
                  <div className="text-yellow-300">Disallow: /*?*page=*&sort=</div>
                  <div className="text-yellow-300">Disallow: /*/admin/*.php$</div>
                </div>
                <p className="text-xs text-slate-700">
                  Advanced patterns for complex URL structures. Test thoroughly before deploying!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sitemap Directive */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-green-600" />
            Sitemap Directive
          </CardTitle>
          <CardDescription>
            Tell crawlers where to find your XML sitemap
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs">
            <div className="text-blue-300">User-agent: *</div>
            <div className="text-yellow-300">Disallow: /admin/</div>
            <div className="mt-2 text-pink-300">Sitemap: https://example.com/sitemap.xml</div>
            <div className="text-pink-300">Sitemap: https://example.com/sitemap-products.xml</div>
            <div className="text-pink-300">Sitemap: https://example.com/sitemap-blog.xml</div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-green-50 border border-green-200 p-3 rounded text-xs">
              <div className="font-semibold mb-1 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Best Practices
              </div>
              <ul className="space-y-1 text-slate-700">
                <li>• Use absolute URLs (full https://...)</li>
                <li>• List multiple sitemaps if needed</li>
                <li>• Place at end of robots.txt</li>
                <li>• Update when sitemap location changes</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-3 rounded text-xs">
              <div className="font-semibold mb-1 flex items-center gap-2">
                <Info className="h-4 w-4 text-blue-600" />
                Important Notes
              </div>
              <ul className="space-y-1 text-slate-700">
                <li>• Not required (also submit in GSC)</li>
                <li>• Works outside user-agent blocks</li>
                <li>• Case-sensitive URL paths</li>
                <li>• Supports sitemap index files</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Crawl-delay */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-amber-600" />
            Crawl-delay (Bing/Yandex Only)
          </CardTitle>
          <CardDescription>
            Slow down aggressive crawlers to protect server resources
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs">
            <div className="text-blue-300">User-agent: Bingbot</div>
            <div className="text-yellow-300">Crawl-delay: 10</div>
            <div className="mt-2 text-slate-400"># Wait 10 seconds between requests</div>
          </div>

          <Alert className="border-amber-300 bg-amber-50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Google Does NOT Support Crawl-delay:</strong> Googlebot ignores this directive. 
              Use Google Search Console to adjust crawl rate instead. Bing and Yandex respect it.
            </AlertDescription>
          </Alert>

          <div className="border border-slate-200 p-3 rounded text-xs text-slate-700">
            <strong>Use cases:</strong> Slow servers, aggressive bot traffic causing issues, database-heavy pages. 
            Typical values: 1-10 seconds. Too high (20+) means pages crawled very infrequently.
          </div>
        </CardContent>
      </Card>

      {/* Comments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hash className="h-5 w-5 text-slate-600" />
            Comments
          </CardTitle>
          <CardDescription>
            Document your rules for future maintenance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs">
            <div className="text-green-400"># Block admin and user account pages</div>
            <div className="text-blue-300">User-agent: *</div>
            <div className="text-yellow-300">Disallow: /admin/</div>
            <div className="text-yellow-300">Disallow: /user/*/profile</div>
            <div className="mt-2 text-green-400"># Block search results and filters</div>
            <div className="text-yellow-300">Disallow: /search</div>
            <div className="text-yellow-300">Disallow: /*?filter=</div>
            <div className="mt-2 text-green-400"># Last updated: 2024-01-15</div>
          </div>

          <div className="text-xs text-slate-700 space-y-2">
            <p>
              Comments start with <code className="bg-slate-100 px-1 rounded">#</code> and are ignored by crawlers. 
              Use them to explain complex rules or document when/why changes were made.
            </p>
            <p className="text-amber-700">
              <strong>Warning:</strong> Don&apos;t put sensitive information in comments—robots.txt is publicly accessible!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

