import { getProduct, getProducts } from '@/lib/catalog/data';
import { notFound, redirect } from 'next/navigation';

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

  if (!product) {
    notFound();
  }

  // Redirect to the new URL structure with gender segment
  redirect(`/shop/${params.category}/for/${product.gender}/${params.product}`);
}
