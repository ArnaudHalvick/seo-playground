import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  FileText,
  Calendar,
  Users,
  Shield,
  Globe,
  ClipboardCheck,
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
              <span className="font-semibold">DRI:</span> Directly Responsible Individual
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">RACI:</span> Responsible, Accountable, Consulted,
              Informed
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">SME:</span> Subject Matter Expert
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">SLA:</span> Service Level Agreement
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">TOV:</span> Tone of Voice
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">E-E-A-T:</span> Experience, Expertise,
              Authoritativeness, Trustworthiness
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">YMYL:</span> Your Money or Your Life (sensitive
              topics)
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">PII:</span> Personally Identifiable Information
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">GDPR:</span> General Data Protection Regulation
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">WCAG:</span> Web Content Accessibility Guidelines
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
                    <Calendar className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Editorial Planning</h4>
                      <p className="text-xs text-slate-700">
                        Create rolling 12-week calendars by cluster, assign DRI (Directly
                        Responsible Individual), set SLA (Service Level Agreement) timing, track
                        capacity and dependencies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Governance & Workflows</h4>
                      <p className="text-xs text-slate-700">
                        Design clear RACI (Responsible, Accountable, Consulted, Informed), define
                        handoffs, establish approvals, and create definition-of-done per step.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Style & Voice Operations</h4>
                      <p className="text-xs text-slate-700">
                        Build TOV (Tone of Voice) guide, formatting standards, sourcing rules, and
                        internal linking conventions—so all content sounds like it came from one
                        team.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 bg-amber-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Localization & International Ops</h4>
                      <p className="text-xs text-slate-700">
                        True localization (examples, idioms, regulations, pricing) vs. literal
                        translation. Build market glossaries and validate with local SMEs (Subject
                        Matter Experts).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-indigo-200 bg-indigo-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">E-E-A-T Operations</h4>
                      <p className="text-xs text-slate-700">
                        Author sourcing, credential display, review loops for YMYL (Your Money or
                        Your Life) topics, transparency with last-updated dates and methodology
                        boxes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-rose-200 bg-rose-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <ClipboardCheck className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Compliance & Accessibility</h4>
                      <p className="text-xs text-slate-700">
                        GDPR (General Data Protection Regulation) for EU audiences, avoid PII
                        (Personally Identifiable Information) in screenshots, follow WCAG (Web
                        Content Accessibility Guidelines) basics.
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
                  <h4 className="font-semibold text-sm">Quarterly Content Roadmap</h4>
                  <p className="text-xs text-slate-700">
                    12-week rolling calendar with owners, SLAs (Service Level Agreements),
                    dependencies, and risk log for blockers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Production SOP</h4>
                  <p className="text-xs text-slate-700">
                    Source-of-truth brief template and step-by-step SOP for brief → draft → review
                    → publish → refresh cycle.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Editorial Style Guide</h4>
                  <p className="text-xs text-slate-700">
                    TOV (Tone of Voice) traits, structure standards, claims sourcing rules,
                    internal linking conventions, anchor text best practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Localization Playbook</h4>
                  <p className="text-xs text-slate-700">
                    Market research notes, terminology glossary, examples/idioms to use/avoid,
                    local SME review process.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">E-E-A-T Pack</h4>
                  <p className="text-xs text-slate-700">
                    Author bios with credentials, review policy for YMYL (Your Money or Your Life)
                    topics, sourcing standards, methodology templates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">QA Checklists</h4>
                  <p className="text-xs text-slate-700">
                    Pre-publish checklist (intent, E-E-A-T, links), 14-45 day optimization pass,
                    quarterly refresh criteria.
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
            8-Step Production Workflow
          </CardTitle>
          <CardDescription>
            From intake to optimization—the complete content lifecycle
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Intake & Prioritization</h4>
                <p className="text-xs text-slate-600">
                  Cluster priorities from strategy, capacity per role, seasonal moments
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
                <h4 className="font-semibold text-sm">Briefing</h4>
                <p className="text-xs text-slate-600">
                  Complete brief with SERP analysis, outline, proof requirements, internal links
                </p>
              </div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-300">Planning</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Drafting (SME or Writer)</h4>
                <p className="text-xs text-slate-600">
                  First draft with sources, image list, internal link anchors
                </p>
              </div>
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">Creation</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">SEO Review & Edit</h4>
                <p className="text-xs text-slate-600">
                  Validate intent fit, SERP alignment, internal links, snippet opportunities
                </p>
              </div>
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">Creation</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex-shrink-0">
                5
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Legal/Brand Checks (If Needed)</h4>
                <p className="text-xs text-slate-600">
                  Optional gate for sensitive topics, regulatory content, brand claims
                </p>
              </div>
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">Creation</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex-shrink-0">
                6
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Publish & Annotate</h4>
                <p className="text-xs text-slate-600">
                  Format, upload, set publish date, log in tracker
                </p>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-300">Launch</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex-shrink-0">
                7
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Measure & Optimize</h4>
                <p className="text-xs text-slate-600">
                  14-45 day pass: check GSC, improve CTR, monitor engagement
                </p>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-300">
                Optimization
              </Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex-shrink-0">
                8
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Refresh/Retire</h4>
                <p className="text-xs text-slate-600">
                  Quarterly review: update content, consolidate overlaps, or retire low-value pages
                </p>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-300">
                Maintenance
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

