# Linh Anh — Browser Workflow Checks

Start the built site with npm run preview and open its printed Local URL. Use a browser with device emulation.

1. At widths 320, 390, 768 and 1440 CSS pixels, inspect the introduction, projects, research, journey, community and contact. Expect readable content, a visibly yellow theme and no page-wide horizontal overflow.
2. Use every section link. Expect a matching section. At mobile widths, open the disclosure, select a link and verify it closes. Open it again, focus a navigation link and press Escape: menu closes and focus returns to its toggle.
3. Use Tab to reach the skip link and controls; confirm focus remains visible. Check heading order, meaningful image alternatives and that decorative bee artwork does not receive focus.
4. Check the supplied resume download, project deck, WICO poster and research paper. Expect the relevant file and honest format/new-tab labels. Verify the email address and mailto target without sending mail.
5. Emulate prefers-reduced-motion. Expect automatic rather than smooth scrolling and no decorative animation.
6. Visit inherited/unknown hashes. Expect Linh Anh’s page and no old talk/journal/template interface.
7. Inspect dates and role wording: high school status, half-day placements, basic Python, pending AP study and planned 2027 triathlon must remain clear.

Recorded implementation QA used installed headless Chrome: four widths had matching document/client widths, no missing anchor targets and no runtime exceptions; mobile Escape/focus and reduced-motion behaviour passed. Six distinct curated file requests returned 200. Desktop/mobile screenshots were visually reviewed for the introduction, work, research, journey and contact; community was also captured. Keyboard behaviour is additionally covered in component tests. Full screen-reader, all-browser and hosted checks are not claimed.

Stop owned preview processes after review. Original temporary Chrome and preview processes were stopped at implementation handoff.
