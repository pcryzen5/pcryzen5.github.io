# ✨ Shubham Purkait — Creative Developer Portfolio

A premium, high-performance Single Page Application (SPA) portfolio built for developer **Shubham Purkait**, specializing in Python backend engineering, data science pipelines, and intelligent AI models.

Crafted with **React 19**, **Vite 6**, **Tailwind CSS v4**, and **Framer Motion 12**, the site features scroll-driven animations, an interactive 3D globe, full-screen particle effects, draggable photo grids, hover project reveals, and client-side form validation.

---

## 🌟 Key Features

- **🌌 Cinematic Hero Banner & Globe**: Dark aesthetic landing screen featuring a dynamic scrambling CRT typewriter title in the custom **Movark** display font, paired with an interactive 3D SVG/Canvas Globe.
- **✨ Full Page Glitter Background**: Integrated `GlitterWrap` for a gorgeous full-page background warp/glitter particle animation.
- **📸 Draggable Grid Galleries**: Double archives ("My Life" and "My Failures") featuring custom infinite draggable photo grid walls that dynamically fetch images from user-configured GitHub repositories (falling back to curated Unsplash collections) and auto-scroll at 0.5x speed.
- **📁 Hover-Reveal Selected Projects**: Integrated `HoverImageReveal` to showcase active work commissions, triggering spring-based cursor tracking of custom images.
- **🔍 Project Details View (`/project/:id`)**: Comprehensive case briefs detailing role, core challenges, and creative solutions.
- **📋 Validated Contact Form**: Integrated with Zod validation schema (`portfolioContactSchema.js`) and client-side form validation for direct channel emailing (via Web3Forms or Formspree integration).
- **🎨 Custom Design System**: Built with modern typography utilizing custom **Movark** typeface, custom Tailwind v4 `@theme` tokens, pure black, and high-contrast styling variables.
- **📱 Fully Responsive Layout**: Built with a mobile-first philosophy, smooth hash-link navigation, and responsive navigation drawers for seamless viewing on all device sizes.

---

## 🛠️ Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Framework & Engine** | [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| **Animations & Motion** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Form Management** | [React Hook Form 7](https://react-hook-form.com/) |
| **Schema Validation** | [Zod 3](https://zod.dev/) + `@hookform/resolvers` |
| **Icons & Media** | [Lucide React](https://lucide.dev/) |

---

## 📁 Project Structure

```text
portfolio/
├── public/                 # Static public assets & resume PDF
├── src/
│   ├── assets/             # Brand assets, custom fonts, and images
│   │   └── fonts/          # Movark custom typography (.otf)
│   ├── components/         # Modular UI components separated by domain
│   │   ├── block/          # Interactive UI blocks
│   │   │   ├── DraggableGrid.jsx      # Infinite draggable, lightbox-enabled photo gallery
│   │   │   ├── GlitterWrap.jsx        # Canvas-based warp/glitter particle background
│   │   │   ├── Globe.jsx              # Interactive 3D SVG/Canvas Globe
│   │   │   └── HoverImageReveal.jsx   # Mouse-following case/project preview box
│   │   ├── forms/          # Form components
│   │   │   └── PortfolioContactForm.jsx # Zod-validated portfolio contact form
│   │   ├── sections/       # Main landing page sections
│   │   │   ├── PortfolioHero.jsx      # Hero banner with Retro Scrambler & 3D Globe
│   │   │   ├── PortfolioAbout.jsx     # Biography and double draggable photo archives
│   │   │   ├── PortfolioProjects.jsx  # Highlighted project cases with HoverImageReveal
│   │   │   └── PortfolioContact.jsx   # Direct communication links and form container
│   │   └── shared/         # Global layout components
│   │       ├── Footer.jsx             # Comprehensive footer navigation
│   │       └── Navbar.jsx             # Sticky navbar with mobile drawer
│   ├── data/               # Structured data stores
│   │   └── portfolioData.js # Config data source for socials, resume, galleries, and projects
│   ├── lib/                # Shared utilities & helper functions
│   ├── pages/              # Top-level route views
│   │   ├── PortfolioHome.jsx # Main landing page (Sections aggregate)
│   │   └── ProjectDetail.jsx # In-depth project case brief view (`/project/:id`)
│   ├── schemas/            # Validation schemas
│   │   └── portfolioContactSchema.js # Zod schema for client message form
│   ├── App.css             # Component overrides & custom CSS
│   ├── App.jsx             # Main router configuration & hash-scroll handler
│   ├── index.css           # Tailwind v4 import, @theme definitions & font faces
│   └── main.jsx            # React root entry point
├── eslint.config.js        # ESLint flat configuration
├── index.html              # HTML5 entry template
├── package.json            # Dependencies and npm scripts
├── postcss.config.js       # PostCSS configuration
├── PROJECT_OVERVIEW.md     # Architectural documentation
├── README.md               # Project documentation
└── vite.config.js          # Vite build plugin setup
```

---


## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system.

```bash
node -v
npm -v
```

### Installation

1. **Navigate to the portfolio directory**:
   ```bash
   cd portfolio
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📜 Available Scripts

In the `portfolio/` project directory, you can run:

- `npm run dev` — Starts the local development server with Vite hot module replacement (HMR).
- `npm run build` — Compiles and optimizes the project for production inside the `dist/` directory.
- `npm run preview` — Locally previews the production build output.
- `npm run lint` — Runs ESLint to check for syntax and code style issues.

---

## 🎨 Theme & Typography Design System

The application uses Tailwind CSS v4's CSS-first theme configuration located in `src/index.css`:

```css
@theme {
  /* Typography */
  --font-display: 'Thestral Neue', 'Playfair Display', serif;
  --font-sans: 'Inter', sans-serif;

  /* Custom Gold Palette */
  --color-gold-400: #caa15e;
  --color-gold-500: #bd8840;
  --color-gold-600: #a26b31;

  /* Dark Theme Neutrals */
  --color-neutral-850: #1a1917;
}
```

Custom CSS utilities are defined for specialized UI effects:
- `.text-glow-gold`: Adds a glowing aura to critical legal titles.
- `.bg-grid-pattern`: Provides fine background line grids for architectural depth.

---

## ⚖️ Key Cases Highlighted

1. **Constitutional Right to Privacy Advocacy** (*Supreme Court of India*) — Landmark defense protecting encrypted communications against surveillance mandates.
2. **Apex Logistics vs. Trade Commission** (*NCLAT*) — Successful appeal against a blocked multi-billion dollar merger, establishing modern digital market definitions.
3. **BioTech Labs Inc. vs. GenLife Pharma** (*Delhi High Court*) — Historic patent protection ruling securing record damages in genetic sequencing IP.
4. **Coastal Fishermen Union vs. Narmada Chemicals** (*National Green Tribunal*) — Pro bono environmental class action enforcing the "Polluter Pays" principle.

---

## 📄 License

This project is licensed under the MIT License.
