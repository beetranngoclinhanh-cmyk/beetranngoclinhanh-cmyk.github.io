# Services and Orchestration

## Runtime model

No custom service layer, API, database, authentication or analytics service is required. Static typed modules supply content at build time. React composes the interface; the browser handles fragment navigation, file links and email-client actions.

## Content preparation boundary

Before final copy and asset selection, inspect relevant source documents, record source mappings and resolve material discrepancies. Preserve original Resume DOCX and application ZIP. Curate only suitable public evidence and optimised images. This is an implementation-time preparation activity, not a visitor-facing service.

## Orchestration

1. Existing entry mounts the portfolio root.
2. Root composes the header, content sections and footer using static data.
3. Header manages its local disclosure state; section and file links invoke browser-native behaviour.
4. Vite bundles imported assets and copies only the intentionally curated public directory. Audit that directory because unused files there can still ship.
5. Existing GitHub Pages build/base-path handling remains authoritative.

## Failure behaviour

Document access uses a direct labelled link, so no embedded preview is required. A contact action opens the visitor’s email handler and makes no delivery guarantee. Unknown or inherited hashes must not render the old portfolio; the same Linh Anh page remains available. No new fallback routes or server rewrites are introduced.
