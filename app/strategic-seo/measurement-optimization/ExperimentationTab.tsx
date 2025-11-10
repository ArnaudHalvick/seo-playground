import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Beaker,
  RefreshCw,
  FileText,
  Info,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Calendar,
  Target,
  Lightbulb,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ExperimentationTab() {
  return (
    <div className="space-y-6">
      {/* Experimentation */}
      <Card className="border-2 border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Beaker className="h-5 w-5" />
            Experimentation (SEO-Safe Testing)
          </CardTitle>
          <CardDescription className="text-blue-800">
            Run controlled tests to validate hypotheses and compound improvements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-blue-300 bg-white">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Test Smart, Not Often:</strong> SEO tests take time to mature. Focus on
              high-impact, high-impression pages and respect SEO guardrails (no cloaking, no
              misleading content).
            </AlertDescription>
          </Alert>

          <div>
            <h4 className="font-semibold mb-3">When to Test</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3 p-3 bg-white rounded border border-blue-200">
                <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">High-Impression Pages with Subpar CTR</h5>
                  <p className="text-xs text-slate-700">
                    Pages with 10K+ monthly impressions but CTR (Click-Through Rate) below
                    benchmark. Test title/meta variations to improve click rate.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded border border-blue-200">
                <Target className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">Competing Intents (Choose Angle)</h5>
                  <p className="text-xs text-slate-700">
                    When SERP is mixed (some guides, some tools, some listicles), test different
                    content angles to find what resonates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded border border-blue-200">
                <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">New SERP Pattern</h5>
                  <p className="text-xs text-slate-700">
                    SERP shifts to favor a new format (e.g., listicles outperform guides). Test
                    whether reformatting improves performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Experimentation Basics</h4>
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">One Variable at a Time</h5>
                    <p className="text-xs text-slate-700">
                      Test title, meta description, intro, or block order—not all at once.
                      Isolate what drives the change.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">
                      Pre-Calculate MDE (Minimum Detectable Effect)
                    </h5>
                    <p className="text-xs text-slate-700">
                      Determine sample size needed to detect a meaningful change (directional
                      confidence is fine for content tests).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Holdout Groups / Time-Boxed Comparisons</h5>
                    <p className="text-xs text-slate-700">
                      Use before/after comparisons or similar page groups. Avoid user/bot content
                      mismatch (no cloaking).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h4 className="font-semibold mb-3">SEO Testing Guardrails</h4>
            <Card className="border-2 border-red-200 bg-red-50">
              <CardContent className="pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">No User/Bot Content Mismatch</h5>
                    <p className="text-xs text-slate-700">
                      Never show different content to users vs. bots (cloaking). Both must see
                      identical content.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Keep Core Meaning & KW Alignment</h5>
                    <p className="text-xs text-slate-700">
                      Don&apos;t change the fundamental topic or primary keyword just to test
                      engagement—stay on intent.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Freeze Major Sitewide Changes</h5>
                    <p className="text-xs text-slate-700">
                      Don&apos;t run experiments during migrations, template overhauls, or
                      algorithm updates—too many confounding variables.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Experiment Log Template</h4>
            <div className="bg-white p-4 rounded border-2 border-blue-300">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left p-2 font-semibold">Hypothesis</th>
                      <th className="text-left p-2 font-semibold">Variant</th>
                      <th className="text-left p-2 font-semibold">Start/End</th>
                      <th className="text-left p-2 font-semibold">Outcome</th>
                      <th className="text-left p-2 font-semibold">Decision</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-200">
                      <td className="p-2">More specific title → higher CTR</td>
                      <td className="p-2">
                        &quot;7 Tools for Remote Teams&quot; vs. &quot;Project Management
                        Tools&quot;
                      </td>
                      <td className="p-2">Jan 15 - Feb 15</td>
                      <td className="p-2">CTR +18% (3.2% → 3.8%)</td>
                      <td className="p-2">
                        <Badge className="bg-green-100 text-green-800 border-green-300">
                          Ship
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-2">Listicle format → better engagement</td>
                      <td className="p-2">Guide format vs. numbered list</td>
                      <td className="p-2">Feb 1 - Mar 1</td>
                      <td className="p-2">Position +2, clicks +12%</td>
                      <td className="p-2">
                        <Badge className="bg-green-100 text-green-800 border-green-300">
                          Ship
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Adding video → higher dwell</td>
                      <td className="p-2">Video intro vs. text only</td>
                      <td className="p-2">Mar 10 - Apr 10</td>
                      <td className="p-2">No change in engagement</td>
                      <td className="p-2">
                        <Badge className="bg-slate-100 text-slate-800 border-slate-300">
                          Iterate
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Refresh & Consolidation Playbook */}
      <Card className="border-2 border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-900">
            <RefreshCw className="h-5 w-5" />
            Refresh & Consolidation Playbook
          </CardTitle>
          <CardDescription className="text-purple-800">
            Systematically maintain and improve existing content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-purple-300 bg-white">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Reserve 15-25% Capacity:</strong> Refreshing existing high-value content
              often delivers better ROI than creating new pages. Protect time for this work.
            </AlertDescription>
          </Alert>

          <div>
            <h4 className="font-semibold mb-3">Refresh Triggers</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <Card className="border border-orange-200 bg-orange-50">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                    <h5 className="font-semibold text-sm">Decay</h5>
                  </div>
                  <p className="text-xs text-slate-700">
                    Clicks/positions falling vs. last 90–180 days
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-amber-200 bg-amber-50">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4 text-amber-600" />
                    <h5 className="font-semibold text-sm">Intent Drift</h5>
                  </div>
                  <p className="text-xs text-slate-700">
                    SERP pattern has shifted since original publish
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-yellow-200 bg-yellow-50">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-4 w-4 text-yellow-600" />
                    <h5 className="font-semibold text-sm">Outdated Facts</h5>
                  </div>
                  <p className="text-xs text-slate-700">
                    Stats, examples, or screenshots are no longer current
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-red-200 bg-red-50">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-red-600" />
                    <h5 className="font-semibold text-sm">New Strong Competitor</h5>
                  </div>
                  <p className="text-xs text-slate-700">
                    A better page has entered the SERP, taking your share
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-lime-200 bg-lime-50">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="h-4 w-4 text-lime-600" />
                    <h5 className="font-semibold text-sm">Thin Proof</h5>
                  </div>
                  <p className="text-xs text-slate-700">
                    Low engagement signals (bounce rate, scroll depth)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Refresh Actions Checklist</h4>
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="pt-4 space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Retitle/Meta for Clarity</h5>
                    <p className="text-xs text-slate-700">
                      Make value proposition crystal clear; test specificity
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Strengthen Intro</h5>
                    <p className="text-xs text-slate-700">
                      Answer job-to-be-done in first 100 words; preview structure
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Add Missing Proof/Media</h5>
                    <p className="text-xs text-slate-700">
                      Data points, examples, screenshots, comparison tables
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Align to Current SERP Feature Mix</h5>
                    <p className="text-xs text-slate-700">
                      Add PAA (People Also Ask) blocks, snippet optimization, video embeds
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Strengthen Internal Links</h5>
                    <p className="text-xs text-slate-700">
                      Add hub/sibling links; remove links to deprecated pages
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Note &quot;Last Updated&quot;</h5>
                    <p className="text-xs text-slate-700">
                      Add timestamp with summary of material changes (builds trust)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Consolidation Strategy</h4>
            <div className="bg-white p-4 rounded border-2 border-purple-300">
              <p className="text-sm text-slate-700 mb-3">
                When multiple pages compete for the same primary intent:
              </p>
              <ol className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-purple-600">1.</span>
                  <span>
                    <strong>Identify strongest URL:</strong> Best backlinks, highest engagement,
                    best structure
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-purple-600">2.</span>
                  <span>
                    <strong>Merge content:</strong> Pull unique sections from weaker pages into
                    the target
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-purple-600">3.</span>
                  <span>
                    <strong>301 redirect:</strong> Point old URLs to the consolidated page
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-purple-600">4.</span>
                  <span>
                    <strong>Update anchors:</strong> Change all internal links across the cluster
                    to point to the target
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-purple-600">5.</span>
                  <span>
                    <strong>Monitor performance:</strong> Track for 30-60 days to confirm
                    improvement
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cadence & Ownership */}
      <Card className="border-2 border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-900">
            <Calendar className="h-5 w-5" />
            Cadence & Ownership
          </CardTitle>
          <CardDescription className="text-green-800">
            Build a sustainable review rhythm
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex-shrink-0 text-sm">
                    W
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Weekly Review (30 min)</h5>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Skim dashboards for anomalies</li>
                      <li>• Pick 2–3 quick wins from opportunity finder</li>
                      <li>• Log insights → actions in backlog</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex-shrink-0 text-sm">
                    M
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Monthly Cluster Review (2 hours)</h5>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Review cluster health; identify decay/drift signals</li>
                      <li>• Decide refresh/consolidation priorities</li>
                      <li>• Reprioritize ICE backlog items</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold flex-shrink-0 text-sm">
                    Q
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Quarterly Strategic Review (4 hours)</h5>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• OKR reset; align targets to business priorities</li>
                      <li>• Audit top 10% of pages (traffic + revenue drivers)</li>
                      <li>• Expand clusters where ROI is strongest</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-4 rounded border-2 border-green-300">
            <h4 className="font-semibold mb-2">Ownership Model</h4>
            <div className="space-y-2 text-sm text-slate-700">
              <p>
                <strong>DRI (Directly Responsible Individual) per cluster:</strong> Owns the
                measurement loop, decides priorities, tracks outcomes
              </p>
              <p>
                <strong>Analyst:</strong> Supports with data, dashboard builds, and diagnostic
                deep-dives
              </p>
              <p>
                <strong>Editor:</strong> Executes content changes (refreshes, tests,
                consolidations)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reporting & Storytelling */}
      <Card className="border-2 border-indigo-200 bg-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-indigo-900">
            <FileText className="h-5 w-5" />
            Reporting & Storytelling
          </CardTitle>
          <CardDescription className="text-indigo-800">
            Communicate insights, align stakeholders, and drive action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="border-indigo-300 bg-white">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Lead with Insights, Not Screenshots:</strong> Great reports tell the story
              of what changed, why it moved, and what you&apos;ll do next—not just data dumps.
            </AlertDescription>
          </Alert>

          <div>
            <h4 className="font-semibold mb-3">4-Part Reporting Structure</h4>
            <div className="space-y-3">
              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex-shrink-0 text-sm">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">What Changed</h5>
                      <p className="text-sm text-slate-700">
                        Ship log (pages published, refreshed, consolidated), experiments run,
                        links/press earned (if relevant)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex-shrink-0 text-sm">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">What Moved</h5>
                      <p className="text-sm text-slate-700">
                        KPI deltas (impressions, clicks, conversions), wins (rank gains, snippet
                        capture), losses (decay, SERP feature loss)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex-shrink-0 text-sm">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Why It Moved</h5>
                      <p className="text-sm text-slate-700">
                        Diagnosis (decay, intent drift, consolidation impact, experiment outcome,
                        algorithm update, seasonality)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex-shrink-0 text-sm">
                      4
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">What We&apos;ll Do Next</h5>
                      <p className="text-sm text-slate-700">
                        Prioritized actions with owners, dates, and expected impact (tied back to
                        OKRs)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Reporting Best Practices</h4>
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="pt-4 space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Benchmark Against Context</h5>
                    <p className="text-xs text-slate-700">
                      Compare to seasonality, last quarter, and historical trends—not just last
                      week
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Tie to Business Outcomes</h5>
                    <p className="text-xs text-slate-700">
                      Connect cluster performance to pipeline, revenue, or lead quality
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Show Trade-Offs</h5>
                    <p className="text-xs text-slate-700">
                      If you deprioritized cluster X to focus on Y, explain the decision logic
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Make It Scannable</h5>
                    <p className="text-xs text-slate-700">
                      Use visual hierarchy, callouts, and clear section breaks
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card className="border-2 border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="text-red-900">Common Pitfalls to Avoid</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-red-800 space-y-2">
            <li className="flex items-start gap-2">
              <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Tracking everything, acting on nothing:</strong> No owner, no cadence, no
                decisions made
              </span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Page-level whack-a-mole:</strong> Ignoring cluster structure; optimizing
                individual pages in isolation
              </span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Declaring victory/failure too fast:</strong> Insufficient data; ignoring
                seasonality or algorithm flux
              </span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Title/meta tests that change the meaning:</strong> Breaking intent
                alignment just to boost CTR
              </span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Refreshes that add words but not proof:</strong> No data, examples, or
                visuals—just longer fluff
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* How to Operationalize */}
      <Card className="border-2 border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="text-green-900 flex items-center gap-2">
            <Target className="h-5 w-5" />
            How to Operationalize This Month
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-green-800 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Stand up a Cluster Health dashboard:</strong> Connect GSC + GA4 and assign
                a DRI per cluster
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Pick five #5–#12 queries with high impressions:</strong> Run title/meta +
                intro upgrades
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Schedule three refreshes:</strong> One decay, one intent drift, one thin
                proof
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Start an experiment log:</strong> Ship one A/B title/meta test on a
                high-impression page
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Add &quot;annotation discipline&quot;:</strong> Note what shipped, where,
                when, and why in your analytics
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

