# Asset Consolidation and Large Video Removal

- [x] Identify the 58,484,207-byte recording and verify duplicate root resume matches the bundled resume.
- [x] Delete the video and duplicate root DOCX; keep the canonical resume and source evidence under src/assets/linh-anh.
- [x] Replace the video download with an honestly labelled illustrated-cover image; remove its MP4 import.
- [x] Verify tests, production build and absence of video/ZIP in output — 18 tests passed, build passed; no MP4 in src or dist, no ZIP/root resume duplicate.

This explicit request supersedes retaining the large recording. Original-file provenance remains in the audit/inventory; no Git history rewrite is performed. Optional extensions remain disabled.
