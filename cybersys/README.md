# CyberSys Technologies website

Company website for CyberSys Technologies, built with React 19, TypeScript and Vite. Styling uses Tailwind (loaded from a CDN in `index.html`).

## Run locally

Requires Node.js.

```
npm install
npm run dev       # http://localhost:3000
npm run build     # type-check, then build into dist/
npm run preview   # serve the built site
```

## Structure

- `App.tsx` – hash-based page routing (`#solutions`, `#industries-oil-gas`, ...), plus redirects for old addresses
- `components/` – layout (navbar, footer), home page slideshow and partner section, shared page building blocks
- `pages/` – one file per page
- `data/` – solution catalogue and industry content
- `constants.tsx` – navigation menu, C.O.R.E. pillars, CS5 framework
- `public/` – logos and photos (sources listed in `REVAMP_LOG.md`)

The contact form sends through FormSubmit to info@cybersystechnologies.com.

See `REVAMP_LOG.md` for the full history of the 2026 redesign.
