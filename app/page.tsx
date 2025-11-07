import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import {
  Code2,
  Lightbulb,
  ArrowRight,
  FlaskConical,
  Users,
  Target,
  FileText,
  TrendingUp,
  Zap,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Workshop - Technical & Strategic SEO Mastery",
  description: "Master both programming and strategic sides of SEO. Interactive demos, production-ready code, and comprehensive strategic frameworks for client acquisition.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            SEO Workshop
          </h1>
          <p className="text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Master the complete SEO skill set — from strategic planning to technical implementation
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-4">
            Choose your path below, or explore both to become a well-rounded SEO professional
          </p>
        </div>

        {/* Two Main Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Technical SEO Card */}
          <Card className="border-4 border-blue-300 hover:border-blue-500 transition-all hover:shadow-2xl group">
            <CardHeader className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                  <Code2 className="h-10 w-10 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl mb-2">Technical SEO</CardTitle>
                  <p className="text-blue-700 font-medium">Programming & Implementation</p>
                </div>
              </div>
              <CardDescription className="text-base text-slate-700">
                Master production-ready SEO through code. Learn robots.txt, canonicals, parameter handling, 
                and complex indexation logic with interactive demos and real-time feedback.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <FlaskConical className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Interactive Demo</strong>
                    <p className="text-sm text-slate-600">
                      Test SEO logic in real-time with live SEO Receipt feedback
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Production-Ready Code</strong>
                    <p className="text-sm text-slate-600">
                      Framework-agnostic SEO decision engines and algorithms
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">15+ Topics</strong>
                    <p className="text-sm text-slate-600">
                      From robots.txt to international SEO and performance optimization
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/technical-seo">
                <Button size="lg" className="w-full text-lg bg-blue-600 hover:bg-blue-700 group">
                  Explore Technical SEO
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Strategic SEO Card */}
          <Card className="border-4 border-purple-300 hover:border-purple-500 transition-all hover:shadow-2xl group">
            <CardHeader className="bg-gradient-to-br from-purple-50 to-pink-50 p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl mb-2">Strategic SEO</CardTitle>
                  <p className="text-purple-700 font-medium">Planning & Execution</p>
                </div>
              </div>
              <CardDescription className="text-base text-slate-700">
                Master the non-programming side of SEO. Research, content strategy, governance, 
                measurement, and authority building with actionable frameworks.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Research & Strategy</strong>
                    <p className="text-sm text-slate-600">
                      Keyword research, SERP analysis, and topical authority planning
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Content Architecture</strong>
                    <p className="text-sm text-slate-600">
                      Editorial workflows, E-E-A-T, and production governance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Measurement & Growth</strong>
                    <p className="text-sm text-slate-600">
                      KPIs, experimentation, authority building, and optimization
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/strategic-seo">
                <Button size="lg" className="w-full text-lg bg-purple-600 hover:bg-purple-700 group">
                  Explore Strategic SEO
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            Why Both Matter
          </h2>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Great SEO requires <strong>strategic thinking</strong> to identify opportunities and 
            <strong> technical expertise</strong> to implement them correctly. This workshop teaches both, 
            making you a complete SEO professional capable of driving real business results.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">For Learners</h3>
              <p className="text-sm text-slate-600">
                Build a complete skill set from research to implementation
              </p>
            </div>
            <div>
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">For Clients</h3>
              <p className="text-sm text-slate-600">
                See proof of expertise across the entire SEO spectrum
              </p>
            </div>
            <div>
              <Zap className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">For Teams</h3>
              <p className="text-sm text-slate-600">
                Share production-ready patterns and strategic frameworks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
