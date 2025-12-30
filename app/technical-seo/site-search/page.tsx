import { Metadata } from 'next';
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import SiteSearchContent from './SiteSearchContent';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/technical-seo/site-search/";
  const baseMetadata = generateSimpleMetadata({
    title: "Site Search SEO - SEO Workshop",
    description: "Prevent infinite crawl traps from internal search with noindex,follow strategy and robots.txt blocking.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function SiteSearchPage() {
  return <SiteSearchContent />;
}
