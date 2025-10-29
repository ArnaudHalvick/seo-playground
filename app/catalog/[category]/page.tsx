export const dynamic = "force-dynamic";
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { getCategory, getProductsByCategory, getCategories, sortProducts, filterProducts, paginateProducts } from '@/lib/catalog/data';
import { Breadcrumbs } from'@/components/Breadcrumbs';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    category: string;
  };
  searchParams: {
    sort?: string;
    color?: string;
    size?: string;
    page?: string;
  };
}

export function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default function CategoryPage({ params, searchParams }: PageProps) {
  const category = getCategory(params.category);

  if (!category) {
    notFound();
  }

  let products = getProductsByCategory(params.category);

  products = filterProducts(products, {
    color: searchParams.color,
    size: searchParams.size,
  });

  products = sortProducts(products, searchParams.sort || 'popularity');

  const currentPage = parseInt(searchParams.page || '1');
  const { products: paginatedProducts, totalPages } = paginateProducts(products, currentPage);

  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ label: 'Catalog', href: '/catalog' }, { label: category.name, href: `/catalog/${params.category}` }]} />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">{category.name}</h1>
          <p className="text-lg text-slate-600">{category.description}</p>

          {(searchParams.sort || searchParams.color || searchParams.size) && (
            <div className="flex gap-2 mt-4">
              {searchParams.sort && (
                <Badge variant="secondary">Sort: {searchParams.sort}</Badge>
              )}
              {searchParams.color && (
                <Badge variant="secondary">Color: {searchParams.color}</Badge>
              )}
              {searchParams.size && (
                <Badge variant="secondary">Size: {searchParams.size}</Badge>
              )}
            </div>
          )}
        </div>
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold mb-3 text-sm">Try Parameter Combinations:</h3>
          <div className="flex flex-wrap gap-2">
            <Link href={`/catalog/${params.category}?sort=price_asc`}>
              <Button variant="outline" size="sm">Sort Only</Button>
            </Link>
            <Link href={`/catalog/${params.category}?color=black`}>
              <Button variant="outline" size="sm">Color Only</Button>
            </Link>
            <Link href={`/catalog/${params.category}?sort=price_desc&color=black`}>
              <Button variant="destructive" size="sm">Sort + Color (Blocked!)</Button>
            </Link>
            <Link href={`/catalog/${params.category}?page=2`}>
              <Button variant="outline" size="sm">Page 2</Button>
            </Link>
          </div>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="aspect-square bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">{product.color === 'white' ? '⚪' : product.color === 'black' ? '⚫' : product.color === 'blue' ? '🔵' : product.color === 'red' ? '🔴' : product.color === 'green' ? '🟢' : product.color === 'gray' ? '⚪' : '🟤'}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">${product.price}</span>
                  <div className="flex gap-1">
                    <Badge variant="outline" className="text-xs">{product.color}</Badge>
                    <Badge variant="outline" className="text-xs">{product.size}</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/catalog/${params.category}/${product.slug}`} className="w-full">
                  <Button variant="outline" className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Link
                key={page}
                href={`/catalog/${params.category}?${new URLSearchParams({ ...searchParams, page: page.toString() }).toString()}`}
              >
                <Button variant={page === currentPage ? 'default' : 'outline'} size="sm">
                  {page}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
