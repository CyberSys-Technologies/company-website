# Website Revamp Log

Page-by-page declutter of the CyberSys website, based on direction from the Chairman and MD.
Baseline: GitHub `main` at commit `40b0d5f` (the version live on the website).

## Guiding rules

- Avoid the dark navy backgrounds (`#0A0F1C`, `#0F172A`, `bg-brand-text`) wherever possible.
- Keep pages bright: white, mixed with the brand palette from the official **CyberSys Brand Guide**:
  - CyberSys Blue `brand-primary` `#2082A6`
  - Teal `brand-secondary` `#01CBAE`
  - Mint Green `brand-mint` `#01EFAC`
  - Ink `brand-text` `#101729` and Slate `brand-muted` `#4A5567` for text
  - `brand-action` `#2F6D8C` for buttons and small text
  - deep logo blue `brand-deep` `#176482` for contrast blocks (footer)
  - `brand-mist` `#F0F8F8` for light section washes
- Typography (brand guide): Inter throughout. Headlines Bold, caps, -0.02em, 1.1 line height; subheadings Semibold; labels Medium 13px caps +0.2em.
- The site should say who we are and what we do. No unnecessary sections, effects or filler.
- Remove anything that is unused.

---

## Round 1: Home page, footer, cleanup (24 Oct 2026)

### Home (`pages/Home.tsx`)
- **Hero:** removed the dark circuit-board photo and overlay. Now a light, centred "Secure The C.O.R.E." heading with the new company statement typed out underneath. Buttons restyled for a light background.
- **Partners:** replaced the scrolling logo strip and the dark click-to-view panel with a card grid in the style of the presentation slide (`components/PartnerEcosystem.tsx`).
  - Removed the "Strategic Alliances" label.
  - The partners are Microsoft, Oracle, Google Cloud, AWS, Sophos, Check Point (new) and DPAnalytics.
  - Clicking a card opens a light panel under that row showing the partner's main products and Business Impact.
  - Azure and OCI are now listed as products under Microsoft and Oracle instead of having their own cards.
- **CS5 Standard:** moved to the Company page.
- **C.O.R.E. Engine:** kept, restyled from dark to light. Removed the spinning gears and glow effects.
- **Removed:** the Multicloud / Cyber Governance / Data Sovereignty / Resilient Infra cards.
- **"Build for the Future":** changed from a dark section to a light band.

### Company (`pages/Company.tsx`)
- Added "03 / Framework: The CS5 Standard" after Differentiators. Footprint and Careers are renumbered 04 and 05.

### Footer (all pages, `components/Layout.tsx`)
- Changed from dark navy to white with dark text.
- Social links: LinkedIn, Instagram and YouTube with the real company URLs, plus email. Removed X/Twitter.
- Removed the dead links (Ethics, Compliance, Privacy, RFP Portal) and the "Resilience standards observed" line.
- The copyright year now updates automatically.

### Assets (`public/partners/`)
- Added `checkpoint.png`.
- Cropped the extra empty space around `oracle.png` and `aws.png`.

### Removed unused code
- `components/SolutionsMarketplace.tsx`, `components/AssessmentReportModal.tsx`, `components/ArchitectureRoadmap.tsx` and `data/aiKnowledge.ts`. These were never shown on the site and remain in git history.
- Types that only those files used (`types.ts`).
- From `index.html`: the scrolling-strip animations, unused CSS (`glass-nav`, `corporate-card`, `reveal-expand`) and the leftover AI Studio import map.

## Round 1b: Feedback on Round 1 (24 Oct 2026)

- **Local dev server:** it only listened on IPv6 (`::1`), so `127.0.0.1:3000` didn't load. `vite.config.ts` now binds `127.0.0.1`. Run `npm run dev` from the `cybersys/` folder.
- **C.O.R.E. Engine:** the spinning gears, background glow, hover light-sweep and converging entrance animations are back, restyled for a light background. The letters use a blue-to-teal gradient.
- **Footer:** now deep logo blue (`brand-deep`) for contrast. It has a thin blue, teal and mint stripe across the top (from the logo), a white logo, mint labels and white text.
- **Hero:** the dots in "C.O.R.E." are teal and mint, and the typing cursor is mint.
- **Buttons:** the hover colour changed from purple (`brand-accent`, not a logo colour) to deep logo blue on Home and the partner panel.
- **Section backgrounds:** `brand-mist` is now a light teal wash.
- **Confirmed:** the Multicloud / Cyber Governance / Data Sovereignty / Resilient Infra cards were deleted outright, not moved. The separate Multicloud page in the nav is an existing page and was not touched.

## Round 2: Hero, navbar, partner panel, animations (24 Oct 2026)

- **Hero (Home):** now left-aligned like the reference sites the MD shared. The background photo (`public/hero-datacenter.jpg`, Unsplash, self-hosted) shows an engineer in a server corridor.
  - On desktop it fades to white behind the text and opens up on the right; on mobile the whole photo gets a light white wash.
  - The photo has a soft blue/teal tint so it sits in the brand palette.
  - The heading, statement and buttons rise in together (no typing effect here).
- **Typing effect:** moved to the intro line under "Global Technology. Connected by CyberSys.". It starts when that section scrolls into view.
- **Scroll animations:** each section enters differently. The photo settles in and the text rises (hero), the header zooms and the cards cascade in turn (partners), the header fades up and the pillars converge from left, centre and right (C.O.R.E.), and the closing section expands (CTA). People who set their device to reduce motion see everything without animation.
- **Navbar bug (sm/md screens):** after scrolling, the mobile menu was cut off. The nav bar's blur effect confined the "full-screen" menu inside the nav strip. The menu is now rendered outside the nav and pinned under its measured height. The page behind it no longer scrolls while it's open.
- **AI Pathfinder bubble:** removed (`components/CyberSysAIBubble.tsx` deleted).
- **Partner cards:** "View products" became "View solutions".
  - The panel now shows the heading, then the solutions (each with its product logo), then Business Impact with a "Talk to us" button at the bottom.
  - "Related solutions" removed.
  - Official product logos (in `public/partners/products/`) for Microsoft (365, Azure, Dynamics 365, Entra ID, Defender, Power Platform), AWS (EC2, S3, RDS, Bedrock, SageMaker) and Google Cloud (Compute Engine, GKE, BigQuery, Vertex AI). Google Workspace uses the Google "G", because Workspace has no standalone mark.
  - Oracle, Sophos and Check Point publish no per-product icons (they use their company logo plus the product name), so their products use outline icons in each vendor's brand colour. DPAnalytics services use the same style in logo blue.
  - Sophos renamed "Intercept X" to "Sophos Endpoint" in Oct 2025, so the label now reads "Sophos Endpoint" and the description notes "formerly Intercept X".
  - Check Point's brand guidelines ask for approval (brand-request@checkpoint.com) before non-editorial logo use. Worth confirming under our partner agreement.
- **Buttons:** the nav "Consult Architect" button hover now uses deep logo blue instead of purple.

## Round 2b: Panel colour, hero photo, card hover (24 Oct 2026)

- **Partner solutions panel:** changed from white to deep logo blue (`brand-deep`) so it stands out from the white cards.
  - It has the blue, teal and mint logo stripe across the top and soft mint/blue glows (as in the C.O.R.E. section).
  - Text is white with a mint subheading. Product logos sit on white tiles.
  - The Business Impact band is slightly darker, and the "Talk to us" button is mint.
- **Hero photo:** replaced the server-corridor photo with a laptop showing analytics dashboards (`public/hero-analytics.jpg`, Unsplash, self-hosted), which better reflects the data, cloud and digital portfolio. The old `hero-datacenter.jpg` was deleted.
- **Partner cards:** they lift and gain a soft blue shadow on hover, like the C.O.R.E. cards, and keep the blue outline. The open card stays slightly raised.

