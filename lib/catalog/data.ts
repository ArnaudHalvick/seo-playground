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

export function filterProducts(products: Product[], filters: { color?: string; size?: string }): Product[] {
  let filtered = [...products];

  if (filters.color) {
    filtered = filtered.filter((p) => p.color.toLowerCase() === filters.color!.toLowerCase());
  }

  if (filters.size) {
    filtered = filtered.filter((p) => p.size === filters.size);
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
