# Linh Anh — Code Generation Plan

## Unit context

Workspace: `/Users/nhamquochung/beetranngoclinhanh-cmyk.github.io`.
One static portfolio unit implements US1–US8. Approved inputs are the Linh Anh requirements, stories/personas, application-design artifacts and NFR requirements/design. There are no other units, runtime services, database entities or API/repository layers. Existing React/TypeScript/Vite, Vitest and GitHub Pages tooling remain.

Application files belong under the workspace root. Workflow/source notes belong in aidlc-docs. This numbered plan is the single source of truth for implementation; modify existing files in place and avoid alternate copies of App.

## Planning checklist

- [x] Review approved architecture, content contracts, story mappings and Q1–Q17.
- [x] Review existing entry, App, styles, public directory, tests, configuration and code-structure documentation.
- [x] Identify target files, dependencies, generation sequence and verification needs.
- [x] Present this complete plan for approval.
- [x] Receive explicit approval covering all implementation steps — user: approve.

## Implementation sequence

- [x] Step 1 — Prepare source-backed content and asset inventory (US1–US7). Read the clean Resume DOCX and extract relevant project/research/evidence text from the application ZIP using available tools. Inspect candidate images before selection. Record extracted content, source mappings, planned/pending distinctions and discrepancies in `aidlc-docs/construction/linh-anh/code/source-content.md`. Preserve originals. Do not use a materially disputed claim without resolving it; omit unsupported detail where a truthful source-backed summary suffices.

- [x] Step 2 — Curate public assets (US2, US6, US7; Q6–Q8, Q13). Create `src/assets/linh-anh/` for selected optimised photos/project imagery and appropriately curated evidence/resume files. Use the supplied DOCX as a clearly labelled downloadable resume if a faithful PDF cannot be produced reliably. Do not ship the full source archive, large video or unrelated private evidence. Create `public/bee.svg` as a small code-native favicon and remove the unused `public/vite.svg`. Record asset provenance and sizes in source-content.md.

- [x] Step 3 — Create typed content (US1–US7). Add `src/data/linhAnh.ts` with profile, navigation, projects, research, internship, education, awards, skills, community and document references. Use build-resolved asset imports. Keep actual student roles, skill levels, dates and planned/pending labels. Public contact is beetranngoclinhanh@gmail.com. Do not invent a portrait, social accounts, metrics or quotes.

- [x] Step 4 — Implement the portfolio and navigation (US1–US8). Replace `src/App.tsx` in place with the single-page composition. Create `src/components/linh-anh/SiteHeader.tsx`, `BeeMark.tsx`, `SectionHeading.tsx` and `EvidenceLink.tsx` as useful reusable components. Render all approved sections with semantic headings and landmarks, direct anchors/file links/mailto, a skip link and stable data-testid attributes on interactive controls. Header state is local; Escape closes the mobile menu and restores focus, selecting a link closes it. Inherited template/talk/journal routes must not mount from the new root.

- [x] Step 5 — Apply the visual system (US1, US8; Q1–Q8). Replace `src/App.css` and `src/index.css` in place with warm yellow/ink/cream responsive styles, editorial type, purposeful project imagery and subtle decorative bee/flight-path graphics. Remove inherited global theme styling and remote font imports. Adjust `src/main.tsx` only as needed to avoid inherited colour-mode/provider behaviour overriding the approved palette. Provide visible focus, adequate control sizes, reduced-motion handling, image dimensions and mobile disclosure styling. Verify contrast token pairs mathematically.

- [x] Step 6 — Replace public metadata and align documentation (US1, US7, US8). Update `index.html` title, description, favicon and social metadata with factual Linh Anh content and no invented hosted URL. Review `README.md` and `DEPLOYMENT.md`; amend current setup/portfolio instructions for this identity and retain applicable Pages instructions. Audit public files and build import paths for inherited identity. Preserve historical aidlc-docs and original sources. Keep the existing Pages workflow and Vite base-path behaviour; change configuration only if verification exposes a concrete issue.

- [x] Step 7 — Update meaningful tests (US1–US8; Q16–Q17). Replace `src/App.test.tsx` and `src/TalkRoute.test.tsx` contracts that depend on the retired public root with relevant identity, navigation, unknown/inherited hash and action tests. Add `src/components/linh-anh/SiteHeader.test.tsx` for disclosure, selection and Escape/focus behaviour. Adapt or remove obsolete theme/public-root assertions only where the approved replacement retires their contract; retain useful independent helper tests. Verify resume/evidence references and pending/planned statuses. Do not write implementation-mirroring decorative tests.

- [x] Step 8 — Validate and present the working result (all stories). Install existing lockfile dependencies if needed; run relevant tests and production build, fixing regressions in the approved scope. Inspect dist assets and local link targets, measure curated file sizes and check for inherited identity in public output. Use supported local preview/browser tools where available, following the Sites local-preview reference before preview; assess 320, 390, 768 and 1440px layouts and keyboard flow where possible. Document unavailable visual checks. Write `aidlc-docs/construction/linh-anh/code/code-generation-summary.md` with changed files, story coverage, results and limitations; update all completed checkboxes and present generated code for review before formal Build and Test.

## Story implementation tracking

- [x] US1 — identity and introduction.
- [x] US2 — analytical projects.
- [x] US3 — research contributions.
- [x] US4 — internships and skills.
- [x] US5 — academic development and status labels.
- [x] US6 — leadership/community and evidence.
- [x] US7 — resume and contact.
- [x] US8 — accessible responsive navigation.

Mark each story complete when its implementation and relevant checks are finished. Formal stage approval follows the working-result review.

## Exclusions and verification boundaries

No backend, API, database migration, custom hosting, dependency upgrades, deployment, push or publication is included. Keep unrelated source/history intact. Old source modules that are unreachable from the new public tree may remain if removing them adds unnecessary risk; they must not leak into the public build. TypeScript includes all src files, so intentional interface retirement must be reflected in affected test imports.

## Extension compliance

Security Baseline and Property-Based Testing: N/A — explicitly disabled. Normal build, interaction, accessibility and content-integrity checks remain required.
