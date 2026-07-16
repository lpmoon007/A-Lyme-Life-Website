# A Lyme Life — alymelife.com

Hand-built **static HTML site** (no framework, no build step, no CMS) for
Christina Carter's chronic-Lyme patient-advocacy site. Every `.html` file at
the repo root is a real, shipping page. Edit in place — see
[`docs/handoff.md`](docs/handoff.md) for conventions (adding articles, images,
voice, design tokens).

## Deployment

Deploys are **automatic**. Pushing to the `main` branch runs the
[`Deploy to production`](.github/workflows/deploy.yml) GitHub Actions workflow,
which `rsync`s the site to the Plesk VPS web root over SSH.

- **Host:** GoDaddy fully-managed Linux VPS with Plesk
- **Web root:** `/var/www/vhosts/alymelife.com/httpdocs`
- **Trigger:** push to `main` (or run the workflow manually from the **Actions** tab)
- **What is NOT touched:** nginx redirects/headers/gzip/caching live in
  Plesk → *Apache & nginx Settings → Additional nginx directives*, not in this
  repo. A reference copy is kept at [`docs/nginx-directives.conf`](docs/nginx-directives.conf).
  On any URL change, add a matching 301 there (in Plesk).
- **CSS/JS are minified in CI, not in the repo.** Keep editing the readable
  source files (`styles.css`, `pages.css`, `chronicles.css`, `app.js`,
  `image-slot.js`, `doc-page.js`, `yt-embed.js`); the deploy workflow minifies
  them (clean-css + terser) right before rsync, so only the served copies are
  minified. When you change a CSS/JS file, bump its `?v=` cache-buster in the
  `<link>`/`<script>` tags so returning visitors pick up the new version.

### One-time setup — required GitHub secrets

The workflow needs these repository secrets
(**Settings → Secrets and variables → Actions → New repository secret**):

| Secret | Value | Notes |
| --- | --- | --- |
| `DEPLOY_SSH_KEY` | The **private** SSH key (full PEM, incl. header/footer) whose public key is in `ccarter`'s `~/.ssh/authorized_keys` on the VPS | Use a dedicated deploy key, not a personal key |
| `DEPLOY_SSH_HOST` | `alymelife.com` | Or the VPS IP |
| `DEPLOY_SSH_USER` | `ccarter` | SSH user with write access to `httpdocs` |
| `DEPLOY_SSH_PORT` | The SSH port | Handoff notes it **may be non-standard**. Omit only if it is `22`. |
| `DEPLOY_REMOTE_PATH` | `/var/www/vhosts/alymelife.com/httpdocs/` | Keep the trailing slash |

The deploy uses strict host-key checking (`ssh-keyscan` on first connect), no
`--delete` (server-side files not in the repo are preserved), and the same
exclude list as the manual `deploy.sh`.

### Manual / fallback deploy

`deploy.sh` still works for a local rsync (`./deploy.sh` for a dry run,
`./deploy.sh --live` to push). Always back up `httpdocs` on the server first.

### Safety notes for a live site

- Deploys only fire from `main`, so develop on a branch and merge when ready.
- To require a manual approval before each production deploy, add **required
  reviewers** to the `production` environment
  (Settings → Environments → production). The workflow is already bound to it.
