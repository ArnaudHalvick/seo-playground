import catalogData from '@/data/catalog.json';

export interface Product {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  price: number;
  color: string;
  size: string;
  gender: string;
  popularity: number;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
}

export function getCategories(): Category[] {
  return catalogData.categories;
}

export function getCategory(slug: string): Category | undefined {
  return catalogData.categories.find((c) => c.slug === slug);
}

export function getProducts(): Product[] {
  return catalogData.products as Product[];
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return (catalogData.products as Product[]).filter((p) => p.category === categorySlug);
}

export function getProduct(slug: string): Product | undefined {
  return (catalogData.products as Product[]).find((p) => p.slug === slug);
}

export function sortProducts(products: Product[], sortBy: string): Product[] {
  const sorted = [...products];

  switch (sortBy) {
    case 'price_asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price_desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'name_asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'name_desc':
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case 'popularity':
      return sorted.sort((a, b) => b.popularity - a.popularity);
    default:
      return sorted.sort((a, b) => b.popularity - a.popularity);
  }
}

export interface FilterOptions {
  colors?: string[];
  size?: string;
  gender?: string;
  priceMin?: number;
  priceMax?: number;
  // Legacy support for single color
  color?: string;
}

export function filterProducts(products: Product[], filters: FilterOptions): Product[] {
  let filtered = [...products];

  // Multi-select color filtering
  if (filters.colors && filters.colors.length > 0) {
    const lowerColors = filters.colors.map(c => c.toLowerCase());
    filtered = filtered.filter((p) => lowerColors.includes(p.color.toLowerCase()));
  } else if (filters.color) {
    // Legacy single-color support
    filtered = filtered.filter((p) => p.color.toLowerCase() === filters.color!.toLowerCase());
  }

  if (filters.size) {
    filtered = filtered.filter((p) => p.size === filters.size);
  }

  if (filters.gender) {
    filtered = filtered.filter((p) => p.gender.toLowerCase() === filters.gender!.toLowerCase());
  }

  if (filters.priceMin !== undefined) {
    filtered = filtered.filter((p) => p.price >= filters.priceMin!);
  }

  if (filters.priceMax !== undefined) {
    filtered = filtered.filter((p) => p.price <= filters.priceMax!);
  }

  return filtered;
}

export function paginateProducts(products: Product[], page: number, pageSize: number = 6): { products: Product[]; totalPages: number } {
  const totalPages = Math.ceil(products.length / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    products: products.slice(start, end),
    totalPages,
  };
}

export interface FilterCounts {
  colors: Record<string, number>;
  sizes: Record<string, number>;
  priceRange: { min: number; max: number };
  total: number;
}

/**
 * Calculate available filter options and their product counts
 * Takes into account currently applied filters
 */
export function getFilterCounts(
  categorySlug: string,
  currentFilters: FilterOptions = {}
): FilterCounts {
  const allProducts = getProductsByCategory(categorySlug);
  
  // Count colors (ignoring current color filter to show all options)
  const colorCounts: Record<string, number> = {};
  const filtersWithoutColors = { ...currentFilters, colors: undefined, color: undefined };
  const productsForColorCount = filterProducts(allProducts, filtersWithoutColors);
  
  productsForColorCount.forEach(product => {
    const color = product.color.toLowerCase();
    colorCounts[color] = (colorCounts[color] || 0) + 1;
  });
  
  // Count sizes (ignoring current size filter)
  const sizeCounts: Record<string, number> = {};
  const filtersWithoutSize = { ...currentFilters, size: undefined };
  const productsForSizeCount = filterProducts(allProducts, filtersWithoutSize);
  
  productsForSizeCount.forEach(product => {
    sizeCounts[product.size] = (sizeCounts[product.size] || 0) + 1;
  });
  
  // Calculate price range
  let minPrice = Infinity;
  let maxPrice = -Infinity;
  
  allProducts.forEach(product => {
    if (product.price < minPrice) minPrice = product.price;
    if (product.price > maxPrice) maxPrice = product.price;
  });
  
  // Get total count with all filters applied
  const filteredProducts = filterProducts(allProducts, currentFilters);
  
  return {
    colors: colorCounts,
    sizes: sizeCounts,
    priceRange: { min: minPrice, max: maxPrice },
    total: filteredProducts.length,
  };
}

/**
 * Get all unique colors available in a category
 */
export function getAvailableColors(categorySlug: string): string[] {
  const products = getProductsByCategory(categorySlug);
  const colors = new Set(products.map(p => p.color.toLowerCase()));
  return Array.from(colors).sort();
}

/**
 * Get all unique sizes available in a category
 */
export function getAvailableSizes(categorySlug: string): string[] {
  const products = getProductsByCategory(categorySlug);
  const sizes = new Set(products.map(p => p.size));
  return Array.from(sizes).sort();
}

/**
 * Get all unique genders available in a category
 */
export function getAvailableGenders(categorySlug: string): string[] {
  const products = getProductsByCategory(categorySlug);
  const genders = new Set(products.map(p => p.gender.toLowerCase()));
  return Array.from(genders).sort();
}

/**
 * Get product count per gender for a category
 */
export function getGenderCounts(categorySlug: string): Record<string, number> {
  const products = getProductsByCategory(categorySlug);
  const counts: Record<string, number> = {};
  
  products.forEach(product => {
    const gender = product.gender.toLowerCase();
    counts[gender] = (counts[gender] || 0) + 1;
  });
  
  return counts;
}
