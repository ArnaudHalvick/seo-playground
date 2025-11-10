import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Target, Database, BarChart2, Info, CheckCircle2, TrendingUp, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function FoundationsTab() {
  return (
    <div className="space-y-6">
      {/* KPI Tree & Targets */}
      <Card className="border-2 border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Target className="h-5 w-5" />
            KPI Tree & Targets
          </CardTitle>
          <CardDescription className="text-blue-800">
            Organize metrics in a hierarchy from business outcomes to page-level signals
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-300 bg-white">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Principle:</strong> Work backwards from business goals. Every SEO metric
              should ladder up to a real outcome (revenue, pipeline, leads, retention).
            </AlertDescription>
          </Alert>

          <div>
            <h4 className="font-semibold mb-3">The 4-Level Hierarchy</h4>
            <div className="space-y-3">
              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex-shrink-0 text-sm">
                      1
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold mb-1">Business Level</h5>
                      <p className="text-sm text-slate-700 mb-2">
                        The ultimate outcomes your organization cares about
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                          Revenue
                        </Badge>
                        <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                          Pipeline Value
                        </Badge>
                        <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                          Lead Quality
                        </Badge>
                        <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                          CAC (Customer Acquisition Cost)
                        </Badge>
                        <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                          ROI (Return on Investment)
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex-shrink-0 text-sm">
                      2
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold mb-1">Cluster Level</h5>
                      <p className="text-sm text-slate-700 mb-2">
                        Performance by semantic content cluster (topic groups)
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                          Impressions
                        </Badge>
                        <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                          Clicks
                        </Badge>
                        <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                          CTR (Click-Through Rate)
                        </Badge>
                        <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                          Average Position
                        </Badge>
                        <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                          Conversions/Assists
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold flex-shrink-0 text-sm">
                      3
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold mb-1">Template Level</h5>
                      <p className="text-sm text-slate-700 mb-2">
                        Performance by page type (which formats win for which intents?)
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-green-100 text-green-800 border-green-300">
                          Hub Pages
                        </Badge>
                        <Badge className="bg-green-100 text-green-800 border-green-300">
                          Comparison Pages
                        </Badge>
                        <Badge className="bg-green-100 text-green-800 border-green-300">
                          Checklist Pages
                        </Badge>
                        <Badge className="bg-green-100 text-green-800 border-green-300">
                          Location Pages
                        </Badge>
                        <Badge className="bg-green-100 text-green-800 border-green-300">
                          Product Pages
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 bg-amber-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex-shrink-0 text-sm">
                      4
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold mb-1">Page Level</h5>
                      <p className="text-sm text-slate-700 mb-2">
                        Supporting metrics for individual pages (diagnostic signals)
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-amber-100 text-amber-800 border-amber-300">
                          Scroll Depth
                        </Badge>
                        <Badge className="bg-amber-100 text-amber-800 border-amber-300">
                          Engagement Time
                        </Badge>
                        <Badge className="bg-amber-100 text-amber-800 border-amber-300">
                          Bounce Rate
                        </Badge>
                        <Badge className="bg-amber-100 text-amber-800 border-amber-300">
                          Internal Link Clicks
                        </Badge>
                        <Badge className="bg-amber-100 text-amber-800 border-amber-300">
                          CTA Clicks
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-white p-4 rounded border-2 border-blue-300">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              Setting Targets
            </h4>
            <p className="text-sm text-slate-700 mb-2">
              Tie quarterly OKRs (Objectives and Key Results) to cluster-level metrics:
            </p>
            <div className="bg-blue-50 p-3 rounded text-sm border border-blue-200">
              <p className="font-semibold mb-1">Example Target:</p>
              <p className="text-slate-700">
                &quot;Grow &apos;Project Management Tools&apos; cluster clicks +30% QoQ; achieve
                25% snippet share; maintain CVR (Conversion Rate) at 3.5%+&quot;
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Sources & Instrumentation */}
      <Card className="border-2 border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-900">
            <Database className="h-5 w-5" />
            Data Sources & Instrumentation
          </CardTitle>
          <CardDescription className="text-green-800">
            Connect the right tools and maintain data hygiene
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Core Data Sources</h4>
            <div className="space-y-3">
              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Search className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold mb-1">
                        GSC (Google Search Console)
                      </h5>
                      <p className="text-sm text-slate-700 mb-2">
                        Your primary source for search performance data
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Queries</Badge>
                        <Badge variant="outline">Pages</Badge>
                        <Badge variant="outline">Positions</Badge>
                        <Badge variant="outline">SERP Features</Badge>
                        <Badge variant="outline">Impressions</Badge>
                        <Badge variant="outline">Clicks</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <BarChart2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold mb-1">GA4 (Google Analytics 4)</h5>
                      <p className="text-sm text-slate-700 mb-2">
                        User behavior and conversion tracking
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Sessions</Badge>
                        <Badge variant="outline">Engaged Sessions</Badge>
                        <Badge variant="outline">Events/Conversions</Badge>
                        <Badge variant="outline">CVR (Conversion Rate)</Badge>
                        <Badge variant="outline">User Journey</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold mb-1">CRM/Marketing Automation</h5>
                      <p className="text-sm text-slate-700 mb-2">
                        Pipeline and revenue attribution
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Leads</Badge>
                        <Badge variant="outline">Opportunities</Badge>
                        <Badge variant="outline">Closed Revenue</Badge>
                        <Badge variant="outline">Source Attribution</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Data Hygiene Checklist</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3 p-3 bg-white rounded border border-green-300">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">UTM Standards</h5>
                  <p className="text-xs text-slate-700">
                    Consistent source/medium/campaign naming conventions across all tracked links
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded border border-green-300">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">Annotations</h5>
                  <p className="text-xs text-slate-700">
                    Mark major content releases, migrations, experiments, and algorithm updates in
                    your analytics
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded border border-green-300">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">Traffic Filtering</h5>
                  <p className="text-xs text-slate-700">
                    Exclude internal/staging traffic; verify that goals/events reflect real
                    business actions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded border border-green-300">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">Regular Audits</h5>
                  <p className="text-xs text-slate-700">
                    Quarterly reviews to catch tracking errors, broken events, or outdated UTM
                    patterns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dashboards */}
      <Card className="border-2 border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-900">
            <BarChart2 className="h-5 w-5" />
            Essential Dashboards (Practical Set)
          </CardTitle>
          <CardDescription className="text-purple-800">
            Three dashboards that drive action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-300 bg-white">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Dashboard Philosophy:</strong> Build dashboards that answer specific
              questions and drive decisions, not just display data. Each dashboard should have a
              clear owner and action plan.
            </AlertDescription>
          </Alert>

          <div>
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-base">A. Cluster Health Dashboard</CardTitle>
                <CardDescription className="text-blue-800">
                  Monitor cluster-level performance and spot trends early
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-white p-3 rounded border border-blue-200">
                  <h5 className="font-semibold text-sm mb-2">Core Metrics</h5>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Impressions, clicks, CTR, average position</strong> by cluster
                        (month-over-month and quarter-over-quarter trends)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Snippet/PAA (People Also Ask) visibility:</strong> Track featured
                        snippet capture rate per cluster
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Top rising/falling queries:</strong> Identify new opportunities
                        and decay signals
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>
                        <strong>Money pages in cluster:</strong> Conversions and assists from key
                        cluster pages
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-100 p-3 rounded text-xs border border-blue-300">
                  <p className="font-semibold mb-1">Use Case:</p>
                  <p className="text-slate-700">
                    Weekly review to spot decay, identify high-potential clusters for expansion,
                    and prioritize refresh work.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-base">
                  B. Template Performance Dashboard
                </CardTitle>
                <CardDescription className="text-green-800">
                  Understand which page formats win for which intents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-white p-3 rounded border border-green-200">
                  <h5 className="font-semibold text-sm mb-2">Core Metrics</h5>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>
                        <strong>Hub vs. spoke outcomes:</strong> Compare performance by content
                        type (pillar pages vs. supporting content)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>
                        <strong>Template win rates:</strong> Which template format (comparison,
                        checklist, location) performs best for specific intent types
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>
                        <strong>Time to publish → time to first impression/click:</strong> How
                        quickly do new pages gain traction
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-100 p-3 rounded text-xs border border-green-300">
                  <p className="font-semibold mb-1">Use Case:</p>
                  <p className="text-slate-700">
                    Monthly review to optimize content brief templates and inform future content
                    architecture decisions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-2 border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-amber-900 text-base">
                  C. Opportunity Finder Dashboard
                </CardTitle>
                <CardDescription className="text-amber-800">
                  Surface quick-win optimization opportunities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-white p-3 rounded border border-amber-200">
                  <h5 className="font-semibold text-sm mb-2">Core Filters</h5>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>
                        <strong>Position #5–#12 with high impressions:</strong> Optimize
                        titles/metas/intro; add proof and internal links
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>
                        <strong>High impressions, low CTR:</strong> Title/meta promise mismatch;
                        reposition value proposition
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>
                        <strong>Rank gain but stagnant clicks:</strong> SERP features blocking;
                        add snippet capture optimization
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>
                        <strong>High engagement, low conversion:</strong> Strong content but weak
                        CTA (Call-to-Action) or funnel alignment
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-100 p-3 rounded text-xs border border-amber-300">
                  <p className="font-semibold mb-1">Use Case:</p>
                  <p className="text-slate-700">
                    Weekly triage to generate quick wins. Export top 5-10 opportunities and assign
                    to editors for immediate action.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

