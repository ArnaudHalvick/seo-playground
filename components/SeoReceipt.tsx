"use client";

import React, { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Info, CheckCircle2, XCircle, AlertTriangle, Copy, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useConfig } from "@/lib/config/provider";
import { computeCanonical, type CanonicalResult } from "@/lib/rules/canonical";
import { diffUrls } from "@/lib/utils/url-diff";
import { evaluateParams } from "@/lib/rules/params";
import type { ParamConfig } from "@/lib/rules/params";

function getShortExplanation(result: CanonicalResult): string {
  const { robots, blockInRobots, sitemapIncluded, hasBlockedParams } = result;

  let explanation = "";

  // robots.txt-only strategy (blocked params)
  if (hasBlockedParams && blockInRobots) {
    explanation =
      "Crawlers are blocked via robots.txt from accessing this page. No meta robots tags are needed since the page is never crawled.";
  }
  // Primary explanation based on robots directive
  else if (robots === "noindex,nofollow" && blockInRobots) {
    explanation =
      "Crawlers are blocked from accessing this page to prevent wasted crawl budget or duplicate discovery.";
  } else if (robots === "noindex,follow") {
    explanation =
      "This page isn't indexed to avoid duplicate content, but links on it are still followed so Google can discover deeper pages.";
  } else if (robots === "index,follow") {
    explanation = "This page has unique value and can appear in search results.";
  } else if (robots === "noindex,nofollow") {
    explanation = "This page is not indexed and links are not followed to prevent crawl waste.";
  }

  // Add sitemap context if excluded (but not for robots.txt-only)
  if (!sitemapIncluded && explanation && !hasBlockedParams) {
    explanation +=
      " Only canonical or indexable URLs are included in the sitemap to keep it clean and efficient.";
  }

  return explanation;
}

interface CleanPathRecommendation {
  message: string;
  example?: string;
  relatedSuggestions?: string[];
  educationalNote?: string;
  showExamples: boolean;
}

