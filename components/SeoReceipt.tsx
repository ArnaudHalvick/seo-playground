"use client";

import React, { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Info, ChevronDown, ChevronUp } from "lucide-react";
import { useConfig } from "@/lib/config/provider";
import { computeCanonical } from "@/lib/rules/canonical";
import { diffUrls } from "@/lib/utils/url-diff";
import {
  getShortExplanation,
  getCleanPathRecommendation,
  getCrawlTrapRisk,
  getBestPracticeConfirmation,
} from "@/lib/seo-receipt-helpers";
import { SeoReceiptContent } from "./seo-receipt/SeoReceiptContent";

export function SeoReceipt() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [mobileCollapsed, setMobileCollapsed] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { config } = useConfig();

  const urlSearchParams = new URLSearchParams(searchParams.toString());
  const result = computeCanonical(pathname, urlSearchParams, config);
  const inSitemap = result.sitemapIncluded;

  const inputUrl = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
  const { segments } = diffUrls(inputUrl, result.canonical);

  const isIndexable = result.robots === "index,follow";
  const isNoindexFollow = result.robots === "noindex,follow";
  const isNoindexNofollow = result.robots === "noindex,nofollow";

  // Generate educational content using extracted helpers
  const shortExplanation = getShortExplanation(result);
  const cleanPathRec = getCleanPathRecommendation(pathname, urlSearchParams, config);
  const crawlTrapRisk = getCrawlTrapRisk(pathname, urlSearchParams, config);
  const bestPracticeConfirmation = getBestPracticeConfirmation(result, crawlTrapRisk);

  // Check for price parameters
  const hasPriceMin = urlSearchParams.has("price_min");
  const hasPriceMax = urlSearchParams.has("price_max");
  const hasPriceParams = hasPriceMin || hasPriceMax;

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const copyTrace = async () => {
    const traceText = result.trace.join("\n");
    await copyToClipboard(traceText, "trace");
  };

  return (
    <>
      {/* Desktop: Fixed right sidebar (always visible on lg+) */}
      <div className="hidden lg:flex lg:flex-col fixed top-16 right-0 h-[calc(100vh-4rem)] w-96 border-l bg-white shadow-xl z-30">
        <div className="flex items-center gap-2 p-4 border-b bg-slate-50">
          <Info className="h-5 w-5 text-blue-600" />
          <h2 className="font-semibold text-lg">SEO Receipt</h2>
        </div>

        <div className="flex-1 overflow-y-auto">
          <SeoReceiptContent
            inputUrl={inputUrl}
            result={result}
            segments={segments}
            isIndexable={isIndexable}
            isNoindexFollow={isNoindexFollow}
            isNoindexNofollow={isNoindexNofollow}
            inSitemap={inSitemap}
            hasPriceParams={hasPriceParams}
            copiedField={copiedField}
            copyToClipboard={copyToClipboard}
            copyTrace={copyTrace}
            shortExplanation={shortExplanation}
            cleanPathRec={cleanPathRec}
            crawlTrapRisk={crawlTrapRisk}
            bestPracticeConfirmation={bestPracticeConfirmation}
          />
        </div>
      </div>

      {/* Mobile: Bottom drawer (collapsible) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t shadow-xl">
        <button
          onClick={() => setMobileCollapsed(!mobileCollapsed)}
          className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-600" />
            <h2 className="font-semibold">SEO Receipt</h2>
          </div>
          {mobileCollapsed ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>

        {!mobileCollapsed && (
          <div className="max-h-[60vh] overflow-y-auto">
            <SeoReceiptContent
              inputUrl={inputUrl}
              result={result}
              segments={segments}
              isIndexable={isIndexable}
              isNoindexFollow={isNoindexFollow}
              isNoindexNofollow={isNoindexNofollow}
              inSitemap={inSitemap}
              hasPriceParams={hasPriceParams}
              copiedField={copiedField}
              copyToClipboard={copyToClipboard}
              copyTrace={copyTrace}
              shortExplanation={shortExplanation}
              cleanPathRec={cleanPathRec}
              crawlTrapRisk={crawlTrapRisk}
              bestPracticeConfirmation={bestPracticeConfirmation}
              compact
            />
          </div>
        )}
      </div>
    </>
  );
}
