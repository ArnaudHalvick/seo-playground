import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  Code2,
  CheckCircle2,
  Info,
  ExternalLink,
  ShoppingBag,
  Home as HomeIcon,
  Building2,
  Star,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Structured Data (Schema.org) - SEO Workshop",
  description: "Educational overview of Schema.org markup. Learn Product, BreadcrumbList, and Organization schemas with JSON-LD.",
};

export default function StructuredDataPage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="h-10 w-10 text-indigo-600" />
            <h1 className="text-4xl font-bold">Structured Data (Schema.org)</h1>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Educational overview of structured data markup for enhanced search results
          </p>
          <Alert className="border-indigo-300 bg-indigo-50">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Note:</strong> This is an educational overview only. Interactive validation
              tools and implementation testing are out of scope for this app. Use Google's Rich
              Results Test for validation.
            </AlertDescription>
          </Alert>
        </div>

        {/* What Is Structured Data */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What Is Structured Data?</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-slate-700">
                <strong>Structured data</strong> (also called schema markup) is code you add to your
                pages to help search engines understand your content better. It uses{" "}
                <strong>Schema.org</strong> vocabulary to describe things like products, articles,
                businesses, events, and more.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded p-4">
                  <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Benefits
                  </h3>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Rich results in search (stars, prices, availability)</li>
                    <li>• Better click-through rates</li>
                    <li>• Helps Google understand page context</li>
                    <li>• Powers voice search answers</li>
                    <li>• Enhances knowledge panels</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded p-4">
                  <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Info className="h-4 w-4 text-blue-600" />
                    Important to Know
                  </h3>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Not a ranking factor (directly)</li>
                    <li>• Doesn't guarantee rich results</li>
                    <li>• Google picks what to show</li>
                    <li>• Must follow guidelines to qualify</li>
                    <li>• Requires ongoing maintenance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* JSON-LD Format */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">JSON-LD Format (Recommended)</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-sm text-slate-700">
                Google recommends using <strong>JSON-LD</strong> format because it's easy to
                implement and maintain. Add it to the{" "}
                <code className="bg-slate-100 px-1 rounded">{"<head>"}</code> or{" "}
                <code className="bg-slate-100 px-1 rounded">{"<body>"}</code> of your HTML.
              </p>

              <div className="bg-slate-900 text-slate-300 p-4 rounded-lg text-xs font-mono overflow-x-auto">
                <div className="text-green-400">{'<script type="application/ld+json">'}</div>
                <div className="pl-2">{"{"}</div>
                <div className="pl-4">
                  {" "}
                  <span className="text-blue-400">"@context"</span>:{" "}
                  <span className="text-amber-400">"https://schema.org"</span>,
                </div>
                <div className="pl-4">
                  {" "}
                  <span className="text-blue-400">"@type"</span>:{" "}
                  <span className="text-amber-400">"Product"</span>,
                </div>
                <div className="pl-4">
                  {" "}
                  <span className="text-blue-400">"name"</span>:{" "}
                  <span className="text-amber-400">"Nike Air Max"</span>,
                </div>
                <div className="pl-4">
                  {" "}
                  <span className="text-blue-400">"description"</span>:{" "}
                  <span className="text-amber-400">"Premium running shoes..."</span>
                </div>
                <div className="pl-2">{"}"}</div>
                <div className="text-green-400">{"</script>"}</div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Info className="h-3 w-3 flex-shrink-0" />
                <span>
                  JSON-LD is separate from your HTML, making it easier to add/update without
                  breaking page layout
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Most Important Types for E-commerce */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Most Important Types for E-commerce</h2>

          <div className="space-y-6">
            {/* Product Schema */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingBag className="h-5 w-5 text-blue-600" />
                      Product Schema
                    </CardTitle>
                    <CardDescription className="mt-2">
                      The most critical schema for e-commerce sites—enables rich product snippets
                    </CardDescription>
                  </div>
                  <Badge>Essential</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">What it enables:</p>
                    <ul className="text-xs text-slate-700 space-y-1 mb-4">
                      <li>• Product price in search results</li>
                      <li>• Availability (in stock, out of stock)</li>
                      <li>• Star ratings and review count</li>
                      <li>• Product images in results</li>
                    </ul>
                  </div>

                  <div className="bg-slate-900 text-slate-300 p-4 rounded-lg text-xs font-mono overflow-x-auto">
                    <div className="text-green-400">{'<script type="application/ld+json">'}</div>
                    <div className="pl-2">{"{"}</div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"@context"</span>:{" "}
                      <span className="text-amber-400">"https://schema.org"</span>,
                    </div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"@type"</span>:{" "}
                      <span className="text-amber-400">"Product"</span>,
                    </div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"name"</span>:{" "}
                      <span className="text-amber-400">"Nike Air Max 270"</span>,
                    </div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"description"</span>:{" "}
                      <span className="text-amber-400">
                        "Premium running shoes with air cushioning..."
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"image"</span>:{" "}
                      <span className="text-amber-400">"https://example.com/nike-air-max.jpg"</span>
                      ,
                    </div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"brand"</span>: {"{"}
                    </div>
                    <div className="pl-6">
                      {" "}
                      <span className="text-blue-400">"@type"</span>:{" "}
                      <span className="text-amber-400">"Brand"</span>,
                    </div>
                    <div className="pl-6">
                      {" "}
                      <span className="text-blue-400">"name"</span>:{" "}
                      <span className="text-amber-400">"Nike"</span>
                    </div>
                    <div className="pl-4"> {"},"}</div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"offers"</span>: {"{"}
                    </div>
                    <div className="pl-6">
                      {" "}
                      <span className="text-blue-400">"@type"</span>:{" "}
                      <span className="text-amber-400">"Offer"</span>,
                    </div>
                    <div className="pl-6">
                      {" "}
                      <span className="text-blue-400">"price"</span>:{" "}
                      <span className="text-amber-400">"150.00"</span>,
                    </div>
                    <div className="pl-6">
                      {" "}
                      <span className="text-blue-400">"priceCurrency"</span>:{" "}
                      <span className="text-amber-400">"USD"</span>,
                    </div>
                    <div className="pl-6">
                      {" "}
                      <span className="text-blue-400">"availability"</span>:{" "}
                      <span className="text-amber-400">"https://schema.org/InStock"</span>,
                    </div>
                    <div className="pl-6">
                      {" "}
                      <span className="text-blue-400">"url"</span>:{" "}
                      <span className="text-amber-400">"https://example.com/nike-air-max"</span>
                    </div>
                    <div className="pl-4"> {"},"}</div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"aggregateRating"</span>: {"{"}
                    </div>
                    <div className="pl-6">
                      {" "}
                      <span className="text-blue-400">"@type"</span>:{" "}
                      <span className="text-amber-400">"AggregateRating"</span>,
                    </div>
                    <div className="pl-6">
                      {" "}
                      <span className="text-blue-400">"ratingValue"</span>:{" "}
                      <span className="text-amber-400">"4.5"</span>,
                    </div>
                    <div className="pl-6">
                      {" "}
                      <span className="text-blue-400">"reviewCount"</span>:{" "}
                      <span className="text-amber-400">"127"</span>
                    </div>
                    <div className="pl-4"> {"}"}</div>
                    <div className="pl-2">{"}"}</div>
                    <div className="text-green-400">{"</script>"}</div>
                  </div>

                  <Alert className="border-blue-300 bg-blue-50">
                    <Info className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      <strong>Required fields:</strong> name, image, price (if applicable). Reviews
                      and availability are optional but highly recommended.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>

            {/* BreadcrumbList Schema */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <HomeIcon className="h-5 w-5 text-green-600" />
                      BreadcrumbList Schema
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Shows navigation path in search results
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800 border-green-300">
                    Recommended
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">What it enables:</p>
                    <ul className="text-xs text-slate-700 space-y-1 mb-4">
                      <li>• Breadcrumb trail in search results (instead of just URL)</li>
                      <li>• Shows site hierarchy</li>
                      <li>• Better UX in SERPs</li>
                    </ul>
                  </div>

                  <div className="bg-slate-900 text-slate-300 p-4 rounded-lg text-xs font-mono overflow-x-auto">
                    <div className="text-green-400">{'<script type="application/ld+json">'}</div>
                    <div className="pl-2">{"{"}</div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"@context"</span>:{" "}
                      <span className="text-amber-400">"https://schema.org"</span>,
                    </div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"@type"</span>:{" "}
                      <span className="text-amber-400">"BreadcrumbList"</span>,
                    </div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"itemListElement"</span>: [
                    </div>
                    <div className="pl-6"> {"{"}</div>
                    <div className="pl-8">
                      {" "}
                      <span className="text-blue-400">"@type"</span>:{" "}
                      <span className="text-amber-400">"ListItem"</span>,
                    </div>
                    <div className="pl-8">
                      {" "}
                      <span className="text-blue-400">"position"</span>:{" "}
                      <span className="text-purple-400">1</span>,
                    </div>
                    <div className="pl-8">
                      {" "}
                      <span className="text-blue-400">"name"</span>:{" "}
                      <span className="text-amber-400">"Home"</span>,
                    </div>
                    <div className="pl-8">
                      {" "}
                      <span className="text-blue-400">"item"</span>:{" "}
                      <span className="text-amber-400">"https://example.com/"</span>
                    </div>
                    <div className="pl-6"> {"},"}</div>
                    <div className="pl-6"> {"{"}</div>
                    <div className="pl-8">
                      {" "}
                      <span className="text-blue-400">"@type"</span>:{" "}
                      <span className="text-amber-400">"ListItem"</span>,
                    </div>
                    <div className="pl-8">
                      {" "}
                      <span className="text-blue-400">"position"</span>:{" "}
                      <span className="text-purple-400">2</span>,
                    </div>
                    <div className="pl-8">
                      {" "}
                      <span className="text-blue-400">"name"</span>:{" "}
                      <span className="text-amber-400">"Shoes"</span>,
                    </div>
                    <div className="pl-8">
                      {" "}
                      <span className="text-blue-400">"item"</span>:{" "}
                      <span className="text-amber-400">"https://example.com/shop/shoes"</span>
                    </div>
                    <div className="pl-6"> {"},"}</div>
                    <div className="pl-6"> {"{"}</div>
                    <div className="pl-8">
                      {" "}
                      <span className="text-blue-400">"@type"</span>:{" "}
                      <span className="text-amber-400">"ListItem"</span>,
                    </div>
                    <div className="pl-8">
                      {" "}
                      <span className="text-blue-400">"position"</span>:{" "}
                      <span className="text-purple-400">3</span>,
                    </div>
                    <div className="pl-8">
                      {" "}
                      <span className="text-blue-400">"name"</span>:{" "}
                      <span className="text-amber-400">"Nike Air Max"</span>
                    </div>
                    <div className="pl-6"> {"}"}</div>
                    <div className="pl-4"> ]</div>
                    <div className="pl-2">{"}"}</div>
                    <div className="text-green-400">{"</script>"}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Organization Schema */}
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-purple-600" />
                      Organization Schema
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Tells Google about your business—use once on homepage or about page
                    </CardDescription>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                    Homepage
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">What it enables:</p>
                    <ul className="text-xs text-slate-700 space-y-1 mb-4">
                      <li>• Knowledge panel on Google</li>
                      <li>• Logo in search results</li>
                      <li>• Social profile links</li>
                      <li>• Contact information</li>
                    </ul>
                  </div>

                  <div className="bg-slate-900 text-slate-300 p-4 rounded-lg text-xs font-mono overflow-x-auto">
                    <div className="text-green-400">{'<script type="application/ld+json">'}</div>
                    <div className="pl-2">{"{"}</div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"@context"</span>:{" "}
                      <span className="text-amber-400">"https://schema.org"</span>,
                    </div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"@type"</span>:{" "}
                      <span className="text-amber-400">"Organization"</span>,
                    </div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"name"</span>:{" "}
                      <span className="text-amber-400">"Your Company Name"</span>,
                    </div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"url"</span>:{" "}
                      <span className="text-amber-400">"https://example.com"</span>,
                    </div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"logo"</span>:{" "}
                      <span className="text-amber-400">"https://example.com/logo.png"</span>,
                    </div>
                    <div className="pl-4">
                      {" "}
                      <span className="text-blue-400">"sameAs"</span>: [
                    </div>
                    <div className="pl-6">
                      {" "}
                      <span className="text-amber-400">"https://facebook.com/yourcompany"</span>,
                    </div>
                    <div className="pl-6">
                      {" "}
                      <span className="text-amber-400">"https://twitter.com/yourcompany"</span>,
                    </div>
                    <div className="pl-6">
                      {" "}
                      <span className="text-amber-400">"https://instagram.com/yourcompany"</span>
                    </div>
                    <div className="pl-4"> ]</div>
                    <div className="pl-2">{"}"}</div>
                    <div className="text-green-400">{"</script>"}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testing & Validation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Testing & Validation</h2>
          <Card className="bg-blue-50 border-2 border-blue-200">
            <CardContent className="pt-6 space-y-4">
              <p className="text-sm text-slate-700 mb-4">
                Use these Google tools to validate your structured data:
              </p>

              <div className="space-y-3">
                <div className="bg-white border-2 rounded p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-sm">Rich Results Test</h3>
                      <p className="text-xs text-slate-600">
                        Test if your page is eligible for rich results
                      </p>
                    </div>
                    <Badge>Primary</Badge>
                  </div>
                  <a
                    href="https://search.google.com/test/rich-results"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    search.google.com/test/rich-results <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="bg-white border-2 rounded p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-sm">Schema.org Validator</h3>
                      <p className="text-xs text-slate-600">
                        Validates JSON-LD syntax and structure
                      </p>
                    </div>
                    <Badge className="bg-slate-100 text-slate-800 border-slate-300">
                      Secondary
                    </Badge>
                  </div>
                  <a
                    href="https://validator.schema.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    validator.schema.org <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="bg-white border-2 rounded p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-sm">Google Search Console</h3>
                      <p className="text-xs text-slate-600">
                        Monitor rich results performance and errors
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-300">Monitor</Badge>
                  </div>
                  <p className="text-xs text-slate-600">
                    Path: Enhancements → Product Results / Breadcrumbs
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Implementation Tips</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-sm flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Best Practices
                  </h3>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Start with Product and BreadcrumbList (highest ROI)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Use JSON-LD format (easiest to maintain)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Test all markup before deploying</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Keep markup in sync with visible content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Monitor Search Console for errors</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-sm flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    Common Mistakes
                  </h3>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Missing required properties (name, image, price)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Marking up content not visible on page</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Using structured data for manipulation (spam)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Not updating markup when content changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Ignoring validation errors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary */}
        <Card className="bg-gradient-to-r from-indigo-50 to-slate-50 border-2 border-indigo-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-indigo-600" />
              Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Structured data helps Google understand and display your content better
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Start with Product, BreadcrumbList, and Organization schemas</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Use JSON-LD format for easiest implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Always test with Google's Rich Results Test before deploying</span>
                </li>
              </ul>
            </div>

            <Alert className="mt-4 border-indigo-300 bg-indigo-50">
              <Info className="h-4 w-4" />
              <AlertDescription className="text-xs">
                <strong>Remember:</strong> This app focuses on technical SEO (crawling, indexing,
                URLs). For structured data implementation and validation, use external tools like
                Google's Rich Results Test and schema.org documentation.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
