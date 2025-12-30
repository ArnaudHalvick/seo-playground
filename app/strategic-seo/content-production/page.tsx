import { Metadata } from "next";
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import ContentProductionContent from "./ContentProductionContent";

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/strategic-seo/content-production/";
  const baseMetadata = generateSimpleMetadata({
    title: "Content Production & Governance - SEO Workshop",
    description: "Build a reliable, repeatable editorial machine that turns research and strategy into high-quality pages—on time, on brief, and aligned with business outcomes.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function ContentProductionPage() {
  return <ContentProductionContent />;
}
