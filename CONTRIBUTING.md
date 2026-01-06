# 🤝 Contributing to SUI Figma Make Starter

First off, thank you for considering contributing to SUI Template! 🎉

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [SUI Token Guidelines](#sui-token-guidelines)
- [Component Guidelines](#component-guidelines)
- [Pull Request Process](#pull-request-process)

---

## 📜 Code of Conduct

This project adheres to professional standards. Please be respectful and professional.

---

## 💡 How Can I Contribute?

### **1. Reporting Bugs**

Found a bug? Help us fix it!

1. Check [existing issues](https://github.com/your-organization/sui-figma-make-starter/issues)
2. If not reported, [create a new bug report](https://github.com/your-organization/sui-figma-make-starter/issues/new?template=bug_report.md)
3. Include:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Environment details

### **2. Suggesting Features**

Have an idea? We'd love to hear it!

1. Check [existing feature requests](https://github.com/your-organization/sui-figma-make-starter/issues?q=is%3Aissue+label%3Aenhancement)
2. If not suggested, [create a new feature request](https://github.com/your-organization/sui-figma-make-starter/issues/new?template=feature_request.md)
3. Explain:
   - The problem it solves
   - Your proposed solution
   - Who would benefit

### **3. Updating SUI Tokens**

SUI Design System updated? Update the template:

1. Update `/src/styles/theme.css`
2. Follow [SUI Token Guidelines](#sui-token-guidelines)
3. Test all components
4. Submit PR

### **4. Adding/Updating Components**

New component or improvement?

1. Follow [Component Guidelines](#component-guidelines)
2. Ensure SUI token usage
3. Test in Figma Make
4. Document usage
5. Submit PR

---

## 🛠️ Development Setup

### **Prerequisites:**

- Node.js 18+
- npm 9+
- Git

### **Setup Steps:**

```bash
# 1. Fork & Clone
git clone https://github.com/YOUR_USERNAME/sui-figma-make-starter.git
cd sui-figma-make-starter

# 2. Install dependencies
npm install

# 3. Create a branch
git checkout -b feature/your-feature-name

# 4. Start dev server
npm run dev

# 5. Make changes & test
# Open http://localhost:5173
```

---

## 🎨 SUI Token Guidelines

### **Rules:**

1. **ALWAYS use CSS variables, NEVER hardcode values**
   ```tsx
   ✅ GOOD:  className="bg-[var(--Color-primary-yellow-500)]"
   ❌ BAD:   className="bg-[#FFE600]"
   ```

2. **Use semantic tokens when available**
   ```tsx
   ✅ GOOD:  var(--Component-button-primary-default-background)
   ⚠️ OK:    var(--Color-primary-yellow-500)
   ❌ BAD:   #FFE600
   ```

3. **Follow SUI naming convention**
   ```css
   /* Format: --Category-subcategory-variant-state-property */
   --Component-button-primary-hover-background
   --Color-blue-blue-500
   --Spacing-space-200
   --Radius-radius-025
   ```

4. **Document new tokens**
   ```css
   /* Add comment above new token */
   /* Component - New Feature Name */
   --Component-new-feature-background: var(--Surface-background-level-1);
   ```

---

## 🧩 Component Guidelines

### **Component Structure:**

```tsx
// /src/app/components/ui/example.tsx

import * as React from "react";
import { cn } from "@/lib/utils";

// 1. Define variants using SUI tokens
const exampleVariants = {
  default: "bg-[var(--Component-example-default-background)]",
  primary: "bg-[var(--Component-example-primary-background)]",
};

// 2. Component with proper types
export interface ExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof exampleVariants;
}

// 3. Component implementation
export function Example({ 
  variant = "default", 
  className,
  ...props 
}: ExampleProps) {
  return (
    <div
      className={cn(
        // Base styles using SUI tokens
        "rounded-[var(--Radius-radius-025)]",
        "p-[var(--Spacing-space-200)]",
        // Variant styles
        exampleVariants[variant],
        // User overrides
        className
      )}
      {...props}
    />
  );
}

Example.displayName = "Example";
```

### **Component Checklist:**

- [ ] Uses only SUI CSS variables (no hardcoded values)
- [ ] TypeScript types defined
- [ ] Variants use SUI tokens
- [ ] Responsive (if applicable)
- [ ] Accessible (ARIA labels, keyboard nav)
- [ ] Tested in Figma Make
- [ ] Display name set
- [ ] Exported from index

---

## 🔄 Pull Request Process

### **Before Submitting:**

1. **Test thoroughly:**
   ```bash
   # Build succeeds
   npm run build
   
   # No console errors
   npm run dev
   # Open localhost:5173, check console
   
   # Test in Figma Make
   # Import a Figma design, verify component renders
   ```

2. **Update documentation:**
   - Add to `/docs` if new feature
   - Update README if user-facing change
   - Add inline comments for complex logic

3. **Follow commit convention:**
   ```bash
   # Format: type(scope): description
   
   feat(button): add tertiary variant with SUI tokens
   fix(theme): correct radius token mapping
   docs(readme): update setup instructions
   refactor(card): simplify variant logic
   ```

### **Submitting PR:**

1. **Push to your fork:**
   ```bash
   git add .
   git commit -m "feat(component): description"
   git push origin feature/your-feature-name
   ```

2. **Create PR on GitHub:**
   - Use the PR template
   - Link related issue
   - Add screenshots/videos
   - Request review from @design-system-team

3. **Address review feedback:**
   - Make requested changes
   - Push updates
   - Re-request review

4. **Merge:**
   - Squash & merge after approval
   - Delete branch

---

## 🎯 Priority Areas

### **High Priority:**

- 🐛 Bug fixes
- 🔒 Security updates
- ♿ Accessibility improvements
- 📱 Responsive fixes

### **Medium Priority:**

- ✨ New SUI components
- 🎨 SUI token updates
- 📚 Documentation improvements

### **Low Priority:**

- 🧹 Code cleanup
- ⚡ Performance optimizations
- 🎭 Visual polish

---

## 📊 Component Coverage

Current: **48/48 components** with SUI tokens ✅

### **Fully SUI-compliant:**
- [x] Button (primary, secondary, tertiary)
- [x] Input, Textarea
- [x] Card, Badge
- [x] Alert, Dialog
- [x] ... (45 more)

### **Needs SUI tokens:**
- (None - %100 coverage!)

---

## 🆘 Getting Help

### **Questions?**

- 💬 Slack: #design-system-support
- 📧 Email: design-system@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-organization/sui-figma-make-starter/issues)

### **Want to pair program?**

Reach out to Design System team for:
- Live coding sessions
- Code review
- Architecture discussions

---

## 🏆 Contributors

Thank you to all contributors! 🎉

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- This will be auto-generated -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

---

## 📜 License

Internal use only - Your organization

---

**Happy Contributing! 🚀**