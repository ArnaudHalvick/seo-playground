import { Metadata } from 'next';
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import InternationalContent from './InternationalContent';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/technical-seo/international/";
  const baseMetadata = generateSimpleMetadata({
    title: "International SEO - SEO Workshop",
    description: "URL strategies, hreflang implementation, and localization for multi-language and multi-region sites.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function InternationalPage() {
  return <InternationalContent />;
}
