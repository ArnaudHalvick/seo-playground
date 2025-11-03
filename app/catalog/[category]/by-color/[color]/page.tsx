export const dynamic = "force-dynamic";
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  getCategory, 
  getProductsByCategory, 
  getCategories, 
  sortProducts, 
  filterProducts, 
  paginateProducts,
  getFilterCounts,
  getAvailableColors,
  getAvailableSizes,
  type FilterOptions
} from '@/lib/catalog/data';
import { Breadcrumbs } from'@/components/Breadcrumbs';
import { FilterSidebar } from '@/components/catalog/FilterSidebar';
import { ActiveFilters } from '@/components/catalog/ActiveFilters';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    category: string;
    color: string;
  };
  searchParams: {
    sort?: string;
    size?: string;
    price_min?: string;
    price_max?: string;
    page?: string;
  };
}

export function generateStaticParams() {
  const categories = getCategories();
  const colors = ['black', 'blue', 'white', 'red', 'green', 'gray', 'brown', 'tan'];
  
  return categories.flatMap(cat => 
    colors.map(color => ({
      category: cat.slug,
      color: color
    }))
  );
}

export default function ColorFilterPage({ params, searchParams }: PageProps) {
  const category = getCategory(params.category);

  if (!category) {
    notFound();
  }

  // Parse filters from search params + path params
  const filters: FilterOptions = {
    colors: [params.color], // Color comes from URL path
    size: searchParams.size,
    priceMin: searchParams.price_min ? parseFloat(searchParams.price_min) : undefined,
    priceMax: searchParams.price_max ? parseFloat(searchParams.price_max) : undefined,
  };

  // Get available options and counts
  const availableColors = getAvailableColors(params.category);
  const availableSizes = getAvailableSizes(params.category);
  const filterCounts = getFilterCounts(params.category, filters);

  // Validate that the color exists in this category
  if (!availableColors.includes(params.color.toLowerCase())) {
    notFound();
  }

  // Filter and sort products
  let products = getProductsByCategory(params.category);
  products = filterProducts(products, filters);
  products = sortProducts(products, searchParams.sort || 'popularity');

  const currentPage = parseInt(searchParams.page || '1');
  const { products: paginatedProducts, totalPages } = paginateProducts(products, currentPage);

  // Query param equivalent URL for comparison
  const queryParamUrl = `/catalog/${params.category}?color=${params.color}`;

  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs 
        items={[
          { label: 'Catalog', href: '/catalog' }, 
          { label: category.name, href: `/catalog/${params.category}` },
          { label: `${params.color} ${category.name}`, href: `/catalog/${params.category}/by-color/${params.color}` }
        ]} 
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Clean Path Info Banner */}
        <Alert className="mb-6 border-green-200 bg-green-50">
          <Info className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            <div className="space-y-2">
              <div>
                <strong>✓ Clean Path URL Strategy:</strong> This page uses a semantic, SEO-friendly URL structure 
                (<code className="bg-green-100 px-1 py-0.5 rounded">/catalog/t-shirts/by-color/black/</code>) 
                instead of query parameters (<code className="bg-green-100 px-1 py-0.5 rounded">?color=black</code>).
              </div>
              <div className="text-sm">
                <strong>SEO Benefits:</strong> Clean paths are <strong>index,follow</strong>, included in sitemap, 
                and provide clear keyword signals. Single stable filters like color are ideal for this approach.
              </div>
              <Link href={queryParamUrl}>
                <Button variant="outline" size="sm" className="mt-2 text-green-800 border-green-300 hover:bg-green-100">
                  Compare with Query Param Version <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </Link>
            </div>
          </AlertDescription>
        </Alert>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 capitalize">
            {params.color} {category.name}
          </h1>
          <p className="text-lg text-slate-600">
            {category.description} - Filtered by {params.color}
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Showing {paginatedProducts.length} of {products.length} products
          </p>
        </div>

        {/* Two-column layout: Sidebar + Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar
              category={params.category}
              filterCounts={filterCounts}
              currentFilters={filters}
              availableColors={availableColors}
              availableSizes={availableSizes}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Active Filters */}
            <ActiveFilters filters={filters} priceRange={filterCounts.priceRange} />

            {/* Product Grid */}
            {paginatedProducts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {paginatedProducts.map((product) => (
                    <Card key={product.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="aspect-square bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-4xl">
                            {product.color === 'white' ? '⚪' : 
                             product.color === 'black' ? '⚫' : 
                             product.color === 'blue' ? '🔵' : 
                             product.color === 'red' ? '🔴' : 
                             product.color === 'green' ? '🟢' : 
                             product.color === 'gray' ? '⚪' : 
                             product.color === 'tan' ? '🟤' :
                             product.color === 'brown' ? '🟤' : '⚫'}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                        <p className="text-sm text-slate-600 mb-3">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold">${product.price}</span>
                          <div className="flex gap-1">
                            <Badge variant="outline" className="text-xs capitalize">{product.color}</Badge>
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

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-2 flex-wrap">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Link
                        key={page}
                        href={`/catalog/${params.category}/by-color/${params.color}?${new URLSearchParams({ ...searchParams, page: page.toString() }).toString()}`}
                      >
                        <Button variant={page === currentPage ? 'default' : 'outline'} size="sm">
                          {page}
                        </Button>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              // Empty State
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📦</div>
                <h3 className="text-2xl font-bold mb-2">No products found</h3>
                <p className="text-slate-600 mb-6">
                  Try adjusting your filters to see more results
                </p>
                <Link href={`/catalog/${params.category}`}>
                  <Button variant="outline">View All {category.name}</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

