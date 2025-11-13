import { Metadata } from "next";
import { generateSimpleMetadata } from "@/lib/meta/metadata";
import StrategicToolsPageContent from "./StrategicToolsPageContent";

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Strategic SEO Tools - Research & Analysis - SEO Workshop",
    "Essential non-programming SEO tools: keyword research, SERP analysis, competitive intelligence, rank tracking, and analytics platforms.",
    "/strategic-seo/strategic-tools/"
  );
}

export default function StrategicToolsPage() {
  return <StrategicToolsPageContent />;
}
