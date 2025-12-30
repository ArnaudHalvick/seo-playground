import { Metadata } from "next";
import { generateSimpleMetadata, attachCanonical } from "@/lib/meta/metadata";
import MeasurementOptimizationContent from "./MeasurementOptimizationContent";

export async function generateMetadata(): Promise<Metadata> {
  const canonicalPath = "/strategic-seo/measurement-optimization/";
  const baseMetadata = generateSimpleMetadata({
    title: "Measurement, Iteration & Optimization - SEO Workshop",
    description: "Turn your strategy into a closed-loop system. Measure the right signals at the cluster level, diagnose issues early, run clean tests, and iterate content and internal linking to compound gains—without touching code.",
  });
  
  return attachCanonical(baseMetadata, canonicalPath);
}

export default function MeasurementOptimizationPage() {
  return <MeasurementOptimizationContent />;
}
