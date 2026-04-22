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

