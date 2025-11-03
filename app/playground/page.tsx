import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, Lightbulb } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DemoChips } from '@/components/DemoChips';

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ label: 'SEO Lab', href: '/playground' }]} />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">🧪 SEO Lab</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experiment with URL parameters and see real-time SEO analysis. 
            Learn how different parameter combinations affect indexability, 
            canonical URLs, robots.txt decisions, and sitemap inclusion.
          </p>
        </div>

        {/* Info Alert */}
        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <Info className="h-5 w-5 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>How to use this lab:</strong> Click any parameter chip below to navigate to a URL with those parameters applied. 
            Watch the SEO Receipt panel on the right update in real-time with indexability decisions, 
            canonical URL recommendations, and crawl trap risk assessments.
          </AlertDescription>
        </Alert>

        {/* Main Demo Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Try Parameter Combinations</CardTitle>
            <CardDescription className="text-base">
              Click any chip to see how different URL parameters affect SEO. 
              The demo uses the t-shirts catalog to demonstrate real-world scenarios.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DemoChips basePath="/catalog/t-shirts" />
          </CardContent>
        </Card>

        {/* Educational Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Multi-Select Warning */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">🔴</span>
                Multi-Select Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-2 font-semibold text-red-900">High Crawl Trap Risk</p>
              <p className="text-red-800">
                Multiple color selections (e.g., <code className="bg-red-100 px-1 rounded">?color=black,blue</code>) 
                create exponential URL combinations (2^N). These are blocked via robots.txt to prevent crawl waste.
              </p>
            </CardContent>
          </Card>

          {/* Multi-Filter Info */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">🟡</span>
                Multiple Stable Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-2 font-semibold text-orange-900">Medium Risk - N×M Combinations</p>
              <p className="text-orange-800">
                Combining stable filters like color + size creates N×M URLs. 
                Uses <code className="bg-orange-100 px-1 rounded">noindex,follow</code> to prevent index bloat while maintaining discoverability.
              </p>
            </CardContent>
          </Card>

          {/* Single Filter Success */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">🟢</span>
                Single Stable Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-2 font-semibold text-green-900">Low Risk - Safe to Index</p>
              <p className="text-green-800">
                Single filters like color=black represent real user intent with limited variations. 
                These are <code className="bg-green-100 px-1 rounded">index,follow</code> and ideal for clean path conversion.
              </p>
            </CardContent>
          </Card>

          {/* Sort Parameters */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">🔄</span>
                Sort Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-2 font-semibold text-purple-900">Unstable - noindex,follow</p>
              <p className="text-purple-800">
                Sorting changes layout but not content. Use <code className="bg-purple-100 px-1 rounded">noindex,follow</code> or 
                create curated clean paths for high-value sorts (/cheapest/, /bestsellers/).
              </p>
            </CardContent>
          </Card>

          {/* Price Ranges */}
          <Card className="border-pink-200 bg-pink-50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">💰</span>
                Price Ranges
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-2 font-semibold text-pink-900">Blocked - Infinite Combinations</p>
              <p className="text-pink-800">
                Numeric ranges like <code className="bg-pink-100 px-1 rounded">price_min/max</code> create infinite URLs. 
                Always blocked via robots.txt to protect crawl budget.
              </p>
            </CardContent>
          </Card>

          {/* Clean Paths */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">🛣️</span>
                Clean Path Routes
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-2 font-semibold text-blue-900">SEO-Friendly URLs</p>
              <p className="text-blue-800">
                Convert stable parameters to clean paths: <code className="bg-blue-100 px-1 rounded">/t-shirts/by-color/black/</code> 
                instead of <code className="bg-blue-100 px-1 rounded">?color=black</code>. Better for keywords and user intent.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Alert className="mt-8 border-amber-200 bg-amber-50">
          <Lightbulb className="h-5 w-5 text-amber-600" />
          <AlertDescription className="text-amber-900">
            <strong>Pro Tips:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Watch the <strong>Crawl Trap Risk</strong> section for real-time URL combination math</li>
              <li>Compare <strong>Query Parameters</strong> vs <strong>Clean Paths</strong> using the links provided</li>
              <li>Check the <strong>Rule Trace</strong> tab to see step-by-step SEO decision logic</li>
              <li>Notice how pagination always gets <code>noindex,follow</code> on page 2+</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}

