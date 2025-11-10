import { Metadata } from 'next';
import { generateSimpleMetadata } from '@/lib/meta/metadata';
import SitemapContent from './SitemapContent';

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "XML Sitemaps - SEO Workshop",
    "Generate intelligent sitemaps based on indexability rules. Only include URLs that should be indexed.",
    "/technical-seo/sitemap/"
  );
}

export default function SitemapPage() {
  return <SitemapContent />;
}
