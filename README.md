# Trần Ngọc Linh Anh — Personal Portfolio

An English student portfolio connecting data science, analytics, economics, finance and community impact. Built with React, TypeScript and Vite, with a warm yellow palette and a hardworking-bee motif.

## Run locally

Use Node.js 20.19+ or a compatible newer version, and npm.

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite. The page includes selected work, research, internships, education/awards, leadership/community, resume and email actions.

## Edit content

- `src/data/linhAnh.ts`: profile, projects, research, experience, awards, skills and community entries.
- `src/App.tsx`: page composition and section content.
- `src/components/linh-anh/`: navigation and shared presentation.
- `src/App.css` and `src/index.css`: responsive design and global styles.
- `src/assets/linh-anh/`: curated project evidence, images and supplied clean resume.
- `index.html`: title, description and social metadata.

Keep dates and roles consistent with source evidence. Label pending exams and future plans explicitly. Do not copy the full application archive or signed/private documents into `public/`; Vite publishes that directory even when files are not imported.

## Verify

```sh
npm test
npm run build
npm run preview
```

The production output is `dist/`. See `DEPLOYMENT.md` for GitHub Pages. AI-DLC plans, source notes and verification records live under `aidlc-docs/` and are not website content. Inherited source modules remain where useful for history/shared checks, but the current App does not expose the old template, journal or career-talk routes.
