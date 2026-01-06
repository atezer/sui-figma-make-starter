# Design System Guidelines

Bu dosya AI'nın kod üretirken uyması gereken kuralları içerir.

## 🚨 EN ÖNEMLİ KURAL: Design Token'ları Kullan

**KOD YAZMAYA BAŞLAMADAN ÖNCE:**

1. `/src/styles/theme.css` dosyasını oku
2. `/src/constants/tokens.ts` dosyasını oku
3. Bu token'ları kullanarak kod yaz

### ❌ ASLA YAPMA:

- Hardcoded hex renkleri kullanma: `bg-[#1064bc]`
- Hardcoded pixel değerleri kullanma: `h-[44px]`, `p-[16px]`
- Inline style'da magic number kullanma: `style={{ height: '44px' }}`

### ✅ HER ZAMAN YAP:

- CSS variables kullan: `bg-[var(--color-brand-primary)]` veya `h-[var(--button-height-md)]`
- Token constants kullan: `import { colors, button } from '@/constants/tokens'`
- Tasarımda gördüğün değerin token'ını ara

---

## 📋 Token Kullanım Örnekleri

### Renkler

```tsx
// ❌ YANLIŞ
<div className="bg-[#1064bc] text-[rgba(17,18,20,0.8)]">

// ✅ DOĞRU (CSS Variables)
<div className="bg-[var(--color-brand-primary)] text-[var(--color-text-primary)]">

// ✅ DOĞRU (TS Constants)
import { colors } from '@/constants/tokens';
<div style={{ backgroundColor: colors.brand.primary, color: colors.text.primary }}>
```

### Spacing (Boşluklar)

```tsx
// ❌ YANLIŞ
<div className="p-[16px] gap-[8px]">

// ✅ DOĞRU
<div className="p-[var(--spacing-md)] gap-[var(--spacing-sm)]">

// ✅ DOĞRU (TS Constants)
import { spacing } from '@/constants/tokens';
<div style={{ padding: spacing.md, gap: spacing.sm }}>
```

### Buton Boyutları

```tsx
// ❌ YANLIŞ
<button className="h-[44px] rounded-[4px]">

// ✅ DOĞRU
<button className="h-[var(--button-height-md)] rounded-[var(--button-radius)]">

// ✅ DOĞRU (TS Constants)
import { button } from '@/constants/tokens';
<button style={{ height: button.height.md, borderRadius: button.radius.sm }}>
```

### Gölgeler

```tsx
// ❌ YANLIŞ
<div className="shadow-[0px_2px_4px_0px_rgba(17,18,20,0.12)]">

// ✅ DOĞRU
<div className="shadow-[var(--shadow-sm)]">

// ✅ DOĞRU (TS Constants)
import { shadows } from '@/constants/tokens';
<div style={{ boxShadow: shadows.sm }}>
```

---

## 🎨 Mevcut Token'lar

### Renkler

