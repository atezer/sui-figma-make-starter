# 🚀 Quick Start Guide - SUI Design System

> **Golden Rule:** Always use SUI first. Only use Shadcn UI if absolutely necessary, and track it as technical debt.

---

## ⚡ 30-Second Checklist

Before writing ANY component:

```
✅ 1. Check if SUI has tokens for this component
      → Search /src/styles/theme.css for --Component-[name]-*

✅ 2. SUI tokens exist?
      → YES: Use SUI tokens ✅
      → NO: Use Shadcn UI ⚠️ + Add to TECHNICAL_DEBT.md

✅ 3. Add proper documentation
      → JSDoc with @design-system tag
      → Inline comments for tech debt
```

---

## 🎨 Common SUI Tokens Quick Reference

### **Buttons**

```tsx
// Primary Button
<button style={{
  backgroundColor: 'var(--Component-button-primary-default-background)',
  color: 'var(--Component-button-primary-default-on-contents)',
  padding: 'var(--Spacing-spacing-100) var(--Spacing-spacing-150)',
  borderRadius: 'var(--Radius-radius-050)', // 8px
  fontSize: 'var(--Type-Body-Regular-Font-size)', // 14px
  fontFamily: 'var(--Type-Font-family-primary)', // SHBGrotesk
  fontWeight: 600,
  border: 'none'
}}>
  Click Me
</button>

// Hover state
onMouseEnter={(e) => {
  e.currentTarget.style.backgroundColor = 'var(--Component-button-primary-hover-background)';
}}
```

### **Typography**

```tsx
// Heading 1
<h1 style={{
  fontFamily: 'var(--Type-Heading-H1-Typeface)', // SHBGrotesk
  fontSize: 'var(--Type-Heading-H1-Font-size)', // 40px
  fontWeight: 700,
  color: 'var(--Text-primary)'
}}>

// Body Text
<p style={{
  fontSize: 'var(--Type-Body-Regular-Font-size)', // 14px
  color: 'var(--Text-secondary)',
  lineHeight: 1.5
}}>

// Small Text
<span style={{
  fontSize: 'var(--Type-Body-small-Regular-Font-size)', // 12px
  color: 'var(--Text-tertiary)'
}}>
```

### **Spacing**

```tsx
<div style={{
  padding: 'var(--Spacing-spacing-150)', // 24px
  gap: 'var(--Spacing-spacing-100)', // 16px
  margin: 'var(--Spacing-spacing-200)', // 32px
}}>
```

**Common Spacing Values:**
- `--Spacing-spacing-025`: 4px
- `--Spacing-spacing-050`: 8px
- `--Spacing-spacing-075`: 12px
- `--Spacing-spacing-100`: 16px
- `--Spacing-spacing-150`: 24px
- `--Spacing-spacing-200`: 32px
- `--Spacing-spacing-300`: 48px

### **Colors**

```tsx
// Background
<div style={{
  backgroundColor: 'var(--Surface-background-level-0)', // Main background
  backgroundColor: 'var(--Surface-background-level-1)', // Card background
}}>

// Text
<p style={{
  color: 'var(--Text-primary)',    // Main text (80% opacity)
  color: 'var(--Text-secondary)',  // Secondary text (64% opacity)
  color: 'var(--Text-tertiary)',   // Tertiary text (44% opacity)
}}>

// Borders
<div style={{
  border: `var(--Border-Stroke-border-01) solid var(--Border-primary)`,
  borderColor: 'var(--Border-alpha-08)', // Subtle borders
}}>
```

### **Border Radius**

```tsx
<div style={{
  borderRadius: 'var(--Radius-radius-none)',    // 0px
  borderRadius: 'var(--Radius-radius-025)',     // 4px
  borderRadius: 'var(--Radius-radius-050)',     // 8px
  borderRadius: 'var(--Radius-radius-100)',     // 16px
  borderRadius: 'var(--Radius-radius-full)',    // 9999px
}}>
```

### **Shadows**

```tsx
<div style={{
  boxShadow: `
    var(--Depth-component-card-x) 
    var(--Depth-component-card-y) 
    var(--Depth-component-card-blur) 
    var(--Depth-component-card-spread) 
    var(--Depth-component-card-Color)
  `
}}>
```

---

## 📋 Component Templates

### **SUI Component Template**

```tsx
/**
 * @component [ComponentName]
 * @design-system SUI ✅
 * @tokens
 *   - --Component-[name]-[variant]-[state]-background
 *   - --Component-[name]-[variant]-[state]-on-contents
 * @description [Description]
 */

export function ComponentName({ children, ...props }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--Component-[name]-default-background)',
        color: 'var(--Component-[name]-default-on-contents)',
        padding: 'var(--Spacing-spacing-100)',
        borderRadius: 'var(--Radius-radius-050)',
        fontFamily: 'var(--Type-Font-family-primary)',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
```

