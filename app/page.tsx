import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, Search, Lock, Globe, Copy, FileText, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Technical SEO Best Practices Demo
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A demonstration of production-ready technical SEO implementation. Explore real-world examples with detailed explanations of every decision through the SEO Receipt panel.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-bold text-lg mb-2 text-blue-900">Best Practices Implemented</h2>
              <p className="text-blue-800">
                All SEO rules in this demo represent industry best practices based on years of experience.
                Use the <strong>SEO Receipt panel</strong> (right side or bottom on mobile) to see exactly WHY each decision was made.
                No configuration needed - everything is optimized for production use.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <ShoppingBag className="h-8 w-8 mb-2 text-green-600" />
              <CardTitle>Product Catalog</CardTitle>
              <CardDescription>
                Demo e-commerce pages with facets, pagination, and sorting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/catalog">
                <Button variant="outline" className="w-full">Browse Catalog</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <Search className="h-8 w-8 mb-2 text-amber-600" />
              <CardTitle>Search Demo</CardTitle>
              <CardDescription>
                See how search pages are handled with noindex,follow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/search">
                <Button variant="outline" className="w-full">View Search</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <Lock className="h-8 w-8 mb-2 text-red-600" />
              <CardTitle>Protected Routes</CardTitle>
              <CardDescription>
                Account pages with noindex + robots.txt disallow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/account/orders">
                <Button variant="outline" className="w-full">View Account</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <Globe className="h-8 w-8 mb-2 text-indigo-600" />
              <CardTitle>International Lab</CardTitle>
              <CardDescription>
                Hreflang implementation with language alternates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/intl-lab/en/catalog/t-shirts">
                <Button variant="outline" className="w-full">View i18n</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <Copy className="h-8 w-8 mb-2 text-purple-600" />
              <CardTitle>Duplication Clinic</CardTitle>
              <CardDescription>
                Identify and resolve duplicate content issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dup-clinic">
                <Button variant="outline" className="w-full">Analyze</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12 border">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Best Practices Demonstrated
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Crawl Control</h3>
              <ul className="space-y-1 text-slate-700">
                <li>✓ Strategic robots.txt rules that prevent crawl waste</li>
                <li>✓ Meta robots for content-specific directives</li>
                <li>✓ Defense-in-depth for protected content (robots.txt + meta robots)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">URL Management</h3>
              <ul className="space-y-1 text-slate-700">
                <li>✓ Self-canonical pagination for large catalogs</li>
                <li>✓ Stable vs unstable vs blocked parameter strategy</li>
                <li>✓ Automatic UTM stripping to prevent duplicate content</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Duplicate Content Prevention</h3>
              <ul className="space-y-1 text-slate-700">
                <li>✓ Page 2+ handled with noindex,follow</li>
                <li>✓ Search results excluded from index</li>
                <li>✓ Faceted navigation with canonical consolidation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">International SEO</h3>
              <ul className="space-y-1 text-slate-700">
                <li>✓ Hreflang implementation with x-default</li>
                <li>✓ Proper language alternate markup</li>
                <li>✓ Reciprocal hreflang validation</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
