import { Metadata } from "next";
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import ResearchStrategyContent from "./ResearchStrategyContent";

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/strategic-seo/research-strategy/";
  const baseMetadata = generateSimpleMetadata({
    title: "Research & Strategy - SEO Workshop",
    description: "Build an evidence-based plan that aligns business goals with searcher demand. Convert raw market and keyword signals into intent-led clusters, a content roadmap, and prioritized bets with measurable outcomes.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function ResearchStrategyPage() {
  return <ResearchStrategyContent />;
}
