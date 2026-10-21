# Linh Anh Website — User Stories

## Basis and structure

Approved approach: reader journeys, approved by the user’s “approve” response. Sources: the approved Linh Anh website requirements; factual content is initially grounded in the clean Resume DOCX, with relevant application-archive evidence to be inspected before publishing claims or assets. Each story can be reviewed independently; exact layout and wording remain negotiable within requirements.

## US1 — Discover Linh Anh

As an admissions reader or prospective mentor, I want to understand who Linh Anh is and what she is exploring, so that I can decide where to read further.

Personas: P1, P2, P3. Requirements: FR1, FR2; VR1–VR3.

Acceptance criteria:
- The introduction identifies Trần Ngọc Linh Anh as a Hanoi high school student and expresses interests in data science, analytics, business, economics, statistics and finance.
- Selected-work and contact actions lead to their labelled destinations.
- Warm yellow, readable dark text and a restrained hardworking-bee motif establish a coherent personal identity.
- Public identity and metadata refer to Linh Anh; inherited-person content and unrelated public entry points are absent.

## US2 — Examine analytical work

As a reader assessing analytical potential, I want project explanations that show the question, contribution and finding, so that I can evaluate how Linh Anh approaches problems.

Personas: P1, P2, P3. Requirements: FR3; VR4; NFR4.

Acceptance criteria:
- Selected analytical projects describe the question, Linh Anh’s contribution, methods/tools and source-supported findings.
- SIM-LSE work explains the revenue/profit disconnect associated with excessive discounting, without invented numerical improvements.
- Finance/data-science work uses only claims supported by the resume and relevant archive evidence; discrepancies are recorded for resolution.
- Project imagery or document links correspond to the work described and have useful labels or alternative text.

## US3 — Understand research contributions

As an admissions reader or mentor, I want to distinguish research topics from Linh Anh’s own contributions, so that I can assess her research experience fairly.

Personas: P1, P2, P3. Requirements: FR4; NFR5.

Acceptance criteria:
- Research covers green consumer behaviour, HUST machine-learning assistance and network-security research assistance, with source-backed dates and roles.
- Summaries explain her contribution without implying sole authorship, publication status or validated outcomes beyond the sources.
- Research descriptions distinguish co-authored work from research-assistant roles.

## US4 — Assess practical experience and skills

As a prospective mentor, I want to understand Linh Anh’s internship responsibilities and skill levels, so that I can judge suitable learning opportunities.

Personas: P1, P2, P3. Requirements: FR5, FR6.

Acceptance criteria:
- F88, Inforplus and Woori Bank entries include dates, student/half-day context and supported responsibilities.
- Tools and skills retain the resume’s stated levels, including basic Python and basic financial-statement analysis in Excel.
- Copy presents student experience without implying senior professional status or financial-adviser qualifications.

## US5 — Review academic development

As an admissions reader, I want education and awards to distinguish achieved results from plans, so that I can understand academic development accurately.

Personas: P1, P3. Requirements: FR6.

Acceptance criteria:
- Education identifies FLSS and the 2024–2027 study period, with source-backed qualifications and scores where included.
- Selected awards retain their documented year, level and category; participation is not relabelled as an award.
- AP Calculus BC and Statistics in 2027 remain pending/planned; the 2027 triathlon is not presented as completed.
- No future plan is counted as a completed achievement in summaries or statistics.

## US6 — Discover leadership, community and supporting evidence

As a reader assessing character, I want concrete examples of leadership and community contribution, so that I can understand the person behind the analytical interests.

Personas: P1, P2, P3. Requirements: FR6, FR8; VR4; NFR4.

Acceptance criteria:
- Leadership/community examples describe actual roles and supported contributions, such as finance leadership, stage logistics and volunteering.
- Quantities, beneficiaries and outcomes, when used, match the supplied sources and preserve their context.
- Relevant evidence links open the intended document; labels identify the evidence and usable browser access remains available if inline display fails.
- Images do not identify Linh Anh within a group without reliable source context. Private or unused evidence and the large archive video are not automatically delivered to visitors.

## US7 — Access the resume and make contact

As a prospective mentor or collaborator, I want a readable resume link and a direct contact action, so that I can follow up about a relevant opportunity.

Personas: P2, P3. Requirements: FR7, FR8.

Acceptance criteria:
- A clearly labelled resume action opens or downloads the supplied resume or a faithful derivative; its target is available in the built site.
- The visible email is beetranngoclinhanh@gmail.com and the contact action uses the corresponding mailto destination.
- No invented social profile, absent phone number or private street address appears.
- Contact controls do not suggest that a message has been delivered by the website when only an email-client action occurs.

## US8 — Navigate comfortably on phone or keyboard

As a visitor using a phone, keyboard or reduced-motion preference, I want readable content and usable navigation, so that I can explore the same portfolio without barriers.

Personas: P1, P2, P3. Requirements: FR9; VR1–VR3; NFR1–NFR6.

Acceptance criteria:
- Sections have meaningful headings and navigation labels; every visible button and link performs its stated action.
- Navigation works on narrow mobile layouts without horizontal page overflow; desktop prose has readable line lengths.
- Keyboard users can reach controls, see focus and use any mobile-menu control; decorative elements do not obstruct interaction.
- Images have appropriate alternative text, text contrast is sufficient and motion respects reduced-motion preferences.
- The static production build remains compatible with GitHub Pages, loads purposeful assets and contains no unrelated public identity.

## Coverage and INVEST review

The eight stories are independently reviewable outcomes rather than implementation tasks. Each has a bounded scope, reader value and observable acceptance criteria; layout details remain negotiable. They can be estimated within one cohesive static portfolio unit. Shared styling and content sources do not make their acceptance checks dependent on completing other stories.

Coverage: FR1–FR9, VR1–VR4 and NFR1–NFR6 are mapped above. First visit (US1), project/evidence evaluation (US2/US6), research (US3), internships (US4), planned versus completed achievements (US5), resume/contact (US7) and accessible navigation (US8) are covered.

Source review limitation: this stage validates story fidelity to the approved requirements and previously inspected resume, not the full contents of every archive document. Relevant evidence inspection and discrepancy resolution remain necessary before final copy and public assets.

## Extension compliance

- Security Baseline: N/A — disabled by approved answer 2B.
- Property-Based Testing: N/A — disabled by approved answer 3C.

No full disabled-extension rules were loaded or enforced.
