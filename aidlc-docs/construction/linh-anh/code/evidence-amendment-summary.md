# Evidence and Awards Amendment — Results

- Selected-work category changed from Quantitative Finance to Data/Finance.
- Awards ordered: SIAM Mathematics, WICO, John Locke, FDB Talent, CNN Science Fair, IOE.
- Five awards now show a linked photo/certificate preview. SIAM has no file in the supplied empty directory: an explicitly labelled placeholder is used rather than an unrelated certificate.
- Both signed HUST confirmation letters have preview cards and original PDF links inside the HUST research entry.
- All 24 ZIP files are represented in the grouped Evidence notebook, including additional FOODLOOP/AIRMAZING pitches, John Locke essay, activities, photographs, certificates and the stage video. Source mapping and SHA-256 provenance are in evidence-inventory.md.
- PDFs, video and HEIC/HEIF originals are preserved byte-for-byte. Ordinary images use optimised JPEG derivatives. HEIC/HEIF files retain original links and now have browser-compatible JPEG previews, recovered using native macOS conversion outside the sandbox.
- Video is a deliberate file link, not autoplayed or embedded eagerly. All gallery previews use lazy loading.
- Source ZIP deleted after coverage/integrity checks; *.zip added to .gitignore. No commit or deployment performed.

## Verification

- 17 tests across four files passed, including requested order, five supplied award images, both distinct HUST PDFs, all 24 evidence links and no eagerly embedded video.
- TypeScript/Vite production build passed.
- Local Chrome at 320, 390, 768 and 1440px: no horizontal page overflow, 24 evidence links and two letters present, no broken preview images.
- All 24 evidence destinations returned HTTP 200 in local preview.
- Mobile awards and desktop HUST screenshots visually reviewed; evidence collections checked expanded.
- Original-file hashes checked for all PDFs, video and HEIC/HEIF files before deleting the archive.

Optional Security Baseline and Property-Based Testing extensions remain disabled. This implementation follows the explicit amendment request; previous decisions to withhold signed letters/video are superseded by the request to use all evidence.

## Larger previews follow-up

Awards now use large two-column cards (one column on mobile), with 340px desktop / 300px mobile image areas. Evidence collections open by default. Both previously missing HEIC/HEIF photos now have JPEG previews. Current verification: 18 tests passed; production build passed; 23 previews, five expanded collections and all 24 links checked at four viewport widths without broken images or horizontal overflow.