## Round 2c: Hero photo, closing band (24 Oct 2026)

- **Hero photo:** now clusters of connected infrastructure blocks linked by glowing teal lines (`public/hero-multicloud.jpg`, Unsplash, self-hosted). It represents multicloud and connected, secured systems, and the teal links echo the logo. `hero-analytics.jpg` was removed.
- **"Build for the Future":** redesigned from a full-height centred section into a compact rounded band in the logo's blue-to-teal gradient.
  - The heading and text sit on the left and a white "Start Consultation" button on the right; on phones they stack.
  - A faint white CyberSys swoosh watermark on the right drifts slightly on hover.
  - The copy now reads "a secure, resilient, multicloud-powered environment".
- **Navbar:** the scrolled nav used `bg-white/98`, which isn't a real Tailwind class, so the bar had no background (it was see-through over the blue footer). It now uses `bg-white/95`.

## Round 2d: Hero slideshow, split closing section (24 Oct 2026)

- **Hero slideshow** (`components/HeroSlideshow.tsx`): three background photos cross-fade behind the same left-aligned text, in the order 01 Multicloud, 02 Cybersecurity, 03 AI & Data Analytics.
  - Numbered tabs at the bottom have a thin progress line; each slide shows for 7 seconds.
  - Hovering pauses the slideshow, and clicking a tab jumps to that slide.
  - The active photo settles with a slow zoom.
  - People who set their device to reduce motion get no autoplay.
- **"Build for the Future":** replaced the gradient band with a standard split layout: text on light grey (eyebrow "Work with CyberSys", heading, line and button) and a photo filling the other half. On phones they stack.
- **Photos** (all free for commercial use, self-hosted):
  - `public/hero/multicloud.jpg`: bright modern data hall. Unsplash, Taylor Vick: https://unsplash.com/photos/aWslrFhs1w4
  - `public/hero/cybersecurity.jpg`: security operations centre with an analyst at a monitoring wall. Pexels: https://www.pexels.com/photo/32529341/
  - `public/hero/ai-analytics.jpg`: professional presenting a data dashboard to his team. Pexels: https://www.pexels.com/photo/9301257/
  - `public/cta-team.jpg`: two professionals working together in a bright boardroom. Pexels: https://www.pexels.com/photo/7993903/
  - Removed: `hero-multicloud.jpg` (the connected-blocks render).
- **Cleanup:** removed the now-unused `reveal-expand` animation.

## Round 3: Navbar restructure (24 Oct 2026)

- **New top-level nav:** Solutions, Industries, About Us, Contact. Solutions and Services are merged into **Solutions**, and the Multicloud nav item is gone.
- **Solutions menu** (each item opens the closest existing page for now):

  | Menu item | Opens |
  |---|---|
  | Cloud & Infrastructure | `services-cloud` |
  | Cybersecurity | `solutions-cybersecurity` |
  | AI & Digital Analytics | `solutions-bi` |
  | Business Applications & ERP | `solutions-software` |
  | IT & Managed Services | `services-managed` |
  | Training & Consultancy | `services-training` |

- **About Us menu:** opens the Company page and scrolls to the section: Who We Are, Mission & Vision, Why CyberSys (Differentiators), The CS5 Standard, Careers. Section ids were added to `pages/Company.tsx`, and `NavLink` has a new optional `anchor`.
- **Industries menu:** unchanged for now.
- **Desktop nav:** larger, darker top-level text (13–14px, was 10–11px).
  - Dropdowns lost the "Operational Strategy / Resilience Standards" side panel and the "Infrastructure & Services" header.
  - They show just the links, with more room and bigger text (15px titles, 13px descriptions), in two columns for Solutions and one for the rest. Menus near the right edge open leftwards.
  - Solutions highlights on any solutions or services page; About Us highlights on Company and Why CyberSys.
- **Mobile menu:** uses the same structure and the same About Us section jumps.
- **Footer:** Solutions and About Us columns are now built from the nav, so they always match it. The old separate Services and Corporate columns are gone.
- **Hero slideshow:** the numbered tabs were removed. Slides cross-fade on their own every 8 seconds, with no autoplay for reduced-motion users.

## Round 4: Hero wording, industry pages (24 Oct 2026)

- **Hero intro:** now begins "CyberSys Technologies is an enterprise technology company…" (was "We are an…").
- **Industries:** the five priority sectors, in order: Oil & Gas, Banking & Financial Services, Real Estate, Healthcare, Telecommunications.
  - Each has its own page (`industries-oil-gas`, `industries-banking`, `industries-real-estate`, `industries-healthcare`, `industries-telecom`).
  - Each page has an intro, four "What We Deliver" points, links to the other industries, and a call to action. The light layout is a starting point; we will adjust each page.
  - All industry content lives in `data/industries.tsx`, which feeds the nav menu, the Industries overview grid and the pages.
  - Content was carried over from the old Industries cards, the old menu descriptions and the sector details in the deleted AI-assistant data:
    - Oil & Gas: OT/SCADA security, upstream cloud resilience, Primavera/ERP, 24/7 SOC.
    - Banking: CBN/PCI-DSS/NDPR compliance, zero-downtime transaction cloud, zero trust.
    - Telecommunications: high-concurrency platforms, network virtualisation, carrier-grade availability.
    - Healthcare: patient data protection, digital health platforms, continuity.
  - **Real Estate had no previous content.** It is a draft adapted from the old "Enterprise & SMEs" card (cost-optimised cloud, Microsoft 365 governance, managed IT) plus ERP, and needs review.
  - Removed from Industries: Government & Public Sector, Education & Research, Enterprise & SMEs. The old "Energy & Utilities" became Oil & Gas.
- **Industries overview page:** the grid now shows the five sectors, and each card's "View Industry" opens its page. The rest of the page (hero, challenges, dark CTA) is unchanged until we revisit it.
- **Nav:** Industries highlights on any industry page.
- **Cleanup:** removed the unused `INDUSTRIES` constant and `IndustryItem` type from `constants.tsx` and `types.ts`.

## Round 4b: African professionals in hero photos (24 Oct 2026)

- **Rule:** every photo showing people uses African (ideally Nigerian) professionals, and server racks are no longer used to represent multicloud.
- **01 Multicloud:** replaced the data-hall photo with two professionals (a man in a suit at a whiteboard, a woman in a blazer with a laptop) planning architecture. Pexels: https://www.pexels.com/photo/5466268/
- **02 Cybersecurity:** replaced the SOC photo with an analyst wearing a headset and monitoring security dashboards in a bright office. Pexels: https://www.pexels.com/photo/8204353/
  - It is shown mirrored (`mirror: true` in `HeroSlideshow.tsx`) so she sits on the right, clear of the text.
  - Free stock has very few bright photos of African analysts at monitoring walls, so this is the strongest option. Alternatives are logged in the session notes: Pexels 5060568 / 5058917 (man at a monitor in a white office).
- **Unchanged:** 03 AI & Data Analytics (Nigerian presenter, Pexels 9301257) and the "Work with CyberSys" photo (Pexels 7993903).
- **Slideshow:** now supports an optional `mirror` per slide. The flip is applied to a wrapper so it doesn't clash with the slow-zoom effect.

## Round 5: Hero photos (non-people), navbar polish, mobile accordion (24 Oct 2026)

