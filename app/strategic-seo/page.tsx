import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Target,
  FileText,
  TrendingUp,
  Users,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Strategic SEO - Planning & Execution",
  description:
    "Master non-programming SEO: research, content strategy, governance, measurement, and authority building with actionable frameworks.",
};

export default function StrategicSeoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-slate-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold pb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Strategic SEO
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Master the non-programming side of SEO. From keyword research to content governance,
            measurement to authority building — learn the strategic frameworks that drive results.
          </p>
        </div>

        {/* Overview Section */}
        <div className="mb-16">
          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb className="h-8 w-8 text-purple-600" />
                <CardTitle className="text-2xl">What is Strategic SEO?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Strategic SEO is everything that doesn't require programming — yet is essential for
                SEO success. It's about understanding your audience, identifying opportunities,
                creating the right content, and measuring what works.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 bg-white/70 p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Evidence-Based Planning</strong>
                    <p className="text-sm text-slate-600">
                      Data-driven research, SERP analysis, and keyword clustering
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/70 p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Editorial Excellence</strong>
                    <p className="text-sm text-slate-600">
                      Content architecture, E-E-A-T, and production workflows
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/70 p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Continuous Improvement</strong>
                    <p className="text-sm text-slate-600">
                      KPIs, experimentation, and optimization loops
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/70 p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Authority Building</strong>
                    <p className="text-sm text-slate-600">
                      Link acquisition, reviews, local SEO, and media optimization
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Topics Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Core Topics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Research & Strategy */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-purple-200">
              <CardHeader>
                <Target className="h-10 w-10 mb-3 text-purple-600" />
                <CardTitle className="text-2xl">Research & Strategy</CardTitle>
                <CardDescription className="text-base">
                  Build evidence-based plans that align business goals with searcher demand
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Market & audience discovery, keyword clustering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>SERP & intent analysis, topical authority planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Competitor intelligence, prioritization frameworks</span>
                  </li>
                </ul>
                <Link href="/strategic-seo/research-strategy">
                  <Button className="w-full" variant="default">
                    View Research & Strategy
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Content Architecture */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-purple-200">
              <CardHeader>
                <FileText className="h-10 w-10 mb-3 text-purple-600" />
                <CardTitle className="text-2xl">Content Architecture</CardTitle>
                <CardDescription className="text-base">
                  Translate research into semantic, navigable content systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Hub & spoke architecture, content briefs at scale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>On-page optimization, E-E-A-T signals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Internal linking, content refresh & pruning</span>
                  </li>
                </ul>
                <Link href="/strategic-seo/content-architecture">
                  <Button className="w-full" variant="default">
                    View Content Architecture
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Content Production */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-purple-200">
              <CardHeader>
                <Users className="h-10 w-10 mb-3 text-purple-600" />
                <CardTitle className="text-2xl">Content Production</CardTitle>
                <CardDescription className="text-base">
                  Build reliable editorial workflows from brief to publish
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Editorial planning, governance & workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Style guides, localization, quality frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Compliance, accessibility, refresh policies</span>
                  </li>
                </ul>
                <Link href="/strategic-seo/content-production">
                  <Button className="w-full" variant="default">
                    View Content Production
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Measurement & Optimization */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-purple-200">
              <CardHeader>
                <BarChart3 className="h-10 w-10 mb-3 text-purple-600" />
                <CardTitle className="text-2xl">Measurement & Optimization</CardTitle>
                <CardDescription className="text-base">
                  Turn strategy into a closed-loop system with data and experimentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>KPI design, dashboards, diagnostics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>SEO-safe experimentation, optimization levers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Reporting, continuous improvement loops</span>
                  </li>
                </ul>
                <Link href="/strategic-seo/measurement-optimization">
                  <Button className="w-full" variant="default">
                    View Measurement & Optimization
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Authority Building */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-purple-200">
              <CardHeader>
                <TrendingUp className="h-10 w-10 mb-3 text-purple-600" />
                <CardTitle className="text-2xl">Authority Building</CardTitle>
                <CardDescription className="text-base">
                  Strengthen reputation and trust beyond your own site
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Link acquisition & digital PR, linkable assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Local SEO, reviews & UGC governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Image & video SEO, E-E-A-T amplification</span>
                  </li>
                </ul>
                <Link href="/strategic-seo/authority-building">
                  <Button className="w-full" variant="default">
                    View Authority Building
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Tools */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-purple-200">
              <CardHeader>
                <Wrench className="h-10 w-10 mb-3 text-purple-600" />
                <CardTitle className="text-2xl">Tools & Resources</CardTitle>
                <CardDescription className="text-base">
                  Essential non-programming SEO tools and when to use them
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Keyword research: Ahrefs, Semrush, Keyword Planner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>SERP analysis: Thruuu, AlsoAsked, SEO Minion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                    <span>Analytics: GSC, GA4, Looker Studio</span>
                  </li>
                </ul>
                <Link href="/strategic-seo/tools">
                  <Button className="w-full" variant="default">
                    View Tools & Resources
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3 text-slate-900">
            Strategic + Technical = Complete SEO Mastery
          </h2>
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
            Great SEO requires both strategic planning and technical execution. Explore the
            technical side to see how code brings these strategies to life.
          </p>
          <Link href="/technical">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-600 text-purple-700 hover:bg-purple-50"
            >
              Explore Technical SEO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
