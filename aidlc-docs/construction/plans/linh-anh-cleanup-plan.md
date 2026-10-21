# Linh Anh — Repository Cleanup

Scope explicitly requested: remove Hùng’s irrelevant documents and unnecessary ZIP. Remove retired code that imports those assets so the build remains valid. Preserve Linh Anh’s content, original resume, workflow files, and mandatory append-only audit log. No website behaviour or deployment changes.

- [x] Identify inherited documents, assets and their retired importers.
- [x] Remove obsolete files and ZIP; update current documentation/index.
- [x] Verify production build, current website tests and remaining references.

Security Baseline and Property-Based Testing: N/A, disabled. This is an isolated cleanup of already retired functionality; no new design or requirements gate is needed.

Result: 383 obsolete files removed. Current website suite: 4 files, 14 tests passed. Production build passed with the same generated bundle/asset names. git diff --check passed.
