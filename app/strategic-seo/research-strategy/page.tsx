import { Metadata } from "next";
import { generateSimpleMetadata } from "@/lib/meta/metadata";
import ResearchStrategyContent from "./ResearchStrategyContent";

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Research & Strategy - SEO Workshop",
    "Build an evidence-based plan that aligns business goals with searcher demand. Convert raw market and keyword signals into intent-led clusters, a content roadmap, and prioritized bets with measurable outcomes.",
    "/strategic-seo/research-strategy/"
  );
}

export default function ResearchStrategyPage() {
  return <ResearchStrategyContent />;
}
