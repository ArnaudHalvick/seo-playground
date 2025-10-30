import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ label: 'Docs', href: '/concepts' }, { label: 'About This Project', href: '/about' }]} />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">About This Project</h1>

        <div className="prose prose-slate max-w-none space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Purpose</h2>
              <p className="text-slate-700 leading-relaxed">
                This is a teaching-by-doing portfolio application that demonstrates technical SEO and URL management decisions. Instead of just reading about SEO best practices, you can configure rules and immediately see their effects on live demo pages.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
              <div className="space-y-3">
                {[
                  'Interactive rule configuration (parameters, robots.txt, canonicals)',
                  'Real-time SEO Receipt showing indexability and canonical decisions',
                  'Demo e-commerce catalog with sorting, filtering, and pagination',
                  'Protected routes demonstrating noindex + robots disallow',
                  'International SEO lab with hreflang implementation',
                  'Duplication clinic for identifying content overlap',
                  'Live robots.txt and sitemap.xml generation'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Intentionally Out of Scope</h2>
              <div className="space-y-3">
                {[
                  'Schema.org structured data (out of scope for v1)',
                  'Core Web Vitals and page speed optimization',
                  'E-E-A-T signals and content quality metrics',
                  'Link building and backlink analysis',
                  'Real analytics and log file analysis',
                  'Production authentication and user management'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
              <ul className="text-slate-700 space-y-2">
                <li>• Next.js 13 with App Router</li>
                <li>• TypeScript for type safety</li>
                <li>• Tailwind CSS + shadcn/ui components</li>
                <li>• LocalStorage for rule persistence</li>
                <li>• Client-side SEO computation</li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-4 pt-6">
            <Link href="/how-it-works">
              <Button>How It Works</Button>
            </Link>
            <Link href="/concepts">
              <Button variant="outline">SEO Concepts</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
