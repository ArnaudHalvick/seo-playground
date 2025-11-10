import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  FileText,
  Users,
  Search,
  Brain,
  Link2,
  Award,
  BarChart3,
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
              <span className="font-semibold">ICP:</span> Ideal Customer Profile
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">JTBD:</span> Jobs To Be Done
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">VoC:</span> Voice of Customer
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">SERP:</span> Search Engine Results Page
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">GSC:</span> Google Search Console
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">GA4:</span> Google Analytics 4
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">PAA:</span> People Also Ask
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">ICE:</span> Impact, Confidence, Effort (scoring model)
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">E-E-A-T:</span> Experience, Expertise,
              Authoritativeness, Trustworthiness
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">PLP:</span> Product Listing Page
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">CTA:</span> Call To Action
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <span className="font-semibold">CTR:</span> Click-Through Rate
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
                    <Users className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Market & Audience Discovery</h4>
                      <p className="text-xs text-slate-700">
                        Build ICPs (Ideal Customer Profiles), identify JTBD (Jobs To Be Done), and
                        mine VoC (Voice of Customer) data from sales calls, reviews, and support
                        tickets.
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
                      <h4 className="font-semibold mb-1">Keyword Research & Clustering</h4>
                      <p className="text-xs text-slate-700">
                        Discover keywords, classify search intent (informational, commercial,
                        transactional), and group them into semantic clusters with one primary
                        keyword per URL.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Brain className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">SERP & Intent Analysis</h4>
                      <p className="text-xs text-slate-700">
                        Inventory SERP (Search Engine Results Page) features like PAA (People Also
                        Ask), featured snippets, and result types to understand what Google rewards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 bg-amber-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Link2 className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Topical Authority Planning</h4>
                      <p className="text-xs text-slate-700">
                        Design hub-and-spoke content architecture where hubs are definitive guides
                        and spokes are supporting pages covering sub-topics and related queries.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-indigo-200 bg-indigo-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Competitor Intelligence</h4>
                      <p className="text-xs text-slate-700">
                        Analyze SERP competitors (often different from business competitors) to
                        identify E-E-A-T signals, content gaps, and differentiation opportunities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-rose-200 bg-rose-50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <BarChart3 className="h-5 w-5 text-rose-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Prioritization & Forecasting</h4>
                      <p className="text-xs text-slate-700">
                        Use ICE scoring (Impact × Confidence ÷ Effort) to prioritize opportunities
                        and estimate traffic potential with directional forecasting.
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
                  <h4 className="font-semibold text-sm">Audience Dossier</h4>
                  <p className="text-xs text-slate-700">
                    3-5 ICP one-pagers with buying stages, language bank of customer phrases, and
                    top objections that need addressing in content.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Keyword Universe</h4>
                  <p className="text-xs text-slate-700">
                    Deduped, clustered keyword list with intent labels (informational, commercial,
                    transactional) and one primary keyword per planned URL.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">SERP Playbook</h4>
                  <p className="text-xs text-slate-700">
                    Per-cluster documentation of result types, feature targets (snippets, PAA
                    boxes), and content format recommendations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Topical Map</h4>
                  <p className="text-xs text-slate-700">
                    Visual hub-spoke diagram showing content relationships, internal linking plan,
                    and coverage definition for each hub.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">6-12 Week Roadmap</h4>
                  <p className="text-xs text-slate-700">
                    Prioritized content calendar with ICE scores, owners, milestones, and
                    draft/publish dates for each piece.
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
            7-Step Research Workflow
          </CardTitle>
          <CardDescription>
            The complete process from market discovery to content briefs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Discover Market & Audience</h4>
                <p className="text-xs text-slate-600">
                  Build ICPs, identify JTBD, extract customer language
                </p>
              </div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-300">Discovery</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Harvest & Cluster Keywords</h4>
                <p className="text-xs text-slate-600">
                  Expand seed terms, classify intent, group semantically
                </p>
              </div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-300">Discovery</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Model SERPs & Intent</h4>
                <p className="text-xs text-slate-600">
                  Inventory result types, features, content patterns
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
                <h4 className="font-semibold text-sm">Design Topical Map</h4>
                <p className="text-xs text-slate-600">
                  Create hub-spoke architecture with linking plan
                </p>
              </div>
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">Analysis</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex-shrink-0">
                5
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Analyze Competitors</h4>
                <p className="text-xs text-slate-600">
                  Identify SERP winners, find differentiation angles
                </p>
              </div>
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">Analysis</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex-shrink-0">
                6
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Size & Prioritize</h4>
                <p className="text-xs text-slate-600">
                  Apply ICE scoring, forecast traffic, build roadmap
                </p>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-300">Execution</Badge>
            </div>

            <div className="ml-5 border-l-2 border-slate-200 h-4"></div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold flex-shrink-0">
                7
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Brief & Schedule</h4>
                <p className="text-xs text-slate-600">
                  Create detailed content briefs, assign owners, set dates
                </p>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-300">Execution</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