### **Shadcn UI Fallback Template (Tech Debt)**

```tsx
/**
 * @component [ComponentName]
 * @design-system Shadcn UI ⚠️ TECHNICAL DEBT
 * @tech-debt-id TD-XXX
 * @reason SUI [component] tokens not yet available
 * @created [DATE]
 * @migration-priority HIGH/MEDIUM/LOW
 * @description TEMPORARY Shadcn UI component - MUST MIGRATE TO SUI
 * TODO: Replace with SUI when tokens are available
 * See: /docs/TECHNICAL_DEBT.md#TD-XXX
 */

// ⚠️ TECH DEBT (TD-XXX): Using Shadcn UI [Component]
// Reason: SUI tokens not available yet
// See: /docs/TECHNICAL_DEBT.md#TD-XXX
import { Component } from "@/components/ui/component"

export function ComponentName({ children, ...props }) {
  // ⚠️ Temporary Shadcn UI usage - marked as tech debt
  return <Component {...props}>{children}</Component>
}
```

---

## 🔍 Available SUI Components

### ✅ **Use These (SUI Tokens Available)**

- ✅ Buttons (all variants)
- ✅ Input, OTP, Search, Select
- ✅ Checkbox, Radio, Switch
- ✅ Badge, Chip, Label
- ✅ Tabs (line, index, solid)
- ✅ Breadcrumbs, Pagination
- ✅ Divider, Rating
- ✅ Tooltips, Hint, Snack
- ✅ Inline Message
- ✅ Calendar, Stepper
- ✅ Web Header/Footer
- ✅ Mobile components (nav, bottom sheet, search bar, etc.)

### ⚠️ **Avoid These (No SUI Tokens - Use Shadcn as Fallback)**

- ⚠️ Dialog/Modal → Mark as TD-XXX
- ⚠️ Dropdown Menu → Mark as TD-XXX
- ⚠️ Table → Mark as TD-XXX
- ⚠️ Accordion → Mark as TD-XXX
- ⚠️ Progress → Mark as TD-XXX
- ⚠️ Skeleton → Mark as TD-XXX
- ⚠️ Command → Mark as TD-XXX
- ⚠️ Carousel → Mark as TD-XXX

---

## 🎯 Decision Flowchart

```
Need to build a component?
         │
         ▼
Search theme.css for
--Component-[name]-*
         │
    ┌────┴────┐
    │ Found?  │
    └────┬────┘
         │
    ┌────┴────┐
    │         │
   YES       NO
    │         │
    ▼         ▼
┌──────┐  ┌──────────────┐
│ SUI  │  │ Shadcn UI    │
│  ✅  │  │  ⚠️ Tech     │
└──────┘  │  Debt         │
    │     └──────────────┘
    │          │
    ▼          ▼
  Code    1. Add TD-XXX
   it!    2. Comment code
          3. Track in docs
          4. Plan migration
```

---

## 📚 Full Documentation

- **Strategy:** `/docs/SUI_DESIGN_SYSTEM_STRATEGY.md`
- **Tech Debt:** `/docs/TECHNICAL_DEBT.md`
- **SUI Tokens:** `/src/styles/README.md`
- **Token File:** `/src/styles/theme.css`
- **Attributions:** `/ATTRIBUTIONS.md`

---

## 🆘 Quick Help

**Q: How do I find the right token?**  
A: Search `/src/styles/theme.css` for `--Component-[component-name]-`

**Q: SUI doesn't have the component I need!**  
A: Use Shadcn UI temporarily, then:
1. Create entry in `/docs/TECHNICAL_DEBT.md`
2. Add JSDoc `@tech-debt-id TD-XXX`
3. Add inline comment `// ⚠️ TECH DEBT (TD-XXX)`
4. Plan migration to SUI

**Q: Can I use raw CSS values like `16px`?**  
A: ❌ NO! Always use SUI tokens: `var(--Spacing-spacing-100)`

**Q: Can I use Tailwind classes like `text-lg`?**  
A: ❌ NO! Use inline styles with SUI tokens

**Q: Where do I put SUI components?**  
A: `/src/app/components/sui/[category]/Component.tsx`

**Q: Where do I put Shadcn UI components?**  
A: `/src/app/components/shadcn/component.tsx` (mark as tech debt!)

---

**Last Updated:** January 6, 2025  
**Version:** 1.0.0
