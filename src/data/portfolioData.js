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

export const portfolioData = {
  // GitHub Cloud Storage Configuration for galleries
  githubStorageConfig: {
    username: "pcryzen5", // To be updated by the user in their settings
    lifeRepo: "portfolio-my-life",
    failuresRepo: "portfolio-my-failures"
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
    }
  ]
};
