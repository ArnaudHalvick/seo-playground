import { Metadata } from "next";
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import ResourcesPageContent from "./ResourcesPageContent";

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/strategic-seo/resources/";
  const baseMetadata = generateSimpleMetadata({
    title: "Strategic SEO Resources - Templates & Frameworks - SEO Workshop",
    description: "Ready-to-use templates and frameworks for content briefs, editorial calendars, keyword clustering, SERP analysis, KPIs, and link prospecting.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function ResourcesPage() {
  return <ResourcesPageContent />;
}
