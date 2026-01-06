# 📚 SUI Figma Make Starter - Dokümantasyon İndeksi

## Hoş Geldiniz!

Bu dokümantasyon, SUI Design System'i Figma Make ile kullanmak için hazırlanmış template'in tüm kaynaklarını içerir.

---

## 🎯 **Hızlı Başlangıç**

### **Yeni Başlayanlar İçin:**
1. 📖 [README.md](../README.md) - Ana sayfa, genel bakış
2. 🚀 [SETUP.md](../SETUP.md) - 3 dakikalık kurulum rehberi
3. 🎨 [SUI Quick Setup Guide](./SUI_QUICK_SETUP_GUIDE.md) - Tasarımcılar için özet

### **İlk Kullanım:**
```bash
# 1. Template'i al
git clone https://github.com/your-organization/sui-figma-make-starter.git

# 2. Kur
cd sui-figma-make-starter
npm install

# 3. Çalıştır
npm run dev

# 4. Figma Make'de kullan!
```

---

## 📖 **Ana Dokümantasyon**

### **Kullanıcı Rehberleri:**

#### **1. Genel Başlangıç**
- 📄 [README.md](../README.md) - Proje genel bakışı, özellikler, hızlı başlangıç
- 📄 [SETUP.md](../SETUP.md) - Detaylı kurulum adımları (3 dakika)
- 📄 [TEMPLATE_READY.md](../TEMPLATE_READY.md) - Template yayınlama rehberi

#### **2. Tasarımcı Rehberleri**
- 📄 [SUI Quick Setup Guide](./SUI_QUICK_SETUP_GUIDE.md) - 2 dakikalık özet kurulum
- 📄 [Designer Workflow Examples](./DESIGNER_WORKFLOW_EXAMPLE.md) - Gerçek senaryolar
- 📄 [Coverage Analysis](./COVERAGE_ANALYSIS.md) - Ne çalışır, ne çalışmaz

#### **3. Ekip Liderleri İçin**
- 📄 [Implementation Plan](./IMPLEMENTATION_PLAN.md) - Ekip genelinde yayma stratejisi
- 📄 [Distribution Options](./SUI_DISTRIBUTION_OPTIONS.md) - Dağıtım yöntemleri karşılaştırması

---

## 🎨 **SUI Design System**

### **Token Sistemi:**
- **Dosya:** `/src/styles/theme.css`
- **Toplam:** 1349 SUI token
- **Kategoriler:**
  - Primitive Colors (Yellow, Blue, Green, Red, Orange, Purple, Gray, Turquoise, Pastel Blue)
  - Semantic Colors (Primary, Secondary, Text, Background, Surface)
  - Component Tokens (Button, Input, Badge, Alert, Dialog, etc.)
  - Spacing (100-2000, 8px increments)
  - Radius (025-300, 4px-24px)
  - Borders (Level 1-3, Alpha variants)
  - Typography (SHBGrotesk font family)

### **Component Kütüphanesi:**
- **Klasör:** `/src/app/components/ui/`
- **Toplam:** 48 component
- **Coverage:** %100 SUI tokens
- **Kategoriler:**
  - Form (Button, Input, Textarea, Select, Checkbox, Radio, Switch, etc.)
  - Display (Card, Badge, Avatar, Separator, Skeleton, etc.)
  - Overlay (Dialog, Popover, Tooltip, Alert Dialog, etc.)
  - Navigation (Tabs, Accordion, Breadcrumb, Pagination, etc.)
  - Feedback (Alert, Toast, Progress, etc.)

---

## 🔧 **Teknik Referans**

### **Geliştirici Kılavuzları:**

#### **1. Katkıda Bulunma**
- 📄 [CONTRIBUTING.md](../CONTRIBUTING.md) - Katkı yapma rehberi
- 📄 [CODE_OF_CONDUCT.md](../CODE_OF_CONDUCT.md) - Davranış kuralları
- 📄 [Pull Request Template](../.github/PULL_REQUEST_TEMPLATE.md) - PR şablonu

#### **2. Issue Management**
- 📄 [Bug Report Template](../.github/ISSUE_TEMPLATE/bug_report.md)
- 📄 [Feature Request Template](../.github/ISSUE_TEMPLATE/feature_request.md)

#### **3. CI/CD**
- 📄 [GitHub Actions Workflow](../.github/workflows/ci.yml) - Otomatik test & build

---

