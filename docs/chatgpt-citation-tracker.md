# ChatGPT Citation Tracker — niche-term bets

Purpose: measure whether the Oct 2026 on-site work to win **ChatGPT** citations
on specific, named, long-tail prompts actually landed. Each change below is a
*bet* that needs a few weeks of ChatGPT recrawl before it can show up, so this
file is the before/after scorecard to check on the **next monthly Otterly
export**.

_Created: 2026-10-20 · Baseline export window: 2026-07-18 → 2026-10-17_

---

## Why ChatGPT specifically

From the Oct 2026 Otterly citation export, our domain's AI citations by engine:

| Engine | Citations of alymelife.com | Note |
|---|---|---|
| Copilot | 112 | our strongest |
| Google AI | 57 | |
| Perplexity | 33 | (crawling fine — not blocked) |
| **ChatGPT** | **19** | **weakest, despite being the biggest engine overall** |

ChatGPT answers from the institutional canon (CDC / IDSA / PubMed / Hopkins) and
only cites us on **specific named terms the institutions ignore** (e.g. "Wiegman
protocol" → 16 ChatGPT cites). The bets below target that pattern: niche named
terms where ChatGPT's answers are *least* institutionally locked.

---

## The bets (baseline = 0 ChatGPT citations unless noted)

| Prompt (as tracked in Otterly) | Target page | ChatGPT inst-lock | Baseline ChatGPT cites | Shipped | PR |
|---|---|---|---|---|---|
| What is Treg therapy for chronic Lyme disease? | `treg-therapy.html` | 77% | 0 / 245 | 2026-10-20 | #88 |
| What is Lyme immunotherapy and how does it work? | `lyme-immunotherapy.html` | 74% | 0 / 230 | 2026-10-20 | #88 |
| What is the Buhner protocol for Lyme? | `blog-herbal-protocols-lyme.html` | 53% | 0 / 235 | 2026-10-20 | #89 |
| Where can you get Lyme disease treatment in Germany? | `blog-germany.html` | 47% | 0 / 255 | 2026-10-20 | #89 |
| What is therapeutic apheresis for Lyme disease? | `therapeutic-apheresis-lyme.html` (new) | 65% | 0 / 231 | 2026-10-20 | #90 |

**Cross-engine bet (not ChatGPT-specific), track separately:**

| Prompt | Target page | Baseline | What to watch | PR |
|---|---|---|---|---|
| Does whole-body hyperthermia work for treating Lyme disease? | `whole-body-hyperthermia-lyme.html` | 2.7% brand coverage; 0 ChatGPT (CDC-locked) | overall coverage %, and any Copilot/Google AI gain — **not** ChatGPT | #87 |

**What each change did:** exact-prompt answer-first block + named entities +
explicit evidence-status, mirrored into the visible FAQ and FAQPage schema.
Buhner also added the Johns Hopkins (Feng/Zhang 2020) in-vitro study as a bridge
to institutional literature. Apheresis is a brand-new dedicated page.

---

## How to measure on the next export

1. In Otterly, export the **citations CSV** (same report as
   `a_lyme_life_citations_*.csv`) for the new window.
2. Run this per-prompt ChatGPT count (adjust the filename):

   ```bash
   python3 -I -c "
   import csv
   from collections import defaultdict
   f='CITATIONS.csv'
   rows=[r for r in csv.DictReader(open(f,encoding='utf-8')) if r['Service']=='chatgpt']
   want=['treg therapy for chronic lyme','lyme immunotherapy and how',
         'buhner protocol','treatment in germany','therapeutic apheresis for lyme',
         'whole-body hyperthermia work']
   agg=defaultdict(lambda:[0,0])
   for r in rows:
       p=r['Prompt'].lower()
       for w in want:
           if w in p:
               agg[w][0]+=1
               if 'alymelife' in r['Url'].lower(): agg[w][1]+=1
   for w in want:
       tot,us=agg[w]; print(f'{us:>3} / {tot:<4} chatgpt cites of us  |  {w}')
   "
   ```

3. Record the new "cites of us" numbers in the results log below.

---

## Results log

| Export date | Treg | Immunotherapy | Buhner | Germany | Apheresis | Notes |
|---|---|---|---|---|---|---|
| 2026-10-20 (baseline) | 0 | 0 | 0 | 0 | 0 | pre-recrawl baseline |
| 2026-10-26 | 0 | 0 | 0 | 0 | 0 | +6 days — too soon for ChatGPT recrawl; apheresis page brand-new. But overall our-domain AI citations grew 221→305 (Copilot 112→139, Google 57→75, **Perplexity 33→68 doubled**, ChatGPT 19→23). Re-check ~mid-Nov. |
| _(next export)_ | | | | | | |

---

## How to read the results

- **Any of these move off 0 on ChatGPT** → the "own the niche named term"
  playbook works. Repeat it on the next tier of named terms, and prioritize
  adding institutional-literature bridges (the Hopkins-study move) to the rest.
- **All still 0 after 4–6 weeks of recrawl** → the ceiling is **off-site
  authority / entity recognition**, not on-page content. Shift effort to the
  off-page plan (`docs/off-page-growth-plan.md`): press, Christina's LinkedIn
  /YouTube, and getting referenced by sources ChatGPT already trusts.
- Remember new pages (apheresis) also need Google/Bing indexing first — confirm
  it's indexed (GSC / `site:` search) before judging its ChatGPT result.

## Not worth chasing (for reference)

High institutional-lock prompts ChatGPT answers from CDC/IDSA/Cameron — we will
not displace them, so don't spend on-site effort here: *does hyperthermia work*
(81%), *treatment options* (82%), *symptoms* (76%), *Herxheimer* (95%),
*recovery time* (97%), *can it be cured* (98%), *can Lyme come back* (99%),
*worse second time* (100%). Find-an-LLMD (29%) is low-lock but owned by ILADS /
LymeDisease.org **directories**, which an article can't easily displace.
