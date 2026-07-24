import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Scale, Award, ShieldCheck } from "lucide-react";
import highCourtImg from "../../assets/images/high_court.jpg";
import lawyerImg from "../../assets/images/lawyer.png";
import TrustPill from "../block/TrustPill";
import DotGrid from "../shared/DotGrid";

export default function HeroBanner({ hideImageOnDesktop = false }) {
  // Track window scroll progress
  const { scrollY } = useScroll();
  
  // Transform scroll position (0 to 1000px) to X translation (0 to 600px shift to the right)
  const imageX = useTransform(scrollY, [0, 1000], [0, 600]);
  
  // Smooth the transform motion with a spring
  const smoothX = useSpring(imageX, { stiffness: 90, damping: 25 });

  return (
    <div 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-stone-950 text-white overflow-hidden py-24 md:py-0"
    >
      {/* Background Court Image with Cinematic Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={highCourtImg} 
          alt="High Court Background" 
          className="w-full h-full object-cover object-center opacity-20 filter grayscale sepia-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/60" />
      </div>

      {/* Decorative Dot Grid */}
      <DotGrid opacity={0.2} />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12 pt-16">
        
        {/* Left Side: Text and Badges */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left gap-6"
        >
          <div className="flex flex-wrap gap-3">
            <TrustPill text="Supreme Court Advocate" icon={Scale} delay={0.2} />
            <TrustPill text="Constitutional Counsel" icon={ShieldCheck} delay={0.4} />
          </div>

          <div className="space-y-2">
            <span className="text-gold-400 font-semibold tracking-widest text-sm uppercase block">
              Senior Legal Counsel & Advisor
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white leading-tight uppercase">
              John <br/>
              <span className="text-gold-400 text-glow-gold">Doe</span>
            </h1>
          </div>

          <p className="text-stone-300 max-w-lg text-base md:text-lg font-light leading-relaxed">
            Providing expert constitutional advocacy, landmark litigation defense, and strategic commercial advisory across high courts. Committed to defining legal precedents and delivering justice.
          </p>

          <div className="flex gap-4 pt-4">
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-stone-950 font-bold uppercase tracking-wider text-xs rounded shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Consult Counsel
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("cases_fought");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 bg-transparent border border-stone-700 hover:border-gold-400 hover:text-gold-400 text-white font-bold uppercase tracking-wider text-xs rounded hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Litigation Wins
            </button>
          </div>
        </motion.div>

        {/* Right Side: Lawyer Cutout Image with Horizontal Scroll-Shift */}
        <div className="flex justify-center md:justify-end items-end h-full relative">
          {hideImageOnDesktop ? (
            <>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] aspect-[3/4] overflow-visible relative lg:hidden"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gold-500/10 blur-[120px] rounded-full pointer-events-none" />
                <img 
                  src={lawyerImg} 
                  alt="John Doe Attorney at Law" 
                  className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(189,136,64,0.35)] select-none pointer-events-none"
                />
              </motion.div>
              <div className="hidden lg:block w-full max-w-[520px] aspect-[3/4]" />
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: smoothX }}
              className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[480px] xl:max-w-[520px] aspect-[3/4] overflow-visible relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gold-500/10 blur-[120px] rounded-full pointer-events-none" />
              <img 
                src={lawyerImg} 
                alt="John Doe Attorney at Law" 
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(189,136,64,0.35)] select-none pointer-events-none"
              />
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}
