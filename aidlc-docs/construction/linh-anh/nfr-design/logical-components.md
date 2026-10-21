# Linh Anh — Logical Components

| Component | Quality responsibility | Requirement mapping |
| --- | --- | --- |
| Portfolio shell and semantic sections | Landmarks, skip link, heading order, responsive composition | Q1, Q2, Q5 |
| Navigation disclosure | Local open state, hidden-link focus control, Escape and close-on-selection | Q2, Q3 |
| CSS tokens and media queries | Contrast, focus, typography, flexible layout, reduced motion | Q1, Q4, Q5 |
| Curated asset references | Correct base-aware links, explicit dimensions, lazy photos, deliberate evidence downloads | Q6–Q10, Q13 |
| Typed content and source notes | Accurate identity, skill levels, dates and statuses; maintainability | Q12, Q15 |
| Native file/mailto/fragment links | Service-free actions and document fallback | Q9–Q11, Q14 |
| Existing Vite build and Pages workflow | Static packaging and deployment compatibility | Q9, Q11, Q16 |
| Vitest/Testing Library and output audit | Public-contract verification and inherited-content checks | Q16, Q17 |

Data flow: curated sources inform static typed data; the shell passes it to sections; sections render semantic content and browser-native links; CSS applies responsive/accessible presentation. Only navigation owns local interaction state. No queues, runtime caches, databases, authentication services or additional infrastructure components are needed.

## Acceptance boundary

This is a design, not a verification report. Actual contrast, bundle/asset sizes, navigation behaviour, responsive layout and source claims must be checked after implementation. No application code has been changed in this stage.
