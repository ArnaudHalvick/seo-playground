import { Metadata } from 'next';
import { generateSimpleMetadata } from '@/lib/meta/metadata';
import ParametersContent from './ParametersContent';

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "URL Parameters - SEO Workshop",
    "Master parameter classification, canonical strategies, and multi-select detection to prevent crawl traps in e-commerce sites.",
    "/technical-seo/parameters/"
  );
}

export default function ParametersPage() {
  return <ParametersContent />;
}