function getCleanPathRecommendation(
  pathname: string,
  searchParams: URLSearchParams,
  config: ParamConfig
): CleanPathRecommendation | null {
  const evaluated = evaluateParams(pathname, searchParams, config);

  const hasStable = evaluated.stableParams.size > 0;
  const hasUnstable = evaluated.unstableParams.size > 0;
  const hasBlocked = evaluated.blockedParams.size > 0;
  const hasSearch = evaluated.searchParams.size > 0;
  const hasPagination = evaluated.pagination.isPaginated;

  // Check for multi-select parameters (crawl trap risk)
  const allParams = Array.from(searchParams.entries());
  const hasMultiSelect = allParams.some(([key, value]) => value.includes(","));

  // Multi-select parameters should not get clean path recommendations
  if (hasMultiSelect) {
    return {
      message:
        "🔴 Multi-select parameter detected — this creates explosive URL combinations. Use noindex, follow and avoid clean paths.",
      showExamples: false,
    };
  }

  // No parameters at all
  if (!hasStable && !hasUnstable && !hasBlocked && !hasSearch && !hasPagination) {
    return {
      message:
        "ℹ️ No clean path suggestion — this URL doesn't represent a filter or variant worth exposing.",
      showExamples: false,
    };
  }

  // Pagination only
  if (hasPagination && !hasStable && !hasUnstable && !hasBlocked && !hasSearch) {
    return {
      message:
        "📄 Pagination parameter — should stay as ?page= with noindex, follow and self-canonical. Not suitable for a clean path.",
      showExamples: false,
    };
  }

  // Search parameters
  if (hasSearch) {
    return {
      message:
        "🔍 Search parameter — keep as query with noindex, follow; not suitable for clean paths.",
      showExamples: false,
    };
  }

  // Blocked/tracking parameters only
  if (hasBlocked && !hasStable && !hasUnstable && !hasPagination && !hasSearch) {
    return {
      message:
        "🚫 Tracking or UI parameter — purely functional; block via robots.txt or ignore during crawling.",
      showExamples: false,
    };
  }

  // Mixed: stable + unstable (unstable cancels clean path benefit)
  if (hasStable && hasUnstable) {
    return {
      message:
        "⚠️ Mixed parameters detected — unstable sorting cancels the need for clean path; canonicalize to base version.",
      showExamples: false,
    };
  }

  // Multiple stable parameters (too granular for clean paths)
  if (hasStable && !hasUnstable) {
    const stableKeys = Array.from(evaluated.stableParams.keys());
    
    // Check if there are 2+ stable parameters
    if (stableKeys.length >= 2) {
      const paramList = stableKeys.map(key => {
        const value = evaluated.stableParams.get(key);
        return `${key}=${value}`;
      }).join(", ");
      
      return {
        message: `⚠️ Multiple stable filters detected (${paramList}) — combining them limits SEO value.`,
        educationalNote:
          "Multiple stable filters create N×M combinations that are too granular for SEO paths. Keep these combinations discoverable with noindex,follow, but only convert single stable filters (like color or size) into clean paths. Single-filter clean paths create meaningful landing pages that match user search intent.",
        showExamples: false,
      };
    }
    
    // Single stable parameter only (good candidate for clean paths)
    const exampleParam = stableKeys[0];
    const exampleValue = evaluated.stableParams.get(exampleParam);

    // Generate example path based on current pathname
    let examplePath = pathname.replace(/\/$/, "");
    const basePath = examplePath; // Store original for category variations

    // Detect if we're already on a filtered page (context detection)
    const isOnGenderPage = examplePath.match(/^\/shop\/[^/]+\/for\/[^/]+$/);
    const isOnColorPage = examplePath.match(/^\/shop\/[^/]+\/color\/[^/]+$/);
    const isOnSizePage = examplePath.match(/^\/shop\/[^/]+\/size\/[^/]+$/);

    // Extract current context for nested suggestions
    let currentContext = '';
    if (isOnGenderPage) {
      currentContext = examplePath; // e.g., /shop/t-shirts/for/women
    } else if (isOnColorPage) {
      currentContext = examplePath; // e.g., /shop/t-shirts/color/black
    } else if (isOnSizePage) {
      currentContext = examplePath; // e.g., /shop/t-shirts/size/M
    }

    // Handle color parameter
    if (exampleParam === "color") {
      // If on gender page, suggest nested
      if (isOnGenderPage) {
        examplePath = `${currentContext}/color/${exampleValue}/`;
        
        const allColors = ['black', 'blue', 'white', 'red', 'green', 'gray', 'brown', 'tan'];
        const otherColors = allColors.filter(c => c !== exampleValue).slice(0, 3);
        const colorSuggestions = otherColors.map(color => `${currentContext}/color/${color}/`);
        
        return {
          message: `✅ You could nest this color filter: ${examplePath}`,
          example: examplePath,
          relatedSuggestions: colorSuggestions,
          educationalNote:
            "Nested clean paths combine filters for more specific landing pages (e.g., 'Women's Black T-Shirts'). Consider: Is this specific enough to match user search intent? Will it have enough content? Most sites limit clean paths to 1-2 filter levels maximum.",
          showExamples: true,
        };
      }
      
      // If on size page, suggest nested
      if (isOnSizePage) {
        examplePath = `${currentContext}/color/${exampleValue}/`;
        
        const allColors = ['black', 'blue', 'white', 'red', 'green', 'gray', 'brown', 'tan'];
        const otherColors = allColors.filter(c => c !== exampleValue).slice(0, 3);
        const colorSuggestions = otherColors.map(color => `${currentContext}/color/${color}/`);
        
        return {
          message: `✅ You could nest this color filter: ${examplePath}`,
          example: examplePath,
          relatedSuggestions: colorSuggestions,
          educationalNote:
            "Combining size + color creates very specific pages (e.g., 'Size M Black T-Shirts'). This may be too granular for most sites — typically better as noindex,follow. Evaluate: Does this match real search queries? Will there be 10+ products?",
          showExamples: true,
        };
      }
      
      // Otherwise, suggest from base category
      if (examplePath.match(/^\/shop\/[^/]+$/)) {
        examplePath = `${basePath}/color/${exampleValue}/`;
        
        // Show other colors as related examples
        const allColors = ['black', 'blue', 'white', 'red', 'green', 'gray', 'brown', 'tan'];
        const otherColors = allColors.filter(c => c !== exampleValue).slice(0, 3);
        const colorSuggestions = otherColors.map(color => `${basePath}/color/${color}/`);

        return {
          message: `✅ Single stable parameter detected — you could turn it into a clean path like ${examplePath} if it represents real user intent.`,
          example: examplePath,
          relatedSuggestions: colorSuggestions,
          educationalNote:
            "This site implements clean paths for color at /color/. Stable filters can safely move from query parameters to descriptive path segments to improve crawl clarity and keyword targeting.",
          showExamples: true,
        };
      }
    }

    // Handle size parameter
    if (exampleParam === "size") {
      // If on gender page, suggest nested
      if (isOnGenderPage) {
        examplePath = `${currentContext}/size/${exampleValue}/`;
        
        const allSizes = ['S', 'M', 'L', 'XL', '6', '8', '9', '10', '11', '12'];
        const otherSizes = allSizes.filter(s => s !== exampleValue).slice(0, 3);
        const sizeSuggestions = otherSizes.map(size => `${currentContext}/size/${size}/`);
        
        return {
          message: `✅ You could nest this size filter: ${examplePath}`,
          example: examplePath,
          relatedSuggestions: sizeSuggestions,
          educationalNote:
            "Nested paths like /women/size/M/ are more specific than /size/M/ alone. Evaluate trade-offs: better targeting vs. thinner content and deeper URL structure. Will each page have 10+ products and unique value?",
          showExamples: true,
        };
      }
      
      // If on color page, suggest nested
      if (isOnColorPage) {
        examplePath = `${currentContext}/size/${exampleValue}/`;
        
        const allSizes = ['S', 'M', 'L', 'XL', '6', '8', '9', '10', '11', '12'];
        const otherSizes = allSizes.filter(s => s !== exampleValue).slice(0, 3);
        const sizeSuggestions = otherSizes.map(size => `${currentContext}/size/${size}/`);
        
        return {
          message: `✅ You could nest this size filter: ${examplePath}`,
          example: examplePath,
          relatedSuggestions: sizeSuggestions,
          educationalNote:
            "Combining color + size creates very specific pages (e.g., 'Black T-Shirts Size M'). This may be too granular for most sites — typically better as noindex,follow. Consider if this matches real user search patterns.",
          showExamples: true,
        };
      }
      
      // Base category suggestion
      if (examplePath.match(/^\/shop\/[^/]+$/)) {
        examplePath = `${basePath}/size/${exampleValue}/`;
        
        // Show other sizes as related examples
        const allSizes = ['S', 'M', 'L', 'XL', '6', '8', '9', '10', '11', '12'];
        const otherSizes = allSizes.filter(s => s !== exampleValue).slice(0, 3);
        const sizeSuggestions = otherSizes.map(size => `${basePath}/size/${size}/`);

        return {
          message: `✅ Single stable parameter detected — you could turn it into a clean path like ${examplePath} if it represents real user intent.`,
          example: examplePath,
          relatedSuggestions: sizeSuggestions,
          educationalNote:
            "This site implements clean paths for size at /size/. Size filters create meaningful landing pages when they represent common user search patterns.",
          showExamples: true,
        };
      }
    }

    // Handle gender parameter
    if (exampleParam === "gender" && examplePath.match(/^\/shop\/[^/]+$/)) {
      examplePath = `${basePath}/for/${exampleValue}/`;
      
      const genders = ["women", "men", "girls", "boys"];
      const otherGenders = genders.filter(g => g !== exampleValue);
      const genderSuggestions = otherGenders.map(g => `${basePath}/for/${g}/`);

      return {
        message: `✅ Gender is already implemented as a clean path! Use ${examplePath} instead.`,
        example: examplePath,
        relatedSuggestions: genderSuggestions,
        educationalNote:
          "This site implements gender as clean paths at /for/[gender]/. This creates meaningful landing pages for each demographic.",
        showExamples: true,
      };
    }

    // Fallback for other stable params
    return {
      message: `✅ Single stable parameter detected — you could turn it into a clean path like ${examplePath}/${exampleValue}/ if it represents real user intent.`,
      example: `${examplePath}/${exampleValue}/`,
      educationalNote:
        "Clean paths are ideal for limited, meaningful filters that match user search intent. They should not be used for infinite or numeric combinations.",
      showExamples: false,
    };
  }

  // Unstable parameters only (check for sort specifically)
  if (hasUnstable && !hasStable) {
    const unstableKeys = Array.from(evaluated.unstableParams.keys());
    const hasSort = unstableKeys.some(key => key.includes('sort') || key === 'order' || key === 'orderby');
    
    if (hasSort) {
      return {
        message:
          "🔄 Sort parameter detected — keep as query with noindex,follow (discoverable but not indexed).",
        educationalNote:
          "Alternative Strategy: Create curated clean paths for high-value sorts. Examples: ?sort=price_asc → /cheapest/, ?sort=popularity → /bestsellers/, ?sort=newest → /latest/. Requires manual curation but enables keyword targeting.",
        showExamples: false,
      };
    }
    
    return {
      message:
        "⚠️ Unstable parameter — keep it as a query with noindex,follow; it changes sorting or layout but not meaning.",
      showExamples: false,
    };
  }

  // Default fallback
  return {
    message:
      "ℹ️ No clean path suggestion — this URL doesn't represent a filter or variant worth exposing.",
    showExamples: false,
  };
}

