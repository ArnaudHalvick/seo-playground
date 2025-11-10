import { Metadata } from 'next';
import { generateSimpleMetadata } from '@/lib/meta/metadata';
import CoreWebVitalsContent from './CoreWebVitalsContent';

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Core Web Vitals - SEO Workshop",
    "Understand LCP, CLS, and INP. Learn quick wins and advanced optimizations for better performance and rankings.",
    "/technical-seo/core-web-vitals/"
  );
}

export default function CoreWebVitalsPage() {
  return <CoreWebVitalsContent />;
}
