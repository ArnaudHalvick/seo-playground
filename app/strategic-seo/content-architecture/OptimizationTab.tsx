import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  CheckCircle2,
  Info,
  Edit3,
  Shield,
  Target,
  Eye,
  Sparkles,
} from "lucide-react";

export default function OptimizationTab() {
  return (
    <div className="space-y-6">
      {/* Content Briefs */}
      <Card className="border-2 border-blue-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            Content Briefs (Repeatable & Decisive)
          </CardTitle>
          <CardDescription>
            Create comprehensive briefs that set every piece up for success
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-blue-600" />
              Why Briefs Matter
            </h4>
            <p className="text-sm text-slate-700">
              A good brief removes guesswork and ensures consistency at scale. It tells writers
              WHAT to cover, HOW to differentiate, and WHO to link to—raising draft quality from
              the start and reducing revision cycles.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">10 Must-Have Brief Components</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <Badge className="bg-blue-600 flex-shrink-0">1</Badge>
                <div>
                  <h5 className="font-semibold text-sm">Goal & Audience</h5>
                  <p className="text-xs text-slate-700">
                    Intent in one line + business outcome (lead, trial, booking, organic traffic)
                  </p>
                  <div className="mt-1 bg-white p-2 rounded text-xs">
                    <p>
                      <strong>Example:</strong> Help SEO managers choose keyword tools (Goal: 20
                      trial signups/month)
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <Badge className="bg-blue-600 flex-shrink-0">2</Badge>
                <div>
                  <h5 className="font-semibold text-sm">Primary Keyword</h5>
                  <p className="text-xs text-slate-700">
                    One target keyword; group supporting themes by section (don&apos;t keyword-stuff)
                  </p>
                  <div className="mt-1 bg-white p-2 rounded text-xs">
                    <p>
                      <strong>Primary:</strong> &quot;best SEO keyword tools&quot; | <strong>Volume:</strong> 3,200/mo
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <Badge className="bg-blue-600 flex-shrink-0">3</Badge>
                <div>
                  <h5 className="font-semibold text-sm">SERP Read</h5>
                  <p className="text-xs text-slate-700">
                    Result types (listicles, guides, videos), &quot;bar to beat&quot; (current #1),
                    feature targets (snippet, PAA, video carousel, image pack)
                  </p>
                  <div className="mt-1 bg-white p-2 rounded text-xs space-y-1">
                    <p><strong>Top results:</strong> All 2,500+ word listicles with comparison tables</p>
                    <p><strong>Bar to beat:</strong> Backlinko (comprehensive, 15 tools reviewed)</p>
                    <p><strong>Features:</strong> PAA box (&quot;What is keyword research?&quot;), Image carousel</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <Badge className="bg-blue-600 flex-shrink-0">4</Badge>
                <div>
                  <h5 className="font-semibold text-sm">Outline (H2/H3 Skeleton)</h5>
                  <p className="text-xs text-slate-700">
                    Promise → Proof → Action structure with section starters (1-2 guiding sentences)
                  </p>
                  <div className="mt-1 bg-white p-2 rounded text-xs space-y-1">
                    <p><strong>H2:</strong> What to Look for in Keyword Tools (Criteria table)</p>
                    <p><strong>H2:</strong> 12 Best SEO Keyword Tools (Reviewed)</p>
                    <p className="ml-3"><strong>H3:</strong> 1. Ahrefs (Best for Backlink Data)</p>
                    <p className="ml-3"><strong>H3:</strong> 2. SEMrush (Best All-in-One)</p>
                    <p><strong>H2:</strong> Free vs Paid: Which to Choose?</p>
                    <p><strong>H2:</strong> FAQ (5 questions)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <Badge className="bg-blue-600 flex-shrink-0">5</Badge>
                <div>
                  <h5 className="font-semibold text-sm">Proof & E-E-A-T</h5>
                  <p className="text-xs text-slate-700">
                    Data, quotes, examples, screenshots, author credentials to establish trust
                  </p>
                  <div className="mt-1 bg-white p-2 rounded text-xs space-y-1">
                    <p>• Include 15+ tool screenshots (UI, reports)</p>
                    <p>• Cite usage data (&quot;Based on testing 10,000 keywords across 5 tools&quot;)</p>
                    <p>• Author bio: Sarah Chen, SEO Director (8 years, certified by Google)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <Badge className="bg-blue-600 flex-shrink-0">6</Badge>
                <div>
                  <h5 className="font-semibold text-sm">Differentiation</h5>
                  <p className="text-xs text-slate-700">
                    What we add that competitors lack (original data, calculator, benchmark, price
                    clarity, use-case breakdowns)
                  </p>
                  <div className="mt-1 bg-white p-2 rounded text-xs">
                    <p>
                      <strong>Our angle:</strong> Include free tool tier comparison (missing from
                      top 5 results) + ROI calculator
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <Badge className="bg-blue-600 flex-shrink-0">7</Badge>
                <div>
                  <h5 className="font-semibold text-sm">Internal Links (Required)</h5>
                  <p className="text-xs text-slate-700">
                    Hub link, 2-4 sibling spokes, related resources with descriptive anchors
                  </p>
                  <div className="mt-1 bg-white p-2 rounded text-xs space-y-1">
                    <p>• Link to hub: &quot;Complete SEO Content Strategy Guide&quot;</p>
                    <p>• Sibling: &quot;How to Do Keyword Research (Step-by-Step)&quot;</p>
                    <p>• Sibling: &quot;Ahrefs vs SEMrush Comparison&quot;</p>
                    <p>• Resource: &quot;Free Keyword Research Template&quot;</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <Badge className="bg-blue-600 flex-shrink-0">8</Badge>
                <div>
                  <h5 className="font-semibold text-sm">CTA Plan</h5>
                  <p className="text-xs text-slate-700">
                    Primary + secondary CTAs with trust boosters nearby (testimonials, guarantees)
                  </p>
                  <div className="mt-1 bg-white p-2 rounded text-xs space-y-1">
                    <p><strong>Primary CTA:</strong> &quot;Start Free Trial&quot; after tool reviews</p>
                    <p><strong>Secondary:</strong> &quot;Download Comparison Checklist&quot; in sidebar</p>
                    <p><strong>Trust:</strong> &quot;10,000+ SEO pros trust us&quot; + review stars</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <Badge className="bg-blue-600 flex-shrink-0">9</Badge>
                <div>
                  <h5 className="font-semibold text-sm">Snippet Capture Strategy</h5>
                  <p className="text-xs text-slate-700">
                    Definitional paragraph (≤50 words), Q&A blocks, steps/table candidates for
                    featured snippets
                  </p>
                  <div className="mt-1 bg-white p-2 rounded text-xs">
                    <p>
                      <strong>Target snippet:</strong> &quot;Best keyword tools: Ahrefs (best for
                      backlinks), SEMrush (all-in-one)...&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                <Badge className="bg-blue-600 flex-shrink-0">10</Badge>
                <div>
                  <h5 className="font-semibold text-sm">Maintenance Trigger</h5>
                  <p className="text-xs text-slate-700">
                    Freshness signal (pricing changes, new tool launches) + next review date
                  </p>
                  <div className="mt-1 bg-white p-2 rounded text-xs">
                    <p>
                      <strong>Refresh:</strong> Quarterly (Oct, Jan, Apr, Jul) or when major tool
                      launches
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-blue-300 bg-blue-50">
            <Sparkles className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Editor Tip:</strong> Provide &quot;section starters&quot; (1-2 guiding
              sentences per H2) in briefs to raise draft quality. Example: &quot;H2: What to Look
              for—Open with why criteria matter, then present comparison table.&quot;
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* On-Page Copy & UX */}
      <Card className="border-2 border-green-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Edit3 className="h-5 w-5 text-green-600" />
            On-Page Copy & UX (No Code)
          </CardTitle>
          <CardDescription>
            Editorial optimizations that improve rankings and conversions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Titles & Meta Descriptions</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4 text-blue-600" />
                    <h5 className="font-semibold text-sm">Title Tag</h5>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1 mb-2">
                    <li>• Promise + specificity</li>
                    <li>• ≤60 characters (mobile friendly)</li>
                    <li>• Reflect exact primary intent</li>
                    <li>• Include year for freshness (when relevant)</li>
                  </ul>
                  <div className="bg-white p-2 rounded text-xs">
                    <p className="font-semibold mb-1">Example:</p>
                    <p className="text-green-700">✓ 12 Best SEO Keyword Tools (2024 Comparison)</p>
                    <p className="text-red-700 mt-1">✗ SEO Tools | Keyword Research Software</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="h-4 w-4 text-green-600" />
                    <h5 className="font-semibold text-sm">Meta Description</h5>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1 mb-2">
                    <li>• Benefit + proof + CTA</li>
                    <li>• ≤155 characters</li>
                    <li>• Don&apos;t repeat title verbatim</li>
                    <li>• Include a hook or stat</li>
                  </ul>
                  <div className="bg-white p-2 rounded text-xs">
                    <p className="font-semibold mb-1">Example:</p>
                    <p className="text-green-700">
                      ✓ Compare 12 keyword tools tested on 10K queries. Free tiers, pricing, and
                      ROI calculator included.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Intros That Win Clicks</h4>
            <div className="border-l-4 border-l-green-500 bg-green-50 p-4">
              <h5 className="font-semibold text-sm mb-2">The 3-Part Intro Formula</h5>
              <div className="space-y-3 text-xs">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold mb-1">1. Lead with User&apos;s Job + Outcome (1-3 sentences)</p>
                  <p className="text-slate-700">
                    Example: &quot;Choosing the right keyword tool determines whether you target
                    profitable queries or waste budget on low-value terms. This guide compares 12
                    tools tested on 10,000 keywords to help you pick the best fit.&quot;
                  </p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold mb-1">2. Preview Structure (&quot;In this guide...&quot;)</p>
                  <p className="text-slate-700">
                    Example: &quot;You&apos;ll learn: what features matter most, how free and paid
                    tiers compare, and which tool fits your budget and use case.&quot;
                  </p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold mb-1">3. Establish Credibility</p>
                  <p className="text-slate-700">
                    Example: &quot;Based on 5 years managing SEO for 50+ clients and analyzing
                    10,000+ keywords across all major platforms.&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 bg-blue-50 border border-blue-200 rounded p-3">
              <p className="text-xs text-slate-700">
                <strong>Bonus:</strong> Add a short definition or quick criteria table if SERP
                favors fast answers (captures featured snippets).
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Structure & Readability</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 bg-green-50 rounded border border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Logical H2/H3 Flow</p>
                  <p className="text-xs text-slate-700">
                    Answer core question within first screenful. Use descriptive subheads, not
                    vague labels (&quot;12 Tools Reviewed&quot; beats &quot;Options&quot;).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-green-50 rounded border border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Scannability Aids</p>
                  <p className="text-xs text-slate-700">
                    Bullets, short paragraphs (3-4 lines max), summary boxes, comparison tables.
                    Readers should grasp value in 10 seconds of scanning.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-green-50 rounded border border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Decision Aids</p>
                  <p className="text-xs text-slate-700">
                    Selection criteria, pros/cons, pitfalls, examples, mini-tables, checklists.
                    Help users make decisions, not just consume information.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">CTAs & Conversion Aids</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">CTA Placement</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>
                    • <strong>Primary CTA:</strong> Where intent peaks (after comparison table,
                    after proof)
                  </li>
                  <li>
                    • <strong>Secondary CTA:</strong> For earlier-stage readers (download template,
                    newsletter)
                  </li>
                  <li>
                    • <strong>Avoid:</strong> CTAs in first paragraph before delivering value
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">Trust Elements Nearby</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Testimonials, review stars, customer logos</li>
                  <li>• Proof logos (press, awards, certifications)</li>
                  <li>• Guarantees, return policies</li>
                  <li>• Security badges, policy links</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Visuals & Media</h4>
            <div className="bg-white border border-slate-200 rounded p-4">
              <p className="text-sm text-slate-700 mb-3">
                Use <strong>purposeful visuals</strong> that accelerate understanding:
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="font-semibold mb-1">What to Include:</p>
                  <ul className="text-slate-700 space-y-1">
                    <li>• Step screenshots with annotations</li>
                    <li>• Comparison tables (visual format)</li>
                    <li>• Before/after examples</li>
                    <li>• Short explainer videos (2-3 min)</li>
                    <li>• Diagrams, flowcharts</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">Best Practices:</p>
                  <ul className="text-slate-700 space-y-1">
                    <li>• Captions that add meaning (not just alt text)</li>
                    <li>• Cite sources for charts/data</li>
                    <li>• Place images near relevant sections</li>
                    <li>• Descriptive filenames (not IMG_1234.jpg)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* E-E-A-T Implementation */}
      <Card className="border-2 border-purple-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-purple-600" />
            E-E-A-T Signals (Editorial Operations)
          </CardTitle>
          <CardDescription>
            Build credibility through transparent, expert content practices
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">
              E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness
            </h4>
            <p className="text-sm text-slate-700">
              Google&apos;s Quality Rater Guidelines emphasize E-E-A-T, especially for YMYL (Your
              Money or Your Life) topics. These are editorial signals you can control without
              touching code.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Implementation Checklist</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 bg-purple-50 rounded border border-purple-200">
                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Assign Real Authors with Bios</p>
                  <p className="text-xs text-slate-700">
                    Every piece has a named author with credentials displayed. Link to author
                    profile page with full bio, other articles, external profiles (LinkedIn,
                    speaker pages).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-purple-50 rounded border border-purple-200">
                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Show Last-Updated Dates & Revision Notes</p>
                  <p className="text-xs text-slate-700">
                    Display publish date and last-updated date. For major refreshes, add a note
                    (&quot;Updated March 2024: Added 3 new tools, refreshed pricing&quot;).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-purple-50 rounded border border-purple-200">
                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Cite Reputable Sources</p>
                  <p className="text-xs text-slate-700">
                    Link to original research, industry reports, government data, academic studies.
                    Avoid citing low-quality blogs or unsourced claims.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-purple-50 rounded border border-purple-200">
                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Add Methodology When Presenting Data</p>
                  <p className="text-xs text-slate-700">
                    If ranking tools or products, explain how you tested (sample size, criteria,
                    timeframe). Transparency builds trust.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-purple-50 rounded border border-purple-200">
                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Maintain Trust Pages</p>
                  <p className="text-xs text-slate-700">
                    About Us, Editorial Guidelines, Contact, Privacy/Cookie Policy, Reviews Policy,
                    Disclosure (affiliate links). Link from footer.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 bg-purple-50 rounded border border-purple-200">
                <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Showcase Third-Party Proof</p>
                  <p className="text-xs text-slate-700">
                    Awards, certifications, press mentions, customer stories, review stars. Place
                    near CTAs for maximum impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Quick E-E-A-T Audit Questions</h4>
            <div className="bg-white border border-slate-200 rounded p-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Can a skeptical reader <strong>verify claims</strong>? (Sources linked, data
                    methodology explained)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Does the page clearly show <strong>who wrote it</strong> and{" "}
                    <strong>why they&apos;re qualified</strong>?
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Is there <strong>proof of experience</strong>? (Case studies, before/after,
                    screenshots from actual use)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Are trust pages <strong>easy to find</strong>? (About, Contact, Privacy linked
                    in footer)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

