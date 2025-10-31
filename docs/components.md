# Components

This document describes the key React components used in the application.

## Component Hierarchy

```
App Layout (app/layout.tsx)
├── ConfigProvider (lib/config/provider.tsx)
│   └── Children with config access
└── SeoReceipt (components/SeoReceipt.tsx)
    └── Always visible on right side

Pages (app/**/page.tsx)
├── Homepage (app/page.tsx)
├── Catalog Landing (app/catalog/page.tsx)
├── Category Page (app/catalog/[category]/page.tsx)
│   ├── Breadcrumbs
│   ├── DemoChips
│   └── Product Grid
├── Product Page (app/catalog/[category]/[product]/page.tsx)
└── Best Practices (app/best-practices/page.tsx)
    ├── ParamPolicyEditor
    ├── PaginationSettings
    ├── RobotsPreview
    └── SitemapTable
```

## Core Components

### SeoReceipt

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

### DemoChips

**Location**: `components/DemoChips.tsx`

**Purpose**: Interactive buttons to test different URL patterns

**Type**: Client Component

**Props**:
- `basePath: string` - Base URL for chip links

**Features**:
1. **Grouped Display**
   - "Common Parameter Types" group
   - "Stacked Parameters" group
   - Clear descriptions for each group

2. **Dynamic Blocking Detection**
   - Checks if robots.txt blocks the pattern
   - Shows "(Blocked)" suffix if matched
   - Uses destructive button variant for blocked

3. **Tooltips**
   - Each chip has a description
   - Explains expected behavior

**Code Structure**:
```typescript
export function DemoChips({ basePath }: DemoChipsProps) {
  const { config } = useConfig();

  const groups = [
    {
      title: "Common Parameter Types",
      chips: [
        { label: "+ Sort (unstable)", params: "sort=price_desc", ... },
        ...
      ]
    },
    ...
  ];

  return (
    <div>
      {groups.map(group => (
        <div key={group.title}>
          <h4>{group.title}</h4>
          {group.chips.map(chip => {
            const isBlocked = checkRobotsBlocking(...);
            return <Button variant={isBlocked ? "destructive" : "outline"}>...</Button>
          })}
        </div>
      ))}
    </div>
  );
}
```

### ParamPolicyEditor

**Location**: `components/playground/ParamPolicyEditor.tsx`

**Purpose**: Display parameter classification rules

**Type**: Client Component

**Props**:
- `config: ParamConfig` - SEO configuration

**Features**:
1. **Grouped by Policy**
   - Stable parameters group
   - Unstable parameters group
   - Blocked parameters group

2. **Badge Display**
   - Color-coded badges (green/amber/red)
   - Policy explanations

3. **Static Display**
   - No toggles (best practices only)
   - Educational descriptions

**Code Structure**:
```typescript
export function ParamPolicyEditor({ config }: ParamPolicyEditorProps) {
  const groupedRules = {
    stable: config.rules.filter(r => r.policy === 'stable'),
    unstable: config.rules.filter(r => r.policy === 'unstable'),
    blocked: config.rules.filter(r => r.policy === 'blocked'),
  };

  return (
    <Card>
      {['stable', 'unstable', 'blocked'].map(policyType => (
        <div key={policyType}>
          <Badge>{policyType}</Badge>
          <p>{getPolicyExplanation(policyType)}</p>
          {groupedRules[policyType].map(rule => (
            <div key={rule.name}>
              <code>{rule.name}</code>
              <p>{rule.description}</p>
            </div>
          ))}
        </div>
      ))}
    </Card>
  );
}
```

### PaginationSettings

**Location**: `components/playground/PaginationSettings.tsx`

**Purpose**: Display pagination best practices

**Type**: Client Component

**Props**: None (static display)

**Features**:
1. **Page 1 Explanation**
   - index,follow
   - Why it's indexable
   - Code example

2. **Page 2+ Explanation**
   - noindex,follow
   - Why this is recommended
   - Benefits listed

3. **Canonical Strategy**
   - Self-referencing canonical
   - Why not canonical to page 1
   - Code examples

4. **Anti-Patterns**
   - Blocking pagination in robots.txt
   - Why it's bad
   - Warnings

**Code Structure**:
```typescript
export function PaginationSettings() {
  return (
    <Card>
      <div>
        <CheckCircle2 /> Page 1: Fully Indexable
        <Badge>index,follow</Badge>
        <p>Explanation...</p>
      </div>
      <div>
        <CheckCircle2 /> Page 2+: Noindex with Follow
        <Badge>noindex,follow</Badge>
        <p>Explanation...</p>
        <ul>Benefits...</ul>
      </div>
      <div>
        <XCircle /> Anti-Pattern: Blocking in robots.txt
        <p>Warning...</p>
      </div>
    </Card>
  );
}
```

### RobotsPreview

**Location**: `components/playground/RobotsPreview.tsx`

**Purpose**: Show robots.txt best practices

**Type**: Client Component

**Props**: None (static display)

**Features**:
1. **Best Practice Rules**
   - Protected paths
   - Tracking parameters
   - UI preferences
   - Calendar patterns
   - Each with explanation

2. **Anti-Patterns**
   - Blocking pagination
   - Blocking sort
   - Blocking search
   - Why each is risky

3. **Complete Example**
   - Full robots.txt content
   - Production-ready
   - With comments

