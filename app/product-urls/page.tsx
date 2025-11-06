'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { 
  Package, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Info, 
  Database,
  Link2,
  Box,
  ArrowRight,
  CircleDot,
  FileText,
  Palette,
  Ruler,
  ShoppingCart,
  TrendingDown,
  Calendar,
  Sparkles
} from 'lucide-react';

export default function ProductUrlsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs 
        items={[
          { label: 'Product URLs & Database', href: '/product-urls' }
        ]} 
      />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Package className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold">Product URLs & Database Architecture</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Build SEO-friendly product catalogs that scale from hundreds to millions of products
          </p>
          <Alert className="border-blue-300 bg-blue-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>E-Commerce Foundation:</strong> Product pages are the money pages of any online store. 
              This guide covers URL structure, handling variants, managing product lifecycle, and database design 
              that supports SEO at scale.
            </AlertDescription>
          </Alert>
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="url-structure" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="url-structure">URL Structure</TabsTrigger>
            <TabsTrigger value="variants">Product Variants</TabsTrigger>
            <TabsTrigger value="lifecycle">Out-of-Stock & Lifecycle</TabsTrigger>
            <TabsTrigger value="database">Database Design</TabsTrigger>
          </TabsList>

          {/* Tab 1: URL Structure & Slugs */}
          <TabsContent value="url-structure" className="space-y-6">
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
          </TabsContent>

          {/* Tab 2: Product Variants */}
          <TabsContent value="variants" className="space-y-6">
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
          </TabsContent>

          {/* Tab 3: Out-of-Stock & Lifecycle */}
          <TabsContent value="lifecycle" className="space-y-6">
            <div className="space-y-6">
              {/* Temporarily Out of Stock */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-amber-600" />
                    Temporarily Out-of-Stock Products
                  </CardTitle>
                  <CardDescription>
                    How to handle products that will return to inventory
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-amber-300 bg-amber-50">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      <strong>Critical Rule:</strong> Never 404 or remove a page for temporarily out-of-stock products. 
                      You'll lose rankings and have to rebuild them when the product returns.
                    </AlertDescription>
                  </Alert>

                  <div className="bg-green-50 border-2 border-green-300 p-4 rounded">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold">Recommended Strategy</h4>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-green-800">1.</span>
                        <div>
                          <strong>Keep page live</strong> with prominent "Out of Stock" message
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-green-800">2.</span>
                        <div>
                          <strong>Maintain indexing:</strong> Use <code className="bg-white px-1 rounded text-xs">index,follow</code> (200 status)
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-green-800">3.</span>
                        <div>
                          <strong>Update schema markup:</strong> Set <code className="bg-white px-1 rounded text-xs">availability: "OutOfStock"</code>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-green-800">4.</span>
                        <div>
                          <strong>Show expected restock date</strong> if known (also in structured data)
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-green-800">5.</span>
                        <div>
                          <strong>Offer alternatives:</strong> "Similar Products" section keeps users engaged
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-green-800">6.</span>
                        <div>
                          <strong>Email notifications:</strong> Let users sign up for restock alerts
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-1">
                    <div className="text-blue-400">// Product schema for out-of-stock</div>
                    <div>{'{'}</div>
                    <div className="pl-4">"@type": "Product",</div>
                    <div className="pl-4">"name": "Nike Air Max 90",</div>
                    <div className="pl-4 text-amber-400">"offers": {'{'}</div>
                    <div className="pl-8">"@type": "Offer",</div>
                    <div className="pl-8">"price": "129.99",</div>
                    <div className="pl-8 text-red-400">"availability": "https://schema.org/OutOfStock",</div>
                    <div className="pl-8 text-green-400">"availabilityStarts": "2024-12-01"</div>
                    <div className="pl-4">{'}'}</div>
                    <div>{'}'}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Permanently Discontinued */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-red-600" />
                    Permanently Discontinued Products
                  </CardTitle>
                  <CardDescription>
                    When products won't return, your strategy depends on the situation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">
                    Use this decision tree to determine the right approach:
                  </p>

                  <div className="space-y-4">
                    {/* Decision 1: Replacement exists */}
                    <Card className="border-2 border-blue-300">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Has a Direct Replacement?</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-green-800">If YES → 301 Redirect</strong>
                            <div className="text-slate-700 mt-1">
                              Example: Nike Air Max 90 discontinued, replaced by Air Max 91<br/>
                              Action: <code className="bg-slate-100 px-1 rounded">/air-max-90</code> → 301 → <code className="bg-slate-100 px-1 rounded">/air-max-91</code>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Decision 2: Popular page with links */}
                    <Card className="border-2 border-purple-300">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Has Traffic & Backlinks?</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-purple-800">If YES → Keep Page Live</strong>
                            <div className="text-slate-700 mt-1">
                              Show "No Longer Available" message with similar products<br/>
                              Options:<br/>
                              • Return 410 status but keep content visible<br/>
                              • Or keep 200 status with noindex,follow<br/>
                              Preserves link equity and provides value to visitors
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Decision 3: No value */}
                    <Card className="border-2 border-red-300">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">No Traffic, No Links, No Value?</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-start gap-2 text-xs">
                          <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-red-800">If YES → 404 or 410</strong>
                            <div className="text-slate-700 mt-1">
                              <strong>404:</strong> "Not found" - might come back someday<br/>
                              <strong>410:</strong> "Gone permanently" - faster removal from index<br/>
                              Use 410 when you're certain it won't return
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Alert className="border-slate-300 bg-slate-50">
                    <Info className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      <strong>410 vs 404 Explained:</strong><br/>
                      • <strong>404 (Not Found):</strong> "We can't find this right now" - crawlers will keep checking<br/>
                      • <strong>410 (Gone):</strong> "This is permanently gone" - crawlers remove faster and stop checking<br/>
                      Use 410 for discontinued products to speed up index cleanup.
                    </AlertDescription>
                  </Alert>

                  <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-1">
                    <div className="text-blue-400">// Setting 410 status in Next.js</div>
                    <div>export default function ProductPage() {'{'}</div>
                    <div className="pl-4">const product = await getProduct(slug);</div>
                    <div className="pl-4 text-red-400">if (product.status === 'discontinued') {'{'}</div>
                    <div className="pl-8">return notFound(); // Returns 404</div>
                    <div className="pl-8 text-slate-400">// Or use Response with 410</div>
                    <div className="pl-8 text-green-400">return new Response(null, {'{ status: 410 }'})</div>
                    <div className="pl-4">{'}'}</div>
                    <div>{'}'}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Seasonal Products */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    Seasonal Products
                  </CardTitle>
                  <CardDescription>
                    Products that come and go with seasons or holidays
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                    <h4 className="font-semibold text-sm mb-2">Strategy: Keep Pages Live Year-Round</h4>
                    <p className="text-xs text-slate-700 mb-3">
                      Don't create/delete seasonal product pages each season. Keep them permanently and update availability.
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Off-Season:</strong> Show "Available Fall 2024" or "Back in October"
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>In-Season:</strong> Normal product page with "Add to Cart"
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Schema:</strong> Use <code className="bg-white px-1 rounded">availabilityStarts</code> and <code className="bg-white px-1 rounded">availabilityEnds</code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Alert className="border-green-300 bg-green-50">
                    <CheckCircle2 className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      <strong>Benefits:</strong> Prevents losing rankings during off-season. When the product returns, 
                      it immediately benefits from accumulated authority instead of starting over as a new page.
                    </AlertDescription>
                  </Alert>

                  <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-1">
                    <div className="text-blue-400">// Seasonal product schema example</div>
                    <div>{'{'}</div>
                    <div className="pl-4">"@type": "Product",</div>
                    <div className="pl-4">"name": "Halloween Costume - Vampire",</div>
                    <div className="pl-4">"offers": {'{'}</div>
                    <div className="pl-8 text-green-400">"availabilityStarts": "2024-09-01",</div>
                    <div className="pl-8 text-green-400">"availabilityEnds": "2024-11-01",</div>
                    <div className="pl-8">"availability": "PreOrder" // or "InStock"</div>
                    <div className="pl-4">{'}'}</div>
                    <div>{'}'}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Price Changes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CircleDot className="h-5 w-5 text-green-600" />
                    Price Changes & Sales
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-green-300 bg-green-50">
                    <CheckCircle2 className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      <strong>Simple Rule:</strong> Never create new URLs for price changes or sales. 
                      Update the price on the existing page and in structured data.
                    </AlertDescription>
                  </Alert>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-2 border-green-300 bg-green-50 p-3 rounded">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-sm">Correct Approach</span>
                      </div>
                      <div className="text-xs space-y-1">
                        <div>• Keep same URL</div>
                        <div>• Update price in database</div>
                        <div>• Update Product schema</div>
                        <div>• Use priceValidUntil for sales</div>
                        <div className="pt-2 font-mono text-green-700">
                          /product/air-max-90
                        </div>
                      </div>
                    </div>

                    <div className="border-2 border-red-300 bg-red-50 p-3 rounded">
                      <div className="flex items-center gap-2 mb-2">
                        <XCircle className="h-5 w-5 text-red-600" />
                        <span className="font-semibold text-sm">Don't Do This</span>
                      </div>
                      <div className="text-xs space-y-1">
                        <div>• Create sale-specific URLs</div>
                        <div>• Use price in URL slugs</div>
                        <div>• Duplicate pages for sales</div>
                        <div>• Creates duplicate content!</div>
                        <div className="pt-2 font-mono text-red-700">
                          /product/air-max-90-sale<br/>
                          /product/air-max-90-99
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-1">
                    <div className="text-blue-400">// Sale price in schema</div>
                    <div>"offers": {'{'}</div>
                    <div className="pl-4">"@type": "Offer",</div>
                    <div className="pl-4 text-green-400">"price": "99.99", // Sale price</div>
                    <div className="pl-4 text-green-400">"priceValidUntil": "2024-12-31",</div>
                    <div className="pl-4">"priceCurrency": "USD"</div>
                    <div>{'}'}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 4: Database Design */}
          <TabsContent value="database" className="space-y-6">
            <div className="space-y-6">
              {/* Core Tables */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-indigo-600" />
                    Core Database Schema for SEO
                  </CardTitle>
                  <CardDescription>
                    Table structure that supports SEO-friendly product management
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">
                    A well-designed database makes SEO management easy. Here's the essential schema:
                  </p>

                  <div className="space-y-4">
                    {/* Products Table */}
                    <div className="border border-slate-300 rounded overflow-hidden">
                      <div className="bg-indigo-100 px-4 py-2 font-semibold text-sm">
                        products
                      </div>
                      <div className="p-4 bg-white">
                        <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                          <div className="font-semibold text-slate-600">Column</div>
                          <div className="font-semibold text-slate-600">Type</div>
                          <div className="font-semibold text-slate-600">Purpose</div>
                          
                          <div>id</div>
                          <div className="text-blue-600">INT</div>
                          <div>Primary key</div>
                          
                          <div>name</div>
                          <div className="text-blue-600">VARCHAR(255)</div>
                          <div>Display name</div>
                          
                          <div className="text-green-600">slug</div>
                          <div className="text-blue-600">VARCHAR(255)</div>
                          <div>URL slug (unique)</div>
                          
                          <div>description</div>
                          <div className="text-blue-600">TEXT</div>
                          <div>Product description</div>
                          
                          <div className="text-green-600">status</div>
                          <div className="text-blue-600">ENUM</div>
                          <div>active/out_of_stock/discontinued</div>
                          
                          <div>created_at</div>
                          <div className="text-blue-600">TIMESTAMP</div>
                          <div>Creation date</div>
                        </div>
                      </div>
                    </div>

                    {/* Product Slug History */}
                    <div className="border border-slate-300 rounded overflow-hidden">
                      <div className="bg-purple-100 px-4 py-2 font-semibold text-sm">
                        product_slug_history
                      </div>
                      <div className="p-4 bg-white">
                        <div className="grid grid-cols-3 gap-2 text-xs font-mono mb-3">
                          <div className="font-semibold text-slate-600">Column</div>
                          <div className="font-semibold text-slate-600">Type</div>
                          <div className="font-semibold text-slate-600">Purpose</div>
                          
                          <div>id</div>
                          <div className="text-blue-600">INT</div>
                          <div>Primary key</div>
                          
                          <div className="text-green-600">product_id</div>
                          <div className="text-blue-600">INT</div>
                          <div>Foreign key to products</div>
                          
                          <div className="text-green-600">slug</div>
                          <div className="text-blue-600">VARCHAR(255)</div>
                          <div>Old slug value</div>
                          
                          <div>is_primary</div>
                          <div className="text-blue-600">BOOLEAN</div>
                          <div>Current active slug?</div>
                          
                          <div>created_at</div>
                          <div className="text-blue-600">TIMESTAMP</div>
                          <div>When slug was created</div>
                        </div>
                        <Alert className="border-purple-300 bg-purple-50 text-xs">
                          <Info className="h-3 w-3" />
                          <AlertDescription>
                            <strong>Why this table?</strong> Tracks slug history so you can create automatic 
                            redirects when product names change. Never break old URLs!
                          </AlertDescription>
                        </Alert>
                      </div>
                    </div>

                    {/* Categories Table */}
                    <div className="border border-slate-300 rounded overflow-hidden">
                      <div className="bg-blue-100 px-4 py-2 font-semibold text-sm">
                        categories
                      </div>
                      <div className="p-4 bg-white">
                        <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                          <div className="font-semibold text-slate-600">Column</div>
                          <div className="font-semibold text-slate-600">Type</div>
                          <div className="font-semibold text-slate-600">Purpose</div>
                          
                          <div>id</div>
                          <div className="text-blue-600">INT</div>
                          <div>Primary key</div>
                          
                          <div>name</div>
                          <div className="text-blue-600">VARCHAR(255)</div>
                          <div>Category name</div>
                          
                          <div className="text-green-600">slug</div>
                          <div className="text-blue-600">VARCHAR(255)</div>
                          <div>URL slug</div>
                          
                          <div className="text-green-600">parent_id</div>
                          <div className="text-blue-600">INT</div>
                          <div>Parent category (NULL for root)</div>
                          
                          <div className="text-green-600">full_path</div>
                          <div className="text-blue-600">VARCHAR(500)</div>
                          <div>Denormalized path for breadcrumbs</div>
                        </div>
                      </div>
                    </div>

                    {/* Redirects Table */}
                    <div className="border border-slate-300 rounded overflow-hidden">
                      <div className="bg-green-100 px-4 py-2 font-semibold text-sm">
                        redirects
                      </div>
                      <div className="p-4 bg-white">
                        <div className="grid grid-cols-3 gap-2 text-xs font-mono mb-3">
                          <div className="font-semibold text-slate-600">Column</div>
                          <div className="font-semibold text-slate-600">Type</div>
                          <div className="font-semibold text-slate-600">Purpose</div>
                          
                          <div>id</div>
                          <div className="text-blue-600">INT</div>
                          <div>Primary key</div>
                          
                          <div className="text-green-600">old_path</div>
                          <div className="text-blue-600">VARCHAR(500)</div>
                          <div>Original URL path</div>
                          
                          <div className="text-green-600">new_path</div>
                          <div className="text-blue-600">VARCHAR(500)</div>
                          <div>Redirect destination</div>
                          
                          <div className="text-green-600">status_code</div>
                          <div className="text-blue-600">INT</div>
                          <div>301, 302, or 410</div>
                          
                          <div>created_at</div>
                          <div className="text-blue-600">TIMESTAMP</div>
                          <div>When redirect was created</div>
                        </div>
                        <Alert className="border-green-300 bg-green-50 text-xs">
                          <CheckCircle2 className="h-3 w-3" />
                          <AlertDescription>
                            <strong>Automatic redirects:</strong> When product slugs change, automatically insert 
                            a redirect from old slug to new slug. Preserves link equity and prevents 404s.
                          </AlertDescription>
                        </Alert>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Slug Management Strategy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Link2 className="h-5 w-5 text-blue-600" />
                    Slug Management Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-2">
                    <div className="text-blue-400">// Pseudocode: Slug update workflow</div>
                    <div>function updateProductName(productId, newName) {'{'}</div>
                    <div className="pl-4 text-slate-400">// 1. Generate new slug</div>
                    <div className="pl-4">newSlug = generateSlug(newName)</div>
                    <div className="pl-4 text-slate-400">// 2. Get current slug</div>
                    <div className="pl-4">oldSlug = getProductSlug(productId)</div>
                    <div className="pl-4 text-slate-400">// 3. Update product</div>
                    <div className="pl-4">updateProduct(productId, {'{ name: newName, slug: newSlug }'})</div>
                    <div className="pl-4 text-slate-400">// 4. Save old slug to history</div>
                    <div className="pl-4">insertSlugHistory(productId, oldSlug, is_primary: false)</div>
                    <div className="pl-4 text-slate-400">// 5. Create automatic redirect</div>
                    <div className="pl-4 text-green-400">createRedirect(oldSlug, newSlug, status: 301)</div>
                    <div>{'}'}</div>
                  </div>

                  <Alert className="border-amber-300 bg-amber-50">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      <strong>Never break URLs:</strong> This workflow ensures that if someone bookmarked your old URL 
                      or Google has it indexed, they'll automatically be redirected to the new URL with a 301.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Canonical URL Resolution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CircleDot className="h-5 w-5 text-purple-600" />
                    Canonical URL Resolution Algorithm
                  </CardTitle>
                  <CardDescription>
                    How to programmatically determine the canonical URL for any product page
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-1">
                    <div className="text-blue-400">// Canonical resolution decision flow</div>
                    <div>function getCanonicalUrl(product, params) {'{'}</div>
                    <div className="pl-4 text-slate-400">// Step 1: Check product status</div>
                    <div className="pl-4">if (product.status === 'discontinued') {'{'}</div>
                    <div className="pl-8 text-red-400">return null // Don't set canonical, let it 404/410</div>
                    <div className="pl-4">{'}'}</div>
                    <div className="pl-4 text-slate-400">// Step 2: Check if variant URL</div>
                    <div className="pl-4">if (params.size || params.quantity) {'{'}</div>
                    <div className="pl-8 text-green-400">return baseProductUrl // Canonical to base</div>
                    <div className="pl-4">{'}'}</div>
                    <div className="pl-4 text-slate-400">// Step 3: Check if color variant with separate URL</div>
                    <div className="pl-4">if (params.color && product.useColorUrls) {'{'}</div>
                    <div className="pl-8 text-green-400">return currentUrl // Self-canonical</div>
                    <div className="pl-4">{'}'}</div>
                    <div className="pl-4 text-slate-400">// Step 4: Default to current URL</div>
                    <div className="pl-4 text-green-400">return currentUrl</div>
                    <div>{'}'}</div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="border border-blue-200 bg-blue-50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Self-Canonical Examples</CardTitle>
                      </CardHeader>
                      <CardContent className="text-xs space-y-1 font-mono">
                        <div>/products/air-max-90</div>
                        <div>/products/air-max-90-red</div>
                        <div>/shop/t-shirts/for/women/</div>
                        <div className="text-blue-700 pt-2">→ Each points to itself</div>
                      </CardContent>
                    </Card>

                    <Card className="border border-purple-200 bg-purple-50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Canonical to Base</CardTitle>
                      </CardHeader>
                      <CardContent className="text-xs space-y-1 font-mono">
                        <div>/air-max-90?size=M</div>
                        <div>/air-max-90?size=L</div>
                        <div className="text-purple-700 pt-2">→ Both canonical to</div>
                        <div className="text-purple-700">/air-max-90</div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Considerations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Box className="h-5 w-5 text-green-600" />
                    Performance & Indexing Considerations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="border-l-4 border-l-green-500 bg-green-50 p-4">
                      <h4 className="font-semibold text-sm mb-2">Database Indexes</h4>
                      <div className="text-xs text-slate-700 space-y-1">
                        <div>• <strong>UNIQUE index on products.slug</strong> - Enforces uniqueness, speeds up lookups</div>
                        <div>• <strong>Index on products.status</strong> - Filter out discontinued products quickly</div>
                        <div>• <strong>Index on redirects.old_path</strong> - Fast redirect lookups</div>
                        <div>• <strong>Composite index on (category_id, status)</strong> - Category page queries</div>
                      </div>
                    </div>

                    <div className="border-l-4 border-l-blue-500 bg-blue-50 p-4">
                      <h4 className="font-semibold text-sm mb-2">Caching Strategy</h4>
                      <div className="text-xs text-slate-700 space-y-1">
                        <div>• <strong>Cache slug → product_id mappings</strong> - Avoid DB lookup on every request</div>
                        <div>• <strong>Cache product data</strong> - Reduce database load for popular products</div>
                        <div>• <strong>Cache category hierarchies</strong> - Breadcrumb generation is expensive</div>
                        <div>• <strong>Invalidate on updates</strong> - Clear cache when product data changes</div>
                      </div>
                    </div>

                    <div className="border-l-4 border-l-purple-500 bg-purple-50 p-4">
                      <h4 className="font-semibold text-sm mb-2">Denormalization for Speed</h4>
                      <div className="text-xs text-slate-700 space-y-1">
                        <div>• <strong>Store full category path</strong> - Avoid recursive queries for breadcrumbs</div>
                        <div>• <strong>Cache product URLs</strong> - Pre-compute canonical URLs and store them</div>
                        <div>• <strong>Materialized views</strong> - For complex product listing queries</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-1">
                    <div className="text-blue-400">// Example: Full path denormalization</div>
                    <div>categories:</div>
                    <div>id | name     | parent_id | full_path</div>
                    <div>1  | Shoes    | NULL      | /shoes</div>
                    <div>2  | Running  | 1         | /shoes/running</div>
                    <div>3  | Nike     | 2         | /shoes/running/nike</div>
                    <div className="text-green-400 mt-2">// full_path pre-computed = instant breadcrumbs!</div>
                  </div>
                </CardContent>
              </Card>

              {/* Handling URL Conflicts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    Handling Slug Conflicts
                  </CardTitle>
                  <CardDescription>
                    What to do when two products want the same slug
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-700">
                    Slug conflicts happen when two products have similar names. You need a conflict resolution strategy:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border border-slate-200">
                      <thead className="bg-slate-100">
                        <tr>
                          <th className="p-2 text-left border-r border-slate-200">Product Name</th>
                          <th className="p-2 text-left border-r border-slate-200">Generated Slug</th>
                          <th className="p-2 text-left border-r border-slate-200">Conflict?</th>
                          <th className="p-2 text-left">Resolution</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-slate-200">
                          <td className="p-2 border-r border-slate-200">Nike Air Max 90</td>
                          <td className="p-2 border-r border-slate-200 font-mono">nike-air-max-90</td>
                          <td className="p-2 border-r border-slate-200 text-green-600">No</td>
                          <td className="p-2 font-mono">nike-air-max-90</td>
                        </tr>
                        <tr className="border-t border-slate-200 bg-amber-50">
                          <td className="p-2 border-r border-slate-200">Nike Air Max 90 (Red)</td>
                          <td className="p-2 border-r border-slate-200 font-mono">nike-air-max-90</td>
                          <td className="p-2 border-r border-slate-200 text-red-600">Yes!</td>
                          <td className="p-2 font-mono">nike-air-max-90-red</td>
                        </tr>
                        <tr className="border-t border-slate-200 bg-amber-50">
                          <td className="p-2 border-r border-slate-200">Nike Air Max 90 (2024)</td>
                          <td className="p-2 border-r border-slate-200 font-mono">nike-air-max-90</td>
                          <td className="p-2 border-r border-slate-200 text-red-600">Yes!</td>
                          <td className="p-2 font-mono">nike-air-max-90-2024</td>
                        </tr>
                        <tr className="border-t border-slate-200 bg-amber-50">
                          <td className="p-2 border-r border-slate-200">Nike Air Max 90 (Kids)</td>
                          <td className="p-2 border-r border-slate-200 font-mono">nike-air-max-90</td>
                          <td className="p-2 border-r border-slate-200 text-red-600">Yes!</td>
                          <td className="p-2 font-mono">nike-air-max-90-kids</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-slate-900 text-slate-200 p-4 rounded text-xs font-mono space-y-2">
                    <div className="text-blue-400">// Conflict resolution algorithm</div>
                    <div>function ensureUniqueSlug(baseSlug, productId) {'{'}</div>
                    <div className="pl-4">slug = baseSlug</div>
                    <div className="pl-4">counter = 2</div>
                    <div className="pl-4">while (slugExists(slug) && slug.product_id !== productId) {'{'}</div>
                    <div className="pl-8 text-amber-400">// Try appending number</div>
                    <div className="pl-8">slug = baseSlug + '-' + counter</div>
                    <div className="pl-8">counter++</div>
                    <div className="pl-4">{'}'}</div>
                    <div className="pl-4 text-green-400">return slug</div>
                    <div>{'}'}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

