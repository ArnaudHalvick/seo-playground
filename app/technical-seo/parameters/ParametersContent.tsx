"use client";

import Link from "next/link";
import { ParamPolicyEditor } from "@/components/playground/ParamPolicyEditor";
import { useConfig } from "@/lib/config/provider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FlaskConical,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Sparkles,
  Map,
  FileCode,
  Grid3x3,
} from "lucide-react";

export default function ParametersContent() {
  const { config } = useConfig();

  return (
    <div className="bg-gradient-to-b from-blue-50 to-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Grid3x3 className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold">URL Parameters</h1>
          </div>
          <p className="text-lg text-slate-600">
            Understanding parameter strategies to optimize crawl budget and indexation
          </p>
        </div>

        {/* The Parameter Problem */}
        <Card className="mb-6 border-2 border-red-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              The Parameter Problem
            </CardTitle>
            <CardDescription>Why unchecked parameters are an SEO risk</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-slate-700">
              URL parameters create <strong>exponential duplicate content</strong> that wastes crawl
              budget and dilutes ranking signals. A single product category with just 5 filters
              (color, size, price, sort, gender) can generate{" "}
              <strong>100,000+ URL variations</strong> pointing to the same products.
            </p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs">
              <div className="text-yellow-300">/shop/shoes?color=red&size=10&sort=price</div>
              <div className="text-yellow-300">/shop/shoes?size=10&color=red&sort=price</div>
              <div className="text-slate-400 mt-1">↑ Same content, different URLs = crawl trap</div>
            </div>
            <p className="text-sm text-slate-700">
              Without a parameter strategy, search engines waste time crawling duplicates instead of
              discovering valuable new content.
            </p>
          </CardContent>
        </Card>

        {/* Strategic Decision Framework */}
        <Card className="mb-6 border-2 border-blue-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-600" />
              Strategic Decision Framework
            </CardTitle>
            <CardDescription>
              Three approaches based on search intent and implementation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Clean Paths */}
              <div className="border-2 border-green-300 bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-sm">Clean Paths</h3>
                  <Badge className="bg-green-600 text-[10px]">Best</Badge>
                </div>
                <div className="space-y-2 text-xs">
                  <code className="bg-white px-2 py-1 rounded block">/shoes/red/</code>
                  <p className="text-slate-700">
                    <strong>When:</strong> High search intent filters (people search &quot;red
                    shoes&quot;)
                  </p>
                  <p className="text-slate-700">
                    <strong>SEO:</strong> Indexable, rankable, no duplicate risk
                  </p>
                </div>
              </div>

              {/* Single Stable Params */}
              <div className="border-2 border-orange-300 bg-orange-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  <h3 className="font-semibold text-sm">Single Params</h3>
                  <Badge className="bg-orange-600 text-[10px]">Interim</Badge>
                </div>
                <div className="space-y-2 text-xs">
                  <code className="bg-white px-2 py-1 rounded block">?color=red</code>
                  <p className="text-slate-700">
                    <strong>When:</strong> Can&apos;t implement clean paths yet, limited stable
                    values
                  </p>
                  <p className="text-slate-700">
                    <strong>SEO:</strong> Can include in sitemap if real search intent exists
                  </p>
                </div>
              </div>

              {/* Multi-Params Blocked */}
              <div className="border-2 border-red-300 bg-red-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-sm">Multi-Params</h3>
                  <Badge className="bg-red-600 text-[10px]">Block</Badge>
                </div>
                <div className="space-y-2 text-xs">
                  <code className="bg-white px-2 py-1 rounded block">?color=red&size=10</code>
                  <p className="text-slate-700">
                    <strong>When:</strong> Always exclude multiple parameters
                  </p>
                  <p className="text-slate-700">
                    <strong>SEO:</strong> Block in robots.txt, strip from canonical, exclude from
                    sitemap
                  </p>
                </div>
              </div>
            </div>

            <Alert className="border-blue-300 bg-blue-50 mt-4">
              <Sparkles className="h-4 w-4" />
              <AlertDescription className="text-xs">
                <strong>Key Principle:</strong> Your parameter strategy should match user search
                behavior. If people search for &quot;red running shoes,&quot; create indexable
                paths. If they don&apos;t search for &quot;shoes sorted by price,&quot; block
                sorting parameters.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Interactive Demo Callout */}
        <Alert className="mb-6 border-2 border-green-300 bg-gradient-to-r from-green-50 to-blue-50">
          <FlaskConical className="h-5 w-5 text-green-600" />
          <AlertDescription className="flex items-center justify-between">
            <span className="text-slate-900 text-sm">
              <strong>See it in action:</strong> Try the shop demo to test parameter combinations
              and watch real-time SEO decisions (canonical URLs, robots directives, sitemap
              inclusion).
            </span>
            <Link href="/shop">
              <Button size="sm" className="ml-4 bg-green-600 hover:bg-green-700">
                Try Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </AlertDescription>
        </Alert>

        {/* Parameter Classification */}
        <ParamPolicyEditor config={config} />

        {/* Related Resources */}
        <Card className="mt-6 border-2 border-indigo-300">
          <CardHeader>
            <CardTitle className="text-lg">Related Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-3">
              <Link href="/technical-seo/robots">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileCode className="h-4 w-4 mr-2" />
                  robots.txt Patterns
                </Button>
              </Link>
              <Link href="/technical-seo/sitemap">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Map className="h-4 w-4 mr-2" />
                  Sitemap Strategy
                </Button>
              </Link>
              <Link href="/technical-seo/pattern-gallery">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Grid3x3 className="h-4 w-4 mr-2" />
                  Pattern Gallery
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
