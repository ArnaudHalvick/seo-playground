import { Metadata } from 'next';
import CoreWebVitalsContent from './CoreWebVitalsContent';

export const metadata: Metadata = {
  title: "Core Web Vitals - SEO Workshop",
  description: "Understand LCP, CLS, and INP. Learn quick wins and advanced optimizations for better performance and rankings.",
};

export default function CoreWebVitalsPage() {
  return <CoreWebVitalsContent />;
}
