import { motion } from "framer-motion";

export default function DotGrid({ opacity = 0.15 }) {
  // Renders a grid of SVG dots
  const gridWidth = 30;
  const gridHeight = 20;
  const dots = [];

  for (let i = 0; i < gridWidth; i++) {
    for (let j = 0; j < gridHeight; j++) {
      dots.push({ x: i * 24, y: j * 24, id: `${i}-${j}` });
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" style={{ opacity }}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="dot-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#bd8840" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#bd8840" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g fill="rgba(189, 136, 64, 0.25)">
          {dots.map((dot, index) => (
            <motion.circle
              key={dot.id}
              cx={dot.x + 12}
              cy={dot.y + 12}
              r={1}
              initial={{ opacity: 0.2 }}
              animate={{ 
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 4 + (index % 5),
                repeat: Infinity,
                delay: (index % 10) * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
