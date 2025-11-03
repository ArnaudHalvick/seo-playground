"use client";

import React from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { FilterOptions } from "@/lib/catalog/data";

interface ActiveFiltersProps {
  filters: FilterOptions;
  priceRange: { min: number; max: number };
}

export function ActiveFilters({ filters, priceRange }: ActiveFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hasActiveFilters =
    (filters.colors && filters.colors.length > 0) ||
    filters.size ||
    (filters.priceMin !== undefined && filters.priceMin > priceRange.min) ||
    (filters.priceMax !== undefined && filters.priceMax < priceRange.max);

  if (!hasActiveFilters) {
    return null;
  }

  const removeFilter = (type: "color" | "size" | "price", value?: string) => {
    const params = new URLSearchParams(searchParams.toString());

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
    }

    // Reset to page 1
    params.delete("page");

    const queryString = params.toString();
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
  };

  const clearAll = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("color");
    params.delete("size");
    params.delete("price_min");
    params.delete("price_max");
    params.delete("page");

    const queryString = params.toString();
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
  };

  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-700">Active Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearAll} className="h-auto p-1 text-xs">
          Clear All
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {/* Color filters */}
        {filters.colors &&
          filters.colors.map((color) => (
            <Badge key={color} variant="secondary" className="pl-3 pr-1 py-1 capitalize">
              {color}
              <button
                onClick={() => removeFilter("color", color)}
                className="ml-2 p-0.5 hover:bg-gray-300 rounded-full transition-colors"
                aria-label={`Remove ${color} filter`}
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          ))}

        {/* Size filter */}
        {filters.size && (
          <Badge variant="secondary" className="pl-3 pr-1 py-1">
            Size: {filters.size}
            <button
              onClick={() => removeFilter("size")}
              className="ml-2 p-0.5 hover:bg-gray-300 rounded-full transition-colors"
              aria-label="Remove size filter"
            >
              <X className="w-3 h-3" />
            </button>
          </Badge>
        )}

        {/* Price range filter */}
        {((filters.priceMin !== undefined && filters.priceMin > priceRange.min) ||
          (filters.priceMax !== undefined && filters.priceMax < priceRange.max)) && (
          <Badge variant="secondary" className="pl-3 pr-1 py-1">
            Price: ${filters.priceMin ?? priceRange.min} - ${filters.priceMax ?? priceRange.max}
            <button
              onClick={() => removeFilter("price")}
              className="ml-2 p-0.5 hover:bg-gray-300 rounded-full transition-colors"
              aria-label="Remove price filter"
            >
              <X className="w-3 h-3" />
            </button>
          </Badge>
        )}
      </div>
    </div>
  );
}

