import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  FileText,
  BarChart3,
  Search,
  Target,
  RefreshCw,
  Beaker,
} from "lucide-react";

export default function UnderstandingTab() {
  return (
    <div className="space-y-6">
      {/* Acronym Glossary */}
      <Card className="border-2 border-purple-300 bg-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-purple-600" />
            Key Terms & Acronyms
          </CardTitle>
          <CardDescription>
            Quick reference for terminology used throughout this guide
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">KPI:</span> Key Performance Indicator
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">GSC:</span> Google Search Console
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">GA4:</span> Google Analytics 4
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">CTR:</span> Click-Through Rate
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">CVR:</span> Conversion Rate
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">OKR:</span> Objectives and Key Results
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">MDE:</span> Minimum Detectable Effect
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">CAC:</span> Customer Acquisition Cost
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">ROI:</span> Return on Investment
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">UTM:</span> Urchin Tracking Module (tracking
              parameters)
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Skills & Outcomes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-purple-600" />
            Core Skills & Outcomes
          </CardTitle>
          <CardDescription>What you&apos;ll learn and what you&apos;ll deliver</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-4">Core Skills</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">KPI Design</h4>
                      <p className="text-xs text-slate-700">
                        Build measurement frameworks by cluster, template type, and funnel stage.
                        Tie KPIs (Key Performance Indicators) to business outcomes, not just
                        vanity metrics.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <BarChart3 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Data Plumbing & Governance</h4>
                      <p className="text-xs text-slate-700">
                        Master GSC (Google Search Console), GA4 (Google Analytics 4), UTM
                        (tracking parameter) standards, and tagging hygiene. Ensure data quality
                        before analysis.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Search className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Diagnostics</h4>
                      <p className="text-xs text-slate-700">
                        Identify the &quot;why&quot; behind performance changes: SERP feature
                        tracking, cannibalization detection, content decay analysis, intent drift
                        spotting.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 bg-amber-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Beaker className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Experimentation</h4>
                      <p className="text-xs text-slate-700">
                        Run SEO-safe A/B tests with proper MDE (Minimum Detectable Effect)
                        calculation, guardrails (no cloaking), and experiment logging.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-indigo-200 bg-indigo-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Reporting & Storytelling</h4>
                      <p className="text-xs text-slate-700">
                        Build dashboards, align reporting to OKRs (Objectives and Key Results),
                        tell the story of what changed, why it moved, and what to do next.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-rose-200 bg-rose-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <RefreshCw className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Continuous Improvement</h4>
                      <p className="text-xs text-slate-700">
                        Systematically refresh decaying content, consolidate overlapping pages,
                        expand high-ROI (Return on Investment) clusters with new spokes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Key Deliverables</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Measurement Plan</h4>
                  <p className="text-xs text-slate-700">
                    KPI tree with business → cluster → template → page hierarchy, owners per
                    metric, data sources documented, review cadence defined.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Dashboards</h4>
                  <p className="text-xs text-slate-700">
                    Cluster health (impressions, clicks, CTR, position), template performance
                    (hub vs. spoke outcomes), opportunity finder (rank #5-#12 with high
                    impressions).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Insights Backlog</h4>
                  <p className="text-xs text-slate-700">
                    ICE-scored opportunities (Impact × Confidence ÷ Effort), decisions taken
                    (ship/roll back/iterate), owner and due date per item.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Experiment Log</h4>
                  <p className="text-xs text-slate-700">
                    Hypothesis, variant tested, MDE (Minimum Detectable Effect), run dates,
                    outcome, decision. Track learnings for future tests.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Refresh Tracker</h4>
                  <p className="text-xs text-slate-700">
                    Pages due for refresh, reason (decay, intent drift, gap), owner, target ship
                    date. Reserve 15-25% capacity for this work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workflow Overview */}
      <Card className="border-2 border-purple-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            6-Step Measurement Workflow
          </CardTitle>
          <CardDescription>
            From defining metrics to continuous optimization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Define KPI Tree</h4>
                <p className="text-xs text-slate-600">
                  Business → cluster → template → page hierarchy with targets
                </p>
              </div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-300">Planning</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Instrument & Annotate</h4>
                <p className="text-xs text-slate-600">
                  Set up GSC/GA4 tracking, UTM standards, annotations for major changes
                </p>
              </div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-300">Setup</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Monitor & Diagnose</h4>
                <p className="text-xs text-slate-600">
                  Weekly dashboard review, identify decay/drift/gaps, find the &quot;why&quot;
                </p>
              </div>
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">Analysis</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Test & Optimize</h4>
                <p className="text-xs text-slate-600">
                  Run experiments on high-impression pages, optimize titles/intros/links
                </p>
              </div>
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                Experimentation
              </Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex-shrink-0">
                5
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Refresh/Consolidate</h4>
                <p className="text-xs text-slate-600">
                  Update decaying content, merge overlaps, expand successful clusters
                </p>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-300">
                Maintenance
              </Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex-shrink-0">
                6
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Report & Reset Priorities</h4>
                <p className="text-xs text-slate-600">
                  Share insights, align to OKRs, reprioritize next actions
                </p>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-300">Reporting</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

