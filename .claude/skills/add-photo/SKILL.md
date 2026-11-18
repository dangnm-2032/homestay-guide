---
name: add-photo
description: Add or replace photos on the guest guide (cover, rooms, places). Use when the owner drops image files in the project or asks for photos on the page.
---

Add the photos described in $ARGUMENTS.

1. Find the files. If they aren't in `images/` yet, move them there and rename them to lowercase-hyphen names without accents.
2. If a file is larger than 1600px on its long side or not WebP/AVIF, convert it. Use `npx sharp-cli` or `cwebp` if available, at quality ~80 and max 1600px. Don't add either tool to the project. If neither is available, ask the owner to run the files through squoosh.app.
3. Insert `<img>` tags following the Photos rules in `.claude/CLAUDE.md`: real `width` and `height`, `loading="lazy"` (except a top cover photo), and a bilingual `alt`.
4. Style them with existing tokens. Give images `border-radius: 14px` to match the cards, use `object-fit: cover` and `max-width: 100%`, and make sure nothing scrolls sideways at 390px.
5. Tell the owner what you added and the total size of the new images.
