import { Metadata } from "next";
import { generateSimpleMetadata } from "@/lib/meta/metadata";
import ProtectedRoutesContent from "./ProtectedRoutesContent";

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Protected Routes SEO - SEO Workshop",
    "SEO strategy for private content using defense-in-depth: authentication, noindex, and robots.txt blocking.",
    "/technical-seo/protected-routes/"
  );
}

export default function ProtectedRoutesPage() {
  return <ProtectedRoutesContent />;
}
