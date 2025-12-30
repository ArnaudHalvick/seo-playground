import { Metadata } from 'next';
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import SitemapContent from './SitemapContent';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/technical-seo/sitemap/";
  const baseMetadata = generateSimpleMetadata({
    title: "XML Sitemaps - SEO Workshop",
    description: "Generate intelligent sitemaps based on indexability rules. Only include URLs that should be indexed.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function SitemapPage() {
  return <SitemapContent />;
}
