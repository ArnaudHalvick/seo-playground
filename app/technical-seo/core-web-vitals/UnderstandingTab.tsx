import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import {
  Gauge,
  Activity,
  Clock,
  Eye,
  MousePointer,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Zap,
  BarChart3,
  Smartphone,
  Monitor,
  Target,
} from 'lucide-react';

export default function UnderstandingTab() {
  return (
    <div className="space-y-6">
      {/* What Are Core Web Vitals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gauge className="h-5 w-5 text-blue-600" />
            What Are Core Web Vitals?
          </CardTitle>
          <CardDescription>
            Google&apos;s key metrics for measuring user experience on the web
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-700">
            <strong>Core Web Vitals (CWV)</strong> are a set of metrics introduced by Google in 2021 as part of the
            <strong> Page Experience update</strong>. They measure real-world user experience focused on loading speed,
            visual stability, and interactivity.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2">Why They Matter for SEO</h4>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Confirmed ranking factor since 2021</li>
                <li>• Affects mobile and desktop rankings</li>
                <li>• Poor scores can prevent top rankings</li>
                <li>• Influences user engagement & conversions</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded">
              <h4 className="font-semibold text-sm mb-2">Important Context</h4>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• <strong>Lightweight factor:</strong> Content quality matters more</li>
                <li>• Threshold-based: Pass/fail, not linear scoring</li>
                <li>• Based on real user data (28-day rolling)</li>
                <li>• Mobile scores matter most</li>
              </ul>
            </div>
          </div>

          <Alert className="border-amber-300 bg-amber-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>CWV is a LIGHTWEIGHT ranking factor</strong> - content quality, relevance, and backlinks
              still dominate. Think of CWV as a tie-breaker: if two pages are equally relevant, the faster one wins.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* The Three Core Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-purple-600" />
            The Three Core Metrics
          </CardTitle>
          <CardDescription>
            Learn what each metric measures and how to interpret the scores
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* LCP */}
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    LCP - Largest Contentful Paint
                  </CardTitle>
                  <CardDescription className="mt-1">
                    Loading Performance
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-slate-700">
                <strong>Definition:</strong> Time until the largest visible element (image, video, or text block) loads
              </div>

              {/* Scoring Thresholds */}
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-white p-2 rounded border border-green-300">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-600 text-[10px]">Good</Badge>
                    <span className="text-xs">&lt; 2.5 seconds</span>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex items-center justify-between bg-white p-2 rounded border border-amber-300">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-amber-600 text-[10px]">Needs Work</Badge>
                    <span className="text-xs">2.5 - 4.0 seconds</span>
                  </div>
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                </div>
                <div className="flex items-center justify-between bg-white p-2 rounded border border-red-300">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-red-600 text-[10px]">Poor</Badge>
                    <span className="text-xs">&gt; 4.0 seconds</span>
                  </div>
                  <XCircle className="h-4 w-4 text-red-600" />
                </div>
              </div>

              <div className="bg-white border border-green-200 p-3 rounded text-xs">
                <div className="font-semibold mb-1">Common Causes:</div>
                <ul className="space-y-1 text-slate-700">
                  <li>• Large unoptimized images (biggest culprit)</li>
                  <li>• Slow server response time (TTFB)</li>
                  <li>• Render-blocking CSS/JavaScript</li>
                  <li>• Client-side rendering delays</li>
                </ul>
              </div>

              <Alert className="border-green-300 bg-green-100">
                <Eye className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  <strong>User Impact:</strong> &quot;When can I see the main content?&quot; - LCP directly affects
                  perceived load time and whether users wait or bounce.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* CLS */}
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5 text-blue-600" />
                    CLS - Cumulative Layout Shift
                  </CardTitle>
                  <CardDescription className="mt-1">
                    Visual Stability
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-slate-700">
                <strong>Definition:</strong> How much content jumps around while loading (measured as a score, not time)
              </div>

              {/* Scoring Thresholds */}
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-white p-2 rounded border border-green-300">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-600 text-[10px]">Good</Badge>
                    <span className="text-xs">&lt; 0.1</span>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex items-center justify-between bg-white p-2 rounded border border-amber-300">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-amber-600 text-[10px]">Needs Work</Badge>
                    <span className="text-xs">0.1 - 0.25</span>
                  </div>
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                </div>
                <div className="flex items-center justify-between bg-white p-2 rounded border border-red-300">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-red-600 text-[10px]">Poor</Badge>
                    <span className="text-xs">&gt; 0.25</span>
                  </div>
                  <XCircle className="h-4 w-4 text-red-600" />
                </div>
              </div>

              <div className="bg-white border border-blue-200 p-3 rounded text-xs">
                <div className="font-semibold mb-1">Common Causes:</div>
                <ul className="space-y-1 text-slate-700">
                  <li>• Images without width/height attributes</li>
                  <li>• Ads, embeds, iframes without reserved space</li>
                  <li>• Web fonts causing FOIT/FOUT (flash of invisible/unstyled text)</li>
                  <li>• Dynamic content injected above existing content</li>
                </ul>
              </div>

              <Alert className="border-blue-300 bg-blue-100">
                <MousePointer className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  <strong>User Impact:</strong> &quot;Did I accidentally click the wrong thing?&quot; - Layout shifts
                  cause misclicks and frustration, especially on mobile.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* INP */}
          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MousePointer className="h-5 w-5 text-purple-600" />
                    INP - Interaction to Next Paint
                  </CardTitle>
                  <CardDescription className="mt-1">
                    Responsiveness (replaced FID in March 2024)
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-slate-700">
                <strong>Definition:</strong> How fast the page responds to user interactions (clicks, taps, keyboard)
              </div>

              {/* Scoring Thresholds */}
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-white p-2 rounded border border-green-300">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-600 text-[10px]">Good</Badge>
                    <span className="text-xs">&lt; 200 milliseconds</span>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex items-center justify-between bg-white p-2 rounded border border-amber-300">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-amber-600 text-[10px]">Needs Work</Badge>
                    <span className="text-xs">200 - 500 milliseconds</span>
                  </div>
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                </div>
                <div className="flex items-center justify-between bg-white p-2 rounded border border-red-300">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-red-600 text-[10px]">Poor</Badge>
                    <span className="text-xs">&gt; 500 milliseconds</span>
                  </div>
                  <XCircle className="h-4 w-4 text-red-600" />
                </div>
              </div>

              <div className="bg-white border border-purple-200 p-3 rounded text-xs">
                <div className="font-semibold mb-1">Common Causes:</div>
                <ul className="space-y-1 text-slate-700">
                  <li>• Heavy JavaScript execution blocking main thread</li>
                  <li>• Long tasks (&gt;50ms) preventing responsiveness</li>
                  <li>• Large DOM size (1000+ nodes)</li>
                  <li>• Third-party scripts running on interaction</li>
                </ul>
              </div>

              <Alert className="border-purple-300 bg-purple-100">
                <Zap className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  <strong>User Impact:</strong> &quot;Why isn&apos;t the page responding?&quot; - Poor INP makes sites
                  feel sluggish and unresponsive, especially on lower-end devices.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Other Important Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-slate-600" />
            Other Important Metrics
          </CardTitle>
          <CardDescription>
            Secondary metrics that provide additional insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="border border-slate-200 p-3 rounded">
              <div className="font-semibold mb-1">TTFB - Time to First Byte</div>
              <div className="text-slate-600">
                Server response speed. Affects LCP. Good &lt; 800ms.
              </div>
            </div>
            <div className="border border-slate-200 p-3 rounded">
              <div className="font-semibold mb-1">FCP - First Contentful Paint</div>
              <div className="text-slate-600">
                When first content appears. Good &lt; 1.8s.
              </div>
            </div>
            <div className="border border-slate-200 p-3 rounded">
              <div className="font-semibold mb-1">Speed Index</div>
              <div className="text-slate-600">
                How quickly content is visually displayed. Good &lt; 3.4s.
              </div>
            </div>
            <div className="border border-slate-200 p-3 rounded">
              <div className="font-semibold mb-1">Total Blocking Time</div>
              <div className="text-slate-600">
                How long page is unresponsive. Good &lt; 200ms.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mobile vs Desktop */}
      <Card className="border-2 border-orange-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-orange-600" />
            Mobile vs Desktop: Why Mobile Matters Most
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-orange-50 border border-orange-200 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Smartphone className="h-4 w-4 text-orange-600" />
                <h4 className="font-semibold text-sm">Mobile Performance</h4>
              </div>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Google primarily uses mobile scores for ranking</li>
                <li>• Typically 2-3x worse than desktop</li>
                <li>• Tested on 4G connection (not 5G or WiFi)</li>
                <li>• Lower-powered devices (mid-range phones)</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Monitor className="h-4 w-4 text-slate-600" />
                <h4 className="font-semibold text-sm">Desktop Performance</h4>
              </div>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Usually easier to optimize</li>
                <li>• Less impact on SEO rankings</li>
                <li>• Still matters for user experience</li>
                <li>• Don&apos;t ignore it, just prioritize mobile</li>
              </ul>
            </div>
          </div>

          <Alert className="border-orange-300 bg-orange-50">
            <Target className="h-4 w-4" />
            <AlertDescription className="text-xs">
              <strong>Priority:</strong> Focus on mobile first - it&apos;s what Google judges you on. Once mobile
              scores are good (70+), then optimize desktop if needed.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

