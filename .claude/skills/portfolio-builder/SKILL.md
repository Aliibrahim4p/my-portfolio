---
name: portfolio-builder
description: Build Ali's personal developer portfolio as a full Next.js + MUI + Tailwind site, ready to deploy on Vercel. Trigger whenever Ali asks for a "portfolio", "portfolio site", "personal site", or asks to showcase his projects/work online — even if he doesn't mention Next.js, MUI, or Tailwind explicitly. Always produces a deployable Next.js project using MUI components plus Tailwind for layout, never a no-code builder or single static HTML file, unless Ali explicitly asks for something else this time.
---

# Portfolio Builder

Builds Ali Ibrahim's developer portfolio: a full Next.js + TypeScript site using MUI for components and Tailwind for layout/utility styling, structured so it can be pushed straight to Vercel.

## Default output

Unless Ali says otherwise for this specific request:

- **Stack**: Next.js (App Router) + TypeScript + MUI (Material UI) for components + Tailwind CSS for layout/spacing/utility styling. Use MUI's `ThemeProvider` for the light-mode palette/typography rather than fighting MUI and Tailwind against each other — Tailwind handles layout (flex/grid, spacing, responsive utilities), MUI supplies the actual components (buttons, cards, nav, forms, icons). No separate backend — this is a static/marketing site, not one of Ali's app projects.
- **Style**: Clean, minimal, light mode. Generous whitespace, restrained color palette (1 accent color max), readable type scale. Avoid generic AI-template look — see `/mnt/skills/public/frontend-design/SKILL.md` for design token guidance and load it before writing any UI.
- **Deploy target**: Vercel. Keep the project deployable with zero config changes (no custom server, no non-Vercel-friendly build steps).

## Sections to always include

1. **Hero** — name (Ali Ibrahim), title (Software Developer — backend/full-stack, Next.js), short one-line pitch, links to GitHub (github.com/Aliibrahim4p) and LinkedIn (linkedin.com/in/ali-ibrahim-b46a3a267).
2. **Projects** — lead with the **Coffee Shop Management System**: full-stack Next.js POS + inventory system, Prisma/PostgreSQL, offline-first PWA (IndexedDB sync), RBAC/auth, recipe-based inventory tracking. Describe it as a real, near-complete project, not a toy demo. Additional projects can be added below it if Ali provides them for this request, but the coffee shop project is the anchor piece and should never be omitted or demoted.
3. **Skills** — TypeScript, Node.js, Next.js, Prisma, PostgreSQL, plus whatever else Ali lists in the request. Group by category (e.g. Frontend / Backend / Database & Tools) rather than one flat tag cloud.
4. **Contact** — simple contact section/form (mailto link or a static form is fine — no backend email service unless Ali asks for one), plus repeated GitHub/LinkedIn links.

Do not add extra sections (blog, testimonials, resume download, etc.) unless Ali asks for them in the request.

## Build workflow

1. Confirm you have `/mnt/skills/public/frontend-design/SKILL.md` loaded for styling conventions before writing components.
2. Scaffold a Next.js + Tailwind project structure under a working directory (e.g. `/home/claude/portfolio/`), then add MUI (`@mui/material`, `@emotion/react`, `@emotion/styled`, `@mui/icons-material`) and set up a light-mode `ThemeProvider` with a restrained accent color, matching the frontend-design guidance.
3. Build section by section: Hero → Projects → Skills → Contact → layout/nav wrapper. Keep each section a separate component file.
4. Use the coffee shop project details above verbatim for content — don't invent unstated details about it (e.g. don't fabricate a live URL or screenshot; use a placeholder or the GitHub repo link instead).
5. When finished, copy the full project to `/mnt/user-data/outputs/` and use `present_files` so Ali can download it.
6. In your reply, tell Ali it's ready to deploy: `npm install` then `vercel deploy` (or connect the GitHub repo to Vercel), and note any placeholders he still needs to fill in (e.g. profile photo, additional project details, real contact email).

## Notes

- Ali is a backend/full-stack developer himself — don't over-explain basic Next.js/Tailwind concepts unless he asks.
- If Ali provides new project details in a request (e.g. wants the hotel SaaS project added, or a new personal project), incorporate them under Projects alongside the coffee shop project, not instead of it.

## Projects section

1. the projects should be slider as card if Ali has more than 3 projects, otherwise just show them as cards in a grid.
2. each project card should have a title, description, tech stack, and a link to the GitHub repo or live demo if available.
3. if Ali has more than 2 projects, the slider should have navigation arrows and dots to indicate the number of slides.
4. the slider should be responsive and work well on mobile devices.
5. the slider should have a smooth transition effect when sliding between projects.
6. the slider should be accessible, with proper ARIA attributes and keyboard navigation support.
7. the slider should be implemented using a popular React slider library (e.g. Swiper, React Slick) or a custom implementation if Ali prefers.
8. the slider should be styled to match the overall design of the portfolio, with consistent colors, fonts, and spacing.
9. the projects should have goals and achievements listed, highlighting the impact of each project and any notable results or metrics.
10. if 2 or more images are provided for a project, they should be displayed in a carousel within the project card, with navigation arrows and dots to indicate the number of images. The carousel should be responsive and work well on mobile devices, with smooth transition effects and proper ARIA attributes for accessibility.
11. the images should be optimized for web performance, with appropriate sizes and formats (e.g. WebP, JPEG) and lazy loading implemented to improve page load times.
12. the images should be styled to match the overall design of the portfolio, with consistent colors, fonts, and spacing.
13. the images shold have alt text provided for accessibility and SEO purposes, describing the content of the image and its relevance to the project.
14. the images should be displayed in a lightbox or modal when clicked, allowing users to view them in a larger format without leaving the project card or page.
15. the images should dont take up too much space on the project card, and should be displayed in a way that does not distract from the project description or other content.
16. the images should be displayed in a way that is visually appealing and enhances the overall design of the portfolio, with consistent spacing and alignment with other elements on the page.
