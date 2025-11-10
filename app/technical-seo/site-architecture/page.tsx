import { Metadata } from "next";
import { generateSimpleMetadata } from "@/lib/meta/metadata";
import SiteArchitectureContent from "./SiteArchitectureContent";

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Site Architecture & URLs - SEO Workshop",
    "Build clean, crawlable URL structures with proper hierarchy depth and descriptive paths instead of IDs.",
    "/technical-seo/site-architecture/"
  );
}

export default function SiteArchitecturePage() {
  return <SiteArchitectureContent />;
}