- **Photo rule (clarified):** when a photo shows people they must be African professionals, but not every image needs people. Only the AI slide has people now.
- **Hero slides:**
  - 01 Multicloud: glass cloud icon with floating data tiles, pale blue. Unsplash: https://unsplash.com/photos/cloud-computing-icons-with-data-charts-FocSgUZ10JM
  - 02 Cybersecurity: laptop showing a teal "Secured" lock screen. Pexels: https://www.pexels.com/photo/a-laptop-over-a-round-table-4973899/
  - 03 AI & Data Analytics: unchanged (Nigerian presenter).
  - The headset analyst photo was kept for the Contact page as `public/contact-support.jpg` (not used yet).
- **Hero layout:** on desktop the photos fill only the right side of the hero (from 56% at lg, 44% at xl and up) and dissolve into white on their left edge, so each photo's subject stays in view and clear of the text.
  - The photo frame is clipped so the slow-zoom effect no longer shows a hard edge.
  - The text column is slightly narrower on lg screens.
- **Navbar dropdown jump fixed:** the entrance animation's transform was overriding the centring transform, so a menu appeared offset and then snapped into place. The outer layer now positions the menu and the inner panel animates.
- **Dropdowns refined:** a logo-colour stripe across the top, an icon tile per item (fills blue on hover), an arrow that slides in on hover, and a footer link to the section's main page ("All solutions", "All industries", "About CyberSys"). Nav items gained an optional `icon`.
- **Mobile/tablet menu:** now an accordion. Only the four main headings show; Solutions, Industries and About Us have a small arrow and expand to show their items (with icons) plus an overview link. Contact navigates directly.

## Round 5b: Hero slides from client imagery (24 Oct 2026)

- **01 Cybersecurity:** padlock with security icons (fingerprint, mail, cloud, laptop). Supplied by the client: `public/hero/security-lock.jpg`.
- **02 Cloud & Security:** shield, cloud lock and dashboard graphics over a laptop. Supplied by the client: `public/hero/cloud-shield.jpg`.
- **03 AI & Data Analytics:** an African professional in a navy suit presenting data on a large screen, replacing the presenter in traditional attire. Pexels: https://www.pexels.com/photo/6285124/
- **Hero framing:** the photos now fill more of the right side (from 48% at lg, 34% at xl), the hero is slightly shorter (74vh) so less of each image is cropped, and the white fade is stronger behind the text.
- **Removed:** the glass-cloud and "Secured" laptop stock photos from Round 5.
- **Licensing:** confirm the client-supplied images are licensed for website use (they look like stock imagery).

## Round 6: Solutions overview page (24 Oct 2026)

