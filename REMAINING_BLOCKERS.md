# REMAINING BLOCKERS

## Hard Blockers

No hard blockers remain for a GitHub -> Cloudflare Pages deployment from a clean standalone repo workspace.

## Follow-Up Items That Are Not Blocking Launch

- Build warning only:
  - `Browserslist: browsers data (caniuse-lite) is 10 months old`
  - This does not block build, test, or deploy.
  - Fix only when you are ready to refresh dependencies with network access and intentionally update the lockfile.

- ESLint warnings only:
  - 7 `react-refresh/only-export-components` warnings remain in shared shadcn UI files.
  - These do not block build, test, or deploy.

## Weight Sources In This Workspace

- `.git`: `2.63 MB`
- `node_modules`: `244.16 MB`
- `dist`: `4.34 MB`
- `public`: `1.85 MB`
- `src`: `2.22 MB`

## Main Bulk Driver

- The heaviest media file is `vault-books-composite.jpg` at about `1.45 MB`.
- It exists in both:
  - `src/assets/vault-books-composite.jpg`
  - `public/social/vault-books-composite.jpg`
- That means it also lands twice in `dist`:
  - hashed app asset
  - social/OG asset

This is not a launch blocker, but it is the clearest anti-bloat candidate if you want one later cleanup pass.
