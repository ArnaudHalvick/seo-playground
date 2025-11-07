import { Metadata } from 'next';
import PaginationContent from './PaginationContent';

export const metadata: Metadata = {
  title: "Pagination SEO - SEO Workshop",
  description: "Implement proper pagination with noindex,follow for page 2+. Learn why rel=prev/next is deprecated.",
};

export default function PaginationPage() {
  return <PaginationContent />;
}
