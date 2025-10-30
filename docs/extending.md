# Extending the Project

This guide explains how to add new features, modify existing behavior, and contribute to the project.

## Table of Contents

1. [Adding New Parameter Rules](#adding-new-parameter-rules)
2. [Adding New Robots.txt Patterns](#adding-new-robotstxt-patterns)
3. [Modifying SEO Logic](#modifying-seo-logic)
4. [Adding New Pages](#adding-new-pages)
5. [Adding New Components](#adding-new-components)
6. [Customizing UI](#customizing-ui)
7. [Adding Tests](#adding-tests)
8. [Contributing Guidelines](#contributing-guidelines)

## Adding New Parameter Rules

### Step 1: Define the Rule

Edit `data/rules.json` and add your rule:

```json
{
  "rules": [
    {
      "name": "brand",
      "policy": "stable",
      "description": "Brand filter creates unique product subsets that should be indexed."
    }
  ]
}
```

**Policy Options**:
- `stable` - Indexable, kept in canonical
- `unstable` - Noindex, dropped from canonical
- `blocked` - Robots blocked, dropped from canonical
- `search` - Noindex, kept in canonical
- `pagination` - Special pagination handling

### Step 2: Restart Dev Server

```bash
# Stop with Ctrl+C, then:
npm run dev
```

Configuration is loaded at startup from `data/rules.json`.

### Step 3: Test the Rule

1. Add parameter to URL: `/catalog/t-shirts?brand=nike`
2. Check SEO Receipt
3. Verify correct behavior:
   - Stable: index,follow, in sitemap
   - Unstable: noindex,follow, not in sitemap
   - Blocked: blocked by robots, not in sitemap

### Step 4: Add to Demo Chips (Optional)

Edit `components/DemoChips.tsx`:

```typescript
const groups: ChipGroup[] = [
  {
    title: 'Common Parameter Types',
    chips: [
      {
        label: '+ Brand (stable)',
        params: 'brand=nike',
        description: 'Brand filter → index,follow'
      },
      // ... other chips
    ]
  }
];
```

### Advanced: Custom Parameter Logic

If your parameter needs special handling, edit `lib/rules/params.ts`:

```typescript
export interface ParamRule {
  name: string;
  policy: ParamPolicy;
  description: string;
  mapToPath?: (ctx: { pathname: string; params: URLSearchParams }) => string | null;
}

// Example: Map brand to clean path
{
  name: 'brand',
  policy: 'stable',
  description: '...',
  mapToPath: ({ pathname, params }) => {
    const brand = params.get('brand');
    if (brand && pathname === '/catalog/') {
      return `/catalog/brand/${brand}/`;
    }
    return null;
  }
}
```

## Adding New Robots.txt Patterns

### Step 1: Add Pattern to Configuration

Edit `data/rules.json` → `robotsToggles`:

```json
{
  "robotsToggles": {
    "blogFilters": {
      "enabled": true,
      "label": "Blog Filter Parameters",
      "description": "Block dynamic blog filters like author, tag, date",
      "rules": [
        "Disallow: /blog/*?*author=*",
        "Disallow: /blog/*?*tag=*",
        "Disallow: /blog/*?*date=*"
      ]
    }
  }
}
```

### Step 2: Add Matching Logic

Edit `lib/rules/robots.ts` → `checkRobotsBlocking()`:

```typescript
export function checkRobotsBlocking(
  pathname: string,
  searchParams: URLSearchParams,
  config: ParamConfig
): RobotsMatchResult {
  // ... existing code ...

  // Add your new pattern check
  if (toggles.blogFilters?.enabled) {
    if (pathname.startsWith('/blog/')) {
      const blockParams = ['author', 'tag', 'date'];
      for (const param of blockParams) {
        if (searchParams.has(param)) {
          matchedRules.push(`Blog Filter Parameters: Disallow /blog/*?*${param}=*`);
          isBlocked = true;
        }
      }
    }
  }

  return { isBlocked, matchedRules, warnings };
}
```

### Step 3: Add Warning if Risky

If your pattern might prevent discovery, add a warning:

```typescript
if (toggles.blogFilters?.enabled) {
  if (searchParams.has('author')) {
    matchedRules.push('...');
    isBlocked = true;
    warnings.push('Consider using noindex,follow instead of robots blocking for author pages.');
  }
}
```

### Step 4: Test

1. Restart dev server
2. Visit URL with pattern: `/blog/post?author=john`
3. Check if robots.txt blocks it
4. Verify warning shows in Receipt

## Modifying SEO Logic

The core SEO logic is in `lib/rules/canonical.ts` → `computeCanonical()`.

### Example: Add a New Decision Step

```typescript
export function computeCanonical(...): CanonicalResult {
  // ... existing steps 1-8 ...

  // Add Step 9: Custom Logic
  trace.push(`Step 9: Check custom condition`);
  if (pathname.startsWith('/special/')) {
    robots = 'noindex,follow';
    sitemapIncluded = false;
    trace.push(`  ✓ Special path detected → noindex,follow`);
  }
  trace.push('');

  // ... rest of function ...
}
```

### Modifying Existing Steps

Each step is clearly marked with comments:

```typescript
// Step 3: Detect pagination
if (evaluated.pagination.isPaginated && evaluated.pagination.pageNumber >= 2) {
  // Your modification here
}
```

### Testing Logic Changes

1. Make changes to `canonical.ts`
2. Save file (hot reload works)
3. Navigate to test URL
4. Check "Rule Trace" tab in Receipt
5. Verify new logic appears in trace

## Adding New Pages

### Static Page

Create a simple page:

```tsx
// app/my-page/page.tsx
export default function MyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">My Page</h1>
      <p>Content here...</p>
    </div>
  );
}
```

Access at: http://localhost:3000/my-page

### Dynamic Page

Create a page with dynamic segments:

```tsx
// app/blog/[slug]/page.tsx
interface Props {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: Props) {
  return (
    <div>
      <h1>Post: {params.slug}</h1>
    </div>
  );
}

// Generate static params at build time
export function generateStaticParams() {
  return [
    { slug: 'first-post' },
    { slug: 'second-post' },
  ];
}
```

### Adding to Sitemap

Edit `lib/rules/sitemap.ts` → `generateSitemapEntries()`:

```typescript
export function generateSitemapEntries(config: ParamConfig, baseUrl: string): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  // Add your new pages
  const myPages = [
    { path: '/my-page', priority: 0.8 },
    { path: '/blog/first-post', priority: 0.7 },
  ];

  for (const page of myPages) {
    const result = computeCanonical(page.path, new URLSearchParams(), config, baseUrl);
    entries.push({
      loc: result.canonical,
      priority: page.priority,
      included: result.sitemapIncluded,
      reason: result.sitemapIncluded ? 'Indexable page' : `Excluded: ${result.robots}`,
    });
  }

  // ... existing code ...

  return entries;
}
```

## Adding New Components

### Simple Component

```tsx
// components/MyFeature.tsx
interface MyFeatureProps {
  title: string;
  description: string;
}

export function MyFeature({ title, description }: MyFeatureProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}
```

### Client Component with Hooks

```tsx
// components/MyInteractive.tsx
'use client';

import { useState } from 'react';
import { useConfig } from '@/lib/config/provider';

export function MyInteractive() {
  const [count, setCount] = useState(0);
  const { config } = useConfig();

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
      <p>Config has {config.rules.length} rules</p>
    </div>
  );
}
```

### Using shadcn/ui Components

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Feature</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  );
}
```

## Customizing UI

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        // Add custom colors
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... more shades
        },
      },
    },
  },
};
```

Use in components:
```tsx
<div className="bg-brand-100 text-brand-900">...</div>
```

### Changing Fonts

Edit `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
```

### Changing Layout

Edit `app/layout.tsx` to modify the overall layout structure.

### Responsive Breakpoints

Use Tailwind's responsive prefixes:

```tsx
<div className="
  p-4       // mobile
  md:p-6    // tablet
  lg:p-8    // desktop
">
  Content
</div>
```

## Adding Tests

### Unit Tests (Manual)

Create a test file:

```typescript
// lib/rules/__tests__/my-feature.test.ts
import { myFunction } from '../my-feature';

describe('myFunction', () => {
  test('returns expected result', () => {
    const result = myFunction('input');
    expect(result).toBe('expected');
  });
});
```

Run with a test runner like Jest (not included by default).

### Type Tests

TypeScript itself acts as a test:

```bash
npm run typecheck
```

### Integration Tests

Create acceptance test file:

```javascript
// test-my-feature.js
const { computeCanonical } = require('./lib/rules/canonical');
const { DEFAULT_PARAM_CONFIG } = require('./lib/rules/params');

const result = computeCanonical('/my-path', new URLSearchParams('my_param=value'), DEFAULT_PARAM_CONFIG);

console.log('Robots:', result.robots);
console.log('Canonical:', result.canonical);
console.log('Sitemap:', result.sitemapIncluded ? 'INCLUDED' : 'EXCLUDED');

// Verify expectations
if (result.robots !== 'index,follow') {
  console.error('FAIL: Expected index,follow');
  process.exit(1);
}

console.log('PASS');
```

Run with:
```bash
node test-my-feature.js
```

## Contributing Guidelines

### Code Style

Follow existing patterns:

1. **TypeScript**: Use explicit types
   ```typescript
   function myFunction(param: string): number {
     return param.length;
   }
   ```

2. **Component Structure**:
   ```typescript
   interface MyComponentProps {
     title: string;
   }

   export function MyComponent({ title }: MyComponentProps) {
     return <div>{title}</div>;
   }
   ```

3. **Naming**:
   - Components: PascalCase (`MyComponent`)
   - Functions: camelCase (`computeCanonical`)
   - Files: kebab-case (`my-component.tsx`) or PascalCase for components
   - Constants: UPPER_SNAKE_CASE (`DEFAULT_CONFIG`)

4. **Imports**:
   ```typescript
   // React/Next first
   import { useState } from 'react';
   import Link from 'next/link';

   // UI components
   import { Button } from '@/components/ui/button';

   // Local imports
   import { myFunction } from '@/lib/utils';
   ```

### Documentation

Add JSDoc comments for complex functions:

```typescript
/**
 * Computes the canonical URL and SEO directives for a given path.
 *
 * @param pathname - The URL pathname (e.g., "/catalog/t-shirts")
 * @param searchParams - URLSearchParams object with query parameters
 * @param config - The SEO configuration object
 * @param baseUrl - Base URL for absolute canonical (default: "https://example.com")
 * @returns CanonicalResult with canonical URL, robots directive, and trace
 */
export function computeCanonical(
  pathname: string,
  searchParams: URLSearchParams,
  config: ParamConfig,
  baseUrl: string = 'https://example.com'
): CanonicalResult {
  // ...
}
```

### Git Workflow

1. Create a feature branch:
   ```bash
   git checkout -b feature/my-feature
   ```

2. Make changes and commit:
   ```bash
   git add .
   git commit -m "Add: My feature description"
   ```

3. Push and create PR:
   ```bash
   git push origin feature/my-feature
   ```

### Commit Messages

Use conventional commits:

```
feat: Add brand parameter support
fix: Correct robots.txt blocking logic
docs: Update setup guide
refactor: Simplify canonical computation
style: Format code with prettier
test: Add tests for pagination logic
```

### Before Submitting

Checklist:
- [ ] Code compiles: `npm run build`
- [ ] Types are correct: `npm run typecheck`
- [ ] Code is formatted (use Prettier)
- [ ] Documentation updated if needed
- [ ] Tested manually in browser
- [ ] No console errors
- [ ] Responsive design works

## Advanced Extensions

### Adding a New SEO Feature

Example: Add structured data support

1. Create new module:
   ```typescript
   // lib/rules/structured-data.ts
   export interface StructuredData {
     type: string;
     data: Record<string, any>;
   }

   export function generateStructuredData(
     pathname: string,
     params: URLSearchParams
   ): StructuredData | null {
     if (pathname.startsWith('/catalog/')) {
       return {
         type: 'Product',
         data: {
           '@context': 'https://schema.org',
           '@type': 'Product',
           name: 'Product Name',
         },
       };
     }
     return null;
   }
   ```

2. Integrate with Receipt:
   ```tsx
   // In SeoReceipt.tsx
   const structuredData = generateStructuredData(pathname, params);

   // Display in Receipt
   {structuredData && (
     <div>
       <h3>Structured Data</h3>
       <pre>{JSON.stringify(structuredData, null, 2)}</pre>
     </div>
   )}
   ```

3. Add to page metadata:
   ```tsx
   // In page.tsx
   export async function generateMetadata() {
     const structuredData = generateStructuredData(pathname, params);

     return {
       other: {
         'structured-data': JSON.stringify(structuredData),
       },
     };
   }
   ```

### Adding a New Demo Section

Example: Add internationalization demo

1. Create new page:
   ```tsx
   // app/i18n-demo/page.tsx
   export default function I18nDemo() {
     return <div>Internationalization Demo</div>;
   }
   ```

2. Add to navigation:
   ```tsx
   // In Navigation component
   <Link href="/i18n-demo">
     <Button>I18n Demo</Button>
   </Link>
   ```

3. Add to homepage:
   ```tsx
   // In app/page.tsx
   <Card>
     <CardTitle>Internationalization</CardTitle>
     <Link href="/i18n-demo">
       <Button>View Demo</Button>
     </Link>
   </Card>
   ```

### Performance Optimization

Add memoization for expensive computations:

```typescript
import { useMemo } from 'react';

export function MyComponent() {
  const expensiveResult = useMemo(() => {
    return computeExpensiveThing();
  }, [dependency]);

  return <div>{expensiveResult}</div>;
}
```

### Error Handling

Add error boundaries:

```tsx
// components/ErrorBoundary.tsx
'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }

    return this.props.children;
  }
}
```

## Questions or Issues?

- Check [Architecture](./architecture.md) for system design
- Check [SEO Logic](./seo-logic.md) for decision algorithms
- Check [Components](./components.md) for UI details
- Check [Setup](./setup.md) for environment setup

The codebase is well-documented with TypeScript types and comments. When in doubt, look at existing code for patterns to follow.
