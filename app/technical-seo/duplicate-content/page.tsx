import { Metadata } from "next";
import { generateSimpleMetadata } from "@/lib/meta/metadata";
import DuplicateContentContent from "./DuplicateContentContent";

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Duplicate Content - SEO Workshop",
    "Diagnose and fix duplicate content issues from faceted navigation, pagination, and parameter combinations.",
    "/technical-seo/duplicate-content/"
  );
}

export default function DuplicateContentPage() {
  return <DuplicateContentContent />;
}
