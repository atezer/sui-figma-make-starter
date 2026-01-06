# 📁 Component Organization Guide

## Current Structure (Before Migration)

```
/src/app/components/
├── ui/                          # ⚠️ Shadcn UI components (48 files)
│   ├── accordion.tsx
│   ├── alert-dialog.tsx
│   ├── alert.tsx
│   ├── avatar.tsx
│   ├── badge.tsx
│   ├── button.tsx
│   ├── calendar.tsx
│   ├── card.tsx
│   ├── checkbox.tsx
│   ├── dialog.tsx
│   ├── dropdown-menu.tsx
│   ├── form.tsx
│   ├── input.tsx
│   ├── label.tsx
│   ├── select.tsx
│   ├── switch.tsx
│   ├── table.tsx
│   ├── tabs.tsx
│   ├── tooltip.tsx
│   └── ... (and 29 more)
│
└── figma/
    └── ImageWithFallback.tsx    # ✅ System component (protected)
```

---

## ⚠️ IMPORTANT: DO NOT DELETE Shadcn UI Files

**These files are ALREADY INSTALLED and may be used in the codebase:**

1. **Keep all `/src/app/components/ui/*` files**
2. **Use them when SUI components are not available**
3. **Mark usage as technical debt** when importing
4. **Plan migration** to SUI components

---

## Recommended Migration Strategy

### **Phase 1: Identify Current Usage**

```bash
# Find which Shadcn UI components are actually being used
grep -r "from.*components/ui" src/app --exclude-dir=components
```

### **Phase 2: Document as Tech Debt**

For each Shadcn UI component found in use:
1. Add entry to `/docs/TECHNICAL_DEBT.md`
2. Add JSDoc annotation to the file using it
3. Add inline comment
4. Plan SUI alternative

### **Phase 3: Build SUI Alternatives**

Create SUI components in parallel:

```
/src/app/components/
├── sui/                         # ✅ NEW: SUI components
│   ├── buttons/
│   │   ├── ButtonPrimary.tsx
│   │   ├── ButtonSecondary.tsx
│   │   └── ButtonGhost.tsx
│   ├── forms/
│   │   ├── Input.tsx
│   │   ├── Checkbox.tsx
│   │   └── Radio.tsx
│   └── feedback/
│       ├── Badge.tsx
│       └── Snack.tsx
│
└── ui/                          # ⚠️ Keep for now (Tech Debt)
    └── ... (existing Shadcn UI files)
```

### **Phase 4: Replace One by One**

```tsx
// BEFORE (Tech Debt)
import { Button } from "@/components/ui/button"

// AFTER (SUI)
import { ButtonPrimary } from "@/components/sui/buttons/ButtonPrimary"
```

---

## Component Mapping: Shadcn UI → SUI

### ✅ **Can Replace NOW (SUI tokens available)**

| Shadcn UI File | SUI Alternative | Tokens Available |
|----------------|-----------------|------------------|
| `button.tsx` | Create in `sui/buttons/` | ✅ `--Component-button-*` |
| `input.tsx` | Create in `sui/forms/` | ✅ `--Component-input-*` |
| `checkbox.tsx` | Create in `sui/forms/` | ✅ `--Component-checkbox-*` |
| `radio-group.tsx` | Create in `sui/forms/` | ✅ `--Component-radio-*` |
| `switch.tsx` | Create in `sui/forms/` | ✅ `--Component-switch-*` |
| `badge.tsx` | Create in `sui/feedback/` | ✅ `--Component-badge-*` |
| `label.tsx` | Create in `sui/forms/` | ✅ `--Component-label-*` |
| `tabs.tsx` | Create in `sui/navigation/` | ✅ `--Component-tabs-*` |
| `tooltip.tsx` | Create in `sui/feedback/` | ✅ `--Component-tooltips-*` |
| `separator.tsx` | Create in `sui/layout/` | ✅ `--Component-divider-*` |
| `breadcrumb.tsx` | Create in `sui/navigation/` | ✅ `--Component-breadcrumbs-*` |
| `pagination.tsx` | Create in `sui/navigation/` | ✅ `--Component-pagination-*` |
| `calendar.tsx` | Create in `sui/forms/` | ✅ `--Component-calendar-*` |

### ⚠️ **Keep for NOW (No SUI tokens yet)**

