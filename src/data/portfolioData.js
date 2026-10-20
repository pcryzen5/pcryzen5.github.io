/**
 * PORTFOLIO DATA & HOSTING GUIDE
 * 
 * HOW TO HOST & FETCH IMAGES FROM GITHUB:
 * ---------------------------------------------------------------------------
 * To host your personal assets (for "My Life" and "My Failures" galleries) on GitHub:
 * 
 * 1. Create a public GitHub repository (e.g. `portfolio-assets`).
 * 2. Upload your images into this repository (e.g., `life/pic1.jpg`, `failures/fail1.jpg`).
 * 3. Construct the Raw Content URL for each image using this pattern:
 *    `https://raw.githubusercontent.com/<Your-GitHub-Username>/<Repo-Name>/<Branch-Name>/<Path-To-File>`
 * 
 * Example URL:
 *    `https://raw.githubusercontent.com/john-doe/portfolio-assets/main/life/pic1.jpg`
 * 
 * 4. Simply replace the `url` fields below in this file with your GitHub Raw URLs.
 *    The application will load them directly into the draggable galleries!
 * ---------------------------------------------------------------------------
 */

import { id } from "zod/v4/locales";

export const portfolioData = {
  // GitHub Cloud Storage Configuration for galleries
  githubStorageConfig: {
    username: "pcryzen5", // To be updated by the user in their settings
    lifeRepo: "portfolio-my-life",
    failuresRepo: "portfolio-my-failures",
    hotwheelsRepo: "Hotwheels_collection"
  },

  // Contact Form configuration (Web3Forms or Formspree)
  contactConfig: {
    email: "purkaitshubham5@gmail.com",
    service: "web3forms", // Options: "web3forms" or "formspree"
    web3FormsAccessKey: "c47f0d29-2a61-4da7-9ca7-f858fa681d37", // Get a free key at https://web3forms.com
    formspreeFormId: "" // Enter Formspree Form ID if using Formspree (e.g., mqkvzprz)
  },

  // Resume URL (can be a local path in /public or an external link)
  resumeUrl: "/shubham_resume.pdf",

  // Social Profile URLs
  socials: {
    github: "https://github.com/pcryzen5",
    linkedin: "https://www.linkedin.com/in/shubham-purkait/",
    twitter: "https://x.com/purkaitshubham5",
    instagram: "https://www.instagram.com/shubhampurkait/", // Update with your actual Instagram URL
    codolio: "https://codolio.com/profile/Shubham56" // Update with your actual Codolio URL
  },

  // Personal snapshots - preloaded with user's GitHub images for instant rendering
  lifeGallery: [
    {
      id: "life-1",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-life/main/1785420389483.png"
    },
    {
      id: "life-2",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-life/main/1785420419435.png"
    },
    {
      id: "life-3",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-life/main/1785727768532.png"
    },
    {
      id: "life-4",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-life/main/1787196645126.png"
    },
    {
      id: "life-5",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-life/main/4df2185b077292f348d8ed1dfe2d1e66.jpg"
    },
    {
      id: "life-6",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-life/main/IMG_20260301_171437129_HDR.jpg"
    },
    {
      id: "life-7",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-life/main/IMG_20260403_203127404_HDR.jpg"
    },
    {
      id: "life-8",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-life/main/IMG_20260417_190521387.jpg"
    },
    {
      id: "life-9",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-life/main/IMG_20260714_075934107_HDR.jpg"
    },
    {
      id: "life-10",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-life/main/IMG_20260728_080306528_HDR.jpg"
    },
    {
      id: "life-11",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-life/main/IMG_20260803_082133088.jpg"
    },
    {
      id: "life-12",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-life/main/IMG_20260806_082846482.jpg"
    },
    {
      id: "life-13",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-life/main/IMG_20260811_080632107_HDR.jpg"
    },
    {
      id: "life-14",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-life/main/WhatsApp%20Image%202026-07-30%20at%207.37.50%20PM%20(1).jpeg"
    },
    {
      id: "life-15",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-life/main/WhatsApp%20Image%202026-07-30%20at%207.37.50%20PM%20(2).jpeg"
    },
    {
      id: "life-16",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-life/main/WhatsApp%20Image%202026-07-30%20at%207.37.50%20PM.jpeg"
    }
  ],

  // Failures and conceptual experimental snapshots - preloaded with user's GitHub images
  failuresGallery: [
    {
      id: "fail-1",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-failures/main/IMG_20260815_115235825_HDR.jpg"
    },
    {
      id: "fail-2",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-failures/main/Screenshot%20(175).png"
    },
    {
      id: "fail-3",
      url: "https://raw.githubusercontent.com/pcryzen5/portfolio-my-failures/main/Screenshot%20(723).png"
    }
  ],

  // Hot Wheels Collection - dynamically fetched from GitHub repo `Hotwheels_collection`
  // Initially empty; when repo is empty or awaiting assets, displays:
  // { "message": "soming soon", "status": "loading" }
  hotwheelsGallery: [],

  // Selected work projects
  projects: [
    {
      id: "ChessGame",
      title: "Chess Game",
      category: "Python",
      year: "2026",
      client: "Self",
      role: "Developer",
      image: "https://thumbs.dreamstime.com/b/chess-game-setup-wooden-chessboard-image-shows-pieces-set-up-starting-position-divided-two-sets-white-383919558.jpg",
      summary: "A feature-rich desktop chess application built with Python and Pygame, featuring a decoupled MVC architecture, procedural WAV audio generation, customizable board themes, game timers, and a depth-3 Minimax AI.",
      description: "Chess Game is a polished desktop application featuring a fully decoupled Model-View-Controller (MVC) architecture, separating the core chess engine from the Pygame GUI. The application includes robust implementations of standard chess rules (including castling, en passant, pawn promotion, and draw rules), customizable Blitz/Rapid timers, multiple board themes, and an interactive move history navigator. The game features an AI player powered by a depth-3 Minimax search algorithm with Alpha-Beta pruning and Piece-Square Table (PST) positional evaluation. Additionally, it implements a custom in-memory synthesizer to procedurally generate all sound effects at runtime without external audio files.",
      challenges: [
        "Architectural separation: Decoupling complex chess validation state (castling, en passant, draw conditions) from the Pygame rendering loop to support headless testing and future WebAssembly porting.",
        "Real-time AI performance: Minimizing search latency of a depth-3 Minimax algorithm during complex middlegame phases to prevent frame drops in the Pygame GUI thread.",
        "Asset-free audio integration: Providing realistic gameplay sound feedback (moves, captures, checks) without relying on bulky external WAV/MP3 files or asset-loading dependencies."
      ],
      solutions: [
        "Re-architected the system into a clean MVC design, moving all rules validation, AI, and game state mechanics into a pure Python library-independent engine.py module, enabling 100% test coverage using pytest.",
        "Optimized search efficiency by implementing Alpha-Beta pruning and move ordering heuristics to discard sub-optimal branches early, achieving a depth-3 minimax search within milliseconds, supported by Piece-Square Tables (PST) for positional evaluation.",
        "Created a procedural audio synthesizer that generates raw PCM data using Python's wave and struct libraries, writing WAV signals to memory buffers on startup to play sound effects dynamically without loading disk assets."
      ],
      stack: ["Python", "Pygame", "Minimax AI", "Alpha-Beta Pruning", "Procedural Audio Synthesis", "Unit Testing (pytest)"],
      github: "https://github.com/pcryzen5/Chess_Game.git",
      live: ""
    },

    {
      id: "online_blog",
      title: "Chronicle daily thoughts and logs",

      category: "Full Stack Web Application",

      year: "2026",

      client: "Personal / Open Source",

      role: "Full Stack Developer & UI/UX Designer",

      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gvsillPYBV-R-CAAeNnIzF9llSetyQnOh9_PfEzeMg&s=10",

      summary: "A high-performance, distraction-free daily blogging platform with an in-browser WYSIWYG studio, Google Docs paste sanitization, reader engagements, and Supabase cloud synchronization.",

      description: "Chronicle is an editorial daily publishing platform designed to eliminate friction between idea capture and publishing. It features a custom in-website writing studio with live reading-time metrics, auto-draft saving, and an intelligent clipboard cleaner that strips proprietary HTML from Google Docs and MS Word into clean semantic markup. Readers benefit from an immersive editorial design system with dark/light themes, real-time scroll progress indicators, likes, and comment threads. The platform integrates a dual-layer storage model pairing local cache with a Supabase PostgreSQL backend via custom lightweight REST queries, secured by SHA-256 Web Crypto authentication and brute-force rate-limiting.",

      challenges: [
        "Sanitizing chaotic clipboard data when copying drafts from Google Docs or Word, which introduced unwanted inline spans, messy styles, and broken layout formatting.",
        "Implementing author-only publication privileges and protecting administrative routes without introducing heavy identity provider SDKs or exposing plaintext credentials in client-side code.",
        "Designing a cloud-synchronized persistence layer that loads instantly offline while remaining reliably synchronized with a remote relational database.",
        "Achieving an editorial-grade typographic reading experience with sub-second page loads and seamless dark/light theme switching."
      ],

      solutions: [
        "Engineered a custom contenteditable WYSIWYG engine with a DOM-intercepting clipboard parser that automatically strips proprietary attributes, cleans tags, and normalizes headings, lists, blockquotes, and callouts into clean semantic HTML.",
        "Utilized the native browser Web Crypto API to hash author passcodes into SHA-256 digests in memory, accompanied by a 5-attempt brute-force lockout mechanism and custom hash-based route guards.",
        "Built a dual-layer storage synchronization engine that uses optimistic LocalStorage for instant UI updates and background REST synchronization with Supabase PostgreSQL and Row-Level Security (RLS) policies.",
        "Developed a zero-dependency Vanilla CSS design system powered by CSS variables, featuring Newsreader editorial serif typography, glassmorphism app bars, scroll-driven reading progress, and celebratory Canvas Confetti on publish."
      ],

      stack: [
        "HTML5",
        "JavaScript (ES6+)",
        "Vite",
        "Supabase",
        "PostgreSQL",
        "Web Crypto API (SHA-256)",
        "HTML5 / Semantic WYSIWYG",
        "Vanilla CSS3 (Design Tokens)",
        "Canvas Confetti"
      ],

      github: "https://github.com/pcryzen5/online_blog.git",
      live: ""
    },

    {
      id: "coldreach_studio",

      title: "ColdReach Studio",

      category: "Web Application / Productivity Tool",

      year: "2026",

      client: "Personal / Open Source",

      role: "Frontend Developer & UI/UX Designer",

      image: "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/12/Copy-of-Blog-Header-55-3.png", // Replace with your screenshot path

      summary: "A modern, responsive multi-channel outreach workstation that generates high-converting cold messages, connection notes, and emails across WhatsApp, LinkedIn, and Email with dynamic token auto-detection, direct live-preview editing, copy safeguards, and offline draft persistence.",

      description: "ColdReach Studio is an intelligent, privacy-first cold outreach workstation engineered to help developers, tech professionals, and freelancers land opportunities with tailored outreach across WhatsApp, LinkedIn, and Email. The application features 16+ curated communication strategies (including job inquiries, recruiter networking, application follow-ups, and freelance pitches) organized across 6 functional categories. Powered by a custom dynamic parsing engine, the app automatically detects template tokens (supporting both {{camelCase}} and [Bracket Notation]) and generates form inputs with zero configuration. It includes channel-specific constraints (such as dedicated copyable email subject lines and live character counts), a dual-mode preview supporting direct inline text tweaks with a one-click revert fallback, active missing-field copy safeguards, and an offline-first persistence layer caching user profile details and custom templates in LocalStorage.",

      challenges: [
        "Building an adaptive template engine capable of parsing heterogeneous placeholder syntaxes ({{camelCase}}, {{snake_case}}, and [Bracket Notation]) and automatically generating reactive form inputs without hardcoded field definitions or UI crashes.",
        "Eliminating the risk of sending unfinished outreach by preventing users from accidentally copying unpopulated placeholder tokens into their clipboard.",
        "Designing a dual-mode message editor allowing seamless switching between automated variable-driven templating and direct inline text modification without permanently losing the underlying template structure.",
        "Managing channel-specific constraints and layouts (strict 300-character LinkedIn limits, informal WhatsApp formatting, and multi-field emails with subject lines) within a unified state architecture.",
        "Delivering zero-backend draft persistence and in-app custom template management across page reloads without external databases or authentication overhead."
      ],

      solutions: [
        "Engineered a resilient regex auto-detection parser (templateParser.js) that extracts arbitrary placeholders on the fly, strips token wrapping, derives human-readable labels, and generates schema-driven form inputs with zero configuration.",
        "Implemented live placeholder validation with visual warning tags and copy safeguards that alert users before copying messages containing unfilled fields.",
        "Architected dual-mode preview rendering (MessagePreview.jsx) featuring synchronized state overrides, real-time token highlighting, and an instant 'Reset to Generated' fallback handler.",
        "Built tailored channel widgets including a dedicated EmailSubjectBar with independent one-click copy, dynamic character/word counters, platform color theming, and a mobile bottom dock switcher.",
        "Implemented an offline-first storage architecture (storage.js) leveraging LocalStorage with error fallbacks to persist user profiles, active drafts, and newly created custom templates via an in-app creation modal."
      ],

      stack: [
        "React 18",
        "Vite",
        "JavaScript (ES6+)",
        "Vanilla CSS3 (Design Tokens & Glassmorphism)",
        "HTML5 Web APIs",
        "LocalStorage API",
        "Async Clipboard API",
        "GitHub Actions (CI/CD)"
      ],

      github: "https://github.com/pcryzen5/Cold_E-mail_Template.git",
      live: "https://pcryzen5.github.io/Cold_E-mail_Template/"
    },


    {
      id: "rocky-pet",

      title: "Rocky — Ambient Desktop Pet & Media Companion",

      category: "Desktop Application / System Software",

      year: "2026",

      client: "Personal / Open Source",

      role: "Lead Software Engineer & Creative Developer",

      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLaRZGfzHvgR4EvvZGVDXdTLl4FmTV7EsbN4me38gWK0Q81Ml8FvILJR8&s=10",

      summary: "An ambient, borderless desktop companion built in Python that lives atop your workspace, featuring real-time Windows media detection to dance to music, watch movies with popcorn, and interact through lore-rich animations.",

      description: "Inspired by the beloved Eridian engineer from Andy Weir's 'Project Hail Mary', Rocky is an autonomous, borderless floating desktop companion designed for Windows. Rocky floats seamlessly over IDEs, browsers, and desktop windows with full mouse interaction (dragging, double-click fistbumps, and right-click command systems). The companion features deep operating system awareness via the Windows Win32 API, actively detecting what media is playing: playing songs in Spotify or YouTube Music triggers Rocky into an animated dance party with floating musical note particles, while watching films on Netflix, Prime Video, or YouTube prompts him to grab a bowl of popcorn in Movie Mode. Rocky also includes an autonomous screen-roaming system, sleep cycles, and an automated computer-vision pipeline that cleans, scales, and caches sprite frames on the fly.",

      challenges: [
        "Rendering borderless, click-through-safe desktop window transparency across multi-monitor setups without flickering, black borders, or heavy GUI engine overhead.",
        "Real-time media playback detection across varied browsers (Chrome, Edge, Firefox, Brave) and native players (Spotify, VLC) without polling-induced CPU throttling.",
        "Eliminating subtle halo artifacts and edge fringing on AI-generated multi-frame sprites while dynamically supersampling them across various monitor DPIs.",
        "Managing a multi-state animation lifecycle (10+ distinct states like dragging, fistbumping, sleeping, roaming) with graceful interruptions and particle systems."
      ],

      solutions: [
        "Utilized Tkinter layered canvas architecture with '-transparentcolor' chroma masking and 'overrideredirect' window overrides, coupled with global cursor event tracking for fluid multi-monitor dragging.",
        "Engineered a lightweight daemonized background scanner using pywin32 (win32gui.EnumWindows) with regex keyword classification and debounced polling intervals (1.8s) maintaining sub-0.5% CPU utilization.",
        "Built an automated sprite preprocessing engine in SpriteManager leveraging OpenCV (cv2.floodFill border seed masking) and NumPy to isolate outer borders and eliminate background fringing before Lanczos supersampling.",
        "Architected an event-driven finite state machine (FSM) orchestrating autonomous roaming physics, procedural idle bobbing, custom floating speech bubbles with Eridian chords, and lore-accurate stat decay (Astrophage fuel & Xenonite shell integrity)."
      ],

      stack: [
        "Python 3",
        "Tkinter",
        "pywin32 (Win32 API)",
        "OpenCV (cv2)",
        "NumPy",
        "Pillow (PIL)",
        "Multithreading",
        "Finite State Machine (FSM)"
      ],

      github: "https://github.com/pcryzen5/rocky_virtual_pet.git",
      live: ""
    }


  ]
};
