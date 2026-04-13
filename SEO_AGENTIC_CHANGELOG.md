# SEO Agentic Changelog

## What Changed In This Pass

- Created repo-root `AGENTS.md` with repository-wide rules restricting further work to behind-the-scenes SEO, machine-readability, and crawlability changes only.
- Completed a final pre-deploy cleanup pass limited to warning fixes and safe nonfunctional cleanup.
- Moved the Google Fonts `@import` to the top of `src/index.css` so it precedes Tailwind directives and no longer triggers the CSS import-order warning.
- Replaced the hero image `fetchPriority` prop in `src/pages/Index.tsx` with a DOM-safe lowercase attribute spread so SSR now emits `fetchpriority="high"` without the React warning.
- Kept `/ai-summary` as an unlinked machine-facing route in the app metadata system and prerender flow.
- Tightened `public/llms.txt` into a concise machine-navigation file with clear route-by-intent guidance.
- Expanded `public/llms-full.txt` with stronger identity disambiguation, lane structure, routing guidance, and official off-site endpoints.
- Refined `src/seo.ts` JSON-LD to strengthen entity clarity by adding:
  - `givenName`, `additionalName`, and `familyName` on `Person`
  - a `description` on `WebSite`
  - `breadcrumb` linkage on pages where applicable
  - explicit `mainEntity` mapping for `/about`, `/books`, `/vault`, and `/ai-summary`
  - a dedicated `ItemList` for the vault route
- Aligned `index.html` fallback metadata and JSON-LD with the active route-level SEO system so the source shell no longer carries stale OG/Twitter descriptions.
- Preserved `public/robots.txt` and `public/sitemap.xml` as open crawl assets pointing at the canonical production domain and canonical `/ai-summary` route.
- Reverted the earlier visible copy/UI additions from page content and footer navigation so the final state remains behind-the-scenes only.

## Files Created

- `AGENTS.md`
- `SEO_AGENTIC_CHANGELOG.md`
- `public/llms.txt`
- `public/llms-full.txt`
- `src/pages/AiSummary.tsx`
- `SEO_AGENTIC_IMPLEMENTATION_PLAN.md`

## Files Modified

- `index.html`
- `public/ai-summary.html`
- `public/robots.txt`
- `public/sitemap.xml`
- `scripts/prerender.mjs`
- `src/App.tsx`
- `src/components/PageLayout.tsx`
- `src/components/RouteSeo.tsx`
- `src/components/SiteNav.tsx`
- `src/index.css`
- `src/pages/About.tsx`
- `src/pages/Books.tsx`
- `src/pages/Contact.tsx`
- `src/pages/Index.tsx`
- `src/pages/Vault.tsx`
- `src/seo.ts`
- `src/siteConfig.ts`

## Visible UI / Public Copy Check

- Final status: no intended visible UI changes remain in the live app path.
- Reverted in this pass:
  - added footer links
  - added visible internal-link paragraphs on content pages
- Remaining page-file edits are non-visual or machine-layer only:
  - route anchors for schema targets
  - alt-text refinements
  - accessibility-only markup
  - metadata and JSON-LD infrastructure

## Validation

- Checked metadata-system consistency in source:
  - `src/seo.ts` is the active route metadata source
  - `src/components/RouteSeo.tsx` and `index.html` now use the same structured-data marker strategy
  - `index.html` fallback OG/Twitter descriptions were aligned with the route metadata copy
- Completed `npm run build` successfully.
- Confirmed the CSS import-order warning is gone from the build output.
- Confirmed the React SSR `fetchPriority` warning is gone from the build output.
- Confirmed the prerendered home page now emits `fetchpriority="high"` in generated HTML rather than `fetchPriority`.
- Checked machine-layer files:
  - `public/robots.txt` allows crawling and points to `https://daviddeanehaskell.com/sitemap.xml`
  - `public/sitemap.xml` includes `/`, `/about`, `/books`, `/contact`, `/vault`, and `/ai-summary`
  - `public/llms.txt` and `public/llms-full.txt` exist and reference canonical routes
  - legacy `public/ai-summary.html` now redirects to canonical `/ai-summary`
- Checked route visibility:
  - `/ai-summary` remains routed in `src/App.tsx`
  - visible app navigation does not link to `/ai-summary`

## Remaining Warning / Unvalidated Items

- Build warning still present:
  - `Browserslist: browsers data (caniuse-lite) is 10 months old. Please run: npx update-browserslist-db@latest`
- This warning did not block the build and is unrelated to the targeted CSS import-order and `fetchPriority` fixes.

## Assumptions

- Canonical production domain is `https://daviddeanehaskell.com`.
- Static hosting will serve `dist/ai-summary/index.html` at `/ai-summary`.
- Existing official external links already present in the repository remain authoritative.

## Residual Note

- `src/components/SiteFooterMain.tsx` is unreferenced and safe to remove, but deletion was blocked in this environment, so it remains on disk for now.
