import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import {
  BarChart3,
  Activity,
  Eye,
  Target,
  Wrench,
  Gauge,
  CheckCircle2,
  XCircle,
  AlertTriangle,
} from 'lucide-react';

export default function MeasuringTab() {
  return (
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
  );
}

