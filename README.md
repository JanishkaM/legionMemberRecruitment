# Legion Member Recruitment Portal

Recruitment and showcase site for the Legion Society of the University of Kelaniya. The app delivers a cinematic landing page, a dashboard with mission/vision highlights and archived projects, and a registration form that submits directly to a Google Form.

## Features
- Neon landing screen with progress indicator and "INITIALIZE" CTA that routes to the dashboard.
- Dashboard with mission and vision sections, quick stats, and a classified project archive with image cards and modal detail views.
- Registration form that writes to Google Forms via a hidden iframe, with client-side validation for required choices and guardrails for "Other" inputs.
- UX flourishes: hex-pattern background, scanline overlay, hover states, and responsive layout tuned for desktop and mobile.

## Tech Stack
- Next.js 16 (App Router) on React 19 and TypeScript.
- Tailwind CSS 4 for styling plus custom CSS in `app/globals.css`.
- Icons from `lucide-react`.

## Getting Started
1) Install dependencies (Node 18+ recommended for Next 16):

```bash
npm install
```

2) Run the dev server:

```bash
npm run dev
```

Visit `http://localhost:3000`.

3) Production build and start:

```bash
npm run build
npm start
```

4) Lint:

```bash
npm run lint
```

## Key Paths
- Landing: `app/page.tsx`
- Dashboard: `app/dashboard/page.tsx`
- Registration form: `app/registration/page.tsx`
- Shared header: `app/components/Header.tsx`
- Global styles/theme tokens: `app/globals.css`
- Project assets: `public/projects/`

## Registration Form Configuration
- The form posts to Google Forms at `https://docs.google.com/forms/d/e/1FAIpQLSddi6wjmBR90h4dLS-2bWuyRS9wKK14zoOR1cbHO28Q4EjW1g/formResponse` using a hidden iframe to avoid CORS issues.
- Field-to-entry mappings live in `app/registration/page.tsx` (see the `appendField` calls). Update the entry IDs if the Google Form changes.
- Validation: at least one digital platform is required, "Other" selections require text detail, and department/gaming platform toggles enforce their companion inputs.

## Updating the Project Archive
- Projects are defined in the `projects` array inside `app/dashboard/page.tsx` with `name`, `image`, `description`, `status`, `classification`, `team`, `year`, and `objectives`.
- Add or replace images under `public/projects/` and reference them via the `image` path on each project entry.

## Styling Notes
- Core palette and effects (hex grid, scanline, corner accents, glow text) are defined in `app/globals.css`. Tailwind utilities are available across `app/**` and component files.

## Deployment
- Build with `npm run build` and serve with `npm start`. No runtime environment variables are required for the current setup.
