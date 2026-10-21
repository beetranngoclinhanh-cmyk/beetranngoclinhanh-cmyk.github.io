# Linh Anh Website — Application Design

## Decision

One scrolling static React portfolio replaces the inherited public experience. Keep React/TypeScript/Vite and GitHub Pages. Use a composition root, a small navigation disclosure, typed read-only content, semantic content sections and browser-native actions. There is no custom runtime service layer.

## Page and visual structure

A warm yellow introduction leads into selected analytical work, research, internships, education/awards, leadership/community and contact. Dark ink typography and cream surfaces provide contrast. Subtle bee/flight-path graphics express diligence; they are decorative. Exact copy and suitable source imagery will be prepared from the supplied documents during implementation.

## Ownership and interfaces

PortfolioApp owns composition and passes static content to sections. SiteHeader owns mobile disclosure state. Stable fragment IDs connect navigation to sections. Shared evidence links use explicit labels and curated local asset references. Resume and contact are direct document/mailto links. Pending achievements remain explicitly labelled in content data.

## Dependency and publication boundaries

One-way React data flow; no remote data, global store or new service dependency. Remove inherited template/talk/journal entry points from the public tree and audit static public files. Preserve source archives and historical documentation outside the published asset set. Retain existing Pages base-path handling.

## Detailed artifacts

- [Components](components.md): responsibilities, content boundaries and interfaces.
- [Component methods](component-methods.md): signatures, navigation actions and outputs.
- [Services](services.md): static orchestration, preparation boundary and browser behaviour.
- [Dependencies](component-dependency.md): dependency matrix, text data flow and story coverage.

## Validation and remaining work

The design covers all eight approved stories without introducing an editing interface, financial service or backend. Interface tables and Markdown were validated before writing. Source-document discrepancies and exact asset choices are implementation prerequisites, not assumed resolved here. Responsive targets, contrast, motion and delivery budgets will be specified in the approved next NFR stages.

## Extension compliance

- Security Baseline: N/A — disabled by approved requirements answer 2B.
- Property-Based Testing: N/A — disabled by approved requirements answer 3C.

Full disabled-extension rules were not loaded.

## Next stage

After generated-design approval, proceed to Construction: minimal NFR Requirements, followed by NFR Design. Units Generation and Functional Design remain skipped as approved; the user may include Units Generation if desired.
