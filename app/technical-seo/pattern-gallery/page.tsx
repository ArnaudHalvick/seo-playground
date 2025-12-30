import { Metadata } from 'next';
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import PatternGalleryContent from './PatternGalleryContent';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/technical-seo/pattern-gallery/";
  const baseMetadata = generateSimpleMetadata({
    title: "SEO Pattern Gallery - SEO Workshop",
    description: "Reference library of 17 production-ready SEO patterns for filtering, sorting, ranges, and navigation.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function PatternGalleryPage() {
  return <PatternGalleryContent />;
}
