import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import {
  Target,
  TrendingUp,
  Image as ImageIcon,
  Type,
  Zap,
  CheckCircle2,
  Sparkles,
  Info,
} from 'lucide-react';

export default function QuickWinsTab() {
  return (
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
  );
}

