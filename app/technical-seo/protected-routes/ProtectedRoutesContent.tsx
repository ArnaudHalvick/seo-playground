import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Lock,
  Shield,
  UserCheck,
  ShoppingCart,
  Settings,
  CheckCircle2,
  AlertTriangle,
  Info,
} from "lucide-react";

export default function ProtectedRoutesContent() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Protected Routes & Private Content</h1>
          <p className="text-lg text-slate-600 mb-4">
            SEO strategy for gated pages, account dashboards, authentication flows, and sensitive
            content
          </p>
          <Alert className="border-blue-300 bg-blue-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Protected routes contain user-specific or sensitive data that should never appear in
              search results. The SEO strategy is simple: <strong>block everything</strong> using
              defense-in-depth.
            </AlertDescription>
          </Alert>
        </div>

        {/* Categories of Protected Pages */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Categories of Private Pages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardHeader>
                <Lock className="h-8 w-8 mb-2 text-red-600" />
                <CardTitle>Account & Dashboard Pages</CardTitle>
                <CardDescription>User-specific data behind authentication</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <code className="bg-slate-100 px-2 py-1 rounded text-xs">/account/orders</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-slate-100 px-2 py-1 rounded text-xs">/account/billing</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-slate-100 px-2 py-1 rounded text-xs">
                      /account/settings
                    </code>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-slate-100 px-2 py-1 rounded text-xs">/dashboard/*</code>
                  </div>
                  <p className="text-slate-600 mt-3">
                    <strong>Strategy:</strong> noindex,nofollow + robots.txt block
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <UserCheck className="h-8 w-8 mb-2 text-amber-600" />
                <CardTitle>Authentication Pages</CardTitle>
                <CardDescription>Login, signup, and password reset flows</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <code className="bg-slate-100 px-2 py-1 rounded text-xs">/login</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-slate-100 px-2 py-1 rounded text-xs">/signup</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-slate-100 px-2 py-1 rounded text-xs">/reset-password</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-slate-100 px-2 py-1 rounded text-xs">/logout</code>
                  </div>
                  <p className="text-slate-600 mt-3">
                    <strong>Strategy:</strong> Usually noindex,follow (see decision guide below)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <ShoppingCart className="h-8 w-8 mb-2 text-purple-600" />
                <CardTitle>Checkout & Transaction Pages</CardTitle>
                <CardDescription>Cart, checkout, and payment flows</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <code className="bg-slate-100 px-2 py-1 rounded text-xs">/checkout/*</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-slate-100 px-2 py-1 rounded text-xs">/cart</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-slate-100 px-2 py-1 rounded text-xs">/payment/*</code>
                  </div>
                  <p className="text-slate-600 mt-3">
                    <strong>Strategy:</strong> noindex,follow or robots.txt block
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Settings className="h-8 w-8 mb-2 text-slate-600" />
                <CardTitle>Admin & Internal Tools</CardTitle>
                <CardDescription>Backend management interfaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <code className="bg-slate-100 px-2 py-1 rounded text-xs">/admin/*</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-slate-100 px-2 py-1 rounded text-xs">
                      /api/* (non-public)
                    </code>
                  </div>
                  <p className="text-slate-600 mt-3">
                    <strong>Strategy:</strong> noindex,nofollow + robots.txt block
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Defense-in-Depth Strategy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">SEO Strategy: Defense-in-Depth</h2>
          <Card>
            <CardContent className="pt-6">
              <Alert className="border-amber-300 bg-amber-50 mb-6">
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  <strong>Why three layers?</strong> Defense-in-depth ensures that even if one
                  protection fails (e.g., meta tags not rendered), other protections (robots.txt)
                  prevent indexation. This is critical for sensitive data.
                </AlertDescription>
              </Alert>

              <div className="space-y-6">
                {/* Layer 1: Meta Robots */}
                <div className="border rounded-lg p-5 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-red-100 rounded-full p-2">
                      <span className="text-2xl">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Meta Robots Tags</h3>
                      <Badge className="bg-red-100 text-red-800 border-red-300">
                        noindex,nofollow
                      </Badge>
                    </div>
                  </div>
                  <div className="pl-14 space-y-3">
                    <p className="text-sm text-slate-700">
                      Add meta robots tags to prevent indexing and link following. This is the first
                      line of defense.
                    </p>
                    <div className="bg-slate-900 text-green-400 p-4 rounded text-xs font-mono">
                      {'<meta name="robots" content="noindex,nofollow" />'}
                    </div>
                    <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                      <li>
                        <strong>noindex:</strong> Prevents page from appearing in search results
                      </li>
                      <li>
                        <strong>nofollow:</strong> Tells crawlers not to follow links (for truly
                        sensitive pages)
                      </li>
                    </ul>
                    <p className="text-xs text-slate-500 mt-2">
                      <strong>Note:</strong> For less sensitive pages like /login, you might use
                      noindex,follow instead.
                    </p>
                  </div>
                </div>

                {/* Layer 2: robots.txt */}
                <div className="border rounded-lg p-5 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-red-100 rounded-full p-2">
                      <span className="text-2xl">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">robots.txt Blocking</h3>
                      <Badge className="bg-red-100 text-red-800 border-red-300">
                        Disallow: /account/
                      </Badge>
                    </div>
                  </div>
                  <div className="pl-14 space-y-3">
                    <p className="text-sm text-slate-700">
                      Block crawlers from accessing protected paths entirely. This prevents crawl
                      waste and ensures no accidental indexing.
                    </p>
                    <div className="bg-slate-900 text-green-400 p-4 rounded text-xs font-mono space-y-1">
                      <div className="text-slate-400"># robots.txt</div>
                      <div>User-agent: *</div>
                      <div className="text-slate-400"># Protected & System Paths</div>
                      <div>Disallow: /account/</div>
                      <div>Disallow: /admin/</div>
                      <div>Disallow: /api/</div>
                    </div>
                    <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                      <li>Saves crawl budget by preventing access</li>
                      <li>Meta tags won&apos;t even be read (page never crawled)</li>
                      <li>
                        Pattern matching with wildcard:{" "}
                        <code className="bg-slate-100 px-1 rounded text-xs">/account/</code> blocks
                        all subpaths
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Layer 3: Sitemap Exclusion */}
                <div className="border rounded-lg p-5 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-red-100 rounded-full p-2">
                      <span className="text-2xl">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Sitemap Exclusion</h3>
                      <Badge className="bg-red-100 text-red-800 border-red-300">Not included</Badge>
                    </div>
                  </div>
                  <div className="pl-14 space-y-3">
                    <p className="text-sm text-slate-700">
                      Never include protected routes in your XML sitemap. Sitemaps should only
                      contain pages you want indexed.
                    </p>
                    <div className="bg-slate-900 text-green-400 p-4 rounded text-xs font-mono space-y-1">
                      <div className="text-slate-400">{"// lib/rules/sitemap.ts"}</div>
                      <div>{"if (pathname.startsWith('/account/')) {"}</div>
                      <div className="pl-4">{"sitemapIncluded = false;"}</div>
                      <div>{"}"}</div>
                    </div>
                    <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                      <li>Sitemap = indexation hint to search engines</li>
                      <li>Protected pages should never be hinted</li>
                      <li>Rule: If noindex → exclude from sitemap</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Decision Guide: Should You Index Auth Pages? */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Should You Index Authentication Pages?</h2>
          <div className="space-y-4">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🔐</div>
                  <div>
                    <CardTitle>Login Pages - Usually NO</CardTitle>
                    <Badge className="bg-amber-100 text-amber-800 border-amber-300 mt-1">
                      noindex,follow
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-700">
                  <strong>Recommendation:</strong> noindex,follow
                </p>
                <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                  <li>
                    <strong>Why noindex:</strong> Thin content, no unique value for search engines
                  </li>
                  <li>
                    <strong>Why follow:</strong> Allow discovery of linked resources (privacy
                    policy, help docs)
                  </li>
                  <li>
                    <strong>Exception:</strong> If login page has rich marketing content, consider
                    index,follow
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">📝</div>
                  <div>
                    <CardTitle>Signup Pages - MAYBE</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-300 mt-1">
                      Case-by-case
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-700">
                  <strong>Recommendation:</strong> Depends on content
                </p>
                <div className="grid md:grid-cols-2 gap-3 mt-3">
                  <div className="border rounded p-3 bg-green-50">
                    <div className="font-semibold text-sm mb-1 flex items-center gap-1">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Index if:
                    </div>
                    <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                      <li>Marketing landing page</li>
                      <li>Unique value proposition</li>
                      <li>Rich content (testimonials, features)</li>
                      <li>Target keyword: &quot;sign up for X&quot;</li>
                    </ul>
                  </div>
                  <div className="border rounded p-3 bg-red-50">
                    <div className="font-semibold text-sm mb-1 flex items-center gap-1">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      Noindex if:
                    </div>
                    <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                      <li>Just a form, minimal content</li>
                      <li>No unique value vs homepage</li>
                      <li>Duplicate of main CTA</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🔑</div>
                  <div>
                    <CardTitle>Password Reset - Always NO</CardTitle>
                    <Badge className="bg-red-100 text-red-800 border-red-300 mt-1">
                      noindex,follow or noindex,nofollow
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-700">
                  <strong>Recommendation:</strong> noindex,follow (or noindex,nofollow if very
                  sensitive)
                </p>
                <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                  <li>Transient pages with no SEO value</li>
                  <li>Can contain sensitive reset tokens in URLs</li>
                  <li>Should never appear in search results</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🚪</div>
                  <div>
                    <CardTitle>Logout Confirmation - Always NO</CardTitle>
                    <Badge className="bg-red-100 text-red-800 border-red-300 mt-1">
                      noindex,nofollow
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-700">
                  <strong>Recommendation:</strong> noindex,nofollow
                </p>
                <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                  <li>No content value whatsoever</li>
                  <li>Typically just a confirmation message</li>
                  <li>Block completely from indexing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Already Indexed? Recovery Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What If Protected Pages Are Already Indexed?</h2>
          <Card className="border-2 border-amber-400">
            <CardContent className="pt-6">
              <Alert className="border-amber-400 bg-amber-50 mb-6">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  If you discover protected pages in Google&apos;s index, act quickly. Sensitive
                  data in search results is a privacy and security issue.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-amber-100 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Immediately Add noindex Meta Tags</h3>
                    <p className="text-sm text-slate-700 mb-2">
                      Deploy{" "}
                      <code className="bg-slate-100 px-1 rounded text-xs">
                        {'<meta name="robots" content="noindex,nofollow" />'}
                      </code>{" "}
                      to all protected pages ASAP.
                    </p>
                    <p className="text-xs text-slate-600">
                      This signals to Google to remove the pages on next crawl.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-amber-100 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Remove from Sitemap</h3>
                    <p className="text-sm text-slate-700 mb-2">
                      Ensure protected pages are not in your XML sitemap. If they are, remove them
                      and resubmit to Search Console.
                    </p>
                    <p className="text-xs text-slate-600">
                      Sitemap presence signals indexation intent.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-amber-100 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Wait for Deindexing (2-4 weeks)</h3>
                    <p className="text-sm text-slate-700 mb-2">
                      Google will typically remove noindex pages within 2-4 weeks during normal
                      crawling.
                    </p>
                    <p className="text-xs text-slate-600 mb-2">
                      Monitor using{" "}
                      <code className="bg-slate-100 px-1 rounded text-xs">
                        site:yourdomain.com /account/
                      </code>{" "}
                      search in Google.
                    </p>
                    <Alert className="mt-3 border-red-300 bg-red-50">
                      <AlertDescription className="text-xs">
                        <strong>Critical:</strong> Do NOT add robots.txt blocking yet! If you block
                        before deindexing, crawlers can&apos;t access the pages to see the noindex
                        tag, and they&apos;ll remain indexed indefinitely.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Confirm Deindexing in Search Console</h3>
                    <p className="text-sm text-slate-700 mb-2">
                      Verify pages are no longer in Google&apos;s index using Search Console or{" "}
                      <code className="bg-slate-100 px-1 rounded text-xs">site:</code> search.
                    </p>
                    <p className="text-xs text-slate-600">
                      Once confirmed removed, proceed to the next step.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Add robots.txt Blocking (After Deindexing)
                    </h3>
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>Only after confirming deindexing</strong>, add{" "}
                      <code className="bg-slate-100 px-1 rounded text-xs">Disallow: /account/</code>{" "}
                      to robots.txt.
                    </p>
                    <p className="text-xs text-slate-600">
                      This prevents future crawling and re-indexing. Order matters!
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Optional: Use URL Removal Tool (If Urgent)
                    </h3>
                    <p className="text-sm text-slate-700 mb-2">
                      For urgent/sensitive cases, use Google Search Console&apos;s{" "}
                      <strong>URL Removal Tool</strong> to temporarily hide pages (6 months) while
                      waiting for permanent deindexing.
                    </p>
                    <p className="text-xs text-slate-600">
                      Path: Search Console → Removals → New Request → Temporarily remove URL
                    </p>
                    <Alert className="mt-3 border-amber-300 bg-amber-50">
                      <AlertDescription className="text-xs">
                        <strong>Note:</strong> The removal tool is temporary (6 months). You still
                        need to complete steps 1-5 for permanent removal.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary */}
        <Card className="bg-gradient-to-r from-blue-50 to-slate-50 border-2 border-blue-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Use defense-in-depth: meta tags + robots.txt + sitemap exclusion</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Account pages always get noindex,nofollow + robots block</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Login/auth pages usually noindex,follow (case-by-case for signup)</span>
                </li>
              </ul>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Never include protected routes in sitemap</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    If already indexed: add noindex immediately, then use removal tool if urgent
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>robots.txt blocking is preventive; meta tags handle existing crawls</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
