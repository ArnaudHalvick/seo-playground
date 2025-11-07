import { Metadata } from 'next';
import SitemapContent from './SitemapContent';

export const metadata: Metadata = {
  title: "XML Sitemaps - SEO Workshop",
  description: "Generate intelligent sitemaps based on indexability rules. Only include URLs that should be indexed.",
};

export default function SitemapPage() {
  return <SitemapContent />;
}
