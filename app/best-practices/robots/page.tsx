'use client';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RobotsPreview } from '@/components/playground/RobotsPreview';

export default function RobotsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs 
        items={[
          { label: 'Best Practices', href: '/best-practices' },
          { label: 'robots.txt', href: '/best-practices/robots' }
        ]} 
      />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">robots.txt</h1>
          <p className="text-slate-600">
            Dynamic robots.txt generation with pattern-based rules for crawl control
          </p>
        </div>

        <RobotsPreview />
      </div>
    </div>
  );
}

