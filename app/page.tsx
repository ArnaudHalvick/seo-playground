import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, ShoppingBag, Search, Lock, Globe, Copy, FileText } from 'lucide-react';

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
                Learn production-ready parameter policies, robots.txt rules, and canonical strategies
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
                Demo e-commerce pages with facets, pagination, and sorting
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
            What This Teaches
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Crawl Control</h3>
              <ul className="space-y-1 text-slate-700">
                <li>• robots.txt patterns and policies</li>
                <li>• Meta robots vs X-Robots-Tag</li>
                <li>• Defense-in-depth for protected content</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">URL Management</h3>
              <ul className="space-y-1 text-slate-700">
                <li>• Canonical URL strategies</li>
                <li>• Parameter handling (stable/unstable/blocked)</li>
                <li>• UTM stripping and tracking params</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Duplicate Content</h3>
              <ul className="space-y-1 text-slate-700">
                <li>• Pagination best practices</li>
                <li>• Search vs category overlap</li>
                <li>• Faceted navigation canonicalization</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">International SEO</h3>
              <ul className="space-y-1 text-slate-700">
                <li>• Hreflang link generation</li>
                <li>• x-default implementation</li>
                <li>• Reciprocity validation</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
