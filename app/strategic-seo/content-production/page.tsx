import { Metadata } from "next";
import { generateSimpleMetadata } from "@/lib/meta/metadata";
import ContentProductionContent from "./ContentProductionContent";

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Content Production & Governance - SEO Workshop",
    "Build a reliable, repeatable editorial machine that turns research and strategy into high-quality pages—on time, on brief, and aligned with business outcomes.",
    "/strategic-seo/content-production/"
  );
}

export default function ContentProductionPage() {
  return <ContentProductionContent />;
}
