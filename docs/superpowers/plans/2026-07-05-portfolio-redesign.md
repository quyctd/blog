# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild quyctd.dev's home page as a single flowing professional-profile portfolio (intro → apps → experience → writing → contact) with light site-wide polish.

**Architecture:** Keep the existing Next.js pages-router app. New home sections are small components under `components/home/`, fed by typed data files in `data/`. The shared `Page` component gains a `prose` opt-out so the home page can use custom layout while blog pages keep typography styles. `/projects` becomes a config-level redirect to `/#apps`.

**Tech Stack:** Next.js 16 (pages router), React 19, Tailwind CSS 3, framer-motion, cmdk, TypeScript.

**Spec:** `docs/superpowers/specs/2026-07-05-portfolio-redesign-design.md`

## Global Constraints

- Do NOT touch: `data/blog.json`, `posts/`, `pages/api/`, `pages/blog/`, `public/ichi/`, `public/an-diem/`, `public/teethjudge/`, `public/wedding/`, or the `rewrites()` section of `next.config.js` (subdomain hosting depends on it).
- TeethJudge must NOT appear on the portfolio.
- Column width stays `max-w-[45rem]`; dark mode via existing `dark:` classes; palette neutral (match existing `#131415` dark bg, neutral grays).
- Motion must respect reduced-motion (`useReducedMotion` from framer-motion).
- Project status union is exactly: `'live' | 'soon' | 'building'` (Ichi is `'soon'` — its landing page says "Coming soon to the App Store"; Ấn Điểm is `'live'`).
- **Testing note:** this repo has no unit-test infrastructure and the change is presentational. Per-task verification is `npx tsc --noEmit` + `pnpm lint`; final task verifies with `pnpm build` and a visual pass. Do not add a test framework.

---

### Task 1: Assets — app icons and updated resume

**Files:**
- Create: `public/projects/ichi.webp`, `public/projects/an-diem.webp`
- Overwrite: `public/resume.pdf`

**Interfaces:**
- Produces: icon paths `/projects/ichi.webp` and `/projects/an-diem.webp` used by `data/projects.ts` (Task 2).

- [ ] **Step 1: Generate small webp app icons**

```bash
cd /Users/dinhquy/Documents/quyctd/blog
mkdir -p public/projects
cwebp -q 85 -resize 256 256 public/ichi/icon.png -o public/projects/ichi.webp
cwebp -q 85 -resize 256 256 public/an-diem/icon.png -o public/projects/an-diem.webp
```

- [ ] **Step 2: Verify sizes**

Run: `ls -la public/projects/`
Expected: two `.webp` files, each well under 50KB.

- [ ] **Step 3: Replace outdated resume**

```bash
cp "/Users/dinhquy/Documents/resumes/Dinh Cong Quy - Frontend Engineer.pdf" public/resume.pdf
```

- [ ] **Step 4: Commit**

```bash
git add public/projects public/resume.pdf
git commit -m "Add resized app icons for portfolio, update resume PDF"
```

---

### Task 2: Typed data files for projects and experience

**Files:**
- Create: `data/projects.ts`
- Create: `data/experience.ts`

**Interfaces:**
- Produces: `Project`, `ProjectStatus`, `projects` from `data/projects.ts`; `Role`, `roles` from `data/experience.ts`. Consumed by Tasks 4, 5, 6.

- [ ] **Step 1: Create `data/projects.ts`**

```ts
export type ProjectStatus = 'live' | 'soon' | 'building'

export interface Project {
  name: string
  tagline: string
  status: ProjectStatus
  icon?: string
  site?: string
  appStore?: string
}

export const projects: Project[] = [
  {
    name: 'Ichi',
    tagline: 'A calm to-do & focus app — one task at a time.',
    status: 'soon',
    icon: '/projects/ichi.webp',
    site: 'https://ichi.quyctd.dev',
  },
  {
    name: 'Ấn Điểm',
    tagline: 'Scorekeeper for Phỏm, Tá Lả, Sâm Lốc, Tiến Lên.',
    status: 'live',
    icon: '/projects/an-diem.webp',
    site: 'https://andiem.quyctd.dev',
    appStore:
      'https://apps.apple.com/vn/app/andiem-score-tracker/id6772962052',
  },
  {
    name: 'Next app',
    tagline: 'Something new is in the works — details soon.',
    status: 'building',
  },
]
```

- [ ] **Step 2: Create `data/experience.ts`**

