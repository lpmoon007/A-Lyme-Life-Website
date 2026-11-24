# A Lyme Life — Open Items

Running list of things that are **not** code changes (those ship as they're done).
These are operator/dashboard actions, off-site growth work, and deferred cleanups.
Ordered by impact.

_Last updated: 2026-11-24_

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

- [ ] **Turn OFF reCAPTCHA on the consult form.** HubSpot portal **246801121** →
      Marketing → Forms → consult form `e48a5a7a-2fbe-477e-b056-1753d4804dcc` →
      Options. Submissions fail with `FORM_HAS_RECAPTCHA_ENABLED`; the same GUID
      powers the homepage consult form *and* book.html's message form, so both
      silently fail. We shipped a one-click, pre-filled-email fallback so leads
      aren't lost — but this is the real fix. Then send a test submit on book.html.

## 🟡 Operator / dashboard tasks

- [x] **Submit the disavow file** — ✅ submitted 2026-10-02 (258-domain version).
- [x] **Re-submit the disavow file (1,736 domains)** — ✅ submitted 2026-10-30.
      Ongoing negative-SEO spam had ballooned the junk-domain count ~7× since Oct 2.
      Now a **recurring task** — see `docs/monthly-maintenance.md`.
- [ ] **Re-upload the refreshed disavow (2,232 domains)** — regenerated 2026-11-24
      from the Semrush backlinks export (+496 new spam since Oct 30). File ready at
      `docs/disavow-alymelife.txt`. **Action: upload it in GSC → Disavow Links tool**
      (it replaces the prior file). Refresh again in ~2 weeks.
      NOTE: a disavow is private to Google — it will NOT lower the Authority Score
      or backlink count that Semrush reports; it only stops the links hurting
      Google rankings.
- [ ] **GA4 bot + internal-traffic filters** — apply `docs/ga4-traffic-filters.md`.
      Reports stay noisy (Urumqi/Singapore bots) until this is done.
- [ ] **Clarity bot filtering** — same idea, in the Clarity dashboard.
- [ ] **Re-run Semrush Site Audit** — confirm the two earlier fixes cleared
      (structured-data error → 0, unminified CSS dropped), then send me the export.
- [ ] **Server / bot-crawl hygiene (host / Plesk) — low priority.** From the Nov 2026
      investigation: GSC crawl stats show ~24% of Googlebot requests failing + ~24%
      404s, and live probing found ~5% of bot connections reset. Googlebot tolerates
      it, but it can degrade AI-crawler indexing. Have the host check Apache
      `error_log` / ModSecurity / fail2ban for connection resets or worker limits,
      whitelist the published AI-crawler IP ranges, and trim junk 404s. Not urgent —
      Google's own AI still indexes the site fine — but good hygiene.
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
        **followed**, not nofollow. **Ready-to-send email: `docs/outreach-email-partners.md`.**
        (The reciprocal link to `lyme-immunotherapy.html` is its own item above.)
  - [ ] Pitch **Tick Boot Camp podcast** (highest-ROI single target).
  - [ ] Set up **HARO/Qwoted** for journalist queries. **Ready-to-send pitch +
        per-query link guidance: `docs/outreach-haro-pitch.md`.**
  - Target: 2–4 quality links/month. Authority moves rankings over months — and it's
    the durable lever for AI citations too (the lowest-authority source is dropped
    first when an engine tightens its bar, as Copilot did in Nov 2026).
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
- [ ] **GEO — diversify off Copilot & track per-engine.** Nov 2026: the Otterly
      dashboard looked like it "collapsed," but it was a **single engine** — Copilot,
      which carried ~95% of our AI coverage — dropping after a Microsoft platform
      change; the site, Google rankings, Google's own AI Overviews, and traffic were
      all fine (full diagnosis logged). ChatGPT & Perplexity had always been ~0%, so
      we shipped **8 citation-ready long-tail FAQs** (visible + FAQPage schema) across
      the hyperthermia money cluster (pillar, Wiegman, Germany, cost, herbal) aimed at
      those two engines — see `docs/geo-chatgpt-perplexity-content.md`.
      **Now:** give the engines **2–4 weeks** to re-index, then log per-engine coverage
      monthly (`docs/monthly-maintenance.md` §4) and watch ChatGPT/Perplexity tick off
      zero. Otterly account near its prompt cap (shared with Building Teams) —
      free/upgrade slots to track more prompts.
- [ ] **Revive the Substack** (`alymelife.substack.com`, dormant since mid-2025) —
      7 ready-to-paste posts + plan in `docs/substack-revival-kit.md`; Christina/James
      publish. Audience/nurture + referral, **not** authority (its links are nofollow).
      On-site links to it are already live (footer + newsletter page).
- [ ] **Watch the trend** — send me a fresh GSC export in ~2 weeks; watch
      Referring Domains in Semrush and the buried money pages (chronic-lyme-
      treatment, supplements, find-a-doctor) climbing off page 5.

## ⚪ Deferred by choice (fix later)

- [ ] **HubSpot Marketing Email reauthorization** → then set up auto-emails that
      deliver the guide PDF + the assessment's printable result ("check your
      inbox" is NOT true yet — guide is on-page download, result is on-screen).
- [ ] **Self-assessment-primary CTA pass on the hyperthermia money pages**
      (whole-body-hyperthermia, extreme-vs-moderate, germany, treatment-centers,
      chronic-lyme-treatment, lyme-immunotherapy, treg-therapy): lead with
      "Is hyperthermia right for you? Take the 5-min assessment →" instead of
      the generic newsletter/guide — it's the money-aligned capture.

> ⚠️ **HubSpot forms gotcha (learned 2026-10-16):** any form that receives
> submissions via the API (our site posts via the Forms v3 endpoint, not the
> HubSpot embed) MUST have **reCAPTCHA / bot protection turned OFF** in the
> form's Options, or it returns `FORM_HAS_RECAPTCHA_ENABLED` and every submit
> fails. Apply this to any new form you create for the site.

---

## ✅ Done (recent, for reference)

- **GEO content diversification pass (Nov 2026)** — 8 citation-ready long-tail FAQs
  (visible + FAQPage schema) across the hyperthermia money cluster (pillar ×4, Wiegman,
  Germany, cost, herbal), aimed at ChatGPT/Perplexity; per-engine tracking added to the
  monthly checklist; drafts/strategy in `docs/geo-chatgpt-perplexity-content.md`
- **Diagnosed the Nov 2026 Otterly "drop"** — a single-engine (Copilot) swing after a
  Microsoft platform change, not a site/Google/penalty issue (site, Google rankings,
  Google AI Overviews and traffic all verified healthy)
- **Off-site outreach kits written** — partner link email (`docs/outreach-email-partners.md`),
  HARO/Qwoted pitch (`docs/outreach-haro-pitch.md`), Substack revival kit
  (`docs/substack-revival-kit.md`); on-site Substack links shipped (footer + newsletter)
- **Conversion resilience** — one-click, pre-filled-email fallback when a HubSpot form
  submit fails (book.html message form + homepage consult)
- **Blog card thumbnails fixed** — titles no longer cropped across the article grid
- Guide + hyperthermia self-assessment forms migrated off Formspree → HubSpot
  (verified live 2026-10-16); assessment lands with `hyperthermia_assessment_result`
  (score/band/safety-flags) so candidacy is visible in the CRM
- Low-friction email capture placed high on top-traffic pages; evidence-framed
  "does hyperthermia work" section + FAQ on the pillar

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
