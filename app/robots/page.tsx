import { Metadata } from 'next';
import RobotsContent from './RobotsContent';

export const metadata: Metadata = {
  title: "Robots.txt - SEO Workshop",
  description: "Learn pattern-based crawl control with robots.txt. Block wasteful URLs, prevent crawl traps, and protect your crawl budget.",
};

export default function RobotsPage() {
  return <RobotsContent />;
}
