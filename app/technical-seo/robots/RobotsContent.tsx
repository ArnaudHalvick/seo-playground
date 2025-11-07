"use client";

import { RobotsPreview } from "@/components/playground/RobotsPreview";
import { RobotsTester } from "@/components/playground/RobotsTester";

export default function RobotsContent() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">robots.txt Best Practices</h1>
          <p className="text-slate-600">
            Live-generated robots.txt with pattern explanations and interactive URL testing
          </p>
        </div>

        <div className="space-y-6">
          <RobotsPreview />

          <RobotsTester />
        </div>
      </div>
    </div>
  );
}
