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
- **GoDaddy: whitelist SemrushBot** — pending support ticket. Clears the ~317
  false-positive "broken JS/CSS" SEMrush warnings (crawler is 403'd by GoDaddy's
  managed bad-bot filter; real browsers are unaffected).
