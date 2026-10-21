# Linh Anh — NFR Design Patterns

## Colour and readability — Q1, Q2, Q5

Use a warm yellow base (#F7D84A), dark ink (#24271D), and cream (#FFFBEA). Supporting text must use a dark, readable colour rather than low-opacity ink. Validate actual computed foreground/background combinations before acceptance; candidate tokens alone do not prove rendered contrast. Underline text links where needed and use a solid focus outline with offset. Use at least 16px body text and a maximum prose width near 70ch.

## Responsive composition — Q5

Start with one-column flow; introduce project grids and split introduction layouts only when content fits. Use flexible spacing and font sizes, min-width: 0 on grid children, wrapping labels and overflow-wrap on long email/document text. At narrow widths, show the mobile navigation disclosure. Check widths 320, 390, 768 and 1440 CSS pixels; do not hide page overflow to mask layout defects.

## Accessible navigation — Q2–Q4

Use header/nav/main/footer landmarks, a skip link and one h1. Section anchors point to stable IDs and have scroll margin below the header. Navigation is a non-modal disclosure with a real button, aria-expanded and aria-controls. Hidden content is not focusable; link activation closes the menu; Escape closes it and restores toggle focus. Decorative bees use aria-hidden and do not receive focus. Respect prefers-reduced-motion by suppressing decorative motion and smooth scrolling.

## Asset delivery — Q6–Q8, Q13

Inspect source evidence before selecting assets. Optimise chosen photos to suitable web sizes and generally at most 500 KB each; provide dimensions/aspect ratios and lazy-load below-the-fold imagery. Keep eager first-view assets within the proposed 2 MB target and document actual build sizes. Prefer system fonts, code-native decorative SVG and no video autoplay. PDFs and resume downloads are deliberate file links rather than eager embeds.

Audit both imported assets and public-directory files: Vite can copy public files even if they are not imported. Keep the original archive, unused evidence, historical documents and unrelated assets outside published output. Label file formats and new-tab actions where useful.

## Static reliability — Q9–Q11, Q14

Retain GitHub Pages and Vite base-path handling; use bundled asset references or base-aware public URLs. Native anchors and mailto do not require API calls, retries, caching services or delivery status. Unknown/inherited hashes leave the Linh Anh page rendered and do not load old talk/journal views. Provide direct document access without requiring embedded preview support. Preserve originals and version-controlled implementation for recovery.

## Content accuracy and maintainability — Q12, Q15

Use typed read-only content with explicit pending/planned labels and source references in internal documentation. Separate public display copy from internal source notes. Retain the existing toolchain; add no dependencies without a demonstrated need. Describe contribution scope and skill levels accurately; resolve material evidence discrepancies before affected claims are published.

## Verification — Q16, Q17

Run the TypeScript/Vite production build and relevant public-contract tests. Check mobile-menu state/focus, section destinations, email/resume/evidence links, status labels and removal of inherited identity. Inspect generated output and asset sizes. Browser checks, when supported, cover representative viewports, keyboard flow and visual hierarchy; report unavailable checks honestly. No production timing or accessibility-certification claims are inferred from build success.

## Extension compliance

Security Baseline and Property-Based Testing: N/A — both disabled by approved requirements. Their full rules remain unloaded.
