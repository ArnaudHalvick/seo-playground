"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FileText, Lightbulb, Link as LinkIcon, CheckCircle2 } from "lucide-react";

export default function ContentArchitecturePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Strategic SEO", href: "/strategic-seo" },
          { label: "Content Architecture", href: "/strategic-seo/content-architecture" },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold">Content Architecture & On-Page Optimization</h1>
          </div>
          <p className="text-xl text-slate-700 leading-relaxed">
            Translate research into a semantic, navigable content system that satisfies search intent quickly, 
            signals topical authority, and converts—without touching code.
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
                  <span>Semantic cluster architecture (hub ↔ spoke design)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Content briefs (SERP analysis, outlines, internal links)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>On-page copy & UX (titles, intros, scannability, CTAs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>E-E-A-T (authors, sources, transparency, trust pages)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Internal linking (editorial layer, anchor text)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Content refresh & pruning (decay, intent drift)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Deliverables</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Topical map: hubs, spokes, adjacent entities, ownership</li>
                <li>• Briefs at scale: repeatable template with proof & differentiation</li>
                <li>• On-page standards: title/meta/H1 rules, intro pattern, section kits</li>
                <li>• Internal linking plan: required links per template + anchor guardrails</li>
                <li>• Refresh calendar: triggers, review cadence, consolidation rules</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Workflow */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <LinkIcon className="h-7 w-7 text-purple-600" />
            Workflow Overview
          </h2>
          <Alert>
            <AlertDescription className="text-sm">
              <strong>Process:</strong> Design the architecture → Create briefs → Draft & optimize on-page elements → 
              Wire editorial internal links → Publish & measure → Refresh or prune
            </AlertDescription>
          </Alert>
        </div>

        {/* Detailed Steps */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Step-by-Step Guide</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="cluster-architecture" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">1. Semantic Cluster Architecture</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Actions</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Define the hub (definitive page solving core job) and spokes (sub-tasks, comparisons, tools, FAQs)</li>
                    <li>• Write scope notes per hub to avoid overlap with neighboring hubs</li>
                    <li>• Map adjacent entities (brands, features, locations, alternatives, costs)</li>
                    <li>• Choose page types by intent: guide, checklist, comparison, calculator, case study, PLP collection, FAQ</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Outputs</h4>
                  <p className="text-sm text-slate-700">
                    Visual cluster map with owners, audience/stage, minimal navigation sketch. 
                    Coverage definition: hub is "done" when X spokes + Y proofs + Z FAQs are live.
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-900">Quality Bar</p>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• One primary intent per page; spokes don't duplicate hub's promise</li>
                    <li>• Every spoke links up to its hub and across to at least two siblings with natural anchors</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="content-briefs" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">2. Content Briefs (Repeatable & Decisive)</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <h4 className="font-semibold text-slate-900 mb-2">Must-Have Components</h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li><strong>Goal & audience:</strong> Intent in one line + business outcome (lead, trial, booking)</li>
                  <li><strong>Primary keyword:</strong> One; supporting themes grouped by section</li>
                  <li><strong>SERP read:</strong> Result types, "bar to beat," feature targets (snippet/PAA/video/image)</li>
                  <li><strong>Outline:</strong> H2/H3 skeleton; promise → proof → action</li>
                  <li><strong>Proof & E-E-A-T:</strong> Data, quotes, examples, screenshots, author credentials</li>
                  <li><strong>Differentiation:</strong> What we add (original data, calculator, benchmark, price clarity)</li>
                  <li><strong>Internal links:</strong> Required hub link, 2–4 sibling spokes, related resources</li>
                  <li><strong>CTA plan:</strong> Primary + secondary, with trust boosters nearby</li>
                  <li><strong>Snippet capture:</strong> Definitional paragraph, Q&A blocks, steps/table candidates</li>
                  <li><strong>Maintenance:</strong> Freshness trigger + next review date</li>
                </ul>
                <div className="bg-blue-50 p-3 rounded-lg mt-4">
                  <p className="text-sm font-semibold text-blue-900">Editor Tip</p>
                  <p className="text-sm text-blue-800">
                    Provide "section starters" (1–2 guiding sentences per H2) to raise draft quality
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="on-page-copy" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">3. On-Page Copy & UX (No Code)</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Titles & Metas</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• <strong>Title:</strong> Promise + specificity; ≤60 chars; reflect exact primary intent</li>
                    <li>• <strong>Meta description:</strong> Benefit + proof + CTA; ≤155 chars; don't repeat title verbatim</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Intros That Win Clicks</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Lead with the user's job and the outcome (1–3 sentences)</li>
                    <li>• Preview structure ("In this guide, you'll…") and credibility ("based on X deployments/data")</li>
                    <li>• Add a short definition or quick criteria table if SERP favors fast answers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Structure & Readability</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Logical H2/H3 flow; answer core question within first screenful</li>
                    <li>• Descriptive subheads, bullets, short paragraphs, summary boxes</li>
                    <li>• Include selection criteria, pros/cons, pitfalls, examples, mini-tables or checklists</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">CTAs & Conversion Aids</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Primary CTA where intent peaks; secondary CTA for earlier-stage readers</li>
                    <li>• Trust elements nearby (testimonials, proof logos, guarantees, policy links)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Visuals & Media</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Purposeful visuals: step screenshots, comparisons, before/after, short explainers</li>
                    <li>• Captions that add meaning; cite sources where applicable</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="eeat" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">4. E-E-A-T Signals (Editorial Operations)</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Actions</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Assign real authors with bios and credentials; show last-updated dates and revision notes</li>
                    <li>• Cite reputable sources; add brief methodology when presenting data or rankings</li>
                    <li>• Maintain trust pages: About, Editorial Guidelines, Contact, Privacy/Policy, Reviews policy</li>
                    <li>• Showcase awards, certifications, press mentions, customer stories when relevant</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-900">Quick Checks</p>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Can a skeptical reader verify claims?</li>
                    <li>• Does the page clearly show who wrote it and why they're qualified?</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="internal-linking" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">5. Internal Linking (Editorial Layer)</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Rules of Thumb</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• From every spoke: link up to the hub in intro or conclusion with natural, descriptive anchors</li>
                    <li>• Add 2–4 contextual sibling links per spoke where they genuinely help the reader</li>
                    <li>• From hubs: include a curated "Next steps" module to key spokes (not an indiscriminate list)</li>
                    <li>• Keep anchors descriptive (what the reader will learn/do), not keyword-stuffed</li>
                    <li>• Fix cannibalization by selecting a target URL per intent and aligning internal anchors to it</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Maintenance</h4>
                  <p className="text-sm text-slate-700">
                    Revisit internal links during refreshes to redistribute equity toward new or strategic pages
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="refresh-pruning" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">6. Content Refresh & Pruning</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">When to Refresh</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Decay: traffic or rankings down vs. last 3–6 months</li>
                    <li>• Intent drift: SERP format shifts (e.g., now favors checklists/tools)</li>
                    <li>• Outdated info: prices, screenshots, regulations, product features</li>
                    <li>• Thinness: high impressions with low CTR or weak engagement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Actions</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Tighten the intro; refine title/meta; upgrade proof (data, quotes, visuals)</li>
                    <li>• Add/remove sections to match current SERP patterns and user tasks</li>
                    <li>• Improve internal links (add hub/sibling links; retire links to deprecated pages)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Consolidate or Prune</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Merge overlapping pages into the strongest version (keep the best destination URL)</li>
                    <li>• Prune only when the topic has no value and no viable consolidation path</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Reusable Page Scaffolds */}
        <Card className="mb-8 border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900">Reusable Page Scaffolds (Editor-Friendly)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">A. "Definitive Guide" (Hub)</h3>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>What & why (2–3 sentences)</li>
                <li>Quick definition or criteria table</li>
                <li>Core framework/steps (H2 blocks)</li>
                <li>Proof: data, examples, screenshots</li>
                <li>Alternatives/pitfalls</li>
                <li>FAQs (2–5 highly searched)</li>
                <li>Next steps (curated spokes) + CTA</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">B. Comparison/"X vs Y" (Spoke)</h3>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>TL;DR verdict</li>
                <li>Side-by-side criteria table</li>
                <li>Deep-dive by use cases</li>
                <li>Pricing/limitations</li>
                <li>Which to choose (by scenario)</li>
                <li>Related comparisons (anchors)</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">C. Checklist/Template (Spoke)</h3>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>Context: when to use</li>
                <li>Printable/duplicable list or template</li>
                <li>How to implement + common mistakes</li>
                <li>Download/CTA + related guides</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Common Pitfalls */}
        <Card className="mb-8 border-2 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-900">Common Pitfalls to Avoid</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-red-800 space-y-2">
              <li>• "Me-too" pages that restate top results without new value</li>
              <li>• Chasing multiple intents on one URL (unfocused; weak for ranking or conversion)</li>
              <li>• Over-linking with generic anchors ("click here") or keyword-stuffed anchors</li>
              <li>• Publishing hubs with no spokes (authority signal too weak)</li>
              <li>• Ignoring refresh—content goes stale; competitors overtake you</li>
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
              <li>• Pre-draft: approve the cluster map and brief</li>
              <li>• During drafting: enforce on-page standards and E-E-A-T checklist</li>
              <li>• Post-publish: run the 14–45 day optimization pass; schedule first refresh</li>
              <li>• Quarterly: review cluster performance; add spokes for gaps; consolidate overlaps</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

