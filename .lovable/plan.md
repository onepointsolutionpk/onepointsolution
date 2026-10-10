# One Point Solution website implementation plan

## Goal
Build a complete, original, production-ready corporate website for One Point Solution using the existing TanStack Start project. The design will take structural cues from Durable Technologies—strong image-led opening, clear service hierarchy, credibility sections, substantial service content, and a complete multi-column footer—without copying its wording, identity, or assets.

## Confirmed foundation and assets
- The current project is a clean TanStack Start/React site with Tailwind CSS v4, TanStack Router, Zod, React Hook Form, Embla Carousel, and Lucide icons already available.
- The current home page is only a placeholder, so the new website can be built cleanly without preserving an existing public layout.
- Use the supplied files as follows:
  - One Point Solution logo: `Untitled_design_20261008_171709_0000.png`
  - Homepage display image: `IMG_20260902_222413_425.jpg`
  - Brand logos: Nemtek, Tongher, GateXpert, Centurion
  - Client logos: Bahria Town, Park View City Islamabad, DHA Lahore
  - Hero carousel image: `Pakistan_Largest_20261010_112727_0000.webp`
- Missing confirmed media will remain as intentional text-only or neutral empty image areas. No stock, AI-generated, downloaded, or fabricated media will be introduced.
- Missing brand/client logo files that remain to be supplied: Dahua, Hikvision, Pollo, Syed Brother Builders, and Coca-Cola Raiwind Road. Their names may appear only as clearly identified text where appropriate, not as recreated logos.

## Visual system and shared experience
- Establish a restrained electric-blue, black, and white design system using semantic color tokens, sharp/lightly rounded geometry, strong typography, and generous but controlled spacing.
- Build a compact sticky header with the supplied logo, desktop navigation, accessible Services dropdown, click-to-call action, quotation CTA, and animated mobile drawer.
- Build a polished footer with company summary, navigation, all four services, exact office addresses, phone, WhatsApp, Facebook, privacy link, and copyright.
- Add a fixed WhatsApp action positioned safely around mobile content and forms.
- Use one consistent professional icon family, visible keyboard focus, semantic landmarks, meaningful alt text, touch-friendly controls, and reduced-motion alternatives.

## Homepage
Implement the requested section order with distinct layouts rather than repeated cards:
1. Accessible hero carousel with the supplied carousel artwork, manual arrows, indicators, strong contrast, and concise original copy.
2. Editorial About section with the supplied homepage display photograph and low-opacity “ONE POINT SOLUTION” background wordmark.
3. Four owner-supplied statistics with restrained count-up enhancement and static fallbacks.
4. Four visually differentiated service features linking to their dedicated pages.
5. Residential, commercial, and industrial solution presentations.
6. Brands section using only supplied logos; preserve original proportions and colors.
7. Clients section using the three supplied client logos, with text-only handling for confirmed clients whose files are missing.
8. Project/installations gallery using only genuine supplied installation imagery, without invented captions or locations.
9. Four editorial blog previews linking to complete articles.
10. Quotation/contact area with phone, WhatsApp, three offices, and the validated WhatsApp message composer.
11. Full corporate footer.

## Pages and navigation
Create real, linked routes with unique content and metadata:
- `/` — Home
- `/about` — company background, services focus, markets, offices, and supplied company facts
- `/services` — service overview
- `/services/electric-fencing`
- `/services/cctv-cameras`
- `/services/gate-automation`
- `/services/fire-alarm-systems`
- `/projects` — genuine supplied work only, with graceful empty-state capacity for future photos
- `/blog` — article index
- `/blog/electric-fencing-for-homes-in-pakistan`
- `/blog/choosing-the-right-cctv-camera-system`
- `/blog/gate-automation-installation-considerations`
- `/blog/fire-alarm-systems-for-commercial-buildings`
- `/contact` — quotation composer and exact office details
- `/privacy-policy` — truthful privacy wording for the current WhatsApp-only workflow

Each service page will have an original service-specific opening, explanation, benefits, applications, available real imagery, related-service links, and quotation CTA. Each article will contain useful original content without fabricated dates, credentials, specifications, or claims.

## Quotation workflow
- Create a reusable quotation form for Full Name, Phone Number, Required Service, Property Type, City, and Project Details.
- Validate and constrain every field with Zod before constructing the external link.
- Generate the exact professional English message format requested, encode all values safely, and open `wa.me/923265284800`.
- Clearly state that WhatsApp opens with a prepared message and the visitor must press Send.
- Do not store submissions, show a false success state, or imply delivery.
- Use `tel:+923265284800` and the same WhatsApp number consistently throughout the site.

## SEO and discoverability
- Add unique route-level title, description, Open Graph title/description, `og:type`, Twitter card, self-referencing canonical, and `og:url` for every public route.
- Use the confirmed domain `https://onepointsolutionpk.com/` for canonical and structured-data URLs.
- Add accurate Organization/LocalBusiness structured data using only the supplied company name, phone, Facebook page, founding year, and three offices; add Service and Article data only where supported.
- Add one clear H1 per page, logical heading structure, descriptive image text, and useful internal links.
- Update crawler rules and add a sitemap containing every public route.
- Replace all template metadata and branding; use the supplied company mark as the favicon.

## Asset handling
- Optimize copies for appropriate web delivery while preserving source colors, proportions, and visual fidelity.
- Keep the source-to-section mapping explicit and centralized so future supplied media can replace placeholders without redesign.
- Use stable project/CDN asset references supported by the existing build, never temporary upload paths or external hotlinks.
- Do not alter or recolor third-party logos.

## Responsive and quality verification
- Design the initial 390×844 view to show a compact header, well-framed hero, usable CTAs, and a glimpse of following content.
- Verify at 320, 360, 390, and 430px mobile widths; tablet portrait/landscape; 1366×768; 1440px; and wide desktop.
- Check for overflow, clipping, awkward image crops, menu locking/closing, dropdown keyboard behavior, carousel controls, logo sizing, form validation, encoded WhatsApp content, call links, and floating-button clearance.
- Run the existing route test plus focused tests for quotation-message generation and route matching.
- Confirm the preview has no build, runtime, console, network, or missing-asset errors and that all pages render through the production-compatible build.

## Technical structure
- Keep shared business facts, navigation, services, offices, brands, clients, article summaries, and media mappings in centralized typed data so all pages stay consistent.
- Use reusable layout, header, footer, media-placeholder, CTA, SEO, and quotation-form components while retaining custom page compositions.
- Preserve TanStack file-based routing and the existing query/router setup; do not add authentication, a database, CMS, dashboard, or unnecessary dependencies.
- Record the resulting structural conventions in the project guidance file so future additions follow the same patterns.
