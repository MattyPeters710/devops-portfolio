# Testing the DevOps Portfolio

## Overview
This is a Next.js single-page portfolio app with Tailwind CSS, Framer Motion animations, and a Three.js 3D background.

## Running Locally

```bash
cd /home/ubuntu/repos/devops-portfolio
npm install
npm run dev
# App runs at http://localhost:3000
```

## Build & Lint

```bash
npm run build   # Next.js production build + TypeScript check
npm run lint    # ESLint
```

## Key Testing Areas

1. **Hero Section** (top of page): Gradient heading, subtitle, 4 CTA buttons (GitHub, LinkedIn, Email, Resume)
2. **Sidebar** (left): Lucide icons, expands on hover (desktop) or via hamburger menu (mobile). Clicking nav items triggers smooth scroll.
3. **About Section**: Multi-paragraph bio in a glassmorphic card
4. **Projects Section**: 2-column grid of project cards with titles, descriptions, tech tags, and external link icons
5. **Skills Section**: 3-column categorized grid (Cloud, IaC, Containers & Orchestration, CI/CD, OS & Scripting, Monitoring)
6. **Contact Section**: Clickable email and GitHub buttons
7. **Footer**: Copyright with dynamic year
8. **Scroll Animations**: Sections fade in on scroll via Framer Motion `useInView`

## Important Notes

- **Vercel preview deployments may have deployment protection** that requires Vercel login. If the Vercel preview URL redirects to a login page, test locally with `npm run dev` instead.
- The 3D background uses `@react-three/fiber` and `@react-three/drei` — it renders floating icosahedron shapes. This is loaded dynamically with `ssr: false`.
- The sidebar expand-on-hover behavior uses Tailwind's `group-hover` and `md:hover:w-64` — this works best when the mouse enters the full sidebar area.
- Smooth scroll is handled via CSS `scroll-behavior: smooth` in `globals.css`.

## Devin Secrets Needed

None — this is a static portfolio site with no authentication.
