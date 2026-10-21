# Linh Anh — Non-Functional Requirements

## Scope and basis

One static portfolio; approved application design and US1–US8 are the functional basis. Functional Design was explicitly skipped. These are implementation acceptance targets, not claims of measured production performance or formal accessibility certification.

## Accessibility and usability

- Q1: Normal text contrast at least 4.5:1; large text at least 3:1. Essential control boundaries and focus indicators contrast at least 3:1 against adjacent colours. Verify actual foreground/background pairs.
- Q2: All navigation, resume, evidence and contact controls are keyboard accessible, with visible focus. Provide a skip-to-main link, semantic landmarks, one primary heading and ordered section headings.
- Q3: Mobile-menu toggle has an accessible name, aria-expanded and aria-controls. Selecting an item closes it; Escape closes it and returns focus to the toggle. Hidden links must not remain keyboard focusable.
- Q4: Respect prefers-reduced-motion. Decorative bee/flight-path elements are hidden from assistive technology; meaningful images have context-appropriate alternatives.
- Q5: At 320, 390, 768 and 1440 CSS-pixel viewport widths, content fits without page-level horizontal scrolling. Body text is at least 16 CSS pixels; prose line length is generally no wider than 75 characters. Interactive targets aim for at least 44 by 44 CSS pixels, including padding.

## Performance and delivery

- Q6: No automatic video, runtime document previews or remote data requests are needed. Keep the application archive and unused source documents outside public output. Evidence downloads load only through deliberate visitor actions.
- Q7: Aim for at most 2 MB of eager first-view transferred assets, excluding on-demand resume/evidence downloads. Record build-reported bundle sizes; do not claim transfer timing or Core Web Vitals without measurement.
- Q8: Optimise selected photographic assets to at most 500 KB each where reasonable; provide dimensions/aspect ratios to reduce layout shifts. Below-the-fold photos use lazy loading. Prefer system or locally supplied fonts over additional external font requests.

## Reliability, availability and scalability

- Q9: Retain static GitHub Pages hosting and Vite base-path compatibility. No custom uptime, throughput or recovery SLA is introduced. Availability and traffic capacity depend on the existing host; no backend scaling is required.
- Q10: Section anchors, local document URLs and email destinations resolve correctly in production output. Unknown/inherited hashes must not mount the old portfolio. Resume access does not depend on inline document rendering.
- Q11: Preserve originals and version-controlled source for recovery. Record build/test commands and any verification limits in the final handoff.

## Content integrity and privacy

- Q12: Dates, role boundaries, skill levels and completed/pending/planned statuses match inspected sources. Document discrepancies before using affected claims; do not invent financial or model performance results.
- Q13: Curate public evidence before copying it into published assets. Exclude unrelated/private source records, old-person assets, absent phone numbers and private addresses. The approved public email remains visible.
- Q14: No runtime secrets, authentication, message delivery or third-party tracking are required. External links opening new tabs use appropriate relationship attributes. No disabled optional extension requirements are introduced.

## Maintainability and verification

- Q15: Separate typed source-backed content from reusable presentation. Preserve the existing package/lockfile unless a demonstrated implementation need requires changes. Do not add services or dependencies for static content.
- Q16: Production TypeScript/Vite build passes. Relevant tests cover the new public contract: menu interaction, navigation, accurate identity/status labels, resume/evidence links and mailto destination. Replace tests for retired behaviour only when their contracts are intentionally removed.
- Q17: Inspect final output and public assets for inherited identity and unrelated content. Perform viewport/keyboard/browser visual checks when supported; clearly distinguish automated checks, manual checks and checks unavailable in the environment.

## Acceptance mapping

US1: Q1, Q2, Q5, Q12. US2–US6: Q4, Q6–Q8, Q12–Q13. US7: Q10, Q13–Q14. US8: Q1–Q11, Q16–Q17. Maintainability applies across stories through Q15.

## Extension compliance

Security Baseline: N/A — explicitly disabled, full rule file skipped. Property-Based Testing: N/A — explicitly disabled, full rule file skipped. Routine accessibility, content integrity and safe link/asset handling remain part of the approved website requirements.
