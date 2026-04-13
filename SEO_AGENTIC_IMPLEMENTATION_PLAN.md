# SEO Agentic Implementation Plan

## Current State

- Framework and build system: React 18 + TypeScript on Vite 5, with React Router 6.
- Rendering mode: static prerendered output using `vite build`, SSR entry `src/entry-server.tsx`, and `scripts/prerender.mjs`.
- Metadata handling: route-specific metadata already lives in `src/seo.ts` and is injected both at prerender time and on client-side navigation through `src/components/RouteSeo.tsx`.
- Routing structure: currently indexable app routes are `/`, `/about`, `/books`, `/contact`, and `/vault`; a `404.html` route is also prerendered.
- Crawl assets already present: `public/robots.txt`, `public/sitemap.xml`, and `public/ai-summary.html`.
- Structured data already present: `Person`, `WebSite`, and route-level `WebPage`/`Book` JSON-LD in `src/seo.ts`.
- Semantic HTML quality: generally acceptable, with good use of `h1`/`h2`/`h3` and alt text on major images.

## Problems Found

- `ai-summary` existed only as `public/ai-summary.html`, not as a canonical app route integrated with the main metadata system.
- `llms.txt` and `llms-full.txt` were missing.
- `public/sitemap.xml` pointed to `ai-summary.html` instead of a clean canonical route and had stale `lastmod` values.
- The prerendered JSON-LD script and the runtime `RouteSeo` script used different selectors, which could lead to duplicate structured-data scripts after client-side navigation.
- Structured-data entities referenced book fragments such as `/books#the-solarian-deep` without matching in-page anchors for every key entity.
- Breadcrumb structured data was missing even though the routing model supports it.
- Internal linking between key pages could be improved without changing layout.
- Minor accessibility and semantic issues existed in navigation and popup markup.
- Validation risk: the workspace currently has no `node_modules`, so the full Vite build cannot be executed locally in this environment.

## Exact Files To Modify

- `src/siteConfig.ts`
  Add canonical site constants, AI summary route constant, and shared SEO values.
- `src/seo.ts`
  Extend route metadata, improve JSON-LD, add breadcrumbs, and align script markers.
- `src/components/RouteSeo.tsx`
  Keep runtime metadata synchronized and prevent duplicate structured-data behavior.
- `src/App.tsx`
  Add `/ai-summary` route and remove unused provider wrappers.
- `src/components/PageLayout.tsx`
  Tighten semantics on `<main>` without changing visible layout.
- `src/components/SiteNav.tsx`
  Improve crawl/accessibility semantics with `aria-label`, `aria-current`, and `aria-expanded`.
- `src/pages/AiSummary.tsx`
  Create canonical machine-readable AI summary route.
- `src/pages/Index.tsx`
  Add stronger internal linking and accessible popup title.
- `src/pages/About.tsx`
  Improve alt text and internal links.
- `src/pages/Books.tsx`
  Add anchor IDs, align links with structured data, and improve internal linking.
- `src/pages/Vault.tsx`
  Add anchor IDs and stronger internal linking.
- `src/pages/Contact.tsx`
  Improve alt text, internal linking, and shared external-link usage.
- `index.html`
  Keep the default shell metadata aligned with the route SEO system.
- `scripts/prerender.mjs`
  Prerender the new `/ai-summary` route.
- `public/sitemap.xml`
  Update canonical route coverage and `lastmod`.
- `public/robots.txt`
  Confirm open crawl behavior and sitemap discovery.
- `public/ai-summary.html`
  Convert legacy URL into a noindex redirect to `/ai-summary`.
- `public/llms.txt`
  Add machine-readable overview.
- `public/llms-full.txt`
  Add fuller factual machine-readable reference.

## Implementation Order

1. Extend shared site config and route map for a canonical `/ai-summary` route.
2. Upgrade `src/seo.ts` and `RouteSeo.tsx` so every indexable route has consistent title, description, canonical URL, OG/Twitter metadata, and JSON-LD.
3. Add the `/ai-summary` page and prerender route.
4. Improve technical crawl assets: `sitemap.xml`, `robots.txt`, legacy `ai-summary.html`, `llms.txt`, and `llms-full.txt`.
5. Add low-risk semantic/internal-link improvements in the existing page components and navigation/footer.
6. Validate by building if dependencies are available, then inspect generated crawl assets and document the results.

## Risks And Assumptions

- Production canonical domain is fixed to `https://daviddeanehaskell.com`.
- Only content already present in the repository should be used for structured data and AI-readable summaries.
- No blog or essay route exists in this repository, so `Article` / `BlogPosting` schema is intentionally not added.
- Static hosting is assumed to serve prerendered directory routes such as `/ai-summary` from `dist/ai-summary/index.html`.
- Full build validation may remain blocked until project dependencies are installed locally, because `vite` is currently unavailable in the workspace.
- An unreferenced `src/components/SiteFooterMain.tsx` file may remain in the tree if filesystem permissions continue to block deletion, but the live layout still imports `src/components/SiteFooter.tsx`.
