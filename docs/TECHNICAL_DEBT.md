# 🚨 Technical Debt Tracker - Shadcn UI Usage

> **Strategy:** SUI (Sahibinden UI) is the PRIMARY design system. Shadcn UI should ONLY be used as a temporary fallback when SUI components are not yet available. All Shadcn UI usage MUST be tracked here and migrated to SUI.

---

## 📊 Technical Debt Summary

```
Total Tech Debt Items:        0
High Priority:                0
Medium Priority:              0
Low Priority:                 0
In Progress:                  0
Completed (Last 30 days):     0

Target: Zero Shadcn UI components by Q2 2025
```

---

## 🚨 Active Technical Debt

> **Status Legend:**
> - 🔴 **HIGH**: Critical user-facing component, blocks SUI adoption
> - 🟡 **MEDIUM**: Important but not blocking
> - 🟢 **LOW**: Nice to have, low impact
>
> **Migration Status:**
> - ⏳ **PENDING**: Waiting for SUI design/tokens
> - 🔄 **IN PROGRESS**: Actively being migrated
> - ✅ **COMPLETED**: Migrated to SUI

---

### 📋 Template for New Tech Debt

```markdown
### TD-XXX: [Component Name]

**Status:** ⏳ PENDING / 🔄 IN PROGRESS / ✅ COMPLETED  
**Priority:** 🔴 HIGH / 🟡 MEDIUM / 🟢 LOW  
**Created:** YYYY-MM-DD  
**Updated:** YYYY-MM-DD  
**Assignee:** @username  

**Current Implementation:**
- Using: Shadcn UI [Component Name]
- File Location: `/src/app/components/shadcn/component.tsx`
- Lines: XX-XX
- Dependencies: [list any other tech debt items this depends on]

**Reason for Tech Debt:**
- SUI tokens for [component name] not yet designed
- Required for [feature/page name]
- Timeline constraints

**SUI Tokens Needed:**
\```css
--Component-[name]-[variant]-[state]-background
--Component-[name]-[variant]-[state]-on-contents
--Component-[name]-[variant]-[state]-border
[... add all needed tokens ...]
\```

**Migration Plan:**
1. [ ] Design SUI component tokens
2. [ ] Add tokens to `/src/styles/theme.css`
3. [ ] Create SUI component in `/src/app/components/sui/`
4. [ ] Replace Shadcn UI usage
5. [ ] Update tests
6. [ ] Remove Shadcn UI import
7. [ ] Mark as ✅ COMPLETED

**Effort Estimate:** X hours  
**Blocker:** [What's preventing migration?]  
**Target Completion:** YYYY-MM-DD  

**Related Issues:**
- #XXX - Design SUI [component]
- #XXX - Migrate [feature] to SUI

---
```

---

## 📝 Example Tech Debt Entries

### TD-000: Example Dialog Component

**Status:** ✅ COMPLETED  
**Priority:** 🔴 HIGH  
**Created:** 2025-01-01  
**Updated:** 2025-01-05  
**Completed:** 2025-01-05  
**Assignee:** @example  

**Current Implementation:**
- ~~Using: Shadcn UI Dialog~~
- ~~File Location: `/src/app/components/shadcn/dialog.tsx`~~
- **MIGRATED TO:** `/src/app/components/sui/Dialog.tsx`

**Resolution:**
- Added SUI dialog tokens to theme.css
- Built SUI Dialog component with full accessibility
- Replaced all Shadcn UI dialog usage
- Reduced bundle size by 3KB

**SUI Tokens Added:**
```css
--Component-dialog-overlay-background: var(--Color-alpha-alpha-black-64);
--Component-dialog-background: var(--Surface-background-level-1);
--Component-dialog-border: var(--Border-primary);
--Component-dialog-title-color: var(--Text-primary);
--Component-dialog-content-color: var(--Text-secondary);
```

**Completion Date:** 2025-01-05  
**Actual Effort:** 4 hours  

---

## 🎯 Migration Priorities

