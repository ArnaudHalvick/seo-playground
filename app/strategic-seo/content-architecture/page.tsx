import { Metadata } from "next";
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import ContentArchitectureContent from "./ContentArchitectureContent";

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/strategic-seo/content-architecture/";
  const baseMetadata = generateSimpleMetadata({
    title: "Content Architecture & On-Page Optimization - SEO Workshop",
    description: "Translate research into a semantic, navigable content system that satisfies search intent quickly, signals topical authority, and converts—without touching code.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function ContentArchitecturePage() {
  return <ContentArchitectureContent />;
}