interface CrawlTrapRisk {
  level: "high" | "medium" | "low" | "none";
  icon: string;
  message: string;
  explanation: string;
  robotsTxtSuggestion?: string;
}

function getCrawlTrapRisk(
  pathname: string,
  searchParams: URLSearchParams,
  config: ParamConfig
): CrawlTrapRisk | null {
  const evaluated = evaluateParams(pathname, searchParams, config);

  const hasStable = evaluated.stableParams.size > 0;
  const hasUnstable = evaluated.unstableParams.size > 0;
  const hasBlocked = evaluated.blockedParams.size > 0;
  const hasSearch = evaluated.searchParams.size > 0;
  const hasPagination = evaluated.pagination.isPaginated;

  // No parameters - no risk to display
  if (!hasStable && !hasUnstable && !hasBlocked && !hasSearch && !hasPagination) {
    return null;
  }

  // Detect high-risk patterns
  const allParams = Array.from(searchParams.entries());
  const paramNames = Array.from(searchParams.keys());

  // 1. Check for numeric range parameters
  const numericRangeParams = paramNames.filter(
    (name) =>
      name.endsWith("_min") ||
      name.endsWith("_max") ||
      name.endsWith("_from") ||
      name.endsWith("_to") ||
      name.includes("lat") ||
      name.includes("lng") ||
      name.includes("radius") ||
      name.includes("price_") ||
      name.includes("distance")
  );

  if (numericRangeParams.length > 0) {
    const paramPattern = numericRangeParams[0].replace(/_min|_max|_from|_to/, "_");
    return {
      level: "high",
      icon: "🔴",
      message:
        "⚠️ High crawl trap risk — range or combinational filters can create thousands of similar URLs. Block them in robots.txt to protect crawl budget.",
      explanation: "Numeric filters can produce infinite URL combinations.",
      robotsTxtSuggestion: `Disallow: /*?*${paramPattern}*`,
    };
  }

  // 2. Check for multi-select parameters (comma-separated values)
  const multiSelectParams = allParams.filter(([name, value]) => value.includes(","));

  if (multiSelectParams.length > 0) {
    const [paramName, paramValue] = multiSelectParams[0];
    const optionCount = paramValue.split(',').length;
    const combinationCount = Math.pow(2, optionCount);
    return {
      level: "high",
      icon: "🔴",
      message:
        "⚠️ High crawl trap risk — multi-select creates exponential URL combinations. Block via robots.txt to protect crawl budget.",
      explanation: `Multi-select creates 2^N combinations. With ${optionCount} options: 2^${optionCount} = ${combinationCount} possible URLs. Each new option doubles the total URLs.`,
      robotsTxtSuggestion: `Disallow: /*?*${paramName}=*,*`,
    };
  }

  // 3. Check for parameter stacking (3+ params)
  const nonPaginationParams = paramNames.filter((name) => name !== config.pagination.param);

  if (nonPaginationParams.length >= 3) {
    const paramCount = nonPaginationParams.length;
    return {
      level: "high",
      icon: "🔴",
      message:
        "⚠️ High crawl trap risk — multiple parameters create combinatorial explosion. Consider blocking or noindex strategies.",
      explanation: `${paramCount} parameters create N×M×P combinations. For example: 5 colors × 4 sizes × 3 sorts = 60 URLs. Each additional parameter multiplies the total.`,
      robotsTxtSuggestion: "Consider blocking unstable params: Disallow: /*?*sort=*",
    };
  }

  // 4. Check for blocked params (robots.txt-only strategy) - Always high risk
  if (hasBlocked) {
    const blockedParamNames = Array.from(evaluated.blockedParams.keys());
    const firstBlocked = blockedParamNames[0];

    return {
      level: "high",
      icon: "🔴",
      message:
        "⚠️ High crawl trap risk — tracking/UI/price parameters create noise. Blocked via robots.txt to prevent crawl waste.",
      explanation:
        "These parameters don't add content value and are blocked at the robots.txt level. Examples: utm_, view, price_min, price_max.",
      robotsTxtSuggestion: `Disallow: /*?*${firstBlocked}=*`,
    };
  }

  // 5. Check for 2+ stable parameters (combinatorial, but limited)
  const stableCount = evaluated.stableParams.size;
  
  if (stableCount >= 2) {
    return {
      level: "medium",
      icon: "🟡",
      message:
        "⚠️ Moderate crawl risk — multiple stable filters create N×M combinations. Consider using noindex,follow.",
      explanation: `${stableCount} stable filters multiply URL count. Example: 5 colors × 4 sizes = 20 URL variations. While limited, this can still bloat the index.`,
      robotsTxtSuggestion: undefined,
    };
  }

  // 6. Medium risk: single unstable
  if (hasUnstable) {
    const unstableParamNames = Array.from(evaluated.unstableParams.keys());
    const firstUnstable = unstableParamNames[0];

    return {
      level: "medium",
      icon: "🟡",
      message:
        "⚠️ Moderate crawl risk — sorting or UI parameters don't add content value. Use noindex,follow to prevent indexing.",
      explanation: "These parameters change layout but not content. Best practice: noindex,follow for discovery without indexing.",
      robotsTxtSuggestion: `Optional: Disallow: /*?*${firstUnstable}=*`,
    };
  }

  // 7. Low risk: single stable parameter only
  if (stableCount === 1 && !hasUnstable) {
    return {
      level: "low",
      icon: "🟢",
      message:
        "✅ Low crawl risk — single stable filter represents clear user intent. Safe to index.",
      explanation: "This filter represents real intent with limited options (e.g., 5-10 colors). Ideal for clean path conversion.",
    };
  }

  // 7. Search params only
  if (hasSearch) {
    return {
      level: "medium",
      icon: "🟡",
      message:
        "⚠️ Moderate crawl risk — search parameters don't add content value. Use noindex, follow.",
      explanation: "These parameters change results but not core content.",
    };
  }

  // Default: no significant risk
  return null;
}

