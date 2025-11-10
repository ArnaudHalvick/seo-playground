import { Metadata } from "next";
import { generateSimpleMetadata } from "@/lib/meta/metadata";
import MeasurementOptimizationContent from "./MeasurementOptimizationContent";

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Measurement, Iteration & Optimization - SEO Workshop",
    "Turn your strategy into a closed-loop system. Measure the right signals at the cluster level, diagnose issues early, run clean tests, and iterate content and internal linking to compound gains—without touching code.",
    "/strategic-seo/measurement-optimization/"
  );
}

export default function MeasurementOptimizationPage() {
  return <MeasurementOptimizationContent />;
}
