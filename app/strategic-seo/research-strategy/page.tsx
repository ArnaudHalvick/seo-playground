"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  Info,
  Search,
  Brain,
  Sparkles,
  AlertTriangle,
  BarChart3,
  FileText,
  Rocket,
  Users,
  Link2,
  Award,
} from "lucide-react";

export default function ResearchStrategyPage() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold">Research & Strategy</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Build an evidence-based plan that aligns business goals with searcher demand. Convert
            raw market and keyword signals into intent-led clusters, a content roadmap, and
            prioritized bets with measurable outcomes.
          </p>
          <Alert className="border-purple-300 bg-purple-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Foundation of SEO Success:</strong> Strategic research transforms guesswork
              into data-driven decisions. This phase determines what content to create, how to
              structure it, and which opportunities to pursue first.
            </AlertDescription>
          </Alert>
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="understanding" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="understanding">Understanding</TabsTrigger>
            <TabsTrigger value="discovery">Discovery Phase</TabsTrigger>
            <TabsTrigger value="analysis">Analysis Phase</TabsTrigger>
            <TabsTrigger value="execution">Execution Phase</TabsTrigger>
          </TabsList>

          {/* Tab 1: Understanding */}
          <TabsContent value="understanding" className="space-y-6">
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
                      <span className="font-semibold">ICE:</span> Impact, Confidence, Effort
                      (scoring model)
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
                  <CardDescription>
                    What you&apos;ll learn and what you&apos;ll deliver
                  </CardDescription>
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
                                Build ICPs (Ideal Customer Profiles), identify JTBD (Jobs To Be
                                Done), and mine VoC (Voice of Customer) data from sales calls,
                                reviews, and support tickets.
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
                                Discover keywords, classify search intent (informational,
                                commercial, transactional), and group them into semantic clusters
                                with one primary keyword per URL.
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
                                Inventory SERP (Search Engine Results Page) features like PAA
                                (People Also Ask), featured snippets, and result types to understand
                                what Google rewards.
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
                                Design hub-and-spoke content architecture where hubs are definitive
                                guides and spokes are supporting pages covering sub-topics and
                                related queries.
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
                                Analyze SERP competitors (often different from business competitors)
                                to identify E-E-A-T signals, content gaps, and differentiation
                                opportunities.
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
                                Use ICE scoring (Impact × Confidence ÷ Effort) to prioritize
                                opportunities and estimate traffic potential with directional
                                forecasting.
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
                            3-5 ICP one-pagers with buying stages, language bank of customer
                            phrases, and top objections that need addressing in content.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-sm">Keyword Universe</h4>
                          <p className="text-xs text-slate-700">
                            Deduped, clustered keyword list with intent labels (informational,
                            commercial, transactional) and one primary keyword per planned URL.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-sm">SERP Playbook</h4>
                          <p className="text-xs text-slate-700">
                            Per-cluster documentation of result types, feature targets (snippets,
                            PAA boxes), and content format recommendations.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-sm">Topical Map</h4>
                          <p className="text-xs text-slate-700">
                            Visual hub-spoke diagram showing content relationships, internal linking
                            plan, and coverage definition for each hub.
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
                      <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                        Analysis
                      </Badge>
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
                      <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                        Analysis
                      </Badge>
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
                      <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                        Analysis
                      </Badge>
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
                      <Badge className="bg-green-100 text-green-800 border-green-300">
                        Execution
                      </Badge>
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
                      <Badge className="bg-green-100 text-green-800 border-green-300">
                        Execution
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 2: Discovery Phase */}
          <TabsContent value="discovery" className="space-y-6">
            <div className="space-y-6">
              {/* Market & Audience Discovery */}
              <Card className="border-2 border-blue-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Market & Audience Discovery
                  </CardTitle>
                  <CardDescription>
                    Understand who you&apos;re creating content for and what problems they&apos;re
                    trying to solve
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Info className="h-4 w-4 text-blue-600" />
                      Why This Matters
                    </h4>
                    <p className="text-sm text-slate-700">
                      Without deep audience understanding, you&apos;ll create content that uses the
                      wrong language, answers the wrong questions, and fails to resonate. ICPs and
                      JTBD research ensures every piece of content speaks directly to your target
                      audience&apos;s needs.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Data Sources (Inputs)</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-white border border-slate-200 rounded p-3">
                        <h5 className="font-semibold text-sm mb-1">Internal Sources</h5>
                        <ul className="text-xs text-slate-700 space-y-1">
                          <li>• Sales/support call recordings</li>
                          <li>• Win/loss analysis notes</li>
                          <li>• Feature request tickets</li>
                          <li>• Onboarding questions</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-slate-200 rounded p-3">
                        <h5 className="font-semibold text-sm mb-1">External Sources</h5>
                        <ul className="text-xs text-slate-700 space-y-1">
                          <li>• Reddit/forum discussions</li>
                          <li>• G2/Capterra reviews</li>
                          <li>• Competitor positioning</li>
                          <li>• Industry reports</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Process Steps</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">
                          1. Define ICPs (Ideal Customer Profiles)
                        </h5>
                        <p className="text-xs text-slate-700 mb-2">
                          Create 3-5 detailed profiles of your best customers including
                          demographics, company attributes, goals, and pain points.
                        </p>
                        <div className="bg-white p-2 rounded text-xs space-y-1">
                          <p className="font-semibold">Example ICP Elements:</p>
                          <p>• Role: Marketing Director at B2B SaaS (50-200 employees)</p>
                          <p>• Goal: Scale content production without sacrificing quality</p>
                          <p>• Pain: Small team, limited budget, CEO pressure for leads</p>
                        </div>
                      </div>

                      <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">
                          2. Identify JTBD (Jobs To Be Done)
                        </h5>
                        <p className="text-xs text-slate-700 mb-2">
                          What functional and emotional &quot;jobs&quot; are customers hiring your
                          product/content to do? Frame as: &quot;When [situation], I want to
                          [action], so I can [outcome].&quot;
                        </p>
                        <div className="bg-white p-2 rounded text-xs space-y-1">
                          <p className="font-semibold">Example JTBD:</p>
                          <p>
                            &quot;When planning Q2 content, I want to find high-ROI topics, so I can
                            justify my budget and hit lead targets.&quot;
                          </p>
                        </div>
                      </div>

                      <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">
                          3. Extract Language Bank (VoC)
                        </h5>
                        <p className="text-xs text-slate-700 mb-2">
                          Document exact phrases customers use to describe pains, desired outcomes,
                          and objections. This becomes your keyword seed list and copy inspiration.
                        </p>
                        <div className="bg-white p-2 rounded text-xs">
                          <p className="font-semibold mb-1">Real Customer Phrases:</p>
                          <p>
                            &quot;We&apos;re drowning in keyword data but don&apos;t know what to
                            prioritize&quot;
                          </p>
                          <p>
                            &quot;Need to prove SEO value to leadership with real pipeline
                            impact&quot;
                          </p>
                        </div>
                      </div>

                      <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">4. Map Buying Stages</h5>
                        <p className="text-xs text-slate-700 mb-2">
                          Plot your ICPs through awareness stages: Problem Aware → Solution Aware →
                          Vendor Aware → Ready to Buy. Different content needed at each stage.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Outputs</h4>
                    <div className="bg-slate-50 border border-slate-200 rounded p-4">
                      <ul className="text-sm text-slate-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>
                            3-5 ICP one-pagers with demographics, goals, pains, and evaluation
                            criteria
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>JTBD statements for each ICP at different buying stages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>
                            Language bank: 50-100 exact customer phrases organized by theme
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Top 10 objections/concerns that must be addressed in content</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Alert className="border-purple-300 bg-purple-50">
                    <Sparkles className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      <strong>Quick Check:</strong> Can you name the five most repeated pains and
                      the three evaluation criteria your ICPs use when comparing solutions? If not,
                      dig deeper.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Keyword Research & Clustering */}
              <Card className="border-2 border-purple-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-purple-600" />
                    Keyword Research & Clustering
                  </CardTitle>
                  <CardDescription>
                    Transform customer language into searchable keywords organized by intent
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Info className="h-4 w-4 text-purple-600" />
                      Why This Matters
                    </h4>
                    <p className="text-sm text-slate-700">
                      Keyword clustering prevents cannibalization (multiple pages competing for the
                      same term) and creates clear content assignments. Each cluster becomes a
                      content hub with supporting spokes.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Keyword Sources (Inputs)</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      <div className="bg-white border border-slate-200 rounded p-2 text-center">
                        <p className="font-semibold text-xs">Site Search</p>
                      </div>
                      <div className="bg-white border border-slate-200 rounded p-2 text-center">
                        <p className="font-semibold text-xs">Competitor Pages</p>
                      </div>
                      <div className="bg-white border border-slate-200 rounded p-2 text-center">
                        <p className="font-semibold text-xs">PPC Terms</p>
                      </div>
                      <div className="bg-white border border-slate-200 rounded p-2 text-center">
                        <p className="font-semibold text-xs">GSC Queries</p>
                      </div>
                      <div className="bg-white border border-slate-200 rounded p-2 text-center">
                        <p className="font-semibold text-xs">Autosuggest</p>
                      </div>
                      <div className="bg-white border border-slate-200 rounded p-2 text-center">
                        <p className="font-semibold text-xs">PAA Boxes</p>
                      </div>
                      <div className="bg-white border border-slate-200 rounded p-2 text-center">
                        <p className="font-semibold text-xs">Related Searches</p>
                      </div>
                      <div className="bg-white border border-slate-200 rounded p-2 text-center">
                        <p className="font-semibold text-xs">Keyword Tools</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Process Steps</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">1. Expand with Modifiers</h5>
                        <p className="text-xs text-slate-700 mb-2">
                          Take seed terms and add intent modifiers to discover the full keyword
                          universe.
                        </p>
                        <div className="bg-white p-2 rounded text-xs">
                          <p className="mb-1">Seed: &quot;content strategy&quot;</p>
                          <p>→ how to build content strategy</p>
                          <p>→ content strategy template</p>
                          <p>→ content strategy vs content marketing</p>
                          <p>→ best content strategy tools</p>
                        </div>
                      </div>

                      <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">2. Classify Intent</h5>
                        <p className="text-xs text-slate-700 mb-2">
                          Tag each keyword with search intent to determine content type.
                        </p>
                        <div className="grid md:grid-cols-2 gap-2 text-xs">
                          <div className="bg-blue-100 p-2 rounded">
                            <p className="font-semibold">Informational</p>
                            <p className="text-slate-700">
                              Learning/understanding (guides, tutorials)
                            </p>
                          </div>
                          <div className="bg-amber-100 p-2 rounded">
                            <p className="font-semibold">Commercial Investigation</p>
                            <p className="text-slate-700">Comparing options (reviews, vs pages)</p>
                          </div>
                          <div className="bg-green-100 p-2 rounded">
                            <p className="font-semibold">Transactional</p>
                            <p className="text-slate-700">Ready to buy (pricing, demo, signup)</p>
                          </div>
                          <div className="bg-slate-100 p-2 rounded">
                            <p className="font-semibold">Navigational</p>
                            <p className="text-slate-700">
                              Finding specific brand/page (login, support)
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">3. Cluster Semantically</h5>
                        <p className="text-xs text-slate-700 mb-2">
                          Group keywords by topic, not exact match. One parent topic per hub; 4-10
                          spokes per hub.
                        </p>
                        <div className="bg-white p-3 rounded">
                          <p className="font-semibold text-xs mb-2">Example Cluster:</p>
                          <div className="space-y-2 text-xs">
                            <div className="bg-purple-100 p-2 rounded">
                              <p className="font-semibold">
                                🎯 Hub: &quot;SEO keyword research&quot;
                              </p>
                            </div>
                            <div className="ml-4 space-y-1">
                              <p className="bg-slate-50 p-1 rounded">
                                ↳ Spoke: keyword research tools
                              </p>
                              <p className="bg-slate-50 p-1 rounded">
                                ↳ Spoke: how to do keyword research
                              </p>
                              <p className="bg-slate-50 p-1 rounded">
                                ↳ Spoke: keyword research for local SEO
                              </p>
                              <p className="bg-slate-50 p-1 rounded">
                                ↳ Spoke: free vs paid keyword tools
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">
                          4. Map One Primary Keyword per URL
                        </h5>
                        <p className="text-xs text-slate-700">
                          Assign exactly one primary keyword to each planned page. Supporting
                          keywords are fine, but each URL should have one clear primary target to
                          prevent cannibalization.
                        </p>
                      </div>

                      <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">5. Score Each Keyword</h5>
                        <p className="text-xs text-slate-700 mb-2">
                          Formula: Volume × Clickability × Business Value × (1/Difficulty)
                        </p>
                        <div className="bg-white p-2 rounded text-xs space-y-1">
                          <p>
                            • <strong>Volume:</strong> Monthly search volume
                          </p>
                          <p>
                            • <strong>Clickability:</strong> CTR after SERP features (0-1)
                          </p>
                          <p>
                            • <strong>Business Value:</strong> How valuable is this traffic? (1-10)
                          </p>
                          <p>
                            • <strong>Difficulty:</strong> How hard to rank? (1-100)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Alert className="border-amber-300 bg-amber-50">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      <strong>Quality Bar:</strong> Each URL has exactly one primary keyword and a
                      small set of supporting variants. Long-tail variants live as spokes—not
                      separate hubs. This prevents cannibalization where multiple pages compete for
                      the same rankings.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 3: Analysis Phase */}
          <TabsContent value="analysis" className="space-y-6">
            <div className="space-y-6">
              {/* SERP & Intent Modeling */}
              <Card className="border-2 border-purple-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-600" />
                    SERP & Intent Modeling
                  </CardTitle>
                  <CardDescription>
                    Reverse-engineer what Google rewards for each keyword cluster
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Info className="h-4 w-4 text-purple-600" />
                      Why This Matters
                    </h4>
                    <p className="text-sm text-slate-700">
                      SERP (Search Engine Results Page) analysis shows what content format and
                      features Google considers best for a given intent. Writing a 2,000-word essay
                      when SERPs reward checklists is a recipe for failure.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">What to Inventory</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-sm mb-2 text-purple-900">Result Types</h5>
                        <div className="space-y-1 text-xs">
                          <div className="bg-white border border-slate-200 rounded p-2">
                            • Guides & tutorials
                          </div>
                          <div className="bg-white border border-slate-200 rounded p-2">
                            • Listicles (Top 10, Best X)
                          </div>
                          <div className="bg-white border border-slate-200 rounded p-2">
                            • PLPs (Product Listing Pages)
                          </div>
                          <div className="bg-white border border-slate-200 rounded p-2">
                            • Comparison pages (X vs Y)
                          </div>
                          <div className="bg-white border border-slate-200 rounded p-2">
                            • Tools & calculators
                          </div>
                          <div className="bg-white border border-slate-200 rounded p-2">
                            • Videos
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2 text-purple-900">
                          SERP Features
                        </h5>
                        <div className="space-y-1 text-xs">
                          <div className="bg-white border border-slate-200 rounded p-2">
                            • Featured snippet
                          </div>
                          <div className="bg-white border border-slate-200 rounded p-2">
                            • PAA (People Also Ask) boxes
                          </div>
                          <div className="bg-white border border-slate-200 rounded p-2">
                            • Image pack
                          </div>
                          <div className="bg-white border border-slate-200 rounded p-2">
                            • Video carousel
                          </div>
                          <div className="bg-white border border-slate-200 rounded p-2">
                            • Local pack (map + businesses)
                          </div>
                          <div className="bg-white border border-slate-200 rounded p-2">
                            • Reviews/ratings
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Analysis Process</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">1. Document Patterns</h5>
                        <p className="text-xs text-slate-700 mb-2">
                          For top 10 results, note: length, structure (H2/H3 patterns),
                          tables/images, examples used
                        </p>
                        <div className="bg-white p-2 rounded text-xs">
                          <p className="font-semibold mb-1">Example Pattern:</p>
                          <p>
                            &quot;How to write a resume&quot; → All top results are 1,500-2,500 word
                            guides with:
                          </p>
                          <p>• Step-by-step format (H2 per step)</p>
                          <p>• Multiple visual examples</p>
                          <p>• Downloadable templates</p>
                          <p>• FAQ section at bottom</p>
                        </div>
                      </div>

                      <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">
                          2. Identify Entity Expectations
                        </h5>
                        <p className="text-xs text-slate-700">
                          What products, brands, locations, or concepts are repeatedly mentioned
                          across top results? These entities should appear in your content too.
                        </p>
                      </div>

                      <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">
                          3. Target Snippet Opportunities
                        </h5>
                        <p className="text-xs text-slate-700 mb-2">
                          If a featured snippet exists, format your content to capture it:
                        </p>
                        <div className="bg-white p-2 rounded text-xs space-y-1">
                          <p>
                            • <strong>Definition snippet:</strong> 40-60 word paragraph
                          </p>
                          <p>
                            • <strong>List snippet:</strong> Numbered or bulleted list (5-8 items)
                          </p>
                          <p>
                            • <strong>Table snippet:</strong> Comparison table
                          </p>
                          <p>
                            • <strong>Steps snippet:</strong> Sequential how-to steps
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Output: Cluster Playbook</h4>
                    <div className="bg-slate-50 border border-slate-200 rounded p-4 text-sm">
                      <p className="mb-2">Document for each cluster:</p>
                      <ul className="space-y-1 text-xs text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-3 w-3 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Recommended page format (guide, listicle, comparison, tool)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-3 w-3 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Essential sections/H2s that top results share</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-3 w-3 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Required proof elements (data, screenshots, examples)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-3 w-3 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Snippet capture strategy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-3 w-3 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Freshness expectation (daily, monthly, annual updates)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Alert className="border-purple-300 bg-purple-50">
                    <Sparkles className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      <strong>Quick Check:</strong> Does your planned format match what Google
                      already rewards for the same intent? What unique value will you add (original
                      data, calculator, benchmark)?
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Topical Authority Planning */}
              <Card className="border-2 border-amber-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Link2 className="h-5 w-5 text-amber-600" />
                    Topical Authority Planning
                  </CardTitle>
                  <CardDescription>
                    Design hub-and-spoke content architecture that signals expertise
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Info className="h-4 w-4 text-amber-600" />
                      Why This Matters
                    </h4>
                    <p className="text-sm text-slate-700">
                      Google rewards comprehensive topic coverage. A single hub with no supporting
                      spokes signals shallow expertise. A full hub-spoke cluster shows you&apos;ve
                      covered the topic thoroughly.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Hub-Spoke Model</h4>
                    <div className="bg-white border-2 border-amber-200 rounded-lg p-6">
                      <div className="text-center mb-4">
                        <div className="inline-block bg-amber-100 border-2 border-amber-400 rounded-lg px-6 py-3">
                          <p className="font-bold text-amber-900">🎯 HUB</p>
                          <p className="text-xs text-amber-700">Definitive Guide</p>
                        </div>
                      </div>
                      <div className="flex justify-center mb-2">
                        <div className="text-amber-400 text-2xl">↓ ↓ ↓ ↓</div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div className="bg-slate-50 border border-slate-300 rounded p-2 text-center">
                          <p className="text-xs font-semibold">Spoke 1</p>
                          <p className="text-xs text-slate-600">Sub-task</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-300 rounded p-2 text-center">
                          <p className="text-xs font-semibold">Spoke 2</p>
                          <p className="text-xs text-slate-600">Comparison</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-300 rounded p-2 text-center">
                          <p className="text-xs font-semibold">Spoke 3</p>
                          <p className="text-xs text-slate-600">Tool/Template</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-300 rounded p-2 text-center">
                          <p className="text-xs font-semibold">Spoke 4</p>
                          <p className="text-xs text-slate-600">FAQ</p>
                        </div>
                      </div>
                      <div className="flex justify-center mt-2">
                        <div className="text-slate-400 text-sm">← Spokes link to each other →</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Planning Steps</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-l-amber-500 bg-amber-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">1. Define Hub Scope</h5>
                        <p className="text-xs text-slate-700 mb-2">
                          Hub = definitive page solving the core job. Write scope notes to avoid
                          overlap with neighboring hubs.
                        </p>
                        <div className="bg-white p-2 rounded text-xs">
                          <p className="font-semibold mb-1">Example Hub:</p>
                          <p>&quot;SEO Content Strategy&quot; (hub) covers planning & execution</p>
                          <p>
                            Does NOT cover: technical SEO (separate hub), link building (separate
                            hub)
                          </p>
                        </div>
                      </div>

                      <div className="border-l-4 border-l-amber-500 bg-amber-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">
                          2. Plan Spokes (4-10 per Hub)
                        </h5>
                        <p className="text-xs text-slate-700 mb-2">
                          Spokes drill into sub-tasks, comparisons, tools, common questions
                        </p>
                        <div className="bg-white p-2 rounded text-xs space-y-1">
                          <p>• Sub-task spoke: &quot;How to do keyword research&quot;</p>
                          <p>• Comparison spoke: &quot;Free vs paid SEO tools&quot;</p>
                          <p>• Tool spoke: &quot;Content brief template&quot;</p>
                          <p>• FAQ spoke: &quot;How often to update old content&quot;</p>
                        </div>
                      </div>

                      <div className="border-l-4 border-l-amber-500 bg-amber-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">3. Design Linking Plan</h5>
                        <p className="text-xs text-slate-700">
                          • Every spoke links up to hub (intro or conclusion)
                          <br />
                          • Every spoke links to 2-4 sibling spokes (contextually)
                          <br />
                          • Hub links to key spokes in a &quot;Next Steps&quot; section
                          <br />• Use descriptive anchors (what the user will learn)
                        </p>
                      </div>
                    </div>
                  </div>

                  <Alert className="border-red-300 bg-red-50">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      <strong>Pitfall to Avoid:</strong> Spawning multiple
                      &quot;near-duplicate&quot; spokes that split equity. If two spoke ideas target
                      the same intent, consolidate them into one stronger page.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Competitor Intelligence */}
              <Card className="border-2 border-indigo-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-indigo-600" />
                    Competitor Intelligence (SERP-First)
                  </CardTitle>
                  <CardDescription>
                    Identify SERP winners and find your differentiation angle
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Info className="h-4 w-4 text-indigo-600" />
                      Why This Matters
                    </h4>
                    <p className="text-sm text-slate-700">
                      Your SERP competitors (who ranks #1-#10) are often different from your
                      business competitors. Study what&apos;s winning in SERPs, not just who your
                      sales team competes with.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Analysis Framework</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-l-indigo-500 bg-indigo-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">1. Identify SERP Competitors</h5>
                        <p className="text-xs text-slate-700">
                          For each cluster, note who ranks #1-#5 for the primary keyword. These are
                          your real competitors for this topic (even if they&apos;re not business
                          rivals).
                        </p>
                      </div>

                      <div className="border-l-4 border-l-indigo-500 bg-indigo-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">2. Compare on Key Dimensions</h5>
                        <div className="bg-white p-2 rounded mt-2">
                          <div className="grid md:grid-cols-2 gap-2 text-xs">
                            <div className="border border-slate-200 rounded p-2">
                              <p className="font-semibold mb-1">Content Coverage</p>
                              <p className="text-slate-600">Topics/subtopics they cover</p>
                            </div>
                            <div className="border border-slate-200 rounded p-2">
                              <p className="font-semibold mb-1">Structure</p>
                              <p className="text-slate-600">Format, H2/H3 patterns, length</p>
                            </div>
                            <div className="border border-slate-200 rounded p-2">
                              <p className="font-semibold mb-1">Media</p>
                              <p className="text-slate-600">Images, videos, diagrams, tables</p>
                            </div>
                            <div className="border border-slate-200 rounded p-2">
                              <p className="font-semibold mb-1">Proof/E-E-A-T</p>
                              <p className="text-slate-600">
                                Data, author bios, citations, case studies
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-l-indigo-500 bg-indigo-50 p-3">
                        <h5 className="font-semibold text-sm mb-1">3. Choose Your Play</h5>
                        <div className="space-y-2 text-xs mt-2">
                          <div className="bg-green-100 border border-green-300 rounded p-2">
                            <p className="font-semibold text-green-900">Outdo (10× value)</p>
                            <p className="text-green-800">
                              Add unique data, better examples, interactive elements
                            </p>
                          </div>
                          <div className="bg-blue-100 border border-blue-300 rounded p-2">
                            <p className="font-semibold text-blue-900">Angle-Shift (new POV)</p>
                            <p className="text-blue-800">
                              Same topic, different audience or approach
                            </p>
                          </div>
                          <div className="bg-red-100 border border-red-300 rounded p-2">
                            <p className="font-semibold text-red-900">Avoid</p>
                            <p className="text-red-800">
                              If top results are all massive brands, find easier opportunities
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Alert className="border-indigo-300 bg-indigo-50">
                    <Sparkles className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      <strong>Quick Check:</strong> Can you articulate in one sentence why your page
                      will deserve the click over the current #1 result? If not, you need a clearer
                      differentiation strategy.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 4: Execution Phase */}
          <TabsContent value="execution" className="space-y-6">
            <div className="space-y-6">
              {/* ICE Scoring & Prioritization */}
              <Card className="border-2 border-green-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                    ICE Scoring & Prioritization
                  </CardTitle>
                  <CardDescription>
                    Decide what to build first using Impact, Confidence, and Effort scoring
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Info className="h-4 w-4 text-green-600" />
                      Why This Matters
                    </h4>
                    <p className="text-sm text-slate-700">
                      Without prioritization, teams chase high-volume keywords that may never rank
                      or build low-value content. ICE (Impact × Confidence ÷ Effort) scoring ensures
                      you focus on the highest-ROI opportunities first.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">ICE Scoring Formula</h4>
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-400 rounded-lg p-6 text-center">
                      <p className="text-2xl font-bold text-slate-900 mb-2">
                        ICE Score = (Impact × Confidence) ÷ Effort
                      </p>
                      <p className="text-sm text-slate-700">Higher scores = higher priority</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Scoring Dimensions (1-10 scale)
                    </h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-l-green-500 bg-green-50 p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-semibold">Impact</h5>
                          <Badge className="bg-green-600">Traffic + Revenue Potential</Badge>
                        </div>
                        <p className="text-sm text-slate-700 mb-2">
                          How much traffic and business value could this opportunity generate?
                        </p>
                        <div className="bg-white p-3 rounded text-xs space-y-1">
                          <p>
                            <strong>10:</strong> High volume + high-intent + converts well (e.g.,
                            &quot;best CRM software&quot;)
                          </p>
                          <p>
                            <strong>5:</strong> Moderate volume or intent (e.g., &quot;what is
                            CRM&quot;)
                          </p>
                          <p>
                            <strong>1:</strong> Low volume + informational only (e.g., &quot;CRM
                            history&quot;)
                          </p>
                        </div>
                      </div>

                      <div className="border-l-4 border-l-blue-500 bg-blue-50 p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-semibold">Confidence</h5>
                          <Badge className="bg-blue-600">Evidence Strength</Badge>
                        </div>
                        <p className="text-sm text-slate-700 mb-2">
                          How confident are you that this will work?
                        </p>
                        <div className="bg-white p-3 rounded text-xs space-y-1">
                          <p>
                            <strong>10:</strong> Strong data, proven format, weak SERP competitors
                          </p>
                          <p>
                            <strong>5:</strong> Some data, standard approach, mixed competition
                          </p>
                          <p>
                            <strong>1:</strong> Hypothesis, untested, strong competition
                          </p>
                        </div>
                      </div>

                      <div className="border-l-4 border-l-amber-500 bg-amber-50 p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-semibold">Effort</h5>
                          <Badge className="bg-amber-600">People × Time</Badge>
                        </div>
                        <p className="text-sm text-slate-700 mb-2">How much work is required?</p>
                        <div className="bg-white p-3 rounded text-xs space-y-1">
                          <p>
                            <strong>1:</strong> Quick update to existing page (1-2 hours)
                          </p>
                          <p>
                            <strong>5:</strong> New 2,000-word guide with visuals (8-16 hours)
                          </p>
                          <p>
                            <strong>10:</strong> Complex interactive tool or full cluster (40+
                            hours)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Example Scoring</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs border border-slate-200">
                        <thead className="bg-slate-100">
                          <tr>
                            <th className="border border-slate-200 p-2 text-left">Opportunity</th>
                            <th className="border border-slate-200 p-2 text-center">Impact</th>
                            <th className="border border-slate-200 p-2 text-center">Confidence</th>
                            <th className="border border-slate-200 p-2 text-center">Effort</th>
                            <th className="border border-slate-200 p-2 text-center font-bold">
                              ICE Score
                            </th>
                            <th className="border border-slate-200 p-2 text-center">Priority</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-green-50">
                            <td className="border border-slate-200 p-2">
                              &quot;Best SEO tools 2024&quot;
                            </td>
                            <td className="border border-slate-200 p-2 text-center">9</td>
                            <td className="border border-slate-200 p-2 text-center">8</td>
                            <td className="border border-slate-200 p-2 text-center">4</td>
                            <td className="border border-slate-200 p-2 text-center font-bold">
                              18.0
                            </td>
                            <td className="border border-slate-200 p-2 text-center">
                              <Badge className="bg-green-600">High</Badge>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-2">
                              &quot;How to do keyword research&quot;
                            </td>
                            <td className="border border-slate-200 p-2 text-center">7</td>
                            <td className="border border-slate-200 p-2 text-center">7</td>
                            <td className="border border-slate-200 p-2 text-center">6</td>
                            <td className="border border-slate-200 p-2 text-center font-bold">
                              8.2
                            </td>
                            <td className="border border-slate-200 p-2 text-center">
                              <Badge className="bg-amber-600">Medium</Badge>
                            </td>
                          </tr>
                          <tr className="bg-red-50">
                            <td className="border border-slate-200 p-2">
                              &quot;SEO history timeline&quot;
                            </td>
                            <td className="border border-slate-200 p-2 text-center">3</td>
                            <td className="border border-slate-200 p-2 text-center">5</td>
                            <td className="border border-slate-200 p-2 text-center">8</td>
                            <td className="border border-slate-200 p-2 text-center font-bold">
                              1.9
                            </td>
                            <td className="border border-slate-200 p-2 text-center">
                              <Badge className="bg-red-600">Low</Badge>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Traffic Sizing (Directional)
                    </h4>
                    <div className="bg-blue-50 border border-blue-200 rounded p-4">
                      <p className="text-sm text-slate-700 mb-3">
                        Use this formula for rough traffic estimates:
                      </p>
                      <div className="bg-white p-3 rounded text-sm font-mono mb-3">
                        Expected Traffic = Volume × CTR (Click-Through Rate) × Rank Probability
                      </div>
                      <div className="space-y-2 text-xs text-slate-700">
                        <p>
                          <strong>Example:</strong> &quot;content strategy template&quot;
                        </p>
                        <p>• Volume: 2,000/month</p>
                        <p>• CTR at #3: ~10% (accounting for SERP features)</p>
                        <p>• Rank probability: 70% (moderate difficulty)</p>
                        <p>
                          • <strong>Expected traffic:</strong> 2,000 × 0.10 × 0.70 = 140
                          visits/month
                        </p>
                        <p>
                          • <strong>Plus long-tail uplift:</strong> +30-50 visits from variations
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Content Brief Template */}
              <Card className="border-2 border-purple-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    Content Brief Template
                  </CardTitle>
                  <CardDescription>
                    Reusable structure for briefing writers and ensuring quality
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">
                      A great brief saves time and improves quality
                    </h4>
                    <p className="text-sm text-slate-700">
                      Clear, detailed briefs prevent back-and-forth revisions and ensure writers
                      deliver content that matches search intent and business goals.
                    </p>
                  </div>

                  <div className="bg-slate-900 text-green-400 p-4 rounded-lg text-xs font-mono space-y-1 overflow-x-auto">
                    <div className="text-slate-400">### CONTENT BRIEF TEMPLATE ###</div>
                    <div className="mt-3">
                      <span className="text-yellow-400">[HEADER]</span>
                    </div>
                    <div>Cluster: Content Strategy</div>
                    <div>Page Type: Hub / Spoke / Comparison</div>
                    <div>Owner: [Name]</div>
                    <div>Draft Due: [Date] | Publish Date: [Date]</div>

                    <div className="mt-3">
                      <span className="text-yellow-400">[GOAL]</span>
                    </div>
                    <div>Primary Intent: [What user wants to accomplish]</div>
                    <div>Business Outcome: Lead / Trial / Sale / Awareness</div>

                    <div className="mt-3">
                      <span className="text-yellow-400">[KEYWORDS]</span>
                    </div>
                    <div>Primary KW: [One keyword]</div>
                    <div>Supporting KWs: [5-12 keywords grouped by section]</div>

                    <div className="mt-3">
                      <span className="text-yellow-400">[SERP SUMMARY]</span>
                    </div>
                    <div>Result Types: Guides, listicles, tools</div>
                    <div>Features: Featured snippet, PAA, images</div>
                    <div>Bar to Beat: [Current #1 result]</div>
                    <div>Gap We&apos;ll Fill: [Our differentiation]</div>

                    <div className="mt-3">
                      <span className="text-yellow-400">[OUTLINE]</span>
                    </div>
                    <div>H2: [Section title]</div>
                    <div> H3: [Subsection]</div>
                    <div> H3: [Subsection]</div>

                    <div className="mt-3">
                      <span className="text-yellow-400">[PROOF & E-E-A-T]</span>
                    </div>
                    <div>Data: [Stat sources]</div>
                    <div>Examples: [Screenshots, case studies]</div>
                    <div>Author: [Name + credentials]</div>

                    <div className="mt-3">
                      <span className="text-yellow-400">[INTERNAL LINKS]</span>
                    </div>
                    <div>Must-link Hub: [URL + anchor]</div>
                    <div>Sibling Spokes: [2-4 URLs + anchors]</div>

                    <div className="mt-3">
                      <span className="text-yellow-400">[CONVERSION]</span>
                    </div>
                    <div>Primary CTA: [Action]</div>
                    <div>Secondary CTA: [Action]</div>
                    <div>Trust Builders: Testimonials, logos, guarantee</div>

                    <div className="mt-3">
                      <span className="text-yellow-400">[SNIPPET CAPTURE]</span>
                    </div>
                    <div>Target: Definition / List / Table / Steps</div>

                    <div className="mt-3">
                      <span className="text-yellow-400">[MAINTENANCE]</span>
                    </div>
                    <div>Freshness Trigger: Product updates, quarterly review</div>
                    <div>Next Review Date: [Date]</div>
                  </div>
                </CardContent>
              </Card>

              {/* Common Pitfalls */}
              <Card className="border-2 border-red-300 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-900">
                    <AlertTriangle className="h-5 w-5" />
                    Common Pitfalls to Avoid
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="bg-white border border-red-200 rounded p-3">
                        <h5 className="font-semibold text-sm text-red-900 mb-1">
                          Volume Obsession
                        </h5>
                        <p className="text-xs text-red-800">
                          Chasing high-volume keywords without considering intent fit and business
                          value. A keyword with 10K searches won&apos;t help if it doesn&apos;t
                          convert.
                        </p>
                      </div>
                      <div className="bg-white border border-red-200 rounded p-3">
                        <h5 className="font-semibold text-sm text-red-900 mb-1">
                          Keyword Cannibalization
                        </h5>
                        <p className="text-xs text-red-800">
                          Multiple pages targeting the same primary keyword compete against each
                          other. Consolidate when intent is the same.
                        </p>
                      </div>
                      <div className="bg-white border border-red-200 rounded p-3">
                        <h5 className="font-semibold text-sm text-red-900 mb-1">
                          Ignoring SERP Format
                        </h5>
                        <p className="text-xs text-red-800">
                          Writing 3,000-word essays when SERPs reward checklists or tools. Match the
                          format Google is already rewarding.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white border border-red-200 rounded p-3">
                        <h5 className="font-semibold text-sm text-red-900 mb-1">
                          &quot;Me-Too&quot; Content
                        </h5>
                        <p className="text-xs text-red-800">
                          Copying top results without adding unique value. You need proof, data, or
                          a fresh angle to deserve the click.
                        </p>
                      </div>
                      <div className="bg-white border border-red-200 rounded p-3">
                        <h5 className="font-semibold text-sm text-red-900 mb-1">No Ownership</h5>
                        <p className="text-xs text-red-800">
                          Clusters with no DRI (Directly Responsible Individual) or refresh plan
                          stall after first publish. Assign owners and schedule reviews.
                        </p>
                      </div>
                      <div className="bg-white border border-red-200 rounded p-3">
                        <h5 className="font-semibold text-sm text-red-900 mb-1">
                          Publishing Orphan Hubs
                        </h5>
                        <p className="text-xs text-red-800">
                          Launching a hub with no spokes signals shallow expertise. Build at least
                          3-4 spokes before promoting the hub.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* How to Use This Guide */}
              <Card className="border-2 border-green-300 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-900">
                    <Rocket className="h-5 w-5" />
                    How to Use This Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold flex-shrink-0 text-sm">
                        1
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-sm text-green-900">
                          Start Every New Segment with Full Discovery
                        </h5>
                        <p className="text-xs text-green-800">
                          Run the complete workflow: Market Discovery → Keyword Clustering → SERP
                          Modeling → Topical Map → Competitor Analysis → Prioritization
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold flex-shrink-0 text-sm">
                        2
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-sm text-green-900">
                          Maintain a Single Source of Truth
                        </h5>
                        <p className="text-xs text-green-800">
                          One spreadsheet/tool that ties: Clusters ↔ Keywords ↔ Briefs ↔ Roadmap ↔
                          Metrics. Everyone should reference the same system.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold flex-shrink-0 text-sm">
                        3
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-sm text-green-900">
                          Review by Cluster, Not Page
                        </h5>
                        <p className="text-xs text-green-800">
                          Monthly reviews should look at cluster performance holistically to catch
                          cannibalization early and plan refreshes with leverage.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold flex-shrink-0 text-sm">
                        4
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-sm text-green-900">
                          Reserve Capacity for Refreshes
                        </h5>
                        <p className="text-xs text-green-800">
                          Allocate 20-30% of monthly content capacity to updating existing hubs and
                          spokes. Fresh content compounds; stale content decays.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
