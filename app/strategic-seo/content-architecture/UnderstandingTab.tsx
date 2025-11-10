import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  FileText,
  GitBranch,
  Edit3,
  Shield,
  Link2,
  RefreshCw,
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
              <span className="font-semibold">E-E-A-T:</span> Experience, Expertise,
              Authoritativeness, Trustworthiness
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">SERP:</span> Search Engine Results Page
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">CTA:</span> Call To Action
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">PLP:</span> Product Listing Page
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">PAA:</span> People Also Ask
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">H1/H2/H3:</span> Heading levels (HTML structure)
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">CTR:</span> Click-Through Rate
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">UX:</span> User Experience
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
                    <GitBranch className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Semantic Cluster Architecture</h4>
                      <p className="text-xs text-slate-700">
                        Design hub-spoke structures where hubs are definitive guides and spokes
                        cover sub-tasks, comparisons, tools, and FAQs—all interlinked to signal
                        comprehensive coverage.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Content Briefs at Scale</h4>
                      <p className="text-xs text-slate-700">
                        Create repeatable brief templates with SERP analysis, outlines, proof
                        requirements, internal links, and differentiation angles—so every piece
                        starts strong.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Edit3 className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">On-Page Copy & UX</h4>
                      <p className="text-xs text-slate-700">
                        Master titles, intros, scannability, CTAs (Call To Action), and visual
                        hierarchy—all editorial skills that improve rankings and conversions without
                        touching code.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 bg-amber-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">E-E-A-T Implementation</h4>
                      <p className="text-xs text-slate-700">
                        Display author credentials, cite reputable sources, maintain trust pages
                        (About, Editorial Guidelines, Privacy), and showcase third-party proof to
                        build credibility.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-indigo-200 bg-indigo-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Link2 className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Internal Linking Strategy</h4>
                      <p className="text-xs text-slate-700">
                        Wire editorial internal links with descriptive anchors—spokes link to hubs,
                        siblings link to each other—to distribute authority and guide user journeys.
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
                      <h4 className="font-semibold mb-1">Content Refresh & Pruning</h4>
                      <p className="text-xs text-slate-700">
                        Detect decay (traffic drops), intent drift (SERP format changes), and
                        staleness. Refresh, consolidate, or prune to maintain quality and relevance.
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
                  <h4 className="font-semibold text-sm">Topical Map</h4>
                  <p className="text-xs text-slate-700">
                    Visual cluster map showing hubs, spokes, adjacent entities (brands, features,
                    locations), ownership assignments, and coverage definition (when a cluster is
                    &quot;done&quot;).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Briefs at Scale</h4>
                  <p className="text-xs text-slate-700">
                    Repeatable template with goal, audience, primary keyword, SERP read, outline,
                    proof requirements, differentiation, internal links, CTA plan, snippet targets,
                    and maintenance triggers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">On-Page Standards</h4>
                  <p className="text-xs text-slate-700">
                    Title/meta/H1 rules (≤60 chars for title, ≤155 for meta), intro pattern
                    (job → outcome → proof), section kits (subheads, bullets, examples), and CTA
                    placement guidelines.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Internal Linking Plan</h4>
                  <p className="text-xs text-slate-700">
                    Required links per page template (spoke → hub, 2-4 sibling links), anchor text
                    guardrails (descriptive, not keyword-stuffed), and cannibalization fixes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Refresh Calendar</h4>
                  <p className="text-xs text-slate-700">
                    Triggers (traffic decay, intent drift, outdated info), review cadence (quarterly
                    for strategic clusters), and consolidation rules (merge overlaps into strongest
                    URL).
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
            6-Step Content Architecture Workflow
          </CardTitle>
          <CardDescription>
            From strategic planning to ongoing optimization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Design the Architecture</h4>
                <p className="text-xs text-slate-600">
                  Map hubs, spokes, page types by intent, coverage definitions
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
                <h4 className="font-semibold text-sm">Create Content Briefs</h4>
                <p className="text-xs text-slate-600">
                  SERP analysis, outlines, proof requirements, internal links
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
                <h4 className="font-semibold text-sm">Draft & Optimize On-Page Elements</h4>
                <p className="text-xs text-slate-600">
                  Titles, metas, intros, structure, CTAs, visuals, E-E-A-T signals
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
                <h4 className="font-semibold text-sm">Wire Internal Links</h4>
                <p className="text-xs text-slate-600">
                  Spoke → hub, sibling links, hub → curated spokes
                </p>
              </div>
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">Creation</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex-shrink-0">
                5
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Publish & Measure</h4>
                <p className="text-xs text-slate-600">
                  Monitor impressions, CTR, engagement, conversions
                </p>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-300">Launch</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex-shrink-0">
                6
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Refresh or Prune</h4>
                <p className="text-xs text-slate-600">
                  Detect decay, update content, consolidate overlaps, retire low-value pages
                </p>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-300">
                Optimization
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

