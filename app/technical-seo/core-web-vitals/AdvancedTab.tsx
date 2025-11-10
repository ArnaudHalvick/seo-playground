import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import {
  AlertTriangle,
  Wrench,
  Zap,
  Activity,
  XCircle,
  CheckCircle2,
  Info,
} from 'lucide-react';

export default function AdvancedTab() {
  return (
    <div className="space-y-6">
      {/* When to Pursue Advanced */}
      <Alert className="border-amber-300 bg-amber-50">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Only pursue these AFTER implementing quick wins.</strong> You should have scores above 70
          before worrying about advanced techniques. Going from 90→95 often requires 10x the effort of 50→90.
        </AlertDescription>
      </Alert>

      {/* Code Splitting & Lazy Loading */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-indigo-600" />
            Code Splitting & Lazy Loading
          </CardTitle>
          <CardDescription>
            Load only what&apos;s needed for the current page
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-indigo-50 border border-indigo-200 p-4 rounded">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-sm">Impact</h4>
              <Badge className="bg-indigo-600">Medium</Badge>
            </div>
            <p className="text-xs text-slate-700">
              Reduces initial bundle size by loading code on-demand. Most effective for large JavaScript applications.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <h4 className="font-semibold mb-1">Route-Based Code Splitting</h4>
              <p className="text-xs text-slate-600">
                Each page/route loads only its own JavaScript. Homepage doesn&apos;t load checkout code.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Component-Based Lazy Loading</h4>
              <p className="text-xs text-slate-600">
                Modals, tabs, dropdowns load only when user interacts with them. Reduces initial payload.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Tree Shaking</h4>
              <p className="text-xs text-slate-600">
                Remove unused code from bundles. If you import one function from a library, don&apos;t include the whole library.
              </p>
            </div>
          </div>

          <Alert className="border-indigo-300 bg-indigo-50">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Effort:</strong> Medium - requires build tool configuration and possibly refactoring how
              you structure imports. Most modern frameworks have this built-in.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Third-Party Scripts */}
      <Card className="border-2 border-red-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            Optimize Third-Party Scripts (BIGGEST WIN)
          </CardTitle>
          <CardDescription>
            The #1 performance killer on most sites
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-red-300 bg-red-50">
            <XCircle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>The Problem:</strong> Third-party scripts (analytics, ads, social widgets, chat) are the
              single biggest performance killer. They can improve all metrics by 20-40% if optimized properly.
            </AlertDescription>
          </Alert>

          <div className="bg-white border border-slate-200 p-4 rounded">
            <h4 className="font-semibold mb-2">Common Culprits</h4>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• Analytics (Google Analytics, Facebook Pixel, etc.)</li>
              <li>• Ad networks (Google Ads, programmatic ads)</li>
              <li>• Social widgets (share buttons, embedded feeds)</li>
              <li>• Chat widgets (Intercom, Drift, etc.)</li>
              <li>• Tag managers loading dozens of scripts</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
              <h4 className="font-semibold text-sm mb-2">Strategy 1: Defer Until Interaction</h4>
              <p className="text-xs text-slate-700">
                Don&apos;t load chat widgets until user scrolls or moves mouse. Saves 200-500KB+ on initial load.
              </p>
            </div>

            <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
              <h4 className="font-semibold text-sm mb-2">Strategy 2: Facade Pattern</h4>
              <p className="text-xs text-slate-700">
                Show a placeholder (e.g., video thumbnail) and load the real embed (YouTube) only on click.
              </p>
            </div>

            <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
              <h4 className="font-semibold text-sm mb-2">Strategy 3: Self-Host If Possible</h4>
              <p className="text-xs text-slate-700">
                Host scripts on your domain instead of third-party servers. Eliminates connection overhead.
              </p>
            </div>

            <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
              <h4 className="font-semibold text-sm mb-2">Strategy 4: Remove Unused Scripts</h4>
              <p className="text-xs text-slate-700">
                Audit what&apos;s actually being used. Many sites load scripts for features they no longer use.
              </p>
            </div>
          </div>

          <Alert className="border-green-300 bg-green-50">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Biggest Impact:</strong> Moving Google Analytics to defer or using Partytown
              (web worker isolation) can improve INP by 100-200ms alone.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Resource Hints */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-600" />
            Resource Hints
          </CardTitle>
          <CardDescription>
            Tell the browser what to load ahead of time
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3 text-sm">
            <div className="border border-slate-200 p-3 rounded">
              <h4 className="font-semibold mb-1">preload</h4>
              <p className="text-xs text-slate-600">
                Load critical resources earlier (fonts, hero images). Use sparingly - only for above-the-fold.
              </p>
            </div>

            <div className="border border-slate-200 p-3 rounded">
              <h4 className="font-semibold mb-1">prefetch</h4>
              <p className="text-xs text-slate-600">
                Load resources needed for next navigation. Good for predictable user flows.
              </p>
            </div>

            <div className="border border-slate-200 p-3 rounded">
              <h4 className="font-semibold mb-1">preconnect</h4>
              <p className="text-xs text-slate-600">
                Establish early connections to third-party domains. Saves DNS + TCP + TLS time.
              </p>
            </div>

            <div className="border border-slate-200 p-3 rounded">
              <h4 className="font-semibold mb-1">dns-prefetch</h4>
              <p className="text-xs text-slate-600">
                Resolve DNS for third-party domains. Lighter than preconnect.
              </p>
            </div>
          </div>

          <Alert className="border-amber-300 bg-amber-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Warning:</strong> Overuse hurts performance. Only preload 2-3 truly critical resources.
              Everything you preload takes bandwidth from what the browser was going to load anyway.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* SSR vs CSR */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-purple-600" />
            Server-Side vs Client-Side Rendering
          </CardTitle>
          <CardDescription>
            Architectural decision with performance tradeoffs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-2 border-blue-300 p-4 rounded">
              <h4 className="font-semibold mb-2">Server-Side Rendering (SSR)</h4>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-green-600">Benefits:</span>
                  <ul className="text-slate-700 mt-1">
                    <li>• Faster FCP/LCP (HTML arrives ready)</li>
                    <li>• Better for SEO (content in HTML)</li>
                    <li>• Works without JavaScript</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold text-red-600">Tradeoffs:</span>
                  <ul className="text-slate-700 mt-1">
                    <li>• Slower TTFB (server does work)</li>
                    <li>• More server resources needed</li>
                    <li>• More complex deployment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-2 border-purple-300 p-4 rounded">
              <h4 className="font-semibold mb-2">Client-Side Rendering (CSR)</h4>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-green-600">Benefits:</span>
                  <ul className="text-slate-700 mt-1">
                    <li>• Fast TTFB (static HTML)</li>
                    <li>• Less server load</li>
                    <li>• Simpler deployment (CDN)</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold text-red-600">Tradeoffs:</span>
                  <ul className="text-slate-700 mt-1">
                    <li>• Slower FCP/LCP (waits for JS)</li>
                    <li>• Requires JavaScript to work</li>
                    <li>• SEO requires extra effort</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-green-300 bg-green-50">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Hybrid Solution:</strong> Static Site Generation (SSG) gives you the best of both -
              pre-rendered HTML at build time, served as static files. Perfect for content-heavy sites.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* What NOT to Optimize */}
      <Card className="border-2 border-red-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <XCircle className="h-5 w-5 text-red-600" />
            What NOT to Optimize (Avoid Wasted Effort)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Don&apos;t chase 100 scores</strong> - Diminishing returns past 90. Focus on getting out of &quot;Poor&quot; range first.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Don&apos;t over-optimize desktop</strong> - Mobile scores matter most for SEO. Once mobile is good, desktop usually follows.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Don&apos;t remove features to improve scores</strong> - User experience &gt; perfect scores. Keep that chat widget if users need it.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Don&apos;t optimize pages that get no traffic</strong> - Fix your highest-traffic pages first (homepage, top categories, top products).
              </div>
            </div>
            <div className="flex items-start gap-2">
              <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Don&apos;t implement solutions you can&apos;t maintain</strong> - Complex optimizations need ongoing maintenance. Simple usually wins.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

