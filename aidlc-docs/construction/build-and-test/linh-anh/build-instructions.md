# Linh Anh — Build Instructions

## Prerequisites

Use Node.js 20.19+ or a compatible newer version and npm. Verification used Node v26.12.0 and npm 11.20.0 on macOS. The repository lockfile is authoritative. No runtime credentials or services are required.

From the repository root:

```sh
npm ci
npm run build
```

No reinstall is needed when locked dependencies are already installed and unchanged. The original verification installed with npm ci --ignore-scripts; the production build succeeded. Restricted network environments may need approved network access to fetch packages.

The build runs TypeScript checking and Vite packaging. Expect a successful exit and dist/index.html, the bee favicon and curated assets. VITE_BASE_PATH is optional locally; the Pages workflow derives it for deployment. For a project-path build, set it to the intended /repository/ path before building. Do not invent a hosted URL.

To review the packaged result:

```sh
npm run preview
```

Open the printed Local URL; stop the server with Ctrl+C after review. A successful local build does not publish the website.

## Troubleshooting

- Missing tsc/vite: install locked dependencies with npm ci.
- Registry ENOTFOUND: restore registry/network access, then repeat installation; do not change dependency versions as a workaround.
- TypeScript failure: fix the reported import/type contract, including tests for intentionally retired behaviour.
- Missing deployed images: check base path and imported asset URLs. Public-directory files are copied even when unused; inspect dist before publication.

Existing Node/Vite deprecation warnings did not fail verification. Dependency advisories from the locked install are recorded as a limitation, not remediated by an unrequested upgrade.
