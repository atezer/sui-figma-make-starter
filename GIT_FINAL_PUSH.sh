#!/bin/bash

# 🚀 SUI Template Final Push Script
# Bu script tüm güncellemeleri commit edip push eder

echo "🚀 SUI Template - Final Push Başlıyor..."
echo ""

# 1. Git durumunu kontrol et
echo "📊 Git durumu kontrol ediliyor..."
git status
echo ""

# 2. Tüm değişiklikleri ekle
echo "📦 Tüm değişiklikler ekleniyor..."
git add .
echo "✅ Dosyalar eklendi"
echo ""

# 3. Commit
echo "💾 Commit yapılıyor..."
git commit -m "docs: update all URLs and add launch materials

🔗 URL Updates:
- Update README with live repository URL (github.com/atezer/sui-figma-make-starter)
- Update SETUP guide with correct clone commands
- Update package.json with repository information
- Add GitHub badges to README
- Update all documentation links

📢 Launch Materials:
- Add TEAMS_MESSAGE.md - Ready-to-share announcement
- Add EMAIL_ANNOUNCEMENT.md - Email version
- Add LAUNCH_SUMMARY.md - Complete launch report
- Add GIT_FINAL_PUSH.sh - This script

✨ Improvements:
- All documentation now points to live repo
- Teams message ready for distribution
- Demo script prepared
- Launch checklist complete

Ready for: Template activation, team announcement, demo session"

echo "✅ Commit tamamlandı"
echo ""

# 4. Push
echo "🚀 Push yapılıyor..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Push başarılı!"
    echo ""
    
    # 5. Version tag (opsiyonel)
    echo "🏷️ Version tag oluşturuluyor..."
    git tag -a v1.0.1 -m "v1.0.1: Documentation and launch materials

- All URLs updated to live repository
- Teams announcement ready
- Email announcement ready
- Launch summary report
- Demo script prepared

Status: Production Ready 🚀"
    
    git push origin v1.0.1
    
    if [ $? -eq 0 ]; then
        echo "✅ Tag push başarılı!"
    else
        echo "⚠️ Tag push başarısız (zaten var olabilir)"
    fi
else
    echo "❌ Push başarısız! Lütfen kontrol et."
    exit 1
fi

echo ""
echo "🎉 =================================="
echo "   PUSH BAŞARILI! 🚀"
echo "===================================="
echo ""
echo "📍 Repository URL:"
echo "   https://github.com/atezer/sui-figma-make-starter"
echo ""
echo "🎯 Sonraki Adımlar:"
echo "   1. ✅ GitHub Template aktifleştir"
echo "      → https://github.com/atezer/sui-figma-make-starter/settings"
echo "      → 'Template repository' checkbox işaretle"
echo ""
echo "   2. ✅ Teams mesajını paylaş"
echo "      → TEAMS_MESSAGE.md dosyasını aç"
echo "      → Meeting link ekle"
echo "      → Teams'e kopyala"
echo ""
echo "   3. ✅ Demo hazırlığı yap"
echo "      → Yarın 14:00"
echo "      → LAUNCH_SUMMARY.md'deki demo script'i kullan"
echo ""
echo "🎊 Template yayında! Başarılar!"
echo ""
