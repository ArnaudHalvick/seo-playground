export const dynamic = "force-dynamic";
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { headers } from 'next/headers';
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
  getSizeGroupsForGender,
  getAvailableGenders,
  getGenderCounts,
  type FilterOptions
} from '@/lib/catalog/data';
import { FilterSidebar } from '@/components/catalog/FilterSidebar';
import { FilterSummaryBar } from '@/components/catalog/FilterSummaryBar';
import { GenderFilter } from '@/components/catalog/GenderFilter';
import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/meta/metadata';
import { DEFAULT_PARAM_CONFIG } from '@/lib/rules/params';

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

export async function generateStaticParams() {
  const categories = getCategories();
  const genders = ['women', 'men', 'girls', 'boys'];
  
  return categories.flatMap(cat => 
    genders.map(gender => ({
      category: cat.slug,
      gender: gender
    }))
  );
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const category = getCategory(resolvedParams.category);
  const genderLabel = resolvedParams.gender.charAt(0).toUpperCase() + resolvedParams.gender.slice(1);
  
  if (!category) {
    return { title: 'Category Not Found' };
  }
  
  // Get actual host from headers
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const baseUrl = `${protocol}://${host}`;
  
  // Build URLSearchParams for canonical computation
  const urlSearchParams = new URLSearchParams();
  if (resolvedSearchParams.color) urlSearchParams.set('color', resolvedSearchParams.color);
  if (resolvedSearchParams.size) urlSearchParams.set('size', resolvedSearchParams.size);
  if (resolvedSearchParams.sort) urlSearchParams.set('sort', resolvedSearchParams.sort);
  if (resolvedSearchParams.page) urlSearchParams.set('page', resolvedSearchParams.page);
  if (resolvedSearchParams.price_min) urlSearchParams.set('price_min', resolvedSearchParams.price_min);
  if (resolvedSearchParams.price_max) urlSearchParams.set('price_max', resolvedSearchParams.price_max);
  
  const baseMetadata = generatePageMetadata({
    pathname: `/shop/${resolvedParams.category}/for/${resolvedParams.gender}/`,
    searchParams: urlSearchParams,
    config: DEFAULT_PARAM_CONFIG,
    baseUrl,
  });
  
  return {
    ...baseMetadata,
    title: `${genderLabel}'s ${category.name} - Shop - SEO Workshop`,
    description: `${genderLabel.toLowerCase()}'s ${category.name.toLowerCase()} demo catalog with real-time SEO analysis and clean URL structure demonstration.`,
  };
}

export default async function GenderFilterPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const category = getCategory(resolvedParams.category);

  if (!category) {
    notFound();
  }

  // Validate that the gender exists in this category
  const availableGenders = getAvailableGenders(resolvedParams.category);
  if (!availableGenders.includes(resolvedParams.gender.toLowerCase())) {
    notFound();
  }

  // Parse filters from search params + path params
  const filters: FilterOptions = {
    gender: resolvedParams.gender, // Gender comes from URL path
    colors: resolvedSearchParams.color ? resolvedSearchParams.color.split(',') : undefined,
    size: resolvedSearchParams.size,
    priceMin: resolvedSearchParams.price_min ? parseFloat(resolvedSearchParams.price_min) : undefined,
    priceMax: resolvedSearchParams.price_max ? parseFloat(resolvedSearchParams.price_max) : undefined,
  };

  // Get available options and counts
  const availableColors = getAvailableColors(resolvedParams.category);
  const availableSizes = getAvailableSizes(resolvedParams.category);
  const sizeGroups = getSizeGroupsForGender(resolvedParams.category, resolvedParams.gender);
  const filterCounts = getFilterCounts(resolvedParams.category, filters);

  // Filter and sort products
  let products = getProductsByCategory(resolvedParams.category);
  products = filterProducts(products, filters);
  products = sortProducts(products, resolvedSearchParams.sort || 'popularity');

  const currentPage = parseInt(resolvedSearchParams.page || '1');
  const { products: paginatedProducts, totalPages } = paginateProducts(products, currentPage);

  // Get gender counts for filter buttons
  const genderCounts = getGenderCounts(resolvedParams.category);
  const totalProducts = getProductsByCategory(resolvedParams.category).length;

  // Gender label for display
  const genderLabel = resolvedParams.gender.charAt(0).toUpperCase() + resolvedParams.gender.slice(1);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Gender Filter with SEO Banner */}
        <GenderFilter 
          category={resolvedParams.category}
          currentGender={resolvedParams.gender}
          genderCounts={genderCounts}
          totalCount={totalProducts}
        />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 capitalize">
            {genderLabel}'s {category.name}
          </h1>
          <p className="text-lg text-slate-600">
            {category.description} for {resolvedParams.gender}
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Showing {paginatedProducts.length} of {products.length} products
          </p>
        </div>

        {/* Sticky Filter Summary Bar */}
        <FilterSummaryBar
          category={resolvedParams.category}
          filters={filters}
          sort={resolvedSearchParams.sort}
          page={currentPage}
          priceRange={filterCounts.priceRange}
        />

        {/* Two-column layout: Sidebar + Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar
              category={resolvedParams.category}
              filterCounts={filterCounts}
              currentFilters={filters}
              availableColors={availableColors}
              availableSizes={availableSizes}
              sizeGroups={sizeGroups}
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
                        <Link href={`/shop/${resolvedParams.category}/for/${resolvedParams.gender}/${product.slug}`} className="w-full">
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
                        href={`/shop/${resolvedParams.category}/for/${resolvedParams.gender}?${new URLSearchParams({ ...resolvedSearchParams, page: page.toString() }).toString()}`}
                        scroll={false}
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
                <Link href={`/shop/${resolvedParams.category}/for/${resolvedParams.gender}`} scroll={false}>
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

