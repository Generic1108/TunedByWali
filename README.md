# TunedByWali

Production marketing site for **TunedByWali** (legal: Built By Wali LLC) — a locally owned automotive performance speed shop in Canby, Oregon.

This replaces the previous Wix site with a Next.js App Router app. Business facts, hours, booking, merch, and copy live in a single source of truth: [`site.config.ts`](./site.config.ts).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Static content + `/api/inquiry` for the on-site form

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, trust strip, services, builds, about, testimonials, merch |
| `/services` | Full service menu + platforms |
| `/builds` | Gallery with captions |
| `/book` | Square booking + on-site inquiry form |
| `/contact` | Address, phone, email, hours, Instagram, map, form |
| `/shop` | GTR and G80 shirts ($25) |
| `/about` | Wali’s story, credentials, testimonials |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

`npm run build` must succeed before deploy.

## Booking & contact (already wired)

- **Square booking:** https://builtbywali.square.site/
- **Shop:** 25450 S Cass St, Canby, Oregon 97013
- **Phone:** (971) 770-8044
- **Email:** tunedbywali@gmail.com
- **Instagram:** https://www.instagram.com/tunedbywali/

Primary Book CTAs go to `/book`, which deep-links to Square and offers the on-site inquiry form.

The inquiry API validates the payload and logs it. To email the shop on submit, hook a provider (Resend, SES, etc.) in [`app/api/inquiry/route.ts`](./app/api/inquiry/route.ts).

## Customize

Edit [`site.config.ts`](./site.config.ts) for hours, services, merch, testimonials, gallery images, and copy. Components read from that file.

Hero, about, and the builds gallery use real shop photos from the live Wix Builds gallery, stored in `public/builds/`. The header/footer mark is the original brush-script logo in `public/tunedbywali-logo.jpg`. Swap files there and update `site.config.ts` when new photos land.

## Deploy

Vercel (recommended):

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: Next.js. Build command: `npm run build`. Output: default.
4. Point `www.tunedbywali.com` at the Vercel project and keep Apex/www redirects consistent.

Netlify also works with the Next.js runtime. Any Node 20+ host that can run `next build` + `next start` is fine.

After DNS cutover, update `site.url` in `site.config.ts` if the canonical host changes.

## License

Site code is for Built By Wali LLC / TunedByWali. Unsplash images remain under their respective licenses.
