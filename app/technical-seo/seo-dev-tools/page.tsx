import { Metadata } from "next";
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import SeoDevToolsContent from "./SeoDevToolsContent";

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/technical-seo/seo-dev-tools/";
  const baseMetadata = generateSimpleMetadata({
    title: "SEO Developer Tools - SEO Workshop",
    description: "Curated toolkit for technical SEO: crawlers, performance tools, rendering tests, and monitoring solutions.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function SeoDevToolsPage() {
  return <SeoDevToolsContent />;
}
