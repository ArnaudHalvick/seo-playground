# Setup and Development Guide

This guide will help you set up your development environment and start working with the SEO Best Practices Showcase.

## Prerequisites

### Required Software

1. **Node.js** (v18 or higher)
   ```bash
   node --version  # Should be v18.0.0 or higher
   ```

2. **npm** (comes with Node.js)
   ```bash
   npm --version  # Should be 9.0.0 or higher
   ```

3. **Git** (for cloning the repository)
   ```bash
   git --version
   ```

### Recommended Tools

- **VS Code** - IDE with excellent TypeScript support
- **VS Code Extensions**:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features

## Installation

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd project
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all dependencies listed in `package.json`, including:
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide icons

### Step 3: Verify Installation

```bash
npm run typecheck
```

This should complete without errors. If you see TypeScript errors, verify your Node.js version and try deleting `node_modules` and running `npm install` again.

## Development

### Starting the Dev Server

```bash
npm run dev
```

The application will be available at:
- **Local**: http://localhost:3000
- **Network**: http://[your-ip]:3000

The dev server includes:
- Hot module replacement (HMR)
- Fast refresh for React components
- TypeScript type checking
- Tailwind CSS compilation

### Project Commands

```bash
# Development server
npm run dev

# Type checking only (no build)
npm run typecheck

# Production build
npm run build

# Start production server (after build)
npm start

# Lint code
npm run lint
```

## Project Structure Explained

```
project/
├── app/                          # Next.js 13 App Router
│   ├── layout.tsx               # Root layout (ConfigProvider + SeoReceipt)
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles + Tailwind imports
│   ├── catalog/                 # Catalog pages
│   │   ├── page.tsx            # Catalog landing
│   │   └── [category]/         # Dynamic category routes
│   │       ├── page.tsx        # Category page with products
│   │       └── [product]/      # Dynamic product routes
│   │           └── page.tsx    # Individual product page
│   ├── best-practices/         # SEO configuration showcase
│   │   └── page.tsx            # Best practices documentation
│   └── api/                    # API routes
│       ├── robots/             # robots.txt endpoint
│       │   └── route.ts
│       └── sitemap/            # XML sitemap endpoint
│           └── route.ts
│
├── components/                  # React components
│   ├── SeoReceipt.tsx          # Real-time SEO feedback panel
│   ├── DemoChips.tsx           # Parameter demo buttons
│   ├── Navigation.tsx          # Site navigation
│   ├── Breadcrumbs.tsx         # Breadcrumb navigation
│   ├── playground/             # Pattern gallery & best practices components
│   │   ├── PatternCard.tsx     # Individual pattern display
│   │   ├── PatternFilter.tsx   # Pattern filtering and search
│   │   ├── PatternCategory.tsx # Collapsible category sections
│   │   ├── ParamPolicyEditor.tsx
│   │   ├── PaginationSettings.tsx
│   │   ├── RobotsPreview.tsx
│   │   └── SitemapTable.tsx
│   └── ui/                     # shadcn/ui component library
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── ... (many more)
│
├── lib/                        # Business logic (framework-agnostic)
│   ├── rules/                  # SEO rule engines
│   │   ├── canonical.ts        # Core SEO decision engine
│   │   ├── params.ts           # Parameter classification
│   │   ├── robots.ts           # robots.txt generation
│   │   ├── sitemap.ts          # Sitemap generation
│   │   └── hreflang.ts         # Hreflang logic
│   ├── catalog/                # Demo catalog data access
│   │   └── data.ts
│   ├── config/                 # Configuration management
│   │   └── provider.tsx        # React Context provider
│   ├── meta/                   # Metadata utilities
│   │   └── metadata.ts
│   └── utils/                  # Utility functions
│       ├── url-diff.ts         # URL comparison
│       └── utils.ts            # General utilities
│
├── data/                       # Static JSON data
│   ├── rules.json              # SEO configuration
│   └── catalog.json            # Demo products
│
├── docs/                       # Documentation
│   ├── architecture.md
│   ├── seo-logic.md
│   ├── components.md
│   ├── setup.md (this file)
│   └── extending.md
│
├── public/                     # Static assets
│
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project overview
```

## Configuration Files

### package.json

Defines dependencies and npm scripts:
- `next`: 13.5.1
- `react`: 18.2.0
- `typescript`: 5.2.2
- Many UI and utility libraries

### tsconfig.json

TypeScript configuration:
- Target: ES2017
- Strict mode enabled
- Path aliases: `@/` maps to root

### tailwind.config.ts

Tailwind CSS configuration:
- Content paths for scanning classes
- Theme extensions (colors, animations)
- Plugins: tailwindcss-animate

### next.config.js

Next.js configuration:
- Default settings (mostly)
- Could add redirects, rewrites here

## Environment Setup

### VS Code Configuration

