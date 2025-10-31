'use client';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ParamPolicyEditor } from '@/components/playground/ParamPolicyEditor';
import { useConfig } from '@/lib/config/provider';

export default function ParametersPage() {
  const { config } = useConfig();

  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs 
        items={[
          { label: 'Best Practices', href: '/best-practices' },
          { label: 'Parameters', href: '/best-practices/parameters' }
        ]} 
      />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">URL Parameters</h1>
          <p className="text-slate-600">
            Configure how URL parameters affect indexability, canonical URLs, and crawling behavior
          </p>
        </div>

        <ParamPolicyEditor config={config} />
      </div>
    </div>
  );
}

