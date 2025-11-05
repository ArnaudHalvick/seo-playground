# Components Overview

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
├── Shop Landing (app/shop/page.tsx)
├── Category Page (app/shop/[category]/page.tsx)
│   ├── Breadcrumbs
│   ├── GenderFilter (gender navigation buttons)
│   ├── FilterSummaryBar (sticky filter display)
│   ├── FilterSidebar (color, size, price, sort filters)
│   └── Product Grid
├── Gender Filter Page (app/shop/[category]/for/[gender]/page.tsx)
│   ├── Breadcrumbs
│   ├── GenderFilter (with SEO education banner)
│   ├── FilterSummaryBar
│   ├── FilterSidebar (gender-aware size groups)
│   └── Product Grid
├── Product Page (app/shop/[category]/for/[gender]/[product]/page.tsx)
│   ├── Breadcrumbs (4-level hierarchy)
│   └── Product details with gender context
└── Best Practices (app/best-practices/page.tsx)
    ├── ParamPolicyEditor
    ├── PaginationSettings
    ├── RobotsPreview
    └── SitemapTable
```

## Core Components

The application uses a component-based architecture with clear separation between:

- **SEO Components**: Real-time SEO analysis and feedback
- **Filter Components**: E-commerce filtering interface
- **Catalog Components**: Product and category pages
- **Playground Components**: Interactive SEO pattern exploration
- **UI Components**: Reusable shadcn/ui component library

Each component is documented in detail in its respective section.

