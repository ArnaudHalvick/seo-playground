# Architecture

This document explains the system architecture of the SEO Best Practices Showcase application.

## System Overview

The application is built using a **layered architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────────┐
│           Presentation Layer                │
│  (Next.js Pages + React Components)         │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│          Business Logic Layer               │
│    (SEO Rules Engine + Data Processing)     │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│             Data Layer                      │
│   (Static JSON + LocalStorage Config)       │
└─────────────────────────────────────────────┘
```

## Architecture Layers

### 1. Presentation Layer (`app/` and `components/`)

**Responsibility**: Render UI and handle user interactions

**Key Components**:
- **Pages** (`app/`): Next.js 13 App Router pages
  - Server-side rendering for catalog pages
  - Client-side interactivity for SEO receipt
  - Clean path routes for SEO-friendly URLs
- **UI Components** (`components/`): Reusable React components
  - `SeoReceipt.tsx`: Real-time SEO feedback panel with crawl trap risk
  - `DemoChips.tsx`: Interactive parameter demo buttons
  - `catalog/FilterSidebar.tsx`: Production-ready e-commerce filter interface
  - `catalog/FilterSummaryBar.tsx`: Sticky bar showing all active filters
  - `ui/`: shadcn/ui component library

**Technologies**:
- Next.js 13 (App Router)
- React 18
- TypeScript
- Tailwind CSS

### 2. Business Logic Layer (`lib/`)

**Responsibility**: Core SEO decision-making logic

**Key Modules**:

#### SEO Rules Engine (`lib/rules/`)

The heart of the application, responsible for all SEO decisions:

- **`canonical.ts`**: Main decision engine
  - Computes canonical URLs
  - Detects multi-select parameters (exponential combinations)
  - Handles multi-filter logic (2+ stable parameters)
  - Determines robots directives
  - Decides sitemap inclusion
  - Returns complete decision trace with risk assessment

- **`params.ts`**: Parameter classification
  - Classifies parameters as stable/unstable/blocked/search
  - Evaluates parameter combinations
  - Provides parameter rules and mappings

- **`robots.ts`**: Robots.txt generation
  - Generates robots.txt content with best-practice patterns
  - Checks if URLs match blocking patterns
  - Detects multi-select patterns (comma-separated values)
  - Provides warnings for risky patterns

- **`sitemap.ts`**: Sitemap generation
  - Generates sitemap entries
  - Filters based on indexability
  - Outputs XML format

#### Configuration Provider (`lib/config/`)

- **`provider.tsx`**: React Context for configuration
  - Loads default config from `data/rules.json`
  - Merges with browser localStorage
  - Provides config to all components

#### Catalog Management (`lib/catalog/`)

- **`data.ts`**: Product data and filtering logic
  - Product filtering by color, size, price range
  - Multi-select color support with comma-separated values
  - Filter count calculation for sidebar display
  - Product sorting and pagination

#### Utilities (`lib/utils/`)

- **`url-diff.ts`**: URL comparison and diff highlighting
- **`utils.ts`**: General utility functions

### 3. Data Layer (`data/`)

**Responsibility**: Store static configuration and demo data

**Files**:
- **`rules.json`**: Default SEO configuration
  - Parameter classification rules
  - Pagination policies
  - Robots.txt patterns

- **`catalog.json`**: Demo product data
  - Product listings
  - Category information
  - Facet values

## Data Flow

### SEO Decision Flow

```
User visits URL
      ↓
Next.js Server Side Rendering
      ↓
computeCanonical() called
      ↓
┌──────────────────────────────┐
│  Step 1: Normalize path      │
│  Step 2: Classify params     │
│  Step 3: Detect pagination   │
│  Step 4: Check protected     │
│  Step 5: Apply param policy  │
│  Step 6: Check robots.txt    │
│  Step 7: Build canonical     │
│  Step 8: Decide sitemap      │
└──────────────────────────────┘
      ↓
CanonicalResult {
  canonical: string
  robots: RobotsDirective
  blockInRobots: boolean
  sitemapIncluded: boolean
  trace: string[]
  warnings: string[]
}
      ↓
SeoReceipt displays results
```

### Configuration Flow

```
data/rules.json (static defaults)
        ↓
ConfigProvider loads on mount
        ↓
localStorage (browser-side only)
        ↓
React Context API
        ↓
