import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Settings, Eye } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ label: 'Docs', href: '/docs' }, { label: 'How It Works', href: '/how-it-works' }]} />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">How It Works</h1>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Rule Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">
                All SEO rules are defined in a centralized static configuration loaded from <code className="bg-slate-100 px-2 py-1 rounded text-sm">data/rules.json</code>. This configuration defines parameter policies, pagination strategies, and robots.txt rules based on SEO best practices.
              </p>
              <div className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm font-mono">
                <div>lib/rules/params.ts</div>
                <div>lib/rules/canonical.ts</div>
                <div>lib/rules/robots.ts</div>
                <div>lib/rules/sitemap.ts</div>
              </div>
              <p className="text-slate-700">
                These rule engines are pure functions that take the current URL and configuration, then output indexability decisions, canonical URLs, and trace logs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                SEO Computation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">
                Every page on this site uses the same metadata generation helper that evaluates the current path and query parameters against your configured rules:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                <li>Normalize the path (lowercase, trailing slashes)</li>
                <li>Identify and classify URL parameters (stable/unstable/blocked)</li>
                <li>Apply parameter policies to determine robots directive</li>
                <li>Compute the canonical URL by stripping blocked params</li>
                <li>Check pagination rules for page 2+</li>
                <li>Apply route-specific overrides (search, account, etc.)</li>
              </ol>
              <p className="text-slate-700 mt-4">
                The result is a complete SEO profile: indexability status, canonical URL, sitemap inclusion, and a detailed trace explaining every decision.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                SEO Receipt
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">
                The floating SEO Receipt on every page reads the exact same values used to generate the page metadata. This ensures what you see in the Receipt matches what search engines see.
              </p>
              <p className="text-slate-700">
                The Receipt shows:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Indexability status (index,follow / noindex,follow / noindex,nofollow)</li>
                <li>Canonical URL target</li>
                <li>Sitemap inclusion status</li>
                <li>Warnings for potential issues</li>
                <li>Rule trace showing which rules fired and why</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-3">Key Files</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-slate-50 rounded">
                  <code className="text-slate-700">/lib/rules/params.ts</code>
                  <span className="text-slate-500">Parameter policy engine</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 rounded">
                  <code className="text-slate-700">/lib/rules/canonical.ts</code>
                  <span className="text-slate-500">Canonical computation</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 rounded">
                  <code className="text-slate-700">/lib/config/provider.tsx</code>
                  <span className="text-slate-500">React context for rules</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50 rounded">
                  <code className="text-slate-700">/components/SeoReceipt.tsx</code>
                  <span className="text-slate-500">Live SEO inspector</span>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
