import { Metadata } from 'next';
import { generateSimpleMetadata } from '@/lib/meta/metadata';
import PaginationContent from './PaginationContent';

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Pagination SEO - SEO Workshop",
    "Implement proper pagination with noindex,follow for page 2+. Learn why rel=prev/next is deprecated.",
    "/technical-seo/pagination/"
  );
}

export default function PaginationPage() {
  return <PaginationContent />;
}
