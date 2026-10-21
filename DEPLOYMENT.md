# GitHub Pages deployment

The existing `.github/workflows/deploy.yml` or similarly named Pages workflow builds this React/Vite portfolio and publishes `dist/` through GitHub Actions. No backend is needed.

## Local verification

```sh
npm ci
npm test
npm run build
npm run preview
```

Review the website, file downloads and mobile navigation before publishing. The implementation task does not itself push or deploy changes.

## Repository setup

1. In GitHub repository Settings → Pages, select GitHub Actions as the source.
2. Review and commit the intended application changes. Keep private application evidence and unused originals out of published assets.
3. When ready to publish, push the reviewed commit to `main`, or run the configured deployment workflow manually.
4. Inspect the workflow result and use its reported Pages URL. Do not infer deployment success from a local build.

The workflow derives `VITE_BASE_PATH` from the repository name: `/` for an owner website, and `/repository/` for a project website. `vite.config.ts` consumes that value. Imported asset URLs and the favicon follow the configured base.

## Output checks

- `dist/index.html` and its assets contain Linh Anh’s identity and current metadata.
- Resume and evidence downloads point to curated local files.
- `dist/` contains no full source ZIP, signed letters, inherited portrait or unrelated old-person content.
- Native section anchors work on refresh; there are no server-side routes to configure.

## Recovery

Revert the relevant application commit and rerun the deployment workflow. Preserve original source documents and append-only AI-DLC audit records.
