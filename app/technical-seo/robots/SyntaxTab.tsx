import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Code,
  Users,
  Ban,
  CheckCircle2,
  Asterisk,
  Info,
  Zap,
} from 'lucide-react';

export default function SyntaxTab() {
  return (
    <div className="space-y-6">
      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-600" />
            Core Directives
          </CardTitle>
          <CardDescription>
            Essential syntax for controlling crawler access
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <div className="text-green-400"># Comments start with #</div>
            <div className="text-blue-300">User-agent: *</div>
            <div className="text-yellow-300">Disallow: /admin/</div>
            <div className="text-yellow-300">Disallow: /cart</div>
            <div className="text-purple-300">Allow: /admin/public/</div>
            <div className="mt-2 text-blue-300">User-agent: Googlebot</div>
            <div className="text-yellow-300">Disallow: /search</div>
            <div className="mt-2 text-pink-300">Sitemap: https://example.com/sitemap.xml</div>
          </div>

          <div className="grid md:grid-cols-2 gap-3 text-xs">
            <div className="bg-blue-50 border border-blue-200 p-3 rounded">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-600" />
                User-agent
              </h4>
              <div className="space-y-1 text-slate-700">
                <div><code className="bg-blue-100 px-1 rounded">*</code> = All crawlers</div>
                <div><code className="bg-blue-100 px-1 rounded">Googlebot</code> = Google only</div>
                <div><code className="bg-blue-100 px-1 rounded">Bingbot</code> = Bing only</div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-3 rounded">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Ban className="h-4 w-4 text-red-600" />
                Disallow
              </h4>
              <div className="space-y-1 text-slate-700">
                <div><code className="bg-red-100 px-1 rounded">/</code> = Block everything</div>
                <div><code className="bg-red-100 px-1 rounded">/admin/</code> = Block directory</div>
                <div><code className="bg-red-100 px-1 rounded">(empty)</code> = Allow all</div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-3 rounded">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Allow
              </h4>
              <div className="space-y-1 text-slate-700">
                <div>Creates exceptions to Disallow rules</div>
                <div>More specific rules win</div>
                <div>Supported by Google & Bing</div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-3 rounded">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Info className="h-4 w-4 text-purple-600" />
                Sitemap
              </h4>
              <div className="space-y-1 text-slate-700">
                <div>Points to XML sitemap location</div>
                <div>Use absolute URLs</div>
                <div>Can list multiple sitemaps</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wildcards */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Asterisk className="h-5 w-5 text-orange-600" />
            Wildcard Patterns
          </CardTitle>
          <CardDescription>
            Advanced pattern matching for flexible blocking
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-2 border-orange-200 bg-orange-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-3">
                <Asterisk className="h-5 w-5 text-orange-600" />
                <h4 className="font-semibold text-sm">* = Match any characters</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-white border border-orange-200 p-3 rounded text-xs">
                  <div className="font-mono text-orange-700 mb-1">Disallow: /*?sort=</div>
                  <div className="text-slate-600">Blocks all URLs with ?sort= parameter</div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    ✓ /products?sort=price<br />
                    ✓ /category/shoes?sort=newest
                  </div>
                </div>

                <div className="bg-white border border-orange-200 p-3 rounded text-xs">
                  <div className="font-mono text-orange-700 mb-1">Disallow: /*.pdf</div>
                  <div className="text-slate-600">Blocks all PDF files</div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    ✓ /docs/report.pdf<br />
                    ✓ /files/guide.pdf
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-blue-200 bg-blue-50 p-4 rounded">
              <div className="flex items-center gap-2 mb-3">
                <Code className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-sm">$ = End of URL</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-white border border-blue-200 p-3 rounded text-xs">
                  <div className="font-mono text-blue-700 mb-1">Disallow: /*.pdf$</div>
                  <div className="text-slate-600">Blocks URLs ending in .pdf (no params)</div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    ✓ /report.pdf<br />
                    ✗ /report.pdf?download=1
                  </div>
                </div>

                <div className="bg-white border border-blue-200 p-3 rounded text-xs">
                  <div className="font-mono text-blue-700 mb-1">Disallow: /cart$</div>
                  <div className="text-slate-600">Blocks exactly /cart (not /cart/anything)</div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    ✓ /cart<br />
                    ✗ /cart/checkout
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-orange-300 bg-orange-50">
            <Asterisk className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Combine for power:</strong> <code className="bg-orange-100 px-1 rounded">/*?*page=*&sort=</code> blocks 
              URLs with both page and sort parameters. Test patterns before deploying to avoid accidentally blocking 
              important pages.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Common Patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-purple-600" />
            Common Blocking Patterns
          </CardTitle>
          <CardDescription>
            Practical examples for typical scenarios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
            <div className="text-green-400"># Block search results</div>
            <div className="text-yellow-300">Disallow: /search</div>
            <div className="text-yellow-300">Disallow: /*?q=</div>
            <div className="text-yellow-300">Disallow: /*?search=</div>
            <div className="mt-2 text-green-400"># Block filters and sorting</div>
            <div className="text-yellow-300">Disallow: /*?filter=</div>
            <div className="text-yellow-300">Disallow: /*?sort=</div>
            <div className="text-yellow-300">Disallow: /*?color=</div>
            <div className="mt-2 text-green-400"># Block pagination (but allow first few pages)</div>
            <div className="text-purple-300">Allow: /*?page=2</div>
            <div className="text-purple-300">Allow: /*?page=3</div>
            <div className="text-yellow-300">Disallow: /*?page=</div>
            <div className="mt-2 text-green-400"># Block tracking parameters</div>
            <div className="text-yellow-300">Disallow: /*?utm_</div>
            <div className="text-yellow-300">Disallow: /*?fbclid=</div>
            <div className="text-yellow-300">Disallow: /*?sessionid=</div>
          </div>

          <div className="grid md:grid-cols-3 gap-3 mt-4 text-xs">
            <div className="bg-slate-50 border border-slate-200 p-3 rounded">
              <div className="font-semibold mb-1">Key Principles</div>
              <ul className="space-y-1 text-slate-700">
                <li>• Case-sensitive paths</li>
                <li>• One directive per line</li>
                <li>• Most specific rule wins</li>
                <li>• Cached ~24 hours</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 p-3 rounded">
              <div className="font-semibold mb-1 text-green-700">✓ Do This</div>
              <ul className="space-y-1 text-slate-700">
                <li>• Test before deploying</li>
                <li>• Use comments</li>
                <li>• Keep it simple</li>
                <li>• Monitor results</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 p-3 rounded">
              <div className="font-semibold mb-1 text-red-700">✗ Avoid This</div>
              <ul className="space-y-1 text-slate-700">
                <li>• Blocking CSS/JS</li>
                <li>• Overly complex patterns</li>
                <li>• Blocking by mistake</li>
                <li>• Using for security</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
