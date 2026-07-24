# Joseph Gurak — Portfolio

DEX-focused personal site for GitHub Pages: Nexthink credentials, endpoint automation, and project work framed for Digital Employee Experience roles.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Site is configured with `base: '/NewPortfolioSite/'` for project Pages at:

`https://JosephGurak.github.io/NewPortfolioSite/`

## Content

- Projects: [`src/data/projects.ts`](src/data/projects.ts)
- Certifications: [`src/data/certifications.ts`](src/data/certifications.ts)
- Certificate PDFs / thumbs: [`public/certs/`](public/certs/)

## Deploy

Push to `main` — the GitHub Actions workflow builds and deploys to GitHub Pages.
