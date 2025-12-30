import { Metadata } from 'next';
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import RobotsContent from './RobotsContent';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/technical-seo/robots/";
  const baseMetadata = generateSimpleMetadata({
    title: "Robots.txt - SEO Workshop",
    description: "Learn pattern-based crawl control with robots.txt. Block wasteful URLs, prevent crawl traps, and protect your crawl budget.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function RobotsPage() {
  return <RobotsContent />;
}
