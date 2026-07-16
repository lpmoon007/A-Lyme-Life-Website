# Handoff: A Lyme Life (alymelife.com) — Static Site Maintenance & Deploy

## Overview
`alymelife.com` is Christina Carter's chronic-Lyme patient-advocacy site: a hand-built **static HTML site** (no framework, no build step, no CMS). It is ~60 article pages plus pillar guides, an author page, videos, chronicles, and a home page. This handoff hands the codebase to Claude Code for **ongoing maintenance** — adding articles, swapping images, and deploying to the production VPS — plus a short punch list of pending tasks.

## About the Design Files
**This is not a design mock to recreate.** The files in the project ARE the production codebase — real, shipping HTML/CSS/JS that runs as-is in the browser with no bundler. The task is to **edit and extend this codebase in place** and deploy it, following the existing conventions below. Do not "port" it to a framework; keep it plain static HTML unless the owner explicitly asks otherwise.

## Fidelity
**Production.** Every page is final, live content. Match existing patterns exactly (see Conventions). No redesign unless requested.

## Tech Stack
- **Plain static HTML5**, one file per page at the project root (`blog-*.html`, `index.html`, `blog.html`, `article.html`, `treg-therapy.html`, `chronic-lyme-treatment.html`, `christina-carter.html`, `videos.html`, `chronicles.html`, `about.html`, `404.html`).
- **CSS:** two shared stylesheets — `styles.css` (global/site) and `pages.css` (article/interior). Per-page `<style>` blocks only for one-off tweaks (e.g. `.toc`, `.lead-note`, comparison tables).
- **JS:** `app.js` (nav toggle, FAQ accordion, reveal-on-scroll, share buttons, search) and `image-slot.js` (the `<image-slot>` web component for drag-drop image placeholders).
- **Fonts:** Google Fonts — Cormorant Garamond, Newsreader, Mulish, Hanken Grotesk, Sacramento.
- **Forms:** Formspree (newsletter → `mkoajneb`; assessment → `xjgnbyye`). Honeypot `_gotcha` field; reCAPTCHA is OFF (was causing failed submissions).
- **A `dist/` folder mirrors the root** — every root file has a `dist/` copy. Keep them in sync on every change. **Deploy from root** (canonicals/sitemap/feed all point at root URLs; `dist/` is a local mirror only).

## Hosting & Deploy
- **Host:** GoDaddy fully-managed Linux VPS with **Plesk**.
- **Domain:** `alymelife.com` (301 from apex → `www` exists server-side; canonicals use bare `alymelife.com`).
- **Web root:** `/var/www/vhosts/alymelife.com/httpdocs`
- **SSH user:** `ccarter` (owner has direct SSH access; port may be non-standard — ask the owner).
- **SSL:** Let's Encrypt, managed by Plesk.
- **Deploy method:** rsync the site files to the web root, e.g.
  ```
  rsync -avz --exclude 'dist/' --exclude 'design_handoff_*' --exclude '*.csv' ./ ccarter@alymelife.com:/var/www/vhosts/alymelife.com/httpdocs/
  ```
  Always **back up httpdocs first** (`cp -a httpdocs httpdocs-backup-YYYYMMDD`) and get owner approval before overwriting.
- **nginx directives** (redirects, gzip, caching, security headers) live in Plesk → domain → **Apache & nginx Settings → Additional nginx directives**, NOT in a file in the repo. The current block is documented in `nginx-directives.conf` in this handoff folder for reference.

## Conventions — Adding a New Article
Every article follows an identical template. Copy the newest article (e.g. `blog-lyme-vs-fibromyalgia.html`) as the starting point and change content. Each page includes, in order:

1. `<head>`: `<title>`, meta description, meta keywords, canonical, OG + Twitter tags, `<link rel="preload">` for the cover image.
2. **JSON-LD blocks:** `MedicalWebPage` (with `lastReviewed` + `reviewedBy`), `FAQPage`, `BreadcrumbList`, `WebPage`+`speakable`, and `BlogPosting` (with `citation`). Keep all valid JSON — no unescaped quotes inside `text` fields (a past bug).
3. Shared header nav + breadcrumb.
4. `.article-head` (category, H1, standfirst, byline with `.reviewed-note` "Last reviewed <date>"), `.article-cover` with `<image-slot>`.
5. Body: "Print this page to take to your doctor" button, top share row, prose with `.key-takeaways`, `.toc`, H2 sections (with `scroll-margin-top`), one mid-article inline newsletter `<aside class="inline-sub">`.
6. FAQ accordion section (mirrors the FAQPage schema).
7. References (`.c-refs`) + medical disclaimer.
8. Bottom share row + second inline-sub, article CTA, **"What to read next"** (3 `.post-card`s), author box, footer.
9. Scripts: `image-slot.js` then `app.js`.

**Then wire the article in (all four):**
- Add a `.post-card` to `blog.html` in the right cluster position.
- Add a `<url>` entry to `sitemap.xml`.
- Add an `<item>` to the top of `feed.xml`.
- Mirror all changed files into `dist/`.

**Voice:** first-person, Christina as the *guide* and the reader as the *hero* (StoryBrand). Honest, plain, warm, no hype. Always "not medical advice"; may say "Last reviewed <date>" but **never "medically reviewed"** (Christina is a patient advocate, not a clinician).

