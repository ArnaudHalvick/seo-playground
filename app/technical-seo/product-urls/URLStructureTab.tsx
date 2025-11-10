import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Link2, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Database,
  FileText,
  Ruler,
  CircleDot
} from 'lucide-react';

export default function URLStructureTab() {
  return (
    <div className="space-y-6">
      {/* Slug Generation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link2 className="h-5 w-5 text-blue-600" />
            Slug Generation Best Practices
          </CardTitle>
          <CardDescription>
            Transform product names into clean, SEO-friendly URLs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-700">
            A <strong>slug</strong> is the URL-friendly version of a product name. Good slug generation 
            is the foundation of product SEO.
          </p>

          <div className="bg-slate-900 text-green-400 p-4 rounded text-sm font-mono space-y-2">
            <div className="text-slate-400">// Slug transformation example</div>
            <div>Input:  "Nike Air Max 90 - Men's Running Shoe"</div>
            <div>Output: "nike-air-max-90-mens-running-shoe"</div>
            <div className="text-slate-400 mt-3">// Steps:</div>
            <div>1. Convert to lowercase</div>
            <div>2. Remove special characters (keep letters, numbers, spaces)</div>
            <div>3. Replace spaces with hyphens</div>
            <div>4. Remove consecutive hyphens</div>
            <div>5. Trim hyphens from start/end</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border-2 border-green-300 rounded p-4">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <p className="font-semibold text-sm">Good Slug Practices</p>
              </div>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>✓ Keep important keywords at the start</li>
                <li>✓ Use hyphens (not underscores) as separators</li>
                <li>✓ Make them readable by humans</li>
                <li>✓ Keep them reasonably short (3-5 words ideal)</li>
                <li>✓ Remove filler words (the, a, an, of)</li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-300 rounded p-4">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="h-5 w-5 text-red-600" />
                <p className="font-semibold text-sm">Avoid These Mistakes</p>
              </div>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>✗ Using underscores instead of hyphens</li>
                <li>✗ Including stop words unnecessarily</li>
                <li>✗ Overly long URLs (10+ words)</li>
                <li>✗ Special characters (%20, &amp;, ?, =)</li>
                <li>✗ UPPERCASE or MixedCase slugs</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* URL Pattern Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-purple-600" />
            URL Pattern Comparison
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Good Patterns */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold">SEO-Friendly URLs</h3>
              </div>
              <div className="space-y-3 text-xs">
                <div className="bg-green-50 border border-green-200 p-3 rounded">
                  <code className="text-green-800 font-mono text-xs">
                    /products/nike-air-max-90-red
                  </code>
                  <p className="text-slate-600 mt-1">✓ Descriptive, readable, keywords visible</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-3 rounded">
                  <code className="text-green-800 font-mono text-xs">
                    /shoes/running/nike-air-max-90
                  </code>
                  <p className="text-slate-600 mt-1">✓ Category hierarchy, contextual navigation</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-3 rounded">
                  <code className="text-green-800 font-mono text-xs">
                    /brand/nike/air-max-90
                  </code>
                  <p className="text-slate-600 mt-1">✓ Brand navigation, logical structure</p>
                </div>
              </div>
            </div>

            {/* Bad Patterns */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="h-5 w-5 text-red-600" />
                <h3 className="font-semibold">Poor URL Patterns</h3>
              </div>
              <div className="space-y-3 text-xs">
                <div className="bg-red-50 border border-red-200 p-3 rounded">
                  <code className="text-red-800 font-mono text-xs">
                    /products?id=12345&color=red
                  </code>
                  <p className="text-slate-600 mt-1">✗ No keywords, unmemorable, looks temporary</p>
                </div>
                <div className="bg-red-50 border border-red-200 p-3 rounded">
                  <code className="text-red-800 font-mono text-xs">
                    /p/cat3/prod8273
                  </code>
                  <p className="text-slate-600 mt-1">✗ Cryptic IDs, no context, zero SEO value</p>
                </div>
                <div className="bg-red-50 border border-red-200 p-3 rounded">
                  <code className="text-red-800 font-mono text-xs">
                    /Nike_Air_Max_90%20RED
                  </code>
                  <p className="text-slate-600 mt-1">✗ Mixed case, underscores, URL encoding</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* URL Length & Keywords */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ruler className="h-5 w-5 text-amber-600" />
            URL Length & Keyword Considerations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-amber-300 bg-amber-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Balance is key:</strong> URLs should be descriptive but not stuffed with keywords. 
              Google values user experience and readability over keyword density in URLs.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4 text-xs">
            <div className="bg-green-50 border border-green-200 p-3 rounded">
              <div className="font-semibold text-green-800 mb-2">Ideal Length</div>
              <div className="text-slate-700 space-y-1">
                <div>• 3-5 words in slug</div>
                <div>• 50-60 characters total</div>
                <div>• Easy to read & remember</div>
                <div className="pt-2 font-mono text-green-700">
                  /running-shoes-women
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-3 rounded">
              <div className="font-semibold text-amber-800 mb-2">Acceptable</div>
              <div className="text-slate-700 space-y-1">
                <div>• 5-8 words in slug</div>
                <div>• 60-100 characters</div>
                <div>• Still manageable</div>
                <div className="pt-2 font-mono text-amber-700">
                  /nike-air-max-90-white-red
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-3 rounded">
              <div className="font-semibold text-red-800 mb-2">Too Long</div>
              <div className="text-slate-700 space-y-1">
                <div>• 10+ words</div>
                <div>• 100+ characters</div>
                <div>• Looks spammy</div>
                <div className="pt-2 font-mono text-red-700 text-[10px]">
                  /best-nike-running-shoes...
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded">
            <h4 className="font-semibold text-sm mb-2">Keyword Placement Tips</h4>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• <strong>Most important keywords first:</strong> "running-shoes-nike" better than "nike-offers-running-shoes"</li>
              <li>• <strong>Use category paths:</strong> /shoes/running/nike-air-max (keywords in path segments)</li>
              <li>• <strong>Avoid keyword stuffing:</strong> Don't repeat words (nike-nike-shoes-nike)</li>
              <li>• <strong>Natural language wins:</strong> Write for humans, not search engines</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Technical Implementation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-indigo-600" />
            Technical Implementation Notes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-2">
            <div className="text-blue-400">// Database schema for products</div>
            <div>products:</div>
            <div className="pl-4">- id (primary key)</div>
            <div className="pl-4">- name ("Nike Air Max 90")</div>
            <div className="pl-4">- slug ("nike-air-max-90")</div>
            <div className="pl-4">- description</div>
            <div className="pl-4">- status (active, discontinued, out_of_stock)</div>
            <div className="mt-3 text-blue-400">// Always query by slug, not ID</div>
            <div>SELECT * FROM products WHERE slug = 'nike-air-max-90'</div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-slate-200 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <CircleDot className="h-4 w-4 text-blue-600" />
                Uniqueness Constraint
              </h4>
              <p className="text-xs text-slate-700 mb-2">
                Slugs must be unique in your database. If duplicate detected:
              </p>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Append variant: "air-max-90-red", "air-max-90-blue"</li>
                <li>• Append number: "air-max-90-2", "air-max-90-3"</li>
                <li>• Use product ID: "air-max-90-12345"</li>
              </ul>
            </div>

            <div className="border border-slate-200 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4 text-purple-600" />
                Slug History Table
              </h4>
              <p className="text-xs text-slate-700 mb-2">
                When product names change, keep old slugs for redirects:
              </p>
              <div className="text-xs font-mono bg-slate-100 p-2 rounded">
                product_slug_history:<br/>
                - product_id<br/>
                - old_slug<br/>
                - created_at
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

