'use client';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PaginationSettings } from '@/components/playground/PaginationSettings';

export default function PaginationPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs 
        items={[
          { label: 'Pagination', href: '/pagination' }
        ]} 
      />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Pagination</h1>
          <p className="text-slate-600">
            Best practices for handling paginated content with proper canonicalization strategies
          </p>
        </div>

        <PaginationSettings />
      </div>
    </div>
  );
}


