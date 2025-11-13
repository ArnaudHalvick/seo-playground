import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { SitemapTable } from '@/components/playground/SitemapTable';
import { useConfig } from '@/lib/config/provider';
import {
  Eye,
  Info,
  Sparkles,
  CheckCircle2,
  XCircle,
  BarChart3,
  FileText,
} from 'lucide-react';

export default function LiveViewerTab() {
  const { config } = useConfig();

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <Alert className="border-indigo-300 bg-indigo-50">
        <Sparkles className="h-4 w-4" />
        <AlertDescription className="text-sm">
          <strong>Live Sitemap Viewer:</strong> This shows all URLs currently included in your site&apos;s XML sitemap 
          based on your indexability rules and parameter configuration. These are the pages you&apos;re telling search 
          engines to prioritize for indexing.
        </AlertDescription>
      </Alert>

      {/* What You're Seeing */}
      <Card className="border-2 border-blue-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-blue-600" />
            What This Sitemap Shows
          </CardTitle>
          <CardDescription>
            Understanding the URL selection and indexability logic
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-xs text-slate-700 space-y-3">
            <p>
              This sitemap is <strong>dynamically generated</strong> based on your site&apos;s parameter configuration. 
              It demonstrates intelligent URL selection—only including pages that should be indexed while excluding 
              duplicate content, filtered URLs, and pagination.
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 p-3 rounded">
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Included in Sitemap
                </h4>
                <ul className="space-y-1 text-slate-700">
                  <li>• Base category pages (no parameters)</li>
                  <li>• Individual product/content pages</li>
                  <li>• Pages marked as indexable in config</li>
                  <li>• Canonical versions only</li>
                  <li>• Static pages (home, about, etc.)</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 p-3 rounded">
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-red-600" />
                  Excluded from Sitemap
                </h4>
                <ul className="space-y-1 text-slate-700">
                  <li>• Filtered URLs (?color=, ?size=)</li>
                  <li>• Sorted URLs (?sort=price)</li>
                  <li>• Paginated pages (?page=2+)</li>
                  <li>• Search results (?q=...)</li>
                  <li>• URLs blocked in robots.txt</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-3 rounded">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Info className="h-4 w-4 text-blue-600" />
                How URLs Are Selected
              </h4>
              <div className="space-y-2 text-slate-700">
                <div className="flex items-start gap-2">
                  <div className="bg-blue-100 rounded-full px-2 py-0.5 text-[10px] font-bold text-blue-700 flex-shrink-0">1</div>
                  <span>System queries all available pages/routes</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-blue-100 rounded-full px-2 py-0.5 text-[10px] font-bold text-blue-700 flex-shrink-0">2</div>
                  <span>Applies parameter policy rules (block, noindex, ignore)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-blue-100 rounded-full px-2 py-0.5 text-[10px] font-bold text-blue-700 flex-shrink-0">3</div>
                  <span>Filters out URLs with blocking parameters</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-blue-100 rounded-full px-2 py-0.5 text-[10px] font-bold text-blue-700 flex-shrink-0">4</div>
                  <span>Generates final XML with only indexable URLs</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Actual Table */}
      <div className="space-y-3">
        <Card className="border-2 border-green-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-green-600" />
              Your Site&apos;s URLs in Sitemap
            </CardTitle>
            <CardDescription>
              All URLs currently included in your XML sitemap
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-slate-700 mb-4">
              <p className="mb-2">
                The table below shows each URL in your sitemap along with its last modification date and change frequency. 
                In production, this data would come from your database with actual timestamps.
              </p>
              <div className="bg-amber-50 border border-amber-200 p-2 rounded">
                <strong>Note:</strong> This is a demonstration. In a real application, URLs would be dynamically 
                generated from your content database, and modification dates would reflect actual content changes.
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The actual component */}
        <SitemapTable config={config} />
      </div>

      {/* Interpreting the Data */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-purple-600" />
            Interpreting Your Sitemap Data
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-3">
              <div className="bg-white border border-purple-200 rounded p-3">
                <h4 className="font-semibold text-purple-700 mb-2">URL Count</h4>
                <p className="text-slate-700">
                  The total number of URLs should represent your <strong>indexable content</strong>. If the number 
                  seems too high, you may be including duplicate or low-value pages. If too low, important pages 
                  might be missing.
                </p>
              </div>

              <div className="bg-white border border-purple-200 rounded p-3">
                <h4 className="font-semibold text-purple-700 mb-2">URL Patterns</h4>
                <p className="text-slate-700">
                  Look for consistent patterns. All URLs should be clean canonical versions without duplicate 
                  parameters. No pagination (?page=2), no filters (?color=red), no sorting (?sort=price).
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white border border-purple-200 rounded p-3">
                <h4 className="font-semibold text-purple-700 mb-2">Last Modified Dates</h4>
                <p className="text-slate-700">
                  In a production sitemap, these dates should reflect actual content changes. Accurate dates help 
                  Google prioritize which pages to recrawl first after discovering your sitemap.
                </p>
              </div>

              <div className="bg-white border border-purple-200 rounded p-3">
                <h4 className="font-semibold text-purple-700 mb-2">Change Frequency</h4>
                <p className="text-slate-700">
                  This field is <strong>largely ignored</strong> by Google. It&apos;s included for demonstration 
                  purposes, but you can skip it entirely in real implementations. Focus on accurate lastmod dates instead.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="border-2 border-green-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-green-600" />
            Accessing Your Actual Sitemap
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-xs text-slate-700 space-y-2">
            <p>
              The actual XML sitemap that search engines crawl is available at the <code className="bg-slate-100 px-1 rounded">/sitemap.xml</code> route. 
              This viewer is a human-friendly representation of the same data.
            </p>
            
            <div className="bg-green-50 border border-green-200 p-3 rounded">
              <h4 className="font-semibold mb-2">To View Your XML Sitemap:</h4>
              <div className="space-y-1">
                <div>1. Navigate to: <code className="bg-white px-2 py-1 rounded">https://yourdomain.com/sitemap.xml</code></div>
                <div>2. Or use the API route: <code className="bg-white px-2 py-1 rounded">/api/sitemap</code></div>
                <div>3. Submit this URL to Google Search Console and Bing Webmaster Tools</div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-3 rounded">
              <h4 className="font-semibold mb-2">Quality Checks:</h4>
              <ul className="space-y-1 ml-4">
                <li>• Verify all URLs return 200 status codes</li>
                <li>• Ensure no URLs are blocked by robots.txt</li>
                <li>• Check that URLs are canonical versions (no duplicates)</li>
                <li>• Confirm no noindex pages are included</li>
                <li>• Test with Google&apos;s Rich Results Test for validation</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-3 rounded">
              <h4 className="font-semibold mb-2">Monitor in Google Search Console:</h4>
              <p className="mb-1">
                After submitting your sitemap, monitor its performance in GSC under <strong>Indexing → Sitemaps</strong>. 
                You should see:
              </p>
              <ul className="space-y-1 ml-4">
                <li>• Green checkmark indicating successful processing</li>
                <li>• Number of URLs discovered vs indexed</li>
                <li>• Any errors or warnings about URLs</li>
                <li>• Last read timestamp (should update regularly)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Educational Note */}
      <Alert className="border-indigo-300 bg-indigo-50">
        <Sparkles className="h-4 w-4" />
        <AlertDescription className="text-xs">
          <strong>Learning Point:</strong> This demonstration shows how strategic sitemap curation works. By excluding 
          low-value URL variations (filters, pagination, duplicates) and including only canonical pages, you create 
          a high-quality sitemap that helps Google efficiently index your most important content. In production, this 
          logic would be applied to thousands or millions of URLs.
        </AlertDescription>
      </Alert>
    </div>
  );
}

