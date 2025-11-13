import { Metadata } from "next";
import { generateSimpleMetadata } from "@/lib/meta/metadata";
import ResourcesPageContent from "./ResourcesPageContent";

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Strategic SEO Resources - Templates & Frameworks - SEO Workshop",
    "Ready-to-use templates and frameworks for content briefs, editorial calendars, keyword clustering, SERP analysis, KPIs, and link prospecting.",
    "/strategic-seo/resources/"
  );
}

export default function ResourcesPage() {
  return <ResourcesPageContent />;
}
