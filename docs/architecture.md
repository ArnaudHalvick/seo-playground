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
- **UI Components** (`components/`): Reusable React components
  - `SeoReceipt.tsx`: Real-time SEO feedback panel
  - `DemoChips.tsx`: Interactive parameter demo buttons
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
  - Determines robots directives
  - Decides sitemap inclusion
  - Returns complete decision trace

- **`params.ts`**: Parameter classification
  - Classifies parameters as stable/unstable/blocked/search
  - Evaluates parameter combinations
  - Provides parameter rules and mappings

- **`robots.ts`**: Robots.txt generation
  - Generates robots.txt content
  - Checks if URLs match blocking patterns
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

1. Add toggle to `data/rules.json` → `robotsToggles`
2. Add matching logic in `lib/rules/robots.ts` → `checkRobotsBlocking()`
3. Pattern will appear in UI automatically

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

## Deployment

The app can be deployed to any Next.js-compatible platform:

- **Vercel** (recommended): Zero-config deployment
- **Netlify**: Next.js support via plugin
- **Self-hosted**: Node.js server required
- **Static export**: Limited (no API routes)

No database or external services required - fully self-contained.
