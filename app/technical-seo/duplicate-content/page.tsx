import { Metadata } from "next";
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import DuplicateContentContent from "./DuplicateContentContent";

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/technical-seo/duplicate-content/";
  const baseMetadata = generateSimpleMetadata({
    title: "Duplicate Content - SEO Workshop",
    description: "Diagnose and fix duplicate content issues from faceted navigation, pagination, and parameter combinations.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function DuplicateContentPage() {
  return <DuplicateContentContent />;
}
