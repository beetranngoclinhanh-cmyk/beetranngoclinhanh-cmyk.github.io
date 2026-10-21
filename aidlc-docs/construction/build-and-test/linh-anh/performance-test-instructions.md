# Linh Anh — Performance Verification

## Applicable scope

This portfolio has no custom concurrency, response-time or uptime SLA. Backend load/stress testing is N/A; existing static hosting provides delivery. No production traffic test or Core Web Vitals measurement was performed.

## Asset budget checks

Run npm run build and inspect the reported output sizes. Targets: eager first-view assets at most 2 MB; selected JPEGs generally at most 500 KB; documents loaded by explicit action rather than embedded eagerly.

Recorded final values, rounded:

- JavaScript: 212.91 KB raw, 67.34 KB gzip.
- CSS: 20.37 KB raw, 4.91 KB gzip.
- SIM-LSE JPEG: 135.92 KB.
- Community JPEG: 320.29 KB.
- WICO poster JPEG: 355.99 KB.
- HTML/CSS/JS/favicon plus all JPEGs: approximately 1.05 MB raw. This conservative aggregate is below the 2 MB budget even before lazy loading and compression.
- Deliberate downloads: resume DOCX 16.59 KB, research PDF 903.87 KB, SIM-LSE PDF 1,614.18 KB. These are excluded from first-view delivery.

Use browser Network tools on a fresh production-preview load to inspect lazy loading and confirm no automatic video, full archive, remote font or document-preview request. Do not infer actual transfer duration from file sizes. Future live-site timing checks require a deployed URL and defined network/device conditions.
