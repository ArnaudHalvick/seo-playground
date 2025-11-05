# SeoReceipt Component

**Location**: `components/SeoReceipt.tsx`

**Purpose**: Display real-time SEO analysis for the current URL

**Type**: Client Component (`'use client'`)

**Props**: None (uses hooks to get current route)

**State**:
- `copiedField`: Tracks which field was copied to clipboard

**Hooks Used**:
- `usePathname()` - Get current pathname
- `useSearchParams()` - Get current URL parameters
- `useConfig()` - Get SEO configuration

**Key Features**:
1. **URL Comparison**
   - Shows input URL vs canonical URL
   - Highlights differences (removed params in red, added in green)
   - Copy to clipboard buttons

2. **Indexability Display**
   - Badge showing robots directive
   - Icon indicators (green check, yellow warning, red X)
   - Robots.txt blocking status

3. **Sitemap Inclusion**
   - Shows if URL is included in sitemap
   - Explains why included/excluded

4. **Rule Trace**
   - Tab showing complete decision log
   - Step-by-step reasoning
   - Copy entire trace button

5. **Warnings**
   - Shows SEO warnings if any
   - Examples: risky robots.txt patterns

**Responsive Behavior**:
- Desktop (lg+): Fixed panel on right side
- Mobile: Fixed panel at bottom, collapsible

**Code Structure**:
```typescript
export function SeoReceipt() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { config } = useConfig();

  // Compute SEO decision
  const result = computeCanonical(pathname, params, config);

  // Render two layouts (desktop + mobile)
  return (
    <>
      <div className="hidden lg:block ...">Desktop Layout</div>
      <div className="lg:hidden ...">Mobile Layout</div>
    </>
  );
}
```

