'use client';

import { RobotsPreview } from '@/components/playground/RobotsPreview';
import { RobotsTester } from '@/components/playground/RobotsTester';

export default function RobotsContent() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
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
  );
}

