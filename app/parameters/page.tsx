import { Metadata } from 'next';
import ParametersContent from './ParametersContent';

export const metadata: Metadata = {
  title: "URL Parameters - SEO Workshop",
  description: "Master parameter classification, canonical strategies, and multi-select detection to prevent crawl traps in e-commerce sites.",
};

export default function ParametersPage() {
  return <ParametersContent />;
}
