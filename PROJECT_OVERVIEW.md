# Lawyer Portfolio SPA Architecture

This project is a premium, single-page website portfolio for a prominent legal counsel (John Doe). Built on top of **React 19** and **Vite**, it leverages **Tailwind CSS v4**'s fast compilation and theme controls, combined with **Framer Motion** for state-of-the-art animations.

## Folder Directory Structure

```text
portfolio/
├── public/                 # Static public assets (favicon, images, etc.)
├── src/
│   ├── assets/             # SVGs, brand assets, and local media files
│   │   ├── fonts/          # Custom typography (Thestral Neue bold)
│   │   └── images/         # Local high-quality pictures (lawyer, background)
│   ├── components/         # Modular UI components separated by domain
│   │   ├── block/          # Low-level UI blocks & badges (e.g., TrustPill.jsx)
│   │   ├── forms/          # Complex interactive forms (e.g., contactForm.jsx)
│   │   ├── sections/       # Full page section components (e.g., heroBanner.jsx, MissionVission.jsx)
│   │   └── shared/         # Global layout/shared components (Navbar.jsx, Footer.jsx, DotGrid.jsx)
│   ├── data/               # Static dataset configurations and mock JSON data
│   │   └── casesData.js    # Data store for Cases Fought list
│   ├── lib/                # Shared utilities, helper functions, and API clients
│   ├── pages/              # Top-level route views (Home.jsx, About.jsx, Contact.jsx, Journey.jsx)
│   ├── schemas/            # Validation schemas using Zod (e.g., contactSchema.js)
│   ├── App.jsx             # Main application component & router configuration
│   ├── App.css             # Component-level/app styles
│   ├── index.css           # Global CSS resets & Tailwind CSS imports
│   └── main.jsx            # DOM entry point
├── .gitignore
├── eslint.config.js        # ESLint flat config
├── index.html              # Single HTML template
├── package.json            # Dependencies & build scripts
├── postcss.config.js       # PostCSS configuration
├── PROJECT_OVERVIEW.md     # Architecture documentation
└── vite.config.js          # Vite build config
```

## Key Architectural Highlights

1. **React 19 & Router Integration**:
   Uses standard layout structures and route definitions under `src/pages` to handle section view fallbacks or deep-link navigation to case briefs.

2. **Tailwind CSS v4 CSS-First Customizations**:
   Utilizes the `@tailwindcss/vite` compiler. Font mappings (like the custom font `Thestral Neue`) and root styling variables are configured inside `src/index.css` using standard CSS `@theme` and `@font-face` rules.

3. **Motion Graphics and Interactive Sections**:
   - **Horizontal Scroll Shift**: Tracks scroll position over the `about_us` section to shift the lawyer's image cutout (`lawyer.png`) from its relative hero position towards the right, simulating responsive scroll-induced motion.
   - **Hover Image Reveal**: A list of key litigation wins that reveals details and moves an image contextually based on the user's cursor position. High performance is maintained using Framer Motion's `useSpring` and `useMotionValue` tracking.

4. **Forms and Validation**:
   Uses **React Hook Form** paired with **Zod** schema resolutions for a client-side validated inquiry form that simulates message routing and redirects to active messaging platforms (WhatsApp, etc.).
