"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Target, Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react";

export default function ResearchStrategyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Strategic SEO", href: "/strategic-seo" },
          { label: "Research & Strategy", href: "/strategic-seo/research-strategy" },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold">Research & Strategy</h1>
          </div>
          <p className="text-xl text-slate-700 leading-relaxed">
            Build an evidence-based plan that aligns business goals with searcher demand. Convert raw market/keyword signals 
            into intent-led clusters, a content roadmap, and prioritized bets with measurable outcomes.
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
                  <span>Market & audience discovery (ICPs, JTBD, VoC mining)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Keyword research & clustering (intent modeling)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>SERP & intent analysis (feature inventory)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Topical authority planning (hub ↔ spoke)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Competitor intelligence (SERP competitors)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Prioritization & forecasting (ICE scoring)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Deliverables</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Audience dossier: ICPs, buying stages, language bank</li>
                <li>• Keyword universe: deduped list grouped into clusters with intent labels</li>
                <li>• SERP playbook per cluster: result types, feature targets</li>
                <li>• Topical map: hubs, spokes, internal linking plan</li>
                <li>• 6–12 week roadmap with ICE scores and milestones</li>
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
              <strong>High-Level Process:</strong> Discover (market, audience) → Harvest & cluster (keywords) → 
              Model SERPs → Design topical map → Size & prioritize → Brief & schedule → Measure & iterate
            </AlertDescription>
          </Alert>
        </div>

        {/* Detailed Steps */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Step-by-Step Guide</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="discovery" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">1. Market & Audience Discovery</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Inputs</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    Sales/support calls, win/loss notes, reviews (Reddit, G2), seasonality insights, competitor positioning
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Actions</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Define ICPs (Ideal Customer Profiles) and JTBD (Jobs To Be Done)</li>
                    <li>• Extract language bank: exact phrases for pains and desired outcomes</li>
                    <li>• Map buying stages: problem aware → solution aware → vendor aware → ready to buy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Outputs</h4>
                  <p className="text-sm text-slate-700">
                    3–5 ICP one-pagers, stage-by-stage questions, top 10 repeated objections, glossary of user terms
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-900">Quick Check</p>
                  <p className="text-sm text-purple-800">
                    Can you name the five most repeated pains and the three evaluation criteria your ICPs use?
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="keyword-research" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">2. Keyword Research & Clustering</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Inputs</h4>
                  <p className="text-sm text-slate-700">
                    Seeds (site search, competitor top pages, PPC terms), SERP features, autosuggest, "People Also Ask"
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Actions</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Expand with modifiers: who/what/how/near-me/price/best vs/alternatives</li>
                    <li>• Classify intent: informational, commercial investigation, transactional, navigational</li>
                    <li>• Cluster semantically: one parent topic per hub; 4–10 spokes per hub</li>
                    <li>• Map one primary keyword per URL to prevent cannibalization</li>
                    <li>• Score each keyword: volume × clickability × business value × difficulty</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Quality Bar</h4>
                  <p className="text-sm text-slate-700">
                    Each URL has exactly one primary keyword and a small set of supporting variants. 
                    Long-tail variants live as spokes—not separate hubs.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="serp-modeling" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">3. SERP & Intent Modeling</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Actions</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Inventory result types: guides, listicles, PLPs, comparison pages, tools, videos</li>
                    <li>• Note features: featured snippet, PAA, image pack, video, local pack, reviews</li>
                    <li>• Reverse-engineer content patterns: length, structure, tables, images, examples</li>
                    <li>• Identify entity expectations: products, brands, locations repeatedly mentioned</li>
                    <li>• Decide snippet capture opportunities: definitions, Q&A blocks, numbered steps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Output</h4>
                  <p className="text-sm text-slate-700">
                    Cluster playbook: recommended page format, essential sections, proof elements, snippet targets, freshness expectation
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-900">Quick Check</p>
                  <p className="text-sm text-purple-800">
                    Does your planned format match what Google already rewards for the same intent? 
                    What unique value will you add (original data, calculator, benchmark)?
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="topical-authority" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">4. Topical Authority Planning</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Actions</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Draw a hub ↔ spoke map: hub = definitive guide; spokes = sub-tasks, comparisons, tools, FAQs</li>
                    <li>• Ensure every spoke links up to its hub and across to sibling spokes</li>
                    <li>• Define scope boundaries: what belongs to this hub vs. neighboring hubs</li>
                    <li>• Plan adjacent entities and FAQs to cover breadth (glossary, pitfalls, costs)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Outputs</h4>
                  <p className="text-sm text-slate-700">
                    Visual topical map, page list with owners, editorial internal-link plan, "done when" definition per hub
                  </p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-red-900">Pitfall to Avoid</p>
                  <p className="text-sm text-red-800">
                    Spawning multiple "near-duplicate" spokes that split equity. Consolidate when intent is the same.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="competitor-intel" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">5. Competitor Intelligence (SERP-First)</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Actions</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Identify SERP competitors for each cluster (often different from business competitors)</li>
                    <li>• Compare winners on: topic coverage, structure, media, proof, E-E-A-T signals, link profile</li>
                    <li>• Choose one of three plays per cluster: outdo (10× value), angle-shift (new POV), or avoid</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Outputs</h4>
                  <p className="text-sm text-slate-700">
                    Cluster-level competitive grid, "bar to beat" notes, differentiation statement per planned page
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-900">Quick Check</p>
                  <p className="text-sm text-purple-800">
                    Can you articulate in one sentence why your page will deserve the click over the current #1?
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="prioritization" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">6. Prioritization & Forecasting</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Scoring Model (ICE)</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    Impact (traffic + revenue potential), Confidence (evidence strength), Effort (people time)
                  </p>
                  <p className="text-sm font-mono text-slate-800 bg-slate-100 p-2 rounded">
                    ICE score = (Impact × Confidence) ÷ Effort
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Traffic Sizing (Directional)</h4>
                  <p className="text-sm text-slate-700">
                    Use head term volume × expected CTR from actual SERP × realistic rank band (e.g., #3–#5). 
                    Add long-tail uplift from spokes (rule-of-thumb 20–40% if coverage is strong).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Outputs</h4>
                  <p className="text-sm text-slate-700">
                    6–12 week roadmap with ICE scores, owners, week-by-week deliverables, draft/publish dates
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="content-brief" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">7. Content Brief Template (Reusable)</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-3 pt-4">
                <ul className="text-sm text-slate-700 space-y-2">
                  <li><strong>Header:</strong> Cluster, page type (hub/spoke/comparison), owner, due dates</li>
                  <li><strong>Goal:</strong> Primary intent + business outcome (lead, trial, sale)</li>
                  <li><strong>Primary KW:</strong> One. Supporting KWs: 5–12 grouped by sub-section</li>
                  <li><strong>Search Intent:</strong> What the user expects to accomplish in one visit</li>
                  <li><strong>SERP Summary:</strong> Result types, features to target, "bar to beat," gap you'll fill</li>
                  <li><strong>Outline:</strong> H2/H3 skeleton aligned to intent (answer fast; add proof, examples)</li>
                  <li><strong>Proof & E-E-A-T:</strong> Data, quotes, screenshots, case studies, author credentials</li>
                  <li><strong>Differentiation:</strong> What makes this definitively better (research, calculator, teardown)</li>
                  <li><strong>Internal Links:</strong> Must-link hub, sibling spokes, related pages; anchor suggestions</li>
                  <li><strong>Conversion:</strong> Primary/secondary CTAs, trust builders (testimonials, awards)</li>
                  <li><strong>Snippet Capture:</strong> Definition, Q&A, steps, table candidates</li>
                  <li><strong>Maintenance:</strong> Freshness trigger (feature releases, quarterly review)</li>
                </ul>
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
              <li>• Treating volume as the goal; intent fit and business value come first</li>
              <li>• Multiple pages chasing the same primary keyword; consolidate instead</li>
              <li>• Ignoring SERP format requirements; writing essays when SERP rewards checklists/tools</li>
              <li>• "Me-too" content with no proof or differentiation</li>
              <li>• No ownership or refresh plan; clusters stall after first publish</li>
            </ul>
          </CardContent>
        </Card>

        {/* How to Use */}
        <Card className="border-2 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900">How to Use This Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-green-800 space-y-2">
              <li>• Kick off each new market/segment with Discovery → Cluster → SERP model → Topical map → Prioritize</li>
              <li>• Maintain a single source-of-truth sheet that ties clusters ↔ briefs ↔ roadmap ↔ metrics</li>
              <li>• Review by cluster, not page, to catch cannibalization and plan refreshes with leverage</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

