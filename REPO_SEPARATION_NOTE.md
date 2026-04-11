# REPO SEPARATION NOTE

## Recommended Lean Split

- `Website_DDH_Project`
  - harness packet only
  - briefs, packet notes, strategy, approvals, deliverables, and operating memory
  - do not treat it as the live GitHub deployment repo
  - keep `node_modules`, `dist`, and deployment state out of this packet

- `Website_DDH_Repo`
  - live repo workspace only
  - standalone Git workspace outside the harness packet
  - contains `src/`, `public/`, `scripts/`, package files, lockfile, and `.git`
  - this is the workspace that connects to GitHub and Cloudflare Pages

## Operating Rule

Edit, test, build, commit, push, and deploy from `Website_DDH_Repo`.

Use the harness packet for planning and source material, then intentionally move approved content or assets into the live repo workspace. Do not run the live deployment repo as an embedded working directory inside the harness packet long term.

## Practical Deployment Shape

- Keep the repo root as the site root.
- Do not add monorepo layers or extra deployment wrappers.
- Use:
  - build command: `npm run build`
  - output directory: `dist`
- Connect the standalone repo workspace to GitHub.
- Connect the Pages project to that GitHub repo.
- Attach the root domain in Cloudflare Pages after the production deployment is live.

## Why This Split Is Cleaner

- The harness packet stays light and archival.
- The live repo stays operational and disposable.
- Git history, dependency installs, and deploy artifacts stay with the repo that actually needs them.
- Workspace bulk stops being confused with packet structure.
