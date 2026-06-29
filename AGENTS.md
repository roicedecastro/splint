# AGENTS.md

## Cursor Cloud specific instructions

Splint is a single front-end app: **React 18 + Vite + Tailwind CSS v4 + React Router v6**. There is no backend; all data is static under `src/data/` (sample/seed data — replace with real data when available).

Standard commands live in `package.json` (`dev`, `build`, `preview`) and `README.md`. Notes that aren't obvious from those:

- **Run (dev):** `npm run dev` serves at `http://localhost:5173`. Vite auto-increments the port (5174, …) if 5173 is already taken, so check the startup log for the actual URL.
- **Build:** `npm run build` first runs `scripts/generate-headers.js`, which writes `public/_headers` (HTTP Basic-Auth for Netlify). That file is generated/gitignored — do not commit it. Credentials come from `BASIC_AUTH_USER` / `BASIC_AUTH_PASSWORD` env vars, defaulting to `splint` / `V&R26`.
- **Lint/tests:** none are configured (no lint or test script in `package.json`).
- **Stale Vite cache gotcha:** if the dev server is started before deps/source exist, or right after dependency changes, the optimized-deps cache (`node_modules/.vite`) can go stale and the browser shows a blank page with `Uncaught ReferenceError: React is not defined`. Fix: stop the server, `rm -rf node_modules/.vite`, and restart `npm run dev` (a hard refresh sometimes suffices). This is a cache artifact, not an app bug.
