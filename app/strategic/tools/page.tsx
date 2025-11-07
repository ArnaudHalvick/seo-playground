"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Wrench, Lightbulb, CheckCircle2 } from "lucide-react";

export default function ToolsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Strategic SEO", href: "/strategic" },
          { label: "Tools & Resources", href: "/strategic/tools" },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold">Tooling Ecosystem</h1>
          </div>
          <p className="text-xl text-slate-700 leading-relaxed">
            Give your team a standard kit to research, brief, publish, and iterate—without touching code. 
            Favor a small, interoperable stack over tool sprawl.
          </p>
        </div>

        {/* Core Purpose */}
        <Card className="mb-8 border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-purple-600" />
              Purpose
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              This ecosystem covers cross-category non-programming tools. The focus is on a lean, 
              effective stack that enables strategic SEO work without requiring development resources.
            </p>
          </CardContent>
        </Card>

        {/* Tool Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Categories & Go-To Tools</h2>
          <div className="space-y-6">
            {/* Keyword & Clustering */}
            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">Keyword & Clustering</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>Ahrefs, Semrush:</strong> Enterprise keyword research with volume, difficulty, SERP features
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>LowFruits:</strong> Find low-competition long-tail keywords
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>Google Keyword Planner:</strong> Free baseline volume estimates
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>Glimpse, AnswerThePublic:</strong> Trend discovery and question clustering
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* SERP & Content Analysis */}
            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">SERP & Content Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>Thruuu:</strong> Batch SERP analysis with feature extraction and content patterns
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>SEO Minion:</strong> Browser extension for on-page analysis and SERP preview
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>AlsoAsked:</strong> Visual "People Also Ask" mapping for content angles
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>Google Search Console (GSC):</strong> Query performance, SERP features, indexation status
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Content Scoring */}
            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">Content Scoring (Optional)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>Clearscope, Surfer, MarketMuse:</strong> Content optimization recommendations based on SERP analysis
                    </div>
                  </li>
                </ul>
                <Alert className="mt-3">
                  <AlertDescription className="text-xs">
                    <strong>Note:</strong> Only adopt if your editors will actually use them. 
                    These tools work best for teams optimizing at scale with clear workflows.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Analytics & Reporting */}
            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">Analytics & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>Google Analytics 4 (GA4):</strong> Sessions, conversions, user behavior
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>GSC:</strong> Search performance, queries, clicks, impressions
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>Looker Studio:</strong> Custom dashboards combining GSC, GA4, and other data sources
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>Google Sheets:</strong> Data manipulation, regex filters, collaborative planning
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Link & PR */}
            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">Link & Public Relations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>HARO/Connectively:</strong> Journalist queries for expert sources
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>Muck Rack:</strong> Media database for journalist outreach
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>Hunter:</strong> Email finder for outreach contacts
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>LinkedIn Sales Navigator:</strong> Advanced search for partnership outreach
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Voice of Customer & Review Mining */}
            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg">Voice of Customer (VoC) & Review Mining</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>G2, Reddit, niche forums:</strong> Unfiltered customer language and pain points
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>App Store/Play reviews:</strong> Mobile app feedback mining
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <div>
                      <strong>CRM exports:</strong> Support tickets, win/loss notes, sales calls
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* When to Use What */}
        <Card className="mb-8 border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900">When to Use What (Quick Cues)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-blue-800">
              <li>
                <strong>Big opportunity sizing:</strong> Ahrefs/Semrush + Keyword Planner
              </li>
              <li>
                <strong>Build clusters/briefs:</strong> Thruuu for SERP patterns + AlsoAsked for PAA angles + Sheets
              </li>
              <li>
                <strong>Prioritize content:</strong> Ahrefs "Traffic Potential" + business value column in Sheets
              </li>
              <li>
                <strong>Optimize copy:</strong> Clearscope/Surfer (only if your editors will use them)
              </li>
              <li>
                <strong>Track outcomes:</strong> GA4/GSC dashboards in Looker Studio with Regex filters
              </li>
              <li>
                <strong>Earn authority:</strong> One linkable asset/quarter + targeted outreach via Muck Rack/Hunter
              </li>
              <li>
                <strong>Mine language:</strong> Reviews/Reddit → paste top phrases into briefs
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Starter Stack */}
        <Card className="border-2 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900">Starter Stack (Lean & Effective)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-green-800 mb-4">
                If you're building your SEO toolkit from scratch, start here:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Research</h3>
                  <p className="text-sm text-green-800">Ahrefs or Semrush</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">SERP Modeling</h3>
                  <p className="text-sm text-green-800">Thruuu + AlsoAsked</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Planning</h3>
                  <p className="text-sm text-green-800">Sheets (brief + roadmap templates)</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Measurement</h3>
                  <p className="text-sm text-green-800">GSC + GA4 → Looker Studio</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Authority</h3>
                  <p className="text-sm text-green-800">Hunter + simple outreach tracker</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Total Cost</h3>
                  <p className="text-sm text-green-800">~$200-400/month (depending on tier)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Principles */}
        <Card className="border-2 border-purple-200">
          <CardHeader>
            <CardTitle>Tool Selection Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                <div>
                  <strong>Interoperability over features:</strong> Choose tools that export data cleanly (CSV, API access)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                <div>
                  <strong>Adoption over capability:</strong> A tool your team actually uses beats a powerful tool gathering dust
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                <div>
                  <strong>Lean stack:</strong> 5–7 core tools beats 20+ tools with overlapping functions
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                <div>
                  <strong>Review quarterly:</strong> Drop tools with <20% utilization; consolidate where possible
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