```ts
export interface Role {
  title: string
  company: string
  period: string
  summary: string
}

export const roles: Role[] = [
  {
    title: 'Frontend Lead',
    company: 'AnyAxis Labs',
    period: 'Apr 2024 — Present',
    summary: 'Leading frontend for Web3 platforms — launchpads, DEX aggregators, DeFi tooling.',
  },
  {
    title: 'Senior Frontend Engineer',
    company: 'LINE Corporation',
    period: 'Aug 2021 — Apr 2024',
    summary: 'Healthcare, AI and Lifestyle apps used by millions.',
  },
  {
    title: 'Software Engineer',
    company: 'PIXTA Vietnam',
    period: 'Jul 2019 — Jun 2021',
    summary: 'Core development on the pixta.jp e-commerce platform.',
  },
  {
    title: 'Software Engineer',
    company: 'VNG Corporation',
    period: 'Oct 2018 — Jul 2019',
    summary: 'Built the most-played mode of a billiards game (Cocos 2D).',
  },
  {
    title: 'Associate Developer',
    company: 'MindX Technology School',
    period: 'Oct 2017 — Sep 2018',
    summary: 'Internal tools; taught programming to 200+ students.',
  },
]
```

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add data/projects.ts data/experience.ts
git commit -m "Add typed project and experience data"
```

---

### Task 3: New icons (LinkedIn, Mail, ArrowUpRight)

**Files:**
- Create: `components/icons/linkedin.tsx`, `components/icons/mail.tsx`, `components/icons/arrow-up-right.tsx`
- Modify: `components/icons/index.tsx` (add three exports)

**Interfaces:**
- Consumes: existing icon file conventions (default-exported FC returning an SVG; see `components/icons/github.tsx`).
- Produces: `Linkedin`, `Mail`, `ArrowUpRight` exported from `@components/icons`. Consumed by Tasks 4, 5, 7.

- [ ] **Step 1: Read `components/icons/github.tsx` and match its props/size conventions** (width/height, `currentColor`). Then create the three icons with the same shape. Reference SVGs (feather-style, stroke-based):

`components/icons/linkedin.tsx`
```tsx
const Linkedin = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A6 6 0 0 1 16 8z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default Linkedin
```

`components/icons/mail.tsx`
```tsx
const Mail = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

export default Mail
```

`components/icons/arrow-up-right.tsx`
```tsx
const ArrowUpRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

export default ArrowUpRight
```

If `github.tsx` uses different width/height or prop patterns, match those instead — consistency with the existing set wins over the code above.

- [ ] **Step 2: Add exports to `components/icons/index.tsx`**

```ts
export { default as Linkedin } from './linkedin'
export { default as Mail } from './mail'
export { default as ArrowUpRight } from './arrow-up-right'
```

- [ ] **Step 3: Typecheck + lint**

Run: `npx tsc --noEmit && pnpm lint`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/icons
git commit -m "Add LinkedIn, Mail, ArrowUpRight icons"
```

---

### Task 4: Home section components

**Files:**
- Create: `components/home/Section.tsx`
- Create: `components/home/Intro.tsx`
- Create: `components/home/AppCard.tsx`
- Create: `components/home/ExperienceList.tsx`

**Interfaces:**
- Consumes: `Project`, `ProjectStatus` from `data/projects.ts`; `Role` from `data/experience.ts`; `Linkedin`, `Mail`, `Github`, `ArrowUpRight` from `@components/icons`; `Link` from `@components/link`.
- Produces: `Section` (props `{ id?: string; title?: string; children: ReactNode }`), `Intro` (no props), `AppCard` (props `{ project: Project }`), `ExperienceList` (props `{ roles: Role[] }`). Consumed by Task 5.

- [ ] **Step 1: Create `components/home/Section.tsx`** — fade-up-on-scroll wrapper with an eyebrow heading.

```tsx
import { FC, ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface Props {
  id?: string
  title?: string
  children: ReactNode
}

const Section: FC<Props> = ({ id, title, children }) => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      id={id}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="mt-20 scroll-mt-28"
    >
      {title && (
        <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  )
}

export default Section
```

- [ ] **Step 2: Create `components/home/Intro.tsx`**

