# Component Interfaces and Actions

Signatures below describe intended contracts; implementation file names and exact type aliases are decided in Code Generation planning.

| Interface or action | Input | Output and responsibility |
| --- | --- | --- |
| PortfolioApp() | None | React element composing the public portfolio |
| SiteHeader({ items }) | Readonly navigation items with label and section ID | React navigation element with local disclosure state |
| toggleMenu() | None | Void; invert mobile disclosure state |
| closeMenu() | None | Void; close after navigation |
| handleMenuKeyDown(event) | Keyboard event | Void; Escape closes open navigation and restores toggle focus |
| Introduction({ profile }) | Readonly profile and action references | React section with one primary heading |
| SelectedWork({ projects }) | Readonly project entries | React section containing source-backed project cards |
| ResearchSection({ entries }) | Readonly research entries | React section distinguishing research roles |
| ExperienceSection({ entries }) | Readonly internship entries | React section showing responsibilities and dates |
| EducationAwardsSection({ education, awards, skills }) | Readonly academic and skills data | React section with explicit pending/planned labels |
| CommunitySection({ entries }) | Readonly leadership/volunteer entries | React section containing supported contribution descriptions |
| ContactSection({ email, resume }) | Public email and document reference | React section with native mailto and file links |
| EvidenceLink({ label, href, format }) | Link label, local/public URL, optional format text | Accessible anchor; no custom document-fetch service |
| SectionHeading({ id, eyebrow, title }) | Stable section ID and display text | Heading markup appropriate to section hierarchy |
| BeeMark() | None | Decorative SVG/CSS element hidden from assistive technology |

Native fragment links handle section navigation and browser history. Use standard anchors for documents, download attributes only when their behaviour is appropriate, and no automatic email sending. Input validation for arbitrary user-submitted content is unnecessary because this static site has no submission form.
