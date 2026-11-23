# Guidepost Labs — Studio Website

A production-oriented, responsive website for Guidepost Labs, the community-driven Web3 product studio. This repository contains the **studio website and product directory**; it does not contain the Strike, DropCheck or MintPulse applications/bots themselves.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript (strict)
- Custom CSS design system (no UI framework dependency)
- Static generation for the known pages and product routes
- Vercel-ready deployment

The site has no database, authentication, wallet connection, analytics SDK or server-side API integration. Product descriptions and availability are centralized in `lib/site.ts`.

## Requirements

- Node.js 22 LTS (Node 20.9+ is the Next.js minimum)
- npm 10+

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate and build

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

`npm run build` creates the optimized production build. The build was **not executable in the authoring environment** because outbound DNS to `registry.npmjs.org` failed during dependency installation (`EAI_AGAIN`). Run the commands above in a network-enabled environment before deploying.

## Deploy to Vercel

1. Push this project to the intended Git repository.
2. Import the repository into Vercel and select the project root as the Root Directory.
3. Vercel should detect Next.js automatically. No environment variables are required for the current site.
4. Deploy a preview and test all routes on desktop and mobile.
5. Attach `guidepostlabs.xyz` only after the founder confirms domain/DNS access and approves the production build.

## Project structure

```text
app/
  page.tsx                    Home
  products/page.tsx           Product directory
  products/[slug]/page.tsx    Static product detail routes
  community/page.tsx          Community entry point
  studio/page.tsx             Studio positioning and process
  robots.ts                   Search crawler rules
  sitemap.ts                  Sitemap
components/                   Shared navigation, footer, cards and shell
lib/site.ts                   Single source of truth for product status and links
public/brand/                 Original supplied PNG brand assets
strategy/                     Architecture and release notes
```

## Updating product status or links

Edit the relevant product record in `lib/site.ts`. The same record powers the home page, product directory and product detail page. Do not add a public application URL until the product owner has supplied and verified it. Strike currently points access enquiries to the official Discord; DropCheck points launch updates to the same community because a public application URL has not yet been supplied.

## Confirmed product states

| Product | Confirmed state | Public access |
|---|---|---|
| Strike | Completed | Special access required |
| DropCheck | Final development stage | Public launch planned; no application URL supplied |
| MintPulse | In development | No installation URL supplied |

Official community: https://discord.gg/TwbwfjJmh

## Brand handling

The supplied icon, lockup and banner are preserved in `public/brand/` and used without recreating the symbol or wordmark. Interface colors are taken from the existing visual direction; they are UI tokens, not a claim about an official brand color specification.

## Important boundaries

- DropCheck's detail page describes its documented intended scope, not a claim that every capability has passed production acceptance testing.
- No OpenSea partnership or endorsement is implied.
- No traction, user counts, investors, integrations or product metrics have been invented.
- The studio's community-to-product process is labeled as a proposed working loop until roles and moderation practices are confirmed.
