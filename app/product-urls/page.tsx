import { Metadata } from 'next';
import ProductUrlsContent from './ProductUrlsContent';

export const metadata: Metadata = {
  title: "Product URLs & Database - SEO Workshop",
  description: "Build SEO-friendly product catalogs that scale. Learn slug generation, variant handling, and database design for e-commerce.",
};

export default function ProductUrlsPage() {
  return <ProductUrlsContent />;
}
