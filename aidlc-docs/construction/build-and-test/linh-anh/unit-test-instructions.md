# Linh Anh — Unit and Component Test Instructions

Run from the repository root:

```sh
npm test
```

Recorded result: 17 test files passed, 88 tests passed, zero failures. No coverage percentage was measured. Results appear in terminal output; no persistent HTML or coverage report was generated.

The suite includes the new App identity/content/action tests, inherited/unknown-hash behaviour, mobile navigation disclosure and Escape/focus tests, colour-pair contrast checks and retained independent module/helper checks.

For focused troubleshooting:

```sh
npx vitest run src/App.test.tsx src/TalkRoute.test.tsx src/components/linh-anh/SiteHeader.test.tsx src/themeAccessibility.test.ts
```

When a test fails, inspect the reported expected/actual behaviour, correct the relevant contract or implementation, and rerun affected tests. Do not delete a valid behaviour check simply to obtain a passing result. Old public-template assertions were retired only where the approved portfolio replacement changed their contract.

This documentation-only stage reuses the successful implementation-stage results; no application changes justify repeating the same suite. jsdom checks do not substitute for browser layout inspection.
