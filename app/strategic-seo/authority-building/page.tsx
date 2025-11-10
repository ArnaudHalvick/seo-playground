import { Metadata } from "next";
import { generateSimpleMetadata } from "@/lib/meta/metadata";
import AuthorityBuildingContent from "./AuthorityBuildingContent";

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Authority Building & Off-Page SEO - SEO Workshop",
    "Strengthen your reputation, trust, and relevance beyond your own site. Earn high-quality mentions and links, activate local signals, manage reviews and user-generated content, and use media to win visibility and clicks—while reinforcing E-E-A-T.",
    "/strategic-seo/authority-building/"
  );
}

export default function AuthorityBuildingPage() {
  return <AuthorityBuildingContent />;
}
