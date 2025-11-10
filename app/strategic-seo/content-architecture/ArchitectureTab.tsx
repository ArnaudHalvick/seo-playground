import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  GitBranch,
  CheckCircle2,
  Info,
  AlertTriangle,
  Layers,
  FileText,
  Target,
} from "lucide-react";

export default function ArchitectureTab() {
  return (
    <div className="space-y-6">
      {/* Semantic Cluster Architecture */}
      <Card className="border-2 border-blue-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-blue-600" />
            Semantic Cluster Architecture
          </CardTitle>
          <CardDescription>
            Design hub-spoke structures that signal comprehensive topical coverage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-blue-600" />
              What Is a Content Cluster?
            </h4>
            <p className="text-sm text-slate-700">
              A content cluster is a group of related pages organized around one comprehensive
              &quot;hub&quot; page that covers a core topic, with multiple &quot;spoke&quot; pages
              that dive deep into subtopics. All pages interlink to demonstrate topical authority
              and help users navigate related information.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Hub vs. Spoke Pages</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="h-5 w-5 text-purple-600" />
                    <h5 className="font-semibold">Hub Page</h5>
                    <Badge className="bg-purple-600">Core</Badge>
                  </div>
                  <p className="text-xs text-slate-700 mb-3">
                    The definitive guide that solves the core job to be done
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• <strong>Purpose:</strong> Comprehensive coverage of main topic</li>
                    <li>• <strong>Length:</strong> Typically 2,000-5,000 words</li>
                    <li>• <strong>Target:</strong> Broad, high-volume keyword</li>
                    <li>
                      • <strong>Example:</strong> &quot;Complete Guide to Content Strategy&quot;
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="h-5 w-5 text-green-600" />
                    <h5 className="font-semibold">Spoke Pages</h5>
                    <Badge className="bg-green-600">Supporting</Badge>
                  </div>
                  <p className="text-xs text-slate-700 mb-3">
                    Focused pages covering specific subtopics in depth
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• <strong>Purpose:</strong> Deep-dive into one specific aspect</li>
                    <li>• <strong>Length:</strong> Typically 800-2,000 words</li>
                    <li>• <strong>Target:</strong> Long-tail, specific keyword</li>
                    <li>
                      • <strong>Examples:</strong> &quot;How to do keyword research&quot;,
                      &quot;Content calendar template&quot;
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">4 Steps to Design a Cluster</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-blue-600">Step 1</Badge>
                  <h5 className="font-semibold text-sm">Define the Hub</h5>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Identify the core topic that solves your audience&apos;s main job. This becomes
                  your hub page.
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p className="font-semibold">Example:</p>
                  <p>
                    <strong>Hub:</strong> &quot;SEO Content Strategy&quot; (covers planning,
                    execution, and measurement)
                  </p>
                  <p className="text-slate-600">
                    <strong>Scope note:</strong> Does NOT cover technical SEO (separate hub) or link
                    building (separate hub)
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-600">Step 2</Badge>
                  <h5 className="font-semibold text-sm">Plan Your Spokes (4-10 per Hub)</h5>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Spokes drill into sub-tasks, comparisons, tools, and common questions
                </p>
                <div className="bg-white p-2 rounded text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="font-semibold mb-1">Sub-task Spokes:</p>
                      <p>• How to do keyword research</p>
                      <p>• How to create content briefs</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Comparison Spokes:</p>
                      <p>• Free vs paid SEO tools</p>
                      <p>• Ahrefs vs SEMrush</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Tool/Template Spokes:</p>
                      <p>• Content calendar template</p>
                      <p>• SEO checklist PDF</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">FAQ Spokes:</p>
                      <p>• How often to publish content?</p>
                      <p>• Best content length for SEO?</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-purple-600">Step 3</Badge>
                  <h5 className="font-semibold text-sm">Map Adjacent Entities</h5>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Identify related brands, features, locations, alternatives, and cost comparisons
                  that your audience searches for
                </p>
                <div className="bg-white p-2 rounded text-xs space-y-1">
                  <p>• <strong>Brands:</strong> Ahrefs, SEMrush, Moz</p>
                  <p>• <strong>Features:</strong> Keyword difficulty, SERP analysis</p>
                  <p>• <strong>Alternatives:</strong> Free vs paid, beginner vs advanced</p>
                  <p>• <strong>Cost:</strong> Pricing tiers, ROI calculators</p>
                </div>
              </div>

              <div className="border-l-4 border-l-amber-500 bg-amber-50 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-amber-600">Step 4</Badge>
                  <h5 className="font-semibold text-sm">Choose Page Types by Intent</h5>
                </div>
                <p className="text-xs text-slate-700 mb-2">
                  Match format to search intent for maximum engagement and conversion
                </p>
                <div className="bg-white p-2 rounded text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="font-semibold">Informational:</p>
                      <p>• Guide, tutorial, glossary</p>
                    </div>
                    <div>
                      <p className="font-semibold">Commercial:</p>
                      <p>• Comparison, review, &quot;best X&quot;</p>
                    </div>
                    <div>
                      <p className="font-semibold">Transactional:</p>
                      <p>• PLP, calculator, booking page</p>
                    </div>
                    <div>
                      <p className="font-semibold">Navigational:</p>
                      <p>• Brand page, product page</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Visual Cluster Model</h4>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 border-2 border-purple-300 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-bold text-sm mb-2">
                  🎯 Hub: &quot;SEO Content Strategy&quot;
                </div>
                <p className="text-xs text-slate-700">Comprehensive guide (2,500 words)</p>
              </div>
              <div className="grid md:grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-3 rounded border-2 border-green-300">
                  <p className="font-semibold mb-1">↳ Spoke:</p>
                  <p>Keyword Research Guide</p>
                  <p className="text-slate-600 text-[10px]">Sub-task | 1,200 words</p>
                </div>
                <div className="bg-white p-3 rounded border-2 border-green-300">
                  <p className="font-semibold mb-1">↳ Spoke:</p>
                  <p>Content Brief Template</p>
                  <p className="text-slate-600 text-[10px]">Tool | 800 words</p>
                </div>
                <div className="bg-white p-3 rounded border-2 border-green-300">
                  <p className="font-semibold mb-1">↳ Spoke:</p>
                  <p>Free vs Paid SEO Tools</p>
                  <p className="text-slate-600 text-[10px]">Comparison | 1,500 words</p>
                </div>
                <div className="bg-white p-3 rounded border-2 border-green-300">
                  <p className="font-semibold mb-1">↳ Spoke:</p>
                  <p>Content Calendar Template</p>
                  <p className="text-slate-600 text-[10px]">Tool | 600 words</p>
                </div>
                <div className="bg-white p-3 rounded border-2 border-green-300">
                  <p className="font-semibold mb-1">↳ Spoke:</p>
                  <p>How Often to Publish?</p>
                  <p className="text-slate-600 text-[10px]">FAQ | 500 words</p>
                </div>
                <div className="bg-white p-3 rounded border-2 border-green-300">
                  <p className="font-semibold mb-1">↳ Spoke:</p>
                  <p>Content Strategy Examples</p>
                  <p className="text-slate-600 text-[10px]">Case Study | 1,000 words</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs text-slate-700">
                  <strong>Internal Links:</strong> Each spoke links to hub + 2-4 sibling spokes
                </p>
              </div>
            </div>
          </div>

          <Alert className="border-purple-300 bg-purple-50">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Coverage Definition:</strong> A cluster is &quot;done&quot; when it has 1 hub
              + 4-10 spokes + proof elements (data, examples, tools) + internal links wired. Don&apos;t
              launch a hub with zero spokes—it signals shallow coverage.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Quality Bar */}
      <Card className="border-2 border-green-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Cluster Quality Checklist
          </CardTitle>
          <CardDescription>
            Ensure your architecture meets these standards before publishing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border border-green-200">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-semibold text-sm">One Primary Intent Per Page</h5>
                <p className="text-xs text-slate-700">
                  Each page targets one specific search intent. Don&apos;t mix &quot;what is
                  X&quot; with &quot;how to do X&quot; on the same page—split into separate spokes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border border-green-200">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-semibold text-sm">No Duplicate Promises</h5>
                <p className="text-xs text-slate-700">
                  Spokes don&apos;t duplicate the hub&apos;s promise. If a spoke could stand in for
                  the hub, consolidate them into one stronger page.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border border-green-200">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-semibold text-sm">Every Spoke Links to Hub</h5>
                <p className="text-xs text-slate-700">
                  In the intro or conclusion, spokes link up to their hub with natural, descriptive
                  anchors (e.g., &quot;our complete content strategy guide&quot;).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border border-green-200">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-semibold text-sm">Sibling Spoke Cross-Links</h5>
                <p className="text-xs text-slate-700">
                  Each spoke links to at least 2-4 related sibling spokes where contextually
                  relevant. This helps users navigate and signals comprehensive coverage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border border-green-200">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-semibold text-sm">Hub Links to Key Spokes</h5>
                <p className="text-xs text-slate-700">
                  The hub includes a curated &quot;Next Steps&quot; or &quot;Related Resources&quot;
                  module linking to the most important spokes (not an indiscriminate list of all
                  pages).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border border-green-200">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-semibold text-sm">Descriptive Anchors</h5>
                <p className="text-xs text-slate-700">
                  Anchor text tells users what they&apos;ll learn or do (e.g., &quot;learn how to
                  create content briefs&quot; not &quot;click here&quot; or &quot;content
                  briefs&quot;).
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reusable Page Scaffolds */}
      <Card className="border-2 border-indigo-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-indigo-600" />
            Reusable Page Scaffolds
          </CardTitle>
          <CardDescription>
            Editor-friendly templates for common page types
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-4 border-l-purple-500 bg-purple-50 p-4">
            <h4 className="font-semibold text-sm mb-3">A. Definitive Guide (Hub)</h4>
            <ol className="text-xs text-slate-700 space-y-2 list-decimal list-inside">
              <li>
                <strong>What & Why:</strong> 2-3 sentences defining the topic and its value
              </li>
              <li>
                <strong>Quick Definition/Table:</strong> Fast answer for scanners
              </li>
              <li>
                <strong>Core Framework:</strong> H2 blocks covering main steps or concepts
              </li>
              <li>
                <strong>Proof:</strong> Data, examples, screenshots, case studies
              </li>
              <li>
                <strong>Alternatives/Pitfalls:</strong> What NOT to do
              </li>
              <li>
                <strong>FAQs:</strong> 2-5 highly searched questions
              </li>
              <li>
                <strong>Next Steps:</strong> Curated spokes + CTA
              </li>
            </ol>
          </div>

          <div className="border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="font-semibold text-sm mb-3">B. Comparison / &quot;X vs Y&quot; (Spoke)</h4>
            <ol className="text-xs text-slate-700 space-y-2 list-decimal list-inside">
              <li>
                <strong>TL;DR Verdict:</strong> Quick recommendation up front
              </li>
              <li>
                <strong>Side-by-Side Table:</strong> Key criteria compared
              </li>
              <li>
                <strong>Deep-Dive by Use Cases:</strong> When each option wins
              </li>
              <li>
                <strong>Pricing/Limitations:</strong> Cost breakdown and constraints
              </li>
              <li>
                <strong>Which to Choose:</strong> Decision framework by scenario
              </li>
              <li>
                <strong>Related Comparisons:</strong> Links to sibling comparisons
              </li>
            </ol>
          </div>

          <div className="border-l-4 border-l-blue-500 bg-blue-50 p-4">
            <h4 className="font-semibold text-sm mb-3">C. Checklist/Template (Spoke)</h4>
            <ol className="text-xs text-slate-700 space-y-2 list-decimal list-inside">
              <li>
                <strong>Context:</strong> When and why to use this checklist/template
              </li>
              <li>
                <strong>The Artifact:</strong> Printable list or duplicable template
              </li>
              <li>
                <strong>How to Implement:</strong> Step-by-step usage instructions
              </li>
              <li>
                <strong>Common Mistakes:</strong> What people get wrong
              </li>
              <li>
                <strong>Download/CTA:</strong> Action step + related guides
              </li>
            </ol>
          </div>

          <div className="border-l-4 border-l-amber-500 bg-amber-50 p-4">
            <h4 className="font-semibold text-sm mb-3">D. FAQ Page (Spoke)</h4>
            <ol className="text-xs text-slate-700 space-y-2 list-decimal list-inside">
              <li>
                <strong>Intro:</strong> Context for the question cluster
              </li>
              <li>
                <strong>Q&A Blocks:</strong> Clear question headings with concise answers (100-200
                words each)
              </li>
              <li>
                <strong>Supporting Links:</strong> Deep-dive links to related spokes/hub
              </li>
              <li>
                <strong>CTA:</strong> Natural action aligned with user intent
              </li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card className="border-2 border-red-300 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-900">
            <AlertTriangle className="h-5 w-5" />
            Architecture Pitfalls to Avoid
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Hub With No Spokes
                </h5>
                <p className="text-xs text-red-800">
                  Publishing a hub page with zero supporting spokes signals shallow coverage.
                  Google rewards comprehensive topic treatment—aim for 4+ spokes minimum.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Multiple Intents Per Page
                </h5>
                <p className="text-xs text-red-800">
                  Chasing multiple intents on one URL makes the page unfocused and weak for both
                  ranking and conversion. Split into separate, targeted pages.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Near-Duplicate Spokes
                </h5>
                <p className="text-xs text-red-800">
                  Creating multiple spokes that target the same intent splits link equity and
                  confuses users. Consolidate into one stronger page.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Orphan Pages
                </h5>
                <p className="text-xs text-red-800">
                  Pages with no internal links pointing to them are hard to discover and rank
                  poorly. Wire every spoke into the cluster structure.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

