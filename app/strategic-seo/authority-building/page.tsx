import { Metadata } from "next";
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import AuthorityBuildingContent from "./AuthorityBuildingContent";

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/strategic-seo/authority-building/";
  const baseMetadata = generateSimpleMetadata({
    title: "Authority Building & Off-Page SEO - SEO Workshop",
    description: "Strengthen your reputation, trust, and relevance beyond your own site. Earn high-quality mentions and links, activate local signals, manage reviews and user-generated content, and use media to win visibility and clicks—while reinforcing E-E-A-T.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function AuthorityBuildingPage() {
  return <AuthorityBuildingContent />;
}
