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
  getAvailableGenders,
  getGenderCounts,
  type FilterOptions
} from '@/lib/catalog/data';
import { Breadcrumbs } from'@/components/Breadcrumbs';
import { FilterSidebar } from '@/components/catalog/FilterSidebar';
import { FilterSummaryBar } from '@/components/catalog/FilterSummaryBar';
import { GenderFilter } from '@/components/catalog/GenderFilter';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    category: string;
    gender: string;
  };
  searchParams: {
    sort?: string;
    color?: string;
    size?: string;
    price_min?: string;
    price_max?: string;
    page?: string;
  };
}

export function generateStaticParams() {
  const categories = getCategories();
  const genders = ['women', 'men', 'girls', 'boys'];
  
  return categories.flatMap(cat => 
    genders.map(gender => ({
      category: cat.slug,
      gender: gender
    }))
  );
}

export default function GenderFilterPage({ params, searchParams }: PageProps) {
  const category = getCategory(params.category);

  if (!category) {
    notFound();
  }

  // Validate that the gender exists in this category
  const availableGenders = getAvailableGenders(params.category);
  if (!availableGenders.includes(params.gender.toLowerCase())) {
    notFound();
  }

  // Parse filters from search params + path params
  const filters: FilterOptions = {
    gender: params.gender, // Gender comes from URL path
    colors: searchParams.color ? searchParams.color.split(',') : undefined,
    size: searchParams.size,
    priceMin: searchParams.price_min ? parseFloat(searchParams.price_min) : undefined,
    priceMax: searchParams.price_max ? parseFloat(searchParams.price_max) : undefined,
  };

  // Get available options and counts
  const availableColors = getAvailableColors(params.category);
  const availableSizes = getAvailableSizes(params.category);
  const filterCounts = getFilterCounts(params.category, filters);

  // Filter and sort products
  let products = getProductsByCategory(params.category);
  products = filterProducts(products, filters);
  products = sortProducts(products, searchParams.sort || 'popularity');

  const currentPage = parseInt(searchParams.page || '1');
  const { products: paginatedProducts, totalPages } = paginateProducts(products, currentPage);

  // Get gender counts for filter buttons
  const genderCounts = getGenderCounts(params.category);
  const totalProducts = getProductsByCategory(params.category).length;

  // Gender label for display
  const genderLabel = params.gender.charAt(0).toUpperCase() + params.gender.slice(1);

  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs 
        items={[
          { label: 'Shop', href: '/shop' }, 
          { label: category.name, href: `/shop/${params.category}` },
          { label: `${genderLabel}'s ${category.name}`, href: `/shop/${params.category}/for/${params.gender}` }
        ]} 
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Gender Filter with SEO Banner */}
        <GenderFilter 
          category={params.category}
          currentGender={params.gender}
          genderCounts={genderCounts}
          totalCount={totalProducts}
        />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 capitalize">
            {genderLabel}'s {category.name}
          </h1>
          <p className="text-lg text-slate-600">
            {category.description} for {params.gender}
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Showing {paginatedProducts.length} of {products.length} products
          </p>
        </div>

        {/* Sticky Filter Summary Bar */}
        <FilterSummaryBar
          category={params.category}
          filters={filters}
          sort={searchParams.sort}
          page={currentPage}
          priceRange={filterCounts.priceRange}
        />

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
                        <Link href={`/shop/${params.category}/${product.slug}`} className="w-full">
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
                        href={`/shop/${params.category}/for/${params.gender}?${new URLSearchParams({ ...searchParams, page: page.toString() }).toString()}`}
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
                <Link href={`/shop/${params.category}/for/${params.gender}`}>
                  <Button variant="outline">Clear All Filters</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

