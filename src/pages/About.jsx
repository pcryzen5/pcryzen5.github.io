import { useEffect } from "react";
import { motion } from "framer-motion";
import MissionVision from "../components/sections/MissionVission";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-stone-900 min-h-screen pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-start gap-4 mb-16 text-left">
          <span className="text-gold-600 font-bold uppercase tracking-widest text-xs">
            Chamber Profile
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-wider text-stone-900 uppercase">
            About Our Chambers
          </h1>
          <div className="w-20 h-1 bg-gold-500 rounded" />
        </div>

        <div className="max-w-3xl space-y-6 text-left mb-20 text-stone-700 leading-relaxed font-light">
          <p>
            Established by Senior Advocate John Doe, our chambers have been at the forefront of defense advocacy, corporate antitrust litigation, and intellectual property enforcement for over 15 years.
          </p>
          <p>
            We believe that robust legal representation is rooted in thorough preparation, technological familiarity, and high ethical compliance. We leverage analytics, forensic evidence support, and constitutional wisdom to deliver unmatched support to clients.
          </p>
        </div>

        <MissionVision />
      </div>
    </motion.div>
  );
}