## 📊 **Component Referansı**

### **Tam SUI Coverage (48/48):**

#### **Form Components:**
1. Button - Primary, Secondary, Tertiary variants
2. Input - Default, Error, Focus states
3. Textarea - Consistent with Input
4. Select - SUI dropdown styling
5. Checkbox - SUI primary color
6. Radio Group - SUI selection
7. Switch - SUI toggle styling
8. Slider - SUI range selector
9. Form - SUI error handling
10. Label - SUI text secondary

#### **Display Components:**
11. Card - SUI surface levels
12. Badge - 14 SUI variants
13. Avatar - SUI fallback colors
14. Separator - SUI border alpha
15. Skeleton - SUI loading states
16. Table - SUI borders, hover
17. Aspect Ratio - SUI responsive

#### **Overlay Components:**
18. Dialog - SUI modal styling
19. Alert Dialog - SUI confirmation
20. Popover - SUI floating UI
21. Tooltip - SUI hints
22. Hover Card - SUI preview
23. Context Menu - SUI right-click
24. Dropdown Menu - SUI menu items
25. Menubar - SUI top menu
26. Navigation Menu - SUI mega menu
27. Command - SUI search palette
28. Sheet - SUI side panel

#### **Navigation Components:**
29. Tabs - SUI tab styling
30. Accordion - SUI expandable
31. Breadcrumb - SUI navigation trail
32. Pagination - SUI page navigation
33. Scroll Area - SUI custom scrollbar

#### **Feedback Components:**
34. Alert - SUI error/warning/info/success
35. Toast - SUI notifications (Sonner)
36. Progress - SUI loading bar

#### **Input Components:**
37. Calendar - SUI date picker
38. Date Picker - SUI date selection
39. Input OTP - SUI verification
40. Combobox - SUI searchable select
41. Carousel - SUI image slider
42. Toggle - SUI on/off switch
43. Toggle Group - SUI multi-toggle

#### **Layout Components:**
44. Collapsible - SUI expandable section
45. Resizable - SUI split panels
46. Drawer - SUI bottom sheet (Vaul)
47. Sonner - SUI toast system
48. Chart - SUI data visualization

---

## 🎓 **Eğitim Materyalleri**

### **Video Tutorials (Planlanıyor):**
- [ ] 3 Dakikada SUI Setup
- [ ] Figma Make İlk Kullanım
- [ ] SUI Token Özelleştirme
- [ ] Component Kütüphanesi Tour

### **Canlı Örnekler:**
- 📄 [Designer Workflow Example](./DESIGNER_WORKFLOW_EXAMPLE.md) - Ayşe'nin deneyimi
- 📄 [Coverage Analysis](./COVERAGE_ANALYSIS.md) - Karşılaştırmalı analizler

### **Hands-on Labs:**
- [ ] Lab 1: İlk Prototype Oluştur
- [ ] Lab 2: SUI Token Düzenle
- [ ] Lab 3: Yeni Component Ekle

---

## 🔍 **Arama Dizini**

### **Konu Başlıklarına Göre:**

#### **Setup & Kurulum:**
- SETUP.md → Detaylı kurulum
- SUI_QUICK_SETUP_GUIDE.md → Hızlı kurulum
- TEMPLATE_READY.md → Template yayınlama

#### **Kullanım & Workflow:**
- DESIGNER_WORKFLOW_EXAMPLE.md → Tasarımcı örnekleri
- README.md → Genel kullanım
- SUI_DISTRIBUTION_OPTIONS.md → Dağıtım yöntemleri

#### **Teknik Detaylar:**
- COVERAGE_ANALYSIS.md → Coverage analizi
- CONTRIBUTING.md → Katkıda bulunma
- theme.css → Token referansı

#### **Ekip Yönetimi:**
- IMPLEMENTATION_PLAN.md → Yayma stratejisi
- CODE_OF_CONDUCT.md → Davranış kuralları
- CHANGELOG.md → Versiyon geçmişi

---

## 📞 **Destek & İletişim**

### **Sorularınız mı var?**

