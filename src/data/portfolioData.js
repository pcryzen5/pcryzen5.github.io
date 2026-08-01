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

  // Personal snapshots - just URLs as requested
  lifeGallery: [
    {
      id: "life-1",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "life-2",
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "life-3",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "life-4",
      url: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "life-5",
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "life-6",
      url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "life-7",
      url: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "life-8",
      url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "life-9",
      url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Failures and conceptual experimental snapshots - just URLs as requested
  failuresGallery: [
    {
      id: "fail-1",
      url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fail-2",
      url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fail-3",
      url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fail-4",
      url: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fail-5",
      url: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fail-6",
      url: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fail-7",
      url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fail-8",
      url: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=800&q=80"
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
      summary: "This is a fully-featured, desktop chess game application built with Python and Pygame. It implements standard chess rules and features both Two-Player (local human vs. human) and Player vs. Computer (AI) modes, including three difficulty levels.",
      description: "Chess Game is a desktop application built in Python using the Pygame library, showcasing a fully decoupled Model-View-Controller (MVC) architecture. The game features local two-player matches, customizable timers, visual board themes, procedural sound generation, and a game history navigator. It also incorporates an AI player powered by a depth-3 Minimax search algorithm with Alpha-Beta pruning and positional evaluations via Piece-Square Tables (PST).           Sorry but couldn't make it live",
      challenges: [
        "Decoupling game state validation rules from the visual rendering framework to allow headless execution and robust unit testing.",
        "Optimizing the AI's search time for complex board positions using Minimax search without causing noticeable lag in the GUI.",
        "Integrating sound effects into the game without increasing the bundle size or requiring external audio file assets."
      ],
      solutions: [
        "Restructured the codebase into a clean MVC design, isolating all board models, move verification, and AI logic into a standalone, library-independent engine.py module.",
        "Implemented Alpha-Beta pruning to discard sub-optimal branches early in the search tree, achieving a depth of 3 within milliseconds, and utilizing Piece-Square Tables for heuristic evaluations.",
        "Designed an in-memory sound generator using Python's standard wave and struct libraries to procedurally synthesize WAV audio signals for moves, captures, and checks at runtime."
      ],
      stack: ["Python", "Pygame", "Minimax AI", "Alpha-Beta Pruning", "Procedural Audio Synthesis", "Unit Testing (pytest)"],
      github: "https://github.com/pcryzen5/Chess_Game.git",
      live: ""
    }
  ]
};
