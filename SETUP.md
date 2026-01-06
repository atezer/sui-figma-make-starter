# 🚀 SUI Template Setup Guide - Tasarımcılar İçin

## Adım Adım Kurulum Rehberi (3 Dakika)

---

## 📋 **Ön Hazırlık (Bir Kerelik)**

### **Gerekli Araçlar:**

1. **Git** - Versiyon kontrolü
   - İndir: https://git-scm.com/downloads
   - Test et: Terminal'de `git --version` çalıştır

2. **Node.js** - JavaScript runtime
   - İndir: https://nodejs.org/ (LTS versiyonu)
   - Test et: Terminal'de `node --version` çalıştır

3. **Terminal/Command Line**
   - Mac: Terminal.app (built-in)
   - Windows: Git Bash (Git ile gelir)

4. **Figma Make** - Prototype tool
   - Zaten kullanıyorsun ✅

---

## 🎯 **YÖNTEM 1: GitHub Template (ÖNERİLEN)**

### **ADIM 1: Template'i Kullan (30 saniye)**

1. **Bu GitHub sayfasına git:**
   ```
   https://github.com/atezer/sui-figma-make-starter
   ```

2. **Sağ üstte "Use this template" butonuna tıkla**
   - Yeşil buton, "Code" butonunun yanında

3. **Yeni repository oluştur:**
   - Repository name: `my-figma-project` (istediğin ismi ver)
   - Description: (opsiyonel)
   - Public/Private: Private seç (ekip içi)
   - "Create repository" tıkla

✅ **Tebrikler! Artık kendi SUI template'in var!**

---

### **ADIM 2: Clone Et (1 dakika)**

1. **Yeni oluşturduğun repository'nin sayfasına git**

2. **Yeşil "Code" butonuna tıkla, URL'yi kopyala**
   ```
   https://github.com/YOUR_USERNAME/my-figma-project.git
   ```

3. **Terminal aç, şu komutu çalıştır:**
   ```bash
   # Bilgisayarında istediğin klasöre git
   cd ~/Desktop
   
   # Template'i clone et
   git clone https://github.com/YOUR_USERNAME/my-figma-project.git
   
   # Klasöre gir
   cd my-figma-project
   ```

✅ **Proje dosyaları artık bilgisayarında!**

---

### **ADIM 3: Kur ve Çalıştır (1.5 dakika)**

```bash
# Dependencies kur (ilk seferlik, biraz sürer)
npm install

# Development server başlat
npm run dev
```

**Terminal'de şunu göreceksin:**
```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**Tarayıcıda aç:** http://localhost:5173/

✅ **Çalıştı! Şimdi Figma Make ile kullanabilirsin!**

---

## 🎨 **YÖNTEM 2: Direct Clone (Daha Hızlı)**

Eğer kendi GitHub repository'sine ihtiyacın yoksa:

```bash
# Direkt clone et
git clone https://github.com/atezer/sui-figma-make-starter.git my-project

# Kur ve çalıştır
cd my-project
npm install
npm run dev
```

**Fark:** Kendi GitHub repo'n yok, direkt kullanıyorsun.

---

## 🎯 **ADIM 4: Figma Make ile Kullan**

### **Figma Tasarımını Prototype Yap**

1. **Figma'da tasarımını yap**
   - Frame oluştur
   - Componentler ekle
   - Tasarımı tamamla

2. **Figma link'ini kopyala**
   - Sağ tıkla → "Copy link"
   - Örnek: `https://www.figma.com/file/abc123...`

3. **Figma Make'i aç**
   - Proje klasörünü seç: `my-figma-project/`

4. **"Import from Figma" tıkla**
   - Link'i yapıştır
   - Generate!

5. **✨ SUI görünümlü prototype hazır!**

---

## 📊 **Doğrulama: SUI Çalışıyor mu?**

### **Kontrol Listesi:**

#### **1. Renkler SUI mu?**
```
✅ Primary button sarı (SUI primary yellow)
✅ Secondary button mavi (SUI blue)
✅ Background beyaz/gri tonları (SUI palette)
```

#### **2. Radius SUI mu?**
```
✅ Buttonlar 4px radius (SUI standard)
✅ Inputlar 4px radius
✅ Cardlar 8px radius (SUI card)
```

#### **3. Typography SUI mu?**
```
✅ Font SHBGrotesk (SUI font family)
✅ Font sizes SUI scale (12px, 14px, 16px...)
```

#### **4. Spacing SUI mu?**
```
✅ Padding/Margin 8px multipliers (8, 16, 24, 32...)
```

**Hepsi ✅ ise → SUI %100 aktif! 🎉**

---

## 🔧 **Troubleshooting**

### **Sorun 1: "git: command not found"**
**Sebep:** Git kurulu değil  
**Çözüm:**
```bash
# Git indir: https://git-scm.com/downloads
# Kur, terminal'i yeniden başlat
```

---

### **Sorun 2: "node: command not found"**
**Sebep:** Node.js kurulu değil  
**Çözüm:**
```bash
# Node.js indir: https://nodejs.org/
# LTS versiyonunu kur
# Terminal'i yeniden başlat
```

