# A Lyme Life — Open Items

Running list of things that are **not** code changes (those ship as they're done).
These are operator/dashboard actions, off-site growth work, and deferred cleanups.
Ordered by impact.

_Last updated: 2026-08-31_

---

## 🔴 Do now — conversion blocker

- [ ] **Booking availability.** The HubSpot Meetings scheduler currently shows
      *"no available times."* Even visitors who see the scheduler can't book.
      1. Open the scheduler, click **"View next month"** — does **September**
         show open slots?
      2. If not: **HubSpot → Meetings → Christina's scheduling page →
         Availability** — connect her calendar, set working hours/days, and
         check the *minimum notice* + *rolling booking window* aren't blocking
         everything.
      This is the difference between a booking page that converts and one that
      can't. Highest priority.

## 🟡 Operator / dashboard tasks

- [x] **Submit the disavow file** — ✅ submitted 2026-10-02 (258-domain version).
- [ ] **🔴 Re-submit the disavow file** — the file was updated to **261 domains**
      after the first submission: added `mbprinteddroids.com`,
      `kernelpanicpodcast.com`, `drjack.world` (confirmed spam). Re-upload
      `docs/disavow-alymelife.txt` in GSC (it replaces the prior file).
      `lifeonautismlane.com` stays out — it's the family's own site.
- [ ] **GA4 bot + internal-traffic filters** — apply `docs/ga4-traffic-filters.md`.
      Reports stay noisy (Urumqi/Singapore bots) until this is done.
- [ ] **Clarity bot filtering** — same idea, in the Clarity dashboard.
- [ ] **Re-run Semrush Site Audit** — confirm the two earlier fixes cleared
      (structured-data error → 0, unminified CSS dropped), then send me the export.
- [ ] **HubSpot Marketing Email reauthorization** — needed *when ready to send*
      the newsletter (collection already works; sending needs the extra scope).

## 🟢 Growth — off-site (the real ranking lever)

**See `docs/off-page-growth-plan.md` for the full SEO+GEO strategy and the
2026-09-29 data (57 Google clicks/92 days; but already cited in AI answers).**

- [ ] **🔵 Reciprocal link from lymeimmunotherapy.com (Lyme Re-code) — top quick win.**
      Ask Lyme Re-code to add a **followed** in-content link to
      **https://alymelife.com/lyme-immunotherapy.html** from a relevant page
      (e.g. their Treg/immunotherapy posts, or an advisory-board/partners page).
      Why it's high-value: the 2026-09-30 GEO baseline shows lymeimmunotherapy.com
      is *already cited by AI* for the Treg/immunotherapy prompts where our own
      new page isn't yet — a link from them should lift it fastest. It's also a
      warm ask (Christina is on their advisory board) and a genuine topical match.
      Anchor: descriptive, e.g. "A Lyme Life's guide to Lyme immunotherapy."
      Confirm it's `followed`, not `nofollow`. Log it in `docs/backlink-targets.md`.
- [ ] **Backlink outreach** — work `docs/backlink-targets.md`, top-down:
  - [ ] Tier 6 quick wins first — verify partner bio links (thelymespecialist.com,
        lymeimmunotherapy.com, the Mexico program) link to alymelife.com and are
        **followed**, not nofollow. (The reciprocal link to
        `lyme-immunotherapy.html` is now called out as its own item above.)
  - [ ] Pitch **Tick Boot Camp podcast** (highest-ROI single target).
  - [ ] Set up **HARO/Qwoted** for journalist queries.
  - Target: 2–4 quality links/month. Authority moves rankings over months.
- [ ] **lifeonautismlane.com link (low priority).** The Carters' own family site.
      Semrush: **no organic rankings**, Authority Score 2, ~260 referring domains
      (same spam pattern as alymelife had — likely a compromised WordPress).
      A followed link to alymelife.com is a modest nice-to-have (little ranking
      power, some real referral + a clean refdomain) — but **rebuild it off
      WordPress and clean its spam first**, then add the link. Not a priority
      lever vs. the partner/podcast links below.
- [ ] **Activate Christina's YouTube + communities** — link alymelife.com from
      the channel About + video descriptions; participate in Reddit/FB/Quora
      Lyme communities. Fastest path to real humans *and* GEO signal.
- [ ] **GEO monitoring** — Otterly report "A Lyme Life" (5 treatment prompts) is
      live; review monthly. Account is near its 100-prompt cap, shared with the
      Building Teams business — upgrade or free slots to track more prompts.
- [ ] **Watch the trend** — send me a fresh GSC export in ~2 weeks; watch
      Referring Domains in Semrush and the buried money pages (chronic-lyme-
      treatment, supplements, find-a-doctor) climbing off page 5.

## ⚪ Deferred by choice (fix later)

- [ ] **Lead-magnet form → HubSpot** (`lyme-treatment-questions.html`, currently
      Formspree `mqerqren`). Easy; consolidates all email capture in HubSpot.
- [ ] **Assessment gate → HubSpot** (`hyperthermia-self-assessment.html`,
      Formspree `xjgnbyye`). Bigger — needs custom HubSpot fields to preserve the
      assessment answers, not just the email.

---

## ✅ Done (recent, for reference)

- Newsletter fully migrated to HubSpot (page + popup + all inline forms), verified live
- Dedicated `/newsletter.html` + welcome gift, linked sitewide (footer + popup)
- Nav: "Chronicles" → "Illness Chronicles"
- Booking fallback timeout 4.5s → 8s (embed itself confirmed working)
- Click-to-enlarge lightbox (dead-click fix)
- Hero LCP fix + removed 1.79 MB per-page sidecar fetch; CWV improving (LCP 3.9→3.6, INP 476→404)
- Site Audit fixes (invalid Review schema removed, fonts.css minified)
- WPML `/it/` `/nl/` redirects — verified live
- Semrush crawler unblocked (phantom WordPress detached)
- Backlink target list + GA4 filter guide written (`docs/`)
