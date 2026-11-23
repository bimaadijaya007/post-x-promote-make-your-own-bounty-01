# Design note — post-x-promote-make-your-own-bounty-01 entry

## What the entry is
The entry is not the program — it is one X post by @Uygikpfq that quotes
make.fun's make-your-own-bounty post
(https://x.com/makefunai/status/2124915864336236646), carries a photo of its
own, carries make.fun / @makefunai in its text, and carries the play code
`makefun-bronze-carpet-frog` (n=0 of 4 for this competition, from
GET /api/competitions/post-x-promote-make-your-own-bounty-01/play-code).
The program only hands the post's address to the grader.

## Program behaviour (main.ts, Node 22, stdlib only)
- Read `POST.json` from the repository root (MAKEFUN_BOT_DIR, default `/bot`).
- Validate it parses as JSON and has a string `url` field.
- Create the output directory (MAKEFUN_OUTPUT_DIR, default `/output`) and
  write the exact same bytes to `<output>/POST.json`.
- Exit 0 on success, exit 1 with an error message on any failure.
- No network, no clock, no randomness: two runs write identical bytes.

## Files
- `main.ts` — the program above.
- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}` placeholder;
  replaced with the real post address (Share → Copy link) after the user
  posts from the X app on their phone, before any submit.
- `README.md` — what the post must contain and how the score works.
- `LICENSE` — MIT, written by `makefun init` anchor.

## Post text (to be posted by the user from the X app on their phone)
Quote of https://x.com/makefunai/status/2124915864336236646, with the
attached photo (promo image made in this session), text carrying
"Make your own bounty on @makefunai: https://make.fun/sponsor/new",
the play code `makefun-bronze-carpet-frog`, and an invitation to reply
with what bounty the reader would make.

## Status / blockers
- Anchor: makefun anchor d817dc802ba7ca2087c419964c39c7141b2f57ed,
  round 34219808 (init ran before the execution-risk notice).
- BLOCKED: git commit / local run test / bundle / check / submit are on hold
  — the kit/init output failed an execution-risk check and needs the user's
  explicit OK to proceed (per standing pattern: ask once, briefly, then
  continue).
- BLOCKED: submit needs the real X post URL in POST.json; the post can only
  be made by the user from the X app on their phone (@Uygikpfq).
- Quota (checked 2026-11-24 ~02:40 WIB): entries_left 1, total max 1,
  can_submit true. Entry fee $0.00 (free). Deadline 2026-11-26T18:35:00Z
  (27 Nov 01:35 WIB). Top 50 share $250.
