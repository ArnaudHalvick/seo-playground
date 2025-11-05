# UI Component Library

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

## shadcn/ui Components

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

