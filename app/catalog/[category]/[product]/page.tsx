import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { getProduct, getCategory, getProducts } from '@/lib/catalog/data';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    category: string;
    product: string;
  };
}

export function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    category: product.category,
    product: product.slug,
  }));
}

export default function ProductPage({ params }: PageProps) {
  const product = getProduct(params.product);
  const category = getCategory(params.category);

  if (!product || !category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <Link href={`/catalog/${params.category}`}>
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {category.name}
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center">
              <span className="text-9xl">{product.color === 'white' ? '⚪' : product.color === 'black' ? '⚫' : product.color === 'blue' ? '🔵' : product.color === 'red' ? '🔴' : product.color === 'green' ? '🟢' : product.color === 'gray' ? '⚪' : '🟤'}</span>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <Link href={`/catalog/${params.category}`}>
                <Badge variant="outline" className="mb-2">{category.name}</Badge>
              </Link>
            </div>

            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-lg text-slate-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold">${product.price}</span>
            </div>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Color:</span>
                    <Badge>{product.color}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Size:</span>
                    <Badge>{product.size}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Popularity:</span>
                    <span className="text-sm">{product.popularity}/100</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button size="lg" className="w-full mb-4">
              Add to Cart (Demo)
            </Button>

            <p className="text-xs text-slate-500 text-center">
              This is a demo product page for SEO testing purposes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
