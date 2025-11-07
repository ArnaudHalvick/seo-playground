import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Metadata } from "next";
import {
  Settings,
  ShoppingBag,
  Search,
  Lock,
  Globe,
  Copy,
  FileText,
  Map,
  List,
  Layers,
  Code2,
  Bot,
  Info,
  Package,
  Zap,
  FlaskConical,
  CheckCircle2,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technical SEO - Programming & Implementation",
  description: "Master technical SEO through interactive demos. Learn robots.txt, canonicals, URL parameters, pagination, and production-ready SEO patterns.",
};

export default function TechnicalSeoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Technical SEO
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Master production-ready SEO implementations. Start with the <strong>Interactive Demo</strong> to see real-time decisions, or explore specific topics below.
          </p>
        </div>

        {/* Featured: Interactive Demo Section */}
        <div className="mb-16">
          <Card className="border-4 border-gradient-to-r from-green-400 via-blue-400 to-purple-400 overflow-hidden">
            <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white rounded-lg shadow-md">
                  <FlaskConical className="h-10 w-10 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2 text-slate-900">
                    Interactive Demo: Test SEO Logic in Real-Time
                  </h2>
                  <p className="text-lg text-slate-700">
                    Apply filters, change parameters, and watch the SEO Receipt explain every
                    decision step-by-step. This is where theory meets practice.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3 bg-white/70 p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Multi-select filters:</strong>
                    <p className="text-sm text-slate-700">
                      See 2^N crawl trap warnings when combining multiple values
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/70 p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Real-time SEO Receipt:</strong>
                    <p className="text-sm text-slate-700">
                      Track indexability, canonical URLs, and robots.txt decisions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/70 p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Parameter combinations:</strong>
                    <p className="text-sm text-slate-700">
                      Test stable filters + unstable sorts to see noindex,follow in action
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/70 p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Canonical URL logic:</strong>
                    <p className="text-sm text-slate-700">
                      See which parameters are kept vs dropped with diff highlighting
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Link href="/shop">
                  <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                    <FlaskConical className="h-5 w-5 mr-2" />
                    Launch Interactive Demo
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Section 1: Core Fundamentals */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Core Fundamentals</h2>
            <p className="text-slate-600">
              Master these essential building blocks of technical SEO
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200 flex flex-col justify-between">
              <CardHeader>
                <Bot className="h-8 w-8 mb-2 text-orange-600" />
                <CardTitle>Robots.txt</CardTitle>
                <CardDescription>
                  Control what search engines crawl with pattern-based rules
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/technical-seo/robots">
                  <Button className="w-full">View Robots.txt</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200 flex flex-col justify-between">
              <CardHeader>
                <Map className="h-8 w-8 mb-2 text-purple-600" />
                <CardTitle>Sitemap</CardTitle>
                <CardDescription>
                  Intelligent sitemap generation based on indexability rules
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/technical-seo/sitemap">
                  <Button className="w-full">View Sitemap</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200 flex flex-col justify-between">
              <CardHeader>
                <Settings className="h-8 w-8 mb-2 text-blue-600" />
                <CardTitle>Parameters</CardTitle>
                <CardDescription>URL parameter handling and canonical strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/technical-seo/parameters">
                  <Button className="w-full">View Parameters</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200 flex flex-col justify-between">
              <CardHeader>
                <Copy className="h-8 w-8 mb-2 text-purple-600" />
                <CardTitle>Duplicate Content</CardTitle>
                <CardDescription>
                  Diagnose and fix duplicate content at its root cause
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/technical-seo/duplicate-content">
                  <Button className="w-full">View Duplicate Content</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section 2: Content Patterns */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Content Patterns</h2>
            <p className="text-slate-600">
              Handle common content structures and navigation patterns
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200 flex flex-col justify-between">
              <CardHeader>
                <List className="h-8 w-8 mb-2 text-amber-600" />
                <CardTitle>Pagination</CardTitle>
                <CardDescription>
                  Best practices for multi-page content with proper canonicalization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/technical-seo/pagination">
                  <Button className="w-full">View Pagination</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200 flex flex-col justify-between">
              <CardHeader>
                <Search className="h-8 w-8 mb-2 text-amber-600" />
                <CardTitle>Site Search</CardTitle>
                <CardDescription>
                  Prevent crawl traps with noindex,follow strategy for search results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/technical-seo/site-search">
                  <Button className="w-full">View Site Search</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200 flex flex-col justify-between">
              <CardHeader>
                <Layers className="h-8 w-8 mb-2 text-blue-600" />
                <CardTitle>Site Architecture</CardTitle>
                <CardDescription>
                  URL structure, hierarchy, and internal linking strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/technical-seo/site-architecture">
                  <Button className="w-full">View Architecture</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section 3: Advanced Topics */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Advanced Topics</h2>
            <p className="text-slate-600">Specialized SEO strategies for complex scenarios</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200 flex flex-col justify-between">
              <CardHeader>
                <Zap className="h-8 w-8 mb-2 text-yellow-600" />
                <CardTitle>Core Web Vitals</CardTitle>
                <CardDescription>
                  Boosting SEO by improving website speed, visual stability, and responsiveness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/technical-seo/core-web-vitals">
                  <Button className="w-full">View Core Web Vitals</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200 flex flex-col justify-between">
              <CardHeader>
                <Lock className="h-8 w-8 mb-2 text-red-600" />
                <CardTitle>Protected Routes</CardTitle>
                <CardDescription>
                  SEO strategy for account pages, authentication flows, and sensitive content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/technical-seo/protected-routes">
                  <Button className="w-full">View Protected Routes</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200 flex flex-col justify-between">
              <CardHeader>
                <Globe className="h-8 w-8 mb-2 text-indigo-600" />
                <CardTitle>International SEO</CardTitle>
                <CardDescription>
                  URL strategies, hreflang implementation, and localization best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/technical-seo/international">
                  <Button className="w-full">View International SEO</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200 flex flex-col justify-between">
              <CardHeader>
                <Package className="h-8 w-8 mb-2 text-blue-600" />
                <CardTitle>Product URLs & DB</CardTitle>
                <CardDescription>
                  URL structure, product variants, lifecycle management, and database design
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/technical-seo/product-urls">
                  <Button className="w-full">View Product URLs</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section 4: Tools & Resources */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Tools & Resources</h2>
            <p className="text-slate-600">Interactive demos and reference materials</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-2 bg-gradient-to-br from-purple-50 to-white flex flex-col justify-between">
              <CardHeader>
                <FileText className="h-8 w-8 mb-2 text-purple-600" />
                <CardTitle>Pattern Gallery</CardTitle>
                <CardDescription>
                  17 production-ready SEO patterns with filtering and search
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/technical-seo/pattern-gallery">
                  <Button variant="outline" className="w-full">
                    Browse Patterns
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 bg-gradient-to-br from-indigo-50 to-white flex flex-col justify-between">
              <CardHeader>
                <Code2 className="h-8 w-8 mb-2 text-indigo-600" />
                <CardTitle>Structured Data</CardTitle>
                <CardDescription>
                  Schema.org basics for rich results (educational overview)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/technical-seo/structured-data">
                  <Button variant="outline" className="w-full">
                    Learn Schema
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 bg-gradient-to-br from-orange-50 to-white flex flex-col justify-between">
              <CardHeader>
                <Wrench className="h-8 w-8 mb-2 text-orange-600" />
                <CardTitle>SEO Dev Tools</CardTitle>
                <CardDescription>
                  Curated toolkit for technical SEO: crawlers, performance monitors, and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/technical-seo/seo-dev-tools">
                  <Button variant="outline" className="w-full">
                    Browse Tools
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

