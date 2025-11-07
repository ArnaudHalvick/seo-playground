"use client";

import { Info, CheckCircle2, XCircle, AlertTriangle, Copy, Check } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import type { CanonicalResult } from "@/lib/rules/canonical";
import type { UrlDiffSegment } from "@/lib/utils/url-diff";
import type { CleanPathRecommendation, CrawlTrapRisk } from "@/lib/seo-receipt-helpers";

interface SeoReceiptContentProps {
  inputUrl: string;
  result: CanonicalResult;
  segments: UrlDiffSegment[];
  isIndexable: boolean;
  isNoindexFollow: boolean;
  isNoindexNofollow: boolean;
  inSitemap: boolean;
  hasPriceParams: boolean;
  copiedField: string | null;
  copyToClipboard: (text: string, field: string) => Promise<void>;
  shortExplanation: string;
  cleanPathRec: CleanPathRecommendation | null;
  crawlTrapRisk: CrawlTrapRisk | null;
  bestPracticeConfirmation: { message: string; type: "success" | "info"; note?: string } | null;
  compact?: boolean;
}

export function SeoReceiptContent({
  inputUrl,
  result,
  segments,
  isIndexable,
  isNoindexFollow,
  isNoindexNofollow,
  inSitemap,
  hasPriceParams,
  copiedField,
  copyToClipboard,
  shortExplanation,
  cleanPathRec,
  crawlTrapRisk,
  bestPracticeConfirmation,
  compact = false,
}: SeoReceiptContentProps) {
  const spacing = compact ? "p-3 space-y-3" : "p-4 space-y-4";
  const textSize = compact ? "text-xs" : "text-xs";

  return (
    <div className={spacing}>
        <div>
          <div className="font-semibold mb-2 text-sm text-slate-700">URL Comparison</div>
          <div className="space-y-2">
            <div>
              <div className="text-xs text-slate-500 mb-1">Input URL</div>
              <div className="relative group">
                <div className="text-xs break-all bg-slate-100 p-2 rounded font-mono pr-8">
                  {inputUrl}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(inputUrl, "input")}
                  className={`absolute top-1 right-1 h-6 w-6 p-0 ${compact ? '' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}
                >
                  {copiedField === "input" ? (
                    <Check className="h-3 w-3 text-green-600" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-500 mb-1">Canonical URL</div>
              {result.blockInRobots ? (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded text-xs">
                  <p className="text-amber-900 font-medium mb-1">
                    🚫 No canonical tag needed
                  </p>
                  <p className="text-amber-800">
                    Crawlers are blocked via robots.txt, so meta robots and canonical tags 
                    are never seen. Block patterns prevent access entirely.
                  </p>
                </div>
              ) : (
                <div className="relative group">
                  <div className="text-xs break-all bg-blue-50 border border-blue-200 p-2 rounded font-mono pr-8">
                    {segments.map((seg, idx) => {
                      if (seg.type === "removed") {
                        return (
                          <span key={idx} className="bg-red-200 line-through">
                            {seg.text}
                          </span>
                        );
                      }
                      if (seg.type === "added") {
                        return (
                          <span key={idx} className="bg-green-200 font-semibold">
                            {seg.text}
                          </span>
                        );
                      }
                      return <span key={idx}>{seg.text}</span>;
                    })}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(result.canonical, "canonical")}
                    className={`absolute top-1 right-1 h-6 w-6 p-0 ${compact ? '' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}
                  >
                    {copiedField === "canonical" ? (
                      <Check className="h-3 w-3 text-green-600" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={compact ? "border-t pt-3" : "border-t pt-4"}>
          <div className="font-semibold mb-2 text-sm text-slate-700 flex items-center justify-between">
            <span>Indexability</span>
            {result.hasBlockedParams ? (
              <XCircle className="h-5 w-5 text-red-600" />
            ) : isIndexable ? (
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            ) : isNoindexFollow ? (
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            ) : (
              <XCircle className="h-5 w-5 text-red-600" />
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {result.hasBlockedParams ? (
              <Badge variant="destructive" className="text-xs">
                Blocked by robots.txt
              </Badge>
            ) : (
            <Badge
                variant={
                  isIndexable ? "default" : isNoindexFollow ? "secondary" : "destructive"
                }
              className="text-xs"
            >
              {result.robots}
            </Badge>
            )}
            {result.blockInRobots && !result.hasBlockedParams && (
              <Badge variant="destructive" className="text-xs">
                Also blocked by robots.txt
              </Badge>
            )}
          </div>
          {result.robotsMatchedRules && result.robotsMatchedRules.length > 0 && (
            <div className="mt-2 text-xs text-slate-600 space-y-1">
              {result.robotsMatchedRules.map((rule, idx) => (
                <div key={idx} className="bg-red-50 border border-red-200 p-2 rounded">
                  {rule}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={compact ? "border-t pt-3" : "border-t pt-4"}>
          <div className="font-semibold mb-2 text-sm text-slate-700 flex items-center justify-between">
            <span>Sitemap Inclusion</span>
            {inSitemap ? (
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            ) : (
              <XCircle className="h-5 w-5 text-slate-400" />
            )}
          </div>
          <Badge variant={inSitemap ? "default" : "outline"} className="text-xs">
            {inSitemap ? "Included in Sitemap" : "Excluded from Sitemap"}
          </Badge>
        </div>

        {shortExplanation && (
          <div className="mt-3">
            <div className="flex items-start gap-2 text-xs text-slate-600 bg-blue-50 border border-blue-100 p-3 rounded">
              <Info className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">{shortExplanation}</p>
            </div>
          </div>
        )}

        {bestPracticeConfirmation && (
          <div className="mt-3">
            <div
              className={`flex items-start gap-2 text-xs p-3 rounded border ${
                bestPracticeConfirmation.type === "success"
                  ? "text-green-700 bg-green-50 border-green-200"
                  : "text-slate-700 bg-slate-50 border-slate-200"
              }`}
            >
              <Info
                className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                  bestPracticeConfirmation.type === "success"
                    ? "text-green-600"
                    : "text-slate-600"
                }`}
              />
              <div>
                <p className="leading-relaxed">{bestPracticeConfirmation.message}</p>
                {bestPracticeConfirmation.note && (
                  <div className="mt-2 pt-2 border-t border-current/20">
                    <p className="leading-relaxed text-[11px]">
                      {bestPracticeConfirmation.note}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {result.warnings.length > 0 && (
          <div className={compact ? "border-t pt-3" : "border-t pt-4"}>
            <div className="font-semibold mb-2 text-sm text-amber-700 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Configuration Issue
            </div>
            <ul className="space-y-1">
              {result.warnings.map((warning, idx) => (
                <li key={idx} className="text-xs text-amber-700 bg-amber-50 p-2 rounded">
                  {warning}
                </li>
              ))}
            </ul>
          </div>
        )}

        {cleanPathRec && !result.blockInRobots && (
          <div className={compact ? "border-t pt-3" : "border-t pt-4"}>
            <div className="font-semibold mb-2 text-sm text-slate-700">
              Clean Path Recommendation
            </div>
            <div className="space-y-3">
              <div className="text-xs text-slate-600 bg-slate-50 border border-slate-200 p-3 rounded leading-relaxed">
                {cleanPathRec.message}
              </div>

              {cleanPathRec.showExamples && cleanPathRec.example && (
                <div className="text-xs bg-green-50 border border-green-200 p-3 rounded">
                  <div className="font-medium text-green-800 mb-2 flex items-center gap-1.5">
                    <span>🟢</span>
                    <span>Clean Path Example</span>
                  </div>
                  <code className="block bg-white px-2 py-1.5 rounded text-slate-800 border border-green-300 font-mono">
                    {cleanPathRec.example}
                  </code>
                  <p className="mt-2 text-slate-700 leading-relaxed">
                    Stable filters like color can safely move from query parameters to
                    descriptive path segments to improve crawl clarity and keyword
                    targeting.
                  </p>
                </div>
              )}

              {cleanPathRec.relatedSuggestions &&
                cleanPathRec.relatedSuggestions.length > 0 && (
                  <div className="text-xs bg-slate-50 border border-slate-300 p-3 rounded">
                    <div className="font-medium text-slate-700 mb-2 flex items-center gap-1.5">
                      <span>👕</span>
                      <span>Related Clean Path Ideas</span>
                    </div>
                    <div className="space-y-1.5">
                      {cleanPathRec.relatedSuggestions.map((suggestion, idx) => (
                        <code
                          key={idx}
                          className="block bg-white px-2 py-1 rounded text-slate-700 border border-slate-200 font-mono text-[11px]"
                        >
                          {suggestion}
                        </code>
                      ))}
                    </div>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      These reinforce a logical, user-driven site architecture.
                    </p>
                  </div>
                )}

              {cleanPathRec.educationalNote && (
                <div className="text-xs text-slate-600 bg-blue-50 border border-blue-200 p-2.5 rounded leading-relaxed">
                  <span className="font-medium">💡 </span>
                  {cleanPathRec.educationalNote}
                </div>
              )}
            </div>
          </div>
        )}

        {crawlTrapRisk && (
          <div className={compact ? "border-t pt-3" : "border-t pt-4"}>
            <div className="font-semibold mb-2 text-sm text-slate-700">Crawl Trap Risk</div>
            <div
              className={`p-3 rounded border ${
                crawlTrapRisk.level === "high"
                  ? "bg-red-50 border-red-200"
                  : crawlTrapRisk.level === "medium"
                  ? "bg-amber-50 border-amber-200"
                  : "bg-green-50 border-green-200"
              }`}
            >
              <div className="flex items-start gap-2">
                <span className="text-base flex-shrink-0">{crawlTrapRisk.icon}</span>
                <div className="flex-1">
                  <p
                    className={`text-xs font-medium ${
                      crawlTrapRisk.level === "high"
                        ? "text-red-700"
                        : crawlTrapRisk.level === "medium"
                        ? "text-amber-700"
                        : "text-green-700"
                    }`}
                  >
                    {crawlTrapRisk.message}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">{crawlTrapRisk.explanation}</p>
                  {crawlTrapRisk.robotsTxtSuggestion && (
                    <code className="text-xs bg-slate-800 text-green-400 p-1.5 rounded mt-2 block font-mono">
                      {crawlTrapRisk.robotsTxtSuggestion}
                    </code>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {hasPriceParams && result.blockInRobots && (
          <div className={compact ? "border-t pt-3" : "border-t pt-4"}>
            <div className="p-3 rounded border bg-blue-50 border-blue-200">
              <div className="flex items-start gap-2">
                <span className="text-base flex-shrink-0">🔢</span>
                <div className="flex-1">
                  <p className="text-xs font-medium text-blue-700 mb-1">
                    Price Range Filters Blocked
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Price range filters create thousands of low-value URL variations (e.g., ?price_min=5&price_max=200). 
                    They don't represent distinct user intent and can rapidly multiply. 
                    Blocking them prevents crawl traps and preserves crawl budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