---

### **Sorun 3: "npm install" hata veriyor**
**Sebep:** Port çakışması veya dependency hatası  
**Çözüm:**
```bash
# Cache temizle
npm cache clean --force

# Tekrar dene
rm -rf node_modules package-lock.json
npm install
```

---

### **Sorun 4: "Port 5173 already in use"**
**Sebep:** Port zaten kullanılıyor  
**Çözüm:**
```bash
# Farklı port kullan
npm run dev -- --port 3000

# Veya çalışan process'i kapat
lsof -ti:5173 | xargs kill -9
```

---

### **Sorun 5: "Renkler SUI değil, generic görünüyor"**
**Sebep:** theme.css yüklenmiyor  
**Çözüm:**
```bash
# theme.css'in olduğunu kontrol et
ls src/styles/theme.css

# Varsa, import edildiğini kontrol et
# /src/main.tsx içinde:
# import './styles/theme.css'; olmalı
```

---

### **Sorun 6: "Figma Make component bulamıyor"**
**Sebep:** Component path yanlış  
**Çözüm:**
```bash
# Components klasörünü kontrol et
ls src/app/components/ui/

# button.tsx, card.tsx vs. olmalı
# Yoksa: Template doğru clone edilmemiş
```

---

## 🆘 **Hala Sorun mu Var?**

### **Destek Kanalları:**

1. **Slack:** #design-system-support
   - Ekran görüntüsü paylaş
   - Hata mesajını kopyala

2. **1-on-1 Yardım:**
   - Design System ekibiyle meeting ayarla
   - Canlı olarak setup yaparız

3. **GitHub Issues:**
   - https://github.com/atezer/sui-figma-make-starter/issues
   - Yeni issue aç, detaylı açıkla

---

## 📹 **Video Tutorial**

🎬 **"3 Dakikada SUI Setup" Video:**  
[Link eklenecek - Ekran kaydı + voiceover]

**İçerik:**
- 00:00 - Template'i clone et
- 00:30 - npm install
- 01:00 - npm run dev
- 01:30 - Figma Make'de kullan
- 02:30 - SUI componentleri göster
- 03:00 - Sonuç & özet

---

## ✅ **Başarı Senaryosu**

### **Ayşe'nin Deneyimi:**

```
⏰ 09:00 - Template setup başladı
⏰ 09:01 - GitHub'dan clone etti
⏰ 09:02 - npm install çalıştırdı
⏰ 09:03 - npm run dev → Çalışıyor! ✅

⏰ 09:05 - Figma'da landing page tasarladı
⏰ 09:30 - Figma link verdi Figma Make'e
⏰ 09:35 - ✨ SUI görünümlü prototype hazır!

📊 TOPLAM: 35 dakika (setup 3 dk, tasarım 30 dk)
💰 TASARRUF: Frontend revizyonu gerekmedi (2 saat tasarruf!)
```

---

## 🎓 **Sonraki Adımlar**

### **Artık Hazırsın!**

1. ✅ **SUI template kurulu**
2. ✅ **Figma Make hazır**
3. ✅ **İlk prototipi oluştur!**

### **İleri Seviye:**

- 📚 [Component Kütüphanesi](./docs/COMPONENT_LIBRARY.md) - Tüm 48 component
- 🎨 [Tema Özelleştirme](./docs/THEME_CUSTOMIZATION.md) - Token düzenleme
- 🔄 [Güncelleme Rehberi](./docs/UPDATE_GUIDE.md) - SUI güncellemeleri

---

## 📊 **Checklist: Kurulum Tamamlandı mı?**

```
İlerlemeyi işaretle:

Setup:
  [ ] Git kurulu (git --version çalışıyor)
  [ ] Node.js kurulu (node --version çalışıyor)
  [ ] Template clone edildi (klasör var)
  [ ] npm install tamamlandı (node_modules var)
  [ ] npm run dev çalışıyor (localhost:5173 açılıyor)

Doğrulama:
  [ ] theme.css dosyası var (src/styles/theme.css)
  [ ] 48 component var (src/app/components/ui/*)
  [ ] Tarayıcıda açılıyor (http://localhost:5173)
  [ ] Figma Make proje klasörünü buluyor

Kullanım:
  [ ] İlk Figma tasarımını import ettim
  [ ] Prototype oluştu
  [ ] Renkler SUI (sarı/mavi)
  [ ] Radius 4px (buttonlar)
  [ ] Font SHBGrotesk

Eğer hepsi ✅ ise → HAZIRSIN! 🎉
```

---

## 🚀 **Hadi Başla!**

```bash
# Son kontrol
cd my-figma-project
npm run dev

# Tarayıcıda aç: http://localhost:5173
# Figma Make'de proje klasörünü seç
# İlk prototipi oluştur! 🎨
```

**Başarılar! 🎉**

---

**Sorular?** → Slack #design-system-support  
**Feedback?** → design-system@example.com

**Setup Süresi:** ~3 dakika  
**Son Güncelleme:** 6 Ocak 2025