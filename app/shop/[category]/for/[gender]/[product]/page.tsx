import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { getProduct, getCategory, getProducts } from '@/lib/catalog/data';
import { ProductEducationCards } from '@/components/ProductEducationCards';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    category: string;
    gender: string;
    product: string;
  };
}

export async function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    category: product.category,
    gender: product.gender,
    product: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.product);
  const category = getCategory(resolvedParams.category);
  
  if (!product || !category) {
    return { title: 'Product Not Found' };
  }
  
  // Get actual host from headers
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const baseUrl = `${protocol}://${host}`;
  const canonical = `${baseUrl}/shop/${resolvedParams.category}/for/${resolvedParams.gender}/${resolvedParams.product}/`;
  
  return {
    title: `${product.title} - ${category.name} - SEO Workshop`,
    description: `${product.description} Demo product showing clean URLs, proper slugs, and Schema.org markup for e-commerce SEO best practices.`,
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.product);
  const category = getCategory(resolvedParams.category);

  if (!product || !category) {
    notFound();
  }

  // Validate that the gender in the URL matches the product's gender
  if (product.gender.toLowerCase() !== resolvedParams.gender.toLowerCase()) {
    notFound();
  }

  // Gender label for display
  const genderLabel = resolvedParams.gender.charAt(0).toUpperCase() + resolvedParams.gender.slice(1);

  return (
    <>
      <ProductEducationCards productSlug={product.slug} />

      <div className="bg-gradient-to-b from-blue-50 to-slate-50 min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center">
              <span className="text-9xl">{product.color === 'white' ? '⚪' : product.color === 'black' ? '⚫' : product.color === 'blue' ? '🔵' : product.color === 'red' ? '🔴' : product.color === 'green' ? '🟢' : product.color === 'gray' ? '⚪' : '🟤'}</span>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <Link href={`/shop/${resolvedParams.category}/for/${resolvedParams.gender}`}>
                <Badge variant="outline" className="mb-2">{genderLabel}'s {category.name}</Badge>
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
    </>
  );
}