### **Q1 2025 Focus (High Priority)**

These components are critical and should be migrated first:

1. **Dialog/Modal** - Used in 15+ places
2. **Dropdown Menu** - Core navigation component
3. **Table** - Data display critical path
4. **Form** - All user input flows

### **Q2 2025 Focus (Medium Priority)**

5. **Card** - Can use Surface tokens as interim
6. **Accordion** - Limited usage
7. **Progress** - Nice to have
8. **Alert** - Can use inline-message tokens

### **Backlog (Low Priority)**

9. **Carousel** - Low usage
10. **Command** - Power user feature
11. **Skeleton** - Loading states
12. **Slider** - Limited use cases

---

## 📈 Migration Progress Tracking

### **Week of 2025-01-06**

| Component | Status | Progress | Notes |
|-----------|--------|----------|-------|
| _No active tech debt yet_ | - | - | Start with SUI first! |

### **Completed Migrations**

| Component | Completed Date | Effort (hours) | Impact |
|-----------|---------------|----------------|--------|
| _None yet_ | - | - | - |

---

## 🔍 How to Add Tech Debt

### **When you MUST use Shadcn UI:**

1. **Copy the template above** (TD-XXX)
2. **Assign next tech debt ID** (increment from last TD-XXX)
3. **Fill in all required fields**
4. **Add code comments** in the component file:
   ```tsx
   // ⚠️ TECH DEBT (TD-XXX): Using Shadcn UI [Component]
   // Reason: SUI tokens not available yet
   // See: /docs/TECHNICAL_DEBT.md#TD-XXX
   ```
5. **Add JSDoc annotation**:
   ```tsx
   /**
    * @design-system Shadcn UI ⚠️ TECHNICAL DEBT
    * @tech-debt-id TD-XXX
    * @reason SUI tokens not yet available
    */
   ```
6. **Commit with tech debt tag**:
   ```bash
   git commit -m "feat: Add [feature] using Shadcn UI [TECH-DEBT:TD-XXX]"
   ```

---

## 📅 Weekly Review Checklist

Every Monday, the team reviews:

- [ ] Any new tech debt added last week?
- [ ] Any tech debt older than 30 days? (escalate)
- [ ] Any blockers preventing migration?
- [ ] Any SUI tokens added that unblock migrations?
- [ ] Update migration velocity metrics
- [ ] Prioritize next week's migration targets

---

## 🎓 Learning Resources

### **Before using Shadcn UI, check these first:**

1. **SUI Component List**: `/docs/SUI_DESIGN_SYSTEM_STRATEGY.md#available-sui-components`
2. **SUI Token Reference**: `/src/styles/theme.css`
3. **SUI Token Docs**: `/src/styles/README.md`
4. **Ask Design Team**: Can we add this to SUI instead?

### **Shadcn UI → SUI Migration Examples:**

```tsx
// ❌ BEFORE (Shadcn UI - Tech Debt)
import { Button } from "@/components/ui/button"
<Button variant="default">Click me</Button>

// ✅ AFTER (SUI)
<button style={{
  backgroundColor: 'var(--Component-button-primary-default-background)',
  color: 'var(--Component-button-primary-default-on-contents)',
  padding: 'var(--Spacing-spacing-100) var(--Spacing-spacing-150)',
  borderRadius: 'var(--Radius-radius-050)',
  border: 'none'
}}>
  Click me
</button>
```

---

## 🚀 Success Stories

### **Migrations that reduced tech debt:**

_This section will be populated as we complete migrations._

**Example:**
> "Migrated Dialog component from Shadcn UI to SUI, reducing bundle size by 3KB and improving design consistency across 15 modal dialogs."

---

## 📞 Contacts

**Design System Questions:**
- Design Team: @design-team
- SUI Maintainer: @sui-maintainer

**Tech Debt Issues:**
- File issues in: Project Tracker
- Slack channel: #design-system-tech-debt

---

**Last Updated:** January 6, 2025  
**Next Review:** January 13, 2025  
**Document Owner:** Design System Team
