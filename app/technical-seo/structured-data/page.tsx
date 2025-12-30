import { Metadata } from "next";
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import StructuredDataContent from "./StructuredDataContent";

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/technical-seo/structured-data/";
  const baseMetadata = generateSimpleMetadata({
    title: "Structured Data (Schema.org) - SEO Workshop",
    description: "Educational overview of Schema.org markup. Learn Product, BreadcrumbList, and Organization schemas with JSON-LD.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function StructuredDataPage() {
  return <StructuredDataContent />;
}
