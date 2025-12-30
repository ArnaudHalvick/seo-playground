import { Metadata } from 'next';
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import ProductUrlsContent from './ProductUrlsContent';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/technical-seo/product-urls/";
  const baseMetadata = generateSimpleMetadata({
    title: "Product URLs & Database - SEO Workshop",
    description: "Build SEO-friendly product catalogs that scale. Learn slug generation, variant handling, and database design for e-commerce.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function ProductUrlsPage() {
  return <ProductUrlsContent />;
}
