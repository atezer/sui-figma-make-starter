# 🚀 SUI Quick Setup Guide for Figma Make

## Tasarımcılar için 3 Adımda SUI Kurulumu

---

## ⚡ **Yöntem 1: Kopyala-Yapıştır** (ÖNERİLEN)

### ✅ **ADIM 1: SUI Theme Dosyasını Kopyala**

1. **Bu linke git:**  
   👉 [GitHub - theme.css](https://github.com/YOUR_ORG/sui-figma-make-starter/blob/main/src/styles/theme.css)

2. **"Raw" butonuna tıkla**  
   (Sağ üstte)

3. **Tüm içeriği kopyala** (Ctrl+A → Ctrl+C)

---

### ✅ **ADIM 2: Figma Make'de Yapıştır**

1. **Figma Make'de yeni bir dosya oluştur:**
   ```
   /src/styles/theme.css
   ```

2. **Kopyaladığın içeriği yapıştır** (Ctrl+V)

3. **Kaydet** ✅

---

### ✅ **ADIM 3: Figma Linkini Ver**

1. **Figma Make'de "Import from Figma" tıkla**

2. **Figma link'ini yapıştır**

3. **Generate → ✨ SUI görünümlü prototype hazır!**

---

## 📊 **Ne Kazandın?**

```
✅ 1349 SUI token otomatik aktif
✅ Tüm renkler SUI palette
✅ Spacing, radius, borders SUI standartlarında
✅ Shadcn UI componentleri (kullanıldıysa) otomatik SUI görünür
✅ Merkezi tema yönetimi (theme.css'i güncelle, her şey değişir)
```

---

## 🎨 **Görsel Karşılaştırma**

### Önce (Standart Figma Make):
```
┌──────────────────┐
│  Default Button  │  ← Generic görünüm
└──────────────────┘
```

### Sonra (SUI Aktif):
```
┌───────────────────┐
│  SUI Button       │  ← Sahibinden görünümü! 🎉
└───────────────────┘
```

---

## 🔄 **Güncellemeler**

SUI tokenlar güncellendiyinde:

1. **GitHub'dan yeni theme.css'i kopyala**
2. **Figma Make'de üzerine yapıştır**
3. **Kaydet → Tüm projeler güncellenir! ✅**

---

## 🆘 **Sorun Giderme**

### ❌ "Renkler değişmedi"
**Çözüm:** theme.css dosyasının `/src/styles/` klasöründe olduğundan emin ol.

### ❌ "Font'lar farklı görünüyor"
**Çözüm:** SHBGrotesk font face'leri theme.css'de tanımlı. Tailwind font class'ları kullanma.

### ❌ "Radius hala 8px"
**Çözüm:** theme.css'deki global `--radius` token'ı kontrol et (4px olmalı).

---

## 📞 **Destek**

- **Slack:** #sui-design-system
- **Docs:** [SUI Documentation](https://your-docs-site.com)
- **GitHub Issues:** [Report a bug](https://github.com/YOUR_ORG/sui-figma-make-starter/issues)

---

**Son Güncelleme:** 6 Ocak 2025  
**Versiyon:** 1.0.0  
**Setup Süresi:** ~2 dakika ⚡
