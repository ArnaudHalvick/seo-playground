import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Metadata } from "next";
import { generateSimpleMetadata } from "@/lib/meta/metadata";
import { 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3, 
  ExternalLink,
  CheckCircle2,
  Lightbulb,
  Info
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return generateSimpleMetadata(
    "Strategic SEO Tools - Research & Analysis - SEO Workshop",
    "Essential non-programming SEO tools: keyword research, SERP analysis, competitive intelligence, rank tracking, and analytics platforms.",
    "/strategic-seo/strategic-tools/"
  );
}

export default function StrategicToolsPage() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Search className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold">Strategic SEO Tools</h1>
          </div>
          <p className="text-xl text-slate-700 leading-relaxed">
            Essential tools for keyword research, SERP analysis, competitive intelligence, and performance tracking.
            These tools power strategic SEO without requiring programming skills.
          </p>
        </div>

        {/* Philosophy */}
        <Card className="mb-8 border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-purple-600" />
              Tool Selection Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-slate-700">
              <p>
                <strong>Lean over comprehensive:</strong> A focused toolkit of 5-7 tools you actually use beats 
                20+ tools gathering dust. Choose tools that integrate well and export clean data.
              </p>
              <p>
                <strong>Adoption beats capability:</strong> The best tool is the one your team will consistently use. 
                Factor in learning curves, UI clarity, and workflow integration when selecting tools.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Keyword Research */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-8 w-8 text-purple-600" />
            <h2 className="text-2xl font-bold">Keyword Research</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">Ahrefs</CardTitle>
                <CardDescription>Enterprise keyword research & backlink analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Keyword Explorer: volume, difficulty, traffic potential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Content Gap: find keywords competitors rank for</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Site Explorer: backlink analysis and referring domains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Rank Tracker: monitor keyword positions over time</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600">
                  <strong>Best for:</strong> Comprehensive keyword research with traffic potential estimates
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">Semrush</CardTitle>
                <CardDescription>All-in-one competitive research platform</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Keyword Magic Tool: massive keyword database</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Domain Overview: competitor traffic analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Position Tracking: rank monitoring with SERP features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Topic Research: content ideation and trending topics</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600">
                  <strong>Best for:</strong> Competitive intelligence and broad market analysis
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">Google Keyword Planner</CardTitle>
                <CardDescription>Free baseline volume estimates from Google</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Direct data from Google Ads auction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Search volume ranges by location and language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Keyword expansion ideas based on seed keywords</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600">
                  <strong>Best for:</strong> Validating volumes from paid tools; budget-friendly starter option
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">LowFruits</CardTitle>
                <CardDescription>Low-competition keyword opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Finds "weak" SERPs with forum threads and Q&A sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Identify long-tail opportunities faster</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Great for newer sites building topical authority</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600">
                  <strong>Best for:</strong> Finding quick-win keywords with lower competition
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SERP Analysis */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Search className="h-8 w-8 text-purple-600" />
            <h2 className="text-2xl font-bold">SERP Analysis</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">Thruuu</CardTitle>
                <CardDescription>Batch SERP analysis with content pattern extraction</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Analyze top 10-30 SERP results in seconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Extract SERP features, PAA questions, content patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Build content briefs faster with competitor insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Export data for team collaboration</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600">
                  <strong>Best for:</strong> Efficient SERP research at scale for content briefs
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">AlsoAsked</CardTitle>
                <CardDescription>Visual "People Also Ask" mapping</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Maps PAA questions in tree/cluster format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Discover content angles and related queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Identify FAQ section opportunities</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600">
                  <strong>Best for:</strong> Understanding user intent and content angle variations
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">SEO Minion</CardTitle>
                <CardDescription>Browser extension for on-page analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Analyze on-page elements (titles, meta, headers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Check broken links and SERP preview</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Quick competitor page audits</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600">
                  <strong>Best for:</strong> Quick on-page audits and competitive research
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">AnswerThePublic</CardTitle>
                <CardDescription>Question-based keyword discovery</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Visualize questions people ask around a topic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Organize by question word (what, why, how, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Great for content ideation and FAQ sections</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600">
                  <strong>Best for:</strong> Content ideation and understanding user queries
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Analytics & Measurement */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="h-8 w-8 text-purple-600" />
            <h2 className="text-2xl font-bold">Analytics & Measurement</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">Google Search Console</CardTitle>
                <CardDescription>Official search performance data from Google</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Query performance: clicks, impressions, CTR, position</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Index coverage and technical issue alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Core Web Vitals and mobile usability reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Submit sitemaps and request URL indexing</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600">
                  <strong>Essential:</strong> Free, authoritative data directly from Google
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">Google Analytics 4</CardTitle>
                <CardDescription>User behavior and conversion tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Session data, engagement metrics, conversions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>User path analysis and behavior flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Landing page performance and exit tracking</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600">
                  <strong>Best for:</strong> Understanding what happens after users click from search
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">Looker Studio</CardTitle>
                <CardDescription>Custom dashboards combining multiple data sources</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Combine GSC, GA4, Sheets, and more</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Build custom KPI dashboards for stakeholders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Automated reporting with scheduled email delivery</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600">
                  <strong>Best for:</strong> Executive reporting and cross-platform insights
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">Screaming Frog / Sitebulb</CardTitle>
                <CardDescription>Technical SEO site audits (bridge to technical)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Crawl sites to find technical issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Identify broken links, redirect chains, duplicate content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Sitebulb offers visual reports for non-technical stakeholders</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-600">
                  <strong>Best for:</strong> Identifying technical issues to hand off to developers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Starter Stack Recommendation */}
        <Card className="mb-8 border-2 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900">Starter Stack Recommendation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-800 mb-4">
              If you're building your SEO toolkit from scratch, start with this lean, effective stack:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Research</h3>
                <p className="text-sm text-green-800">Ahrefs or Semrush (pick one)</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">SERP Modeling</h3>
                <p className="text-sm text-green-800">Thruuu + AlsoAsked</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Measurement</h3>
                <p className="text-sm text-green-800">GSC + GA4 → Looker Studio</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Total Monthly Cost</h3>
                <p className="text-sm text-green-800">~$150-350/month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pro Tips */}
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Info className="h-6 w-6" />
              Pro Tips for Tool Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                <div>
                  <strong>Export everything:</strong> Keep raw data in Google Sheets for historical comparisons and custom analysis
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                <div>
                  <strong>Combine tools:</strong> Use Ahrefs for traffic potential, Thruuu for content patterns, GSC for validation
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                <div>
                  <strong>Schedule regular audits:</strong> Monthly GSC reviews, quarterly tool stack reviews
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                <div>
                  <strong>Train your team:</strong> Tools are only as good as the people using them; invest in training
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

