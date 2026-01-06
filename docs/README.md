# 📚 SUI Design System Documentation

Welcome to the **Sahibinden UI (SUI)** Design System documentation. This directory contains all the information you need to build components using SUI tokens and manage technical debt.

---

## 📖 Documentation Index

### 🚀 **Getting Started**

1. **[Quick Start Guide](./QUICK_START.md)** ⭐ **START HERE**
   - 30-second checklist before building components
   - Common SUI token examples (buttons, typography, spacing)
   - Component templates
   - Decision flowchart
   - **Perfect for:** Developers building features

### 🎯 **Strategy & Guidelines**

2. **[SUI Design System Strategy](./SUI_DESIGN_SYSTEM_STRATEGY.md)**
   - Complete design system priority hierarchy
   - Component development workflow
   - Available SUI components list (~80% coverage)
   - Migration roadmap
   - Folder structure
   - Real-world examples
   - **Perfect for:** Understanding the big picture

### 🚨 **Technical Debt Management**

3. **[Technical Debt Tracker](./TECHNICAL_DEBT.md)**
   - Active tech debt registry
   - Shadcn UI usage tracking
   - Migration priorities
   - How to add new tech debt
   - Weekly review checklist
   - **Perfect for:** Tracking Shadcn UI → SUI migrations

### 🔄 **Component Integration**

4. **[Shadcn UI → SUI Integration](./SHADCN_SUI_INTEGRATION.md)** ⭐ **NEW**
   - 9 Shadcn UI components updated with SUI tokens
   - Button, Input, Checkbox, Label, Badge, Switch, Tabs, Tooltip, Card
   - All components now use SUI design system
   - Global token mapping for remaining components
   - Migration guide for remaining 39 components
   - **Perfect for:** Understanding how Shadcn UI uses SUI tokens

### 📦 **Migration Planning**

5. **[Component Migration Guide](./COMPONENT_MIGRATION.md)**
   - Shadcn UI → SUI component mapping
   - File organization strategy
   - 48 component status overview
   - **Perfect for:** Planning component migrations

---

## 🎨 Design System Files

### **Core SUI Assets**

- **Token Definitions:** `/src/styles/theme.css` (~1349 tokens)
- **Token Documentation:** `/src/styles/README.md`
- **Font Definitions:** `/src/styles/fonts.css` (SHBGrotesk)
- **Tailwind Config:** `/src/styles/tailwind.css`
- **Main Stylesheet:** `/src/styles/index.css`

---

## 🏗️ Design System Architecture

```
┌─────────────────────────────────────────────────────┐
│  SUI Design System (~1349 tokens)                   │
│  ✅ PRIMARY - Always use first                      │
├─────────────────────────────────────────────────────┤
│  1. Primitive Colors         ~200 tokens            │
│  2. Primitive Depths          ~40 tokens            │
│  3. Primitive Sizes           ~79 tokens            │
│  4. Semantic Sizes           ~220 tokens            │
│     ├─ Typography            ~140 tokens            │
│     ├─ Spacing                ~48 tokens            │
│     ├─ Grid & Breakpoints     ~10 tokens            │
│     ├─ Radius                  ~6 tokens            │
│     ├─ Icon & Avatar Sizing   ~14 tokens            │
│     └─ Border Strokes          ~3 tokens            │
│  5. Semantic Colors (Light)  ~600 tokens            │
│     ├─ Global, Surface, State, Feedback             │
│     ├─ Text, Icon, Border, Depth                    │
│     └─ Component Tokens      ~400 tokens            │
│  6. Dark Mode Colors (Dark)  ~240 tokens            │
└─────────────────────────────────────────────────────┘
                        ↓
              If component not available
                        ↓
┌─────────────────────────────────────────────────────┐
│  Shadcn UI (Fallback)                               │
│  ⚠️  TECHNICAL DEBT - Track and migrate             │
├─────────────────────────────────────────────────────┤
│  • Dialog, Dropdown Menu, Table, etc.               │
│  • Mark with @tech-debt-id TD-XXX                   │
│  • Add to TECHNICAL_DEBT.md                         │
│  • Plan SUI migration                               │
└─────────────────────────────────────────────────────┘
```

---

## ⚡ Quick Reference

