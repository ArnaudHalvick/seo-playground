export const dynamic = "force-dynamic";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { getProducts } from '@/lib/catalog/data';

interface PageProps {
  searchParams: {
    q?: string;
  };
}

export default function SearchPage({ searchParams }: PageProps) {
  const query = searchParams.q || '';
  const allProducts = getProducts();

  const results = query
    ? allProducts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.color.toLowerCase().includes(query.toLowerCase())
      )
    : [];

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
        <Alert className="mb-6 border-amber-300 bg-amber-50">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            This search page is <strong>noindex,follow</strong> by default. Search results create duplicate content and unstable URLs, so they shouldn't be indexed. Check the SEO Receipt to see the policy in action.
          </AlertDescription>
        </Alert>

        <h1 className="text-4xl font-bold mb-6">Search Results</h1>

        {query ? (
          <>
            <div className="mb-6">
              <span className="text-lg text-slate-600">
                Found {results.length} results for{' '}
                <Badge variant="secondary" className="text-base">
                  {query}
                </Badge>
              </span>
            </div>

            {results.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="aspect-square bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-4xl">
                          {product.color === 'white'
                            ? '⚪'
                            : product.color === 'black'
                            ? '⚫'
                            : product.color === 'blue'
                            ? '🔵'
                            : product.color === 'red'
                            ? '🔴'
                            : product.color === 'green'
                            ? '🟢'
                            : product.color === 'gray'
                            ? '⚪'
                            : '🟤'}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                      <p className="text-sm text-slate-600 mb-3">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">${product.price}</span>
                        <Badge variant="outline">{product.category}</Badge>
                      </div>
                      <Link href={`/catalog/${product.category}/${product.slug}`} className="mt-4 block">
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-slate-600">No products found matching your search.</p>
                </CardContent>
              </Card>
            )}
          </>
        ) : (
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-slate-600 mb-4">Enter a search query to see results.</p>
              <div className="flex gap-2 justify-center flex-wrap mb-6">
                <Link href="/search?q=shoes">
                  <Button variant="outline">Search: shoes</Button>
                </Link>
                <Link href="/search?q=blue">
                  <Button variant="outline">Search: blue</Button>
                </Link>
                <Link href="/search?q=shirt">
                  <Button variant="outline">Search: shirt</Button>
                </Link>
              </div>
              <div className="text-sm text-slate-600 space-y-2">
                <p className="font-semibold">Try search with parameters:</p>
                <div className="flex gap-2 flex-wrap justify-center">
                  <Link href="/search?q=black+t-shirt&sort=price_desc">
                    <Button variant="outline" size="sm" className="text-xs">+ Search + Sort (noindex)</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
