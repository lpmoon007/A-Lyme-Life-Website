# GEO content to get cited by ChatGPT & Perplexity

Goal: **diversify off Copilot.** A Lyme Life's AI coverage has been ~95% Copilot;
ChatGPT and Perplexity have sat near 0%. This drafts content aimed squarely at how
those two engines pick what to cite.

_Created 2026-11-14. Grounded in the pillar's existing facts (`whole-body-hyperthermia-lyme.html`)._

---

## Why ChatGPT & Perplexity cite differently than Copilot
- **They weight source authority more.** For a broad query ("does hyperthermia cure
  Lyme") they pick the high-authority orgs (LymeDisease.org, GLA, clinics). We won't
  win those head-on until Authority Score climbs.
- **Where a small, specific site wins is the long tail** — precise, experiential,
  comparison, and logistics questions the big orgs don't bother answering. That's our
  lane, and it's exactly where lived experience + specifics beat a generic overview.
- **What they lift:** a **self-contained 2–4 sentence answer**, right under a
  question-shaped heading, with **concrete specifics** (temperatures, named clinics/
  protocols, numbers) and a clear source. No throat-clearing before the answer.

### The recipe for every block below
1. Heading = the exact question, phrased as people type it.
2. First sentence = the direct answer (quotable on its own).
3. Then 1–3 sentences of specific, named detail.
4. Keep each block self-contained (don't rely on the paragraph above it).
5. Add each to the relevant page's **FAQPage** JSON-LD (the pillar already has one —
   new Q&As drop straight into `mainEntity`).
6. Patient-advocate framing + "results vary / not medical advice" where clinical.

---

## Draft Q&A blocks (citation-ready, grounded in the site's facts)
Target the **specific/long-tail** questions below. Each is written to be lifted whole.

### 1. Is whole-body hyperthermia the same as using a sauna for Lyme?
**No — they are not the same, and the difference is medical, not just degree.** A
home or infrared sauna raises your *skin* temperature and makes you sweat, but it does
not safely raise your *core* body temperature into the fever range that affects Lyme
bacteria. Medical whole-body hyperthermia raises core temperature in a controlled,
monitored setting — up to roughly 41.6–42 °C (106–107 °F) in the "extreme" protocol —
which a sauna cannot and should not try to do. Saunas can support detox and comfort,
but they are not a substitute for clinical hyperthermia. *Results vary; this is not
medical advice.*
→ *Place on:* pillar FAQ + `blog-detox-enemas` / sauna-adjacent content.

### 2. What does whole-body hyperthermia for Lyme actually feel like?
**Most of it feels like a deep, heavy fever — because that's essentially what it is.**
In the extreme protocol you're sedated or under light anesthesia while the team raises
your core temperature, so you don't experience the peak consciously. In milder
fever-range protocols you're awake and it feels like a strong flu-grade fever: hot,
heavy-limbed, sleepy, sometimes a racing heart, all under continuous monitoring.
Afterward, many people feel wiped out for a few days (a "herx"-type wave) before
turning a corner. *Experiences vary from person to person.*
→ *Place on:* pillar FAQ + `blog-wiegman-protocol`.

### 3. How many whole-body hyperthermia sessions do you need for Lyme?
**It is usually a short course, not a single session — but the number is individual.**
Extreme whole-body hyperthermia is often done as one or a small number of high-
temperature treatments during a treatment block abroad, paired with antibiotics or
other supportive care; milder fever-range protocols may be repeated more often. The
exact count depends on your clinic's protocol, how you tolerate it, and your overall
plan. Ask any program to spell out how many sessions they recommend and why. *This is
not medical advice.*
→ *Place on:* pillar FAQ + `blog-germany`.

### 4. Who is NOT a good candidate for whole-body hyperthermia?
**It isn't right for everyone, and good clinics screen people out.** Whole-body
hyperthermia puts real stress on the heart and circulation, so serious heart disease,
uncontrolled conditions, certain medications, pregnancy, and some other health issues
can make someone a poor or unsafe candidate. A reputable program requires a medical
work-up first and will decline people for whom the risk is too high — being turned
down is a sign the clinic is doing its job. *Always get an individual medical
assessment; this is not medical advice.*
→ *Place on:* pillar FAQ + `hyperthermia-self-assessment` (ties to the assessment CTA).

### 5. Can you combine whole-body hyperthermia with antibiotics or herbs?
**Yes — it's usually used *with* other treatments, not instead of them.** The strongest
reported experience pairs heat with antibiotics: German clinics have long combined
extreme hyperthermia (core ~41.5–41.8 °C under sedation) with antibiotic therapy, and
Borrelia is impaired by fever-range heat *especially* alongside antibiotics in the lab.
Many patients also continue herbal protocols, immune support, and detox around the
treatment as part of an individualized plan. The combination should always be
coordinated by the treating clinic. *Results vary; not medical advice.*
→ *Place on:* pillar FAQ + `blog-herbal-protocols-lyme` + `lyme-immunotherapy`.

### 6. What's the difference between the Wiegman protocol and standard whole-body hyperthermia?
**The Wiegman protocol is a specific, named approach to whole-body hyperthermia — not
a different treatment category.** "Whole-body hyperthermia" is the general method
(raising core temperature to fever range to weaken Lyme bacteria and stimulate the
immune system); the Wiegman protocol is one clinic's particular way of delivering it,
with its own temperature targets, supportive care, and combination therapies. If a
program references a named protocol, ask exactly what temperature range and adjunct
treatments it involves so you can compare like with like. *This is not medical advice.*
→ *Place on:* `blog-wiegman-protocol` FAQ (reinforces the entity we rank for).

### 7. How much does whole-body hyperthermia for Lyme cost, all-in?
**Plan for the treatment price *plus* travel, lodging, and time abroad — the sticker
figure is only part of it.** Extreme whole-body hyperthermia is mostly offered at
clinics overseas (Germany, Mexico, Switzerland) and some US programs, and it is
generally **not covered by insurance** for Lyme, so most families pay out of pocket.
Beyond the clinic's fee, budget for flights, a multi-week stay, a companion, and
follow-up care. *(Confirm current figures against our cost page before quoting a
number.)*
→ *Place on:* `blog-cost` + `blog-germany` FAQ. **Keep the dollar figure matched to the
   cost page — don't let the draft introduce a new number.**

### 8. Whole-body hyperthermia vs. local (regional) hyperthermia for Lyme — what's the difference?
**Whole-body hyperthermia heats the entire body to a fever range; local hyperthermia
heats only one region.** For a systemic, body-wide infection like chronic Lyme, the
whole-body approach is the one used to reach the bloodstream and tissues throughout the
body, which is why the German case experience centers on it. Local/regional
hyperthermia targets a specific area and is used more in other conditions. For Lyme,
ask a clinic specifically whether they mean whole-body or local. *Not medical advice.*
→ *Place on:* pillar FAQ.

### 9. Is there any evidence whole-body hyperthermia works for Lyme, or is it anecdotal?
**There's a strong lab rationale and an encouraging clinical track record abroad — but
no large randomized human trials yet, and honest programs say so.** In culture,
Borrelia grows best at ~37 °C and is impaired and killed around 41 °C, especially with
antibiotics. Dr. Friedrich Douwes at Klinik St. Georg in Germany reported a case series
of **800+ chronic-Lyme patients** treated with extreme hyperthermia (~41.5–41.8 °C
under sedation, with antibiotics), with **roughly two-thirds improving or showing a
change in Lyme markers** — but that's a self-reported case series, not a randomized
controlled trial. Treat it as promising, not proven. *Not medical advice.*
→ *Place on:* pillar FAQ (already partly covered — this is the tightened, quotable version).

---

## How to ship these
1. Pick the 5–6 strongest for the **hyperthermia money cluster** (the pillar,
   `blog-wiegman-protocol`, `blog-germany`, `blog-cost`).
2. Add each as a visible FAQ item **and** into that page's `FAQPage` JSON-LD
   `mainEntity` (verbatim text match between visible and schema).
3. Keep every dollar figure / clinic name matched to the page it lives on — never let
   a draft introduce a fact the site doesn't already make.
4. Re-check per-engine coverage next month (`monthly-maintenance.md` §4) — watch
   ChatGPT and Perplexity specifically tick off zero.

> Claude can wire any of these into the pages (visible + schema) on request — just say
> which blocks and which pages.