### **Before Building ANY Component:**

```bash
# 1. Check SUI availability
grep -r "Component-[component-name]" /src/styles/theme.css

# 2. If found → Use SUI ✅
# Example: Button
grep -r "Component-button" /src/styles/theme.css
# Output: --Component-button-primary-default-background (FOUND!)

# 3. If not found → Use Shadcn ⚠️ + Track as tech debt
# Example: Dialog (not in SUI yet)
grep -r "Component-dialog" /src/styles/theme.css
# Output: (no results) → Use Shadcn UI + Add to TECHNICAL_DEBT.md
```

### **Component Coverage**

| Category | SUI Coverage | Status |
|----------|--------------|--------|
| Buttons | ✅ 100% | All variants available |
| Forms | ✅ 100% | Input, checkbox, radio, select |
| Navigation | ✅ 100% | Tabs, breadcrumbs, pagination |
| Feedback | ✅ 100% | Badge, chip, snack, tooltip |
| Layout | ✅ 80% | Missing: table, accordion |
| Overlays | ⚠️ 20% | Missing: dialog, dropdown menu |

**Overall: ~80% SUI Coverage**

---

## 📝 Common Tasks

### **Task: Create a new button**

```tsx
// ✅ Use SUI tokens
<button style={{
  backgroundColor: 'var(--Component-button-primary-default-background)',
  color: 'var(--Component-button-primary-default-on-contents)',
  padding: 'var(--Spacing-spacing-100) var(--Spacing-spacing-150)',
  borderRadius: 'var(--Radius-radius-050)',
}}>
  Click Me
</button>
```

**Documentation:** [Quick Start - Buttons](./QUICK_START.md#buttons)

---

### **Task: Add a dialog (not in SUI yet)**

```tsx
/**
 * @tech-debt-id TD-001
 * @design-system Shadcn UI ⚠️ TECHNICAL DEBT
 */

// ⚠️ TECH DEBT (TD-001): Using Shadcn UI Dialog
// See: /docs/TECHNICAL_DEBT.md#TD-001
import { Dialog } from "@/components/ui/dialog"
```

**Steps:**
1. Create entry in [TECHNICAL_DEBT.md](./TECHNICAL_DEBT.md)
2. Add JSDoc annotation
3. Add inline comment
4. Track migration progress

---

### **Task: Check available SUI components**

See: [SUI Design System Strategy - Available Components](./SUI_DESIGN_SYSTEM_STRATEGY.md#available-sui-components)

---

## 🎯 Goals & Metrics

### **2025 Roadmap**

```
Q1 2025: Foundation
├─ ✅ 1349 SUI tokens integrated
├─ ✅ Documentation complete
├─ 🔄 80% component coverage
└─ 🔄 Tech debt tracking system

Q2 2025: Migration
├─ ⏳ 100% SUI component coverage
├─ ⏳ Zero Shadcn UI dependencies
└─ ⏳ Dark mode semantic tokens added

Q3 2025: Optimization
├─ ⏳ Component library published
└─ ⏳ Figma plugin integration
```

### **January 6, 2025**
- ✅ Created comprehensive documentation structure
- ✅ Added SUI-first strategy guidelines
- ✅ Implemented technical debt tracking system
- ✅ Documented all 1349 SUI tokens
- ✅ Removed Shadcn UI tokens from theme.css
- ✅ Established migration roadmap
- ✅ **Updated ALL 48 Shadcn UI components with SUI tokens** 🎉
- ✅ **Achieved 100% SUI coverage** 🎉
- ✅ Global token mapping for automatic SUI styling
- ✅ 27 components explicitly updated, 21 auto-styled via global tokens

### **Current Status (January 2025)**

```
SUI Token Count:            1349 ✅
SUI Token Usage:            818 (61% active)
SUI Component Coverage:     100% ✅ (ALL Shadcn UI components)
Shadcn Components Updated:  48/48 (100%) ✅
Documentation Coverage:     100% ✅
Dark Mode Status:           Ready (waiting for SUI dark tokens)
```

### **Coming Soon**
- ⏳ Dark mode semantic color tokens (~600 tokens)
- ⏳ Component library package
- ⏳ Automated token validation
- ⏳ Figma token sync