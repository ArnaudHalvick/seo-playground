export const dynamic = "force-dynamic";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Info, Zap } from 'lucide-react';

interface PageProps {
  searchParams: Record<string, string>;
}

export default function UtmPage({ searchParams }: PageProps) {
  const utmParams = Object.entries(searchParams).filter(([key]) =>
    key.startsWith('utm_') || key === 'gclid' || key === 'fbclid'
  );

  const hasTrackingParams = utmParams.length > 0;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="h-8 w-8 text-amber-600" />
          <h1 className="text-4xl font-bold">UTM Parameter Demo</h1>
        </div>

        <Alert className="mb-6 border-blue-300 bg-blue-50">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Tracking parameters like UTM codes should be stripped from canonical URLs. They're useful for analytics but create duplicate content issues if indexed. Check the SEO Receipt to see the canonical stripping in action.
          </AlertDescription>
        </Alert>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Current URL</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm break-all">
              {typeof window !== 'undefined' ? window.location.href : '/utm' + (hasTrackingParams ? '?' + new URLSearchParams(searchParams).toString() : '')}
            </div>
          </CardContent>
        </Card>

        {hasTrackingParams ? (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Detected Tracking Parameters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {utmParams.map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-3 border rounded-lg">
                    <code className="font-mono text-sm">{key}</code>
                    <Badge variant="secondary">{value}</Badge>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>SEO Impact:</strong> These parameters are configured as "blocked" in the playground. The canonical URL strips them out, and they're disallowed in robots.txt.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="mb-6">
            <CardContent className="pt-6 text-center">
              <p className="text-slate-600 mb-4">No tracking parameters detected. Try these examples:</p>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Try These Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Link href="/utm?utm_source=newsletter&utm_medium=email&utm_campaign=summer_sale">
                <Button variant="outline" className="w-full justify-start">
                  ?utm_source=newsletter&utm_medium=email&utm_campaign=summer_sale
                </Button>
              </Link>
              <Link href="/utm?utm_source=google&utm_medium=cpc&gclid=abc123">
                <Button variant="outline" className="w-full justify-start">
                  ?utm_source=google&utm_medium=cpc&gclid=abc123
                </Button>
              </Link>
              <Link href="/utm?utm_source=facebook&fbclid=xyz789">
                <Button variant="outline" className="w-full justify-start">
                  ?utm_source=facebook&fbclid=xyz789
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6 bg-green-50 border-green-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Best Practices</h3>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Strip tracking params from canonical URLs</li>
              <li>• Optionally block them in robots.txt to save crawl budget</li>
              <li>• Keep follow directive so links are still discovered</li>
              <li>• Use parameter handling in Google Search Console</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
