import { Metadata } from 'next';
import { generateSimpleMetadata } from '@/lib/meta/metadata';
import InternationalContent from './InternationalContent';

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "International SEO - SEO Workshop",
    "URL strategies, hreflang implementation, and localization for multi-language and multi-region sites.",
    "/technical-seo/international/"
  );
}

export default function InternationalPage() {
  return <InternationalContent />;
}
