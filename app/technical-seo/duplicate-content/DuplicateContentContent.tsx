import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Copy,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  ArrowRight,
  Search as SearchIcon,
  Settings,
  List,
  Globe,
  Link as LinkIcon,
  FlaskConical,
} from "lucide-react";

export default function DuplicateContentContent() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Copy className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold">Duplicate Content</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Understand the root causes of duplicate content and find the right solution for your
            specific situation
          </p>
          <Alert className="border-purple-300 bg-purple-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Key Insight:</strong> Duplicate content is rarely a standalone
              problem—it&apos;s usually a <em>symptom</em> of underlying technical SEO issues like
              poor parameter handling, missing canonicals, or improper pagination.
            </AlertDescription>
          </Alert>
        </div>

        {/* Interactive Demo Callout */}
        <Alert className="mb-8 border-2 border-green-300 bg-gradient-to-r from-green-50 to-blue-50">
          <FlaskConical className="h-5 w-5 text-green-600" />
          <AlertDescription className="flex items-center justify-between">
            <span className="text-slate-900">
              <strong>Test how filters create duplicate content:</strong> Use the Interactive Demo
              to see how different parameter combinations are handled to prevent duplication.
            </span>
            <Link href="/shop">
              <Button size="sm" className="ml-4 bg-green-600 hover:bg-green-700">
                Try Demo
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </AlertDescription>
        </Alert>

        {/* What Is Duplicate Content */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What Is Duplicate Content?</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-slate-700">
                Duplicate content occurs when <strong>identical or very similar content</strong>{" "}
                appears at multiple URLs on your site. This confuses search engines about which
                version to index and rank.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded p-4">
                  <div className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    Why It&apos;s Problematic
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Dilutes ranking signals across multiple URLs</li>
                    <li>• Wastes crawl budget on redundant pages</li>
                    <li>• Confuses users with inconsistent URLs</li>
                    <li>• Google may choose the &quot;wrong&quot; URL to rank</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded p-4">
                  <div className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Info className="h-4 w-4 text-blue-600" />
                    Not a Penalty (Usually)
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Google doesn&apos;t &quot;penalize&quot; for duplicate content</li>
                    <li>• They simply pick one version (canonicalization)</li>
                    <li>• Problem: They might pick the wrong one!</li>
                    <li>• Solution: Tell them which URL you prefer</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Common Causes & Solutions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Common Causes & Solutions</h2>
          <p className="text-slate-600 mb-6">
            Identify your duplicate content issue below and navigate to the appropriate best
            practices guide:
          </p>

          <div className="space-y-4">
            {/* Faceted Navigation */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-blue-600" />
                      Faceted Navigation & Filters
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Multiple filter combinations create endless URL variations showing similar
                      products
                    </CardDescription>
                  </div>
                  <Badge className="bg-red-100 text-red-800 border-red-300">High Risk</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-slate-50 p-3 rounded text-xs font-mono space-y-1">
                    <div>/shop/shoes?color=black</div>
                    <div>/shop/shoes?color=black&size=10</div>
                    <div>/shop/shoes?size=10</div>
                    <div className="text-slate-500">... exponential combinations</div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-slate-700 font-semibold">Solution:</span>
                    <Link href="/technical-seo/parameters">
                      <Button variant="outline" size="sm" className="gap-2">
                        Parameters Guide <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pagination */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <List className="h-5 w-5 text-amber-600" />
                      Paginated Content
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Page 2, 3, 4... show overlapping or similar product lists
                    </CardDescription>
                  </div>
                  <Badge className="bg-amber-100 text-amber-800 border-amber-300">
                    Medium Risk
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-slate-50 p-3 rounded text-xs font-mono space-y-1">
                    <div>/shop/shoes?page=1</div>
                    <div>/shop/shoes?page=2</div>
                    <div>/shop/shoes?page=3</div>
                    <div className="text-slate-500">... all showing &quot;shoes&quot; content</div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-slate-700 font-semibold">Solution:</span>
                    <Link href="/pagination">
                      <Button variant="outline" size="sm" className="gap-2">
                        Pagination Guide <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Search Results */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <SearchIcon className="h-5 w-5 text-purple-600" />
                      Search Results Pages
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Internal search creates infinite query variations that duplicate category
                      pages
                    </CardDescription>
                  </div>
                  <Badge className="bg-red-100 text-red-800 border-red-300">High Risk</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-slate-50 p-3 rounded text-xs font-mono space-y-1">
                    <div>/search?q=shoes</div>
                    <div>/search?q=black+shoes</div>
                    <div>/search?q=running+shoes</div>
                    <div className="text-slate-500">... overlaps with /shop/shoes</div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-slate-700 font-semibold">Solution:</span>
                    <Link href="/site-search">
                      <Button variant="outline" size="sm" className="gap-2">
                        Site Search Guide <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Multi-Language */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-indigo-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-indigo-600" />
                      Multiple Language Versions
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Same content in different languages without proper hreflang implementation
                    </CardDescription>
                  </div>
                  <Badge className="bg-amber-100 text-amber-800 border-amber-300">
                    Medium Risk
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-slate-50 p-3 rounded text-xs font-mono space-y-1">
                    <div>/en/products/shoes</div>
                    <div>/fr/produits/chaussures</div>
                    <div>/es/productos/zapatos</div>
                    <div className="text-slate-500">... similar content, different languages</div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-slate-700 font-semibold">Solution:</span>
                    <Link href="/international">
                      <Button variant="outline" size="sm" className="gap-2">
                        International SEO Guide <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Protocol & Subdomain Variations */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <LinkIcon className="h-5 w-5 text-green-600" />
                      Protocol & Subdomain Variations
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Same content accessible via HTTP/HTTPS, www/non-www, or mobile subdomains
                    </CardDescription>
                  </div>
                  <Badge className="bg-amber-100 text-amber-800 border-amber-300">
                    Medium Risk
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-slate-50 p-3 rounded text-xs font-mono space-y-1">
                    <div>http://example.com/shoes</div>
                    <div>https://example.com/shoes</div>
                    <div>https://www.example.com/shoes</div>
                    <div>https://m.example.com/shoes</div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-slate-700 font-semibold">Solution:</span>
                    <Link href="/parameters">
                      <Button variant="outline" size="sm" className="gap-2">
                        Canonicals Guide <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sort & Tracking Parameters */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-slate-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-slate-600" />
                      Sorting & Tracking Parameters
                    </CardTitle>
                    <CardDescription className="mt-2">
                      URL parameters that don&apos;t change content but create duplicate URLs
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800 border-green-300">Low Risk</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-slate-50 p-3 rounded text-xs font-mono space-y-1">
                    <div>/shop/shoes?sort=price_asc</div>
                    <div>/shop/shoes?utm_source=email</div>
                    <div>/shop/shoes?sessionid=xyz</div>
                    <div className="text-slate-500">
                      ... same products, different order/tracking
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-slate-700 font-semibold">Solution:</span>
                    <Link href="/technical-seo/parameters">
                      <Button variant="outline" size="sm" className="gap-2">
                        Parameters Guide <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Prevention Checklist */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Prevention Checklist</h2>
          <Card className="bg-green-50 border-2 border-green-200">
            <CardContent className="pt-6">
              <p className="text-sm text-slate-700 mb-4">
                Implement these practices from the start to avoid duplicate content issues:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Set canonical URLs on every page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Use noindex,follow for unstable parameters (sort, filters)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Implement proper pagination strategies (page 2+ noindex)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Block search result pages with noindex,follow</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Use hreflang for multi-language content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Redirect or canonicalize HTTP → HTTPS, www → non-www</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Strip tracking parameters from canonical URLs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Monitor crawl stats in Google Search Console</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Diagnosis Tools */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How to Diagnose Duplicate Content</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-sm text-slate-700">
                Use these methods to identify duplicate content issues on your site:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-l-blue-500 bg-blue-50 p-4">
                  <h3 className="font-semibold text-sm mb-2">1. Google Search Console</h3>
                  <p className="text-xs text-slate-700 mb-2">
                    <strong>Coverage Report:</strong> Look for &quot;Duplicate, Google chose
                    different canonical than user&quot;
                  </p>
                  <p className="text-xs text-slate-700">
                    Path: Search Console → Pages → Why pages aren&apos;t indexed → Duplicate
                  </p>
                </div>

                <div className="border-l-4 border-l-purple-500 bg-purple-50 p-4">
                  <h3 className="font-semibold text-sm mb-2">2. Site: Search Operator</h3>
                  <p className="text-xs text-slate-700 mb-2">
                    Search Google for:{" "}
                    <code className="bg-white px-2 py-1 rounded text-xs">
                      site:yourdomain.com &quot;exact page title&quot;
                    </code>
                  </p>
                  <p className="text-xs text-slate-700">
                    If multiple URLs appear with the same title, you likely have duplicates
                  </p>
                </div>

                <div className="border-l-4 border-l-green-500 bg-green-50 p-4">
                  <h3 className="font-semibold text-sm mb-2">3. Crawl Your Site</h3>
                  <p className="text-xs text-slate-700 mb-2">
                    Use tools like Screaming Frog or Sitebulb to crawl your site and identify:
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside pl-2">
                    <li>Pages with identical title tags</li>
                    <li>Pages with identical meta descriptions</li>
                    <li>Pages with near-duplicate content</li>
                    <li>Canonical chain issues</li>
                  </ul>
                </div>

                <div className="border-l-4 border-l-amber-500 bg-amber-50 p-4">
                  <h3 className="font-semibold text-sm mb-2">4. Check Indexed Pages</h3>
                  <p className="text-xs text-slate-700 mb-2">
                    Compare indexed count in GSC vs your sitemap:
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside pl-2">
                    <li>
                      If indexed &gt; sitemap count → likely duplicate parameter URLs being indexed
                    </li>
                    <li>Check which URLs Google is indexing vs which ones you want indexed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary */}
        <Card className="bg-gradient-to-r from-purple-50 to-slate-50 border-2 border-purple-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Copy className="h-5 w-5 text-purple-600" />
              Key Takeaways
            </h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Duplicate content is a symptom</strong>, not a root cause. Fix the
                  underlying technical issues.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Use canonical tags</strong> to tell Google which URL you prefer when
                  duplicates exist.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Prevent at the source</strong>: Configure parameter handling, pagination,
                  and search pages correctly from the start.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Monitor regularly</strong> using Google Search Console to catch issues
                  early.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
