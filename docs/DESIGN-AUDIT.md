# Reference audit — 2026-10-13
Reference: https://apex-drive-bulgaria.preview.emergentagent.com/?utm_source=share

Observed with live browser and original publicly served component/CSS sources:
- Graphite body #171717, darker surround #101010, hero panel #232323.
- Crimson #e62429, lighter accent #f05255, porcelain #f6f3ee and warm gold #d5b782.
- Manrope body/navigation, Playfair Display editorial hero and wordmark; Cyrillic variants preserved locally.
- Fixed header with navigation and mobile disclosure. Editorial text left, circular burger image right; pill buttons and floating ingredient note.
- Circular product photography overlapping rounded dark cards. Featured products, category-filtered menu, promotions, assistant teaser, four steps, location/contact and footer.
- Framer Motion rise/reveal and CSS hover/orb animations preserved, reduced-motion behavior extended.
- Existing brand was FUTURE DRIVE, despite APEX URL. New version uses requested APEX name.

Changes: additional narrow-screen title sizing, flexible featured heading, single featured column below 420px, tablet hero adjustments, 44px product controls, mobile menu height/scroll and Escape closing, Bulgarian metadata, content snapshot architecture, same-origin WebP/fonts, removal of dev/analytics scripts and operational flows outside phase 1.

Verification limits: reference was inspected on desktop; no claim of mobile browser testing, Lighthouse score or measured speed improvement. Full responsive browser QA remains before production release.
