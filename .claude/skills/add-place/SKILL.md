---
name: add-place
description: Add a restaurant, café, bar, sight or day trip to the guest guide in both Vietnamese and English. Use when the owner names a new place to recommend.
---

Add the place in $ARGUMENTS to the guide.

1. Decide which array it belongs in: `FOOD`, `CAFES`, `BARS`, `SIGHTS` or `TRIPS` in `app.js`. Follow the field order in the table in `.claude/CLAUDE.md`.
2. If the owner didn't give the address, hours or price, look them up from a current source, and say which source you used. Never guess. If you can't verify something, leave it out and tell the owner.
3. Write both languages. The Vietnamese needs correct diacritics. The English is short and written for tourists.
4. Put it near similar entries: walkable places first, places that need a Grab after them.
5. For `FOOD`, set the Bib flag to `1` only if the place is currently in the Michelin Bib Gourmand list.
6. Tell the owner in one or two plain sentences what you added and where it appears.