Components access via useConfig()
```

## Key Design Patterns

### 1. Single Responsibility Principle

Each module has one clear responsibility:
- `canonical.ts` decides SEO outcomes
- `params.ts` classifies parameters
- `robots.ts` handles robots.txt
- `sitemap.ts` generates sitemaps

### 2. Separation of Concerns

Business logic is **completely separated** from presentation:
- SEO logic in `lib/` has zero React dependencies
- Can be tested in isolation
- Can be reused in other frameworks

### 3. Immutable Data Flow

Configuration is treated as immutable:
- Config is loaded once at startup
- Updates create new config objects
- No direct mutations

### 4. Declarative Configuration

SEO rules are defined declaratively in JSON:
```json
{
  "name": "sort",
  "policy": "unstable",
  "description": "..."
}
```

## Component Interactions

### SeoReceipt Component

```
SeoReceipt (Client Component)
    ↓
usePathname() + useSearchParams()
    ↓
useConfig() → gets configuration
    ↓
computeCanonical(pathname, params, config)
    ↓
Displays: Canonical, Robots, Sitemap, Trace
```

### DemoChips Component

```
DemoChips (Client Component)
    ↓
useConfig() → gets configuration
    ↓
For each demo:
  checkRobotsBlocking(path, params, config)
    ↓
Render chips with "(Blocked)" suffix if matched
```

### Best Practices Page

```
BestPracticesPage (Client Component)
    ↓
useConfig() → gets configuration
    ↓
Display tabs:
  - ParamPolicyEditor (static display)
  - PaginationSettings (static display)
  - RobotsPreview (static display)
  - SitemapTable (static display)
```

## API Routes

### `/api/robots`

**Type**: Dynamic Route (Server-side)

**Purpose**: Generate robots.txt

**Flow**:
```
GET /api/robots
    ↓
Load DEFAULT_PARAM_CONFIG
    ↓
generateRobotsTxt(config)
    ↓
Return text/plain response
```

### `/api/sitemap`

**Type**: Dynamic Route (Server-side)

**Purpose**: Generate XML sitemap

**Flow**:
```
GET /api/sitemap
    ↓
Load DEFAULT_PARAM_CONFIG
    ↓
generateSitemapEntries(config)
    ↓
generateSitemapXml(entries)
    ↓
Return application/xml response
```

## State Management

### Global State (Configuration)

Managed via **React Context**:
- Single source of truth
- Available to all components
- Persisted to localStorage (demo only)

### Component State

Managed via **useState**:
- UI interactions (tabs, tooltips, etc.)
- Temporary state (clipboard copy status)
- No shared state between components

### URL State

Managed via **Next.js Router**:
- URL parameters drive SEO decisions
- No client-side routing needed
- Server-side rendering for SEO

## Build and Runtime

### Build Time

```
npm run build
    ↓
Next.js compiles TypeScript
    ↓
Generates static pages for:
  - / (homepage)
  - /catalog
  - /catalog/[category] (SSG)
  - /catalog/[category]/[product] (SSG)
    ↓
Generates API routes
```

### Runtime

```
User Request
    ↓
Next.js Server
    ↓
- Static pages served from build
- API routes execute server-side
- Client components hydrate
    ↓
React hydration completes
    ↓
Client-side interactions enabled
```

## Performance Considerations

### Static Generation

Most pages are **statically generated** at build time:
- Catalog pages (all categories and products)
- Documentation pages
- Homepage

### Client-Side Rendering

Only interactive components run client-side:
- SeoReceipt (needs URL access)
- DemoChips (needs interactivity)
- Configuration display (minimal logic)

### Code Splitting

Next.js automatically code-splits:
- Each page is a separate bundle
- Shared code in common chunks
- UI components loaded on demand

## Extensibility Points

### Adding New Parameter Types

1. Add rule to `data/rules.json`
2. Optionally add logic in `lib/rules/params.ts`
3. No UI changes needed (automatically picked up)

### Adding New Robots.txt Patterns

The app uses a static best-practice model. To add new robots.txt patterns:

1. Add parameter to `data/rules.json` with `policy: "blocked"` for parameters that should be blocked
2. Or add custom logic in `lib/rules/robots.ts` → `checkRobotsBlocking()` for path-based patterns
3. Pattern will appear in robots.txt and SEO Receipt automatically

### Adding New Pages

1. Create page in `app/[route]/page.tsx`
2. SEO logic automatically applies
3. Add to sitemap in `lib/rules/sitemap.ts` if needed

## Error Handling

### TypeScript Type Safety

All functions have explicit types:
- Input validation at compile time
- No runtime type errors
- Clear interfaces for data structures

### Graceful Degradation

If configuration fails to load:
- Falls back to `DEFAULT_PARAM_CONFIG`
- App continues to function
- Warning logged to console

### URL Parsing

Malformed URLs are handled safely:
- URLSearchParams handles all edge cases
- Empty params treated as absent
- No crashes on invalid input

## Testing Strategy

### Type Checking

```bash
npm run typecheck
```

TypeScript ensures:
- All interfaces match
- No type errors
- Correct function signatures

### Build Test

```bash
npm run build
```

Build verifies:
- All imports resolve
- No syntax errors
- All pages generate successfully

### Manual Testing

Use the demo chips to verify:
- Each parameter combination
- Robots.txt patterns
- Sitemap inclusion logic

## Filter System Architecture

### Component Hierarchy

```
FilterSidebar (client component)
├── Color Checkboxes (multi-select)
│   ├── Checkbox per color
│   └── Product count per color
├── Size Radio Buttons (single-select)
│   ├── RadioGroupItem per size
│   └── Product count per size
├── Price Range Slider (numeric range)
│   ├── Dual-handle slider
│   └── Debounced updates (500ms)
├── Sort Dropdown (single-select)
│   └── Select component with options
└── Clear All Button
    └── Resets to base category URL
