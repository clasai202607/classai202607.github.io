# GitHub Pages 部署注意事項

本資料夾是可直接部署的根目錄版本。請將本資料夾內的所有檔案與資料夾放在 GitHub repo 根目錄，或放在 `docs/` 後於 Pages 設定選擇 `docs`。

必要檔案：

- `index.html`
- `style.css`
- `script.js`
- `campus-hero.jpg`
- `commerce-logo-transparent.png`
- `yuntech-logo-transparent.png`
- `line-qr-code.jpg`
- `forms/application-form.pdf` 與 `forms/privacy-consent.pdf`
- `.nojekyll`

避免格式跑掉的重點：

1. 不要只上傳 `index.html`，CSS、JS、圖片與 `forms/` 資料夾都要一起上傳。
2. 檔名必須和 HTML 內引用完全一致，GitHub Pages 對大小寫與檔名非常敏感。
3. 若 repo 裡還有舊版 `index(3).html`、`style(3).css`、`script(3).js`，請不要用那些檔案作為部署主檔；部署主檔應為本版的 `index.html`、`style.css`、`script.js`。
4. GitHub Pages 的 Source 若選 `/root`，請把本資料夾內容放在 repo 根目錄，不要再多包一層資料夾。

本版也已將表單 PDF 檔名改為英文，降低 GitHub Pages 或不同作業系統處理中文檔名時的路徑問題。
