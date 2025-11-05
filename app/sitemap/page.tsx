'use client';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SitemapTable } from '@/components/playground/SitemapTable';
import { useConfig } from '@/lib/config/provider';

export default function SitemapPage() {
  const { config } = useConfig();

  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs 
        items={[
          { label: 'Sitemap', href: '/sitemap' }
        ]} 
      />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Sitemap</h1>
          <p className="text-slate-600">
            Intelligent sitemap inclusion based on indexability rules and URL patterns
          </p>
        </div>

        <SitemapTable config={config} />
      </div>
    </div>
  );
}


