# GA4 — Filtering bot & internal traffic (A Lyme Life)

**Why:** The Jul 7–Aug 3 snapshot showed 191 "active users," but ~88% was
`(direct)/(none)` and roughly half came from datacenter/bot cities (Urumqi 47,
Singapore 33, Dublin 11, Tehran 5…). Real human organic reach was ~20–25.
These steps make future reports show real people, not crawler noise.

> **Important GA4 limitation:** GA4 permanent **Data Filters** can only drop
> *Internal* and *Developer* traffic (by IP). You **cannot** permanently
> filter out traffic by country/city/region. So bot regions are handled with a
> saved **Comparison** (a reporting overlay you toggle on), not a filter.
> That's a GA4 constraint, not an oversight.

---

## The 30-second shortcut (do this first)

Most of the junk arrives as **Direct**. Real search visitors arrive as
**Organic Search**. So the fastest clean read is simply:

- In any report, set the primary dimension to **Session default channel group**
  (or **Session source / medium**), and read the **Organic Search** row.
- That was ~20 users / 29 sessions for the snapshot period. That's your true
  SEO number. Ignore the Direct row entirely for SEO reporting.

Everything below makes this cleaner and automatic, but the channel view alone
gets you an honest number today.

---

## 1. Permanent filter: exclude your own visits (Internal Traffic)

Christina's / the team's own visits (Colorado — Broomfield, Westminster) inflate
engagement and conversions. Drop them permanently by IP.

### 1a. Find the IP(s) to exclude
On each device/network the team browses the site from, visit
`https://whatismyipaddress.com` and note the **IPv4** (and IPv6 if shown).
Home + office + phone-on-wifi may each differ. Collect them all.

### 1b. Define the internal-traffic rule
`Admin` (bottom-left gear) → **Data collection and modification** →
**Data streams** → click the **web stream** → **Configure tag settings** →
**Show more** → **Define internal traffic** → **Create**:

- **Rule name:** `Internal - team`
- **traffic_type value:** `internal` (leave as default)
- **Match type:** `IP address equals` (or `is in range` / CIDR if your ISP
  rotates within a block)
- **Value:** paste each IP from 1a (add a condition per IP)
- **Create**

### 1c. Activate the filter
`Admin` → **Data collection and modification** → **Data filters** →
the **Internal Traffic** filter already exists (state: *Testing*) →
open it → set **Filter state = Active** → **Save**.

> Filters only affect data going **forward** — they don't clean history.
> Test in *Testing* state for a day (add a `Test data filter name = internal`
> comparison to confirm it's catching you) before flipping to Active.

---

## 2. Reporting overlay: exclude bot regions (saved Comparison)

Since geography can't be permanently filtered, build a comparison you switch on
whenever you read a report.

`Reports` → open any report (e.g. **Pages and screens** or **Traffic
acquisition**) → **Add comparison +** (top of the report) → **Build new**:

Add these conditions, all as **Dimension: `City`**, condition **`does not
contain`** (add a separate condition, joined with **AND**, for each):

```
City  does not contain  Urumqi
City  does not contain  Singapore
City  does not contain  Dublin
City  does not contain  Tehran
City  does not contain  Guangzhou
City  does not contain  Zhuhai
City  does not contain  Yuncheng
City  does not contain  (not set)
```

- Name it **"Humans (no datacenter cities)"** → **Apply**.
- GA4 remembers recent comparisons, so it's one click on future visits.

> Why `City` not `Country`: excluding *Ireland* or *Singapore* by country would
> also drop any legitimate visitor there. The bots cluster in specific
> datacenter **cities**, so filter at city level. Revisit the list monthly —
> bot cities rotate; add new datacenter hotspots as they appear in the
> **City** report and drop ones that stop showing.

### Alternative: a reusable Explore segment
`Explore` → blank exploration → **Segments +** → **User segment** →
**Exclude** users where **City** `matches one of` (paste the same city list) →
name it **"Exclude datacenter bots"**. Segments can be reused across every
Explore and support the same exclusion logic with one entry.

---

## 3. Leave built-in bot filtering ON (it already is)

GA4 automatically excludes known bots/spiders from the IAB/MRC list. It's on by
default and can't be disabled — good. It does **not** catch the datacenter
"direct" hits above, which is why steps 1–2 exist.

---

## What "good" looks like after this

- **Traffic acquisition → Organic Search** becomes your primary SEO KPI.
- Top-line Active Users drops toward the real ~20–40/month range (rising as
  indexation grows) instead of bot-inflated 190+.
- Engagement time and bounce rate become trustworthy (bots no longer deflate
  engagement / inflate single-hit 100% bounces).
- Watch the **`chatgpt.com / ai-assistant`** and other AI-assistant referrals —
  that's the GEO channel; it should grow as the extractable-answer FAQs index.

---

## Quick reference — the city exclusion list (copy/paste)

```
Urumqi, Singapore, Dublin, Tehran, Guangzhou, Zhuhai, Yuncheng, (not set)
```
Review monthly against `Reports → User → Demographic details → City`.
