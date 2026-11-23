# Promote make.fun's make-your-own-bounty post on X

[![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/bimaadijaya007/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/bimaadijaya007/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)


Entry for the make.fun bounty `post-x-promote-make-your-own-bounty-01`
($250 shared by the top 50; deadline 2026-11-26 18:35 UTC / 27 Nov 01:35 WIB).

## The entry is the post

One post by @Uygikpfq on X that quotes make.fun's make-your-own-bounty post,
https://x.com/makefunai/status/2124915864336236646, with a photo of its own
attached. Its text carries `make.fun` and `@makefunai`, the line
`Make your own bounty on @makefunai: https://make.fun/sponsor/new`, and the
play code `makefun-bronze-carpet-frog`.

Score = replies + reposts + quotes on the post at the deadline (views and
likes move nothing). The post must stay up and public until results are out.
One post per entrant; never buy or bot engagement, and never engage your own
post from accounts you control.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `<output>/POST.json`, where the gate reads the post's
address. That is all it does — nothing about the post is scored from the
program. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`POST.json` holds the post's address as X's Share button gives it
(`https://x.com/<handle>/status/<id>`). The placeholder in this commit must
be replaced with the real post's address before submitting.
