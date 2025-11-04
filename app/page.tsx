import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, ShoppingBag, Search, Lock, Globe, Copy } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            SEO Best Practices Showcase
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A demonstration of production-ready SEO implementations. Explore parameter handling, canonical strategies, robots.txt patterns, and more with real working examples.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <Settings className="h-8 w-8 mb-2 text-blue-600" />
              <CardTitle>SEO Best Practices</CardTitle>
              <CardDescription>
                Explore production-ready parameter policies, robots.txt patterns, and canonical URL strategies with detailed explanations and live examples
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/best-practices">
                <Button className="w-full">View Best Practices</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <ShoppingBag className="h-8 w-8 mb-2 text-green-600" />
              <CardTitle>Product Catalog</CardTitle>
              <CardDescription>
                Live demo shop where you can browse products and see real-time SEO analysis for different URL patterns and filters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/shop">
                <Button variant="outline" className="w-full">Shop Now</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <Search className="h-8 w-8 mb-2 text-amber-600" />
              <CardTitle>Site Search SEO</CardTitle>
              <CardDescription>
                How search pages prevent crawl traps with noindex,follow strategy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/best-practices/site-search">
                <Button variant="outline" className="w-full">Learn Site Search SEO</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <Copy className="h-8 w-8 mb-2 text-purple-600" />
              <CardTitle>Pattern Gallery</CardTitle>
              <CardDescription>
                17 production-ready SEO patterns with live examples and filtering
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/pattern-gallery">
                <Button variant="outline" className="w-full">Browse Patterns</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <Lock className="h-8 w-8 mb-2 text-red-600" />
              <CardTitle>Protected Routes</CardTitle>
              <CardDescription>
                SEO strategy for account pages, authentication flows, and sensitive content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/best-practices/protected-routes">
                <Button variant="outline" className="w-full">Learn About Protected Routes</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <Globe className="h-8 w-8 mb-2 text-indigo-600" />
              <CardTitle>International SEO</CardTitle>
              <CardDescription>
                URL strategies, hreflang implementation, and localization best practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/best-practices/international">
                <Button variant="outline" className="w-full">Learn International SEO</Button>
              </Link>
            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  );
}
