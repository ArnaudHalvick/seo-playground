"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Users, Lightbulb, Calendar, CheckCircle2 } from "lucide-react";

export default function ContentProductionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold">Content Production & Governance</h1>
          </div>
          <p className="text-xl text-slate-700 leading-relaxed">
            Build a reliable, repeatable editorial machine that turns research and strategy into high-quality pages
            —on time, on brief, and aligned with business outcomes.
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
                  <span>Editorial planning (cluster calendars, SLA timing, capacity)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Governance & workflows (DRI, RACI, hand-offs, approvals)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Style & voice operations (TOV, formatting, sourcing standards)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Localization & international ops (true localization, cultural fit)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>E-E-A-T operations (author sourcing, review loops)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Compliance & accessibility (GDPR, privacy, WCAG basics)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Deliverables</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Quarterly content roadmap with owners, SLAs, and dependencies</li>
                <li>• Source-of-truth brief template and SOP for brief → draft → review → publish → refresh</li>
                <li>• Editorial style guide (TOV, structure, claims, linking, citation)</li>
                <li>• Localization playbook (market research, terminology, examples)</li>
                <li>• E-E-A-T pack (author bios, credentials, review policy, sourcing standards)</li>
                <li>• QA checklists (pre-publish, 14–45 day optimization, quarterly refresh)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Workflow */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="h-7 w-7 text-purple-600" />
            Workflow Overview
          </h2>
          <Alert>
            <AlertDescription className="text-sm">
              <strong>Process:</strong> Intake & prioritization → Briefing → Drafting (SME or writer) → 
              SEO review & edit → Legal/brand checks (if needed) → Publish & annotate → Measure & optimize → Refresh/retire
            </AlertDescription>
          </Alert>
        </div>

        {/* Detailed Steps */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Operational Framework</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="editorial-planning" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">1. Editorial Planning</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Inputs</h4>
                  <p className="text-sm text-slate-700">
                    Cluster priorities from strategy, capacity per role, seasonal moments, product/feature launches
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Actions</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Create a rolling 12-week calendar by cluster and funnel stage</li>
                    <li>• Assign DRI per page; set SLA for each step (briefing, draft, review, publish)</li>
                    <li>• Track dependencies (design, data pulls, customer quotes, subject-matter interviews)</li>
                    <li>• Reserve buffer for refreshes (10–25% of monthly capacity)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Outputs</h4>
                  <p className="text-sm text-slate-700">
                    Calendar (owner, status, due dates), risk log, weekly standup agenda
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-900">Quick Checks</p>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Does every planned page tie to a cluster and have a single, accountable owner?</li>
                    <li>• Is at least one refresh scheduled for each high-value hub this quarter?</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="governance" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">2. Governance & Workflows</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Roles</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• <strong>DRI (Directly Responsible Individual):</strong> accountable for delivery end-to-end</li>
                    <li>• <strong>SME (Subject Matter Expert):</strong> provides facts, screenshots, examples, quotes</li>
                    <li>• <strong>Editor:</strong> ensures structure, clarity, adherence to style and brief</li>
                    <li>• <strong>SEO reviewer:</strong> validates intent fit, SERP alignment, internal links, snippet opportunities</li>
                    <li>• <strong>Legal/brand approver:</strong> optional gate for sensitive topics</li>
                    <li>• <strong>Publisher:</strong> final formatter/uploader (can be DRI in small teams)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">RACI (Responsible, Accountable, Consulted, Informed)</h4>
                  <p className="text-sm text-slate-700">
                    Define per template (e.g., guides, comparisons, local pages). Keep it visible in your tracker.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Handoffs</h4>
                  <p className="text-sm text-slate-700">
                    Each step requires a definition of done (e.g., draft must include sources, image list, internal-link anchors)
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="style-voice" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">3. Editorial Style & Voice System</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Tone of Voice (TOV)</h4>
                  <p className="text-sm text-slate-700">
                    Pick 3–5 traits (e.g., Clear, Practical, Evidence-led, Friendly). Include do/don't examples.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Structure Standards</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Intros: state the user's job and outcome within 3 sentences</li>
                    <li>• Subheads: descriptive H2/H3; bullets for steps/criteria; summary box when useful</li>
                    <li>• Claims: cite at least one reputable source for any statistic or regulation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Linking & Sourcing</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Internal links: hub ↔ in intro or outro; 2–4 sibling ↔ links contextually</li>
                    <li>• External links: cite sources that improve trust (standards bodies, primary research)</li>
                    <li>• Anchors: natural language; avoid keyword stuffing</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="localization" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">4. Localization & International Operations</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Scope</h4>
                  <p className="text-sm text-slate-700">
                    True localization (examples, idioms, regulations, pricing, units) vs. literal translation
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Actions</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Build a market glossary (terms, metaphors to use/avoid)</li>
                    <li>• Localize titles/metas and CTAs to local idiom and promise</li>
                    <li>• Validate legal/regulatory references with local SMEs</li>
                    <li>• Maintain semantic parity across locales (same core entities/topics) while adapting angle and proof</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-900">Quality Bar</p>
                  <p className="text-sm text-purple-800">
                    A local reader should feel it was written for them, not translated at them.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="eeat-ops" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">5. E-E-A-T Operations</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Author Program</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Real bylines with bios and credentials; link to professional profiles where appropriate</li>
                    <li>• Capture experience: screenshots, failure stories, before/after, proprietary data</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Review Policy</h4>
                  <p className="text-sm text-slate-700">
                    For YMYL (Your Money or Your Life) or sensitive pages, add SME review and re-review cadence
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Transparency</h4>
                  <p className="text-sm text-slate-700">
                    Last-updated date and change notes for significant edits; methodology boxes for rankings/comparisons
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="compliance" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">6. Compliance & Accessibility</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Privacy & Data</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Avoid PII (Personally Identifiable Information) in screenshots; blur/redact</li>
                    <li>• Respect GDPR for EU audiences; align with your cookie and consent policy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Accessibility</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Follow WCAG basics: clear headings, alt text for meaningful images, descriptive link text, adequate contrast</li>
                    <li>• Readability target: short sentences, plain language for complex concepts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Claims & Legal</h4>
                  <p className="text-sm text-slate-700">
                    For regulated topics, cite official sources; include disclaimers where required
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="quality" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">7. Content Quality Framework</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Definition of Done (Per Page)</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Intent matched; unique value added (data, examples, tool, template, benchmark)</li>
                    <li>• E-E-A-T visible (author, sources, last updated)</li>
                    <li>• Internal links implemented (hub + siblings), anchors reviewed</li>
                    <li>• Snippet-capture blocks present where relevant (definition, Q&A, steps/table)</li>
                    <li>• Clear, testable CTA</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Peer Review Rubric (Score 1–5)</h4>
                  <ol className="text-sm text-slate-700 space-y-1 list-decimal list-inside">
                    <li>Intent fit</li>
                    <li>Structure & clarity</li>
                    <li>Proof/E-E-A-T</li>
                    <li>Differentiation</li>
                    <li>Conversion readiness</li>
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="measurement" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">8. Measurement & Cadences</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">KPI Tiers</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• <strong>Leading:</strong> pages shipped vs. plan; hubs with ≥5 spokes; presence in featured snippet/PAA</li>
                    <li>• <strong>Lagging:</strong> impressions, CTR, average position, assisted conversions</li>
                    <li>• <strong>Quality diagnostics:</strong> scroll depth, time on page, cannibalization cases, update velocity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Review Rhythm</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• <strong>Weekly:</strong> progress standup, blockers, scope changes</li>
                    <li>• <strong>Monthly:</strong> performance review by cluster (not page), identify refreshes/consolidations</li>
                    <li>• <strong>Quarterly:</strong> strategy retro; reset goals and capacity</li>
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
              <li>• Shipping content with no DRI or dates—things stall</li>
              <li>• Over-approvals that add delay without improving quality</li>
              <li>• "Me-too" drafts that lack proof or a fresh angle</li>
              <li>• Treating localization as translation—no local proof, idioms, or pricing</li>
              <li>• Ignoring accessibility—unlabeled images, generic link text ("click here")</li>
            </ul>
          </CardContent>
        </Card>

        {/* How to Operationalize */}
        <Card className="border-2 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900">How to Operationalize This Tomorrow</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-green-800 space-y-2">
              <li>• Appoint a DRI for each active cluster and backfill the RACI</li>
              <li>• Move every in-flight idea into the standard brief template before drafting</li>
              <li>• Stand up a weekly 25-minute editorial review (wins, stuck items, next week)</li>
              <li>• Reserve 20% of capacity for refreshes and consolidation—protect it like a budget</li>
              <li>• Build your first QA and localization checklists into the CMS as required fields</li>
            </ul>
          </CardContent>
        </Card>
      </div>
  );
}

