import { Metadata } from 'next';
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import ParametersContent from './ParametersContent';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/technical-seo/parameters/";
  const baseMetadata = generateSimpleMetadata({
    title: "URL Parameters - SEO Workshop",
    description: "Master parameter classification, canonical strategies, and multi-select detection to prevent crawl traps in e-commerce sites.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function ParametersPage() {
  return <ParametersContent />;
}
