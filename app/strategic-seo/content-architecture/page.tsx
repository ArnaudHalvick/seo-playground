import { Metadata } from "next";
import { generateSimpleMetadata } from "@/lib/meta/metadata";
import ContentArchitectureContent from "./ContentArchitectureContent";

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Content Architecture & On-Page Optimization - SEO Workshop",
    "Translate research into a semantic, navigable content system that satisfies search intent quickly, signals topical authority, and converts—without touching code.",
    "/strategic-seo/content-architecture/"
  );
}

export default function ContentArchitecturePage() {
  return <ContentArchitectureContent />;
}
