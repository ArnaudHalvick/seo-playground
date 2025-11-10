import { Metadata } from "next";
import { generateSimpleMetadata } from "@/lib/meta/metadata";
import SeoDevToolsContent from "./SeoDevToolsContent";

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "SEO Developer Tools - SEO Workshop",
    "Curated toolkit for technical SEO: crawlers, performance tools, rendering tests, and monitoring solutions.",
    "/technical-seo/seo-dev-tools/"
  );
}

export default function SeoDevToolsPage() {
  return <SeoDevToolsContent />;
}