Create `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

### ESLint Configuration

The project uses `.eslintrc.json`:
```json
{
  "extends": "next/core-web-vitals"
}
```

This enables Next.js-specific linting rules.

## Development Workflow

### 1. Make Changes

Edit files in `app/`, `components/`, or `lib/`:

```bash
# Example: Edit a component
code components/SeoReceipt.tsx
```

### 2. See Changes Immediately

Next.js dev server has Fast Refresh:
- Component changes update instantly
- No full page reload
- State preserved when possible

### 3. Check Types

```bash
npm run typecheck
```

Fix any TypeScript errors before committing.

### 4. Test Manually

Navigate to the changed page:
- Click demo chips to test parameters
- View SEO Receipt to verify logic
- Test on mobile viewport

### 5. Build Before Committing

```bash
npm run build
```

Ensures the production build works.

## Common Development Tasks

### Adding a New Page

1. Create file in `app/`:
   ```tsx
   // app/my-page/page.tsx
   export default function MyPage() {
     return <div>My new page</div>;
   }
   ```

2. Visit http://localhost:3000/my-page

3. SEO Receipt automatically works on your page

### Adding a New Component

1. Create file in `components/`:
   ```tsx
   // components/MyComponent.tsx
   'use client';  // If using hooks

   export function MyComponent() {
     return <div>My component</div>;
   }
   ```

2. Import and use:
   ```tsx
   import { MyComponent } from '@/components/MyComponent';
   ```

### Modifying SEO Logic

1. Edit `lib/rules/canonical.ts`

2. Check trace in SEO Receipt to verify

3. Update tests if needed

### Adding a New Parameter Rule

1. Edit `data/rules.json`:
   ```json
   {
     "name": "my_param",
     "policy": "stable",
     "description": "My parameter description"
   }
   ```

2. Restart dev server to pick up changes

3. Rule is automatically applied

### Styling with Tailwind

Use Tailwind classes directly:
```tsx
<div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
  Content
</div>
```

VS Code IntelliSense shows available classes.

## Debugging

### TypeScript Errors

```bash
npm run typecheck
```

Shows all type errors with file locations.

### React Errors

Check browser console (F12):
- Red errors show stack traces
- Click file names to see source

### SEO Logic Issues

1. Open SEO Receipt
2. Click "Rule Trace" tab
3. Review step-by-step decisions
4. Look for unexpected behavior

### Build Errors

```bash
npm run build
```

Shows all compilation errors.

## Hot Reload Issues

If hot reload stops working:

1. Save the file again
2. Refresh browser (Cmd+R / Ctrl+R)
3. Restart dev server:
   ```bash
   # Stop with Ctrl+C
   npm run dev
   ```

## Performance Tips

### Dev Server

The dev server is not optimized for performance:
- Slow initial page load (compiling)
- Faster after first load
- Production builds are much faster

### Tailwind CSS

First build is slow (generates all classes):
- Subsequent builds are faster
- Production builds are optimized

## Testing Your Changes

### Manual Testing Checklist

- [ ] Visit homepage
- [ ] Click through catalog pages
- [ ] Test parameter combinations with chips
- [ ] Check SEO Receipt updates
- [ ] Test on mobile viewport
- [ ] Verify robots.txt at /api/robots
- [ ] Verify sitemap at /api/sitemap
- [ ] Test best practices sections
- [ ] Run `npm run build` successfully

### Browser Testing

Test in multiple browsers:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if on Mac)

## Common Issues

### Port Already in Use

```
Error: Port 3000 is already in use
```

Solution:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill
# Or use a different port
PORT=3001 npm run dev
```

### Module Not Found

```
Error: Cannot find module '@/components/...'
```

Solution:
```bash
# Restart TypeScript server in VS Code
Cmd+Shift+P → "TypeScript: Restart TS Server"

# Or restart dev server
```

### Tailwind Classes Not Applying

Solution:
```bash
# Delete .next folder and rebuild
rm -rf .next
npm run dev
```

### TypeScript Errors After Update

Solution:
```bash
# Rebuild TypeScript
npm run typecheck

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

## Production Build

### Building

```bash
npm run build
```

Creates optimized production build in `.next/` folder.

### Starting Production Server

```bash
npm start
```

Serves the built application on port 3000.

### Build Output

```
Route (app)                    Size     First Load JS
┌ ○ /                         189 B          86.2 kB
├ ○ /catalog                  1.72 kB        87.7 kB
├ ● /catalog/[category]       5.21 kB        99.5 kB
...
```

Legend:
- `○` Static (generated at build time)
- `●` SSG (static site generation)
- `λ` Server (server-side rendering)

## Next Steps

- Read [Architecture](./architecture.md) to understand the system design
- Read [SEO Logic](./seo-logic.md) to understand decision algorithms
- Read [Components](./components.md) to understand UI components
- Read [Extending](./extending.md) to learn how to add features

## Getting Help

### Check Documentation

1. Start with [README](../README.md)
2. Review [Architecture](./architecture.md) for system overview
3. Check [SEO Logic](./seo-logic.md) for decision flow
4. Review [Components](./components.md) for UI details

### Debug with SEO Receipt

The SEO Receipt is your best debugging tool:
- Shows complete decision trace
- Explains every step
- Highlights issues

### Check the Code

All business logic is in `lib/rules/`:
- `canonical.ts` - Main decision engine
- `params.ts` - Parameter classification
- `robots.ts` - Robots.txt logic
- `sitemap.ts` - Sitemap generation

Code is well-commented and type-safe.
