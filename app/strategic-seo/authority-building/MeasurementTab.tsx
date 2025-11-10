import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  BarChart3,
  CheckCircle2,
  Link2,
  MapPin,
  Star,
  Video,
  TrendingUp,
  AlertTriangle,
  Rocket,
} from "lucide-react";

export default function MeasurementTab() {
  return (
    <div className="space-y-6">
      {/* Link & Mention Impact */}
      <Card className="border-2 border-blue-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link2 className="h-5 w-5 text-blue-600" />
            Link & Mention Impact
          </CardTitle>
          <CardDescription>
            Track how earned links strengthen your target pages and clusters
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Core Metrics</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">New Referring Domains (Tied to Clusters)</h5>
                  <p className="text-xs text-slate-700">
                    Track which clusters gained new referring domains after outreach campaigns. Focus
                    on relevant, authoritative sources—not total count.
                  </p>
                  <div className="mt-2 bg-white p-2 rounded text-xs">
                    <p className="font-semibold">Tools:</p>
                    <p>Ahrefs, SEMrush, Moz, or Google Search Console (limited linking data)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">Anchor Text Diversity</h5>
                  <p className="text-xs text-slate-700">
                    Monitor anchor distribution: branded (40-60%), partial match (20-30%), generic
                    (15-25%), exact match (5-10%). Flags over-optimization early.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded border border-blue-200">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">Pages Strengthened (Target URLs)</h5>
                  <p className="text-xs text-slate-700">
                    Which specific pages received new inbound links? Cross-reference with GSC data to
                    see if those pages gained impressions/clicks in the weeks following.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Assisted Metrics (Correlation, Not Causation)</h4>
            <div className="bg-white border border-slate-200 rounded p-4">
              <p className="text-sm text-slate-700 mb-3">
                Links don&apos;t guarantee rankings, but watch for these uplift signals 2-6 weeks
                post-link:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Impressions increase:</strong> Target page starts appearing for more
                    queries
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Position improvement:</strong> Average rank for cluster keywords moves up
                    (GSC)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>CTR uplift:</strong> Click-through rate from search results increases
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-blue-300 bg-blue-50">
            <BarChart3 className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Dashboard Recommendation:</strong> Track monthly: Total referring domains by
              cluster, anchor distribution %, target page impressions (GSC), and position changes for
              primary keywords.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Local SEO Metrics */}
      <Card className="border-2 border-green-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-green-600" />
            Local SEO Metrics
          </CardTitle>
          <CardDescription>
            Measure visibility, actions, and conversions for location-based searches
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">
              Google Business Profile (GBP) Performance
            </h4>
            <div className="space-y-3">
              <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                <h5 className="font-semibold text-sm mb-2">Customer Actions</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>
                    • <strong>Phone calls:</strong> Direct dial from GBP listing
                  </li>
                  <li>
                    • <strong>Direction requests:</strong> Users navigating to your location
                  </li>
                  <li>
                    • <strong>Website clicks:</strong> Traffic from GBP to your site
                  </li>
                  <li>
                    • <strong>Message inquiries:</strong> Direct messages sent via GBP
                  </li>
                </ul>
                <div className="mt-2 bg-white p-2 rounded text-xs">
                  <p>
                    <strong>Access:</strong> GBP Insights dashboard (view last 90 days)
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                <h5 className="font-semibold text-sm mb-2">Visual Engagement</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Photo views vs. peer businesses in your category</li>
                  <li>• Video plays (if you&apos;ve uploaded tour/intro videos)</li>
                  <li>• Profile interactions (how often users engage with your listing)</li>
                </ul>
              </div>

              <div className="border-l-4 border-l-green-500 bg-green-50 p-3">
                <h5 className="font-semibold text-sm mb-2">Search Queries</h5>
                <p className="text-xs text-slate-700 mb-1">
                  How users find you: direct (brand name) vs. discovery (category/service searches)
                </p>
                <p className="text-xs text-slate-600">
                  Goal: Increase discovery searches over time as you build local authority
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Location Page Performance</h4>
            <div className="bg-white border border-slate-200 rounded p-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Organic traffic per location page</p>
                    <p className="text-xs text-slate-600">
                      Track in GA4 with location-specific URL patterns (e.g., /locations/chicago)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Conversions per location page</p>
                    <p className="text-xs text-slate-600">
                      Form submissions, calls, direction requests originating from location pages
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Local pack appearances</p>
                    <p className="text-xs text-slate-600">
                      Use rank trackers with geo-targeting (BrightLocal, GMB Everywhere) to monitor
                      map pack rankings for core local terms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="border-amber-300 bg-amber-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Avoid obsessing over exact local ranks:</strong> They fluctuate based on
              user location, device, and personalization. Focus on directional trends and action
              metrics (calls, directions, clicks).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Reviews & UGC Metrics */}
      <Card className="border-2 border-amber-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-amber-600" />
            Reviews & UGC Metrics
          </CardTitle>
          <CardDescription>
            Monitor collection, response, and business impact of customer feedback
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Collection & Quality</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-amber-50 border border-amber-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">Review Velocity</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Number of new reviews per month</li>
                  <li>• Trend over time (increasing = healthy collection system)</li>
                  <li>• Distribution across platforms (GBP, Yelp, industry sites)</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">Average Rating</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Overall rating across major platforms</li>
                  <li>• Rating breakdown (% 5-star, 4-star, etc.)</li>
                  <li>• Target: 4.3+ stars to appear trustworthy</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Response & Engagement</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-amber-50 rounded border border-amber-200">
                <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">Response Time SLA Compliance</h5>
                  <p className="text-xs text-slate-700">
                    Track % of reviews responded to within your SLA (e.g., 48 hours). Aim for 90%+
                    compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-amber-50 rounded border border-amber-200">
                <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">Sentiment Themes</h5>
                  <p className="text-xs text-slate-700">
                    Categorize reviews by topic (product quality, support, pricing, etc.). Spot
                    recurring praise or complaints to inform product/content decisions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-amber-50 rounded border border-amber-200">
                <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm">Resolution Rate</h5>
                  <p className="text-xs text-slate-700">
                    Of negative reviews, what % were resolved (customer updated review or confirmed
                    satisfaction privately)?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Business Impact</h4>
            <div className="bg-white border border-slate-200 rounded p-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">UGC Reuse Rate</p>
                    <p className="text-xs text-slate-600">
                      How many reviews/testimonials are featured on site pages or in ads? Track
                      monthly additions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Conversion Rate Correlation</p>
                    <p className="text-xs text-slate-600">
                      Compare conversion rates on pages with vs. without testimonials/reviews to
                      measure social proof impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video & Image Metrics */}
      <Card className="border-2 border-purple-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-purple-600" />
            Video & Image SEO Metrics
          </CardTitle>
          <CardDescription>
            Track engagement and search visibility of visual content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Video Performance</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <h5 className="font-semibold text-sm mb-2">YouTube/Video Platform Metrics</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>
                    • <strong>Retention rate:</strong> Average % of video watched (60%+ is strong)
                  </li>
                  <li>
                    • <strong>Click-through rate from thumbnails:</strong> How often viewers click
                    when seeing your thumbnail
                  </li>
                  <li>
                    • <strong>Traffic source:</strong> How much comes from YouTube search vs.
                    suggested videos
                  </li>
                  <li>
                    • <strong>Engagement:</strong> Likes, comments, shares (signals quality to
                    algorithm)
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <h5 className="font-semibold text-sm mb-2">On-Site Video Impact</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>
                    • Page engagement after video views (time on page, scroll depth, conversion rate)
                  </li>
                  <li>
                    • Play rate: % of page visitors who play the embedded video
                  </li>
                  <li>
                    • Video-to-conversion correlation: Compare pages with vs. without video
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Image Performance</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-purple-50 border border-purple-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">Search Visibility</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Traffic from Google Images (check GSC)</li>
                  <li>• Impressions/clicks for image-focused queries</li>
                  <li>• Featured image placements in main SERP</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded p-3">
                <h5 className="font-semibold text-sm mb-2">Engagement</h5>
                <ul className="text-xs text-slate-700 space-y-1">
                  <li>• Time on page for image-heavy sections</li>
                  <li>• Scroll depth to reach images</li>
                  <li>• Social shares of visual content</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quarterly Action Plan */}
      <Card className="border-2 border-green-300 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-900">
            <Rocket className="h-5 w-5" />
            Quarterly Off-Page Action Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-green-800 mb-4">
            <strong>How to operationalize this quarter:</strong>
          </p>
          <div className="space-y-2 text-sm text-green-800">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
              <span>
                Pick <strong>one cluster</strong> that needs authority → plan a single linkable asset
                with <strong>two PR angles</strong>
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
              <span>
                Build a <strong>30-contact targeted list</strong>; send 1st-line-personalized pitches
                in <strong>two waves</strong>
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
              <span>
                Fully optimize <strong>one high-impact GBP</strong> + refresh photos + add{" "}
                <strong>3 local FAQs</strong>
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
              <span>
                Launch a <strong>review ask at one &quot;happy moment&quot;</strong> and set a{" "}
                <strong>48h response SLA</strong>
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
              <span>
                Produce <strong>one short explainer video</strong> with chapters and embed it on the
                matching page
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
              <span>
                Add an <strong>E-E-A-T proof strip</strong> (press logos, awards, author bio) to your
                top two money pages
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card className="border-2 border-red-300 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-900">
            <AlertTriangle className="h-5 w-5" />
            Measurement Pitfalls to Avoid
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">Obsessing Over Vanity Metrics</h5>
                <p className="text-xs text-red-800">
                  Total referring domains is less important than relevant, traffic-sending domains.
                  Quality beats quantity.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">Expecting Instant Results</h5>
                <p className="text-xs text-red-800">
                  Links take 2-6 weeks (sometimes months) to impact rankings. Measure trends, not
                  week-over-week changes.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">Ignoring User Engagement</h5>
                <p className="text-xs text-red-800">
                  A link that sends zero traffic is a weak signal. Prioritize links from pages with
                  real visitors.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <h5 className="font-semibold text-sm text-red-900 mb-1">
                  Not Connecting Dots to Business Outcomes
                </h5>
                <p className="text-xs text-red-800">
                  Track how authority-building impacts leads, demos, or sales—not just rankings.
                  Connect SEO to revenue.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

