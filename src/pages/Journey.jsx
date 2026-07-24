import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Scale, BookOpen, ShieldCheck, Award } from "lucide-react";
import DotGrid from "../components/shared/DotGrid";

export default function Journey() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    {
      year: "2010",
      title: "Chambers Foundation",
      description: "Founded the Chambers of John Doe with a core focus on civil rights defense and trial advocacy in regional benches.",
      icon: BookOpen
    },
    {
      year: "2015",
      title: "First Landmark HC Verdict",
      description: "Successfully argued the defense in BioTech Labs patents, setting standard precedents in corporate IP laws.",
      icon: Scale
    },
    {
      year: "2019",
      title: "Senior Counsel Designation",
      description: "Recognized as Senior Advocate by the High Court bar association for persistent professional excellence.",
      icon: Award
    },
    {
      year: "2025",
      title: "Supreme Court Interventions",
      description: "Led defense briefs on the digital privacy mandate before the constitutional bench of the Supreme Court.",
      icon: ShieldCheck
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-stone-950 text-white min-h-screen pt-32 pb-24 relative overflow-hidden"
    >
      <DotGrid opacity={0.15} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <span className="text-gold-400 font-bold uppercase tracking-widest text-xs">
            Professional Timeline
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-wider text-white uppercase">
            Advocacy Journey
          </h1>
          <div className="w-20 h-1 bg-gold-500 rounded" />
        </div>

        <div className="relative border-l-2 border-stone-800 ml-4 md:ml-8 space-y-12">
          {milestones.map((ms, index) => {
            const Icon = ms.icon;
            return (
              <motion.div
                key={ms.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-10 md:pl-12 text-left"
              >
                {/* Circle Icon Badge */}
                <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-stone-900 border-2 border-gold-500 flex items-center justify-center text-gold-400">
                  <Icon className="w-4 h-4" />
                </div>
                
                {/* Content */}
                <div className="bg-stone-900/50 border border-stone-850 p-6 rounded-lg backdrop-blur-sm">
                  <span className="text-gold-400 font-bold text-lg">{ms.year}</span>
                  <h3 className="text-xl font-display font-semibold uppercase tracking-wide text-white mt-1">
                    {ms.title}
                  </h3>
                  <p className="text-stone-400 text-sm font-light mt-2 leading-relaxed">
                    {ms.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
