import { Metadata } from "next";
import { generateSimpleMetadata } from "@/lib/meta/metadata";
import StructuredDataContent from "./StructuredDataContent";

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Structured Data (Schema.org) - SEO Workshop",
    "Educational overview of Schema.org markup. Learn Product, BreadcrumbList, and Organization schemas with JSON-LD.",
    "/technical-seo/structured-data/"
  );
}

export default function StructuredDataPage() {
  return <StructuredDataContent />;
}
