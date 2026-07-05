# Portfolio Redesign — Design Spec

**Date:** 2026-07-05
**Status:** Approved
**Reference:** https://siddz.com/ (inspiration only — structure and spirit, not a copy)

## Goal

Turn quyctd.dev's home page from a three-paragraph bio into a professional-profile portfolio: a single flowing page that introduces Quy, showcases his shipped and in-progress apps, summarizes work experience, and makes contact easy. The blog stays, low-key.

## Scope

**Approach A:** rebuild the home page + light site-wide polish (typography, header, footer). No re-scaffold, no router migration, no changes to blog content, API routes, or the static app landing pages / subdomain rewrites in `next.config.js`.

## Home page structure (top to bottom)

1. **Intro**
   - Name: Dinh Cong Quy (Quy Dinh), tagline along the lines of "Product engineer & indie app builder" (final copy at implementation, kept short), location: Hanoi, Vietnam.
   - Compact social row: email (quy.dc98@gmail.com), GitHub (quyctd), LinkedIn (quyctd).
   - Two short bio paragraphs distilled from the current home page, updated to mention shipping his own apps.

2. **Apps** (featured section, anchor `#apps`)
   - Card per app: app icon, name, one-line pitch, status badge, links.
   - Launch content:
     - **Ichi** — "A calm to-do & focus app, one task at a time." Status: App Store. Links: landing page (`/ichi` or ichi subdomain), App Store.
     - **Ấn Điểm** — "Scorekeeper for Phỏm, Tá Lả, Sâm Lốc, Tiến Lên." Status: App Store. Links: landing page, App Store.
     - **Currently building** — one muted placeholder card; real name/description filled in by Quy later. The data model supports it from day one.
   - TeethJudge is intentionally excluded.

3. **Experience** (compact timeline)
   - One line per role: title, company, dates.
     - Frontend Lead — AnyAxis Labs (Apr 2024 – present)
     - Senior Frontend Engineer — LINE Corporation (Aug 2021 – Apr 2024)
     - Software Engineer — PIXTA Vietnam (Jul 2019 – Jun 2021)
     - Software Engineer — VNG Corporation (Oct 2018 – Jul 2019)
     - Associate Developer — MindX Technology School (Oct 2017 – Sep 2018)
   - "Full resume →" link to `/resume.pdf`. Replace the outdated `public/resume.pdf` with `~/Documents/resumes/Dinh Cong Quy - Frontend Engineer.pdf`.

4. **Writing** (low-key)
   - A single line linking to `/blog` (e.g. "I occasionally write about CSS and frontend →"). No post list on home.

5. **Contact + footer**
   - "Get in touch" with email + LinkedIn.
   - Refreshed footer: socials + copyright.

## Visual direction

Refined minimal — an evolution of the current quiet aesthetic:

- Single ~45rem column, generous whitespace.
- Larger, tighter heading scale; neutral palette; existing dark/light mode preserved.
- Subtle fade-up on scroll via framer-motion (existing dependency); quiet hover states on cards. Motion respects `prefers-reduced-motion`.
- App cards use real app icons from `public/ichi/icon.png` and `public/an-diem/icon.png`, resized to small webp assets (don't ship 400–800KB PNGs).
- Header keeps logo + cmd-k menu with refreshed styling. Blog pages inherit the typography refresh; content untouched.

## Technical shape

- `data/projects.ts` — typed app list: `{ name, tagline, status: 'live' | 'building', icon, links: { site?, appStore? } }`. Adding a future app = one entry.
- New components in `components/home/`: `Intro`, `AppCard`, `ExperienceList`, `Section`.
- `pages/index.tsx` composes the sections.
- `pages/projects.tsx` becomes a redirect to `/#apps` (no 404s for old links).
- cmd-k menu gains entries for the apps.
- Blog data flow (`data/blog.json`, `posts/`), API routes, and `public/*` app sites unchanged.

## Error handling

Static site — no runtime data fetching on the new page. Broken-link risk is handled by keeping `/projects` as a redirect and verifying all external links (App Store, landing pages) at implementation time.

## Verification

- `pnpm build` passes.
- Visual check of home + one blog post, light and dark, mobile (~375px) and desktop widths.
- `/projects` redirects correctly; resume link serves the updated PDF.

## Out of scope

- App router migration or re-scaffold.
- Blog content or styling overhaul beyond inherited typography polish.
- TeethJudge on the portfolio.
- Analytics, CMS, or new pages.
