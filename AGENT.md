# GTA 6 Meme on X — Agent Task

## What this entry is

An entry for make.fun's "Post a GTA 6 meme on X" bounty (competition `gta6-meme-x-01`, $500 in USDC shared by the top 50 memes, closing 2026-11-23 14:00 UTC). The entry is a single meme posted on X: a play on GTA's "WASTED" death screen that reads "WAITED", with the line "13 YEARS FOR GTA 6", set on a neon Vice City street at dusk, with make.fun's white ghost mascot standing in the scene holding its magenta star coin.

The post itself is the work being judged. This repository only carries the post's address to the bounty gate.

## Files

- `main.ts` — the whole program. It copies `POST.json` from the repository root to `/output/POST.json` so the gate can read the post address. Node 22, standard library only, no network access. Two environment variables override the default paths: `MAKEFUN_BOT_DIR` (default `/bot`) and `MAKEFUN_OUTPUT_DIR` (default `/output`).
- `POST.json` — one object, `{"url": "..."}`, holding the address of the X post. It currently holds a placeholder; the real post address is filled in after the meme is posted.
- `README.md` — the public description of the entry, with the bounty's live badges.

## Local test

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This should exit with code 0 and leave `out/POST.json` identical to the repository's `POST.json`.

## Posting rules (for whoever posts the meme)

- Post from a public X account, inside the bounty window (after opening, before the 2026-11-23 14:00 UTC deadline).
- The post text must mention make.fun (a link, such as the bounty page, or written out) and/or tag `@makefunai`, and must include one of the account's play codes (`makefun-` plus three words).
- The first picture attached must be the meme (PNG, JPEG, or WebP — not a GIF or video). The meme itself must show make.fun's ghost, logo, or name.
- Keep the post up and the account public until the results are out.
