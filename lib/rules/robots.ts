import type { ParamConfig } from "./params";

export interface RobotsRule {
  userAgent: string;
  disallow: string[];
  allow: string[];
}

export interface RobotsMatchResult {
  isBlocked: boolean;
  matchedRules: string[];
  warnings: string[];
}

export function generateRobotsTxt(
  config: ParamConfig,
  baseUrl: string = "https://example.com"
): string {
  const lines: string[] = [];
  lines.push("User-agent: *");
  lines.push("");

  // Clean Path Architecture Documentation
  lines.push("# Clean Path Architecture");
  lines.push("# This site uses path-based routes for better SEO:");
  lines.push("# - Gender filters: /shop/t-shirts/for/women/");
  lines.push("# - Color filters: /shop/t-shirts/color/black/");
  lines.push("# - Product pages: /shop/t-shirts/for/men/product-slug/");
  lines.push("# These are indexable and provide clear hierarchical structure");
  lines.push("");

  // Protected paths (always enabled - best practice)
  lines.push("# Protected & System Paths");
  lines.push("# Block account pages and internal APIs");
  lines.push("Allow: /api/robots");
  lines.push("Allow: /api/sitemap");
  lines.push("Disallow: /account/");
  lines.push("Disallow: /api/");
  lines.push("");

  // Blocked parameters from config (tracking, UI prefs, price ranges)
  const blockedParams = config.rules.filter((r) => r.policy === "blocked");
  if (blockedParams.length > 0) {
    lines.push("# Tracking & UI Parameters");
    lines.push("# Block to prevent crawl waste");
    blockedParams.forEach((param) => {
      lines.push(`Disallow: /*?*${param.name}=*`);
    });
    lines.push("");
  }

  // Multi-select parameters (exponential crawl trap)
  lines.push("# Multi-Select Parameters (Exponential Crawl Trap)");
  lines.push("# Block comma-separated values to prevent 2^N combinations");
  lines.push("Disallow: /*?*color=*,*");
  lines.push("Disallow: /*?*size=*,*");
  lines.push("");

  // Additional pattern blocking (best practice)
  lines.push("# Calendar Date Patterns");
  lines.push("# Prevent infinite date combinations");
  lines.push("Disallow: /calendar/*?date=*");
  lines.push("");

  lines.push(`Sitemap: ${baseUrl}/api/sitemap`);

  return lines.join("\n");
}

function matchesPattern(url: string, pattern: string): boolean {
  const regexPattern = pattern.replace(/\*/g, ".*").replace(/\?/g, "\\?").replace(/\./g, "\\.");

  const regex = new RegExp(`^${regexPattern}$`);
  return regex.test(url);
}

export function checkRobotsBlocking(
  pathname: string,
  searchParams: URLSearchParams,
  config: ParamConfig
): RobotsMatchResult {
  const matchedRules: string[] = [];
  const warnings: string[] = [];
  let isBlocked = false;

  // Check protected paths (static, always enabled - best practice)
  if (pathname.startsWith("/account/")) {
    matchedRules.push("Protected Paths: Disallow /account/");
    isBlocked = true;
  }
  if (pathname.startsWith("/api/") && pathname !== "/api/robots" && pathname !== "/api/sitemap") {
    matchedRules.push("Protected Paths: Disallow /api/");
    isBlocked = true;
  }

  // Check for blocked parameters (based on policy="blocked")
  const blockedParams = config.rules.filter((r) => r.policy === "blocked").map((r) => r.name);

  for (const param of blockedParams) {
    if (searchParams.has(param)) {
      matchedRules.push(`Blocked Parameter: Disallow /*?*${param}=*`);
      isBlocked = true;
    }
  }

  // Check for multi-select patterns (exponential crawl trap)
  for (const [param, value] of searchParams.entries()) {
    if (value.includes(",")) {
      matchedRules.push(
        `Multi-Select Pattern: Disallow /*?*${param}=*,* (prevents 2^N combinations)`
      );
      isBlocked = true;
    }
  }

  // Check calendar patterns (static best practice)
  if (pathname.startsWith("/calendar/") && searchParams.has("date")) {
    matchedRules.push("Calendar Pattern: Disallow /calendar/*?date=*");
    isBlocked = true;
  }

  return { isBlocked, matchedRules, warnings };
}

export function isBlockedByRobots(
  pathname: string,
  searchParams: URLSearchParams,
  config: ParamConfig
): boolean {
  const result = checkRobotsBlocking(pathname, searchParams, config);
  return result.isBlocked;
}
