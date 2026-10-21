# Component Dependencies and Communication

| Consumer | Dependency | Purpose |
| --- | --- | --- |
| React entry | PortfolioApp | Mount public site |
| PortfolioApp | SiteHeader, Introduction, content sections, ContactSection, SiteFooter | Compose single-page experience |
| PortfolioApp | Typed content module | Supply source-backed display data |
| SiteHeader | Navigation item props, browser fragment links | Accessible navigation; local menu state |
| Sections | SectionHeading, EvidenceLink, image/document references | Consistent rendering and evidence access |
| Introduction / brand | BeeMark | Decorative identity |
| Content module | Curated local asset references | Correct build-time URLs |
| Global/portfolio styles | Colour, spacing, typography and motion tokens | Yellow/ink/cream visual system |
| Production bundle | Existing Vite base-path configuration | GitHub Pages asset resolution |

## Data flow — text diagram alternative

Curated source documents inform typed content. PortfolioApp passes that content down to presentation sections. Sections render text, images and native links. Only SiteHeader changes local menu state; no child mutates content or calls a service. Browser actions handle anchors, document access and mailto.

## Retired public dependencies

The new public root does not depend on inherited template selection, unrelated journal/talk routes or the previous person’s content/assets. Implementation must audit both imports and public-directory contents. Historical workflow documents remain intact and do not become website content.

## Story coverage

Introduction/root: US1. SelectedWork: US2. ResearchSection: US3. ExperienceSection and skills: US4. EducationAwardsSection: US5. CommunitySection and evidence actions: US6. ContactSection: US7. Header, semantic sections, links and styling: US8.
