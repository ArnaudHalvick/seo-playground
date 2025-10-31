import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, List, FileText, Map } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function BestPracticesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ label: 'Best Practices', href: '/best-practices' }]} />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">SEO Best Practices</h1>
          <p className="text-lg text-slate-600 mb-4">
            Production-ready strategies for crawling, indexation, and URL management
          </p>
          <div className="p-5 bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-slate-700 mb-3">
              These are battle-tested SEO strategies used in production environments. Each recommendation is based on industry best practices and balances crawl efficiency, indexation control, and user experience.
            </p>
            <p className="text-sm text-slate-600">
              Explore each section below to understand how to handle URL parameters, pagination, robots.txt rules, and sitemap generation for optimal search engine visibility.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <Settings className="h-8 w-8 mb-2 text-blue-600" />
              <CardTitle>Parameters</CardTitle>
              <CardDescription>
                Configure how URL parameters affect indexability, canonical URLs, and crawling behavior
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/best-practices/parameters">
                <Button className="w-full">View Parameters</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <List className="h-8 w-8 mb-2 text-green-600" />
              <CardTitle>Pagination</CardTitle>
              <CardDescription>
                Best practices for handling paginated content with proper canonicalization strategies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/best-practices/pagination">
                <Button className="w-full">View Pagination</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <FileText className="h-8 w-8 mb-2 text-amber-600" />
              <CardTitle>robots.txt</CardTitle>
              <CardDescription>
                Dynamic robots.txt generation with pattern-based rules for crawl control
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/best-practices/robots">
                <Button className="w-full">View Robots.txt</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-2">
            <CardHeader>
              <Map className="h-8 w-8 mb-2 text-purple-600" />
              <CardTitle>Sitemap</CardTitle>
              <CardDescription>
                Intelligent sitemap inclusion based on indexability rules and URL patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/best-practices/sitemap">
                <Button className="w-full">View Sitemap</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="p-5 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">See It In Action</h3>
          <p className="text-sm text-slate-700 mb-4">
            Visit these demo pages to see how these SEO best practices are implemented. The SEO Receipt shows real-time details about canonical URLs, meta robots, and more.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="/catalog/t-shirts?sort=price_desc">
              <Button variant="outline" size="sm">
                Catalog with Sort
              </Button>
            </Link>
            <Link href="/catalog/t-shirts?page=2">
              <Button variant="outline" size="sm">
                Page 2
              </Button>
            </Link>
            <Link href="/catalog/t-shirts?color=blue">
              <Button variant="outline" size="sm">
                Color Filter
              </Button>
            </Link>
            <Link href="/search?q=shoes">
              <Button variant="outline" size="sm">
                Search Page
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

