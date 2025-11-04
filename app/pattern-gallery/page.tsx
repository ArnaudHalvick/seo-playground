"use client";

import { useState, useMemo } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Info, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PatternFilter } from "@/components/playground/PatternFilter";
import { PatternCategory } from "@/components/playground/PatternCategory";
import type { SeoPattern } from "@/components/playground/PatternCard";
import patternsData from "@/data/seo-patterns.json";
import Link from "next/link";

// Category metadata
const categoryMetadata = {
  filtering: {
    title: "Filtering Patterns",
    description: "Multi-select, single filters, and stable parameter combinations",
    icon: "🎨",
  },
  sorting: {
    title: "Sorting & Layout",
    description: "Sort parameters and view preferences that affect content order",
    icon: "🔄",
  },
  ranges: {
    title: "Range Filters",
    description: "Numeric and date ranges that create infinite URL combinations",
    icon: "📊",
  },
  "url-strategies": {
    title: "URL Strategies",
    description: "Different approaches to structuring URLs for SEO",
    icon: "🛣️",
  },
  navigation: {
    title: "Navigation Patterns",
    description: "Pagination, breadcrumbs, and faceted navigation implementations",
    icon: "🧭",
  },
  "access-control": {
    title: "Access Control",
    description: "Protected routes, search pages, and API endpoint handling",
    icon: "🔒",
  },
};

export default function PlaygroundPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const patterns = patternsData.patterns as SeoPattern[];

  // Filter patterns based on search and filters
  const filteredPatterns = useMemo(() => {
    return patterns.filter((pattern) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          pattern.name.toLowerCase().includes(query) ||
          pattern.description.toLowerCase().includes(query) ||
          pattern.explanation.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Risk filter
      if (selectedRisk && pattern.risk !== selectedRisk) {
        return false;
      }

      // Category filter
      if (selectedCategory && pattern.category !== selectedCategory) {
        return false;
      }

      return true;
    });
  }, [patterns, searchQuery, selectedRisk, selectedCategory]);

  // Group patterns by category
  const patternsByCategory = useMemo(() => {
    const grouped: Record<string, SeoPattern[]> = {};
    filteredPatterns.forEach((pattern) => {
      if (!grouped[pattern.category]) {
        grouped[pattern.category] = [];
      }
      grouped[pattern.category].push(pattern);
    });
    return grouped;
  }, [filteredPatterns]);

  // Calculate active filter count
  const activeFilterCount =
    (searchQuery ? 1 : 0) + (selectedRisk ? 1 : 0) + (selectedCategory ? 1 : 0);

  const handleClearAll = () => {
    setSearchQuery("");
    setSelectedRisk(null);
    setSelectedCategory(null);
  };

  const categoryOrder = [
    "filtering",
    "sorting",
    "ranges",
    "url-strategies",
    "navigation",
    "access-control",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumbs items={[{ label: "SEO Pattern Gallery", href: "/pattern-gallery" }]} />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <h1 className="text-5xl font-bold">SEO Pattern Gallery</h1>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
            Production-ready patterns for URL management, filtering, and crawl control
          </p>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Every SEO pattern demonstrated in this app, organized by category with live examples.
            Filter by risk level or category to find the pattern you need.
          </p>
        </div>

        {/* Info Alert */}
        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <Info className="h-5 w-5 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>How to use:</strong> Browse patterns by category or use the filters below. Each
            pattern shows real-world examples, when to use it, and SEO impact. Click "Try it Live"
            to see the pattern in action on the shop pages.
          </AlertDescription>
        </Alert>

        {/* Filter Bar */}
        <div className="mb-8">
          <PatternFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedRisk={selectedRisk}
            onRiskChange={setSelectedRisk}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            activeFilterCount={activeFilterCount}
            onClearAll={handleClearAll}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-slate-600">
          {filteredPatterns.length === patterns.length ? (
            <span>
              Showing all <strong>{patterns.length}</strong> patterns
            </span>
          ) : (
            <span>
              Showing <strong>{filteredPatterns.length}</strong> of{" "}
              <strong>{patterns.length}</strong> patterns
            </span>
          )}
        </div>

        {/* Pattern Categories */}
        {filteredPatterns.length > 0 ? (
          <div className="space-y-8">
            {categoryOrder.map((categoryKey) => {
              const categoryPatterns = patternsByCategory[categoryKey];
              if (!categoryPatterns || categoryPatterns.length === 0) return null;

              const metadata = categoryMetadata[categoryKey as keyof typeof categoryMetadata];
              if (!metadata) return null;

              return (
                <PatternCategory
                  key={categoryKey}
                  title={metadata.title}
                  description={metadata.description}
                  icon={metadata.icon}
                  patterns={categoryPatterns}
                  defaultExpanded={true}
                />
              );
            })}
          </div>
        ) : (
          // No results
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No patterns found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your filters or search query</p>
            <Button variant="outline" onClick={handleClearAll}>
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        {filteredPatterns.length > 0 && (
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">See These Patterns in Action</h3>
            <p className="text-sm text-slate-700 mb-4">
              Visit the shop pages to see how these SEO patterns are implemented. The SEO Receipt
              panel shows real-time details about each pattern's impact.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/shop/t-shirts">
                <Button variant="outline" size="sm">
                  T-Shirts Category
                </Button>
              </Link>
              <Link href="/shop/shoes">
                <Button variant="outline" size="sm">
                  Shoes Category
                </Button>
              </Link>
              <Link href="/shop/t-shirts/for/women">
                <Button variant="outline" size="sm">
                  Gender Filter Example
                </Button>
              </Link>
              <Link href="/shop/t-shirts?color=black">
                <Button variant="outline" size="sm">
                  Single Filter Example
                </Button>
              </Link>
              <Link href="/shop/t-shirts?color=black&size=M">
                <Button variant="outline" size="sm">
                  Multi-Filter Example
                </Button>
              </Link>
              <Link href="/shop/t-shirts?sort=price_desc">
                <Button variant="outline" size="sm">
                  Sort Example
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