**Code Structure**:
```typescript
export function RobotsPreview() {
  const rules = [
    {
      title: "Protected & System Paths",
      rules: ["Allow: /api/robots", "Disallow: /account/", ...],
      explanation: "..."
    },
    ...
  ];

  const antiPatterns = [
    {
      title: "Blocking Pagination Parameters",
      rule: "Disallow: /*?*page=*",
      reason: "This prevents crawlers from discovering..."
    },
    ...
  ];

  return (
    <div>
      <Card>
        {rules.map(rule => (
          <div key={rule.title}>
            <h3>{rule.title}</h3>
            <Badge>Recommended</Badge>
            <code>{rule.rules.join('\n')}</code>
            <p>{rule.explanation}</p>
          </div>
        ))}
      </Card>

      <Card>
        <AlertTriangle /> Common Anti-Patterns
        {antiPatterns.map(pattern => (
          <div key={pattern.title}>
            <h3>{pattern.title}</h3>
            <code className="line-through">{pattern.rule}</code>
            <p>{pattern.reason}</p>
          </div>
        ))}
      </Card>
    </div>
  );
}
```

### SitemapTable

**Location**: `components/playground/SitemapTable.tsx`

**Purpose**: Show which URLs are in the sitemap

**Type**: Client Component

**Props**:
- `config: ParamConfig` - SEO configuration

**Features**:
1. **Entry List**
   - All evaluated URLs
   - Inclusion status
   - Reasons for inclusion/exclusion

2. **Filtering**
   - Show all entries
   - Show included only
   - Show excluded only

3. **Explanations**
   - Why each URL is included/excluded
   - Links to relevant documentation

**Code Structure**:
```typescript
export function SitemapTable({ config }: SitemapTableProps) {
  const entries = generateSitemapEntries(config);

  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>URL</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Reason</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map(entry => (
            <TableRow key={entry.loc}>
              <TableCell>{entry.loc}</TableCell>
              <TableCell>
                {entry.included ? (
                  <Badge>Included</Badge>
                ) : (
                  <Badge variant="outline">Excluded</Badge>
                )}
              </TableCell>
              <TableCell>{entry.reason}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
```

## Utility Components

### Breadcrumbs

**Location**: `components/Breadcrumbs.tsx`

**Purpose**: Show navigation breadcrumb trail

**Type**: Client Component

**Props**:
- `items: Array<{ label: string, href: string }>`

**Features**:
- Home link always present
- Current page non-clickable
- Separator between items

### Navigation

**Location**: `components/Navigation.tsx`

**Purpose**: Main site navigation

**Type**: Client Component

**Features**:
- Links to all main sections
- Responsive mobile menu
- Active page highlighting

## UI Component Library

### shadcn/ui Components

**Location**: `components/ui/`

These are re-usable components from shadcn/ui, built on Radix UI primitives.

Key components used:

- **`button.tsx`** - Buttons with variants
- **`card.tsx`** - Card containers
- **`badge.tsx`** - Status badges
- **`tabs.tsx`** - Tab navigation
- **`alert.tsx`** - Alert messages
- **`table.tsx`** - Data tables
- **`dialog.tsx`** - Modal dialogs
- **`tooltip.tsx`** - Tooltips

All use Tailwind CSS for styling and include proper TypeScript types.

## Component Patterns

### Client vs Server Components

**Server Components** (default in App Router):
- Product pages
- Catalog pages
- Static content pages

**Client Components** (`'use client'`):
- SeoReceipt (needs hooks)
- DemoChips (needs interactivity)
- All playground components (need client-side logic)

### Configuration Access

Components that need config use the `useConfig()` hook:

```typescript
'use client';

import { useConfig } from '@/lib/config/provider';

export function MyComponent() {
  const { config } = useConfig();
  // Use config...
}
```

### Prop Drilling Avoidance

Instead of passing config through multiple levels, we use React Context:

```
ConfigProvider (top level)
    ↓
useConfig() hook
    ↓
Any component that needs config
```

### Responsive Design

Components use Tailwind's responsive prefixes:

```tsx
<div className="hidden lg:block">Desktop only</div>
<div className="lg:hidden">Mobile only</div>
```

Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px (main breakpoint for Receipt)
- `xl`: 1280px
- `2xl`: 1536px

### Accessibility

All components follow accessibility best practices:
- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader friendly

## Component Testing

### Manual Testing

Use the app to verify:
- SeoReceipt updates on URL change
- DemoChips show correct blocking status
- All playground tabs display correctly
- Mobile layout works properly

### Type Safety

TypeScript ensures:
- Correct props passed
- Config structure matches
- No undefined access

```bash
npm run typecheck
```

### Build Verification

```bash
npm run build
```

Verifies all components compile correctly.

## Adding New Components

### Step 1: Create Component File

```typescript
// components/MyComponent.tsx
'use client'; // If using hooks

import { useConfig } from '@/lib/config/provider';

interface MyComponentProps {
  title: string;
}

export function MyComponent({ title }: MyComponentProps) {
  const { config } = useConfig();

  return (
    <div>
      <h2>{title}</h2>
      {/* Component content */}
    </div>
  );
}
```

### Step 2: Import and Use

```typescript
// app/my-page/page.tsx
import { MyComponent } from '@/components/MyComponent';

export default function MyPage() {
  return <MyComponent title="Hello" />;
}
```

### Step 3: Add Types

Ensure TypeScript types are properly defined for all props and return values.

## Component Best Practices

1. **Single Responsibility**: Each component should do one thing well
2. **Small Components**: Break down large components into smaller ones
3. **Type Everything**: Use TypeScript for all props and state
4. **Descriptive Names**: Use clear, descriptive component names
5. **Documentation**: Add JSDoc comments for complex components
6. **Avoid Props Drilling**: Use Context for shared state
7. **Memoization**: Use React.memo() for expensive renders (when needed)
8. **Error Boundaries**: Handle errors gracefully
