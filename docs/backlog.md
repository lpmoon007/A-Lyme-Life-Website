# A Lyme Life — Backlog / Later

Internal notes (this file is excluded from the deployed site via `paths-ignore`).
Items parked for later, most-actionable first.

---

## 1. MailerLite email delivery for the lead magnet  *(parked 2026-07-19)*

**Status:** Deferred. Today the guide opt-in (`lyme-treatment-questions.html`)
posts to Formspree (`mqerqren`) and shows an **instant PDF download** — no email
is sent. That is the intended behavior for now.

**Goal when resumed:** also auto-email the guide + build a real subscriber list
for nurture.

**Why it needs a human:** the form/list is tied to a MailerLite account; API keys
are secrets that can't live in page code.

**Setup checklist (in MailerLite, free plan = 1,000 subscribers / 12k emails/mo,
includes automations — confirm at signup):**
1. Create free account.
2. Subscribers → Groups → create group `Lyme guide`.
3. Automations → trigger "joins group → Lyme guide" → step "Send email"
   (welcome/delivery copy is in `scratchpad` / the delivery-email doc; links the
   PDF at `https://alymelife.com/before-you-say-yes-lyme-treatment-questions.pdf`
   and the call at `https://alymelife.com/#contact`).
4. Forms → Embedded form connected to `Lyme guide`.
5. Hand the embed code (or the account ID + form ID) to the dev.

**Dev side when resumed:** keep the existing custom card design, POST to MailerLite
so the subscriber is added (fires the automation) while keeping the instant
download; re-enable the "check your inbox" line in the success block; retire the
Formspree endpoint for THIS form only (keep Formspree for the consult form).
Handler lives at the bottom of `app.js` (`guideForm`).

---

## Other parked / human-input items

- **Testimonials + `Review` / `AggregateRating` schema** — highest conversion
  lever. Needs 3–5 real patient quotes + permission. Dev can build the section +
  schema; Christina supplies the quotes.
- **Medical-reviewer E-E-A-T byline** ("Reviewed by …") — needs a real reviewer.
- **GA4 conversions** — in GA4 Admin → Events, mark `generate_lead`,
  `cta_book_call`, `newsletter_signup`, and `assessment_submit` as conversions so
  they're measurable. (User-side, ~5 min.)
- **GoDaddy: whitelist SemrushBot** — ✅ DONE 2026-07-19 (GoDaddy allowed
  SemrushBot through the managed bad-bot filter). The ~317 false "broken JS/CSS"
  SEMrush warnings should clear on the next crawl.

## GA4 key events (conversions) — TABLED 2026-07-19

The site already fires the events; only the GA4-side marking is left. GA4's
"Create event" button forces a trigger/URL — ignore it. Two easy ways:

- **Easiest:** trigger the event once on the live site (e.g., click a "Book a
  Free Call" button = `cta_book_call`), then GA4 → Admin → Data display →
  Events → **Recent events** tab → click the **★ star** on the event's row.
- **By name:** top-left **"+ Create ▾" dropdown → Key event** → type the name →
  toggle "Mark as key event" → Create.

Mark these five (exact names):
`book_call_scheduled` (booked a call), `generate_lead` (guide download),
`cta_book_call` (clicked book), `newsletter_signup`, `assessment_submit`.

Cleanup: the pre-existing `close_convert_lead` / `qualify_lead` never fire
(site doesn't send them) — ⋮ → "Unmark as key event" to clear them.

Note: moving to HubSpot will also track bookings HubSpot-side, so GA4 key
events are for attribution (which traffic source converts), not the source of
truth for who booked.
