import { Metadata } from 'next';
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import PaginationContent from './PaginationContent';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/technical-seo/pagination/";
  const baseMetadata = generateSimpleMetadata({
    title: "Pagination SEO - SEO Workshop",
    description: "Implement proper pagination with noindex,follow for page 2+. Learn why rel=prev/next is deprecated.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function PaginationPage() {
  return <PaginationContent />;
}
