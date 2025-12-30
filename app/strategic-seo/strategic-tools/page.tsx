import { Metadata } from "next";
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import StrategicToolsPageContent from "./StrategicToolsPageContent";

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/strategic-seo/strategic-tools/";
  const baseMetadata = generateSimpleMetadata({
    title: "Strategic SEO Tools - Research & Analysis - SEO Workshop",
    description: "Essential non-programming SEO tools: keyword research, SERP analysis, competitive intelligence, rank tracking, and analytics platforms.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function StrategicToolsPage() {
  return <StrategicToolsPageContent />;
}