- `--color-brand-primary` (#1064bc) - Ana mavi, butonlar için
- `--color-brand-secondary` (#195e90) - Navigation bar
- `--color-brand-background` (#f4f4f4) - Sayfa arka planı
- `--color-text-primary` - Ana metin (opacity: 0.8)
- `--color-text-secondary` - İkincil metin (opacity: 0.44)
- `--color-text-disabled` - Devre dışı metin (opacity: 0.24)

### Spacing

- `--spacing-xs` (4px)
- `--spacing-sm` (8px)
- `--spacing-md` (16px) - En çok kullanılan
- `--spacing-lg` (24px)
- `--spacing-xl` (32px)

### Button

- `--button-height-md` (44px) - Standart buton yüksekliği
- `--button-radius` (4px) - Buton border radius
- `--shadow-sm` - Buton gölgesi

### Navigation

- `--nav-bar-bg` (#195e90)
- `--nav-bar-height` (48px)

---

## 🏗️ Component Kuralları

### Button Component

```tsx
// Standart buton yapısı
<button
  className="
    bg-[var(--color-brand-primary)] 
    h-[var(--button-height-md)]
    px-[var(--spacing-md)]
    rounded-[var(--button-radius)]
    shadow-[var(--shadow-sm)]
    text-[var(--color-text-white)]
  "
  disabled={disabled}
>
  {children}
</button>

// Disabled state otomatik opacity eklesin
// disabled:opacity-50 disabled:cursor-not-allowed
```

### Navigation Bar

```tsx
<nav className="
  bg-[var(--nav-bar-bg)]
  h-[var(--nav-bar-height)]
  px-[var(--spacing-md)]
  py-[var(--spacing-sm)]
">
```

### Text Elements

```tsx
// Ana başlık
<h1 className="text-[var(--font-size-lg)] font-bold text-[var(--color-text-primary)]">

// Caption / Label
<p className="text-[var(--font-size-xs)] text-[var(--color-text-secondary)] uppercase">
```

---

## 📱 Responsive Design

- Desktop için max-width: 480px
- Mobile-first approach kullan
- Tailwind responsive prefix'leri: `sm:`, `md:`, `lg:`

---

## 🔤 Typography

### Font Families

- `font-['SHBGrotesk:bold',sans-serif]` - Kalın başlıklar için
- `font-['SHBGrotesk:regular',sans-serif]` - Normal metin için
- `font-['SF_Pro_Text:Semibold',sans-serif]` - Status bar için

### Font Sizes

- `--font-size-xs` (12px) - Caption, label
- `--font-size-sm` (14px) - Small text, button text
- `--font-size-base` (16px) - Normal text
- `--font-size-lg` (18px) - Başlıklar
- `--font-size-xl` (24px) - Büyük başlıklar

---

## ✨ Özel Durumlar

### Opacity ile Renkler

Eğer bir rengi opacity ile kullanman gerekiyorsa:

```tsx
// ✅ DOĞRU - Token'da tanımlı olanları kullan
<p style={{ color: 'var(--color-text-secondary)' }}> // rgba(17,18,20,0.44)

// ✅ DOĞRU - TS helper function kullan
import { colors, withOpacity } from '@/constants/tokens';
<p style={{ color: withOpacity(colors.brand.primary, 0.5) }}>

// ❌ YANLIŞ - Direkt rgba yazma
<p style={{ color: 'rgba(17,18,20,0.44)' }}>
```

### Yeni Token Ekleme

Eğer tasarımda kullanılan bir değer token'larda yoksa:

1. Önce `/src/styles/theme.css` dosyasına ekle
2. Sonra `/src/constants/tokens.ts` dosyasına ekle
3. Sonra kullan

---

## 🎯 Kod Kalitesi Kuralları

1. **Responsive layout:** Absolute positioning'i sadece gerektiğinde kullan. Flexbox/Grid tercih et.
2. **Clean code:** Helper fonksiyonları ve component'leri ayrı dosyalara ayır.
3. **Small files:** Dosya boyutlarını küçük tut.
4. **Reusable components:** Tekrar eden yapıları component'e çevir.
5. **Accessibility:** ARIA attribute'ları ekle, semantic HTML kullan.

---

## 📝 Özet Checklist

Kod yazarken:

- [ ] Token dosyalarını kontrol ettim
- [ ] Hardcoded değer kullanmadım
- [ ] CSS variables veya TS constants kullandım
- [ ] Responsive tasarladım
- [ ] Accessibility ekledim
- [ ] Component'leri reusable yaptım

---

## 💡 İyi Bilinen Hatalar

### ❌ Sık Yapılan Hata:

```tsx
// Figma'dan kopyala-yapıştır yapmış gibi hardcoded değerler
<button className="bg-[#1064bc] h-[44px] px-[16px] rounded-[4px]">
```

### ✅ Doğru Yaklaşım:

```tsx
// Token'ları kullan
<button className="bg-[var(--color-brand-primary)] h-[var(--button-height-md)] px-[var(--spacing-md)] rounded-[var(--button-radius)]">
```

veya

```tsx
import { colors, button, spacing } from '@/constants/tokens';

<button style={{
  backgroundColor: colors.brand.primary,
  height: button.height.md,
  padding: `0 ${spacing.md}`,
  borderRadius: button.radius.sm
}}>
```

---

**SON HATIRLATMA:** Her kod yazmadan önce `/src/styles/theme.css` ve `/src/constants/tokens.ts` dosyalarını oku!