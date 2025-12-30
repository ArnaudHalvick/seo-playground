import { Metadata } from 'next';
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import CoreWebVitalsContent from './CoreWebVitalsContent';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/technical-seo/core-web-vitals/";
  const baseMetadata = generateSimpleMetadata({
    title: "Core Web Vitals - SEO Workshop",
    description: "Understand LCP, CLS, and INP. Learn quick wins and advanced optimizations for better performance and rankings.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function CoreWebVitalsPage() {
  return <CoreWebVitalsContent />;
}