#### **Hızlı Destek:**
- 💬 **Slack:** #design-system-support
- 📧 **Email:** design-system@example.com
- 🐛 **Issues:** [GitHub Issues](https://github.com/your-organization/sui-figma-make-starter/issues)

#### **1-on-1 Yardım:**
- Design System ekibiyle meeting ayarlayın
- Canlı demo & hands-on session
- Kod review & pair programming

#### **Topluluk:**
- Slack #sui-support kanalında soru sorun
- GitHub Discussions (planlanıyor)
- Haftalık Office Hours (planlanıyor)

---

## 🗺️ **Roadmap**

### **v1.0.0 - Current** ✅
- [x] 1349 SUI token
- [x] 48 SUI component
- [x] %100 coverage
- [x] Comprehensive docs

### **v1.1.0 - Planlanıyor**
- [ ] Component bundle (tek dosya)
- [ ] Video tutorials
- [ ] Storybook integration

### **v1.2.0 - Planlanıyor**
- [ ] Dark mode tokens
- [ ] Auto theme switching
- [ ] More examples

### **v2.0.0 - Gelecek**
- [ ] NPM package
- [ ] CDN hosting
- [ ] Browser extension
- [ ] Figma plugin

---

## 📊 **Versiyon Bilgisi**

- **Current Version:** 1.0.0
- **Last Updated:** 6 Ocak 2025
- **Maintainer:** SUI Design System Team
- **License:** Internal Use Only

---

## 🔗 **Hızlı Linkler**

### **Essential:**
- [📖 README](../README.md)
- [🚀 SETUP](../SETUP.md)
- [🎨 Quick Guide](./SUI_QUICK_SETUP_GUIDE.md)

### **Advanced:**
- [📊 Coverage](./COVERAGE_ANALYSIS.md)
- [🏗️ Implementation](./IMPLEMENTATION_PLAN.md)
- [🔀 Distribution](./SUI_DISTRIBUTION_OPTIONS.md)

### **Contributing:**
- [🤝 Contributing](../CONTRIBUTING.md)
- [📜 Code of Conduct](../CODE_OF_CONDUCT.md)
- [📝 Changelog](../CHANGELOG.md)

---

## 📚 **Dokümantasyon Haritası**

```
sui-figma-make-starter/
│
├── README.md ⭐ START HERE
├── SETUP.md
├── TEMPLATE_READY.md
├── CONTRIBUTING.md
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── LICENSE.md
│
├── docs/
│   ├── INDEX.md (bu dosya)
│   ├── SUI_QUICK_SETUP_GUIDE.md
│   ├── SUI_DISTRIBUTION_OPTIONS.md
│   ├── DESIGNER_WORKFLOW_EXAMPLE.md
│   ├── IMPLEMENTATION_PLAN.md
│   └── COVERAGE_ANALYSIS.md
│
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── workflows/
│   │   └── ci.yml
│   └── FUNDING.yml
│
└── src/
    ├── styles/
    │   └── theme.css (1349 SUI tokens)
    └── app/components/ui/
        └── (48 components)
```

---

## ✅ **Başlangıç Checklist**

### **İlk Kullanıcılar:**
```
[ ] README.md okudum
[ ] SETUP.md adımlarını takip ettim
[ ] Template kuruldu (npm install ✅)
[ ] Development server çalışıyor (npm run dev ✅)
[ ] Figma Make ile test ettim
[ ] İlk prototip oluşturdum
[ ] Destek kanalına katıldım (#sui-support)
```

### **Katkıda Bulunanlar:**
```
[ ] CONTRIBUTING.md okudum
[ ] CODE_OF_CONDUCT.md kabul ettim
[ ] Development environment kuruldu
[ ] Branch oluşturdum
[ ] İlk PR'ımı açtım
```

### **Ekip Liderleri:**
```
[ ] IMPLEMENTATION_PLAN.md okudum
[ ] Ekip onboarding planladım
[ ] Demo session planladım
[ ] Metrics tracking ayarladım
[ ] Destek kanalı oluşturdum
```

---

## 🎯 **Sonraki Adımlar**

1. ✅ **Kurulum yap** - SETUP.md'yi takip et
2. ✅ **İlk prototipi oluştur** - Figma Make ile dene
3. ✅ **Dokümantasyonu keşfet** - İhtiyacına göre oku
4. ✅ **Destek al** - Takıldığın yerde #sui-support
5. ✅ **Katkıda bulun** - İyileştirme önerilerini paylaş

---

**Başarılar! 🚀**

**Sorular?** → design-system@example.com  
**Destek?** → Slack #design-system-support  
**Feedback?** → GitHub Issues

---

**Last Updated:** 6 Ocak 2025  
**Version:** 1.0.0  
**Status:** Production Ready ✅