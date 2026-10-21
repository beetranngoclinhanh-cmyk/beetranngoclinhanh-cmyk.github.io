# Linh Anh — Technology Stack Decisions

- Retain React 19 and TypeScript with the existing Vite build and package lockfile. This supports the approved single-page composition and typed static content.
- Use plain CSS/SVG and existing icon resources for the yellow/ink/cream design and decorative bee. No generated raster imagery is necessary for a code-native bee mark.
- Keep existing UI/provider dependencies only where useful; do not add a new framework, router, global state store or animation package.
- Use fragment anchors, local file links and mailto. No remote API, database, authentication, analytics integration or contact service is needed.
- Reuse Vitest and Testing Library for meaningful public-contract checks, and TypeScript/Vite for the production build.
- Preserve GitHub Pages deployment and Vite base-path behaviour; this task remains local implementation until the later publication action.
- Source extraction/asset optimisation tools are implementation utilities, not runtime dependencies. Preserve originals and publish only curated derivatives/evidence.

These choices use the repository’s declared stack; no upstream version freshness claim or dependency upgrade is required.
