# Linh Anh Personal Website — Requirements

## Intent analysis

Replace the inherited portfolio with a personalised English website for Trần Ngọc Linh Anh, aimed at university admissions readers, mentors, and future collaborators. Request type: portfolio replacement across multiple components. Complexity: moderate. Requirements depth: standard.

Approved clarification answers: 1A (replace current portfolio), 2B (Security Baseline extension disabled), 3C (Property-Based Testing extension disabled). Answers are complete and consistent.

## Content and positioning

Present Linh Anh as a Hanoi high school student at Foreign Language Specialized School (2024–2027), interested in data science, analytics, business, economics, statistics, and finance. Communicate diligence, curiosity, analytical thinking, and concern for people through specific work and community examples. Use the hardworking bee as a subtle personal motif.

The clean Resume DOCX is the initial factual source. The Linh Anh application ZIP supplies project, research, award and activity evidence. Inspect relevant evidence during content preparation and flag material discrepancies rather than silently combining conflicting claims. Claims are source-reported; supporting files do not imply independent verification. Convert relevant source content into documented text before implementation.

## Functional requirements

- FR1: Make Linh Anh the default and sole public portfolio identity, replacing inherited names, biography, projects, contact details, metadata and unrelated public content. Remove public entry points to inherited career talks and journal material.
- FR2: Provide an introduction with her name, student status, analytical interests, concise personal positioning, and links to selected work and contact.
- FR3: Present selected analytical work with the question, her contribution, methods/tools, and documented findings. Prioritise SIM-LSE consumer analytics and supported finance/data-science work. Describe the excessive-discounting revenue/profit finding without inventing quantitative performance improvements.
- FR4: Cover green consumer behaviour research, HUST machine-learning research assistance, and network-security research assistance, keeping contribution and authorship claims accurate.
- FR5: Present F88, Inforplus and Woori Bank internships with their dates and student/half-day context. Preserve the resume’s stated skill levels; do not portray her as a qualified financial adviser or senior data scientist.
- FR6: Include education, selected awards, skills, leadership and community work. Distinguish awarded results, participation, planned events and pending examinations. AP Calculus BC/Statistics and the 2027 triathlon must not appear completed.
- FR7: Include the public contact email beetranngoclinhanh@gmail.com and a working email action. Do not invent social profiles or expose a private address or absent phone number.
- FR8: Supply a clearly labelled resume link using a suitable supplied or faithfully generated file. Evidence links must open the relevant document, with useful labels and browser fallback where inline preview is unavailable.
- FR9: Provide responsive section navigation, visible interactive feedback and usable mobile navigation. All links and buttons must perform their stated actions.

## Visual requirements

- VR1: Use a warm yellow page background, dark ink text, complementary cream surfaces and restrained honey accents. Ensure the page remains visibly yellow across desktop and mobile.
- VR2: Use an editorial visual hierarchy that balances academic seriousness with warmth: strong typography, generous spacing, readable prose and purposeful project imagery.
- VR3: Use restrained bee, flight-path or honeycomb details as references to diligence and interconnected ideas. Decorative graphics must not distract from achievements or obscure content.
- VR4: Use images from the supplied archive when they add evidence or context. Do not identify a person in a group photo as Linh Anh without reliable source context. Avoid unrelated inherited portraits and stock achievements.

## Quality and technical requirements

- NFR1: Retain the existing React/TypeScript/Vite foundation and compatibility with the repository’s GitHub Pages deployment. No backend, authentication or database is required.
- NFR2: Use semantic landmarks/headings, keyboard-operable controls, visible focus, useful alternative text, sufficient text contrast and reduced-motion support.
- NFR3: Support narrow mobile layouts without horizontal page overflow and preserve readable desktop line lengths.
- NFR4: Optimise image delivery; avoid automatically loading the archive’s large video or unrelated source files. Keep private or unused application evidence out of the public build.
- NFR5: Keep content maintainable in typed data or clearly organised components. Application code stays at the workspace root; workflow documentation stays in aidlc-docs.
- NFR6: Verify the production build and relevant content/navigation interactions. Document any unavailable visual/browser checks. Optional Security Baseline and PBT rules are disabled; routine safe coding and relevant verification still apply.

## Acceptance outcomes

1. A first-time reader can identify Linh Anh, her student status and interests immediately.
2. Readers can trace selected work to clear contributions and source-supported evidence.
3. The portfolio consistently expresses the yellow/bee direction with readable, accessible content.
4. Public routes, downloads, imagery and metadata contain Linh Anh’s approved content, with no inherited person’s public identity.
5. Contact, navigation and resume actions work; mobile layout and production build pass appropriate verification.

## Scope boundaries

This is a static personal portfolio. Live financial feeds, trading advice, accounts, analytics dashboards backed by services, and message delivery infrastructure are outside scope. Publication is a later action after implementation and verification.

## Extension compliance

- Security Baseline: N/A — explicitly disabled by answer 2B; full rules not loaded.
- Property-Based Testing: N/A — explicitly disabled by answer 3C; full rules not loaded.

## Next stage

User Stories is included because this replaces the primary user-facing experience for admissions readers, mentors and collaborators. Requirements approval is required before that stage.
