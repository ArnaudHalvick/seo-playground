import { getProduct, getProducts } from '@/lib/catalog/data';
import { notFound, redirect } from 'next/navigation';

interface PageProps {
  params: {
    category: string;
    product: string;
  };
}

export async function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    category: product.category,
    product: product.slug,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.product);

  if (!product) {
    notFound();
  }

  // Redirect to the new URL structure with gender segment
  redirect(`/shop/${resolvedParams.category}/for/${product.gender}/${resolvedParams.product}`);
}
