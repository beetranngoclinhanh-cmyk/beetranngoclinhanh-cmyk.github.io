# Components

## PortfolioApp

Root composition for Linh Anh’s single-page portfolio. Renders SiteHeader, main content and SiteFooter; supplies typed content to sections. Uses the existing React/Vite entry. Excludes inherited template selectors, journal pages and career-talk routing from the public tree. No persistent app state is required.

## SiteHeader

Brand/name, section anchors and a mobile-menu button. Owns only mobile open/closed state. Button exposes expanded state and menu relationship; selecting an anchor closes the menu. Escape closes an open menu and returns focus to its toggle. The menu is a disclosure navigation, not a modal dialog. Desktop links remain usable without opening it.

## Introduction

Student identity, analytical interests, concise personal positioning and work/contact actions. Includes a decorative bee or flight-path graphic hidden from assistive technology. No invented portrait or professional credentials.

## SelectedWork

Project cards with question, contribution, methods and supported findings. Uses EvidenceLink for curated documents and contextual images with useful alternatives. Prioritises SIM-LSE and supported finance/data-science work.

## ResearchSection and ExperienceSection

Research entries distinguish co-authorship from assistance. Internships display dates and half-day/student context. Both receive read-only entries; no remote fetching or filters required.

## EducationAwardsSection and CommunitySection

Education, achievements, skills, leadership and volunteering. Pending/planned items have explicit labels and are not included in completed-achievement summaries. Activity photos depict documented context without guessing who is Linh Anh.

## ContactSection and SiteFooter

Visible email and mailto link, labelled resume action, closing personal statement and back-to-top link. No message-sent state or fictional social accounts.

## Shared presentation

SectionHeading provides a consistent heading hierarchy. EvidenceLink receives explicit label, URL and optional file-format description. Any target opening a new tab uses an appropriate relationship attribute. BeeMark is decorative, has no interaction and never conveys unique information.

## Content interfaces

Read-only data represents profile, navigation, projects, research, experience, education, awards, skills, community and document references. Entries carry stable keys, display dates, roles/contributions and source identifiers where useful. Planned/pending/completed status is explicit when relevant. Private source notes belong in documentation, not public metadata.
