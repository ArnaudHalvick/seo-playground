import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  Layers,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  Link2,
  FolderTree,
  Home,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Site Architecture & URLs - SEO Workshop",
  description: "Build clean, crawlable URL structures with proper hierarchy depth and descriptive paths instead of IDs.",
};

export default function SiteArchitecturePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold">Site Architecture & URLs</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Build a clean, crawlable URL structure with proper hierarchy and internal linking for
            maximum SEO impact
          </p>
          <Alert className="border-blue-300 bg-blue-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Foundation of SEO:</strong> Good site architecture makes it easy for search
              engines to crawl, understand, and index your content while providing clear navigation
              for users.
            </AlertDescription>
          </Alert>
        </div>

        {/* URL Structure Best Practices */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">URL Structure Best Practices</h2>

          <div className="space-y-6">
            {/* Descriptive vs IDs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Use Descriptive Paths, Not IDs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-green-300 rounded p-4 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <p className="font-semibold text-sm">Good: Descriptive</p>
                    </div>
                    <div className="bg-slate-900 text-green-400 p-3 rounded text-xs font-mono space-y-1">
                      <div>/shop/shoes/nike-air-max</div>
                      <div>/blog/seo-best-practices</div>
                      <div>/category/electronics</div>
                    </div>
                    <ul className="text-xs text-slate-700 mt-3 space-y-1">
                      <li>✓ Keywords visible in URL</li>
                      <li>✓ User-friendly and memorable</li>
                      <li>✓ Context clear from path alone</li>
                    </ul>
                  </div>

                  <div className="border-2 border-red-300 rounded p-4 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="h-5 w-5 text-red-600" />
                      <p className="font-semibold text-sm">Bad: Cryptic IDs</p>
                    </div>
                    <div className="bg-slate-900 text-red-400 p-3 rounded text-xs font-mono space-y-1">
                      <div>/product?id=12345</div>
                      <div>/p/98273647</div>
                      <div>/cat?c=42</div>
                    </div>
                    <ul className="text-xs text-slate-700 mt-3 space-y-1">
                      <li>✗ No keyword value</li>
                      <li>✗ Meaningless to users</li>
                      <li>✗ Hard to remember/share</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hierarchy Depth */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FolderTree className="h-5 w-5 text-blue-600" />
                  Keep Hierarchy 2-4 Levels Deep
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-slate-700">
                    Shallow hierarchies help crawlers discover content faster and signal page
                    importance.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="border-2 border-green-300 rounded p-4 bg-white">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <p className="font-semibold text-xs">Ideal: 2-3 Levels</p>
                      </div>
                      <div className="bg-slate-900 text-green-400 p-2 rounded text-xs font-mono space-y-1">
                        <div className="text-slate-400">/</div>
                        <div className="pl-2">└─ /shop/</div>
                        <div className="pl-6">└─ /shoes/</div>
                        <div className="pl-10">└─ nike-air</div>
                      </div>
                      <p className="text-xs text-green-700 mt-2">3 clicks from home</p>
                    </div>

                    <div className="border-2 border-amber-300 rounded p-4 bg-white">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-amber-600" />
                        <p className="font-semibold text-xs">OK: 4 Levels</p>
                      </div>
                      <div className="bg-slate-900 text-amber-400 p-2 rounded text-xs font-mono space-y-1">
                        <div className="text-slate-400">/</div>
                        <div className="pl-2">└─ /shop/</div>
                        <div className="pl-4">└─ /athletic/</div>
                        <div className="pl-6">└─ /shoes/</div>
                        <div className="pl-8 text-xs">└─ nike-air</div>
                      </div>
                      <p className="text-xs text-amber-700 mt-2">4 clicks from home</p>
                    </div>

                    <div className="border-2 border-red-300 rounded p-4 bg-white">
                      <div className="flex items-center gap-2 mb-2">
                        <XCircle className="h-4 w-4 text-red-600" />
                        <p className="font-semibold text-xs">Bad: 5+ Levels</p>
                      </div>
                      <div className="bg-slate-900 text-red-400 p-2 rounded text-xs font-mono space-y-1">
                        <div className="text-slate-400">/</div>
                        <div className="pl-1">└─ /shop/</div>
                        <div className="pl-2 text-xs">└─ /men/</div>
                        <div className="pl-3 text-xs">└─ /athletic/</div>
                        <div className="pl-4 text-xs">└─ /shoes/</div>
                        <div className="pl-5 text-xs">└─ nike-air</div>
                      </div>
                      <p className="text-xs text-red-700 mt-2">5+ clicks from home</p>
                    </div>
                  </div>

                  <Alert className="border-amber-300 bg-amber-50">
                    <Info className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      <strong>Crawl Depth Impact:</strong> Pages buried 5+ levels deep may not get
                      crawled frequently, especially on large sites. Keep important content within 3
                      clicks of the homepage.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>

            {/* URL Conventions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Link2 className="h-5 w-5 text-blue-600" />
                  Consistent URL Conventions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Trailing Slashes */}
                  <div className="border rounded p-4 bg-slate-50">
                    <h3 className="font-semibold text-sm mb-3">Trailing Slashes</h3>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Pick one style and stick to it</span>
                      </div>
                      <div className="bg-white p-2 rounded font-mono text-xs space-y-1">
                        <div className="text-green-600">/shop/ (with slash)</div>
                        <div className="text-slate-400">or</div>
                        <div className="text-green-600">/shop (without slash)</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-3 w-3 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-amber-600">Inconsistency creates duplicate URLs</span>
                      </div>
                    </div>
                  </div>

                  {/* Case Sensitivity */}
                  <div className="border rounded p-4 bg-slate-50">
                    <h3 className="font-semibold text-sm mb-3">Lowercase URLs</h3>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Always use lowercase</span>
                      </div>
                      <div className="bg-white p-2 rounded font-mono text-xs space-y-1">
                        <div className="text-green-600">/shop/shoes</div>
                        <div className="text-red-400 line-through">/Shop/Shoes</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="h-3 w-3 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Servers may treat these as different URLs</span>
                      </div>
                    </div>
                  </div>

                  {/* Word Separators */}
                  <div className="border rounded p-4 bg-slate-50">
                    <h3 className="font-semibold text-sm mb-3">Word Separators</h3>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Use hyphens, not underscores</span>
                      </div>
                      <div className="bg-white p-2 rounded font-mono text-xs space-y-1">
                        <div className="text-green-600">/nike-air-max</div>
                        <div className="text-red-400 line-through">/nike_air_max</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="h-3 w-3 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Google treats hyphens as word separators</span>
                      </div>
                    </div>
                  </div>

                  {/* Special Characters */}
                  <div className="border rounded p-4 bg-slate-50">
                    <h3 className="font-semibold text-sm mb-3">Special Characters</h3>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <XCircle className="h-3 w-3 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Avoid special characters</span>
                      </div>
                      <div className="bg-white p-2 rounded font-mono text-xs space-y-1">
                        <div className="text-green-600">/mens-shoes</div>
                        <div className="text-red-400 line-through">/men's-shoes</div>
                        <div className="text-red-400 line-through">/shoes&accessories</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="h-3 w-3 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Use URL encoding or remove entirely</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Clean Paths vs Parameters */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Clean Paths vs Parameters</h2>
          <Card className="bg-gradient-to-r from-blue-50 to-slate-50 border-2">
            <CardContent className="pt-6 space-y-4">
              <p className="text-sm text-slate-700">
                This app demonstrates both approaches. Choose based on content stability and SEO
                value:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Clean Paths */}
                <div>
                  <div className="bg-green-50 border-2 border-green-300 rounded p-4 mb-3">
                    <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Clean Paths (Preferred for Stable Filters)
                    </h3>
                    <div className="bg-slate-900 text-green-400 p-3 rounded text-xs font-mono space-y-1 mb-3">
                      <div>/shop/t-shirts/for/women</div>
                      <div>/shop/shoes/color/black</div>
                      <div>/shop/t-shirts/size/m</div>
                    </div>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>✓ Better for SEO (keyword-rich URLs)</li>
                      <li>✓ More user-friendly</li>
                      <li>✓ Easier to share and remember</li>
                      <li>✓ Clear hierarchy</li>
                    </ul>
                  </div>
                  <div className="text-xs text-slate-600">
                    <strong>Use for:</strong> Gender, primary color, popular sizes, main categories
                  </div>
                </div>

                {/* Parameters */}
                <div>
                  <div className="bg-amber-50 border-2 border-amber-300 rounded p-4 mb-3">
                    <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      Query Parameters (OK for Dynamic Filters)
                    </h3>
                    <div className="bg-slate-900 text-amber-400 p-3 rounded text-xs font-mono space-y-1 mb-3">
                      <div>/shop/shoes?color=black</div>
                      <div>/shop/shoes?price_min=50</div>
                      <div>/shop/shoes?sort=price_asc</div>
                    </div>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>✓ Flexible for multi-select</li>
                      <li>✓ Easy to implement</li>
                      <li>✓ Good for sorting/filtering</li>
                      <li>⚠ Requires canonical strategy</li>
                    </ul>
                  </div>
                  <div className="text-xs text-slate-600">
                    <strong>Use for:</strong> Sorting, price ranges, multi-select filters, temporary
                    states
                  </div>
                </div>
              </div>

              <Alert className="border-blue-300 bg-blue-50">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  <strong>See it in action:</strong> Visit{" "}
                  <Link href="/shop/t-shirts" className="underline text-blue-700 font-semibold">
                    /shop/t-shirts
                  </Link>{" "}
                  to see how this app uses clean paths for gender filters and parameters for
                  color/size multi-select.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {/* Internal Linking */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Internal Linking Strategy</h2>

          <div className="space-y-6">
            {/* Breadcrumbs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-blue-600" />
                  Breadcrumbs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-slate-700">
                    Breadcrumb navigation shows hierarchy and creates internal links at every level.
                  </p>

                  <div className="bg-slate-50 border rounded p-4">
                    <p className="text-xs font-semibold mb-2">Example from this app:</p>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Link href="/" className="hover:text-blue-600">
                        Home
                      </Link>
                      <span>›</span>
                      <Link href="/shop" className="hover:text-blue-600">
                        Shop
                      </Link>
                      <span>›</span>
                      <Link href="/shop/t-shirts" className="hover:text-blue-600">
                        T-Shirts
                      </Link>
                      <span>›</span>
                      <span className="text-slate-900">Nike Classic Tee</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="font-semibold text-xs mb-2 text-green-900">Benefits:</p>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• Helps users navigate back</li>
                        <li>• Creates internal link structure</li>
                        <li>• Shows page context</li>
                        <li>• Good for structured data</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded p-3">
                      <p className="font-semibold text-xs mb-2 text-blue-900">Implementation:</p>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• Include on every page</li>
                        <li>• Use proper HTML markup</li>
                        <li>• Add BreadcrumbList schema</li>
                        <li>• Make all levels clickable</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Links */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Link2 className="h-5 w-5 text-blue-600" />
                  Main Navigation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-slate-700">
                    Main navigation links are the most powerful internal links on your site—they
                    appear on every page.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-2 border-green-300 rounded p-4 bg-white">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <p className="font-semibold text-sm">Best Practices</p>
                      </div>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>✓ Link to most important pages</li>
                        <li>✓ Use descriptive anchor text</li>
                        <li>✓ Keep menu focused (5-7 items)</li>
                        <li>✓ Mobile-friendly design</li>
                        <li>✓ Use HTML links (not JavaScript-only)</li>
                      </ul>
                    </div>

                    <div className="border-2 border-red-300 rounded p-4 bg-white">
                      <div className="flex items-center gap-2 mb-2">
                        <XCircle className="h-5 w-5 text-red-600" />
                        <p className="font-semibold text-sm">Avoid</p>
                      </div>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>✗ Too many links (overwhelming)</li>
                        <li>✗ Generic anchor text ("click here")</li>
                        <li>✗ JavaScript-only menus</li>
                        <li>✗ Broken or orphaned links</li>
                        <li>✗ Duplicate navigation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contextual Links */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Contextual & Related Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-slate-700">
                    In-content links and related products/pages help discovery and distribute link
                    equity.
                  </p>

                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="border rounded p-3 bg-slate-50">
                      <p className="font-semibold text-xs mb-2">Related Products</p>
                      <p className="text-xs text-slate-600">
                        "You may also like" sections create natural internal links
                      </p>
                    </div>

                    <div className="border rounded p-3 bg-slate-50">
                      <p className="font-semibold text-xs mb-2">Category Links</p>
                      <p className="text-xs text-slate-600">
                        Link to parent and sibling categories from product pages
                      </p>
                    </div>

                    <div className="border rounded p-3 bg-slate-50">
                      <p className="font-semibold text-xs mb-2">Content Links</p>
                      <p className="text-xs text-slate-600">
                        Link to relevant guides, tutorials, or related content
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Site Hierarchy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Hierarchy & Crawl Depth</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-sm text-slate-700">
                Page importance is partly determined by how many clicks it takes to reach from the
                homepage.
              </p>

              <div className="bg-slate-50 border-2 rounded p-4">
                <h3 className="font-semibold text-sm mb-3">Ideal Structure:</h3>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 w-20">Level 0:</span>
                    <span>/ (Homepage) ← Most important</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 w-20">Level 1:</span>
                    <span>/shop/, /blog/, /about/</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 w-20">Level 2:</span>
                    <span>/shop/shoes/, /shop/shirts/, /blog/seo/</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 w-20">Level 3:</span>
                    <span>/shop/shoes/nike-air-max, /blog/seo/canonicals</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded p-4">
                  <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Flat Structure Benefits
                  </h3>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Faster crawling of all pages</li>
                    <li>• Equal importance signals</li>
                    <li>• Better for large catalogs</li>
                    <li>• Easier maintenance</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded p-4">
                  <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    Deep Structure Problems
                  </h3>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Pages buried 5+ levels get crawled less</li>
                    <li>• Weaker link equity flow</li>
                    <li>• More clicks = lower importance signal</li>
                    <li>• Harder for users to navigate</li>
                  </ul>
                </div>
              </div>

              <Alert className="border-amber-300 bg-amber-50">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  <strong>Pro Tip:</strong> If you have important pages buried deep, create direct
                  links to them from the homepage or main navigation. This signals importance and
                  improves crawl frequency.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {/* Summary */}
        <Card className="bg-gradient-to-r from-blue-50 to-slate-50 border-2 border-blue-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Layers className="h-5 w-5 text-blue-600" />
              Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Use descriptive, keyword-rich URLs with hyphens</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Keep hierarchy 2-4 levels deep for important content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Use clean paths for stable filters, parameters for dynamic ones</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Implement breadcrumbs on every page</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Create strong internal linking through navigation and contextual links
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Link directly to important pages from homepage</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
  );
}
