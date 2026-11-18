# Homestay Guest Guide

Trang web tĩnh (HTML/CSS/JS thuần), không cần build. Static site, no build step.

## Cấu trúc / Files
- `index.html` — khung trang, tiêu đề, Wi-Fi, giờ nhận/trả phòng, liên hệ chủ nhà
- `app.js` — toàn bộ nội dung danh sách (nội quy, quán ăn, tham quan…) ở đầu file
- `style.css` — màu sắc ở khối `:root` đầu file
- `vercel.json` — cấu hình Vercel

## Cần điền / To fill in
Tìm các chỗ `[ ]` trong `index.html` và `app.js`: tên homestay, Wi-Fi, mật khẩu, mã cổng, giờ giấc, phí, số chủ nhà, vị trí lối thoát hiểm.

## Xem thử trên máy / Preview locally
Mở `index.html` bằng trình duyệt, hoặc chạy `npx serve .`

## Đăng lên Vercel / Deploy
- **Cách 1 (dễ nhất):** vercel.com → Add New → Project → kéo thả thư mục này (hoặc đẩy lên GitHub rồi Import). Framework Preset: **Other**, không cần Build Command.
- **Cách 2 (dòng lệnh):** `npm i -g vercel` rồi chạy `vercel --prod` trong thư mục này.

Sau khi có link, có thể gắn tên miền riêng trong Settings → Domains và tạo mã QR từ link để dán trong phòng.

## Dùng với Claude Code / Working with Claude Code
Thư mục `.claude/` giúp Claude Code hiểu dự án ngay khi mở:
- `.claude/CLAUDE.md` — quy ước: song ngữ, thứ tự trường dữ liệu trong `app.js`, màu sắc, ảnh, những điều không nên làm
- `/add-place` — thêm quán / điểm tham quan (song ngữ, kiểm tra thông tin)
- `/add-photo` — thêm ảnh (đổi tên, nén WebP, gắn đúng chuẩn)
- `/check-guide` — kiểm tra trước khi deploy

`.vercelignore` loại `.claude/` và README khỏi bản deploy, nên các file này không bị công khai trên web.
