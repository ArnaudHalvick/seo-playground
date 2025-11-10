import { Metadata } from 'next';
import { generateSimpleMetadata } from '@/lib/meta/metadata';
import ProductUrlsContent from './ProductUrlsContent';

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Product URLs & Database - SEO Workshop",
    "Build SEO-friendly product catalogs that scale. Learn slug generation, variant handling, and database design for e-commerce.",
    "/technical-seo/product-urls/"
  );
}

export default function ProductUrlsPage() {
  return <ProductUrlsContent />;
}
