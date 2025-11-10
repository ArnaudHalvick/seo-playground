import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  ClipboardCheck,
  CheckCircle2,
  BarChart3,
  Calendar,
  AlertTriangle,
  Rocket,
} from "lucide-react";

export default function QualityTab() {
  return (
    <div className="space-y-6">
      {/* Content Quality Framework */}
      <Card className="border-2 border-blue-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5 text-blue-600" />
            Content Quality Framework
          </CardTitle>
          <CardDescription>
            Define what &quot;done&quot; means with clear quality criteria
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Definition of Done (Per Page)</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Intent Matched</p>
                  <p className="text-xs text-slate-700">
                    Page solves the core job to be done. Format matches SERP expectations
                    (listicle, guide, comparison, etc.).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Unique Value Added</p>
                  <p className="text-xs text-slate-700">
                    Original data, examples, tool, template, benchmark, or angle that competitors
                    lack. Not just a rehash of top 10 results.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">E-E-A-T Visible</p>
                  <p className="text-xs text-slate-700">
                    Author bio with credentials, sources cited, last-updated date shown. Trust
                    signals present (methodology, proof, transparency).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Internal Links Implemented</p>
                  <p className="text-xs text-slate-700">
                    Hub link in intro/outro. 2-4 sibling links contextually. Anchors reviewed for
                    natural language (not keyword-stuffed).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Snippet-Capture Blocks Present</p>
                  <p className="text-xs text-slate-700">
                    Definitional paragraph (≤50 words), Q&A blocks, steps/table candidates for
                    featured snippets where relevant.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Clear, Testable CTA</p>
                  <p className="text-xs text-slate-700">
                    Primary CTA where intent peaks. Secondary CTA for earlier-stage readers. Trust
                    elements nearby (testimonials, proof logos).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Peer Review Rubric (Score 1-5)</h4>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-4">
              <p className="text-sm text-slate-700 mb-3">
                Rate each dimension 1-5. Anything below 3 needs revision before publish.
              </p>
              <div className="space-y-2 text-xs">
                <div className="bg-white p-3 rounded border border-slate-200">
                  <p className="font-semibold mb-1">1. Intent Fit</p>
                  <p className="text-slate-700">
                    Does this page solve what the searcher is looking for? Format match SERP?
                  </p>
                  <div className="mt-1 flex gap-2">
                    {[1, 2, 3, 4, 5].map((score) => (
                      <div
                        key={score}
                        className="w-8 h-8 rounded border-2 border-slate-300 flex items-center justify-center font-semibold"
                      >
                        {score}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-3 rounded border border-slate-200">
                  <p className="font-semibold mb-1">2. Structure & Clarity</p>
                  <p className="text-slate-700">
                    Logical flow, scannable, descriptive subheads, intro answers job in 3 sentences?
                  </p>
                  <div className="mt-1 flex gap-2">
                    {[1, 2, 3, 4, 5].map((score) => (
                      <div
                        key={score}
                        className="w-8 h-8 rounded border-2 border-slate-300 flex items-center justify-center font-semibold"
                      >
                        {score}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-3 rounded border border-slate-200">
                  <p className="font-semibold mb-1">3. Proof & E-E-A-T</p>
                  <p className="text-slate-700">
                    Sources cited, author visible, examples/data present, methodology explained?
                  </p>
                  <div className="mt-1 flex gap-2">
                    {[1, 2, 3, 4, 5].map((score) => (
                      <div
                        key={score}
                        className="w-8 h-8 rounded border-2 border-slate-300 flex items-center justify-center font-semibold"
                      >
                        {score}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-3 rounded border border-slate-200">
                  <p className="font-semibold mb-1">4. Differentiation</p>
                  <p className="text-slate-700">
                    What does this add that top 10 results don&apos;t? Original angle, data, tool?
                  </p>
                  <div className="mt-1 flex gap-2">
                    {[1, 2, 3, 4, 5].map((score) => (
                      <div
                        key={score}
                        className="w-8 h-8 rounded border-2 border-slate-300 flex items-center justify-center font-semibold"
                      >
                        {score}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-3 rounded border border-slate-200">
                  <p className="font-semibold mb-1">5. Conversion Readiness</p>
                  <p className="text-slate-700">
                    Clear CTA, trust elements nearby, page guides user to next step?
                  </p>
                  <div className="mt-1 flex gap-2">
                    {[1, 2, 3, 4, 5].map((score) => (
                      <div
                        key={score}
                        className="w-8 h-8 rounded border-2 border-slate-300 flex items-center justify-center font-semibold"
                      >
                        {score}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-blue-300 bg-blue-50">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Tip:</strong> Use this rubric in peer reviews and self-reviews. Track scores
              over time to identify patterns (e.g., &quot;differentiation&quot; consistently low →
              need better proof/angle in briefs).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Measurement & KPIs */}
      <Card className="border-2 border-green-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-green-600" />
            Measurement & KPIs
          </CardTitle>
          <CardDescription>
            Track production health and content performance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">KPI Tiers</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-blue-600">Leading</Badge>
                  <h5 className="font-semibold text-sm">Input/Activity Metrics</h5>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Measure what you control—production efficiency and cluster completion
                </p>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• <strong>Pages shipped vs. plan:</strong> On-time delivery %</li>
                  <li>
                    • <strong>Hubs with ≥5 spokes:</strong> How many clusters are &quot;complete&quot;?
                  </li>
                  <li>
                    • <strong>Snippet/PAA presence:</strong> % of pages with featured snippet or PAA
                  </li>
                  <li>• <strong>Buffer utilization:</strong> % capacity used for refreshes</li>
                </ul>
              </div>

              <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-600">Lagging</Badge>
                  <h5 className="font-semibold text-sm">Outcome Metrics</h5>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  What happened after publish—visibility and business impact
                </p>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>
                    • <strong>Impressions & CTR:</strong> Are pages showing up and earning clicks?
                    (GSC)
                  </li>
                  <li>
                    • <strong>Average position:</strong> Rank movement for target keywords (GSC)
                  </li>
                  <li>
                    • <strong>Assisted conversions:</strong> Pages in conversion paths (GA4)
                  </li>
                  <li>
                    • <strong>Cluster traffic:</strong> Total organic traffic per hub-spoke cluster
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-purple-600">Diagnostics</Badge>
                  <h5 className="font-semibold text-sm">Quality/Health Metrics</h5>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Early warning signals—what needs attention?
                </p>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>
                    • <strong>Scroll depth & time on page:</strong> Are users engaging or bouncing?
                  </li>
                  <li>
                    • <strong>Cannibalization cases:</strong> Multiple pages ranking for same query
                  </li>
                  <li>
                    • <strong>Update velocity:</strong> Days since last refresh for strategic hubs
                  </li>
                  <li>• <strong>Thin content flags:</strong> High impressions, low CTR pages</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Measurement Dashboard (Recommended)</h4>
            <div className="bg-white border-2 border-slate-300 rounded p-4">
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="font-semibold mb-2">📊 Production Health</p>
                  <ul className="text-slate-700 space-y-1">
                    <li>• Pages shipped this month vs. plan</li>
                    <li>• Average days: brief → publish</li>
                    <li>• % pages with all quality checks passed</li>
                    <li>• Buffer utilization (refreshes/fixes)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">📈 Performance Trends</p>
                  <ul className="text-slate-700 space-y-1">
                    <li>• Organic traffic by cluster (monthly)</li>
                    <li>• Top 10 gainers/losers this month</li>
                    <li>• Featured snippet count</li>
                    <li>• Conversion rate by content type</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Review Rhythm */}
      <Card className="border-2 border-purple-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-purple-600" />
            Review Rhythm & Cadences
          </CardTitle>
          <CardDescription>
            When and how to review production and performance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-semibold text-sm">Weekly Standup (25 minutes)</h5>
                <Badge className="bg-blue-600">Every Mon</Badge>
              </div>
              <p className="text-xs text-slate-700 mb-2">
                <strong>Agenda:</strong>
              </p>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Wins: What shipped last week?</li>
                <li>• Stuck items: What&apos;s blocked or at risk?</li>
                <li>• Next week: What&apos;s publishing? Any dependencies?</li>
              </ul>
              <p className="text-xs text-slate-600 mt-2">
                <strong>Output:</strong> Updated calendar, risk log, action items
              </p>
            </div>

            <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-semibold text-sm">Monthly Performance Review (45 minutes)</h5>
                <Badge className="bg-green-600">First Fri/Month</Badge>
              </div>
              <p className="text-xs text-slate-700 mb-2">
                <strong>Focus:</strong>
              </p>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Review by cluster (not individual page): What&apos;s working? What&apos;s not?</li>
                <li>• Identify refreshes/consolidations needed</li>
                <li>• Spot cannibalization, decay, thin content</li>
                <li>• Celebrate wins, learn from misses</li>
              </ul>
              <p className="text-xs text-slate-600 mt-2">
                <strong>Output:</strong> Refresh list (priority order), consolidation candidates
              </p>
            </div>

            <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-semibold text-sm">Quarterly Strategy Retro (2 hours)</h5>
                <Badge className="bg-purple-600">End of Q</Badge>
              </div>
              <p className="text-xs text-slate-700 mb-2">
                <strong>Topics:</strong>
              </p>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>• Did we hit our cluster goals? Why/why not?</li>
                <li>• What worked well in our production system? What didn&apos;t?</li>
                <li>• Capacity vs. actual: Were estimates accurate?</li>
                <li>• Reset goals and capacity for next quarter</li>
              </ul>
              <p className="text-xs text-slate-600 mt-2">
                <strong>Output:</strong> Updated strategy priorities, refined SLAs, process
                improvements
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Operationalize Tomorrow */}
      <Card className="border-2 border-green-300 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-900">
            <Rocket className="h-5 w-5" />
            How to Operationalize This Tomorrow
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-green-800 mb-4">
            <strong>Quick wins to get started:</strong>
          </p>
          <div className="space-y-2 text-sm text-green-800">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Appoint a DRI</strong> for each active cluster and backfill the RACI (don&apos;t
                overthink it—start simple)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Move every in-flight idea</strong> into the standard brief template before
                drafting (no more ad-hoc Google Docs)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Stand up a weekly 25-minute editorial review:</strong> Wins, stuck items,
                next week. No agenda creep.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Reserve 20% of capacity</strong> for refreshes and consolidation—protect it
                like a budget
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Build your first QA checklist</strong> into the CMS as required fields
                (intent, E-E-A-T, internal links)
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card className="border-2 border-red-300 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-900">
            <AlertTriangle className="h-5 w-5" />
            Quality & Measurement Pitfalls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  &quot;Me-Too&quot; Drafts
                </h5>
                <p className="text-xs text-red-800">
                  Content that lacks proof or a fresh angle. Use quality rubric (differentiation
                  score) to catch before publish.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Measuring Individual Pages Only
                </h5>
                <p className="text-xs text-red-800">
                  Review by cluster, not page. A spoke might have low traffic but strengthen the
                  hub—that&apos;s the goal.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  No Buffer for Refreshes
                </h5>
                <p className="text-xs text-red-800">
                  Planning 100% new content leaves no capacity for updates. Content decays—protect
                  15-25% buffer.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Vanity Metrics Obsession
                </h5>
                <p className="text-xs text-red-800">
                  Total pages published matters less than cluster completion and business outcomes
                  (conversions, pipeline).
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

