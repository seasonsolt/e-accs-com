# E-ACCS

E-ACCS is a Nextra knowledge site for AI learning notes, coding practices, agent workflows, and product observations.

## Content Workflow

All public content lives in `pages/` as MDX files.

```text
pages/
├─ index.mdx
├─ notes/
│  ├─ _meta.js
│  ├─ index.mdx
│  └─ learning-system.mdx
├─ ai-coding/
│  ├─ _meta.js
│  ├─ index.mdx
│  ├─ codex-workflow.mdx
│  └─ testing-with-ai.mdx
├─ agents/
│  ├─ _meta.js
│  ├─ index.mdx
│  └─ browser-agent.mdx
└─ products/
   ├─ _meta.js
   └─ index.mdx
```

Use `_meta.js` files to control sidebar titles and ordering.

To publish a new article:

1. Add or edit an `.mdx` file under `pages/`.
2. Update the nearest `_meta.js` if the page should appear in navigation.
3. Commit and push to GitHub.
4. Cloudflare Pages builds and deploys automatically.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static export is written to `out/`.

## Cloudflare Pages

Recommended production setup:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Production branch: `main`

Once the GitHub repository is connected to Cloudflare Pages, pushing to `main` is enough to publish content changes.
