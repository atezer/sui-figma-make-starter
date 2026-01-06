# 🎨 SUI Design System Strategy & Implementation Guide

## 📋 Table of Contents

1. [Design System Priority](#design-system-priority)
2. [Component Development Strategy](#component-development-strategy)
3. [Technical Debt Tracking](#technical-debt-tracking)
4. [Migration Roadmap](#migration-roadmap)
5. [Implementation Guidelines](#implementation-guidelines)

---

## 🎯 Design System Priority

### **Priority Hierarchy**

```
┌─────────────────────────────────────────────┐
│  1️⃣  SUI (Sahibinden UI) - PRIMARY          │
│  ✅ Always use SUI components first         │
│  ✅ All SUI tokens are available (~1349)    │
│  ✅ Custom design system for Sahibinden     │
└─────────────────────────────────────────────┘
                    ↓
         If component not available
                    ↓
┌─────────────────────────────────────────────┐
│  2️⃣  Shadcn UI - FALLBACK ONLY              │
│  ⚠️  Mark as TECHNICAL DEBT                 │
│  ⚠️  Must be migrated to SUI later          │
│  ⚠️  Document in TECHNICAL_DEBT.md          │
└─────────────────────────────────────────────┘
                    ↓
         Track and migrate
                    ↓
┌─────────────────────────────────────────────┐
│  3️⃣  Migration to SUI                       │
│  🔄 Design SUI component                    │
│  🔄 Replace Shadcn UI with SUI              │
│  🔄 Remove technical debt                   │
└─────────────────────────────────────────────┘
```

---

## 🏗️ Component Development Strategy

### **Step-by-Step Process**

#### **Before Creating Any Component:**

```typescript
// ✅ CORRECT WORKFLOW
1. Check if SUI has this component
   → Check /src/styles/theme.css for component tokens
   → Look for --Component-[name]-* tokens
   
2. If SUI tokens exist:
   ✅ Use SUI tokens ONLY
   ✅ Build component with SUI design system
   ✅ Follow SUI naming conventions
   
3. If SUI tokens DON'T exist:
   ⚠️  Use Shadcn UI as TEMPORARY solution
   ⚠️  Mark as TECHNICAL DEBT immediately
   ⚠️  Add to TECHNICAL_DEBT.md
   ⚠️  Create issue for SUI migration
```

#### **Decision Tree:**

```
Need to create a component?
    │
    ├─ SUI tokens available? ──YES──> ✅ Use SUI
    │                                  └─> DONE
    │
    └─ SUI tokens available? ──NO───> ⚠️  Use Shadcn UI
                                       ├─> Mark as TECH DEBT
                                       ├─> Document in TECHNICAL_DEBT.md
                                       └─> Plan SUI migration
```

---

## 📊 Technical Debt Tracking

### **TECHNICAL_DEBT.md Structure**

Every Shadcn UI component usage MUST be documented:

```markdown
## 🚨 Active Technical Debt

### Button Component (Example)
- **Current State:** Using Shadcn UI Button
- **Reason:** SUI Button tokens not yet available
- **Created Date:** 2025-01-06
- **File Location:** `/src/app/components/Button.tsx`
- **SUI Tokens Needed:**
  - `--Component-button-primary-default-background`
  - `--Component-button-primary-default-on-contents`
  - `--Component-button-primary-hover-background`
  - etc.
- **Migration Priority:** 🔴 HIGH / 🟡 MEDIUM / 🟢 LOW
- **Estimated Effort:** 2 hours
- **Blocker:** Waiting for SUI button design
- **Migration Status:** ⏳ PENDING / 🔄 IN PROGRESS / ✅ COMPLETED

### [Next Component]
...
```

---

## 🎨 Available SUI Components

### **Currently Available in SUI (~1349 tokens)**

Based on `/src/styles/theme.css`, these components have SUI tokens:

#### ✅ **Fully Available (Use SUI ONLY)**

```css
/* Button Variants */
--Component-button-primary-*
--Component-button-secondary-*
--Component-button-ghost-*
--Component-button-outlined-*
--Component-button-text-*
--Component-button-destructive-*
--Component-button-link-*

/* Input Components */
--Component-input-*
--Component-otp-*
--Component-search-*
--Component-select-*

/* Form Controls */
--Component-checkbox-*
--Component-radio-*
--Component-switch-*

/* Feedback Components */
--Component-badge-*
--Component-chip-*
--Component-hint-*
--Component-tooltips-*
--Component-snack-*
--Component-inline-message-*

/* Navigation */
--Component-tabs-line-*
--Component-tabs-index-*
--Component-tabs-solid-*
--Component-breadcrumbs-*
--Component-pagination-*
--Component-stepper-*

/* Layout */
--Component-divider-*
--Component-label-*
--Component-rating-*
--Component-tile-*
--Component-caption-*
--Component-image-*

/* Web Components */
--Component-web-header-*
--Component-web-footer-*

/* Mobile Components */
--Component-mobile-input-*
--Component-mobile-select-*
--Component-mobile-bottom-sheet-*
--Component-mobile-nav-top-bar-*
--Component-mobile-bottom-appbar-*
--Component-mobile-search-bar-*
--Component-mobile-classified-grid-*
--Component-mobile-classified-list-*
--Component-mobile-filter-bar-*

/* Calendar & Date */
--Component-calendar-*
```

#### ⚠️ **Not Yet in SUI (Shadcn UI Fallback)**

```
❌ Dropdown Menu (no SUI tokens yet)
❌ Dialog/Modal (no SUI tokens yet)
❌ Sheet (no SUI tokens yet)
❌ Popover (check if tooltips can be used)
❌ Card (use Surface tokens)
❌ Table (no SUI tokens yet)
❌ Form (use Input + Label tokens)
❌ Accordion (no SUI tokens yet)
❌ Alert (use inline-message tokens)
❌ Avatar (use sizing tokens)
❌ Carousel (no SUI tokens yet)
❌ Command (no SUI tokens yet)
❌ Context Menu (no SUI tokens yet)
❌ Drawer (use bottom-sheet for mobile)
❌ Hover Card (use tooltips)
❌ Menu Bar (no SUI tokens yet)
❌ Navigation Menu (use tabs/breadcrumbs)
❌ Progress (no SUI tokens yet)
❌ Scroll Area (no SUI tokens yet)
❌ Separator (use divider tokens)
❌ Skeleton (no SUI tokens yet)
❌ Slider (no SUI tokens yet)
❌ Sonner (use snack tokens)
❌ Toast (use snack tokens)
❌ Toggle (use switch tokens)
❌ Toggle Group (no SUI tokens yet)
❌ Toolbar (no SUI tokens yet)
```

---

## 🔄 Migration Roadmap

### **Phase 1: Immediate (Use SUI)**

✅ Buttons → Use `--Component-button-*`  
✅ Inputs → Use `--Component-input-*`  
✅ Checkbox/Radio → Use `--Component-checkbox-*` / `--Component-radio-*`  
✅ Badge → Use `--Component-badge-*`  
✅ Tabs → Use `--Component-tabs-*`  
✅ Tooltips → Use `--Component-tooltips-*`  
✅ Labels → Use `--Component-label-*`  
✅ Divider → Use `--Component-divider-*`  

### **Phase 2: Shadcn Fallback (Mark as Tech Debt)**

⚠️ Dialog → Use Shadcn UI + MARK AS TECH DEBT  
⚠️ Dropdown Menu → Use Shadcn UI + MARK AS TECH DEBT  
⚠️ Table → Use Shadcn UI + MARK AS TECH DEBT  
⚠️ Progress → Use Shadcn UI + MARK AS TECH DEBT  

### **Phase 3: Migration to SUI**

🔄 Design missing SUI components  
🔄 Update theme.css with new tokens  
🔄 Replace Shadcn UI with SUI  
🔄 Remove from TECHNICAL_DEBT.md  

---

## 📝 Implementation Guidelines

### **1. Component File Header**

Every component must declare its design system:

```tsx
/**
 * @component ButtonPrimary
 * @design-system SUI ✅
 * @tokens
 *   - --Component-button-primary-default-background
 *   - --Component-button-primary-default-on-contents
 *   - --Component-button-primary-hover-background
 * @description Primary button using SUI design tokens
 */
export function ButtonPrimary({ children, ...props }) {
  return (
    <button
      style={{
        backgroundColor: 'var(--Component-button-primary-default-background)',
        color: 'var(--Component-button-primary-default-on-contents)',
      }}
      {...props}
    >
      {children}
    </button>
  );
}
```

```tsx
/**
 * @component Dialog
 * @design-system Shadcn UI ⚠️ TECHNICAL DEBT
 * @tech-debt-id TD-001
 * @reason SUI dialog tokens not yet available
 * @migration-priority HIGH
 * @created 2025-01-06
 * @file-location /src/app/components/Dialog.tsx
 * @description Temporary Shadcn UI dialog - MUST MIGRATE TO SUI
 */
import { Dialog } from "@/components/ui/dialog"
```

### **2. Comment Annotations**

```tsx
// ✅ SUI Component - No tech debt
<button style={{ 
  backgroundColor: 'var(--Component-button-primary-default-background)' 
}}>

// ⚠️ TECH DEBT (TD-001): Using Shadcn UI Dialog - SUI tokens not available yet
// TODO: Migrate to SUI when --Component-dialog-* tokens are added
// See: /docs/TECHNICAL_DEBT.md#TD-001
<Dialog>
```

### **3. Inline vs Component Files**

**When to use inline SUI styles:**
```tsx
// ✅ Simple elements with 1-3 SUI tokens
<div style={{
  padding: 'var(--Spacing-spacing-150)',
  backgroundColor: 'var(--Surface-background-level-0)',
  borderRadius: 'var(--Radius-radius-050)'
}}>
```

**When to create component files:**
```tsx
// ✅ Complex components with 5+ SUI tokens
// ✅ Reusable components
// ✅ Components with multiple states (hover, active, disabled)
// Create: /src/app/components/sui/ButtonPrimary.tsx
```

---

## 📂 Folder Structure

```
/src/app/components/
├── sui/                          # ✅ SUI Components (PRIMARY)
│   ├── buttons/
│   │   ├── ButtonPrimary.tsx
│   │   ├── ButtonSecondary.tsx
│   │   └── ButtonGhost.tsx
│   ├── forms/
│   │   ├── Input.tsx
│   │   ├── Checkbox.tsx
│   │   └── Radio.tsx
│   ├── feedback/
│   │   ├── Badge.tsx
│   │   ├── Chip.tsx
│   │   └── Snack.tsx
│   └── navigation/
│       ├── Tabs.tsx
│       └── Breadcrumbs.tsx
│
├── shadcn/                       # ⚠️ Shadcn UI (TECH DEBT ONLY)
│   ├── dialog.tsx               # TECH DEBT: TD-001
│   ├── dropdown-menu.tsx        # TECH DEBT: TD-002
│   └── table.tsx                # TECH DEBT: TD-003
│
└── README.md                     # Component usage guide
```

---

## 🚀 Quick Reference Card

### **When building a new feature:**

```
┌──────────────────────────────────────────────────────┐
│  STEP 1: Check SUI Availability                     │
│  ────────────────────────────────                    │
│  • Search theme.css for --Component-[name]-*        │
│  • Check this document's "Available SUI Components" │
└──────────────────────────────────────────────────────┘
                       ↓
         ┌─────────────┴─────────────┐
         │                           │
    ✅ Found                    ❌ Not Found
         │                           │
         ↓                           ↓
┌─────────────────┐        ┌──────────────────────┐
│  Use SUI Tokens │        │  Use Shadcn UI       │
│  ✅ APPROVED    │        │  ⚠️  TECH DEBT       │
│                 │        │                      │
│  • Import SUI   │        │  • Add to           │
│    tokens       │        │    TECHNICAL_DEBT   │
│  • Build with   │        │  • Comment in code  │
│    SUI styles   │        │  • Plan migration   │
└─────────────────┘        └──────────────────────┘
```

---

## 📖 Examples

### ✅ **CORRECT: Using SUI**

```tsx
// /src/app/components/sui/buttons/ButtonPrimary.tsx
/**
 * @design-system SUI ✅
 */
export function ButtonPrimary({ children, disabled, ...props }) {
  return (
    <button
      disabled={disabled}
      style={{
        backgroundColor: disabled 
          ? 'var(--Component-button-primary-disabled-background)'
          : 'var(--Component-button-primary-default-background)',
        color: disabled
          ? 'var(--Component-button-primary-disabled-on-contents)'
          : 'var(--Component-button-primary-default-on-contents)',
        padding: 'var(--Spacing-spacing-100) var(--Spacing-spacing-150)',
        borderRadius: 'var(--Radius-radius-050)',
        fontSize: 'var(--Type-Body-Regular-Font-size)',
        fontFamily: 'var(--Type-Font-family-primary)',
        fontWeight: 600,
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = 'var(--Component-button-primary-hover-background)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = 'var(--Component-button-primary-default-background)';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
```

### ⚠️ **FALLBACK: Using Shadcn UI (Tech Debt)**

```tsx
// /src/app/components/shadcn/dialog.tsx
/**
 * @design-system Shadcn UI ⚠️ TECHNICAL DEBT
 * @tech-debt-id TD-001
 * @reason SUI dialog tokens not yet designed/available
 * @created 2025-01-06
 * @migration-priority HIGH
 * @sui-tokens-needed
 *   - --Component-dialog-background
 *   - --Component-dialog-border
 *   - --Component-dialog-overlay-background
 *   - --Component-dialog-title-color
 *   - --Component-dialog-content-color
 * @description TEMPORARY Shadcn UI dialog component
 * TODO: Replace with SUI dialog when tokens are available
 * See: /docs/TECHNICAL_DEBT.md#TD-001
 */

// ⚠️ TECH DEBT: Using Shadcn UI Dialog
// This MUST be replaced with SUI when dialog tokens are added to theme.css
import { Dialog as ShadcnDialog } from "@/components/ui/dialog"

export function Dialog({ children, ...props }) {
  // ⚠️ Temporary Shadcn UI usage - marked as tech debt
  return <ShadcnDialog {...props}>{children}</ShadcnDialog>
}
```

---

## 🎯 Success Metrics

### **Design System Health Dashboard**

```
SUI Component Coverage:      ████████░░ 80%
Shadcn UI Tech Debt:         ██░░░░░░░░ 20%
Migration Velocity:          5 components/week
Tech Debt Age (avg):         2 weeks
Oldest Tech Debt:            TD-001 (4 weeks)

Goal: 100% SUI Coverage by Q2 2025
```

---

## 📚 Related Documents

- `/src/styles/README.md` - SUI Token Documentation
- `/src/styles/theme.css` - All SUI Design Tokens
- `/docs/TECHNICAL_DEBT.md` - Active Tech Debt Tracking
- `/ATTRIBUTIONS.md` - Third-party License Info

---

**Last Updated:** January 6, 2025  
**Maintained By:** Design System Team  
**Version:** 1.0.0
