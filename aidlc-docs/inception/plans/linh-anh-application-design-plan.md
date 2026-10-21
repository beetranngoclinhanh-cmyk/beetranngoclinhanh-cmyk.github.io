# Linh Anh Website — Application Design Plan

## Context

The execution plan, requirements, eight stories and three personas are approved. Design depth is minimal. One static React/Vite portfolio replaces the inherited public portfolio; GitHub Pages hosting stays in place.

## Recommended application structure

Use one scrolling portfolio with section anchors. A small site shell owns the header, mobile navigation, main content and footer. Sections cover introduction, selected analytical work, research, internships, education/awards, leadership/community and contact. Keep source-backed content in typed data, separate from presentation.

Navigation owns only its open/closed mobile state. Native section links handle navigation; selecting a link closes the mobile menu. Resume and evidence actions use direct file links; contact uses mailto. No service layer, backend or runtime data fetching is needed. Decorative bee graphics have no state or business logic. Old template selection, unrelated talk/journal routes and inherited content are excluded from the new public experience.

The visual direction is warm yellow, dark ink and cream, strong editorial typography and restrained bee/flight-path details. The design defines responsibilities and interfaces; the implementation plan determines exact files and copy after source inspection.

## Design considerations evaluated

- Components: separate reusable navigation/evidence controls from content sections.
- Interfaces: read-only typed section data and explicit link properties; no complex domain methods.
- Services: static module data and browser-native actions satisfy approved scope.
- Dependencies: shell composes sections; sections read content; content references curated local assets.
- Pattern: one-way React data flow and local navigation state; no global store or new dependency required.

## Checklist

- [x] Review approved requirements, stories and execution-plan scope.
- [x] Inspect current React entry, provider, HTML metadata and TypeScript boundaries.
- [x] Prepare recommended components, interfaces and dependency approach.
- [x] Receive and validate design approach choice and plan approval.
- [x] Generate `components.md` with responsibilities and interfaces.
- [x] Generate `component-methods.md` with signatures and input/output contracts.
- [x] Generate `services.md` documenting static orchestration and browser-native actions.
- [x] Generate `component-dependency.md` with dependency matrix and text data-flow description.
- [x] Generate `application-design.md` consolidating these decisions.
- [x] Validate consistency and story coverage; update checkboxes and workflow state.
- [x] Present generated design for review before Construction.

Artifacts will be stored in `aidlc-docs/inception/application-design/linh-anh/` to preserve inherited design records.

## Question 1: Design approach

Which application structure should guide the design artifacts?

A) Approve the recommended single-page structure, typed static content, local mobile-menu state and direct resume/evidence/contact actions.
B) Request a multi-page portfolio structure with separate pages for the main sections; retain static content and hosting.
C) Other (describe requested design changes after the answer tag).

[Answer]: A — recommended structure approved in chat.

## Extension compliance

- Security Baseline: N/A — explicitly disabled in approved requirements.
- Property-Based Testing: N/A — explicitly disabled in approved requirements.

No optional extension rule files are loaded.
