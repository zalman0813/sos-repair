# SOS Repair 網站開發計劃

## ✅ 已完成任務

### 1. 前端開發
- ✅ Next.js 14 專案初始化 with TypeScript
- ✅ Tailwind CSS 配置
- ✅ 黑色主題與黃色柔光設計系統
- ✅ 響應式一頁式版面（參考 houseifix.com）
- ✅ 導航頭部組件
- ✅ Hero 區塊（大標題、標語、CTA 按鈕）
- ✅ 關於我們區塊
- ✅ 服務項目展示（MacBook/iMac/iPad/iPhone）
- ✅ 客戶評價區塊
- ✅ 聯絡資訊區塊
- ✅ 浮動聯絡按鈕（電話、LINE）
- ✅ SEO 基礎設置

## 🔄 進行中任務

### 2. 圖片資源
- ⚠️ 修復圖片路徑問題（404 錯誤）
- 需要確保 `/public/images/` 資料夾中有所有圖片

## 📋 待執行任務

### 3. Strapi CMS 整合
- [ ] 安裝 Node.js 22 或以下版本（目前 v24.5.0 不支援）
- [ ] 建立 Strapi 後台 (`npx create-strapi-app@latest backend --quickstart`)
- [ ] 設計內容結構 (Content Types)：
  - [ ] 首頁設定（標題、標語、SEO）
  - [ ] 服務項目管理
  - [ ] 客戶評價管理
  - [ ] 聯絡資訊設定
- [ ] 建立 API 端點
- [ ] 前端整合 Strapi API

### 4. 效能優化
- [ ] 圖片優化（WebP 格式、懶加載）
- [ ] 字體優化
- [ ] 程式碼分割
- [ ] Lighthouse 效能測試與優化

### 5. 進階功能
- [ ] 表單功能（聯絡表單、預約維修）
- [ ] Google Analytics 整合
- [ ] Facebook Pixel 整合
- [ ] 結構化資料 (Schema.org) for Local Business
- [ ] XML Sitemap 生成
- [ ] robots.txt 配置

### 6. 測試與部署
- [ ] 跨瀏覽器測試
- [ ] 手機/平板響應式測試
- [ ] 建立 GitHub repository
- [ ] 連接 Vercel 自動部署
- [ ] 域名設定（如有）
- [ ] SSL 憑證確認

## 🐛 已知問題

1. **圖片載入錯誤**
   - 問題：`/images/*.png` 回傳 404
   - 解決方案：確認圖片已複製到 `/public/images/`

2. **Strapi 相容性**
   - 問題：Node.js v24.5.0 不支援 Strapi
   - 解決方案：使用 nvm 切換至 Node.js v20 或 v22

## 📊 專案架構

```
fix-app/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 主布局
│   ├── page.tsx           # 首頁
│   └── globals.css        # 全域樣式
├── components/            # React 組件
│   ├── Header.tsx        # 導航頭部
│   ├── HeroNew.tsx       # Hero 區塊
│   ├── AboutNew.tsx      # 關於我們
│   ├── ServicesNew.tsx   # 服務項目
│   ├── ReviewsNew.tsx    # 客戶評價
│   ├── ContactNew.tsx    # 聯絡資訊
│   └── FloatingButtons.tsx # 浮動按鈕
├── public/               
│   └── images/           # 圖片資源
├── lib/                  
│   └── api.ts           # API 結構
└── backend/             # Strapi CMS (待建立)
```

## 🚀 快速指令

```bash
# 前端開發
npm run dev              # 啟動開發伺服器 (http://localhost:3001)
npm run build           # 建置生產版本
npm run start           # 啟動生產伺服器

# Strapi CMS (需要 Node.js <=22)
cd backend
npm run develop         # 啟動 Strapi 開發模式
npm run build          # 建置 Strapi
npm run start          # 啟動 Strapi 生產模式
```

## 📝 備註

- 網站設計參考：https://houseifix.com/
- 色彩風格：黑色背景 + 黃色柔光
- 目標受眾：需要 Apple 產品維修的客戶
- 重點功能：快速聯絡、服務展示、信任建立

## 下一步行動

1. **立即修復**：解決圖片 404 問題
2. **短期目標**：完成 Strapi CMS 整合
3. **中期目標**：優化效能與 SEO
4. **長期目標**：部署上線並持續維護更新