'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Zap, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Info, 
  Clock,
  Gauge,
  Eye,
  MousePointer,
  Image as ImageIcon,
  Type,
  Sparkles,
  TrendingUp,
  Activity,
  Smartphone,
  Monitor,
  Target,
  Wrench,
  BarChart3
} from 'lucide-react';

export default function CoreWebVitalsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="h-10 w-10 text-yellow-600" />
            <h1 className="text-4xl font-bold">Core Web Vitals & Performance</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Make your site fast enough to rank and convert visitors
          </p>
          <Alert className="border-yellow-300 bg-yellow-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Reality Check:</strong> Performance is a lightweight ranking factor. Focus on content quality first, 
              then optimize performance to avoid penalties and improve user experience. You don&apos;t need a perfect 100 score to rank well.
            </AlertDescription>
          </Alert>
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="understanding" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="understanding">Understanding</TabsTrigger>
            <TabsTrigger value="quick-wins">Quick Wins</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
            <TabsTrigger value="measuring">Measuring</TabsTrigger>
          </TabsList>

          {/* Tab 1: Understanding Core Web Vitals */}
          <TabsContent value="understanding" className="space-y-6">
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
          </TabsContent>

          {/* Tab 2: Quick Wins */}
          <TabsContent value="quick-wins" className="space-y-6">
            <div className="space-y-6">
              {/* Impact/Effort Matrix */}
              <Card className="border-2 border-green-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    Impact vs Effort: What to Do First
                  </CardTitle>
                  <CardDescription>
                    Prioritize optimizations by return on investment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-green-300 bg-green-50">
                    <TrendingUp className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      <strong>Start Here:</strong> These high-impact, low-effort optimizations can improve your scores 
                      by 20-40 points with minimal development time.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="bg-green-50 border-2 border-green-300 p-4 rounded">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-green-600">High Impact, Low Effort</Badge>
                        <span className="text-xs text-green-800 font-semibold">DO THESE FIRST</span>
                      </div>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>✓ Image optimization (compress, WebP, responsive sizes)</li>
                        <li>✓ Font optimization (font-display: swap, subset fonts)</li>
                        <li>✓ Remove render-blocking CSS/JS</li>
                        <li>✓ Enable compression (gzip/brotli)</li>
                        <li>✓ Set explicit dimensions on images/ads</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 p-4 rounded">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-amber-600">High Impact, Medium Effort</Badge>
                      </div>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Lazy load images/videos below the fold</li>
                        <li>• Optimize third-party scripts (biggest win potential)</li>
                        <li>• Critical CSS inlining</li>
                        <li>• CDN implementation</li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-4 rounded">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-slate-600">Lower Priority</Badge>
                        <span className="text-xs text-slate-600">Do after basics</span>
                      </div>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Code splitting</li>
                        <li>• Service workers</li>
                        <li>• Advanced caching strategies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Image Optimization */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-blue-600" />
                    Image Optimization (Affects LCP & CLS)
                  </CardTitle>
                  <CardDescription>
                    The #1 performance improvement for most sites
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-blue-600" />
                        <h4 className="font-semibold">Impact Potential</h4>
                      </div>
                      <Badge className="bg-blue-600">40-60% LCP improvement</Badge>
                    </div>
                    <p className="text-xs text-slate-700">
                      Images are the #1 cause of slow LCP. Optimizing them can cut load time in half.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                      <h4 className="font-semibold text-sm mb-2">1. Compress Images</h4>
                      <p className="text-xs text-slate-700 mb-2">
                        Reduce file size without visible quality loss
                      </p>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• Tools: TinyPNG, Squoosh, ImageOptim</li>
                        <li>• Target: 100KB or less for hero images</li>
                        <li>• JPEG quality: 80-85 is usually enough</li>
                        <li>• Use build tools to automate (Next.js Image, Cloudflare Images)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                      <h4 className="font-semibold text-sm mb-2">2. Use Modern Formats (WebP/AVIF)</h4>
                      <p className="text-xs text-slate-700 mb-2">
                        30-50% smaller file sizes than JPEG/PNG
                      </p>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• WebP: Widely supported (97% of browsers)</li>
                        <li>• AVIF: Even better compression, growing support</li>
                        <li>• Provide fallbacks for older browsers</li>
                        <li>• Most CDNs convert automatically</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                      <h4 className="font-semibold text-sm mb-2">3. Specify Width/Height Attributes</h4>
                      <p className="text-xs text-slate-700 mb-2">
                        Prevents layout shift (CLS) by reserving space
                      </p>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• Browser calculates aspect ratio before image loads</li>
                        <li>• Reserves exact space needed</li>
                        <li>• <strong>Impact:</strong> Can reduce CLS to nearly 0</li>
                        <li>• <strong>Effort:</strong> Very low - just add attributes to img tags</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                      <h4 className="font-semibold text-sm mb-2">4. Responsive Images</h4>
                      <p className="text-xs text-slate-700 mb-2">
                        Serve appropriate size for each device
                      </p>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• Mobile doesn&apos;t need 4K images</li>
                        <li>• Serve 320px wide for mobile, 1920px for desktop</li>
                        <li>• Use srcset or picture element</li>
                        <li>• Most frameworks handle this automatically</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                      <h4 className="font-semibold text-sm mb-2">5. Lazy Load Below-the-Fold</h4>
                      <p className="text-xs text-slate-700 mb-2">
                        Only load images when user scrolls to them
                      </p>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• Native lazy loading: loading=&quot;lazy&quot; attribute</li>
                        <li>• Don&apos;t lazy load hero image (hurts LCP!)</li>
                        <li>• Lazy load everything below the fold</li>
                        <li>• Improves initial page load significantly</li>
                      </ul>
                    </div>
                  </div>

                  <Alert className="border-green-300 bg-green-50">
                    <CheckCircle2 className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      <strong>Quick Win:</strong> Compress your hero image alone. This single action often improves 
                      LCP by 1-2 seconds with zero code changes.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Font Optimization */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Type className="h-5 w-5 text-purple-600" />
                    Font Optimization (Affects LCP & CLS)
                  </CardTitle>
                  <CardDescription>
                    Prevent invisible text and layout shifts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-purple-50 border border-purple-200 p-4 rounded">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-purple-600" />
                        <h4 className="font-semibold">Impact Potential</h4>
                      </div>
                      <Badge className="bg-purple-600">0.5-1s LCP, 0.05-0.15 CLS</Badge>
                    </div>
                    <p className="text-xs text-slate-700">
                      Web fonts can block text rendering and cause layout shifts when they finally load.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                      <h4 className="font-semibold text-sm mb-2">1. Use font-display: swap</h4>
                      <p className="text-xs text-slate-700 mb-2">
                        Show fallback font immediately, swap when custom font loads
                      </p>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• Prevents FOIT (Flash of Invisible Text)</li>
                        <li>• Text visible immediately using system font</li>
                        <li>• Swaps to custom font when available</li>
                        <li>• Tiny CLS acceptable vs invisible text</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                      <h4 className="font-semibold text-sm mb-2">2. Limit Font Variations</h4>
                      <p className="text-xs text-slate-700 mb-2">
                        Each weight/style is a separate file to download
                      </p>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• Don&apos;t load 10 weights if you only use 2-3</li>
                        <li>• Regular (400) + Bold (700) covers most use cases</li>
                        <li>• Consider variable fonts (one file, all weights)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                      <h4 className="font-semibold text-sm mb-2">3. Subset Fonts</h4>
                      <p className="text-xs text-slate-700 mb-2">
                        Only include characters you actually use
                      </p>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• English sites don&apos;t need Cyrillic characters</li>
                        <li>• Can reduce font file size by 70-80%</li>
                        <li>• Google Fonts does this automatically</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                      <h4 className="font-semibold text-sm mb-2">4. Use System Fonts as Fallbacks</h4>
                      <p className="text-xs text-slate-700 mb-2">
                        Match fallback font metrics to reduce layout shift
                      </p>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• Choose fallbacks with similar x-height and width</li>
                        <li>• Tools: Font style matcher, fallback font generator</li>
                        <li>• Reduces CLS when font swaps in</li>
                      </ul>
                    </div>
                  </div>

                  <Alert className="border-purple-300 bg-purple-50">
                    <Info className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      <strong>Easiest Win:</strong> Add font-display: swap to your CSS. One line of code that makes 
                      text instantly visible instead of invisible while fonts load.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Remove Render-Blocking Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-600" />
                    Remove Render-Blocking Resources (Affects LCP)
                  </CardTitle>
                  <CardDescription>
                    Let the browser show content faster
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-yellow-600" />
                        <h4 className="font-semibold">Impact Potential</h4>
                      </div>
                      <Badge className="bg-yellow-600">0.5-2s LCP improvement</Badge>
                    </div>
                    <p className="text-xs text-slate-700">
                      CSS and JavaScript files that block the browser from rendering content until they load.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="border-l-4 border-l-yellow-500 bg-yellow-50 p-3">
                      <h4 className="font-semibold text-sm mb-2">Defer Non-Critical JavaScript</h4>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• Load analytics, chat widgets, social buttons after page renders</li>
                        <li>• Use defer or async attributes</li>
                        <li>• Move scripts to bottom of page</li>
                        <li>• Only critical JS should block rendering</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-l-yellow-500 bg-yellow-50 p-3">
                      <h4 className="font-semibold text-sm mb-2">Inline Critical CSS</h4>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• CSS needed for above-the-fold content</li>
                        <li>• Embed directly in HTML (no separate request)</li>
                        <li>• Load rest of CSS asynchronously</li>
                        <li>• Build tools can automate this</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-l-yellow-500 bg-yellow-50 p-3">
                      <h4 className="font-semibold text-sm mb-2">Remove Unused CSS</h4>
                      <ul className="text-xs text-slate-700 space-y-1">
                        <li>• Most sites load CSS they never use</li>
                        <li>• Tools: PurgeCSS, UnCSS</li>
                        <li>• Can reduce CSS by 70-90%</li>
                        <li>• Faster download = faster render</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Win Checklist */}
              <Card className="border-2 border-green-300 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Quick Win Checklist
                  </CardTitle>
                  <CardDescription>
                    Action items you can complete in one day
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Compress all images (use TinyPNG or build tools)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Add width/height to all images</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Add font-display: swap to all fonts</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Defer non-critical JavaScript</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Enable compression on server (gzip/brotli)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Lazy load below-the-fold content</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 3: Advanced Optimizations */}
          <TabsContent value="advanced" className="space-y-6">
            <div className="space-y-6">
              {/* When to Pursue Advanced */}
              <Alert className="border-amber-300 bg-amber-50">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Only pursue these AFTER implementing quick wins.</strong> You should have scores above 70 
                  before worrying about advanced techniques. Going from 90→95 often requires 10x the effort of 50→90.
                </AlertDescription>
              </Alert>

              {/* Continued in next message due to length... */}
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
          </TabsContent>

          {/* Tab 4: Measuring & Monitoring */}
          <TabsContent value="measuring" className="space-y-6">
            <div className="space-y-6">
              {/* Lab Data vs Field Data */}
              <Card className="border-2 border-purple-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                    Lab Data vs Field Data: Critical Distinction
                  </CardTitle>
                  <CardDescription>
                    Understanding the difference determines how you test and what Google uses
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-2 border-blue-300 bg-blue-50 p-4 rounded">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Activity className="h-4 w-4 text-blue-600" />
                        Lab Data (Synthetic)
                      </h4>
                      <ul className="text-xs text-slate-700 space-y-2 mb-3">
                        <li>• Simulated, controlled environment</li>
                        <li>• Reproducible and consistent</li>
                        <li>• Good for debugging</li>
                        <li>• May not reflect real users</li>
                      </ul>
                      <div className="text-xs bg-white border border-blue-200 p-2 rounded">
                        <strong>Tools:</strong> Lighthouse, PageSpeed Insights (Lab), Chrome DevTools
                      </div>
                      <div className="mt-2 text-xs bg-blue-100 border border-blue-300 p-2 rounded">
                        <strong>Use for:</strong> Finding issues, comparing changes before/after
                      </div>
                    </div>

                    <div className="border-2 border-green-300 bg-green-50 p-4 rounded">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-green-600" />
                        Field Data (Real User Monitoring)
                      </h4>
                      <ul className="text-xs text-slate-700 space-y-2 mb-3">
                        <li>• Real user data from Chrome</li>
                        <li>• Actual user experience</li>
                        <li>• Takes 28 days to accumulate</li>
                        <li>• What Google uses for ranking</li>
                      </ul>
                      <div className="text-xs bg-white border border-green-200 p-2 rounded">
                        <strong>Tools:</strong> Chrome UX Report (CrUX), Search Console, PageSpeed Insights (Field)
                      </div>
                      <div className="mt-2 text-xs bg-green-100 border border-green-300 p-2 rounded">
                        <strong>Use for:</strong> Understanding real performance, SEO impact
                      </div>
                    </div>
                  </div>

                  <Alert className="border-green-300 bg-green-50">
                    <Target className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      <strong>Key Point:</strong> Google ranks you based on Field Data (real users), not Lab Data (simulated tests). 
                      Improve Lab scores to predict Field improvements, but monitor Field data for actual SEO impact.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Essential Tools */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-indigo-600" />
                    Essential Tools
                  </CardTitle>
                  <CardDescription>
                    Free tools for measuring Core Web Vitals
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="border-l-4 border-l-blue-500 bg-blue-50 p-4 rounded">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Google PageSpeed Insights</h4>
                      <Badge className="bg-blue-600">Essential</Badge>
                    </div>
                    <p className="text-xs text-slate-700 mb-2">
                      Shows both Lab and Field data in one place with specific recommendations
                    </p>
                    <div className="text-xs space-y-1">
                      <div>• <strong>URL:</strong> pagespeed.web.dev</div>
                      <div>• <strong>Shows:</strong> Mobile & Desktop scores, Field data (if available)</div>
                      <div>• <strong>Use for:</strong> Quick checks, identifying issues, getting recommendations</div>
                    </div>
                  </div>

                  <div className="border-l-4 border-l-green-500 bg-green-50 p-4 rounded">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Google Search Console</h4>
                      <Badge className="bg-green-600">Essential</Badge>
                    </div>
                    <p className="text-xs text-slate-700 mb-2">
                      &quot;Core Web Vitals&quot; report shows Field data for your entire site
                    </p>
                    <div className="text-xs space-y-1">
                      <div>• Groups URLs by performance (Good/Needs Improvement/Poor)</div>
                      <div>• Shows which pages need fixing most</div>
                      <div>• <strong>Use for:</strong> Monitoring SEO impact, prioritizing pages</div>
                    </div>
                  </div>

                  <div className="border-l-4 border-l-purple-500 bg-purple-50 p-4 rounded">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Chrome DevTools (Lighthouse)</h4>
                      <Badge className="bg-purple-600">For Developers</Badge>
                    </div>
                    <p className="text-xs text-slate-700 mb-2">
                      Built into Chrome browser for local testing
                    </p>
                    <div className="text-xs space-y-1">
                      <div>• Run performance audits locally</div>
                      <div>• See detailed performance timeline</div>
                      <div>• <strong>Use for:</strong> Deep debugging, testing before deploying</div>
                    </div>
                  </div>

                  <div className="border-l-4 border-l-amber-500 bg-amber-50 p-4 rounded">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">WebPageTest</h4>
                      <Badge className="bg-amber-600">Advanced</Badge>
                    </div>
                    <p className="text-xs text-slate-700 mb-2">
                      Free, advanced testing from multiple locations and devices
                    </p>
                    <div className="text-xs space-y-1">
                      <div>• <strong>URL:</strong> webpagetest.org</div>
                      <div>• Waterfall charts, filmstrip view, connection throttling</div>
                      <div>• <strong>Use for:</strong> Advanced analysis, simulating different connections</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* How to Test Properly */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    How to Test Properly
                  </CardTitle>
                  <CardDescription>
                    Testing methodology matters as much as the tools
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Test on Real Mobile Devices</strong> - Not just desktop DevTools mobile mode. Real phones have different performance.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Throttle Connection</strong> - Test on 4G, not WiFi. Google tests on 4G, so should you.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Test in Incognito Mode</strong> - Avoids cache and browser extensions affecting results.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Test Multiple Times</strong> - Scores vary run to run. Take average of 3-5 runs.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Test Your Slowest Pages First</strong> - Homepage, product pages, category pages get the most traffic.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Always Baseline Before Optimizing</strong> - Know your starting point so you can measure improvement.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Understanding Scores */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gauge className="h-5 w-5 text-purple-600" />
                    Understanding Scores
                  </CardTitle>
                  <CardDescription>
                    What the numbers actually mean
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded">
                    <h4 className="font-semibold mb-2">Lighthouse Score Weighting</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>INP (Interaction to Next Paint)</span>
                        <Badge>30%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>LCP (Largest Contentful Paint)</span>
                        <Badge>25%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>CLS (Cumulative Layout Shift)</span>
                        <Badge>25%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>FCP (First Contentful Paint)</span>
                        <Badge>10%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Speed Index</span>
                        <Badge>10%</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-green-50 border-2 border-green-300 p-3 rounded text-center">
                      <div className="text-2xl font-bold text-green-700">90-100</div>
                      <div className="text-xs font-semibold">Excellent (Green)</div>
                      <div className="text-xs text-slate-600 mt-1">Top 10% of sites</div>
                    </div>
                    <div className="bg-amber-50 border-2 border-amber-300 p-3 rounded text-center">
                      <div className="text-2xl font-bold text-amber-700">50-89</div>
                      <div className="text-xs font-semibold">Needs Improvement (Yellow)</div>
                      <div className="text-xs text-slate-600 mt-1">Most sites are here</div>
                    </div>
                    <div className="bg-red-50 border-2 border-red-300 p-3 rounded text-center">
                      <div className="text-2xl font-bold text-red-700">0-49</div>
                      <div className="text-xs font-semibold">Poor (Red)</div>
                      <div className="text-xs text-slate-600 mt-1">Needs urgent attention</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                    <h4 className="font-semibold mb-2 text-sm">Reality Check</h4>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• Most sites score 30-60 on mobile (you&apos;re not alone!)</li>
                      <li>• 70+ is already better than average</li>
                      <li>• 90+ puts you in top 10%</li>
                      <li>• 100 is nearly impossible for real sites with tracking/ads</li>
                    </ul>
                  </div>

                  <Alert className="border-amber-300 bg-amber-50">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      <strong>Don&apos;t obsess over perfect 100.</strong> Focus on getting out of &quot;Poor&quot; range first (50+), 
                      then aim for &quot;Good&quot; (70+). The effort to go from 95→100 is rarely worth the minimal benefit.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Monitoring Strategy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-green-600" />
                    Monitoring Strategy
                  </CardTitle>
                  <CardDescription>
                    Tracking improvements over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                      <h4 className="font-semibold text-sm mb-1">Set Benchmarks</h4>
                      <p className="text-xs text-slate-700">
                        Record current scores before making changes. You need a baseline to measure improvement.
                      </p>
                    </div>

                    <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                      <h4 className="font-semibold text-sm mb-1">Track Weekly, Not Daily</h4>
                      <p className="text-xs text-slate-700">
                        Scores fluctuate. Monitor trends over weeks, not individual scores. Field data updates every 28 days.
                      </p>
                    </div>

                    <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                      <h4 className="font-semibold text-sm mb-1">Focus on Field Data</h4>
                      <p className="text-xs text-slate-700">
                        Lab scores don&apos;t affect SEO - Field data does. Use Search Console for real-world performance.
                      </p>
                    </div>

                    <div className="border-l-4 border-l-amber-500 bg-amber-50 p-3">
                      <h4 className="font-semibold text-sm mb-1">Prioritize by Traffic</h4>
                      <p className="text-xs text-slate-700">
                        Fix high-traffic pages first. A 10-point improvement on homepage beats 20 points on a page with no visitors.
                      </p>
                    </div>

                    <div className="border-l-4 border-l-indigo-500 bg-indigo-50 p-3">
                      <h4 className="font-semibold text-sm mb-1">Set Realistic Goals</h4>
                      <p className="text-xs text-slate-700">
                        Aim for 50→75 in 1 month, not 50→95. Incremental progress is sustainable; perfection isn&apos;t.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Common Measurement Mistakes */}
              <Card className="border-2 border-red-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-600" />
                    Common Measurement Mistakes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Only testing on fast WiFi/desktop</strong> - Test on 4G mobile. That&apos;s what Google uses.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Only testing homepage</strong> - Product pages and category pages matter too. Test your top 10 pages.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Ignoring Field Data</strong> - Lab scores are for debugging. Field data is what Google ranks you on.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Not testing after deployments</strong> - Always test after major changes. Optimizations can break.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Comparing Lab scores to Field scores</strong> - Apples to oranges. Lab is simulated, Field is real users.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

