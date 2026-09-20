import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Globe from "../block/Globe";
import { portfolioData } from "../../data/portfolioData";

const retroChars = "█▒░_X01A#$*+={}[]<>/\\?";

function RetroComputerTitle() {
  const targetText = "Shubham Purkait";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let frameId;
    let iteration = 0;
    const maxIterations = targetText.length * 4; // 4 frames of scramble per character
    const interval = 40; // timing step in ms

    const run = () => {
      let currentText = "";

      for (let i = 0; i < targetText.length; i++) {
        const charProgress = Math.floor(iteration / 4);

        if (i < charProgress) {
          currentText += targetText[i];
        } else if (i === charProgress) {
          if (targetText[i] === " ") {
            currentText += " ";
          } else {
            const randIndex = Math.floor(Math.random() * retroChars.length);
            currentText += retroChars[randIndex];
          }
        } else {
          currentText += "";
        }
      }

      setDisplayText(currentText);
      iteration++;

      if (iteration <= maxIterations) {
        setTimeout(() => {
          frameId = requestAnimationFrame(run);
        }, interval);
      } else {
        setDisplayText(targetText);
      }
    };

    const delayTimeout = setTimeout(() => {
      frameId = requestAnimationFrame(run);
    }, 300); // match initial delay

    return () => {
      clearTimeout(delayTimeout);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <span className="retro-glow-white crt-text inline-block">
      {displayText.split("").map((char, index) => {
        let className = "font-bold text-white";
        if (index > 4) {
          className = "font-light text-stone-400";
        }
        return (
          <span key={index} className={className}>
            {char}
          </span>
        );
      })}
      <span className="terminal-cursor text-white font-bold ml-1 inline-block">█</span>
    </span>
  );
}

export default function PortfolioHero() {
  return (
    <div
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-transparent text-white overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

      {/* Hero Content Grid */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 py-24 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">

        {/* Left Side: Original Hero Copy & CTAs */}
        <div className="flex flex-col items-start text-left gap-6 max-w-xl z-10 order-2 lg:order-1">
          {/* Animated label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 border border-stone-800 bg-stone-950/60 px-4 py-1.5 rounded-full text-xs font-light tracking-widest text-stone-400 uppercase backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Available
          </motion.div>

          {/* Large Typography Headers */}
          <div className="space-y-4 select-none">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-stone-400 font-light tracking-[0.2em] text-xs uppercase"
            >
              Multidisciplinary Creative & Engineer
            </motion.p>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display uppercase tracking-tighter leading-none">
              <RetroComputerTitle />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-stone-400 text-sm sm:text-base font-light leading-relaxed tracking-wide text-left"
          >
            Hi, I’m Shubham Purkait! I’m a developer specializing in Python, data engineering, and machine learning. With a background in backend system design, I bring a strong software engineering discipline to the world of Data Science and AI.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <button
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 bg-white text-black font-semibold uppercase tracking-wider text-xs rounded hover:bg-stone-200 transition-colors cursor-pointer"
            >
              Explore Work
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 bg-transparent border border-stone-800 hover:border-white text-stone-300 hover:text-white font-semibold uppercase tracking-wider text-xs rounded transition-colors cursor-pointer"
            >
              Get In Touch
            </button>
            {portfolioData.resumeUrl && (
              <a
                href={portfolioData.resumeUrl.startsWith("http")
                  ? portfolioData.resumeUrl
                  : `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${portfolioData.resumeUrl.replace(/^\//, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-stone-900 border border-stone-800 hover:border-white text-stone-300 hover:text-white font-semibold uppercase tracking-wider text-xs rounded transition-colors cursor-pointer inline-flex items-center justify-center"
              >
                Hire Me
              </a>
            )}
          </motion.div>
        </div>

        {/* Right Side: Interactive 3D Globe */}
        <div className="relative w-full flex items-center justify-center order-1 lg:order-2 h-[400px] sm:h-[500px]">
          {/* Ambient Glow */}
          <div className="absolute w-[350px] h-[350px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />

          {/* Interactive Globe Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="w-full h-full relative"
          >
            <Globe 
              speed={1.5}
              smoothing={6}
              dots={{ color: "#ffffff", size: 6, density: 7.5, allDots: false }}
              fill="dots"
              scale={8.5}
              initialLatitude={20}
              initialLongitude={77}
              oceanColor="#000000"
              outlineColor="#ffffff"
              outlineWidth={0.5}
              showOutline={true}
              showGrid={false}
              dragSpeed={4}
              detail={4}
            />
          </motion.div>
        </div>

      </div>

      {/* Subtle Slide Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest text-stone-500 font-light">Scroll</span>
        <div className="w-[1px] h-8 bg-stone-700" />
      </motion.div>
    </div>
  );
}