function getBestPracticeConfirmation(
  result: CanonicalResult,
  crawlTrapRisk: CrawlTrapRisk | null
): { message: string; type: "success" | "info"; note?: string } | null {
  const { robots, blockInRobots, hasBlockedParams } = result;

  // robots.txt-only strategy (tracking params)
  if (hasBlockedParams && blockInRobots) {
    return {
      message:
        "✅ Blocked via robots.txt only — crawlers never access this page, so meta robots tags are not needed.",
      type: "info",
      note:
        "⚠️ If these URLs are already indexed: First add noindex,nofollow meta tags, wait 2-4 weeks for deindexing, then rely on robots.txt blocking only.",
    };
  }

  // Medium/unstable handled with noindex,follow
  if (robots === "noindex,follow" && !blockInRobots) {
    return {
      message:
        "✅ Managed with noindex, follow — prevents duplicate content while preserving discovery.",
      type: "success",
    };
  }

  // Low risk / indexable
  if (robots === "index,follow" && crawlTrapRisk?.level === "low") {
    return {
      message:
        "✅ Indexable and crawl-safe — this represents meaningful content variation.",
      type: "info",
    };
  }

  // Protected routes (noindex,nofollow)
  if (robots === "noindex,nofollow" && blockInRobots) {
    return {
      message: "✅ Protected route — correctly excluded from both indexing and crawling.",
      type: "info",
    };
  }

  return null;
}

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

  // Generate educational content
  const shortExplanation = getShortExplanation(result);
  const cleanPathRec = getCleanPathRecommendation(pathname, urlSearchParams, config);
  const crawlTrapRisk = getCrawlTrapRisk(pathname, urlSearchParams, config);
  const bestPracticeConfirmation = getBestPracticeConfirmation(result, crawlTrapRisk);
  
  // Check for price parameters
  const hasPriceMin = urlSearchParams.has('price_min');
  const hasPriceMax = urlSearchParams.has('price_max');
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
      {/* Desktop Version - Always Visible */}
      <div className="hidden lg:block fixed top-16 right-0 h-[calc(100vh-4rem)] w-96 border-l bg-white shadow-xl z-30">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 p-4 border-b bg-slate-50">
            <Info className="h-5 w-5 text-blue-600" />
            <h2 className="font-semibold text-lg">SEO Receipt</h2>
          </div>

          <div className="flex-1 overflow-y-auto">
            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="w-full rounded-none border-b">
                <TabsTrigger value="summary" className="flex-1">
                  Summary
                </TabsTrigger>
                <TabsTrigger value="trace" className="flex-1">
                  Rule Trace
                </TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="p-4 space-y-4 m-0">
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
                          className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
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
                            className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
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

                <div className="border-t pt-4">
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

                <div className="border-t pt-4">
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
                  <div className="border-t pt-4">
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
                  <div className="border-t pt-4">
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
                  <div className="border-t pt-4">
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
                  <div className="border-t pt-4">
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
              </TabsContent>

              <TabsContent value="trace" className="p-4 m-0">
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold text-sm text-slate-700">Decision Log</div>
                    <Button variant="outline" size="sm" onClick={copyTrace} className="h-7 text-xs">
                      {copiedField === "trace" ? (
                        <>
                          <Check className="h-3 w-3 mr-1 text-green-600" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3 mr-1" />
                          Copy All
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="bg-slate-900 text-green-400 p-3 rounded text-xs font-mono space-y-1 max-h-[calc(100vh-16rem)] overflow-y-auto">
                    {result.trace.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-30 max-h-[70vh] flex flex-col">
        <div className="flex items-center gap-2 p-3 border-b bg-slate-50">
          <Info className="h-5 w-5 text-blue-600" />
          <h2 className="font-semibold">SEO Receipt</h2>
        </div>

        <div className="flex-1 overflow-y-auto">
          <Tabs defaultValue="summary" className="w-full">
            <TabsList className="w-full rounded-none border-b">
              <TabsTrigger value="summary" className="flex-1">
                Summary
              </TabsTrigger>
              <TabsTrigger value="trace" className="flex-1">
                Rule Trace
              </TabsTrigger>
            </TabsList>

            <TabsContent value="summary" className="p-3 space-y-3 m-0">
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
                        className="absolute top-1 right-1 h-6 w-6 p-0"
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
                          className="absolute top-1 right-1 h-6 w-6 p-0"
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

              <div className="border-t pt-3">
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

              <div className="border-t pt-3">
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
                <div className="border-t pt-3">
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
                <div className="border-t pt-3">
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
                          descriptive path segments to improve crawl clarity and keyword targeting.
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
                <div className="border-t pt-3">
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
                <div className="border-t pt-3">
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
            </TabsContent>

            <TabsContent value="trace" className="p-3 m-0">
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-sm text-slate-700">Decision Log</div>
                  <Button variant="outline" size="sm" onClick={copyTrace} className="h-7 text-xs">
                    {copiedField === "trace" ? (
                      <>
                        <Check className="h-3 w-3 mr-1 text-green-600" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 mr-1" />
                        Copy All
                      </>
                    )}
                  </Button>
                </div>
                <div className="bg-slate-900 text-green-400 p-3 rounded text-xs font-mono space-y-1 max-h-[50vh] overflow-y-auto">
                  {result.trace.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Mobile Version - Collapsible */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-30">
        {/* Collapse/Expand Button */}
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

        {/* Collapsible Content */}
        {!mobileCollapsed && (
          <div className="max-h-[60vh] overflow-y-auto border-t">
            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="w-full rounded-none border-b">
                <TabsTrigger value="summary" className="flex-1">
                  Summary
                </TabsTrigger>
                <TabsTrigger value="trace" className="flex-1">
                  Rule Trace
                </TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="p-4 space-y-4 m-0">
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
                          className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {copiedField === "input" ? (
                            <Check className="h-3 w-3 text-green-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {inputUrl !== result.canonical && (
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Canonical URL</div>
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
                            className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            {copiedField === "canonical" ? (
                              <Check className="h-3 w-3 text-green-600" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="font-semibold mb-2 text-sm text-slate-700">Indexability</div>
                  <div className="space-y-2">
                    <div
                      className={`flex items-center justify-between p-2.5 rounded border ${
                        isIndexable
                          ? "bg-green-50 border-green-200"
                          : "bg-amber-50 border-amber-200"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isIndexable ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <XCircle className="h-4 w-4 text-amber-600" />
                        )}
                        <span className="text-xs font-medium">
                          {isIndexable ? "index,follow" : result.robots}
                        </span>
                      </div>
                      <Badge
                        className={
                          isIndexable
                            ? "bg-green-100 text-green-800 border-green-300"
                            : "bg-amber-100 text-amber-800 border-amber-300"
                        }
                      >
                        {isIndexable ? "Indexable" : "Not Indexable"}
                      </Badge>
                    </div>

                    {shortExplanation && (
                      <div className="text-xs leading-relaxed text-slate-700 bg-blue-50 border border-blue-200 p-2.5 rounded">
                        {shortExplanation}
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="font-semibold mb-2 text-sm text-slate-700">Sitemap Inclusion</div>
                  <div
                    className={`flex items-center justify-between p-2.5 rounded border ${
                      inSitemap
                        ? "bg-green-50 border-green-200"
                        : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {inSitemap ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      ) : (
                        <XCircle className="h-4 w-4 text-slate-400" />
                      )}
                      <span className="text-xs font-medium">
                      {inSitemap ? "Included in Sitemap" : "Not in Sitemap"}
                    </span>
                  </div>
                </div>
                </div>

                {bestPracticeConfirmation && (
                  <div className="border-t pt-3">
                    <div
                      className={`p-3 rounded border ${
                        bestPracticeConfirmation.type === "success"
                          ? "bg-green-50 border-green-200"
                          : "bg-blue-50 border-blue-200"
                      }`}
                    >
                      <p
                        className={`text-xs font-medium ${
                          bestPracticeConfirmation.type === "success"
                            ? "text-green-700"
                            : "text-blue-700"
                        }`}
                      >
                        {bestPracticeConfirmation.message}
                      </p>
                      {bestPracticeConfirmation.note && (
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {bestPracticeConfirmation.note}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {cleanPathRec && (
                  <div className="border-t pt-3">
                    <div className="font-semibold mb-2 text-sm text-slate-700">
                      Clean Path Recommendation
                    </div>
                    <div className="p-3 rounded border bg-blue-50 border-blue-200">
                      <p className="text-xs font-medium text-slate-700 mb-1">
                        {cleanPathRec.message}
                      </p>
                      {cleanPathRec.example && (
                        <code className="text-xs bg-slate-800 text-green-400 p-1.5 rounded block font-mono mt-1">
                          {cleanPathRec.example}
                        </code>
                      )}
                    </div>
                  </div>
                )}

                {crawlTrapRisk && (
                  <div className="border-t pt-3">
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
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="trace" className="p-3 m-0">
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold text-sm text-slate-700">Decision Log</div>
                    <Button variant="outline" size="sm" onClick={copyTrace} className="h-7 text-xs">
                      {copiedField === "trace" ? (
                        <>
                          <Check className="h-3 w-3 mr-1 text-green-600" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3 mr-1" />
                          Copy All
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="bg-slate-900 text-green-400 p-3 rounded text-xs font-mono space-y-1 max-h-[40vh] overflow-y-auto">
                    {result.trace.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </>
  );
}
