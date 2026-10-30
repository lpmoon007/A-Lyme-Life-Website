# A Lyme Life — monthly maintenance checklist

Run this once a month. It takes ~30–45 minutes, or hand the five exports to
Claude and it runs the whole thing and updates the tracking files.

_Set up 2026-10-30. Last run: 2026-10-30._

---

## The 5 exports to pull each month
Pull these for the trailing ~90 days (or since last run) and drop them in a chat:
1. **Semrush → Backlink Analytics → Referring Domains** (CSV) — for the disavow + authority.
2. **Semrush → Position Tracking** + **GSC → Performance → Search results** (export) — rankings & clicks.
3. **Otterly → AI citations** (CSV) + **AI Performance Overview** (CSV) — GEO citations.
4. **Microsoft Clarity → dashboard** (CSV) — behavior & smart events.
5. **GA4 → Reports snapshot** (CSV) — traffic & top pages.

---

## 1. Disavow refresh  🔴 (the one that can't slip)
The site is under ongoing negative-SEO spam — new junk domains appear every month.
- [ ] From the Semrush referring-domains export, regenerate `docs/disavow-alymelife.txt`
      (union of current junk + prior list; keep the whitelist: bayarealyme,
      hometownstation, thelymespecialist, lymeimmunotherapy, globallymealliance,
      lifeonautismlane). *(Claude can regenerate it from the CSV.)*
- [ ] Re-upload it in **Google Search Console → Disavow Links tool** (it replaces the prior file).
- [ ] Record the new domain count + date in `open-items.md`.

## 2. Authority / backlinks (the growth metric that matters most)
- [ ] Pull Semrush `backlinks_overview` for alymelife.com → record **Authority Score**
      and **referring domains**. Goal: AS climbing from 2 toward 10+ as outreach lands.
- [ ] Log this month's quality links earned (from the outreach plan).
  | Month | Authority Score | Quality ref domains | Links earned this month |
  |-------|-----------------|---------------------|-------------------------|
  | 2026-10 | 2 | ~2 | baseline |
  | | | | |

## 3. Off-site outreach progress (what moves authority)
- [ ] Work `docs/off-page-link-targets.md` — aim for a handful of quality links/month.
- [ ] Tier 1 quick wins first (Substack, Medium, The Mighty, podcast guesting).
- [ ] Note which targets were contacted / landed; every new link points at the
      **hyperthermia money cluster**.

## 4. AI citations / GEO (our strongest channel)
- [ ] Run the tracker in `docs/chatgpt-citation-tracker.md` on the new Otterly
      citations CSV → log overall citations by engine + the ChatGPT-niche prompts.
- [ ] From the AI Performance Overview, note monthly citation total (Aug 285 →
      Sep 1,471 → Oct 1,700 …) and cited-pages/day.

## 5. Google rankings & traffic
- [ ] GSC: clicks, impressions, avg position (trend). Watch avg position (was 57 → 33).
- [ ] Money-page ranks (Semrush position tracking): **wiegman protocol** (was pos 3–6),
      hyperthermia terms, Buhner. Flag any money page slipping or any term reaching page 1.
- [ ] Note any new page not yet indexed (GSC URL inspection / `site:` check).

## 6. Conversion & behavior
- [ ] HubSpot: actual contacts/leads captured this month (the real funnel end).
      *(Caveat: the connected portal has been Be Legendary, not the alymelife portal —
      confirm leads are landing in portal 246801121.)*
- [ ] Clarity smart events: Submit form / Book / Subscribe / Download counts.
      Watch whether the Oct conversion fixes (on-ramp, inline booking msg, cost +
      partner CTAs) move these above the ~11 submits / 5 books baseline.
- [ ] Spot-check: is the HubSpot booking calendar still showing open slots?

## 7. Quick technical pulse
- [ ] Any crawl/indexing errors in GSC? Core Web Vitals still OK (Clarity: LCP < 3s)?
- [ ] New content shipped this month → added to sitemap + internally linked to the money pages?

---

### How to read it in one line
**Content & GEO are winning (citations up ~6×). Google traffic is gated by
authority (AS 2 vs 42).** Each month: defend (disavow), build (outreach →
watch AS climb), and confirm the funnel converts. Authority Score moving up is
the leading indicator that the off-site work is paying off.
