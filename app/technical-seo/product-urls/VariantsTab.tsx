import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  Palette, 
  CheckCircle2, 
  Info, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function VariantsTab() {
  return (
    <div className="space-y-6">
      {/* Decision Matrix */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-purple-600" />
            The Variant Decision Matrix
          </CardTitle>
          <CardDescription>
            When should color, size, or style variations get separate URLs?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-purple-300 bg-purple-50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Key Question:</strong> Does this variation change the product enough that someone 
              would search for it specifically? If yes, it deserves its own URL.
            </AlertDescription>
          </Alert>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-2 text-left border-r border-slate-200">Scenario</th>
                  <th className="p-2 text-left border-r border-slate-200">Recommendation</th>
                  <th className="p-2 text-left">Why?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200">
                  <td className="p-2 border-r border-slate-200">
                    <strong>Different colors with unique images</strong><br/>
                    Red T-shirt vs Blue T-shirt
                  </td>
                  <td className="p-2 border-r border-slate-200 bg-green-50">
                    <Badge className="bg-green-600">Separate URLs</Badge>
                  </td>
                  <td className="p-2">
                    People search "blue t-shirt" specifically. Each color is a distinct product experience.
                  </td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="p-2 border-r border-slate-200">
                    <strong>Sizes (S, M, L, XL)</strong><br/>
                    Same product, different fit
                  </td>
                  <td className="p-2 border-r border-slate-200 bg-amber-50">
                    <Badge className="bg-amber-600">Parameters</Badge>
                  </td>
                  <td className="p-2">
                    No one searches "t-shirt size medium". Size is a selection choice, not a search intent.
                  </td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="p-2 border-r border-slate-200">
                    <strong>Material variations</strong><br/>
                    Cotton vs Polyester shirt
                  </td>
                  <td className="p-2 border-r border-slate-200 bg-green-50">
                    <Badge className="bg-green-600">Separate URLs</Badge>
                  </td>
                  <td className="p-2">
                    Different products entirely. People search "cotton t-shirt" vs "polyester t-shirt".
                  </td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="p-2 border-r border-slate-200">
                    <strong>Minor color shades</strong><br/>
                    Navy Blue vs Royal Blue
                  </td>
                  <td className="p-2 border-r border-slate-200 bg-blue-50">
                    <Badge className="bg-blue-600">Single URL</Badge>
                  </td>
                  <td className="p-2">
                    Use JavaScript selector. Not enough difference to justify separate indexing.
                  </td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="p-2 border-r border-slate-200">
                    <strong>Product bundles or kits</strong><br/>
                    Shirt only vs Shirt + Pants bundle
                  </td>
                  <td className="p-2 border-r border-slate-200 bg-green-50">
                    <Badge className="bg-green-600">Separate URLs</Badge>
                  </td>
                  <td className="p-2">
                    Completely different offers with different prices. Treat as separate products.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Strategy 1: Separate URLs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="h-5 w-5 text-green-600" />
            Strategy 1: Separate URLs for Each Variant
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 border border-green-200 p-4 rounded">
            <h4 className="font-semibold text-sm mb-2">Use When:</h4>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• Each variant has unique images and descriptions</li>
              <li>• People search for the specific variant ("red dress", "blue shoes")</li>
              <li>• Variants have different prices or availability</li>
              <li>• You want to track performance of each variant separately</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-900 text-slate-200 p-3 rounded text-xs font-mono space-y-1">
              <div className="text-green-400">// URL Pattern Example</div>
              <div>/t-shirts/classic-tee-red</div>
              <div>/t-shirts/classic-tee-blue</div>
              <div>/t-shirts/classic-tee-black</div>
              <div className="text-slate-400 mt-2">// Or with clean path routing</div>
              <div>/t-shirts/classic-tee/color/red</div>
              <div>/t-shirts/classic-tee/color/blue</div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <div className="border border-green-300 bg-green-50 p-3 rounded">
                <div className="font-semibold text-sm text-green-800 mb-2">Pros</div>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>✓ Each variant can rank independently</li>
                  <li>✓ Clear tracking and analytics per variant</li>
                  <li>✓ Better for SEO if variants are distinct</li>
                  <li>✓ Clean user experience</li>
                </ul>
              </div>
              <div className="border border-red-300 bg-red-50 p-3 rounded">
                <div className="font-semibold text-sm text-red-800 mb-2">Cons</div>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>✗ More pages to maintain</li>
                  <li>✗ Risk of duplicate content if descriptions similar</li>
                  <li>✗ Need canonical strategy if some variants more important</li>
                  <li>✗ Complex sitemap management</li>
                </ul>
              </div>
            </div>
          </div>

          <Alert className="border-blue-300 bg-blue-50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Canonical Consideration:</strong> If variants are very similar, consider making them 
              self-canonical OR setting a canonical to a main "parent" product page.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Strategy 2: Parameter-Based */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="h-5 w-5 text-amber-600" />
            Strategy 2: Parameter-Based Variants
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 p-4 rounded">
            <h4 className="font-semibold text-sm mb-2">Use When:</h4>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• Variants don't change search intent (sizes, minor options)</li>
              <li>• You want one canonical URL for all variants</li>
              <li>• Content and images are largely the same</li>
              <li>• You want to consolidate SEO equity to one URL</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-900 text-slate-200 p-3 rounded text-xs font-mono space-y-1">
              <div className="text-amber-400">// URL Pattern Example</div>
              <div>/t-shirts/classic-tee</div>
              <div>/t-shirts/classic-tee?size=S</div>
              <div>/t-shirts/classic-tee?size=M</div>
              <div>/t-shirts/classic-tee?size=L</div>
              <div className="text-slate-400 mt-2">// All canonical to base URL</div>
              <div className="text-green-400">&lt;link rel="canonical" href="/t-shirts/classic-tee" /&gt;</div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <div className="border border-green-300 bg-green-50 p-3 rounded">
                <div className="font-semibold text-sm text-green-800 mb-2">Pros</div>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>✓ Consolidates SEO equity to one URL</li>
                  <li>✓ Simpler to maintain</li>
                  <li>✓ No duplicate content concerns</li>
                  <li>✓ Clean sitemap (one entry per product)</li>
                </ul>
              </div>
              <div className="border border-red-300 bg-red-50 p-3 rounded">
                <div className="font-semibold text-sm text-red-800 mb-2">Cons</div>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>✗ Can't rank individual variants</li>
                  <li>✗ Less specific for users arriving from search</li>
                  <li>✗ Need to handle variant selection on page</li>
                  <li>✗ Parameters in URLs look less clean</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strategy 3: Hybrid Approach */}
      <Card className="border-2 border-blue-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-600" />
            Strategy 3: Hybrid Approach (Recommended)
          </CardTitle>
          <CardDescription>
            Use the best of both strategies for different types of variants
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 p-4 rounded">
            <h4 className="font-semibold text-sm mb-3">Hybrid Strategy Rules:</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <Badge className="bg-blue-600 text-[10px]">Rule 1</Badge>
                <div>
                  <strong>Major variants get clean paths:</strong> Colors, materials, styles that change search intent
                  <div className="font-mono text-blue-700 mt-1">/shop/t-shirts/color/black/</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Badge className="bg-blue-600 text-[10px]">Rule 2</Badge>
                <div>
                  <strong>Minor variants use parameters:</strong> Sizes, quantities, minor options
                  <div className="font-mono text-blue-700 mt-1">/shop/t-shirts/color/black/?size=M</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Badge className="bg-blue-600 text-[10px]">Rule 3</Badge>
                <div>
                  <strong>Demographic segments get clean paths:</strong> Men's, women's, kids' versions
                  <div className="font-mono text-blue-700 mt-1">/shop/t-shirts/for/women/</div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-green-300 bg-green-50">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>This App's Implementation:</strong> The demo shop uses this hybrid approach. 
              Colors and gender get clean paths (indexable), while sizes use parameters (canonical to base). 
              Check out <code className="bg-white px-1 rounded">/shop/t-shirts/color/black/</code> to see it in action.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

