import { Metadata } from 'next';
import PatternGalleryContent from './PatternGalleryContent';

export const metadata: Metadata = {
  title: "SEO Pattern Gallery - SEO Workshop",
  description: "Reference library of 17 production-ready SEO patterns for filtering, sorting, ranges, and navigation.",
};

export default function PatternGalleryPage() {
  return <PatternGalleryContent />;
}