```tsx
import Link from '@components/link'
import { Github, Linkedin, Mail } from '@components/icons'

const socialLinkClasses =
  'inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'

const Intro = () => {
  return (
    <header>
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        Quy Dinh
      </h1>
      <p className="mt-2 text-neutral-500 dark:text-neutral-400">
        Product engineer · Hanoi, Vietnam
      </p>

      <div className="mt-4 flex items-center gap-5">
        <Link external href="https://github.com/quyctd" className={socialLinkClasses}>
          <Github />
          GitHub
        </Link>
        <Link external href="https://www.linkedin.com/in/quyctd/" className={socialLinkClasses}>
          <Linkedin />
          LinkedIn
        </Link>
        <Link href="mailto:quy.dc98@gmail.com" className={socialLinkClasses}>
          <Mail />
          Email
        </Link>
      </div>

      <div className="mt-8 space-y-4 text-[1.0625rem] leading-relaxed text-neutral-700 dark:text-neutral-300">
        <p>
          Two years into building an AI product that&apos;s grown to $500K in
          revenue — working across the stack. On the side, I design and ship my
          own apps.
        </p>
        <p>
          I care deeply about details and user experience, and strongly believe
          in the power of simplicity in both design and engineering.
        </p>
      </div>
    </header>
  )
}

export default Intro
```

- [ ] **Step 3: Create `components/home/AppCard.tsx`**

