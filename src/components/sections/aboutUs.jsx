import React from "react";
import { motion } from "framer-motion";
import MissionVision from "./MissionVission";
import lawyerImg from "../../assets/images/lawyer.png";

export default function AboutUs({ refProp, accolades }) {
  return (
    <section 
      id="about_us" 
      ref={refProp}
      className="bg-white text-stone-900 py-24 md:py-32 relative z-20 border-t border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-4 mb-16 text-left">
          <span className="text-gold-600 font-bold uppercase tracking-widest text-xs">
            Advocacy & Counsel
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wider text-stone-900 uppercase">
            About John Doe
          </h2>
          <div className="w-20 h-1 bg-gold-500 rounded" />
        </div>

        {/* About description and profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          
          {/* Left Column: Image landing space on desktop, inline cutout on mobile/tablet */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start items-center">
            <div className="block lg:hidden w-full max-w-[340px] aspect-[3/4] mb-8">
              <img 
                src={lawyerImg} 
                alt="John Doe Profile" 
                className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(189,136,64,0.25)]"
              />
            </div>
            <div className="hidden lg:block w-full aspect-[3/4]" />
          </div>

          {/* Right Column: Paragraph and Accolades Grid */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-stone-850 font-display uppercase tracking-wide">
                Defending legal principles with absolute diligence and intellectual rigor.
              </h3>
              <p className="text-stone-650 text-base leading-relaxed font-light">
                John Doe is a Senior Advocate practicing primarily before the High Courts and the Supreme Court of India. With over fifteen years of dedicated service in constitutional defense, antitrust dispute resolution, and intellectual property litigation, John has consistently led groundbreaking briefs that have helped re-evaluate statutory interpretations.
              </p>
              <p className="text-stone-650 text-base leading-relaxed font-light">
                Our chambers work on a foundation of analytical preparation, combining empirical data reviews and multi-layered legal analysis to build resilient litigation profiles. Whether defending civil liberties in constitutional matters or navigating cross-border patent disputes, our priority remains providing formidable legal advocacy.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {accolades.map((acc, index) => {
                const Icon = acc.icon;
                return (
                  <motion.div
                    key={acc.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 bg-stone-50 border border-stone-100 rounded-lg text-left"
                  >
                    <Icon className="w-5 h-5 text-gold-500 mb-2" />
                    <div className="text-3xl font-display font-bold text-stone-900">{acc.value}</div>
                    <div className="text-xs text-stone-500 mt-1 uppercase tracking-wider font-semibold">{acc.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Mission and Vision cards */}
        <MissionVision />
      </div>
    </section>
  );
}
