# Homestay Guest Guide

A one-page, bilingual (Vietnamese / English) guide that guests of a homestay in central Saigon (old District 1) open on their phone, usually from a QR code in the room. It covers house rules, Wi-Fi, how things in the house work, food, cafés, sights, transport, tips and emergency numbers.

The owner is not a developer. Keep every change small, explain it in plain words, and never add tooling they would have to learn.

## Stack and deploy

- Plain static site: `index.html`, `style.css`, `app.js`. No framework, no build step, no npm dependencies. Don't add any.
- Hosted on Vercel (Framework Preset: Other, no Build Command). `vercel.json` only sets clean URLs and cache headers.
- Preview locally: `npx serve .` and open the printed URL, or just open `index.html`.
- Deploy: `vercel --prod` from this folder, or push to the connected GitHub repo.

## File map

- `index.html`: page frame. It holds the sticky bar with the VI/EN switch, the section chips, the hero (check-in/out times, Wi-Fi name and password), the section headings and lead paragraphs, the host contact and the 115/113/114 buttons. Each list is an empty container (`#rules-list`, `#food-list`, …) that `app.js` fills.
- `app.js`: all list content as arrays at the top, then the render code, the language switch and the copy-Wi-Fi button.
- `style.css`: a small base reset, then the colour tokens in `:root`, then the components.

## Bilingual rule (most important)

Every piece of visible text exists in both languages.

- In HTML: `<span class="vi">…</span><span class="en">…</span>`. CSS hides one or the other based on `data-lang` on `<html>`.
- In `app.js`: the helper `t(vi, en)` outputs both spans. If `en` is omitted, the Vietnamese text is used for both, which is right only for proper names.
- The chosen language is saved in `localStorage` under `guide-lang`, wrapped in try/catch. On a first visit it follows the browser language: Vietnamese browsers get `vi`, everyone else gets `en`.
- Vietnamese copy uses correct diacritics. English copy is plain and short, written for tourists.

## Content arrays in `app.js`

The arrays are positional, so keep each field in the order shown here.

| Array | Fields, in order |
| --- | --- |
| `RULES` | icon key (from `IC`), prohibited flag `0`/`1` (1 = red card), title vi, title en, `[bullets vi]`, `[bullets en]` |
| `ROOM` | title vi, title en, text vi, text en |
| `FOOD` | name, dish vi, dish en, address, note vi, note en, Bib Gourmand flag `0`/`1` |
| `CAFES` | name, text vi, text en, address |
| `BARS` | name, text vi, text en, address, floor vi, floor en (both `''` if unknown) |
| `SIGHTS` | name vi, name en, address, info vi, info en |
| `TRIPS` | title vi, title en, text vi, text en |
| `TRANSPORT` | option vi, option en, price (one string), note vi, note en |
| `TIPS` | label vi, label en, text vi, text en |
| `PHRASES` | Vietnamese phrase, pronunciation, use (vi), meaning (en) |
| `CLINICS` | name, address, phone, info vi, info en |

Map buttons are built automatically from the name and address as a Google Maps search, so there's no need to add links by hand.

## Placeholders

Text in square brackets, such as `[14:00]`, `[Tên Wi-Fi]`, `[mật khẩu]` or `[  ]`, is waiting for the owner's real details. Never invent values for them. Replace one only when the owner gives the value, and update both languages.

## Facts and freshness

- Prices, hours and venues were checked in November 2026. Before changing a fact, check a current source, and tell the owner when something can't be verified.
- Addresses use street names plus the old district name (for example "Q1 cũ", "Phú Nhuận"). Since the 2025 reform Ho Chi Minh City uses wards rather than districts, but guests and Google Maps still recognise the old names.
- Emergency numbers are fixed: 115 ambulance, 113 police, 114 fire.

## Design

- Light mode only. There are no dark-mode blocks; don't add them unless asked.
- The colour tokens in `:root` form a bright warm palette: cream background `--bg`, peach surface `--surface`, orange `--accent` for fills, `--accent-text` for orange text on cream, yellow `--sun`, red `--warn` for prohibited rules.
- Contrast: orange fills always carry dark text (`--accent-ink`). Never put white text on `--accent`, and never use `--accent` for text on the cream background. Use `--accent-text` for that.
- Font: Be Vietnam Pro from Google Fonts, which supports Vietnamese diacritics. Keep it.
- Use tokens for every colour. Don't hard-code hex values in components.

## Mobile first

Guests read this on phones.

- Check at 390px wide: nothing may scroll sideways. Only the transport table scrolls, inside `.table-wrap`.
- Tap targets are at least 44px.
- Keep the safe-area padding (`env(safe-area-inset-*)`) on `:root`, the side gutters, the sticky bar and the toast.
- Respect `prefers-reduced-motion`.

## Photos

- Put files in `images/`. Lowercase names with hyphens and no Vietnamese accents (`room-1.webp`, `banh-mi-huynh-hoa.webp`).
- Use WebP or AVIF, at most 1600px on the long side, ideally under 300 KB each.
- Every `<img>` needs `width`, `height`, `loading="lazy"` (except a cover photo at the top) and a bilingual `alt`, such as `alt="Phòng đôi / Double room"`.
- Don't hotlink photos from other websites.

## Don't

- Add analytics, trackers, chat widgets or other third-party scripts without asking.
- Add a build step, a framework or a package.json.
- Put private data such as door codes or the Wi-Fi password anywhere other than where the owner asks. The site is public, so remind them of that when they add a gate code.
