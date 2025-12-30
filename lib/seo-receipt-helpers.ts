import { type CanonicalResult } from "@/lib/rules/canonical";
import { evaluateParams } from "@/lib/rules/params";
import type { ParamConfig } from "@/lib/rules/params";

export interface CleanPathRecommendation {
  message: string;
  example?: string;
  relatedSuggestions?: string[];
  educationalNote?: string;
  showExamples: boolean;
}

export interface CrawlTrapRisk {
  level: "high" | "medium" | "low" | "none";
  icon: string;
  message: string;
  explanation: string;
  robotsTxtSuggestion?: string;
}

export function getShortExplanation(result: CanonicalResult): string {
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

export function getCleanPathRecommendation(
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
    // If we're already on a clean path (gender/color/size), don't show message
    const isCleanPath = pathname.match(/\/(for|color|size)\/[^/]+\/?$/);
    if (isCleanPath) {
      return null; // Don't show anything
    }
    
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
        "📄 Pagination parameter — should stay as ?page= with index, follow and self-canonical (matching the live URL format). Not suitable for a clean path.",
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
          message: `✅ Single stable parameter — currently treated as a variant (noindex) and canonicalized to the base. Create clean path routes like ${examplePath} if you want an indexable version.`,
          example: examplePath,
          relatedSuggestions: colorSuggestions,
          educationalNote:
            "Query-string variants stay noindex to avoid crawl bloat. If you need them indexed, promote them to dedicated clean paths that mirror real demand and have enough inventory/content.",
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

export function getCrawlTrapRisk(
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

export function getBestPracticeConfirmation(
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