## Images
- Live in `assets/img/`, named with the article's long-tail keyword (e.g. `lyme-disease-fatigue.webp`), always **`.webp`, resized to 1200×675** (16:9), center-cropped. Descriptive ALT text on every image.
- Article uses the SAME image for cover, `blog.html` card, and OG/Twitter/schema.
- `<image-slot>` gives each slot a unique `id` so drops persist. Logos: `assets/a-lyme-life-logo.webp`, `assets/a-lyme-life-logo-footer.webp`.

## Design Tokens (from styles.css)
- Greens: `--green-deep`, `--green`; ink: `--ink`, `--ink-soft`; surfaces: `--surface`, `--line`, `--accent-tint`.
- Card radius: `--card-radius`. Theme color `#6f8a42`.
- Note-box colors used in articles: lead `#ecd6c8` on `--accent-tint`; warn `#f7ece7`/`#e6c3b4`/`#9d4a30`; hope `#e7f0e0`/`#caddbf`/`#3f6b2e`.
- (Read `styles.css` / `pages.css` for exact values — treat those files as the source of truth.)

## Pending Tasks
1. **Minify CSS/JS (the one open SEMrush audit flag).** Produce minified `styles.css`, `pages.css`, `app.js`, `image-slot.js` (whitespace/comment stripping; keep the `<style id="__om-edit-overrides">` semantics intact if present). Either minify in place or emit `.min` versions and update the `<link>`/`<script>` refs across ALL pages consistently (root + `dist/`). This is the only remaining item on an otherwise clean audit (no broken links, no missing titles/meta/H1/ALT, no structured-data errors). Bump the `?v=` cache-buster query string on the CSS links when you do.
2. **Keep `dist/` in sync** on every edit (or, preferably, stop maintaining a mirror and deploy straight from root — confirm with owner).
3. When adding articles, always complete the 4-step wire-in above (blog card, sitemap, feed, dist mirror) — easy to forget.
4. On any URL change, add a 301 to the nginx directives block (see `nginx-directives.conf`).

## Files (codebase reference)
The full site is the project root. Key files:
- `index.html`, `blog.html` (article index), `article.html` (hyperthermia pillar), `treg-therapy.html`, `chronic-lyme-treatment.html`, `christina-carter.html` (author), `videos.html`, `chronicles.html`, `about.html`, `404.html`
- `blog-*.html` — ~55 articles
- `styles.css`, `pages.css`, `app.js`, `image-slot.js`
- `sitemap.xml`, `feed.xml`, `robots.txt`, `llms.txt`, `favicon.png`
- `assets/img/*.webp` — article imagery
- `dist/` — full mirror of the above
- This handoff also includes `nginx-directives.conf` (current Plesk nginx block) for reference.

---

## Server-side operations log — 2026-07-16

Work done while setting up automatic deployment and clearing a SEMrush audit.
**These changes live in Plesk / GoDaddy's managed stack, NOT in this repo** — recorded here so they're not lost.

### Automatic deployment (in-repo, see root `README.md`)
- Push to `main` → GitHub Actions minifies CSS/JS (clean-css + terser), rsyncs to
  `httpdocs`, then `chmod 644` files / `755` dirs on the server so nginx can read them.
- **Gotcha that bit us:** files written via `mktemp` are mode `600`; `rsync -a` copied
  that to the server → nginx returned **403** on CSS/JS → site rendered unstyled. Fixed
  by `--chmod=D755,F644` on rsync + an explicit server-side `chmod` step. Don't remove it.

### Plesk changes (done)
- **PHP support: OFF** for the domain (site is 100% static). Killed the flood of
  `AH01071: Primary script unknown` WordPress-probe errors and shrank attack surface.
- **HSTS:** removed a duplicate `add_header Strict-Transport-Security` (it was declared
  twice at server scope in the Additional nginx directives, sending the header twice).
- **WAF (Comodo/ModSecurity):** disabled rule **`210831`** ("Rogue web site crawler")
  via *WAF → Switch off security rules → Security rule IDs*, because it was 403-ing
  crawlers by user-agent. Keep all other rules on (they block `/.git`, `/.env`,
  `/wp-json`, restricted file extensions — all legit).

### Known-open items (server-side)
- **SemrushBot still gets 403** even after disabling rule 210831. Confirmed it's NOT
  ModSecurity (no `security2:error` log entry) and NOT `.htaccess` — it's a bad-bot
  filter in **GoDaddy's managed nginx/Apache layer**. Real users and Googlebot are
  unaffected. Resolution = GoDaddy support ticket asking them to whitelist SemrushBot
  and confirm Googlebot/Bingbot aren't caught. Repro:
  `curl -sSI -A "SemrushBot/7~bl (+http://www.semrush.com/bot.html)" https://alymelife.com/`
  (want 200, currently 403).
- **HSTS on `www`:** `https://www.alymelife.com/` 301-redirects to apex but the redirect
  response carries no HSTS header (Plesk's preferred-domain redirect lives in its own
  block). Cosmetic — the apex sends `includeSubDomains`, so browsers already enforce
  HTTPS on `www`. Optional fix: add `if ($host = www.alymelife.com) { return 301 https://alymelife.com$request_uri; }`
  to the Additional nginx directives so nginx does the redirect in-block (inherits HSTS).

### SEMrush audit fixes shipped in the repo
Minified CSS/JS (CI), gated the homepage React/Babel "tweaks" editor behind `?edit=1`,
created `privacy.html`, shortened the hyperthermia assessment `<title>` + fixed its
JSON-LD (`WebApplication`→`WebPage`), bumped `?v=` cache-busters, and added contextual
internal links to `blog-lyme-and-pregnancy.html` and `blog-lyme-vs-fibromyalgia.html`.
