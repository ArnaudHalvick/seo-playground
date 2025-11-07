'use client';

import Link from 'next/link';
import { PaginationSettings } from '@/components/playground/PaginationSettings';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { FlaskConical, ArrowRight } from 'lucide-react';

export default function PaginationContent() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Pagination</h1>
          <p className="text-slate-600">
            Best practices for handling paginated content with proper canonicalization strategies
          </p>
        </div>

        {/* Interactive Demo Callout */}
        <Alert className="mb-6 border-2 border-green-300 bg-gradient-to-r from-green-50 to-blue-50">
          <FlaskConical className="h-5 w-5 text-green-600" />
          <AlertDescription className="flex items-center justify-between">
            <span className="text-slate-900">
              <strong>See pagination SEO decisions live:</strong> Navigate to page 2+ in the Interactive Demo 
              and watch the SEO Receipt explain noindex,follow with self-canonical.
            </span>
            <Link href="/shop">
              <Button size="sm" className="ml-4 bg-green-600 hover:bg-green-700">
                Try Demo
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </AlertDescription>
        </Alert>

        <PaginationSettings />
      </div>
    </div>
  );
}
