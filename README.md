# traylonharrington.com

My personal portfolio site: who I am, what I've built, and my resume.

**Live:** https://www.traylonharrington.com

## Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS 4** for styling
- **Vercel** for hosting, with automatic deploys on every push to `main`
- **Cloudflare** for DNS and email routing (DNS only; the site is served directly by Vercel)

## Choices

- **Static pages.** Every page is prerendered at build time. A portfolio doesn't need a server or a database, so there's nothing to keep running and very little to attack.
- **Project data lives in one file.** `src/data/projects.ts` holds every project. Adding a project is one new entry, and the `featured` flag decides whether it gets a full card or a line under "Earlier work."
- **Proprietary work is described, not linked.** My strongest project, an account-shadowing widget I built at WP Engine, is company code, so its card explains the problem and what I built without a repo link.
- **A web-specific resume PDF.** The downloadable resume leaves out my phone number, since a public PDF is easy to scrape.

## Accessibility

I aimed for WCAG 2.2 AA and checked every page with Lighthouse and axe in both light and dark mode (Lighthouse accessibility: 100; axe: 0 violations).

- A "Skip to content" link appears on the first Tab press.
- A visible 2px focus ring on every interactive element.
- The nav marks the current page with `aria-current="page"` as well as an underline.
- Icon-only links (LinkedIn, GitHub, email) have accessible names.
- One `h1` per page and no skipped heading levels.
- The layout reflows to phone width without horizontal scrolling.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # production build; Vercel runs the same command
```

## Structure

```
src/
  app/
    layout.tsx           # shared nav, skip link, fonts
    page.tsx             # home
    projects/page.tsx
    resume/page.tsx
  components/NavLink.tsx # nav link that marks the current page
  data/projects.ts       # all project content
public/
  headshot.jpg
  Traylon-Harrington-Resume.pdf
```