```tsx
import { FC } from 'react'
import Link from '@components/link'
import { ArrowUpRight } from '@components/icons'
import type { Project, ProjectStatus } from '@data/projects'

const statusStyles: Record<ProjectStatus, { label: string; classes: string }> = {
  live: {
    label: 'App Store',
    classes:
      'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
  },
  soon: {
    label: 'Coming soon',
    classes: 'bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-400',
  },
  building: {
    label: 'In progress',
    classes:
      'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400',
  },
}

const AppCard: FC<{ project: Project }> = ({ project }) => {
  const status = statusStyles[project.status]
  const isPlaceholder = project.status === 'building'

  return (
    <div
      className={
        isPlaceholder
          ? 'flex items-start gap-4 rounded-xl border border-dashed border-neutral-200 p-5 dark:border-neutral-800'
          : 'flex items-start gap-4 rounded-xl border border-neutral-200 p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700'
      }
    >
      {project.icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.icon}
          alt={`${project.name} app icon`}
          width={48}
          height={48}
          className="mt-0.5 h-12 w-12 shrink-0 rounded-[10px]"
        />
      ) : (
        <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-neutral-100 text-lg text-neutral-400 dark:bg-neutral-800 dark:text-neutral-500">
          ?
        </div>
      )}

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
            {project.name}
          </h3>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${status.classes}`}
          >
            {status.label}
          </span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {project.tagline}
        </p>
        {(project.site || project.appStore) && (
          <div className="mt-2.5 flex gap-4 text-sm">
            {project.site && (
              <Link
                external
                href={project.site}
                className="inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Website <ArrowUpRight />
              </Link>
            )}
            {project.appStore && (
              <Link
                external
                href={project.appStore}
                className="inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                App Store <ArrowUpRight />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default AppCard
```

- [ ] **Step 4: Create `components/home/ExperienceList.tsx`**

```tsx
import { FC } from 'react'
import Link from '@components/link'
import type { Role } from '@data/experience'

const ExperienceList: FC<{ roles: Role[] }> = ({ roles }) => {
  return (
    <div>
      <ol className="space-y-6">
        {roles.map((role) => (
          <li key={`${role.company}-${role.period}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="font-medium text-neutral-900 dark:text-neutral-100">
                {role.title}{' '}
                <span className="font-normal text-neutral-500 dark:text-neutral-400">
                  · {role.company}
                </span>
              </p>
              <p className="text-sm tabular-nums text-neutral-400 dark:text-neutral-500">
                {role.period}
              </p>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {role.summary}
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm">
        <Link
          external
          href="/resume.pdf"
          className="text-neutral-500 underline-offset-4 hover:text-neutral-900 hover:underline dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          Full resume →
        </Link>
      </p>
    </div>
  )
}

export default ExperienceList
```

- [ ] **Step 5: Typecheck + lint**

Run: `npx tsc --noEmit && pnpm lint`
Expected: no errors. (If the `@next/next/no-img-element` disable comment is unnecessary because the eslint config lacks that rule, remove the comment.)

- [ ] **Step 6: Commit**

```bash
git add components/home
git commit -m "Add home page section components (Intro, AppCard, ExperienceList, Section)"
```

---

### Task 5: Compose the new home page; add `prose` opt-out to Page

**Files:**
- Modify: `components/page/index.tsx`
- Modify: `pages/index.tsx` (full rewrite)

**Interfaces:**
- Consumes: `Section`, `Intro`, `AppCard`, `ExperienceList` from Task 4; `projects` from `data/projects.ts`; `roles` from `data/experience.ts`.
- Produces: `Page` accepts new optional prop `prose?: boolean` (default `true`).

- [ ] **Step 1: Add `prose` prop to `components/page/index.tsx`** — change the `main` element only:

```tsx
import clsx from 'clsx'
```

Add `prose = true` to Props (`prose?: boolean`) and destructure it, then:

```tsx
<main
  className={clsx(
    'mx-auto my-0 w-full max-w-[45rem] px-4',
    prose && 'prose prose-lg dark:prose-invert'
  )}
>
  {children}
</main>
```

- [ ] **Step 2: Rewrite `pages/index.tsx`**

```tsx
import Page from '@components/page'
import Link from '@components/link'
import Section from '@components/home/Section'
import Intro from '@components/home/Intro'
import AppCard from '@components/home/AppCard'
import ExperienceList from '@components/home/ExperienceList'
import { projects } from '@data/projects'
import { roles } from '@data/experience'

const Home = () => {
  return (
    <Page
      prose={false}
      description="Quy Dinh — product engineer in Hanoi, Vietnam. Building AI products by day, shipping indie iOS apps by night."
    >
      <Intro />

      <Section id="apps" title="Apps">
        <div className="space-y-4">
          {projects.map((project) => (
            <AppCard key={project.name} project={project} />
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <ExperienceList roles={roles} />
      </Section>

      <Section id="writing" title="Writing">
        <p className="text-neutral-600 dark:text-neutral-400">
          I occasionally write about CSS and frontend —{' '}
          <Link
            href="/blog"
            className="text-neutral-900 underline underline-offset-4 dark:text-neutral-100"
          >
            read the blog
          </Link>
          .
        </p>
      </Section>

      <Section id="contact" title="Contact">
        <p className="text-neutral-600 dark:text-neutral-400">
          Always open to interesting conversations and collaboration. Reach me
          at{' '}
          <Link
            href="mailto:quy.dc98@gmail.com"
            className="text-neutral-900 underline underline-offset-4 dark:text-neutral-100"
          >
            quy.dc98@gmail.com
          </Link>{' '}
          or on{' '}
          <Link
            external
            href="https://www.linkedin.com/in/quyctd/"
            className="text-neutral-900 underline underline-offset-4 dark:text-neutral-100"
          >
            LinkedIn
          </Link>
          . If you&apos;re in Hanoi, let&apos;s have coffee.
        </p>
      </Section>
    </Page>
  )
}

export default Home
```

- [ ] **Step 3: Typecheck + lint**

Run: `npx tsc --noEmit && pnpm lint`
Expected: no errors.

- [ ] **Step 4: Visual smoke check**

Run: `pnpm dev` and load http://localhost:3000 — confirm all five sections render, icons show, dark mode toggles (via cmd-k → Themes). Confirm a blog post page still renders with prose styling (e.g. http://localhost:3000/blog). Stop the server.

- [ ] **Step 5: Commit**

```bash
git add components/page/index.tsx pages/index.tsx
git commit -m "Rebuild home page as single-page portfolio"
```

---

### Task 6: `/projects` redirect + cmd-k apps entries

**Files:**
- Delete: `pages/projects.tsx`
- Modify: `next.config.js` (redirects array only)
- Modify: `components/command/HomeItems.tsx`
- Modify: `components/command/Cmdk.tsx` (keymap line for `g p`)

**Interfaces:**
- Consumes: `projects` from `data/projects.ts`.

- [ ] **Step 1: Delete the placeholder projects page**

```bash
git rm pages/projects.tsx
```

- [ ] **Step 2: Add redirect in `next.config.js`** — in the existing `redirects()` array (do NOT touch `rewrites()`):

```js
async redirects() {
  return [
    { source: '/my-wedding', destination: '/wedding', permanent: false },
    { source: '/projects', destination: '/#apps', permanent: false },
  ]
},
```

- [ ] **Step 3: Update cmd-k.** In `components/command/Cmdk.tsx`, change the `'g p'` keymap entry from `router.push('/projects')` to `router.push('/#apps')`. In `components/command/HomeItems.tsx`, replace the "Projects" item in the Collection group with an "Apps" group built from data. Add import at top:

```tsx
import { projects } from '@data/projects'
```

Replace:

```tsx
<CommandItem shortcut="g p" onSelect={() => router.push('/projects')}>
  <Document />
  Projects
</CommandItem>
```

with:

```tsx
<CommandItem shortcut="g p" onSelect={() => router.push('/#apps')}>
  <Document />
  Apps
</CommandItem>
```

Then add a new group after "Collection":

```tsx
<Command.Group heading="Apps" className={groupClasses}>
  {projects
    .filter((p) => p.site)
    .map((p) => (
      <CommandItem
        key={p.name}
        onSelect={() => window.open(p.site, '_blank')}
      >
        <ArrowRight />
        {p.name}
      </CommandItem>
    ))}
</Command.Group>
```

- [ ] **Step 4: Typecheck + lint**

Run: `npx tsc --noEmit && pnpm lint`
Expected: no errors.

- [ ] **Step 5: Verify redirect**

Run: `pnpm dev`, load http://localhost:3000/projects — expect landing on `/#apps` with the Apps section in view. Test cmd-k → Apps entries open the right sites. Stop the server.

- [ ] **Step 6: Commit**

```bash
git add next.config.js components/command pages
git commit -m "Redirect /projects to /#apps, add apps to command menu"
```

---

### Task 7: Header and footer polish

**Files:**
- Modify: `components/header/index.tsx`
- Modify: `components/page/index.tsx` (footer block)

**Interfaces:**
- Consumes: `Github`, `Linkedin`, `Mail` icons from `@components/icons`; `Link` from `@components/link`.

- [ ] **Step 1: Header spacing refresh.** In `components/header/index.tsx`, change the nav classes `my-8 ... lg:my-16` to `my-6 ... lg:my-10` (tighter above-the-fold rhythm; everything else unchanged).

- [ ] **Step 2: Footer refresh.** In `components/page/index.tsx`, replace the footer block with:

```tsx
<footer className="mt-24">
  <div className="mx-auto flex max-w-[45rem] items-center justify-between border-t border-neutral-200 px-4 py-8 dark:border-neutral-800">
    <p className="text-sm text-neutral-400 dark:text-neutral-500">
      © {year} Quy Dinh
    </p>
    <div className="flex items-center gap-4 text-neutral-400 dark:text-neutral-500">
      <Link
        external
        href="https://github.com/quyctd"
        aria-label="GitHub"
        className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
      >
        <Github />
      </Link>
      <Link
        external
        href="https://www.linkedin.com/in/quyctd/"
        aria-label="LinkedIn"
        className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
      >
        <Linkedin />
      </Link>
      <Link
        href="mailto:quy.dc98@gmail.com"
        aria-label="Email"
        className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
      >
        <Mail />
      </Link>
    </div>
  </div>
</footer>
```

Add the needed imports to `components/page/index.tsx`:

```tsx
import Link from '@components/link'
import { Github, Linkedin, Mail } from '@components/icons'
```

Also remove the now-unused `pb-16` if the new footer margin makes it redundant — check visually; keep whichever looks right.

- [ ] **Step 3: Typecheck + lint**

Run: `npx tsc --noEmit && pnpm lint`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/header/index.tsx components/page/index.tsx
git commit -m "Polish header spacing and footer with social links"
```

---

### Task 8: Final verification

**Files:** none (verification only)

- [ ] **Step 1: Production build**

Run: `pnpm build`
Expected: build succeeds, no type or lint errors.

- [ ] **Step 2: Full visual pass**

Run `pnpm dev` and check:
- Home in light AND dark mode (toggle via cmd-k → Themes)
- Home at ~375px width (responsive: cards stack cleanly, experience rows wrap)
- A blog post page (prose styling intact), /blog index
- `/projects` → redirects to `/#apps`
- `/resume.pdf` serves the updated resume (check "SUI Commandoss Hackathon (2025)" appears on page 2)
- All external links: ichi.quyctd.dev, andiem.quyctd.dev, App Store link, GitHub, LinkedIn
- Reduced motion: toggle macOS System Settings → Accessibility → Display → Reduce motion, confirm sections appear without fade-up

- [ ] **Step 3: Fix anything found, commit fixes**

```bash
git add -A && git commit -m "Fix issues found in final visual pass"
```

(Skip if nothing found.)
