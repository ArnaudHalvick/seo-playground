import { Metadata } from 'next';
import InternationalContent from './InternationalContent';

export const metadata: Metadata = {
  title: "International SEO - SEO Workshop",
  description: "URL strategies, hreflang implementation, and localization for multi-language and multi-region sites.",
};

export default function InternationalPage() {
  return <InternationalContent />;
}
