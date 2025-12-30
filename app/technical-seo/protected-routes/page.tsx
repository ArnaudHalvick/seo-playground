import { Metadata } from "next";
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import ProtectedRoutesContent from "./ProtectedRoutesContent";

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/technical-seo/protected-routes/";
  const baseMetadata = generateSimpleMetadata({
    title: "Protected Routes SEO - SEO Workshop",
    description: "SEO strategy for private content using defense-in-depth: authentication, noindex, and robots.txt blocking.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function ProtectedRoutesPage() {
  return <ProtectedRoutesContent />;
}
