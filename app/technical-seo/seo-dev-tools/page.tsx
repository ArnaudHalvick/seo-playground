import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import {
  Wrench,
  Search,
  Zap,
  CheckCircle2,
  Code2,
  Shield,
  GitBranch,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Developer Tools - SEO Workshop",
  description: "Curated toolkit for technical SEO: crawlers, performance tools, rendering tests, and monitoring solutions.",
};

export default function SeoDevTools() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 pb-24 lg:pb-8 lg:pr-96">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="h-10 w-10 text-orange-600" />
            <h1 className="text-4xl font-bold text-slate-900">
              SEO Dev Tools
            </h1>
          </div>
          <p className="text-xl text-slate-600">
            Essential tools for technical SEO implementation, monitoring, and debugging.
          </p>
        </div>

        {/* Crawl & Analysis */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Search className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Crawl & Analysis</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li>
                  <strong className="text-slate-900">Screaming Frog:</strong>{" "}
                  <span className="text-sm text-slate-700">Desktop crawler for auditing links, titles, and indexation issues</span>
                </li>
                <li>
                  <strong className="text-slate-900">Sitebulb:</strong>{" "}
                  <span className="text-sm text-slate-700">Visual crawler with detailed reports and hreflang validation</span>
                </li>
                <li>
                  <strong className="text-slate-900">JetOctopus:</strong>{" "}
                  <span className="text-sm text-slate-700">Cloud crawler and log analyzer for large sites</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Performance */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="h-6 w-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-slate-900">Performance & Core Web Vitals</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li>
                  <strong className="text-slate-900">Lighthouse:</strong>{" "}
                  <span className="text-sm text-slate-700">Built into Chrome DevTools - lab testing for performance, SEO, accessibility</span>
                </li>
                <li>
                  <strong className="text-slate-900">WebPageTest:</strong>{" "}
                  <span className="text-sm text-slate-700">Advanced lab testing with filmstrip view and connection throttling</span>
                </li>
                <li>
                  <strong className="text-slate-900">PageSpeed Insights:</strong>{" "}
                  <span className="text-sm text-slate-700">Combines Lighthouse with real Chrome user data (CrUX)</span>
                </li>
                <li>
                  <strong className="text-slate-900">Google Search Console:</strong>{" "}
                  <span className="text-sm text-slate-700">Core Web Vitals report showing real user performance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Rendering & JavaScript */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">Rendering & Testing</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li>
                  <strong className="text-slate-900">Puppeteer / Playwright:</strong>{" "}
                  <span className="text-sm text-slate-700">Headless browser automation to test JavaScript rendering</span>
                </li>
                <li>
                  <strong className="text-slate-900">Chrome DevTools:</strong>{" "}
                  <span className="text-sm text-slate-700">Network/Performance/Coverage panels for debugging render-blocking resources</span>
                </li>
                <li>
                  <strong className="text-slate-900">Google Rich Results Test:</strong>{" "}
                  <span className="text-sm text-slate-700">Validate structured data for rich results eligibility</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Deploy & Monitor */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-bold text-slate-900">Deploy & Monitor</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li>
                  <strong className="text-slate-900">Vercel / Netlify:</strong>{" "}
                  <span className="text-sm text-slate-700">Modern hosting with automatic deployments and preview URLs</span>
                </li>
                <li>
                  <strong className="text-slate-900">GitHub Actions:</strong>{" "}
                  <span className="text-sm text-slate-700">CI/CD pipelines - run Lighthouse CI to catch performance regressions</span>
                </li>
                <li>
                  <strong className="text-slate-900">Cloudflare:</strong>{" "}
                  <span className="text-sm text-slate-700">Edge workers for redirects, caching headers, and security rules</span>
                </li>
                <li>
                  <strong className="text-slate-900">Sentry / Datadog:</strong>{" "}
                  <span className="text-sm text-slate-700">Error tracking and APM for production monitoring</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Security & Headers */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-red-600" />
            <h2 className="text-2xl font-bold text-slate-900">Security & Headers</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li>
                  <strong className="text-slate-900">SecurityHeaders.com:</strong>{" "}
                  <span className="text-sm text-slate-700">Test CSP, HSTS, X-Frame-Options, and other security headers</span>
                </li>
                <li>
                  <strong className="text-slate-900">curl / HTTPie:</strong>{" "}
                  <span className="text-sm text-slate-700">Command-line tools to test headers and redirect chains</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Starter Stack */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-bold text-slate-900">Starter Stack</h2>
          </div>
          <Alert className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <AlertDescription>
              <p className="font-semibold text-slate-900 mb-3">
                Start here for high-impact results on a small budget:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li><strong>Crawl:</strong> Screaming Frog (free tier) + Puppeteer</li>
                <li><strong>Performance:</strong> Lighthouse + WebPageTest + GSC Core Web Vitals</li>
                <li><strong>Deploy:</strong> GitHub Actions + Vercel/Netlify</li>
                <li><strong>Edge:</strong> Cloudflare for redirects and caching</li>
                <li><strong>Errors:</strong> Sentry free tier</li>
              </ul>
            </AlertDescription>
          </Alert>
        </section>

        {/* Migration Checklist */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-slate-900">Migration Checklist</h2>
          </div>
          <Card className="border-2 border-orange-200">
            <CardContent className="pt-6">
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Crawl staging with Screaming Frog before launch</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Diff old vs new sitemaps to catch missing pages</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Test all redirects with List Mode crawler</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Add Search Console annotation and monitor Coverage daily</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Best Practices */}
        <section>
          <Alert className="border-2 border-slate-300">
            <AlertDescription>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <Badge variant="outline" className="mt-0.5">Tip</Badge>
                  <span>Build one dashboard (Looker Studio) instead of checking five tools</span>
                </li>
                <li className="flex gap-2">
                  <Badge variant="outline" className="mt-0.5">Tip</Badge>
                  <span>Assign clear owners: who monitors CWV, logs, redirects</span>
                </li>
                <li className="flex gap-2">
                  <Badge variant="outline" className="mt-0.5">Tip</Badge>
                  <span>Add tools to checklists so usage becomes automatic</span>
                </li>
              </ul>
            </AlertDescription>
          </Alert>
        </section>
      </div>
    </div>
  );
}
