---
name: check-guide
description: Check the guest guide before deploying, covering both languages, phone layout, placeholders and broken files. Use before deploying or when the owner asks if the site is ready.
---

Check the guide and report in plain words. Fix only what's clearly broken and list everything else.

1. **Placeholders:** search `index.html` and `app.js` for `[` placeholders and list any that are still unfilled, such as Wi-Fi, gate code, host phone or fees.
2. **Bilingual:** confirm that every `<span class="vi">` has a matching `<span class="en">` beside it, and that every `t(...)` call with Vietnamese text also has an English argument (proper names are the exception).
3. **Data shape:** confirm that each array entry in `app.js` has the right number of fields, as listed in `.claude/CLAUDE.md`.
4. **Render:** serve the folder (`npx serve .`) and, if a browser tool is available, load it at 390×844 in both VI and EN. Check for console errors, sideways scrolling and missing images.
5. **Images:** list any file in `images/` over 300 KB and any `<img>` without `width`, `height` or `alt`.
6. **Privacy:** if a door or gate code appears on the page, remind the owner that the site is public.

End with either "Ready to deploy" or a short list of what to fix first.
