import { Metadata } from "next";
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import SiteArchitectureContent from "./SiteArchitectureContent";

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/technical-seo/site-architecture/";
  const baseMetadata = generateSimpleMetadata({
    title: "Site Architecture & URLs - SEO Workshop",
    description: "Build clean, crawlable URL structures with proper hierarchy depth and descriptive paths instead of IDs.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function SiteArchitecturePage() {
  return <SiteArchitectureContent />;
}
