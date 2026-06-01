# AGENTS.md

## Commands
- Use npm; `package-lock.json` is the only lockfile.
- Install dependencies with `npm install`.
- Run the dev server with `npm run dev` at `http://localhost:3000`.
- Verify production output with `npm run build`.
- Lint with `npm run lint`; config is only `next/core-web-vitals` in `.eslintrc.json`.
- There is no test runner or test script configured. For type-only checks, use `npx tsc --noEmit`.

## App Structure
- This is a Next.js 14 App Router site rooted in `src/app`.
- Routes currently are `/` (`src/app/page.tsx`), `/servicios`, and `/contacto`.
- `src/app/layout.tsx` always wraps pages with `Header`, floating `WhatsApp`, `Footer`, Vercel `Analytics`, and `SpeedInsights`.
- Shared site content lives in `src/data.ts`; service cards and reviews read from there rather than fetching.
- Components are colocated in `src/components/<snake_case_name>/` with matching CSS modules.
- Use the `@/*` path alias for `src/*`; existing static image imports often use `@/../public/...`.

## Styling And Assets
- Styling is plain CSS modules plus global variables in `src/app/globals.css`; there is no Tailwind or UI library.
- Global brand tokens are CSS variables such as `--clr-primary`, `--clr-secondary`, `--font-basic`, and `--font-accent`.
- `next.config.js` only allows remote images from `lh3.googleusercontent.com` and `lh5.googleusercontent.com`; add domains there before using other remote `next/image` sources.

## Environment And Integrations
- Google Maps embed uses `process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` in `src/components/google_map/google_map.tsx`; `.env.local` exists locally and is gitignored.
- WhatsApp CTAs use phone `34613196340` in header/footer/floating button/CTA; the contact page also displays `+34 627749546`.
- `src/components/contact_form/contact_form.tsx` is a client Formspree form with hard-coded form id `xdoqgary`, but it is currently commented out in `src/app/contacto/page.tsx`.

## Conventions
- Add `"use client"` only for components that need hooks, browser events, or client-only libraries.
- Keep page copy in Spanish unless intentionally changing locale/content strategy.
- Do not commit `.env*.local`, `.next/`, `node_modules/`, `next-env.d.ts`, or `*.tsbuildinfo`; these are ignored in `.gitignore`.
