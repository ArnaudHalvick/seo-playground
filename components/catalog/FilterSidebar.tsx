"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { X, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { FilterCounts, FilterOptions } from "@/lib/catalog/data";

interface FilterSidebarProps {
  category: string;
  filterCounts: FilterCounts;
  currentFilters: FilterOptions;
  availableColors: string[];
  availableSizes: string[];
}

export function FilterSidebar({
  category,
  filterCounts,
  currentFilters,
  availableColors,
  availableSizes,
}: FilterSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Local state for filters
  const [selectedColors, setSelectedColors] = useState<string[]>(currentFilters.colors || []);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(currentFilters.size);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    currentFilters.priceMin ?? filterCounts.priceRange.min,
    currentFilters.priceMax ?? filterCounts.priceRange.max,
  ]);
  const [sortBy, setSortBy] = useState<string>(searchParams.get("sort") || "popularity");

  // Debounce timer for price slider
  const [priceDebounceTimer, setPriceDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  // Update URL with current filters
  const updateUrl = useCallback(
    (filters: {
      colors?: string[];
      size?: string;
      priceMin?: number;
      priceMax?: number;
      sort?: string;
      page?: string;
    }) => {
      const params = new URLSearchParams(searchParams.toString());

      // Handle colors (multi-select)
      if (filters.colors && filters.colors.length > 0) {
        params.set("color", filters.colors.join(","));
      } else {
        params.delete("color");
      }

      // Handle size
      if (filters.size) {
        params.set("size", filters.size);
      } else {
        params.delete("size");
      }

      // Handle price range
      const defaultMin = filterCounts.priceRange.min;
      const defaultMax = filterCounts.priceRange.max;

      if (filters.priceMin !== undefined && filters.priceMin > defaultMin) {
        params.set("price_min", filters.priceMin.toString());
      } else {
        params.delete("price_min");
      }

      if (filters.priceMax !== undefined && filters.priceMax < defaultMax) {
        params.set("price_max", filters.priceMax.toString());
      } else {
        params.delete("price_max");
      }

      // Handle sort
      if (filters.sort && filters.sort !== "popularity") {
        params.set("sort", filters.sort);
      } else {
        params.delete("sort");
      }

      // Reset to page 1 when filters change
      if (filters.page !== undefined) {
        if (filters.page !== "1") {
          params.set("page", filters.page);
        } else {
          params.delete("page");
        }
      } else {
        params.delete("page");
      }

      const queryString = params.toString();
      router.push(`${pathname}${queryString ? `?${queryString}` : ""}`);
    },
    [searchParams, pathname, router, filterCounts.priceRange]
  );

  // Handle color toggle
  const toggleColor = (color: string) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];

    setSelectedColors(newColors);
    updateUrl({ colors: newColors, size: selectedSize, priceMin: priceRange[0], priceMax: priceRange[1], sort: sortBy });
  };

  // Handle size change
  const handleSizeChange = (size: string) => {
    const newSize = size === selectedSize ? undefined : size;
    setSelectedSize(newSize);
    updateUrl({ colors: selectedColors, size: newSize, priceMin: priceRange[0], priceMax: priceRange[1], sort: sortBy });
  };

  // Handle price range change (debounced)
  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);

    // Clear existing timer
    if (priceDebounceTimer) {
      clearTimeout(priceDebounceTimer);
    }

    // Set new timer to update URL after 500ms
    const timer = setTimeout(() => {
      updateUrl({ colors: selectedColors, size: selectedSize, priceMin: value[0], priceMax: value[1], sort: sortBy });
    }, 500);

    setPriceDebounceTimer(timer);
  };

  // Handle sort change
  const handleSortChange = (value: string) => {
    setSortBy(value);
    updateUrl({ colors: selectedColors, size: selectedSize, priceMin: priceRange[0], priceMax: priceRange[1], sort: value });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedColors([]);
    setSelectedSize(undefined);
    setPriceRange([filterCounts.priceRange.min, filterCounts.priceRange.max]);
    setSortBy("popularity");
    router.push(pathname);
  };

  // Count active filters
  const activeFilterCount =
    selectedColors.length +
    (selectedSize ? 1 : 0) +
    (priceRange[0] > filterCounts.priceRange.min || priceRange[1] < filterCounts.priceRange.max ? 1 : 0) +
    (sortBy !== "popularity" ? 1 : 0);

  // Filter content component
  const FilterContent = () => (
    <div className="space-y-6">
      {/* Color Filter */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span className="text-lg">🎨</span> Color
        </h3>
        <div className="space-y-2">
          {availableColors.map((color) => {
            const count = filterCounts.colors[color] || 0;
            const isDisabled = count === 0;

            return (
              <div key={color} className="flex items-center space-x-2">
                <Checkbox
                  id={`color-${color}`}
                  checked={selectedColors.includes(color)}
                  onCheckedChange={() => toggleColor(color)}
                  disabled={isDisabled}
                />
                <Label
                  htmlFor={`color-${color}`}
                  className={`flex-1 capitalize cursor-pointer ${isDisabled ? "text-gray-400" : ""}`}
                >
                  {color} ({count})
                </Label>
              </div>
            );
          })}
        </div>
      </div>

      <Separator />

      {/* Size Filter */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span className="text-lg">📏</span> Size
        </h3>
        <RadioGroup value={selectedSize || ""} onValueChange={handleSizeChange}>
          <div className="grid grid-cols-2 gap-2">
            {availableSizes.map((size) => {
              const count = filterCounts.sizes[size] || 0;
              const isDisabled = count === 0;

              return (
                <div
                  key={size}
                  className={`flex items-center space-x-2 p-2 rounded border ${
                    selectedSize === size
                      ? "bg-primary text-primary-foreground border-primary"
                      : isDisabled
                      ? "bg-gray-50 text-gray-400 border-gray-200"
                      : "border-gray-200 hover:bg-gray-50 cursor-pointer"
                  }`}
                  onClick={() => !isDisabled && handleSizeChange(size)}
                >
                  <RadioGroupItem value={size} id={`size-${size}`} disabled={isDisabled} />
                  <Label htmlFor={`size-${size}`} className="flex-1 cursor-pointer">
                    {size} ({count})
                  </Label>
                </div>
              );
            })}
          </div>
        </RadioGroup>
      </div>

      <Separator />

      {/* Price Range Filter */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span className="text-lg">💰</span> Price Range
        </h3>
        <div className="space-y-4">
          <Slider
            min={filterCounts.priceRange.min}
            max={filterCounts.priceRange.max}
            step={1}
            value={priceRange}
            onValueChange={handlePriceChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0].toFixed(2)}</span>
            <span>${priceRange[1].toFixed(2)}</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Sort Filter */}
      <div>
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span className="text-lg">🔄</span> Sort By
        </h3>
        <Select value={sortBy} onValueChange={handleSortChange}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popularity">Most Popular</SelectItem>
            <SelectItem value="price_asc">Price: Low to High</SelectItem>
            <SelectItem value="price_desc">Price: High to Low</SelectItem>
            <SelectItem value="name_asc">Name: A-Z</SelectItem>
            <SelectItem value="name_desc">Name: Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters Button */}
      {activeFilterCount > 0 && (
        <>
          <Separator />
          <Button variant="outline" onClick={clearAllFilters} className="w-full">
            <X className="w-4 h-4 mr-2" />
            Clear All Filters
          </Button>
        </>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="w-4 h-4 mr-2" />
              Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6 overflow-y-auto max-h-[calc(100vh-8rem)]">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filter Sidebar */}
      <aside className="hidden lg:block">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5" />
              Filters
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="ml-auto">
                  {activeFilterCount}
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FilterContent />
          </CardContent>
        </Card>
      </aside>
    </>
  );
}

