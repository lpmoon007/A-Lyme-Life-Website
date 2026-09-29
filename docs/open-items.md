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

- [ ] **🔴 Submit the disavow file** — upload `docs/disavow-alymelife.txt` in
      Google Search Console if not already done. The backlink profile is 94%
      spam (Authority Score ~2), which suppresses the whole domain. Likely the
      single highest-impact off-page action. See `docs/off-page-growth-plan.md`.
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

- [ ] **Backlink outreach** — work `docs/backlink-targets.md`, top-down:
  - [ ] Tier 6 quick wins first — verify partner bio links (thelymespecialist.com,
        lymeimmunotherapy.com, the Mexico program) link to alymelife.com and are
        **followed**, not nofollow. Request the reciprocal link to the new
        `lyme-immunotherapy.html` page.
  - [ ] Pitch **Tick Boot Camp podcast** (highest-ROI single target).
  - [ ] Set up **HARO/Qwoted** for journalist queries.
  - Target: 2–4 quality links/month. Authority moves rankings over months.
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
