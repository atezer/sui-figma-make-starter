# 🎨 SUI (Sahibinden UI) Design System - CSS Token Architecture

## 📁 File Structure

```
/src/styles/
├── index.css       → Main entry point (imports all styles)
├── fonts.css       → SHBGrotesk font face definitions
├── tailwind.css    → Tailwind CSS v4 configuration
└── theme.css       → SUI Design Tokens (~1300+ tokens)
```

## 🏗️ Token Hierarchy

### **theme.css** Structure

```
:root (Light Mode)
├── 1. Primitive Colors (~200 tokens)
│   ├── Global (black, white)
│   ├── Alpha Colors (8%, 12%, 24%, 32%, 44%, 64%, 80%, 88%)
│   ├── Gray Scale (40-900)
│   ├── Blue, Turquoise, Pastel Blue, Purple
│   ├── Green, Red, Orange, Yellow
│   ├── Sahibinden Brand Colors
│   └── S Pro, Param Güvende, Turkiye Colors
│
├── 2. Primitive Depths (~40 tokens)
│   ├── depth-1 through depth-4
│   ├── depth-2a, depth-2b
│   └── depth-3a, depth-3b
│
├── 3. Primitive Sizes (~79 tokens)
│   ├── Scale (0-9999px values)
│   └── Breakpoints (mobile, tablet, desktop)
│
├── 4. Semantic Sizes (~220 tokens)
│   ├── Breakpoints (responsive settings)
│   ├── Grid System (columns, gutters)
│   ├── Radius (none, 2px, 4px, 8px, 16px, full)
│   ├── Spacing (0-512px semantic scale)
│   ├── Sizing
│   │   ├── Icons (12-64px)
│   │   └── Avatars (24-64px)
│   ├── Border Strokes (0-2px)
│   └── Typography (~140 tokens)
│       ├── Font Families (primary, secondary)
│       ├── Font Weights (light, regular, semibold, bold, italic)
│       ├── Headings (H1-H6: 40px, 36px, 32px, 24px, 18px, 16px)
│       ├── Display (Display-1/2/3)
│       ├── Page & Section Titles
│       ├── Body Lead (16px)
│       ├── Body (14px)
│       ├── Body Small (12px)
│       ├── Body Tiny (10px)
│       └── Caption & Custom Styles
│
└── 5. Semantic Colors Light (~600 tokens)
    ├── Global (emphasis, primary, secondary, tertiary, brand)
    ├── Surface (background levels 0-3, disabled, error, warning, info, action)
    ├── State (hover, pressed, selected, disabled, focus)
    ├── Feedback (error, success, warning, info)
    ├── Text (primary, secondary, tertiary, disabled, links, etc.)
    ├── Icon (primary, secondary, tertiary, action, etc.)
    ├── Border (levels, alpha, focus, etc.)
    ├── Depth (surface, component shadows)
    └── Component Tokens (~400 tokens)
        ├── Label, Divider, Rating
        ├── Badge, Pagination, Chip
        ├── Checkbox, Radio, Switch
        ├── Tabs (line, index, solid)
        ├── Button (primary, secondary, ghost, etc.)
        ├── Input, OTP, Search, Select
        ├── Hint, Tooltips, Snack
        ├── Breadcrumbs, Stepper, Calendar
        ├── Caption, Image, Tile, Inline Message
        ├── Web Header/Footer
        └── Mobile Components
            ├── Input, Select, Bottom Sheet
            ├── Nav Top Bar, Bottom Appbar
            ├── Search Bar, Classified Grid/List
            └── Filter Bar

.dark (Dark Mode)
├── Primitive Colors Dark (~200 tokens)
│   ├── Inverted Alpha Colors
│   ├── Inverted Gray Scale
│   └── Dark-adjusted color palettes
│
└── Primitive Depths Dark (~40 tokens)
    └── Dark mode shadow adjustments

⏳ TO BE ADDED: Semantic Colors Dark (~600 tokens)
```

## 📊 Token Count Summary

```
✅ Primitive Colors (Light):       ~200 tokens
✅ Primitive Colors (Dark):        ~200 tokens
✅ Primitive Depths:                ~40 tokens
✅ Primitive Sizes:                 ~79 tokens
✅ Primitive Breakpoints:           ~10 tokens
✅ Semantic Sizes:                 ~220 tokens
✅ Semantic Colors (Light):        ~600 tokens
⏳ Semantic Colors (Dark):         ~600 tokens (pending)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TOTAL (Current):               ~1349 TOKENS 🎨
   TARGET (With Dark):            ~1949 TOKENS 🚀
```

## 🎯 Usage Guidelines

### Typography Example
```tsx
<h1 style={{
  fontFamily: 'var(--Type-Font-family-primary)',
  fontSize: 'var(--Type-Heading-H1-Font-size)',
  fontWeight: 'var(--Type-Font-weight-bold)',
  color: 'var(--Text-primary)'
}}>
  Page Title
</h1>

<p style={{
  fontSize: 'var(--Type-Body-Regular-Font-size)',
  color: 'var(--Text-secondary)'
}}>
  Body text content
</p>
```

### Spacing Example
```tsx
<div style={{
  padding: 'var(--Spacing-spacing-150)', // 24px
  gap: 'var(--Spacing-spacing-100)', // 16px
  marginBottom: 'var(--Spacing-spacing-200)' // 32px
}}>
  Card Content
</div>
```

### Colors Example
```tsx
<button style={{
  backgroundColor: 'var(--Component-button-primary-default-background)',
  color: 'var(--Component-button-primary-default-on-contents)',
  borderRadius: 'var(--Radius-radius-050)' // 8px
}}>
  Primary Button
</button>
```

### Border & Radius Example
```tsx
<div style={{
  border: `var(--Border-Stroke-border-01) solid var(--Border-primary)`,
  borderRadius: 'var(--Radius-radius-100)', // 16px
  boxShadow: 'var(--Depth-component-card-x) var(--Depth-component-card-y) var(--Depth-component-card-blur) var(--Depth-component-card-spread) var(--Depth-component-card-Color)'
}}>
  Card with Border & Shadow
</div>
```

## 🚫 Removed (Non-SUI Tokens)

The following Shadcn UI tokens have been **removed** to keep only SUI tokens:

- `--font-size: 16px;` (not part of SUI - use Typography tokens instead)
- `--background`, `--foreground`
- `--card`, `--card-foreground`
- `--popover`, `--popover-foreground`
- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--muted`, `--muted-foreground`
- `--accent`, `--accent-foreground`
- `--destructive`, `--destructive-foreground`
- `--border`, `--input`, `--ring`
- `--radius` (replaced with SUI Radius tokens)
- `--sidebar-*` (all sidebar tokens)
- `--chart-1` through `--chart-5`
- `--elevation-sm`
- `@theme inline` section (completely removed)

## 📚 Related Documentation

- **Design System Strategy:** `/docs/SUI_DESIGN_SYSTEM_STRATEGY.md`
- **Technical Debt Tracker:** `/docs/TECHNICAL_DEBT.md`
- **Component Migration Guide:** `/docs/COMPONENT_MIGRATION.md`
- **Shadcn UI Integration:** `/docs/SHADCN_SUI_INTEGRATION.md` ⭐ **NEW**
- **Quick Start Guide:** `/docs/QUICK_START.md`
- **Attributions:** `/ATTRIBUTIONS.md`

---

**Last Updated:** January 2025  
**Version:** SUI Design System v1.0  
**Total Tokens:** ~1349 (Light Mode Complete)