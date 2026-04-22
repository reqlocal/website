<div align="center">

<br />

<img src="public/logo-mark.svg" alt="reqlocal" width="72" height="72" />

# reqlocal

### Landing, docs, and the full “why” story. One Next.js app.

[![npm](https://img.shields.io/npm/v/reqlocal?style=flat-square&color=2dd4bf&label=npm)](https://www.npmjs.com/package/reqlocal)
[![downloads](https://img.shields.io/npm/dm/reqlocal?style=flat-square&color=34d399&label=downloads)](https://www.npmjs.com/package/reqlocal)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/reqlocal?style=flat-square&color=059669&label=minzipped%20size)](https://bundlephobia.com/package/reqlocal)
[![license](https://img.shields.io/badge/license-MIT-34d399?style=flat-square)](../reqlocal/LICENSE)

<br />

Official marketing site and **documentation hub** for **reqlocal** — **Next.js 15** App Router, dark-first UI, and a full **`/docs`** sidebar.  
**Static-friendly.** Tailwind CSS. TypeScript-native.

<br />

[Website](./) · [Docs](#docs) · [API Reference](../reqlocal/README.md#api-reference) · [GitHub](https://github.com/Abdul-Moiz31/reqlocal)

<br />

---

</div>

## Table of contents

- [Overview](#overview)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Routes](#routes)
- [Docs](#docs)
- [Customization](#customization)
- [Building for production](#building-for-production)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Related](#related)

---

## Overview

This app is a **static-friendly** Next.js site: home includes a long-form **Why** section (problem, bad fixes, AsyncLocalStorage, what reqlocal adds), install + framework tabs, and links to **`/docs`**. Nav and footer point at **GitHub** (not npm). **`/pricing`** is a short placeholder while paid tiers are paused. The UI uses a dark theme with teal and emerald accents, DM Sans and JetBrains Mono (via `next/font`).

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Language | TypeScript |
| Lint | ESLint + `eslint-config-next` |

---

## Project structure

```text
Website/
├── app/
│   ├── globals.css          # Tailwind layers + hero background utility
│   ├── layout.tsx           # Root layout: fonts, Navbar, Footer
│   ├── page.tsx             # Home
│   ├── docs/                # Documentation (sidebar layout like isDisposable docs)
│   │   ├── layout.tsx
│   │   ├── page.tsx         # Introduction
│   │   ├── quickstart/, ai-prompt/, nextjs/, express/, fastify/
│   │   ├── typescript/, api-reference/, error-handling/
│   └── pricing/
│       ├── layout.tsx       # Pricing route metadata
│       └── page.tsx         # Pricing + FAQ + comparison table
├── components/
│   ├── docs/                # DocsSidebar, DocsProse, nav config
│   ├── AnimatedTagline.tsx  # Client: rotating hero taglines
│   ├── ApiBlock.tsx
│   ├── Features.tsx
│   ├── FooterCta.tsx
│   ├── FrameworkTabs.tsx    # Client: Express / Fastify code tabs
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── InstallBlock.tsx
│   ├── Navbar.tsx
│   ├── WhySection.tsx       # Long-form “why reqlocal” (problem / fixes / gaps)
│   ├── PricingSection.tsx   # (unused on home while pricing paused; optional)
│   ├── SectionDivider.tsx
│   └── ValueStrip.tsx
├── public/
│   ├── favicon.svg
│   └── logo-mark.svg
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Prerequisites

- **Node.js 18.18+** (Next.js 15 recommendation) or current LTS
- **npm** (or swap commands for `pnpm` / `yarn`)

---

## Getting started

Clone your monorepo (or this folder), then:

```bash
cd Website
npm install
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)**.

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server (webpack; stable default). |
| `npm run dev:turbo` | Same with **Turbopack** (faster; occasional cache quirks). |
| `npm run build` | Production build to `.next/`. |
| `npm run start` | Serve the production build (run `build` first). |
| `npm run lint` | Run Next.js ESLint rules. |

---

## Routes

| Path | Purpose |
| --- | --- |
| **`/`** | Hero, **Why** section, install snippet, framework tabs, how-it-works, features, API snapshot. |
| **`/docs`** | Documentation hub (sidebar): Introduction, Quickstart, guides, API reference, error handling. |
| **`/pricing`** | Placeholder copy only (paid tiers / prices commented out in code). |

Home anchors: **`#why-reqlocal`**, **`#install`**, **`#features`**, **`#api`**. Full prose docs live under **`/docs`**.

---

## Docs

The docs area mirrors a typical product-docs layout (similar in spirit to [isDisposable documentation](https://isdisposable.com/docs)):

| Section | Routes (with dev server running) |
| --- | --- |
| **Getting Started** | `/docs`, `/docs/quickstart`, `/docs/ai-prompt` |
| **Guides** | `/docs/nextjs`, `/docs/express`, `/docs/fastify`, `/docs/typescript` |
| **API** | `/docs/api-reference`, `/docs/error-handling` |

The sidebar highlights the current route; all pages are pre-rendered as static HTML.

---

## Customization

- **Branding:** Replace `public/logo-mark.svg` and `public/favicon.svg`. Update copy in `components/Hero.tsx`, `Navbar.tsx`, and `FooterCta.tsx`.
- **Links:** Navbar and footer use **`https://github.com/Abdul-Moiz31/reqlocal`** (no npm product links in the site chrome).
- **Pricing:** Restore paid tiers in `components/PricingSection.tsx` and `app/pricing/page.tsx` when needed; home currently omits the pricing teaser.
- **Theme:** Colors and fonts live in `tailwind.config.ts` and `app/globals.css` (e.g. `.bg-hero-glow`).

---

## Building for production

```bash
npm run build
npm run start
```

The build outputs optimized static pages where possible. Use `npm run start` to verify locally before deploy.

---

## Deployment

Deploy this directory as the **root** of a Next.js project on:

- **[Vercel](https://vercel.com/)** — import repo, set root to `Website`, framework Next.js.
- **[Netlify](https://www.netlify.com/)** — build command `npm run build`, publish directory `.next` with Next runtime, or use official Next plugin.
- **Docker / Node host** — run `npm run build` then `npm run start` (set `PORT` as needed).

No environment variables are required for the current static marketing content.

---

## Troubleshooting

### `ENOENT` / `_buildManifest.js.tmp`

Usually a **stale or corrupted** `.next` folder or **two dev servers** writing the same cache.

1. Stop all `next dev` processes.
2. From `Website/` run: `rm -rf .next`
3. Run `npm run dev` again.

If problems persist, avoid `dev:turbo` and use the default `npm run dev`.

### Styles missing

Ensure `postcss.config.mjs` loads Tailwind and that `tailwind.config.ts` `content` paths include `./app/**` and `./components/**`.

---

## Related

- **Library source & npm package:** [`../reqlocal`](../reqlocal)
- **Package README (API, install, examples):** [`../reqlocal/README.md`](../reqlocal/README.md)

---

## License

The site content is a companion to **reqlocal**; align licensing with your monorepo policy (the npm library is **MIT** — see `../reqlocal/LICENSE`).
