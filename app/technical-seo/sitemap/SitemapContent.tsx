'use client';

import { SitemapTable } from '@/components/playground/SitemapTable';
import { useConfig } from '@/lib/config/provider';

export default function SitemapContent() {
  const { config } = useConfig();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Sitemap</h1>
          <p className="text-slate-600">
            Intelligent sitemap inclusion based on indexability rules and URL patterns
          </p>
        </div>

        <SitemapTable config={config} />
      </div>
  );
}

