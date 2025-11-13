import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  FileText,
  Calendar,
  List,
  Target,
  BarChart3,
  Link2,
  CheckCircle2,
  Lightbulb,
  Download,
  BookOpen,
} from "lucide-react";

export default function ResourcesPageContent() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold">Resources & Templates</h1>
          </div>
          <p className="text-xl text-slate-700 leading-relaxed">
            Ready-to-use templates, frameworks, and checklists to standardize your strategic SEO
            workflows. Copy these into Google Sheets or your preferred tool and adapt them to your
            needs.
          </p>
        </div>

        {/* Philosophy */}
        <Card className="mb-8 border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-purple-600" />
              How to Use These Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-slate-700">
              <p>
                <strong>Start simple:</strong> These templates are starting points, not rigid rules.
                Adapt them to match your team&apos;s workflow, business context, and available data.
              </p>
              <p>
                <strong>Living documents:</strong> Review and refine your templates quarterly. What
                works for a 5-person team won&apos;t scale to 50, and vice versa.
              </p>
              <p>
                <strong>Share liberally:</strong> Make templates accessible to everyone who needs
                them. Standardization reduces friction and improves quality.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Content Brief Template */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-8 w-8 text-purple-600" />
            <h2 className="text-2xl font-bold">Content Brief Templates</h2>
          </div>
          <Card className="border-2 border-purple-100">
            <CardHeader>
              <CardTitle className="text-lg">Standard Content Brief Template</CardTitle>
              <CardDescription>
                The foundation of quality content production at scale
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Brief Components:</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Target Keyword:</strong> Primary keyword with volume and difficulty
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Search Intent:</strong> Informational, commercial, transactional,
                        navigational
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Target Audience:</strong> Who is searching and what do they need?
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>SERP Analysis Summary:</strong> Top-ranking content patterns and
                        formats
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Content Angle:</strong> Your unique take or perspective
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Suggested Outline:</strong> H2/H3 structure based on SERP analysis
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Questions to Answer:</strong> PAA and related questions from
                        AlsoAsked
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Internal Links:</strong> Suggested hub/spoke linking opportunities
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Success Metrics:</strong> Target rankings, traffic, conversions
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>E-E-A-T Signals:</strong> Author credentials, citations, original
                        data needed
                      </div>
                    </li>
                  </ul>
                </div>
                <Alert>
                  <AlertDescription className="text-xs">
                    <strong>Pro tip:</strong> Store briefs in a shared folder (Sheets, Notion,
                    Airtable) with status tracking. This creates an audit trail and helps onboard
                    new writers.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Editorial Calendar */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-purple-600" />
            <h2 className="text-2xl font-bold">Editorial Calendar Templates</h2>
          </div>
          <Card className="border-2 border-purple-100">
            <CardHeader>
              <CardTitle className="text-lg">Editorial Calendar & Workflow Tracker</CardTitle>
              <CardDescription>Manage content pipeline from brief to publish</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Calendar Columns:</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Content Title / Topic</strong>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Target Keyword</strong> (with volume)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Priority</strong> (High/Medium/Low based on traffic potential ×
                        business value)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Status</strong> (Backlog → Briefed → Drafted → Review → Published)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Assigned Writer</strong>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Draft Due Date</strong>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Publish Date</strong>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Content Brief Link</strong>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Live URL</strong> (once published)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Notes</strong> (blockers, dependencies)
                      </div>
                    </li>
                  </ul>
                </div>
                <Alert>
                  <AlertDescription className="text-xs">
                    <strong>Advanced:</strong> Add conditional formatting to highlight overdue
                    items, color-code by content pillar, or create pivot tables for capacity
                    planning.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Keyword Clustering */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <List className="h-8 w-8 text-purple-600" />
            <h2 className="text-2xl font-bold">Keyword Clustering Framework</h2>
          </div>
          <Card className="border-2 border-purple-100">
            <CardHeader>
              <CardTitle className="text-lg">
                Keyword Grouping & Topical Authority Mapping
              </CardTitle>
              <CardDescription>
                Organize keywords into content clusters and hub pages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Clustering Approach:</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Export Keywords:</strong> Pull 500-2000 keywords from Ahrefs/Semrush
                        for your topic
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Group by Intent:</strong> Create tabs for Informational, Commercial,
                        Transactional
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Identify Parent Topics:</strong> Look for keyword modifiers that
                        suggest subtopics
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Create Hub Pages:</strong> Assign broad head terms as hub content
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Map Spoke Pages:</strong> Group related long-tail keywords under
                        each hub
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Plan Internal Links:</strong> Define which spoke pages link back to
                        hub
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Example Cluster:</h3>
                  <div className="text-sm text-purple-800 space-y-1">
                    <p>
                      <strong>Hub:</strong> &quot;content marketing strategy&quot; (2,500 volume)
                    </p>
                    <p>
                      <strong>Spokes:</strong>
                    </p>
                    <ul className="ml-4 space-y-1">
                      <li>• &quot;content marketing strategy template&quot; (400 volume)</li>
                      <li>• &quot;how to create a content marketing strategy&quot; (600 volume)</li>
                      <li>• &quot;B2B content marketing strategy&quot; (300 volume)</li>
                      <li>• &quot;content marketing strategy examples&quot; (500 volume)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SERP Analysis Template */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-8 w-8 text-purple-600" />
            <h2 className="text-2xl font-bold">SERP Analysis Template</h2>
          </div>
          <Card className="border-2 border-purple-100">
            <CardHeader>
              <CardTitle className="text-lg">Systematic SERP Review Framework</CardTitle>
              <CardDescription>Analyze top 10 results to inform content strategy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">What to Track:</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>URL & Page Title</strong> of top 10 results
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Domain Authority</strong> (Ahrefs DR or Semrush AS)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Content Format</strong> (listicle, guide, comparison, tool)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Word Count</strong> (to gauge depth expectations)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>SERP Features</strong> (featured snippet, PAA, video, images)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Content Gaps</strong> (topics competitors missed)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Common Subtopics</strong> (recurring H2/H3 patterns)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>E-E-A-T Signals</strong> (author bios, citations, original research)
                      </div>
                    </li>
                  </ul>
                </div>
                <Alert>
                  <AlertDescription className="text-xs">
                    <strong>Time saver:</strong> Use Thruuu to automate most of this analysis.
                    Export to Sheets and add your qualitative notes.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* KPI Dashboard */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="h-8 w-8 text-purple-600" />
            <h2 className="text-2xl font-bold">KPI Dashboard Template</h2>
          </div>
          <Card className="border-2 border-purple-100">
            <CardHeader>
              <CardTitle className="text-lg">SEO Performance Tracking Dashboard</CardTitle>
              <CardDescription>Monitor key metrics and prove ROI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Essential KPIs:</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Organic Traffic:</strong> Monthly visitors from search (GA4)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Keyword Rankings:</strong> Top 3, Top 10, Top 20 counts
                        (Ahrefs/Semrush)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Click-Through Rate:</strong> Average CTR by position (GSC)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Impressions:</strong> Total search visibility (GSC)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Conversions from Organic:</strong> Leads, sales, signups (GA4)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Pages Indexed:</strong> Coverage status (GSC)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Backlinks:</strong> Referring domains and total links (Ahrefs)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Content Published:</strong> New pages this month
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Dashboard Structure:</h3>
                  <p className="text-sm text-blue-800 mb-2">
                    Build in Looker Studio with three sections:
                  </p>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>
                      • <strong>Executive Summary:</strong> High-level metrics with MoM % change
                    </li>
                    <li>
                      • <strong>Traffic Breakdown:</strong> By landing page, device, country
                    </li>
                    <li>
                      • <strong>Content Performance:</strong> Top pages by traffic, conversions
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* E-E-A-T Checklist */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="h-8 w-8 text-purple-600" />
            <h2 className="text-2xl font-bold">E-E-A-T Checklist</h2>
          </div>
          <Card className="border-2 border-purple-100">
            <CardHeader>
              <CardTitle className="text-lg">
                Experience, Expertise, Authoritativeness, Trust
              </CardTitle>
              <CardDescription>
                Google&apos;s quality framework for content evaluation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Content Checklist:</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Experience:</strong> Does the author have first-hand experience with
                        the topic?
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Author Bio:</strong> Detailed bio with credentials, photo, social
                        links
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Citations:</strong> Link to authoritative sources for claims
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Original Research:</strong> Proprietary data, surveys, case studies
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Content Freshness:</strong> Last updated date and review schedule
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Transparency:</strong> About page, contact info, editorial standards
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Reviews/Testimonials:</strong> User-generated trust signals
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Link Prospecting */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Link2 className="h-8 w-8 text-purple-600" />
            <h2 className="text-2xl font-bold">Link Prospecting Workflow</h2>
          </div>
          <Card className="border-2 border-purple-100">
            <CardHeader>
              <CardTitle className="text-lg">Outreach Tracker & Link Building Pipeline</CardTitle>
              <CardDescription>Systematic approach to earning backlinks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Prospecting Columns:</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Target Website</strong> (domain)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Domain Authority</strong> (DR/DA)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Contact Name</strong> (editor, journalist)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Contact Email</strong> (verified)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Linkable Asset</strong> (which of your pages)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Outreach Status</strong> (Not Contacted → Sent → Follow-up → Earned
                        → Declined)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Date Contacted</strong>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Response Date</strong>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Link URL</strong> (if earned)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-500 flex-shrink-0" />
                      <div>
                        <strong>Notes</strong>
                      </div>
                    </li>
                  </ul>
                </div>
                <Alert>
                  <AlertDescription className="text-xs">
                    <strong>Pro tip:</strong> Target a 5-10% conversion rate from outreach to earned
                    link. Quality over quantity—personalized emails to relevant sites beat mass
                    blasts.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Getting Started */}
        <Card className="border-2 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <Download className="h-6 w-6" />
              Getting Started with Templates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-green-800">
              <p>
                <strong>Step 1:</strong> Start with the Content Brief and Editorial Calendar
                templates. These are foundational for any content operation.
              </p>
              <p>
                <strong>Step 2:</strong> Add Keyword Clustering and SERP Analysis templates once
                you&apos;re consistently publishing content.
              </p>
              <p>
                <strong>Step 3:</strong> Implement KPI Dashboard when you have 3-6 months of data to
                track trends.
              </p>
              <p>
                <strong>Step 4:</strong> Add Link Prospecting workflow once you have linkable assets
                (research, tools, data).
              </p>
              <p className="pt-2">
                <strong>Remember:</strong> Templates are starting points. Customize them based on
                your team size, industry, and business goals. Review quarterly and refine based on
                what actually gets used.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