```

### State Management Flow

1. **User interacts** with filter UI (checkbox, slider, dropdown)
2. **Local state updates** immediately (optimistic UI, instant feedback)
3. **Debounce timer** starts (for price slider only, 500ms delay)
4. **URL updates** via `router.push()` with new search params
5. **Next.js re-renders** page with new searchParams prop
6. **Server component** fetches filtered products from data layer
7. **Product grid updates** with new results
8. **Filter counts recalculate** based on new product set

### URL Synchronization

All filter state lives in the URL as search parameters:

- `?color=black,blue` - Multi-select colors (comma-separated)
- `?size=M` - Single size selection
- `?price_min=20&price_max=50` - Numeric range filters
- `?sort=price_asc` - Sort option
- `?page=2` - Pagination state

**Benefits**:
- ✅ Shareable URLs - Users can share filtered views
- ✅ Browser back/forward works - Navigation history preserved
- ✅ SEO-analyzable - Crawlers see real URLs
- ✅ No client state to sync - URL is single source of truth
- ✅ Deep linking - Direct access to any filtered state

### Filter Count Calculation

`getFilterCounts()` function computes available options dynamically:

```typescript
// Exclude current color filter to show all color options
const filtersWithoutColors = { ...currentFilters, colors: undefined };
const productsForColorCount = filterProducts(allProducts, filtersWithoutColors);

// Count products per color
productsForColorCount.forEach(product => {
  colorCounts[product.color] = (colorCounts[product.color] || 0) + 1;
});
```

This ensures filter options show accurate product counts based on other active filters.

### Debouncing Strategy

Price slider uses debouncing to avoid excessive URL updates:

```typescript
const handlePriceChange = (value: number[]) => {
  setPriceRange([value[0], value[1]]);  // Immediate UI update
  
  if (priceDebounceTimer) {
    clearTimeout(priceDebounceTimer);  // Cancel pending update
  }
  
  const timer = setTimeout(() => {
    updateUrl({ priceMin: value[0], priceMax: value[1] });  // Update after 500ms
  }, 500);
  
  setPriceDebounceTimer(timer);
};
```

**Why**: Sliders trigger many events during dragging. Debouncing prevents excessive re-renders and history entries.

## Clean Path Routing Strategy

### File Structure

```
app/catalog/[category]/
├── page.tsx                     # Category page with filters
├── [product]/page.tsx           # Individual product pages
└── by-color/[color]/page.tsx    # Clean path color filter
```

**Important**: The `by-color/` prefix is required to avoid routing conflicts with `[product]`. Without it, Next.js cannot distinguish between `/catalog/t-shirts/black` (product?) and `/catalog/t-shirts/black` (color filter?).

### Static Generation

Clean path pages use `generateStaticParams` for pre-rendering:

```typescript
export async function generateStaticParams({ params }: { params: { category: string } }) {
  const category = getCategoryBySlug(params.category);
  const colors = getAvailableColors(params.category);
  
  return colors.map(color => ({
    color: color.toLowerCase(),
  }));
}
```

**Result**: 16+ pages pre-generated at build time (2 categories × 8 colors).

### Path Parameter Validation

Clean paths validate color parameters against available colors:

```typescript
const availableColors = getAvailableColors(params.category);
if (!availableColors.includes(params.color)) {
  notFound();  // 404 if color doesn't exist
}
```

### Query Params vs Clean Paths

| Aspect | Query Params | Clean Paths |
|--------|-------------|-------------|
| URL | `/catalog/t-shirts?color=black` | `/catalog/t-shirts/by-color/black/` |
| SEO | Good (if single stable filter) | Better (more semantic) |
| UX | Less readable | More readable |
| Flexibility | High (any combination) | Low (pre-defined only) |
| Generation | Dynamic | Static (build time) |
| **Use Case** | Multi-filter, sorting, ranges | Single high-value filters |

## Multi-Select Detection Logic

### Detection Method

Comma-separated values in URL parameters indicate multi-select:

```typescript
const multiSelectDetected = Array.from(searchParams.entries())
  .some(([key, value]) => value.includes(','));

