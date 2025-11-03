"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { X, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { FilterCounts, FilterOptions, SizeGroup } from "@/lib/catalog/data";
import { PriceRangeFilter } from "./PriceRangeFilter";

interface FilterSidebarProps {
  category: string;
  filterCounts: FilterCounts;
  currentFilters: FilterOptions;
  availableColors: string[];
  availableSizes: string[];
  sizeGroups: SizeGroup[] | null;
}

export function FilterSidebar({
  category,
  filterCounts,
  currentFilters,
  availableColors,
  availableSizes,
  sizeGroups,
}: FilterSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Local state for filters
  const [selectedColors, setSelectedColors] = useState<string[]>(currentFilters.colors || []);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(currentFilters.size);
  const [sortBy, setSortBy] = useState<string>(searchParams.get("sort") || "popularity");

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

      // Handle price range - allow ANY user-specified price
      // Only skip if undefined
      if (filters.priceMin !== undefined && filters.priceMin >= 0) {
        params.set("price_min", filters.priceMin.toString());
      } else {
        params.delete("price_min");
      }

      if (filters.priceMax !== undefined) {
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
    [searchParams, pathname, router]
  );

  // Handle color toggle
  const toggleColor = (color: string) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];

    setSelectedColors(newColors);
    updateUrl({
      colors: newColors,
      size: selectedSize,
      priceMin: currentFilters.priceMin,
      priceMax: currentFilters.priceMax,
      sort: sortBy,
    });
  };

  // Handle size change
  const handleSizeChange = (size: string) => {
    const newSize = size === selectedSize ? undefined : size;
    setSelectedSize(newSize);
    updateUrl({
      colors: selectedColors,
      size: newSize,
      priceMin: currentFilters.priceMin,
      priceMax: currentFilters.priceMax,
      sort: sortBy,
    });
  };

  // Handle price filter application from PriceRangeFilter component
  const handlePriceApply = (minPrice?: number, maxPrice?: number) => {
    updateUrl({
      colors: selectedColors,
      size: selectedSize,
      priceMin: minPrice,
      priceMax: maxPrice,
      sort: sortBy,
    });
  };

  // Handle sort change
  const handleSortChange = (value: string) => {
    setSortBy(value);
    updateUrl({
      colors: selectedColors,
      size: selectedSize,
      priceMin: currentFilters.priceMin,
      priceMax: currentFilters.priceMax,
      sort: value,
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedColors([]);
    setSelectedSize(undefined);
    setSortBy("popularity");
    router.push(pathname);
  };

  // Sync local state with URL changes (when filters are cleared externally)
  useEffect(() => {
    setSelectedColors(currentFilters.colors || []);
    setSelectedSize(currentFilters.size);
    setSortBy(searchParams.get("sort") || "popularity");
  }, [currentFilters, searchParams]);

  // Count active filters
  const hasPriceFilter =
    currentFilters.priceMin !== undefined || currentFilters.priceMax !== undefined;
  const activeFilterCount =
    selectedColors.length +
    (selectedSize ? 1 : 0) +
    (hasPriceFilter ? 1 : 0) +
    (sortBy !== "popularity" ? 1 : 0);

  // Filter content component
  const FilterContent = () => (
    <div className="space-y-6">
      {/* Color Filter */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold flex items-center gap-2">
            <span className="text-lg">🎨</span> Color
          </h3>
          {selectedColors.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedColors([]);
                updateUrl({
                  colors: [],
                  size: selectedSize,
                  priceMin: currentFilters.priceMin,
                  priceMax: currentFilters.priceMax,
                  sort: sortBy,
                });
              }}
              className="h-7 text-xs"
            >
              <X className="w-3 h-3 mr-1" />
              Clear
            </Button>
          )}
        </div>
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
                  className={`flex-1 capitalize cursor-pointer ${
                    isDisabled ? "text-gray-400" : ""
                  }`}
                >
                  {color}
                </Label>
                <Badge 
                  variant="secondary" 
                  className={`ml-auto text-xs ${isDisabled ? "opacity-50" : ""}`}
                >
                  {count}
                </Badge>
              </div>
            );
          })}
        </div>
      </div>

      <Separator />

      {/* Size Filter */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold flex items-center gap-2">
            <span className="text-lg">📏</span> Size
          </h3>
          {selectedSize && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedSize(undefined);
                updateUrl({
                  colors: selectedColors,
                  size: undefined,
                  priceMin: currentFilters.priceMin,
                  priceMax: currentFilters.priceMax,
                  sort: sortBy,
                });
              }}
              className="h-7 text-xs"
            >
              <X className="w-3 h-3 mr-1" />
              Clear
            </Button>
          )}
        </div>
        <RadioGroup value={selectedSize || ""} onValueChange={handleSizeChange}>
          {sizeGroups ? (
            // Grouped display
            sizeGroups.map((group, groupIndex) => (
              <div key={group.label}>
                {groupIndex > 0 && <Separator className="my-3" />}
                <div className="mb-2 text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  {group.label}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {group.sizes.filter(size => availableSizes.includes(size)).map((size) => {
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
                          {size}
                        </Label>
                        <Badge 
                          variant={selectedSize === size ? "outline" : "secondary"}
                          className={`ml-auto text-xs ${isDisabled ? "opacity-50" : ""} ${
                            selectedSize === size ? "bg-primary-foreground/20" : ""
                          }`}
                        >
                          {count}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            // No grouping - original display
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
                      {size}
                    </Label>
                    <Badge 
                      variant={selectedSize === size ? "outline" : "secondary"}
                      className={`ml-auto text-xs ${isDisabled ? "opacity-50" : ""} ${
                        selectedSize === size ? "bg-primary-foreground/20" : ""
                      }`}
                    >
                      {count}
                    </Badge>
                  </div>
                );
              })}
            </div>
          )}
        </RadioGroup>
      </div>

      <Separator />

      {/* Price Range Filter */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold flex items-center gap-2">
            <span className="text-lg">💰</span> Price Range
          </h3>
          {hasPriceFilter && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                updateUrl({
                  colors: selectedColors,
                  size: selectedSize,
                  priceMin: undefined,
                  priceMax: undefined,
                  sort: sortBy,
                });
              }}
              className="h-7 text-xs"
            >
              <X className="w-3 h-3 mr-1" />
              Clear
            </Button>
          )}
        </div>
        <PriceRangeFilter
          initialMin={currentFilters.priceMin}
          initialMax={currentFilters.priceMax}
          priceRange={filterCounts.priceRange}
          onApply={handlePriceApply}
        />
      </div>

      <Separator />

      {/* Sort Filter */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold flex items-center gap-2">
            <span className="text-lg">🔄</span> Sort By
          </h3>
          {sortBy !== "popularity" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSortBy("popularity");
                updateUrl({
                  colors: selectedColors,
                  size: selectedSize,
                  priceMin: currentFilters.priceMin,
                  priceMax: currentFilters.priceMax,
                  sort: "popularity",
                });
              }}
              className="h-7 text-xs"
            >
              <X className="w-3 h-3 mr-1" />
              Clear
            </Button>
          )}
        </div>
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
      <Separator />
      <Button
        variant="outline"
        onClick={clearAllFilters}
        className="w-full"
        disabled={activeFilterCount === 0}
      >
        <X className="w-4 h-4 mr-2" />
        Clear All Filters
      </Button>
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
