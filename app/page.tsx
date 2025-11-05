import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            SEO Workshop
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A demonstration of production-ready SEO implementations. Explore parameter handling,
            canonical strategies, robots.txt patterns, and more with real working examples.
          </p>
        </div>

        {/* Purpose Statement */}
        <div className="mb-12">
          <Alert className="max-w-4xl mx-auto border-2 border-blue-300 bg-gradient-to-r from-blue-50 to-slate-50">
            <Info className="h-5 w-5" />
            <AlertDescription className="text-base">
              <p className="mb-3">
                <strong>About This Project:</strong> This is an educational playground and portfolio
                demonstration, not a real e-commerce store. It focuses exclusively on the{" "}
                <strong>programming and technical implementation side of SEO</strong>.
              </p>
              <p className="text-sm text-slate-700 mb-3">
                You won't find lessons on keyword research, content strategy, or basic meta tags
                here.
              </p>{" "}
              <p className="text-sm text-slate-700 mb-3">
                Instead, every page demonstrates{" "}
                <strong>production-ready solutions to complex technical SEO challenges</strong>:
                preventing crawl budget waste, detecting 2^N parameter explosions, implementing
                intelligent canonicalization, and making transparent SEO decisions you can trace
                step-by-step.
              </p>
              <p className="text-sm text-slate-700">
                Built to master advanced SEO implementation and showcase what's possible with proper
                technical architecture.
              </p>
            </AlertDescription>
          </Alert>
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
                <Link href="/robots">
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
                <Link href="/sitemap">
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
                <Link href="/parameters">
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
                <Link href="/duplicate-content">
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
            <Card className="hover:shadow-lg transition-shadow border-2 border-amber-200 flex flex-col justify-between">
              <CardHeader>
                <List className="h-8 w-8 mb-2 text-amber-600" />
                <CardTitle>Pagination</CardTitle>
                <CardDescription>
                  Best practices for multi-page content with proper canonicalization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/pagination">
                  <Button className="w-full">View Pagination</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-amber-200 flex flex-col justify-between">
              <CardHeader>
                <Search className="h-8 w-8 mb-2 text-amber-600" />
                <CardTitle>Site Search</CardTitle>
                <CardDescription>
                  Prevent crawl traps with noindex,follow strategy for search results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/site-search">
                  <Button className="w-full">View Site Search</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-amber-200 flex flex-col justify-between">
              <CardHeader>
                <Layers className="h-8 w-8 mb-2 text-blue-600" />
                <CardTitle>Site Architecture</CardTitle>
                <CardDescription>
                  URL structure, hierarchy, and internal linking strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/site-architecture">
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
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-2 border-red-200 flex flex-col justify-between">
              <CardHeader>
                <Lock className="h-8 w-8 mb-2 text-red-600" />
                <CardTitle>Protected Routes</CardTitle>
                <CardDescription>
                  SEO strategy for account pages, authentication flows, and sensitive content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/protected-routes">
                  <Button className="w-full">View Protected Routes</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-indigo-200 flex flex-col justify-between">
              <CardHeader>
                <Globe className="h-8 w-8 mb-2 text-indigo-600" />
                <CardTitle>International SEO</CardTitle>
                <CardDescription>
                  URL strategies, hreflang implementation, and localization best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/international">
                  <Button className="w-full">View International SEO</Button>
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
            <Card className="hover:shadow-lg transition-shadow border-2 bg-gradient-to-br from-green-50 to-white flex flex-col justify-between">
              <CardHeader>
                <ShoppingBag className="h-8 w-8 mb-2 text-green-600" />
                <CardTitle>Product Catalog</CardTitle>
                <CardDescription>
                  Live demo shop with filters to see real-time SEO analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/shop">
                  <Button variant="outline" className="w-full">
                    Shop Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 bg-gradient-to-br from-purple-50 to-white flex flex-col justify-between">
              <CardHeader>
                <FileText className="h-8 w-8 mb-2 text-purple-600" />
                <CardTitle>Pattern Gallery</CardTitle>
                <CardDescription>
                  17 production-ready SEO patterns with filtering and search
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/pattern-gallery">
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
                <Link href="/structured-data">
                  <Button variant="outline" className="w-full">
                    Learn Schema
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