| Shadcn UI File | Status | Action |
|----------------|--------|--------|
| `dialog.tsx` | ⚠️ Tech Debt | Keep, mark usage as TD-XXX |
| `alert-dialog.tsx` | ⚠️ Tech Debt | Keep, mark usage as TD-XXX |
| `dropdown-menu.tsx` | ⚠️ Tech Debt | Keep, mark usage as TD-XXX |
| `table.tsx` | ⚠️ Tech Debt | Keep, mark usage as TD-XXX |
| `accordion.tsx` | ⚠️ Tech Debt | Keep, mark usage as TD-XXX |
| `alert.tsx` | 🔄 Can use `inline-message` | Consider SUI alternative |
| `avatar.tsx` | 🔄 Use sizing tokens | Build with SUI sizing |
| `card.tsx` | 🔄 Use Surface tokens | Build with SUI surface |
| `form.tsx` | 🔄 Compose from inputs | Use SUI input + label |
| `progress.tsx` | ⚠️ Tech Debt | Keep for now |
| `skeleton.tsx` | ⚠️ Tech Debt | Keep for now |
| `slider.tsx` | ⚠️ Tech Debt | Keep for now |
| `sheet.tsx` | 🔄 Mobile bottom-sheet | Use SUI mobile component |
| `drawer.tsx` | 🔄 Mobile bottom-sheet | Use SUI mobile component |
| `sonner.tsx` | 🔄 Snack component | Use SUI snack |
| `popover.tsx` | 🔄 Tooltip variant | Use SUI tooltip |
| `hover-card.tsx` | 🔄 Tooltip variant | Use SUI tooltip |
| `context-menu.tsx` | ⚠️ Tech Debt | Keep for now |
| `command.tsx` | ⚠️ Tech Debt | Keep for now |
| `carousel.tsx` | ⚠️ Tech Debt | Keep for now |
| `scroll-area.tsx` | ⚠️ Tech Debt | Keep for now |
| `menubar.tsx` | ⚠️ Tech Debt | Keep for now |
| `navigation-menu.tsx` | 🔄 Use tabs/breadcrumbs | Compose from SUI |
| `sidebar.tsx` | ⚠️ Tech Debt | Keep for now |
| `toggle.tsx` | 🔄 Use switch | Use SUI switch |
| `toggle-group.tsx` | ⚠️ Tech Debt | Keep for now |
| `resizable.tsx` | ⚠️ Tech Debt | Keep for now |
| `collapsible.tsx` | ⚠️ Tech Debt | Keep for now |
| `aspect-ratio.tsx` | ⚠️ Tech Debt | Keep for now |
| `input-otp.tsx` | ✅ SUI OTP available | Create SUI version |
| `select.tsx` | ✅ SUI Select available | Create SUI version |
| `textarea.tsx` | ✅ Use input tokens | Create SUI version |

---

## Action Plan

### **Immediate (Week 1)**

1. ✅ Keep all `/src/app/components/ui/*` files
2. ✅ Create `/src/app/components/sui/` folder structure
3. ✅ Document all Shadcn UI usage as tech debt
4. ✅ Build first 5 SUI components:
   - ButtonPrimary
   - Input
   - Checkbox
   - Badge
   - Label

### **Short Term (Month 1)**

5. 🔄 Build 10 more SUI components (see table above)
6. 🔄 Replace Shadcn UI imports with SUI in new features
7. 🔄 Keep Shadcn UI as fallback for existing features

### **Long Term (Quarter 1)**

8. ⏳ Design missing SUI components (Dialog, Table, etc.)
9. ⏳ Add new tokens to theme.css
10. ⏳ Replace all Shadcn UI usage
11. ⏳ Optionally remove unused Shadcn UI files

---

## Usage Rules

### ✅ **For New Features:**

```tsx
// 1. Check if SUI component exists
import { ButtonPrimary } from "@/components/sui/buttons/ButtonPrimary"

// 2. If not, use Shadcn UI BUT mark as tech debt
/**
 * @tech-debt-id TD-001
 * @design-system Shadcn UI ⚠️ TECHNICAL DEBT
 */
import { Dialog } from "@/components/ui/dialog"
```

### ⚠️ **For Existing Features:**

```tsx
// Keep using Shadcn UI components that are already in use
// But add to tech debt tracker for future migration
import { Button } from "@/components/ui/button"
```

---

## File Naming Conventions

### **SUI Components:**

```
/src/app/components/sui/
├── buttons/
│   ├── ButtonPrimary.tsx        # PascalCase, descriptive
│   ├── ButtonSecondary.tsx
│   └── ButtonGhost.tsx
├── forms/
│   ├── Input.tsx                # Single word if generic
│   ├── InputOTP.tsx             # Abbreviations uppercase
│   └── Checkbox.tsx
```

### **Shadcn UI (Keep as-is):**

```
/src/app/components/ui/
├── button.tsx                   # Keep kebab-case (Shadcn style)
├── input.tsx
└── dialog.tsx
```

---

## Documentation Requirements

Every SUI component MUST have:

```tsx
/**
 * @component ButtonPrimary
 * @design-system SUI ✅
 * @category Buttons
 * @tokens
 *   - --Component-button-primary-default-background
 *   - --Component-button-primary-default-on-contents
 *   - --Component-button-primary-hover-background
 *   - --Component-button-primary-pressed-background
 *   - --Component-button-primary-disabled-background
 * @description
 * Primary action button using SUI design tokens.
 * Supports hover, pressed, and disabled states.
 * 
 * @example
 * ```tsx
 * <ButtonPrimary onClick={handleClick}>
 *   Click Me
 * </ButtonPrimary>
 * ```
 */
export function ButtonPrimary({ children, disabled, ...props }) {
  // implementation
}
```

---

## Summary

**DO NOT DELETE** the `/src/app/components/ui/` folder. These Shadcn UI components:
- ✅ Are already installed and may be in use
- ✅ Serve as fallback when SUI is not available
- ✅ Should be gradually replaced with SUI components
- ✅ Must be documented as technical debt when used

**Follow the migration strategy** in `/docs/SUI_DESIGN_SYSTEM_STRATEGY.md`

---

**Last Updated:** January 6, 2025  
**Status:** Planning Phase