// Examples:
// ?color=black,blue → multiSelectDetected = true
// ?color=black      → multiSelectDetected = false
```

### Exponential Combination Math

Multi-select creates 2^N URL combinations:

```
2 colors: black, blue
Combinations: [], [black], [blue], [black,blue]
Total: 2^2 = 4 URLs

3 colors: black, blue, red
Combinations: [], [black], [blue], [red], [black,blue], [black,red], [blue,red], [black,blue,red]
Total: 2^3 = 8 URLs

5 colors selected: 2^5 = 32 URLs
10 colors selected: 2^10 = 1,024 URLs
```

### SEO Treatment

When multi-select is detected:

```typescript
robots = undefined;  // No meta robots tag (crawlers blocked anyway)
blockInRobots = true;  // Block via robots.txt
sitemapIncluded = false;  // Exclude from sitemap

// robots.txt pattern
Disallow: /*?*color=*,*  // Blocks any URL with comma in color param
```

**Rationale**: Exponential combinations waste massive crawl budget. robots.txt blocking is the only scalable solution.

### Integration with canonical.ts

Multi-select detection happens early in the decision flow (Step 6):

```typescript
// Step 6: Check robots.txt blocking (includes multi-select detection)
const multiSelectDetected = Array.from(searchParams.entries())
  .some(([key, value]) => value.includes(','));

if (multiSelectDetected) {
  robots = undefined;
  blockInRobots = true;
  sitemapIncluded = false;
  trace.push(`✓ Multi-select detected → blocked by robots.txt`);
  trace.push(`  Pattern: Disallow: /*?*${param}=*,*`);
}
```

## Crawl Trap Risk Assessment

### Risk Level Determination

The `getCrawlTrapRisk()` function in `SeoReceipt.tsx` analyzes URL patterns:

**🔴 High Risk**:
- Multi-select parameters: `2^N` combinations
- Blocked parameters with examples: `N×M×...` potential combinations
- Infinite ranges: Calendar dates, arbitrary numbers

**🟡 Medium Risk**:
- 2+ stable parameters: `N×M` combinations (e.g., 5 colors × 4 sizes = 20 URLs)
- 3+ parameters (any type): Exponential growth risk
- Single unstable parameter: Creates duplicate content

**🟢 Low Risk**:
- Single stable parameter: Linear growth, manageable
- No parameters: Base page, safe

### Risk Calculation Examples

```typescript
// High risk: Multi-select with math
{
  level: "high",
  message: "⚠️ High crawl trap risk — multi-select creates exponential combinations",
  explanation: `Multi-select creates 2^N combinations. With 3 options: 2^3 = 8 URLs.`,
  robotsTxtSuggestion: `Disallow: /*?*color=*,*`
}

// Medium risk: Multiple stable filters
{
  level: "medium",
  message: "⚠️ Medium crawl trap risk — multiple filters create N×M combinations",
  explanation: `5 colors × 4 sizes = 20 URL variations. Risk of index bloat.`
}
```

### Integration with SEO Receipt

Risk assessment displays prominently in the receipt:

```
Crawl Trap Risk
────────────────
🔴 High Risk
⚠️ Multi-select creates exponential combinations
Explanation: 2^3 = 8 possible URLs
robots.txt: Disallow: /*?*color=*,*
```

## Deployment

The app can be deployed to any Next.js-compatible platform:

- **Vercel** (recommended): Zero-config deployment
- **Netlify**: Next.js support via plugin
- **Self-hosted**: Node.js server required
- **Static export**: Limited (no API routes)

No database or external services required - fully self-contained.
