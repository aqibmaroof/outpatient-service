# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Critical: Next.js version

This project runs **Next.js 16.2.9** with **React 19**. As `AGENTS.md` warns, this version has breaking changes from older Next.js — APIs and conventions may differ from training data. Before writing or changing Next.js code, read the relevant guide bundled with the installed version under `node_modules/next/dist/docs/`:

- `01-app/` — App Router docs. **This project uses the App Router** (code lives in `app/`).
- `02-pages/` — Pages Router docs (not used here).

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint (flat config, eslint-config-next)
```

No test runner is configured yet.

## Architecture & conventions

- **App Router only.** Routes are folders under `app/`; `layout.tsx` is the root layout, `page.tsx` the route component. Components are React Server Components by default — add `"use client"` only when a file needs client-side interactivity.
- **TypeScript** is `strict`. The `@/*` path alias maps to the repo root (e.g. `import x from "@/app/..."`).
- **Tailwind CSS v4.** There is no `tailwind.config.js` — Tailwind is imported and configured entirely in CSS via `@import "tailwindcss"` and the `@theme inline { ... }` block in `app/globals.css`. Add design tokens (colors, fonts) there as CSS variables rather than in a JS config. PostCSS uses `@tailwindcss/postcss`.
- **Fonts** are loaded with `next/font/google` in `app/layout.tsx` and exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`).
- **Dark mode** is handled with `prefers-color-scheme` and Tailwind `dark:` variants.

The repo is currently the default Create Next App scaffold (`app/page.tsx` is the starter landing page) — most of `app/` is yet to be built out.
