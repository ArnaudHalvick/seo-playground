"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { FilterOptions } from "@/lib/catalog/data";

interface FilterSummaryBarProps {
  category: string;
  filters: FilterOptions;
  sort?: string;
  page?: number;
  priceRange: { min: number; max: number };
}

export function FilterSummaryBar({
  category,
  filters,
  sort,
  page,
  priceRange,
}: FilterSummaryBarProps) {
  const router = useRouter();
  const pathname = `/shop/${category}`;
  const searchParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );

  const handleClearAll = () => {
    router.push(pathname, { scroll: false });
  };

  const removeFilter = (type: "color" | "size" | "price" | "sort", value?: string) => {
    const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");

    switch (type) {
      case "color":
        if (value && filters.colors) {
          const newColors = filters.colors.filter((c) => c !== value);
          if (newColors.length > 0) {
            params.set("color", newColors.join(","));
          } else {
            params.delete("color");
          }
        }
        break;

      case "size":
        params.delete("size");
        break;

      case "price":
        params.delete("price_min");
        params.delete("price_max");
        break;

      case "sort":
        params.delete("sort");
        break;
    }

    // Reset to page 1
    params.delete("page");

    const queryString = params.toString();
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`, { scroll: false });
  };
  // Check if any filters are active
  const hasColorFilters = filters.colors && filters.colors.length > 0;
  const hasSizeFilter = !!filters.size;
  const hasPriceFilter = filters.priceMin !== undefined || filters.priceMax !== undefined;
  const hasSort = sort && sort !== "popularity";
  const hasPagination = page && page > 1;

  const hasAnyFilters =
    hasColorFilters || hasSizeFilter || hasPriceFilter || hasSort || hasPagination;

  const getSortLabel = (sortValue: string) => {
    const sortLabels: Record<string, string> = {
      price_asc: "Price: Low to High",
      price_desc: "Price: High to Low",
      name_asc: "Name: A-Z",
      name_desc: "Name: Z-A",
      popularity: "Most Popular",
    };
    return sortLabels[sortValue] || sortValue;
  };

  return (
    <div className="sticky top-0 z-10 bg-white border-b shadow-sm mb-5">
      <div className="container mx-auto px-4 py-3 max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap flex-1 min-w-0">
            <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
              Active Filters:
            </span>

            {!hasAnyFilters && <span className="text-sm text-slate-500 italic">None</span>}

            {/* Color filters */}
            {hasColorFilters &&
              filters.colors!.map((color) => (
                <Badge
                  key={color}
                  variant="secondary"
                  className="capitalize pl-3 pr-1 py-1 flex items-center gap-1"
                >
                  {color}
                  <button
                    onClick={() => removeFilter("color", color)}
                    className="ml-1 p-0.5 hover:bg-gray-300 rounded-full transition-colors"
                    aria-label={`Remove ${color} filter`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}

            {/* Size filter */}
            {hasSizeFilter && (
              <Badge variant="secondary" className="pl-3 pr-1 py-1 flex items-center gap-1">
                Size: {filters.size}
                <button
                  onClick={() => removeFilter("size")}
                  className="ml-1 p-0.5 hover:bg-gray-300 rounded-full transition-colors"
                  aria-label="Remove size filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}

            {/* Price range filter */}
            {hasPriceFilter && (
              <Badge variant="secondary" className="pl-3 pr-1 py-1 flex items-center gap-1">
                ${filters.priceMin ?? 0} - ${filters.priceMax ?? "∞"}
                <button
                  onClick={() => removeFilter("price")}
                  className="ml-1 p-0.5 hover:bg-gray-300 rounded-full transition-colors"
                  aria-label="Remove price filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}

            {/* Sort */}
            {hasSort && (
              <Badge variant="secondary" className="pl-3 pr-1 py-1 flex items-center gap-1">
                {getSortLabel(sort!)}
                <button
                  onClick={() => removeFilter("sort")}
                  className="ml-1 p-0.5 hover:bg-gray-300 rounded-full transition-colors"
                  aria-label="Remove sort filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}

            {/* Pagination */}
            {hasPagination && <Badge variant="outline">Page {page}</Badge>}
          </div>

          {/* Clear All Button */}
          <Button
            onClick={handleClearAll}
            variant="outline"
            size="sm"
            className="whitespace-nowrap"
            disabled={!hasAnyFilters}
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
}
