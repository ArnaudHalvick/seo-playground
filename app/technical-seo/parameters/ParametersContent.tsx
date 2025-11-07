'use client';

import Link from 'next/link';
import { ParamPolicyEditor } from '@/components/playground/ParamPolicyEditor';
import { useConfig } from '@/lib/config/provider';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { FlaskConical, ArrowRight } from 'lucide-react';

export default function ParametersContent() {
  const { config } = useConfig();

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">URL Parameters</h1>
          <p className="text-slate-600">
            Configure how URL parameters affect indexability, canonical URLs, and crawling behavior
          </p>
        </div>

        {/* Interactive Demo Callout */}
        <Alert className="mb-6 border-2 border-green-300 bg-gradient-to-r from-green-50 to-blue-50">
          <FlaskConical className="h-5 w-5 text-green-600" />
          <AlertDescription className="flex items-center justify-between">
            <span className="text-slate-900">
              <strong>Want to see parameter handling in action?</strong> Try the Interactive Demo to test 
              different filter combinations and watch real-time SEO decisions.
            </span>
            <Link href="/shop">
              <Button size="sm" className="ml-4 bg-green-600 hover:bg-green-700">
                Try Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </AlertDescription>
        </Alert>

        <ParamPolicyEditor config={config} />
      </div>
  );
}

