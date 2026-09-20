# Graph Report - portfolio_final  (2026-09-20)

## Corpus Check
- 39 files · ~114,107 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: .otf 3, .css 2, (none) 1)

## Summary
- 140 nodes · 228 edges · 16 communities (9 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 9,492 input · 2,982 output

## Community Hubs (Navigation)
- React Application Core
- Project Metadata and Linting
- Animated UI Components
- Portfolio Forms and Data
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 12
- Community 14
- Community 15

## God Nodes (most connected - your core abstractions)
1. `Globe()` - 13 edges
2. `react` - 12 edges
3. `framer-motion` - 10 edges
4. `mapLinear()` - 9 edges
5. `lucide-react` - 8 edges
6. `portfolioData` - 8 edges
7. `scripts` - 5 edges
8. `react-router-dom` - 5 edges
9. `zod` - 3 edges
10. `DraggableGrid()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `GridImageItem()` --calls--> `getOptimizedImageUrl()`  [EXTRACTED]
  src/components/block/DraggableGrid.jsx → src/lib/imageUtils.js
- `DraggableGrid()` --calls--> `getLightboxImageUrl()`  [EXTRACTED]
  src/components/block/DraggableGrid.jsx → src/lib/imageUtils.js

## Import Cycles
- None detected.

## Communities (16 total, 7 thin omitted)

### Community 0 - "React Application Core"
Cohesion: 0.14
Nodes (14): react, react-dom, react-router-dom, App(), ProjectDetail, COMPONENT_DEFAULTS, GlitterWrap(), parseColor() (+6 more)

### Community 1 - "Project Metadata and Linting"
Cohesion: 0.12
Nodes (18): name, private, type, version, d3-geo, eslint, @eslint/js, eslint-plugin-react (+10 more)

### Community 2 - "Animated UI Components"
Cohesion: 0.13
Nodes (12): framer-motion, alignToFlex, alignToText, DEFAULT_FONT, DEFAULT_ITEMS, DEFAULT_ITEMS_DATA, DEFAULT_TRANSITION, HoverImageReveal() (+4 more)

### Community 3 - "Portfolio Forms and Data"
Cohesion: 0.18
Nodes (10): @hookform/resolvers, lucide-react, react-hook-form, zod, PortfolioContactForm(), PortfolioAbout(), PortfolioContact(), portfolioData (+2 more)

### Community 4 - "Community 4"
Cohesion: 0.31
Nodes (14): cachedDotCoordsMap, Globe(), latLngToPosition(), mapDensityUiToSpacing(), mapDetailToStepSize(), mapDotSizeUiToMultiplier(), mapDragSpeedUiToSensitivity(), mapLinear() (+6 more)

### Community 5 - "Community 5"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, @eslint/js, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, tailwindcss (+5 more)

### Community 6 - "Community 6"
Cohesion: 0.18
Nodes (11): dependencies, d3-geo, framer-motion, @hookform/resolvers, lucide-react, react, react-dom, react-hook-form (+3 more)

### Community 7 - "Community 7"
Cohesion: 0.60
Nodes (4): DraggableGrid(), GridImageItem(), getLightboxImageUrl(), getOptimizedImageUrl()

### Community 8 - "Community 8"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

## Knowledge Gaps
- **49 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+44 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 58 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `React Application Core` to `Project Metadata and Linting`, `Animated UI Components`, `Portfolio Forms and Data`, `Community 4`, `Community 7`?**
  _High betweenness centrality (0.244) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 5` to `Project Metadata and Linting`?**
  _High betweenness centrality (0.156) - this node is a cross-community bridge._
- **Why does `framer-motion` connect `Animated UI Components` to `React Application Core`, `Project Metadata and Linting`, `Community 7`?**
  _High betweenness centrality (0.138) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _49 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `React Application Core` be split into smaller, more focused modules?**
  _Cohesion score 0.1383399209486166 - nodes in this community are weakly interconnected._
- **Should `Project Metadata and Linting` be split into smaller, more focused modules?**
  _Cohesion score 0.11688311688311688 - nodes in this community are weakly interconnected._
- **Should `Animated UI Components` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._