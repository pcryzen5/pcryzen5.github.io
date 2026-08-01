# Developer Portfolio SPA Architecture

This project is a premium, single-page website portfolio for a creative developer (**Shubham Purkait**). Built on top of **React 19** and **Vite 6**, it leverages **Tailwind CSS v4**'s fast compilation and theme controls, combined with **Framer Motion 12** for state-of-the-art animations.

## Folder Directory Structure

```text
portfolio/
├── public/                 # Static public assets (favicon, resume PDF, etc.)
├── src/
│   ├── assets/             # Brand assets, custom fonts, and local media files
│   │   ├── fonts/          # Custom typography (Movark regular, light, bold)
│   │   └── images/         # Local high-quality pictures/placeholders
│   ├── components/         # Modular UI components separated by domain
│   │   ├── block/          # Low-level UI blocks (DraggableGrid, GlitterWrap, Globe, HoverImageReveal)
│   │   ├── forms/          # Form components (PortfolioContactForm.jsx)
│   │   ├── sections/       # Full page section components (PortfolioHero, PortfolioAbout, PortfolioProjects, PortfolioContact)
│   │   └── shared/         # Global layout/shared components (Navbar.jsx, Footer.jsx)
│   ├── data/               # Static dataset configurations and custom profiles
│   │   └── portfolioData.js # Main data store (socials, resume, galleries, and projects)
│   ├── lib/                # Shared utilities, helper functions, and API clients
│   ├── pages/              # Top-level route views (PortfolioHome.jsx, ProjectDetail.jsx)
│   ├── schemas/            # Validation schemas using Zod (portfolioContactSchema.js)
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
   Uses standard layout structures and route definitions under `src/pages` to handle section view fallbacks or deep-link navigation to case briefs via React Router.

2. **Tailwind CSS v4 CSS-First Customizations**:
   Utilizes the `@tailwindcss/vite` compiler. Font mappings (like the custom font `Movark`) and root styling variables are configured inside `src/index.css` using standard CSS `@theme` and `@font-face` rules.

3. **Motion Graphics and Interactive Sections**:
   - **Glitter Background**: Integrates a custom WebGL/Canvas-based particle system (`GlitterWrap`) to overlay ambient space-like movements over the dark screen.
   - **Interactive 3D Globe**: Rendered dynamically using custom Canvas/SVG paths, centered on the user's region with options to spin and drag manually.
   - **Draggable Grid Walls**: Double archival grids that load images dynamically via GitHub Content API fetches, with speed controls for smooth inertia deceleration and release auto-scrolls.
   - **Hover Image Reveal**: A list of selected work projects that reveals cover previews and moves an image contextually based on the user's cursor position.

4. **Forms and Validation**:
   Uses **React Hook Form** paired with **Zod** schema resolutions for a client-side validated inquiry form that routes emails via Web3Forms or Formspree APIs.
