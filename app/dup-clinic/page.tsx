import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, Copy, AlertTriangle } from 'lucide-react';

export default function DupClinicPage() {
  const duplicateClusters = [
    {
      name: 'T-Shirts Sorting Variants',
      canonical: '/catalog/t-shirts/',
      duplicates: [
        { url: '/catalog/t-shirts/?sort=price_asc', issue: 'Unstable sort parameter', policy: 'noindex,follow' },
        { url: '/catalog/t-shirts/?sort=price_desc', issue: 'Unstable sort parameter', policy: 'noindex,follow' },
        { url: '/catalog/t-shirts/?sort=name_asc', issue: 'Unstable sort parameter', policy: 'noindex,follow' },
      ],
    },
    {
      name: 'Pagination Pages',
      canonical: '/catalog/shoes/',
      duplicates: [
        { url: '/catalog/shoes/?page=2', issue: 'Paginated content', policy: 'noindex,follow (self-canonical)' },
        { url: '/catalog/shoes/?page=3', issue: 'Paginated content', policy: 'noindex,follow (self-canonical)' },
      ],
    },
    {
      name: 'Search vs Category Overlap',
      canonical: '/catalog/shoes/',
      duplicates: [
        { url: '/search?q=shoes', issue: 'High overlap with category', policy: 'noindex,follow + canonical to category' },
      ],
    },
    {
      name: 'Tracking Parameter Variations',
      canonical: '/catalog/t-shirts/',
      duplicates: [
        { url: '/catalog/t-shirts/?utm_source=email', issue: 'Tracking parameter', policy: 'canonical strips param + robots block' },
        { url: '/catalog/t-shirts/?gclid=abc123', issue: 'Tracking parameter', policy: 'canonical strips param + robots block' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="flex items-center gap-3 mb-6">
          <Copy className="h-8 w-8 text-purple-600" />
          <h1 className="text-4xl font-bold">Duplication Clinic</h1>
        </div>

        <Alert className="mb-6 border-purple-300 bg-purple-50">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            This page identifies clusters of near-duplicate URLs and shows how parameter policies resolve them. Each cluster has a canonical URL and one or more variants that could create duplicate content issues.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          {duplicateClusters.map((cluster, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{cluster.name}</span>
                  <Badge variant="outline">
                    {cluster.duplicates.length + 1} URLs
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-green-800">Canonical URL</span>
                    <Badge className="bg-green-600">index,follow</Badge>
                  </div>
                  <code className="text-sm font-mono break-all">{cluster.canonical}</code>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-semibold text-slate-700">Duplicate Variants:</div>
                  {cluster.duplicates.map((dup, dupIdx) => (
                    <div key={dupIdx} className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-amber-800">{dup.issue}</span>
                        <Badge variant="secondary" className="text-xs">
                          {dup.policy}
                        </Badge>
                      </div>
                      <code className="text-sm font-mono break-all block mb-2">{dup.url}</code>
                      <Link href={dup.url}>
                        <Button variant="outline" size="sm">
                          Visit & Check Receipt
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-3">How Duplicates Are Resolved</h3>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>
                <strong>Sorting variants:</strong> Marked as noindex,follow with self-canonical. Crawlers can discover links but won't index duplicate listings.
              </li>
              <li>
                <strong>Pagination:</strong> Page 2+ is noindex,follow. Strategy is configurable: self-canonical or canonical to base.
              </li>
              <li>
                <strong>Search overlap:</strong> When search results closely match a category, canonicalize to the category page.
              </li>
              <li>
                <strong>Tracking params:</strong> Strip from canonical URLs and optionally block in robots.txt.
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Link href="/playground">
            <Button size="lg">Configure Duplicate Handling</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
