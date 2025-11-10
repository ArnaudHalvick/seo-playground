import { Metadata } from 'next';
import { generateSimpleMetadata } from '@/lib/meta/metadata';
import SiteSearchContent from './SiteSearchContent';

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Site Search SEO - SEO Workshop",
    "Prevent infinite crawl traps from internal search with noindex,follow strategy and robots.txt blocking.",
    "/technical-seo/site-search/"
  );
}

export default function SiteSearchPage() {
  return <SiteSearchContent />;
}
