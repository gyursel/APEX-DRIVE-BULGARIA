# APEX DRIVE BULGARIA — phase 1

## Implemented boundary
A read-only React/Vite public site using the reference's publicly served component source, original CSS, 19 WebP assets, and local Manrope/Playfair Display fonts. Original site and its database are unchanged. No checkout, authentication, payments, kitchen operations or order writes are included. Unsupported future routes explicitly explain phase-one status. Product cards open details, not a cart.

## Content architecture
`public/content/site.json` is the current versioned published content snapshot. `src/content/repository.js` is the single loading boundary; future implementation can replace this adapter with a published CMS endpoint. `copy` holds labels, headings, descriptions, buttons, links and accessibility labels. `menu` holds products, categories, prices and product media. `settings` holds brand, hours, location and hero/kiosk media. `promotions` holds offers and images. `pages.home.sections` supplies stable section IDs, order and visibility, rendered through an allowlisted component registry. `theme` holds design tokens. Components contain presentation, not restaurant data. This is CMS-ready groundwork; a visual editor and persistence are not implemented.

Future CMS should expose semantic editing controls over these fields, with section and field IDs, media selection, responsive preview, draft/publish, revision history and rollback. Additional page types should extend the same allowlisted registry. Never store executable JSX or arbitrary scripts as page content. Navigation URLs and media types must be validated server-side before publication. The runtime uses React text escaping.

## Planned modules (not implemented)
- Content: Page, Section, Navigation, Theme, SiteSettings, MediaAsset, ContentRevision.
- Catalog: Category, Product, Variant, ModifierGroup, Allergen, Promotion.
- Operations: Order, OrderLine snapshot, OrderEvent, PickupSlot, KitchenStation.
- Access: StaffUser, Role, Session, AuditEvent; separate owner/admin/editor/kitchen capabilities.

Public reads must return published snapshots only. Admin mutations require server-side authorization and schema validation. Media uploads require validated MIME/size, generated storage keys and image processing. Drafts must never overwrite the live snapshot before explicit publication. Price arithmetic must use integer cents server-side. Orders must snapshot item names/prices/modifiers and enforce server-calculated totals. Kitchen transitions need an audited state machine and idempotency. Future payment integrations must never trust browser totals. This project has no production payment or order endpoints.

## Deployment and verification
`npm run build` generates `dist`. Sources and built output are packaged through Sites. The deployed first-phase site is private to its owner. Direct links require SPA fallback supplied by static hosting. Content and assets use the same origin. Browser QA is unavailable under this environment's Sites workflow because control-browser is absent; responsive CSS is implemented but device testing and performance measurements remain unverified. Do not describe this as a production-ready ordering platform.

## Required business inputs later
Real address, telephone, email, confirmed hours, actual products/prices/allergens, final legal texts, restaurant operations and staff roles. Existing examples remain clearly labeled. Reference displayed FUTURE DRIVE; requested name APEX DRIVE BULGARIA replaces it without changing the visual system.

## Phase 2 — implemented CMS
The application now runs on the supported Vinext/Cloudflare Worker starter. Existing React presentation components remain in `src/`, with views moved to `src/views/` to avoid unintended framework route discovery. `app/public-site.tsx` bootstraps the client and loads published content from `/api/content`. The private editor loads `/api/admin/draft` and uses a same-origin iframe/message channel for live unsaved preview and click-to-edit field selection. Draft requests remain owner-authorized.

D1 owns `cms_state`, `cms_revisions`, `cms_owners` and `cms_media`; R2 owns uploaded images. SQL migration is generated through Drizzle. Seed data is server-only. Draft saves use optimistic version comparison. Publishing snapshots the draft and updates the public document atomically in a D1 batch. Restore only changes the draft. Mutations validate the origin and require the stable owner ID. Bootstrap uses platform-injected verified email matched against the server-only CMS_OWNER_EMAIL runtime setting; subsequent authorization uses the stored site-scoped ID. Never broaden site sharing as a substitute for authorization.

GET /api/content: published snapshot, no-store.
GET /api/admin/draft: draft and revision metadata.
POST /api/admin/draft: validate and save with expected version.
POST /api/admin/publish: publish expected version.
GET /api/admin/history: latest 50 publications.
POST /api/admin/restore: selected publication to draft with expected version.
GET/POST /api/admin/media: list/upload authenticated media.
GET /api/media/:id: immutable uploaded file.

Validation constrains numeric prices, unique product slugs, category references, page section IDs, seven opening-hour entries, links, document size and uploads. Uploads allow JPEG/PNG/WebP with matching magic signature and declared type up to 8 MB. Files receive generated immutable IDs and nosniff headers. No SVG or HTML upload. There is no physical media deletion in this phase.

Verified with TypeScript, production build, server rendering and isolated Miniflare D1/R2 integration tests covering owner binding, unauthorized access, cross-origin rejection, draft/public isolation, version conflicts, content validation, publish/history/restore and media round trip. Browser interaction and visual QA remain unverified because the supported browser tool for managed Sites is unavailable. The site stays owner-private.
