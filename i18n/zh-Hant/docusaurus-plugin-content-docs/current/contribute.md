---
sidebar_position: 3
---

# 貢獻

想要對本網站做出貢獻嗎？那就這樣做吧！

## 需求

- 一個 GitHub 帳號
- 知道如何使用 Markdown 語法
- 知道如何使用 Docusaurus 2

## 編輯 Markdown 頁面

1. 按下 *編輯此頁* 按鈕並 fork 此倉儲。
2. 在頁面上新增你的更改。
3. 建立 pull request 回[原本的倉儲](https://github.com/raymond-1227/rmcommunity/)。
4. 我會檢查你的更改並更新文件。

## 新增翻譯

1. 複製倉儲。
2. 執行 `npm install` 來安裝相關套件。
3. 在 `docusaurus.config.js` 中的 `i18n.locales` 新增你的 i18n 語言代碼。
4. 執行 `npm run write-translations -- --locale LANGUAGE_CODE` 來產生翻譯檔案，這樣你就不用一個一個檔案生成了。
5. 翻譯 `i18n/LANGUAGE_CODE` 中的檔案。
6. 建立 pull request 回[原本的倉儲](https://github.com/raymond-1227/rmcommunity/)。
7. 我會檢查你的更改並更新翻譯。

Done! Thanks for contributing to the documentation!