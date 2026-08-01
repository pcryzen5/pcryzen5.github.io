# Single-Page Portfolio Website with Movark Font & Interactive Galleries

Implement a high-end, modern, single-page portfolio website using a dark aesthetic (pure black background, white text) with the **Movark** custom typeface. It will include an infinitely draggable grid photo gallery (lightbox-enabled) for personal and professional image archives, a hover-reveal projects showcase, a project details view, and a responsive contact form.

---

## 🎨 Recommended Free Cloud Storage Tools
To host, upload, and dynamically fetch images in your portfolio, we recommend the following free services:
1.  **Cloudinary (Highly Recommended)**:
    *   *Free Tier*: 25 monthly credits (~25 GB storage / bandwidth).
    *   *Why*: Simple media library dashboard, automatic image optimization/resizing via URL parameters, and API integration.
2.  **Supabase Storage**:
    *   *Free Tier*: 1 GB storage, 5 GB bandwidth.
    *   *Why*: Built-in PostgreSQL backend. You can list files directly using a simple database client.
3.  **GitHub Repository (Simplest & Free)**:
    *   *Free Tier*: Unlimited.
    *   *Why*: Zero-setup. Just upload your images to a dedicated folder in your project repository and fetch/load them using their Raw URLs (e.g. `https://raw.githubusercontent.com/[username]/[repo]/[branch]/[path_to_image]`).

*We will build the codebase to read from a local structured config file (`src/data/portfolioData.js`) that references these image URLs. This lets you swap URLs in one central file or wire in a live API easily.*

---

## 📂 Proposed Changes

### 1. Typography & Theme System

#### [MODIFY] [index.css](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/index.css)
*   Register custom **Movark** font face variants (`movark-light.otf`, `movark-regular.otf`, `movark-bold.otf`).
*   Override Tailwind v4 variables inside `@theme` to set `Movark` as both `--font-sans` and `--font-display`.
*   Establish color variables centering on pure black `#000000` and high-contrast white `#ffffff`.

---

### 2. Structured Data

#### [NEW] [portfolioData.js](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/data/portfolioData.js)
*   Define arrays for:
    *   **"My Life" Gallery**: Image configurations (URL, title, category, description).
    *   **"My Work" Gallery**: Image configurations (different source files/links).
    *   **Projects List**: Text, hover reveal cover-image, tags, year, role, challenges, and solutions for detail pages.

---

### 3. Core Components

#### [NEW] [DraggableGrid.jsx](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/components/block/DraggableGrid.jsx)
*   Implements a draggable canvas using Framer Motion (`motion.div` with `drag={true}`).
*   Dynamically calculates dragging boundary offsets (`dragConstraints`) relative to the viewport size.
*   Enables clicking images to trigger a smooth **Lightbox Modal** showing enlarged visuals, captions, and descriptions.

#### [NEW] [PortfolioHero.jsx](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/components/sections/PortfolioHero.jsx)
*   Landing hero screen with large typographic headers in **Movark Bold** and a subtle slide indicator.

#### [NEW] [PortfolioAbout.jsx](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/components/sections/PortfolioAbout.jsx)
*   Renders a short biographical intro.
*   Contains two tabbed or stacked sub-sections ("My Life" and "My Work"), each rendering a customized `DraggableGrid` fetching separate data sets.

#### [NEW] [PortfolioProjects.jsx](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/components/sections/PortfolioProjects.jsx)
*   Integrates the existing `HoverImageReveal` component to showcase active projects.

#### [NEW] [PortfolioContactForm.jsx](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/components/forms/PortfolioContactForm.jsx)
*   Dark-themed React contact form with validation using React Hook Form & Zod.

#### [NEW] [PortfolioContact.jsx](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/components/sections/PortfolioContact.jsx)
*   Wraps the form in a section containing contact details and social media anchors.

---

### 4. Layouts & Pages

#### [NEW] [portfolioContactSchema.js](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/schemas/portfolioContactSchema.js)
*   Zod validation rules for form inputs (name, email, subject, message).

#### [NEW] [PortfolioHome.jsx](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/pages/PortfolioHome.jsx)
*   Combines the sections sequentially: `PortfolioHero` ➡️ `PortfolioAbout` ➡️ `PortfolioProjects` ➡️ `PortfolioContact`.

#### [NEW] [ProjectDetail.jsx](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/pages/ProjectDetail.jsx)
*   Renders detailed layouts for selected projects (full case brief styling, challenges, goals, stack used, and screenshots).

#### [MODIFY] [Navbar.jsx](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/components/shared/Navbar.jsx)
*   Update to point to page anchor points (`#about`, `#projects`, `#contact`) and adapt links.

#### [MODIFY] [Footer.jsx](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/components/shared/Footer.jsx)
*   Update copy, logo, and links for personal portfolio use.

#### [MODIFY] [App.jsx](file:///c:/Users/shubhAM/Downloads/portfolio_final/src/App.jsx)
*   Update routing mapping `/` to `PortfolioHome` and `/project/:id` to `ProjectDetail`.
*   Set pure black background `bg-black` and white text `text-white` defaults globally.

---

## 🧪 Verification Plan

### Manual Verification
1.  **Aesthetics Audit**:
    *   Verify the page background is pure black and body font loads **Movark** correctly.
2.  **Interaction Check**:
    *   Confirm that the `DraggableGrid` canvas can be dragged in all directions, bounces back smoothly at edges, and click actions trigger the modal lightbox.
    *   Verify that `HoverImageReveal` shows preview images on hover and redirects cleanly to the detail page on click.
3.  **Form Validation**:
    *   Submit invalid details to verify that error messages render correctly, and test valid submits to verify successful feedback.
