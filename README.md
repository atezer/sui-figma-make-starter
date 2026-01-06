# 🎨 SUI Figma Make Starter Template

> **SUI Design System** ile Figma Make projeleri için hazır template.  
> %100 SUI görünümlü prototipler oluşturmak için tek yapmanız gereken bu template'i kullanmak! ⚡

[![GitHub Template](https://img.shields.io/badge/template-Use%20this%20template-success?style=for-the-badge)](https://github.com/atezer/sui-figma-make-starter/generate)
[![License](https://img.shields.io/badge/license-Internal-blue?style=for-the-badge)](./LICENSE.md)
[![Version](https://img.shields.io/badge/version-1.0.0-orange?style=for-the-badge)](./CHANGELOG.md)
[![SUI Tokens](https://img.shields.io/badge/SUI%20Tokens-1349-yellow?style=for-the-badge)](./src/styles/theme.css)
[![Components](https://img.shields.io/badge/components-48/48-green?style=for-the-badge)](./docs/COVERAGE_ANALYSIS.md)

---

## ✨ **Özellikler**

- ✅ **1349 SUI Token** - Tüm renkler, spacing, radius, typography
- ✅ **48 Shadcn Component** - SUI tokenları ile özelleştirilmiş
- ✅ **%100 SUI Coverage** - Her component SUI standartlarında
- ✅ **Merkezi Tema Yönetimi** - Tek dosyadan tüm stilleri kontrol et
- ✅ **Figma Make Uyumlu** - Direkt Figma tasarımlarından prototype oluştur
- ✅ **TypeScript + Tailwind CSS v4** - Modern development stack

---

## 🚀 **Hızlı Başlangıç (3 Dakika)**

### **Yöntem 1: GitHub Template (ÖNERİLEN)**

1. **Bu sayfanın sağ üst köşesindeki "Use this template" butonuna tıkla**
2. **Yeni repository adı ver** (örn: `my-figma-prototype`)
3. **Clone et:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/my-figma-prototype.git
   cd my-figma-prototype
   ```
4. **Kur ve çalıştır:**
   ```bash
   npm install
   npm run dev
   ```

### **Yöntem 2: Direct Clone**

```bash
git clone https://github.com/atezer/sui-figma-make-starter.git my-project
cd my-project
npm install
npm run dev
```

---

## 📋 **Detaylı Kurulum**

### **Gereksinimler**

- Node.js 18+ 
- npm veya yarn
- Git (temel bilgi)

### **Adım Adım Kurulum**

```bash
# 1. Template'i al
git clone https://github.com/atezer/sui-figma-make-starter.git my-sui-project

# 2. Klasöre gir
cd my-sui-project

# 3. Dependencies kur
npm install

# 4. Development server başlat
npm run dev

# 5. Tarayıcıda aç
# http://localhost:5173
```

---

## 🎯 **Figma Make ile Kullanım**

### **Senario: Figma tasarımından prototype oluştur**

```bash
# 1. SUI Template'i zaten kurdun ✅

# 2. Figma Make'i aç
# → Proje klasörünü aç (my-sui-project)

# 3. Figma tasarımını import et
# → "Import from Figma" tıkla
# → Figma link yapıştır
# → Generate!

# 4. ✨ SUI görünümlü prototype hazır!
```

**Sonuç:**
- ✅ Tüm componentler SUI görünümünde
- ✅ Renkler SUI palette
- ✅ Typography SHBGrotesk
- ✅ Spacing & Radius SUI standartlarında

---

## 📁 **Proje Yapısı**

```
sui-figma-make-starter/
├── src/
│   ├── app/
│   │   ├── App.tsx                    # Ana component
│   │   └── components/
│   │       └── ui/                    # 48 SUI-customized Shadcn component
│   │           ├── button.tsx
│   │           ├── card.tsx
│   │           ├── input.tsx
│   │           └── ... (45 more)
│   │
│   ├── styles/
│   │   ├── theme.css                  # 🎨 1349 SUI TOKEN (ANA DOSYA)
│   │   ├── fonts.css                  # SHBGrotesk font faces
│   │   └── globals.css                # Global styles
│   │
│   └── main.tsx                       # Entry point
│
├── docs/                              # Dokumentasyon
│   ├── SUI_QUICK_SETUP_GUIDE.md      # Hızlı başlangıç
│   ├── COVERAGE_ANALYSIS.md           # Coverage analizi
│   ├── DESIGNER_WORKFLOW_EXAMPLE.md   # Gerçek örnekler
│   └── IMPLEMENTATION_PLAN.md         # İmplementasyon planı
│
├── public/                            # Static assets
├── package.json                       # Dependencies
├── tsconfig.json                      # TypeScript config
├── vite.config.ts                     # Vite config
└── README.md                          # Bu dosya
```

---

## 🎨 **SUI Token Kullanımı**

### **Örnek: Button Component**

```tsx
// /src/app/components/ui/button.tsx
import { cn } from "@/lib/utils";

const buttonVariants = {
  primary: "bg-[var(--Component-button-primary-default-background)] hover:bg-[var(--Component-button-primary-hover-background)]",
  secondary: "bg-[var(--Component-button-secondary-default-background)]",
  tertiary: "bg-[var(--Component-button-tertiary-default-background)]",
};

export function Button({ variant = "primary", ...props }) {
  return (
    <button 
      className={cn(buttonVariants[variant], "rounded-[var(--Radius-radius-025)]")}
      {...props} 
    />
  );
}
```

### **Kullanım:**

```tsx
import { Button } from "@/app/components/ui/button";

function MyApp() {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
    </div>
  );
}
```

---

## 🔧 **Tema Özelleştirme**

### **Tüm Stilleri Tek Dosyadan Yönet**

```css
/* /src/styles/theme.css */

:root {
  /* Renk değiştirmek için: */
  --Color-primary-yellow-500: #FFE600FF;  /* SUI primary yellow */
  
  /* Radius değiştirmek için: */
  --Radius-radius-025: 4px;  /* SUI button radius */
  
  /* Spacing değiştirmek için: */
  --Spacing-space-100: 8px;
  --Spacing-space-200: 16px;
}
```

**Değişiklik yap → Kaydet → Tüm componentler otomatik güncellenir!** ✨

---

## 📚 **Dokumentasyon**

### **Tasarımcılar İçin:**
- 📖 [Hızlı Başlangıç Rehberi](./docs/SUI_QUICK_SETUP_GUIDE.md) - 3 dakikada başla
- 🎨 [Tasarımcı İş Akışı Örnekleri](./docs/DESIGNER_WORKFLOW_EXAMPLE.md) - Gerçek senaryolar
- 📊 [Coverage Analizi](./docs/COVERAGE_ANALYSIS.md) - Ne çalışır, ne çalışmaz

### **Developerlar İçin:**
- 🏗️ [İmplementasyon Planı](./docs/IMPLEMENTATION_PLAN.md) - Ekip genelinde yayma
- 🔀 [Dağıtım Seçenekleri](./docs/SUI_DISTRIBUTION_OPTIONS.md) - Alternatif yöntemler

---

## 🆘 **Sık Sorulan Sorular**

### **Q: Figma Make bu template'i otomatik kullanır mı?**
A: Hayır, template'i clone ettikten sonra Figma Make'de o klasörü açmalısın. Sonra Figma link verdiğinde otomatik olarak SUI componentlerini kullanır.

### **Q: theme.css'i güncelleyebilir miyim?**
A: Evet! theme.css'teki token'ları değiştir, kaydet. Tüm componentler otomatik güncellenir.

### **Q: Yeni component ekleyebilir miyim?**
A: Evet! `/src/app/components/ui/` klasörüne yeni component ekle. Aynı SUI token yapısını kullan.

### **Q: Shadcn UI'a yeni component nasıl eklerim?**
A: 
```bash
npx shadcn@latest add [component-name]
```
Sonra component dosyasını aç, CSS class'ları SUI tokenlarına çevir.

### **Q: Dark mode destekliyor mu?**
A: Şu an light mode SUI tokenları var. Dark mode SUI tokenları eklendiğinde theme.css'e eklenecek.

### **Q: Güncellemeleri nasıl alırım?**
A:
```bash
# Upstream ekle (bir kerelik)
git remote add upstream https://github.com/atezer/sui-figma-make-starter.git

# Güncellemeleri al
git fetch upstream
git merge upstream/main
```

---

## 🤝 **Katkıda Bulunma**

SUI token'ları veya componentler güncellendiyinde:

1. Fork'la
2. Değişiklikleri yap
3. Pull Request aç
4. Design System ekibi review eder

---

## 📊 **Metrics & Success Stories**

### **Zaman Tasarrufu:**
- **Önceki Süreç:** Figma → Prototype → Frontend revizyonu → 4 saat
- **SUI Template:** Figma → Prototype (SUI ready) → 1 saat
- **Tasarruf:** %75 ⬇️

### **Ekip Adoption:**
- 10 tasarımcı onboard edildi (5 dakika/kişi)
- 50+ SUI prototip oluşturuldu
- %100 adoption rate

---

## 🔗 **Bağlantılar**

- 🎨 **SUI Design System:** [Internal Docs](#)
- 🔧 **Figma Make:** [Figma Make Platform](#)
- 💬 **Destek:** Slack #design-system-support
- 🐛 **Bug Report:** [GitHub Issues](https://github.com/atezer/sui-figma-make-starter/issues)

---

## 📜 **Lisans**

Internal use only - Your organization's design system.

---

## ✨ **Hemen Başla!**

```bash
# 1. Template'i kullan
git clone https://github.com/atezer/sui-figma-make-starter.git

# 2. Kur
cd sui-figma-make-starter && npm install

# 3. Çalıştır
npm run dev

# 4. Figma Make'te kullan!
```

**🎉 Tebrikler! Artık SUI ile prototype oluşturabilirsin!**

---

**Made with ❤️ by SUI Design System Team**

**Version:** 1.0.0  
**Last Updated:** 6 Ocak 2025