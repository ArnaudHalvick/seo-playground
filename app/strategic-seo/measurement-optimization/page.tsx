"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BarChart3, Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react";

export default function MeasurementOptimizationPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Strategic SEO", href: "/strategic-seo" },
          { label: "Measurement & Optimization", href: "/strategic-seo/measurement-optimization" },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold">Measurement, Iteration & Optimization</h1>
          </div>
          <p className="text-xl text-slate-700 leading-relaxed">
            Turn your strategy into a closed-loop system. Measure the right signals at the cluster level, 
            diagnose issues early, run clean tests, and iterate content and internal linking to compound gains
            —without touching code.
          </p>
        </div>

        {/* Core Purpose */}
        <Card className="mb-8 border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-purple-600" />
              Key Skills & Outcomes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Core Skills</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>KPI design (by cluster, template, funnel stage)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Data plumbing & governance (GSC, GA4, tagging hygiene)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Diagnostics (SERP feature tracking, cannibalization, decay)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Experimentation (A/B basics, MDE, SEO-safe guardrails)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Reporting & storytelling (dashboards, OKR alignment)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Continuous improvement (refresh, consolidate, expand spokes)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Deliverables</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Measurement plan (KPI tree, owners, data sources, review cadence)</li>
                <li>• Dashboards (cluster, page template, acquisition → conversion view)</li>
                <li>• Insights backlog with ICE scores and decisions taken</li>
                <li>• Experiment log (hypothesis, variant, MDE, run dates, outcome)</li>
                <li>• Refresh tracker (pages due, reason: decay/intent drift/gap, date shipped)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Workflow */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="h-7 w-7 text-purple-600" />
            Workflow Overview
          </h2>
          <Alert>
            <AlertDescription className="text-sm">
              <strong>Process:</strong> Define KPI tree → Instrument & annotate → Monitor & diagnose → 
              Test & optimize → Refresh/consolidate → Report & reset priorities
            </AlertDescription>
          </Alert>
        </div>

        {/* Detailed Framework */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Measurement Framework</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="kpi-tree" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">1. KPI Tree & Targets</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Levels</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• <strong>Business:</strong> revenue, pipeline, lead quality, CAC, ROI</li>
                    <li>• <strong>Cluster:</strong> impressions, clicks, CTR, average position, conversions/assists</li>
                    <li>• <strong>Template:</strong> performance by page type (hub, comparison, checklist, location)</li>
                    <li>• <strong>Page:</strong> supporting metrics (scroll depth, engagement)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Targets</h4>
                  <p className="text-sm text-slate-700">
                    Tie quarterly OKRs to clusters (e.g., "Grow 'X' cluster clicks +30% QoQ; snippet share 25%")
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="data-sources" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">2. Data Sources & Instrumentation</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Core Sources</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• <strong>GSC (Google Search Console):</strong> queries, pages, positions, SERP features</li>
                    <li>• <strong>GA4 (Google Analytics 4):</strong> sessions, engaged sessions, events/conversions, CVR</li>
                    <li>• <strong>CRM/marketing automation:</strong> for pipeline/booking where relevant</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Hygiene</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• UTM standards (source/medium/campaign naming)</li>
                    <li>• Annotations for major content releases, migrations, and experiments</li>
                    <li>• Filter internal/staging traffic; verify that goals/events reflect real business actions</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="dashboards" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">3. Dashboards (Practical Set)</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">A. Cluster Health</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Impressions, clicks, CTR, average position by cluster</li>
                    <li>• Snippet/PAA visibility; top rising/falling queries</li>
                    <li>• Money pages in cluster with conversions/assists</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">B. Template Performance</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Hub vs. spoke outcomes; which template wins for which intent</li>
                    <li>• Time to publish → time to first impression/click</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">C. Opportunity Finder</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Queries rank #5–#12 with high impressions (optimize titles/metas/intro; add proof)</li>
                    <li>• Pages with high impressions but low CTR (reposition promise)</li>
                    <li>• Pages with rank gain but stagnant clicks (SERP features blocking; add snippet capture)</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="diagnostics" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">4. Diagnostics (Find the "Why")</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-4">
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• <strong>Cannibalization:</strong> multiple URLs ranking for same primary KW → select target; merge or reframe others</li>
                  <li>• <strong>Decay:</strong> clicks/positions falling vs. last 90–180 days → refresh content and internal links</li>
                  <li>• <strong>Intent drift:</strong> SERP now favors lists/tools/videos → reshape format, add media/snippet blocks</li>
                  <li>• <strong>Thin proof:</strong> low dwell/scroll → add examples, data, screenshots, mini-tables</li>
                  <li>• <strong>Link flow gaps:</strong> important spokes have few editorial links → add links from hubs and high-traffic pages</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="optimization-levers" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">5. Optimization Levers (No Code)</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">On-Page (Editorial)</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Titles/meta descriptions: clarify promise/benefit; test specificity and "who it's for"</li>
                    <li>• Intros: answer job-to-be-done in 2–3 sentences; preview structure; credentials note</li>
                    <li>• Sections: add selection criteria, pitfalls, examples, step visuals; tighten redundant copy</li>
                    <li>• Internal links: hub ↔ + 2–4 sibling ↔ links; descriptive anchors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Cluster-Level</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Add missing spokes (from SERP gaps and PAA)</li>
                    <li>• Consolidate overlapping pages; update anchors to chosen target URL</li>
                    <li>• Create a single definitive hub if you have multiple half-hubs</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="experimentation" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">6. Experimentation (SEO-Safe)</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">When to Test</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• High-impression pages with subpar CTR</li>
                    <li>• Competing intents (choose angle)</li>
                    <li>• New SERP pattern (e.g., listicles outperform guides)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Basics</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• One variable at a time (title/meta/intro/block order)</li>
                    <li>• Pre-calculate MDE (Minimum Detectable Effect) and sample size (directional is fine for content)</li>
                    <li>• Use holdout groups/time-boxed comparisons to avoid cloaking (same content for users and bots)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Guardrails</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• No user/bot content mismatch (no cloaking)</li>
                    <li>• Keep core meaning and primary KW alignment</li>
                    <li>• Freeze major sitewide changes during test windows</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Record</h4>
                  <p className="text-sm text-slate-700">
                    Hypothesis → change → start/end → outcome → decision (ship/roll back/iterate)
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="refresh-consolidation" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">7. Refresh & Consolidation Playbook</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Refresh Triggers</h4>
                  <p className="text-sm text-slate-700">
                    Decay, intent drift, outdated facts, thin proof, new strong competitor
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Actions</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Retitle/meta for clarity; strengthen intro</li>
                    <li>• Add missing proof/media; align to current SERP feature mix</li>
                    <li>• Strengthen internal links; add hub/sibling links; remove links to deprecated pages</li>
                    <li>• Note "last updated" with summary of material changes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Consolidation</h4>
                  <p className="text-sm text-slate-700">
                    Merge pages with the same primary intent into the strongest; update anchors across the cluster
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cadence-ownership" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">8. Cadence & Ownership</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Review Rhythm</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• <strong>Weekly:</strong> dashboard skim; pick 2–3 quick wins; log insights → actions</li>
                    <li>• <strong>Monthly:</strong> cluster review; decide refresh/consolidation; reprioritize ICE items</li>
                    <li>• <strong>Quarterly:</strong> OKR reset; audit top 10% pages; expand cluster where ROI strongest</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">People</h4>
                  <p className="text-sm text-slate-700">
                    DRI per cluster owns the loop; analyst supports; editor executes changes
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="reporting" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">9. Reporting & Storytelling</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Structure</h4>
                  <ol className="text-sm text-slate-700 space-y-1 list-decimal list-inside">
                    <li>What changed (ship log, experiments, links/press if relevant)</li>
                    <li>What moved (KPI deltas, wins/losses, insights)</li>
                    <li>Why it moved (diagnosis)</li>
                    <li>What we'll do next (prioritized actions with owners/dates)</li>
                  </ol>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-blue-900">Tips</p>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Lead with insight → decision, not screenshots</li>
                    <li>• Benchmark against your seasonality and last quarter, not just last week</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Common Pitfalls */}
        <Card className="mb-8 border-2 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-900">Common Pitfalls to Avoid</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-red-800 space-y-2">
              <li>• Tracking everything, acting on nothing (no owner, no cadence)</li>
              <li>• Page-level whack-a-mole; ignoring cluster structure</li>
              <li>• Declaring victory/failure too fast (insufficient data; seasonality)</li>
              <li>• Title/meta tests that change the meaning and break intent alignment</li>
              <li>• Refreshes that add words but not proof (data, examples, visuals)</li>
            </ul>
          </CardContent>
        </Card>

        {/* How to Operationalize */}
        <Card className="border-2 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900">How to Operationalize This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-green-800 space-y-2">
              <li>• Stand up a Cluster Health dashboard (GSC + GA4) and assign a DRI per cluster</li>
              <li>• Pick five #5–#12 queries with high impressions → run title/meta + intro upgrades</li>
              <li>• Schedule three refreshes: one decay, one intent drift, one thin proof</li>
              <li>• Start an experiment log; ship one A/B title/meta test on a high-impression page</li>
              <li>• Add "annotation discipline" to your publishing checklist (what shipped, where, when, why)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