- **Hero:** split layout like "Work with CyberSys" on Home. Text on light grey on the left; on the right, a photo of an architect at a whiteboard with a colleague (Pexels https://www.pexels.com/photo/5466268/, `public/pages/solutions-architect.jpg`), replacing the greyscale server photo. The intro now reads "CyberSys Technologies delivers integrated cloud, cybersecurity, data, business application and managed IT solutions…".
- **Intro:** retitled "Supporting Digital Transformation". The copy now says "Modern enterprises…" and "CyberSys Technologies…". The Design Standard and Scale Standard boxes were removed.
- **Solution cards:** same layout, now showing the six catalogue categories from the Solutions menu (Cloud & Infrastructure, Cybersecurity, AI & Digital Analytics, Business Applications & ERP, IT & Managed Services, Training & Consultancy).
  - Each card has a summary and five "What We Deliver" points drawn from the partner products.
  - Data lives in `data/solutions.tsx`.
  - Each card links to the same page as its menu item.
- **Process Flow:** same content. The hover is now visible: the card lifts, the border tints blue, the icon tile fills blue and tilts, the step number tints, and a logo-colour line draws across the bottom.
- **Measurable Outcomes:** changed from the dark navy section to a light teal wash with soft glows and white cards that each have a logo-colour top stripe and a blue-to-teal gradient icon.
- **World-Class Delivery Standards (CS5):** removed, since CS5 lives on About Us.
- **"Let's Design the Right Solution":** changed from the dark navy box to a light two-column layout: the message on the left, and three ways to reach us on the right (book a consultation, email, phone). The copy now says "CyberSys Technologies".
- **Animations:** each section enters differently. The hero rises and its photo settles in, the intro splits in from both sides, the cards cascade, the process steps zoom in, the outcomes slide in from the right, and the CTA converges from both sides. The page previously had no working scroll reveals.

## Round 6b: Solutions tweaks (24 Oct 2026)

- **Hero visual:** replaced the whiteboard photo with a bright blue network image (Pexels https://www.pexels.com/photo/8386437/, `public/pages/solutions-network.jpg`).
  - It is overlaid with our six solution areas (Cloud, Cybersecurity, AI & Analytics, ERP & Apps, Managed IT, Training) as icon nodes connected by animated dashed lines to a central CyberSys mark.
  - Free stock libraries have no "service icons" imagery like the client's home page picks, so the icons are built in code.
- **Solutions grid header:** "What We Offer / End-to-End Technology Solutions." with a one-line intro.
- **Card buttons:** now read "Explore solution".
- **"Supporting Digital Transformation":** moved onto deep logo blue (white text, mint accent, soft glows) to break up the white sections.

## Round 7: Cloud & Infrastructure page (24 Oct 2026)

- **New page** `pages/CloudInfrastructure.tsx`, opened by `services-cloud` (Solutions → Cloud & Infrastructure). The back link now goes to Solutions.
- **Hero:** text on the left. On the right, a live multicloud diagram (`components/MulticloudDiagram.tsx`):
  - Microsoft Azure, AWS, Google Cloud and Oracle Cloud cards around a teal "Multicloud / One control plane" hub.
  - A turning text ring ("Unified • Governed • Secure • Optimised • Always on"), a slowly orbiting dashed ring, and dashed connections with data pulses in each provider's brand colour.
  - Hovering (or tapping) a provider lifts its card, lights its connection in its brand colour, dims the others, and shows its focus in the hub.
  - Animation is off for reduced-motion users.
- **New "Our Cloud Solutions" section:** six offerings with icons in a clean grid: Migration & Modernisation, Hybrid & Multicloud Architecture, Private Cloud & Virtualisation, Backup & Disaster Recovery, Cloud Cost Optimisation, Monitoring & Management.
- **"Core Engineering Focus":** removed.
- **Structured Delivery Flow:** the dark hover is gone. Cards now lift, tint the border, fill the icon with a blue-to-teal gradient, tint the step number in mint, and extend the accent bar.
- **"Elevate Your Engineering" → "Engineering Infrastructure":** light teal wash with the message plus three ways to reach us (like the Solutions page). The copy now says "CyberSys Technologies".
- **Animations:** the hero rises and the diagram settles in, the solutions cascade, the methodology heading zooms, the steps slide in from the left, and the CTA zooms.

## Round 7b: Fixes and responsiveness (24 Oct 2026)

- **Solutions → Structured Delivery:** the third step is now "Implement" (was "Secure & Manage").
- **Nav dropdowns:** removed the arrow that appeared beside an item on hover. The section link at the bottom keeps its arrow.
- **Cloud & Infrastructure hero:**
  - The intro now reads "…across the four major cloud hyperscalers, built to support heavy workloads and scale with operational continuity."
  - Fixed the Oracle card overlapping "INFRASTRUCTURE.": the heading now scales with screen width, and text and diagram sit side by side only from 1280px (xl). Below that, the text stacks above a full-width diagram.
- **CTA sections** (Cloud and Solutions pages): they also stack below 1280px, so the large headings never run under the contact card, and email addresses wrap at word boundaries instead of mid-word.
- **Checked at** 1920, 1440, 1280, 1024, 768 and 390px.

## Round 7c: Spacing, cloud hero layout, ring text (24 Oct 2026)

- **Site-wide section spacing** reduced by about a third. For example, `py-24` became `py-16 lg:py-20` and the old `py-40` became `py-20 lg:py-24`, with large-screen variants scaled to match. 97 sections across 11 files changed; only `<section>` padding and the split-layout inner padding were touched.
- **Cloud page:** "Infra Audit" was renamed "Infrastructure Assessment".
- **Cloud hero:** the text and diagram sit side by side again from 1024px (lg) up and stack only on tablets and phones.
  - The diagram's text, logos and padding now scale with the diagram's own width (CSS container units), so it fits a half-width column without overlapping.
  - Card descriptions hide when the diagram is very small.
- **Rotating hub text:** stretched to exactly the ring's circumference with non-breaking spaces, so "Unified • Governed • Secure • Optimised • Always on" is evenly spaced with no gap left over.

## Round 8: Cybersecurity page, ring text (24 Oct 2026)

- **Cloud diagram ring:** now just "Secure • Optimised • Governed", three words spaced evenly a third of the way apart, with mint dots between them.
- **New Cybersecurity page** `pages/Cybersecurity.tsx`, opened by `solutions-cybersecurity`:
  - Split hero (text on light grey with a "Back to Solutions" link). The image is a laptop showing a teal "Secured" screen (Pexels https://www.pexels.com/photo/4973899/, `public/pages/cybersecurity.jpg`).
  - **Core Capabilities**, rebuilt from the partner catalogue. Each card lists the products it is "Delivered with", with partner logos:
    - Endpoint Protection & XDR: Sophos Endpoint, Check Point Harmony Endpoint, Microsoft Defender for Endpoint
    - Network & Firewall Security: Sophos Firewall, Check Point Quantum
    - Cloud Security: Check Point CloudGuard, Microsoft Defender for Cloud
    - Identity & Zero Trust Access: Microsoft Entra ID, Sophos ZTNA
    - Email & Collaboration Security: Sophos Email, Check Point Harmony Email, Microsoft Defender for Office 365
    - Managed Detection & Response: Sophos MDR, Check Point Infinity ThreatCloud AI
  - A "Risk, Compliance & Governance" panel (sticky on large screens) lists NDPR/NDPA, the CBN Risk-Based Cybersecurity Framework, ISO/IEC 27001, PCI-DSS and SOC 2, with a "Request a Security Assessment" button.
  - Replaced the generic "Technical Standards" sidebar.
  - Checked at 1920, 1024 and 390px.

## Round 8b: Hyperscaler Partners on the Cloud page (24 Oct 2026)

- **New "Supported Platforms / Hyperscaler Partners" section** on Cloud & Infrastructure, between the hero and "Everything Your Cloud Needs". It is a light version of the old dark Multicloud-page section.
  - The section sits on a light teal wash with four white cards: Microsoft (Azure), Amazon (AWS), Google (Google Cloud) and Oracle (OCI).
  - Each card has the company mark, a product chip with the product logo, and a description of the key services.
  - On hover a card lifts, a top bar draws across in the provider's brand colour, and the company name takes that colour.
  - The header slides in from both sides and the cards rise one after another.
  - Oracle uses its red ring mark, drawn in CSS.
  - The layout is 4 columns on xl screens, 2 on tablet and laptop, and 1 on phones.

## Round 9: Remaining solution pages (24 Oct 2026)

Shared building blocks live in `components/SolutionBlocks.tsx`: `SplitHero`, `ContactCTA`, `PhotoCTA`, `useReveal`, `BackToSolutions`, `Eyebrow` and `PrimaryButton`. Each page mixes them differently.

- **AI & Digital Analytics** (`pages/AIAnalytics.tsx`, route `solutions-bi`):
  - Hero with a live executive dashboard: bars grow in, and hovering a month updates the KPIs and the "AI insight" line.
  - Six numbered capabilities in a two-column list.
  - "Data-to-Decision Journey" (Collect, Integrate, Analyse, Act) on solid deep blue.
  - Platform logo tiles: Power BI, Azure, BigQuery, Vertex AI, Bedrock, SageMaker, DPAnalytics.
  - Photo CTA: Pexels 9301287.
- **Business Applications & ERP** (`pages/BusinessApplications.tsx`, route `solutions-software`):
  - Split photo hero (Pexels 5583961).
  - Bento platform cards: Oracle Fusion Cloud ERP and Dynamics 365 featured, plus Primavera, Microsoft 365 and Custom Applications.
  - "One Business, One System" on deep blue, with eight process tiles; hovering one shows the platforms that deliver it.
  - Alternating vertical implementation timeline (Discover → Go Live & Support).
  - Contact CTA.
- **IT & Managed Services** (`pages/ManagedServices.tsx`, route `services-managed`):
  - Hero with a live service-status board: services check in one by one, and hovering reveals details. No uptime figures are claimed.
  - "What's Covered" side-accent cards.
  - Monitor/Respond/Resolve/Improve cycle on deep blue.
  - Engagement models: Fully Managed, Co-Managed, Targeted.
  - Photo CTA: Pexels 5058917.
- **Training & Consultancy** (`pages/TrainingConsultancy.tsx`, route `services-training`):
  - Split photo hero (Pexels 7414273).
  - Consultancy (white) and Training (deep blue) pillars.
  - Interactive training-track selector across Microsoft, AWS, Google Cloud, Oracle, Sophos and Check Point, with certification-aligned course names.
  - Four-step engagement bar and a mist Contact CTA.
- **Checked** for horizontal overflow at 390, 768 and 1024px, and visually at 1440px.
- **To confirm:** the course names and wording ("certification-aligned", "CCSA-aligned") should match how CyberSys actually delivers training; check whether you are an authorised training partner for any vendor.

## Round 9b: Toning down the solution pages (24 Oct 2026)

- **AI & Analytics dashboard:** made plain, so it looks less "AI".
  - Sentence-case labels in normal weight, and solid bars (blue active, grey others) with no gradient.
  - Removed the "Live" badge, the glow halo, the top stripe and the sparkle icon. The note now uses a simple trend icon.
- **AI platforms:** added Microsoft Copilot (Wikimedia, `public/partners/products/ms-copilot.svg`, checked for scripts).
- **Business Apps & ERP:**
  - Hero image is now a monitor with multi-panel business dashboards and data tables (Pexels https://www.pexels.com/photo/8636589/).
  - Removed the "One Business, One System" section.
  - "Certified expertise" became "Experience".
- **IT & Managed Services:** an emerging offering, so the claims are modest.
  - Removed Engagement Models and all 24/7 / round-the-clock wording, including in the Solutions catalogue and nav description.
  - The services are reworded ("Where We Can Help"), with managed security noted as delivered with partners. The status board is plainer, with no 24/7 badge.
- **Training & Consultancy:** made light and partner-backed.
  - Removed the training-track/course selector and the engagement steps.
  - "Enablement" now means access to partners' programmes, materials and specialists, plus adoption support and knowledge transfer on our own projects.
  - Added a "Backed by Our Partners" logo strip.
- **Oil & Gas:** "24/7 Security Monitoring" became "Security Monitoring & Response… delivered with our security partners".

## Round 10: Industries (24 Oct 2026)

- **Industry content rewritten** in `data/industries.tsx`. Each sector now has a summary, intro, image, four challenges, a "leading priority" solution with key points, four supporting solutions (linked to the solution pages) and a sector spotlight.
  - **Oil & Gas:** leading priority is AI & Digital Analytics. Spotlight: "Higher Productivity With Data & AI" (predictive maintenance, production optimisation, remote monitoring, intelligent document processing, HSE analytics, inventory forecasting). Also OT/SCADA security, cloud, Primavera/ERP and transformation roadmaps.
  - **Banking & Financial Services:** leading priority is Cybersecurity, aligned with the CBN Risk-Based Cybersecurity Framework. Spotlight: "Protection at Every Layer" (identity, endpoints, network, email, cloud, detection & response with partners). Also cloud, fraud/risk analytics, ERP/CRM and compliance advisory.
  - **Real Estate:** leading priority is Business Apps & ERP (Primavera, ERP, Dynamics 365, Microsoft 365). Spotlight: connected property lifecycle.
  - **Healthcare:** leading priority is Cybersecurity (patient data, ransomware, recovery). Spotlight: digital health done securely.
  - **Telecommunications:** leading priority is Cloud & Infrastructure. Spotlight: data-driven networks (churn, network performance, revenue assurance, unified customer view).
- **Industry pages** (`pages/Industries.tsx`): split photo hero with an "All Industries" link, an editorial numbered challenges list, a featured leading-priority card beside the supporting-solution cards, a solid deep-blue spotlight grid, "Other Industries" photo cards, and a contact CTA.
- **Industries overview:** Lagos skyline hero, photo cards for the five sectors (two featured), "What Every Sector Shares" on deep blue (replacing the old Understanding Industry Risk cards), and a contact CTA. The dark navy CTA is gone.
- **Photos** in `public/industries/`:
  - Oil & Gas: engineer in PPE (Pexels 15200451)
  - Banking: mobile and card payment (Pexels 6969756)
  - Real Estate: Lagos waterfront with towers under construction (Pexels 37405043)
  - Healthcare: doctor with a tablet (Pexels 19957221)
  - Telecom: cell tower (Pexels 36962826)
  - Overview: Victoria Island skyline (Unsplash https://unsplash.com/photos/9ySEZ-ugtJA)
- **Long words:** "TELECOMMUNICATIONS" gets a smaller hero size, and section headings hyphenate only when a word cannot fit. Headings were checked for overflow at 390, 640, 768, 1024, 1280 and 1536px.

## Round 10b: Industry photos (24 Oct 2026)

- **Oil & Gas:** a working land drilling rig in Nigeria with a loader, drill pipe and a worker on site (Pexels https://www.pexels.com/photo/35224901/).
- **Banking:** a modern branch interior with a service counter and ATM, with no visible bank brand (Pexels https://www.pexels.com/photo/36328523/). Free stock has no full Nigerian banking-hall photo with staff; a commissioned or paid stock photo would be better.
- **Real Estate:** a large Lagos high-rise under construction by the lagoon, with tower cranes (Pexels https://www.pexels.com/photo/38511754/).

## Round 11: About Us page (24 Oct 2026)

- **Rebuilt `pages/Company.tsx`** in the new format, keeping the section ids the About Us menu links to (who-we-are, mission-vision, differentiators, cs5, careers):
  1. Split hero with a team photo (Pexels https://www.pexels.com/photo/9301246/).
  2. "Who We Are": the company description, partners and sectors.
  3. Mission (light card) and Vision (deep blue card), replacing the dark navy card.
  4. "What Sets Us Apart": four differentiators, reworded to avoid overclaiming.
  5. CS5 Standard on solid deep blue.
  6. "Headquartered in Lagos": address, phones and email beside a Lekki waterfront photo (Unsplash https://unsplash.com/photos/EMjpo0YjHPw).
  7. Careers: a modest "send your CV" band (email link) instead of "Explore Open Roles", "Life at CyberSys" and "Talent Programs".
  8. Contact CTA, replacing the dark "Partner with the Authority" box.
- **Removed:**
  - The "Ethical Technology" card and its "Learn More" link, which went nowhere.
  - The STR-01/02 labels, italics and the blueprint overlays.
  - `public/lagos-node.png`, which was AI-generated and showed real bank logos.
- **Headings:** hyphenate only when needed; checked at 390–1536px.

## Round 11b: About Us tweaks (24 Oct 2026)

- **CS5 Standard:** the first letter of each word is enlarged in mint, so it reads as **C**ustomer, **S**ynergy, **S**ecurity, **S**ystems, **S**calability, **S**olutions. A "C S S S S S" letter strip and the line "One C and five S's" make the CS5 name obvious.
- **"What Sets Us Apart"** became **"Built on C.O.R.E."**, using the same four pillars as the Home page: a letter badge, the first letter of each title highlighted, and a large faded letter in the background.
  - `CORE_PILLARS` now lives in `constants.tsx` and is shared by Home and About, so the two pages always match.
- **Hero photo:** a Nigerian team in a boardroom workshop (Pexels https://www.pexels.com/photo/9301288/).

## Round 12: Contact page and final tidy-up (24 Oct 2026)

- **Contact page rebuilt** (`pages/Contact.tsx`):
  - Split hero "Get In Touch." with the headset photo (`public/contact-support.jpg`, Pexels 8204353).
  - A deep-blue "Reach Us Directly" panel (email, phones, office) beside one simple form: topic, industry, name, work email, company, phone, message.
  - Removed the Consultation/RFP/Partnership tabs, "Initiate Engagement", ticket reference numbers, "24h SLA" and the jargon throughout.
- **Smart pre-selection:** `App.tsx` remembers the page a visitor was on when they clicked through to Contact.
  - Coming from a solution page pre-selects that topic (e.g. Cybersecurity).
  - Coming from an industry page pre-selects that industry (e.g. Oil & Gas).
  - The email subject reads "Website enquiry: <topic> (<industry>) from <name>" and includes a `came_from` field, so enquiries can be routed at a glance.
- **Email delivery:** still uses FormSubmit to info@cybersystechnologies.com. If sending fails, a one-click "Email us" opens the visitor's mail app with everything pre-filled.
- **Nav button:** "Consult Architect" became "Get In Touch" (desktop and mobile).
- **Headings site-wide:** hyphenate only when a word can't fit. All 12 main pages pass at 390, 640, 768, 1024, 1280 and 1536px.

## Round 13: Removing unused pages and code (24 Oct 2026)

- **Deleted pages** not in the menu: `Multicloud.tsx`, `WhyCyberSys.tsx`, `Insights.tsx`, `Services.tsx` (old services overview, Multicloud Mastery and generic service detail).
- **Solutions.tsx:** cut from about 1,140 to about 300 lines, keeping only the overview. The old Cloud/Cybersecurity detail templates and Digital Transformation are gone.
- **Routing:** `App.tsx` now routes each menu item straight to its page.
  - Old addresses redirect to the closest current page: `#multicloud` and `#services-multicloud` go to Cloud & Infrastructure, `#why-cybersys` to About Us, `#services` and `#solutions-digital` to Solutions, and `#insights` to Home.
  - `Page` type trimmed to the 16 live pages.
- **Other code removed:** the `CYBER_VALUES` constant, the `blueprint-grid-fine` CSS and the unused purple `accent` colour.
- **README:** rewritten (the old one was the AI Studio template asking for a Gemini key).
- **Checked:** every page and redirect loads with no console errors or broken images.

## Round 13b: Hero slide 3 (24 Oct 2026)

- **Slide 03 (AI & Data Analytics):** replaced the presenter photo with a laptop showing an analytics dashboard (Pexels https://www.pexels.com/photo/577210/). No slides have people now, matching the style of slides 01 and 02.

## Round 13c: No broken words in headings (24 Oct 2026)

- **Removed `hyphens-auto break-words`** from all 77 headings. It let the browser split words mid-way (e.g. "TRANSFORMATIO / N", "STRUCTURE / D").
- **Sized overflowing headings** so the longest word always fits on one line:
  - Solutions: "Supporting Digital Transformation" and "Structured Delivery" now stack below 1280px instead of sitting in narrow side columns.
  - Smaller sizes at specific breakpoints for the solution card titles, the Industries card and risk titles, and the Company "Global Standards" and "CS5" headings.
  - Headings containing "Telecommunications" get a smaller size (`ContactCTA` gained an optional `titleClass`).
- **Checked:** every heading on all 12 main pages at 360, 390, 640, 768, 1024, 1280, 1536 and 1920px, with no overflow.

## Round 14: Softer headings, nav tidy-up (26 Oct 2026)

- **Headings:** the MD found them too "in your face".
  - All 83 page headings switched from Inter Black in all caps with tight tracking to **Plus Jakarta Sans Bold** in normal case, with relaxed tracking and line height.
  - Loaded from Google Fonts, applied to h1–h4 in `index.html`.
  - Small letter-spaced labels keep their capitals. Body text stays Inter.
- **Navbar:**
  - Labels are regular weight instead of bold.
  - The separate "Get In Touch" button was removed. "Contact" is shown in brand blue and fills into a solid blue button on hover, and stays filled on the Contact page.
  - The duplicate mobile "Get In Touch" button was removed.
- **Hero:** the intro text is one size smaller.
- **Partner section:** on monitors 1800px and wider it spans up to 1880px, with bigger cards, logos and text.

## Round 15: Aligned with the official Brand Guide (26 Oct 2026)

- **Colours:**
  - Mint corrected to `#01EFAC` (was `#2BDFB4`).
  - Text uses Ink `#101729` and Slate `#4A5567`.
  - Buttons and small labels use the guide's deeper tint `#2F6D8C` (`brand-action`) so white text stays readable.
- **Typography:** back to Inter only (Plus Jakarta Sans removed).
  - 53 headlines: Inter Bold, caps, -0.02em, 1.1 line height. This is calmer than the original Black weight with squeezed tracking.
  - 25 card titles: Semibold, normal case (the guide's subheading style).
  - 51 labels: Medium, 13px, caps, +0.2em.
  - 11 buttons: Semibold, +0.15em.
  - No Black (900) weight is left anywhere.
- **Logo:**
  - Self-hosted as `public/cybersys-logo.png` instead of the i.ibb.co link.
  - Footer: no longer recoloured white; it sits on a white panel, as the guide says to use it on white.
  - Navbar: at least 120px wide.
  - Solutions hero: shows the full logo instead of the symbol alone ("never split symbol and wordmark").
- **Not changed, for the client to decide:**
  - The CS5 section keeps the first-letter highlight requested earlier rather than the guide's plain numbered cards.

## Round 15b: Naming (26 Oct 2026)

- "AI & Digital Analytics" was renamed **"AI & Data Analytics"** everywhere (menu, footer, Solutions cards, industry pages, page heading, contact topics), to match the brand guide.

## Round 16: Designer review (26 Oct 2026)

- **Only the footer is solid colour now.** Every deep-blue section or card became light:
  - White: Solutions "Supporting Digital Transformation", Managed Services "How We Work With You", industry spotlights (e.g. Oil & Gas "Higher Productivity").
  - Light grey: Cloud "Hyperscaler Partners", Industries "Understanding Industry Risk".
  - Soft mist gradient with glows: AI "Data-to-Decision Journey", About "CS5 Standard".
  - Light cards: About "Our Vision", Training "Enablement", Contact "Reach Us Directly".
- **Section backgrounds** alternate white and light grey so sections stay distinct.
- **C.O.R.E.:** the dots are the same blue as the letters everywhere (Home hero, About "Built on C.O.R.E.").
- **Partner panel (Home):** white with a teal outline. The partner logo sits beside the heading, text colours were adjusted for white, and "Talk to us" uses the action blue.
- **Footer logo:** back to an all-white version, with no white panel (the client's call, overriding the brand guide's "don't recolour").
- **Build for the Future (Home):** new team photo (`public/cta-team-workshop.jpg`, supplied by the client). The previous `cta-team.jpg` is kept for later use.
- **Industry pages:** removed the "Leading priority" tag.
- **About Us:** removed the "Headquartered in Lagos" section and its photo (`public/about/lekki.jpg` deleted).

## Round 16b: Copy tweaks (27 Oct 2026)

- **C.O.R.E. (Home and About):**
  - C now reads "Built-in alignment with regulatory and compliance requirements. Audit-ready evidence." (no NDPR/CBN/ISO claims).
  - O now reads "We match each workload to the right cloud partner (Azure, AWS, Oracle or Google Cloud) based on your needs, with costs kept under control." (no "vendor-neutral", no TCO percentage).
- **Solutions:**
  - Removed the "Supporting Digital Transformation" section.
  - The hero heading is now "Supporting Digital Transformation." and the hero text is that section's copy ("Modern enterprises operate in…").
  - Section backgrounds were re-alternated; the "End-to-End Technology Solutions" heading is one size smaller below 2xl.
- **Cybersecurity:** dropped "delivered with Sophos, Check Point and Microsoft" from the intro.
- **AI & Data Analytics:** "Make Your Data Work Harder." became "Make Your Data Work Smarter."
- **IT & Managed Services:** "Where We Can Help." became "Where We Come In."
- **About / CS5:** removed the "One C and five S's…" line.

## Round 17: Director's review (29 Oct 2026)

- **Site-wide type:**
  - The font is now Montserrat (was Inter).
  - Tailwind's `3xl`–`7xl` sizes are one step smaller (overridden in `index.html`).
  - Headings are in sentence case, with no CAPS and no trailing full stops. The one exception is the home headline "GLOBAL TECHNOLOGY / CONNECTED BY CYBERSYS", which stays in CAPS.
  - Small labels (eyebrows, buttons) stay in caps.
- **Layout:**
  - Every hero has centred text, and the left border on the intro is gone.
  - Section headers that sat beside their text are now stacked and centred, using the new `SectionHeader` in `SolutionBlocks.tsx`.
  - Cards are smaller and buttons are smaller (`BUTTON_CLASS`).
- **Multi-colour titles:** the teal "&" is gone. For example, "Cloud &" is black and "Infrastructure" stays blue. The same applies to AI & Data Analytics, Business Apps & ERP, IT & Managed Services, and Training & Consultancy.
- **Home:**
  - The "Secure the C.O.R.E." hero slideshow was removed; `components/HeroSlideshow.tsx` is deleted, and the `/public/hero/` images are kept but unused.
  - The C.O.R.E. section was removed.
  - The partner section is now the hero: the headline, then the company text ("CyberSys Technologies Limited is an Enterprise Technology Company…", in title case, with "(AI)" and Manufacturing added), then smaller Request Consultation and Explore Solutions buttons, then the partner grid.
- **Navigation:**
  - The order is now About Us, Solutions, Industries, Careers, Contact.
  - The logo is 1.5× larger (h-8 to h-12).
  - Careers is its own page (`pages/Careers.tsx`, `#careers`) with three sections: the hero, areas we hire for, and how to apply.
- **WhatsApp:**
  - +234 802 595 5618 links to `wa.me/2348025955618` (`WHATSAPP_URL` in `constants.tsx`).
  - It appears in the footer (icon and contact line), on the Contact page and in the closing contact cards.
- **Solutions:**
  - The hero image and its CyberSys node graphic are smaller, shown as a framed 5:4 panel.
  - The six cards are compact (capabilities shown as tags), so both rows fit at 1366×768 and 1536×730.
- **Cybersecurity:** new hero photo, a USB security key beside a laptop on a white desk (Pexels, cottonbro: https://www.pexels.com/photo/5474301/). This replaces the fingerprint access photo, which the client did not like.
- **IT & Managed Services:** removed "How we work with you / Stable today, stronger tomorrow".
- **Industries:**
  - Telecommunications is removed (`#industries-telecom` now redirects to Industries).
  - "What every sector shares" is removed.
  - New photos (all Pexels):
    - Overview: laboratory scientist in a face mask, goggles and gloves (Pexels https://www.pexels.com/photo/8770733/, `public/industries/overview-lab.jpg`). This replaces the Dar es Salaam port photo, which is kept at `public/industries/overview.jpg`.
    - Oil & Gas: offshore platform photo supplied by the client (replaced the Pexels aerial shot).
    - Banking: professional with a bank card and phone (Vitaly Gariev).
  - Manufacturing was added to the Contact form's industry list.
- **About Us:** the CS5 section and the Careers section are removed (`CS5_FRAMEWORK` deleted).
  - Hero photo is now `public/about/workstation.jpg`: an engineer at a development workstation, supplied by the client. The previous boardroom photo is kept, unused, at `public/about/team.jpg`.
- **Careers:** hero photo is now `public/pages/careers.jpg`: two colleagues working together at a laptop, supplied by the client. The previous image, `public/cta-team.jpg`, is kept.
- **Landing background:** the hero and partner section are white, not mist. The partner cards now have a light grey outline and a soft shadow so they stand out on white, and the outline turns blue on hover.
- **Implementation, not just resale:** copy across the hero, Solutions, About, partner card and industries now says "design, implement and support/manage".

### Open items
- **FormSubmit activation:** the first live form submission sends a one-time activation email to info@cybersystechnologies.com, and someone must click it.
- **Image licensing:** confirm the two client-supplied hero images are licensed for web use. Check Point logo use may need brand approval.
- **Better photos:** a commissioned shoot (team, banking hall, office) would beat stock.

## Round 18: Zoomed-out hero photos (2026-10-30)

- **About Us and Industries heroes** (overview and all industry pages) keep their side-by-side layout: text on the left, photo filling the right half from lg (1024px).
- The photo is no longer zoomed in. It shows whole, and a lightly blurred copy of the same photo (6px blur) fills any leftover space.
- The photo fades into the blur over 40px. The fade is applied only on the edges that border a gap, so the sides where the photo meets the panel stay sharp. This is the shared `HeroPhoto` component in `SolutionBlocks.tsx`.
- An earlier attempt that stacked the hero below 1280px was rejected by the client and reverted.
- **Cybersecurity and Careers** are not changed. They still use the solution-page hero, where the photo fills the half-panel.

## Round 19: Home headline (2026-10-30)

- Home headline is "GLOBAL TECHNOLOGY. CONNECTED BY CYBERSYS." with full stops. This client request reverses the earlier "no full stops" rule for this headline only.
- The headline and the company summary now span the same width as the partner card grid. The `max-w-4xl` and `max-w-3xl` limits were removed.
- From xl (1280px) the headline sits on one line. Below that it breaks after "TECHNOLOGY.".
- **Cybersecurity hero:** now the client's padlock network graphic (`public/hero/security-lock.jpg`), which replaces the USB security key photo. That photo is kept at `public/pages/cybersecurity.jpg`.
- **"Work with CyberSys" sections** (the `PhotoCTA` component on Home, AI & Data Analytics and IT & Managed Services): text is now left-aligned instead of centred.
- Home CTA title is "Build for the Future", with a capital F.
- **All split heroes** (text on one side, picture or graphic on the other) now have left-aligned text. This covers `SplitHero` (Cybersecurity, Business Apps, Training, Careers), the About Us, Solutions, Contact and Industries heroes, and the Cloud, AI & Data Analytics and IT & Managed Services heroes.
- **These hero headings and the CTA titles are now in Title Case:**
  - Secure Digital Infrastructure
  - Supporting Digital Transformation
  - Get in Touch
  - Technology for Critical Industries
  - Make Your Data Work Smarter
  - Focus on Your Business
- About Us section heading is now "Global Standards, Local Understanding".
- Other centred section headers keep sentence case.
- **Section intros span full width:** the centred `SectionHeader` (eyebrow, heading and intro text) no longer has a `max-w-3xl` limit. The intro text now runs the full width of the section's content, matching the home page.
- **About Us "Who We Are":** the two paragraphs are merged into one, starting with "CyberSys Technologies Limited is an Enterprise Technology Company…" and continuing with "Established to address…". The paragraph also spans the full content width.

## Round 20: Title Case, Cybersecurity layout, Banking photo (2026-10-30)

- **Title Case on every section heading and CTA title** across all pages, plus the industry spotlight titles in `data/industries.tsx`. Examples: End-to-End Technology Solutions, Structured Delivery, Layered Protection, End-to-End, Let's Build Industry-Ready Infrastructure. "Let's design the right solution" (Solutions CTA) was left as is, at the client's request.
- **Cybersecurity:** the six capability cards are now a 3-per-row grid (2 per row on tablet, 1 on phone). "Risk, Compliance & Governance" moved below them as a full-width panel that ends the section as its call to action: description, then the standards list, then the "Request a Security Assessment" button.
- **Cloud, Hyperscaler Partners:** now two rows of two compact cards (`max-w-5xl`, tighter padding), not four across.
- **Blurred zoomed-out photo is now limited to the Oil & Gas and About Us heroes.** The Industries overview and the Banking, Real Estate and Healthcare heroes are back to the normal full-bleed photo. This is controlled by the `fullPhoto` flag in `data/industries.tsx`.
- **Banking photo:** now a close-up of ₦200 and ₦500 notes (Pexels https://www.pexels.com/photo/5671470/, Ismail Seghosime, `public/industries/banking-naira.jpg`).
  - The client wanted an unbranded ATM with naira. No free, unbranded photo of that was found; the Nigerian ATM photos available carry bank branding.
  - The previous photo (man with card and phone) is kept at `public/industries/banking.jpg`.
- **IT & Managed Services "Focus on Your Business" photo (trial):** now `public/pages/managed-services-desk.jpg`, the client's photo of a colleague at a desk. The previous photo, `public/pages/managed-services.jpg`, is kept so it can be switched back.
- **Industry pages, "Solutions Built for …":** back to compact cards. All five (the sector's lead solution first, marked with a teal bar and a filled icon) sit in one row of equal small cards on desktop: 5 across from 1280px, 3 on laptop/tablet, 2 then 1 on smaller screens. The large featured card that spread across the full width below 1280px is gone.
- **Contact:** removed "Prefer to talk?", so the panel text reads "Use any of the details below." The details panel and the form now sit side by side from 1024px instead of 1280px, so they no longer stack on laptops.
- **Banking photo:** now an unbranded ATM with a banknote coming out of the cash slot (Pixabay https://pixabay.com/photos/atm-100-pln-buck-gold-money-cash-2923514/, Pixabay Content Licence, `public/industries/banking-atm.jpg`). The note was softened so the foreign (Polish) currency can't be read. No free, unbranded naira ATM photo exists; a photo of the client's own (naira, logo out of frame) would be better. The naira-notes photo is kept at `public/industries/banking-naira.jpg`.
- **Home page network background:** new `NetworkBackdrop` component behind the headline and partner grid. It is a faint web in brand blue with short pulses of light running along the links at random, like current moving through a network.
  - It is drawn on a canvas, fades out at the top and bottom of the section, and only animates while on screen.
  - With reduced motion turned on, it shows as a still web.
- **Home:** the headline is back on two lines at every size ("GLOBAL TECHNOLOGY." / "CONNECTED BY CYBERSYS."). There is more space between the hero buttons and the partner cards (`mb-20 lg:mb-28 2xl:mb-32`).
- **Careers:**
  - "Where you could work / Areas We Hire For" is now "Career Opportunities / Our Areas of Expertise". The intro ends with "We welcome applications from professionals in the following areas."
  - The three apply steps are replaced by one "How to Apply / Send Us Your CV" card containing the email instruction and the Send Your CV button.

## Round 21: Security, SEO and speed (2026-10-30)

### Speed
- **Tailwind** now builds at deploy time (`tailwind.config.js`, `postcss.config.js`, `index.css`) instead of running the Tailwind CDN script in every visitor's browser. CSS is 8.6 KB gzipped.
- **Code splitting:** every page except Home loads on demand (`React.lazy` in `App.tsx`). The first load is about 84 KB of gzipped JS, down from 103 KB, and nothing compiles in the browser any more.
- **Images:** every image the site uses was converted to WebP, about 55–75% smaller each. For example, the About photo went from 189 KB to 55 KB and the Solutions hero from 320 KB to 71 KB. The original JPG/PNG files are kept.
- **Montserrat** is self-hosted (`@fontsource/montserrat`, Latin subset, 4 weights at about 19 KB each) instead of loading from Google Fonts.
- **Caching:** hashed `/assets/*` files are cached for a year (`immutable`); images for a week.
- **Production source maps are off** (`vite.config.ts`).

### SEO
- **Clean URLs** (`routes.ts`):
  - Main pages: `/about`, `/solutions`, `/industries`, `/careers`, `/contact`.
  - Solution pages: `/solutions/cloud-infrastructure`, `/solutions/cybersecurity`, `/solutions/ai-data-analytics`, `/solutions/business-applications`, `/solutions/managed-services`, `/solutions/training-consultancy`.
  - Industry pages: `/industries/oil-gas`, `/industries/banking-financial-services`, `/industries/real-estate`, `/industries/healthcare`.
  - Old `#page` links, and the previous site's names (`#multicloud`, `#why-cybersys` and so on), redirect to the new address. Unknown addresses go to Home.
- **Per-page tags:** each page sets its own `<title>`, meta description, canonical URL and Open Graph/Twitter tags (`PAGE_META` in `routes.ts`).
- **Head tags** (`index.html`): default description, canonical, robots, theme colour, share image (`/og-image.jpg`, 1200×630), and Organization structured data (JSON-LD with address, phone, email and social profiles).
- **Crawlable links:** nav, dropdown, mobile menu and footer items are real `<a href>` links that crawlers can follow, still intercepted for in-app navigation.
- **Sitemap and robots:** `public/sitemap.xml` (16 URLs) and `public/robots.txt`.

### Security
- **Contact form:** the form now posts to the site's own Vercel function, `api/contact.ts`, instead of FormSubmit. Each message is checked in this order:
  1. Only same-site POST requests with a JSON body of at most 10 KB are accepted.
  2. A per-visitor rate limit allows 5 messages per 10 minutes.
  3. Bot checks:
     - a hidden honeypot field;
     - a minimum of 3 s spent on the form;
     - a Cloudflare Turnstile token, verified on the server.
  4. Every field is validated and length-limited.
- **Sending:** the email goes out through Resend. Visitor text is HTML-escaped and line breaks are stripped from the subject. Error replies stay generic.
- **Tests:** all checks were tested with stubbed services (`apitest`).
- **Form fields** have matching `maxLength`/`minLength`/`pattern` limits. Turnstile (`components/Turnstile.tsx`) loads only on the Contact page and is invisible to most people.
- **Security headers** (`vercel.json`):
  - a strict Content-Security-Policy (only this site, plus Cloudflare Turnstile);
  - HSTS, `X-Content-Type-Options`, `X-Frame-Options: DENY` and `frame-ancestors 'none'`;
  - Referrer-Policy, Permissions-Policy and COOP.
  - The production build was tested under this CSP: no blocked resources and no console errors on Home, About, Cybersecurity, Oil & Gas or Contact.
- **Secrets:** `.env` files are git-ignored. `.env.example` lists the required variables.

### Needed before going live
1. **Cloudflare Turnstile:** add a site for cybersystechnologies.com, then set `VITE_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` in Vercel.
2. **Resend:** verify the cybersystechnologies.com domain (DNS records), then set `RESEND_API_KEY`, `CONTACT_FROM` and `CONTACT_TO`.
3. **Optional:** add a Vercel Firewall rate-limit rule on `/api/contact`. The in-code limit only holds within one function instance.
4. **After launch:** submit `https://www.cybersystechnologies.com/sitemap.xml` in Google Search Console.
5. **Local dev:** `npm run dev` doesn't run `/api`, so the form shows its email-us fallback there. Test sending on a Vercel preview deploy.
- **Banking hero (2026-10-30, later):** now a custom illustration, `public/industries/banking-naira-flow.webp` (51 KB), made by `scripts/banking-naira-flow.cjs`. It shows a ₦ symbol at the centre of a secure network, linked to mobile/NFC, bank, card and POS channels by pulsing lines, on a brand-blue gradient. It's original artwork, so there's no licence or branding issue. The ATM photo is kept at `public/industries/banking-atm.webp`.
- **Banking hero, final version (2026-10-30):** a live SVG diagram (`components/FundsFlow.tsx`) instead of a photo. Naira tokens flow from Mobile & USSD, Cards & POS, Branches & ATMs and Payroll & bulk, through Core banking, to Merchants, Customer accounts, Bills & utilities and Treasury. Stream width shows volume.
  - Motion is off for visitors who prefer reduced motion.
  - The Banking cards on the Industries pages use a still capture of it, `public/industries/banking-funds-flow.webp`.
- **Turnstile site key** is now read at runtime from the Vercel env var `TURNSTILE_SITE_KEY`, served by `GET /api/contact`, instead of being built into the page with a `VITE_` prefix (the client's choice, following Vercel's warning).
- **Vercel preview origins** (`VERCEL_URL`, `VERCEL_BRANCH_URL`) are now allowed by the form function.
- **`HANDOVER.md`** added: the services (Vercel, Cloudflare Turnstile, Resend, DNS, Search Console), why each is used, environment variables, key rotation, security measures, SEO, everyday tasks and troubleshooting.
- **Banking hero, real photo (2026-10-30, final):** the generated visual was dropped at the client's request, since the other industries use real photos. Banking now uses a real ATM photo: an unbranded machine with a person entering their PIN under the keypad shield (Pixabay https://pixabay.com/photos/atm-brexit-cash-withdraw-cash-1524868/, Pixabay Content Licence, `public/industries/banking-atm-keypad.webp`, 39 KB). The only marking is the small "NCR" maker's mark; there's no bank branding. `components/FundsFlow.tsx` was removed.
- **Banking ATM photo, skin tone:** the client liked the ATM photo but asked for the hands to look Nigerian. The skin was deepened to a natural brown with `scripts/banking-atm-skin.cjs`, which keeps the original light and shading. It uses a traced outline of the hands and excludes the jacket and grey metal by colour. Result: `public/industries/banking-atm.webp` (43 KB). The unedited version is kept at `banking-atm-keypad.webp`.
- **Contact function:** it now logs the exact reason for a Turnstile or Resend failure (Vercel → Logs) while still showing visitors a generic message.
- **Banking photo, final:** the recoloured hands looked edited, so the client asked for a different photo. Banking now uses a real photo of a young Black woman in a blazer using a self-service machine with a keypad and card slot, no bank branding (Pexels https://www.pexels.com/photo/5357178/, Roberto Hund, `public/industries/banking-atm-woman.webp`, 72 KB). The recoloured image and its script were removed; the unedited ATM keypad photo is kept at `banking-atm-keypad.webp`.
