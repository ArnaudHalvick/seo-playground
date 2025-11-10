import { Metadata } from 'next';
import { generateSimpleMetadata } from '@/lib/meta/metadata';
import PatternGalleryContent from './PatternGalleryContent';

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "SEO Pattern Gallery - SEO Workshop",
    "Reference library of 17 production-ready SEO patterns for filtering, sorting, ranges, and navigation.",
    "/technical-seo/pattern-gallery/"
  );
}

export default function PatternGalleryPage() {
  return <PatternGalleryContent />;
}
