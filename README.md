# Trollology — JS-Only Next.js Starter (Vercel-ready)

A clean JavaScript (no TypeScript) Next.js 14 App Router project with Tailwind CSS.
Designed for a scholarly + visual "universe" site: home hero, catalog, search,
character pages, sources, illustrations, essays, about, contribute, store, 404.

## Quick Start

```bash
# 1) Install dependencies
npm install

# 2) Run locally
npm run dev   # then open http://localhost:3000

# 3) Build for production (Vercel will do this automatically)
npm run build && npm start
```

## Deploying to Vercel

- Push this folder to a GitHub repo (files at repo root: app/, components/, lib/, public/, package.json, next.config.js, tailwind.config.js, postcss.config.js).
- In Vercel: Add New → Project → Import from GitHub → select this repo → Deploy.
- No TypeScript, no custom Node flags required.
- next.config.js uses CommonJS to avoid ESM parsing issues on build.

## Where to add content

- `lib/data.js` holds seed entries for the catalog (trolls, regions, habitats). Extend or swap to a CMS later.
- Add images under `public/images/` and reference with `/images/yourfile.jpg`.

## Next steps

- Add more sections per your roadmap (timelines, maps, footnotes, printable PDFs).
- Add a CMS (e.g., Sanity) and/or Typesense search later.
- Replace placeholder art with your own illustrations and expand Catalog entries.
