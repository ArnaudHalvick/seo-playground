import { Metadata } from 'next';
import { generateSimpleMetadata } from '@/lib/meta/metadata';
import RobotsContent from './RobotsContent';

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Robots.txt - SEO Workshop",
    "Learn pattern-based crawl control with robots.txt. Block wasteful URLs, prevent crawl traps, and protect your crawl budget.",
    "/technical-seo/robots/"
  );
}

export default function RobotsPage() {
  return <RobotsContent />;
}
