import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { RobotsPreview } from '@/components/playground/RobotsPreview';
import { RobotsTester } from '@/components/playground/RobotsTester';
import {
  Eye,
  TestTube,
  Info,
  Sparkles,
  Code,
} from 'lucide-react';

export default function LiveToolsTab() {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <Alert className="border-indigo-300 bg-indigo-50">
        <Sparkles className="h-4 w-4" />
        <AlertDescription className="text-sm">
          <strong>Interactive Tools:</strong> This page shows your site&apos;s actual robots.txt file and lets you test 
          how different URLs are handled. These tools help you understand and debug your crawl control configuration.
        </AlertDescription>
      </Alert>

      {/* Live robots.txt Preview */}
      <div className="space-y-3">
        <Card className="border-2 border-blue-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-blue-600" />
              Live robots.txt Preview
            </CardTitle>
            <CardDescription>
              Your site&apos;s current robots.txt file with pattern explanations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-xs text-slate-700 space-y-2">
              <p>
                This is the <strong>live-generated robots.txt</strong> file that search engines see when they visit your site. 
                It&apos;s dynamically created based on your parameter configuration and URL patterns.
              </p>
              <div className="bg-blue-50 border border-blue-200 p-3 rounded">
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <Info className="h-4 w-4 text-blue-600" />
                  What You&apos;re Seeing
                </h4>
                <ul className="space-y-1 text-slate-700">
                  <li>• <strong>Disallow rules</strong> for each parameter policy defined in your config</li>
                  <li>• <strong>Pattern explanations</strong> showing what each rule does</li>
                  <li>• <strong>Sitemap reference</strong> pointing to your XML sitemap</li>
                  <li>• <strong>Comments</strong> documenting the purpose of each section</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The actual preview component */}
        <RobotsPreview />
      </div>

      {/* URL Tester */}
      <div className="space-y-3">
        <Card className="border-2 border-green-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TestTube className="h-5 w-5 text-green-600" />
              Interactive URL Tester
            </CardTitle>
            <CardDescription>
              Test how specific URLs are handled by your robots.txt rules
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-xs text-slate-700 space-y-2">
              <p>
                Enter any URL to see whether it would be <strong>allowed</strong> or <strong>blocked</strong> by your current 
                robots.txt configuration. This helps you verify that important pages aren&apos;t accidentally blocked.
              </p>
              <div className="bg-green-50 border border-green-200 p-3 rounded">
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <TestTube className="h-4 w-4 text-green-600" />
                  How to Use
                </h4>
                <div className="space-y-2">
                  <div>
                    <strong>1. Enter a URL path</strong> (e.g., /shop/shoes?color=red&sort=price)
                  </div>
                  <div>
                    <strong>2. See the result:</strong> 
                    <ul className="ml-4 mt-1 space-y-0.5">
                      <li>• <span className="text-green-700 font-semibold">Allowed</span> - Crawlers can access this URL</li>
                      <li>• <span className="text-red-700 font-semibold">Blocked</span> - Crawlers are prevented from accessing</li>
                    </ul>
                  </div>
                  <div>
                    <strong>3. See which rule matched</strong> - The specific robots.txt directive that applies
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-3 rounded">
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <Code className="h-4 w-4 text-amber-600" />
                  Test These Examples
                </h4>
                <div className="space-y-2 text-slate-700">
                  <div><strong>Should be allowed:</strong></div>
                  <ul className="ml-4 space-y-0.5 font-mono text-[10px]">
                    <li>• /shop/shoes</li>
                    <li>• /shop/t-shirts/categories</li>
                    <li>• /technical-seo/robots</li>
                  </ul>
                  <div className="mt-2"><strong>Should be blocked:</strong></div>
                  <ul className="ml-4 space-y-0.5 font-mono text-[10px]">
                    <li>• /shop/shoes?sort=price</li>
                    <li>• /shop/shoes?color=red&size=large</li>
                    <li>• /shop/shoes?page=5</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The actual tester component */}
        <RobotsTester />
      </div>

      {/* Understanding the Results */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-purple-600" />
            Understanding the Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-3">
              <div className="bg-white border border-green-200 rounded p-3">
                <h4 className="font-semibold text-green-700 mb-2">✓ When URLs Are Allowed</h4>
                <ul className="space-y-1 text-slate-700">
                  <li>• Search engines can crawl the page</li>
                  <li>• Content can be discovered and indexed</li>
                  <li>• Counts toward crawl budget usage</li>
                  <li>• Can still use noindex to prevent indexing</li>
                </ul>
              </div>

              <div className="bg-white border border-purple-200 rounded p-3">
                <h4 className="font-semibold text-purple-700 mb-2">Rule Priority</h4>
                <ul className="space-y-1 text-slate-700">
                  <li>• Most specific rule wins</li>
                  <li>• Allow can override Disallow</li>
                  <li>• /admin/public/ beats /admin/</li>
                  <li>• Test to verify behavior</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white border border-red-200 rounded p-3">
                <h4 className="font-semibold text-red-700 mb-2">✗ When URLs Are Blocked</h4>
                <ul className="space-y-1 text-slate-700">
                  <li>• Search engines won&apos;t crawl the page</li>
                  <li>• Saves crawl budget for important pages</li>
                  <li>• Does NOT prevent indexing (use noindex)</li>
                  <li>• Can still appear in results via external links</li>
                </ul>
              </div>

              <div className="bg-white border border-amber-200 rounded p-3">
                <h4 className="font-semibold text-amber-700 mb-2">Common Gotchas</h4>
                <ul className="space-y-1 text-slate-700">
                  <li>• Case-sensitive URL paths</li>
                  <li>• Trailing slashes matter</li>
                  <li>• Query params order doesn&apos;t matter</li>
                  <li>• Rules cached for ~24 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Production Deployment */}
      <Alert className="border-blue-300 bg-blue-50">
        <Info className="h-4 w-4" />
        <AlertDescription className="text-xs">
          <strong>Production Deployment:</strong> These tools show your <em>configured</em> robots.txt. In production, 
          your actual robots.txt is served at <code className="bg-blue-100 px-1 rounded">/robots.txt</code> and read 
          by search engines. Test changes thoroughly before deploying to avoid accidentally blocking important pages!
        </AlertDescription>
      </Alert>
    </div>
  );
}

