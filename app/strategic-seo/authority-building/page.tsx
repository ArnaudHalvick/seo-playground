"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { TrendingUp, Lightbulb, Link2, CheckCircle2 } from "lucide-react";

export default function AuthorityBuildingPage() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold">Authority Building & Off-Page SEO</h1>
          </div>
          <p className="text-xl text-slate-700 leading-relaxed">
            Strengthen your reputation, trust, and relevance beyond your own site. Earn high-quality mentions and links, 
            activate local signals, manage reviews and user-generated content, and use media to win visibility and clicks
            —while reinforcing E-E-A-T.
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
                  <span>Link acquisition & digital PR (linkable assets, outreach)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Local SEO operations (GBP, NAP consistency, location pages)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Reviews & UGC governance (collection, response, mining)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>Image & video SEO workflows (titles, thumbnails, chapters)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                  <span>E-E-A-T amplification (authors, citations, third-party proof)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Deliverables</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Linkable asset plan (data study, tool/template, local resource) with angles and targets</li>
                <li>• Outreach dossiers (media lists, journalist hooks, partner pitches)</li>
                <li>• Local SEO kit (GBP optimization checklist, NAP audit, photo/video plan)</li>
                <li>• Reviews/UGC program (ask triggers, response policies, highlight criteria)</li>
                <li>• Media playbook (image/video metadata guidelines, embed strategy)</li>
                <li>• Proof pack (press logos, certifications, awards, testimonials, expert bios)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Workflow */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Link2 className="h-7 w-7 text-purple-600" />
            Workflow Overview
          </h2>
          <Alert>
            <AlertDescription className="text-sm">
              <strong>Process:</strong> Identify linkable gaps by cluster → Build one asset per quarter with PR angles → 
              Run focused outreach sprints → Operationalize Local SEO → Scale reviews & UGC → Publish image/video with winning metadata → Track wins; iterate
            </AlertDescription>
          </Alert>
        </div>

        {/* Detailed Framework */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Authority Building Framework</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="link-acquisition" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">1. Link Acquisition & Digital PR</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Goals</h4>
                  <p className="text-sm text-slate-700">
                    Earn editorially placed, relevant links and brand mentions that real people would click
                    —no junk directories or paid link schemes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Linkable Asset Types</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Data studies: proprietary usage data or curated industry stats with charts (make "quote-worthy" nuggets)</li>
                    <li>• Tools & templates: calculators, checklists, planners, audit templates</li>
                    <li>• Definitive guides: genuinely comprehensive, with original examples and visuals</li>
                    <li>• Local resources: curated lists/maps, event calendars, compliance guides</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Outreach Targets</h4>
                  <p className="text-sm text-slate-700">
                    Journalists/bloggers (beats that match your asset), niche publications, newsletters, partners/suppliers, 
                    universities/associations, resource pages, community sites, podcasts
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Pitch Anatomy</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Hook (why now: seasonality, regulation change, trend)</li>
                    <li>• One insight (contrarian or surprising stat)</li>
                    <li>• Why you (methodology, sample size, expertise)</li>
                    <li>• Easy pickup (pull-quotes, charts, embed options)</li>
                    <li>• Follow-ups (fresh angles for different beats)</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-900">Quality Bar</p>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Relevance to the page you need to strengthen (cluster alignment)</li>
                    <li>• Natural, branded or partial-match anchors (no keyword stuffing)</li>
                    <li>• Placement on pages that get real traffic and are editorially curated</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Sustainable Habits</h4>
                  <p className="text-sm text-slate-700">
                    Quarterly asset → outreach cycle; weekly micro-pitches for timely opportunities. 
                    Maintain a CRM/spreadsheet: contact, angle pitched, status, links earned, follow-up date
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="local-seo" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">2. Local SEO (Non-Dev Operations)</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Google Business Profile (GBP) Essentials</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Primary & secondary categories, services, business description with value props</li>
                    <li>• NAP (Name-Address-Phone) consistency across major citations; track changes</li>
                    <li>• Photos/videos (authentic, recent, georelevant), Products/Services entries, FAQ</li>
                    <li>• Weekly posts (offers, events, updates), messaging (if staffed), hours (including holidays)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Location Pages (Editorial Side)</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Unique local proof (team photos, storefront/interior, maps/directions, parking, transit)</li>
                    <li>• Local testimonials/case studies + community involvement (sponsorships, events)</li>
                    <li>• Local FAQs (neighborhood specifics, regulations, delivery/coverage)</li>
                    <li>• Internal links from relevant articles to location pages with natural anchors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Citations & Directories</h4>
                  <p className="text-sm text-slate-700">
                    Prioritize quality/industry/local sites; fix inconsistencies; avoid mass low-quality submissions
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="reviews-ugc" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">3. Reviews & UGC Governance</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Collection System</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Identify "happy moments" for the ask (delivery confirmation, milestone, support resolution)</li>
                    <li>• Use concise, mobile-friendly request flows; rotate platforms to diversify (GBP, industry sites)</li>
                    <li>• Incentivize ethically (e.g., draw for feedback, not for 5-star ratings)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Response Policy</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Respond to all reviews; acknowledge positives, resolve negatives publicly then move to private</li>
                    <li>• For issues: apologize → diagnose → offer next step; sign with a human name + role</li>
                    <li>• Escalate recurring themes to product/support; close the loop</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Reuse & Insight Mining</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Surface reviews on key pages (snippets, carousels), with permission when required</li>
                    <li>• Mine UGC for language (objections, benefits) to improve copy, FAQs, and briefs</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="image-video-seo" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">4. Image & Video SEO (Workflow, No Code)</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Strategy</h4>
                  <p className="text-sm text-slate-700">
                    Choose topics where visuals help users accomplish the job faster and where SERP shows image/video features.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Video Checklist</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Titles that mirror searcher phrasing; clear value promise up front</li>
                    <li>• Descriptions with summary, time-stamped chapters (00:00 intro, 01:12 step 1, etc.)</li>
                    <li>• On-screen text that reinforces key steps; end-screen with next video/CTA</li>
                    <li>• Publish on your channel and embed on the most relevant page (add short textual summary for context)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Image Checklist</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Purposeful visuals: steps, comparisons, before/after, diagrams</li>
                    <li>• Descriptive filenames and captions that add meaning for users (avoid keyword spam)</li>
                    <li>• Place near the relevant section; reference in copy to increase engagement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Thumbnails</h4>
                  <p className="text-sm text-slate-700">
                    Telegraph the answer/benefit; clear subject; minimal text; face or focal object when relevant
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="eeat-amplification" className="border-2 border-purple-100 rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <span className="font-semibold">5. E-E-A-T Amplification</span>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Visible Expertise</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Real bylines with bios/credentials; link to profiles (speaker pages, publications)</li>
                    <li>• Methodology boxes for rankings/reviews; cite reputable sources</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Third-Party Proof</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Press/awards logos, certifications, client logos (with permission)</li>
                    <li>• Case studies with outcomes and screenshots; quotes from recognized experts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Consistency</h4>
                  <p className="text-sm text-slate-700">
                    Align claims and positioning across your site, GBP, social profiles, and outreach materials
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Measurement */}
        <Card className="mb-8 border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900">Measurement (Off-Page Focus)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Link & Mention Impact</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• New referring domains tied to clusters; anchor diversity; pages strengthened (target URLs)</li>
                <li>• Assisted metrics: uplift in impressions/positions/CTR for target pages</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Local</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• GBP actions (calls, direction requests, website clicks), photo views vs. peers</li>
                <li>• Local rankings directionally (avoid obsessing over pin-point ranks), conversions per location page</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Reviews & UGC</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Review velocity, average rating, response time SLA, sentiment themes</li>
                <li>• UGC reuse rate (quotes/screens used in pages or ads)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Media</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Video retention and click-through from thumbnails; page engagement after video views</li>
                <li>• Image-led traffic to sections; time on page where visuals are added</li>
              </ul>
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
              <li>• Chasing quantity of links over quality/relevance</li>
              <li>• Generic mass outreach; no angle, no personalization</li>
              <li>• Thin "location pages" with copy-paste content and stock photos</li>
              <li>• Review asks only once (no timing/trigger logic) and no public responses</li>
              <li>• Videos with vague titles/thumbnails; embeds without surrounding context</li>
              <li>• Making bold claims without sources, authors, or visible expertise</li>
            </ul>
          </CardContent>
        </Card>

        {/* How to Operationalize */}
        <Card className="border-2 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900">How to Operationalize This Quarter</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-green-800 space-y-2">
              <li>• Pick one cluster that needs authority → plan a single linkable asset with two PR angles</li>
              <li>• Build a 30-contact targeted list; send 1st-line-personalized pitches in two waves</li>
              <li>• Fully optimize one high-impact GBP + refresh photos + add 3 local FAQs</li>
              <li>• Launch a review ask at one "happy moment" and set a 48h response SLA</li>
              <li>• Produce one short explainer video with chapters and embed it on the matching page</li>
              <li>• Add an E-E-A-T proof strip (press logos, awards, author bio) to your top two money pages</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

