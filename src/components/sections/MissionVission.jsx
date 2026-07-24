import React from "react";
import { motion } from "framer-motion";
import { Compass, Eye, ShieldAlert } from "lucide-react";

export default function MissionVision() {
  const cards = [
    {
      title: "Our Mission",
      icon: Compass,
      description: "To deliver uncompromising, high-caliber legal advocacy that protects fundamental constitutional rights, resolves complex corporate challenges, and drives equitable solutions.",
      color: "border-stone-200"
    },
    {
      title: "Our Vision",
      icon: Eye,
      description: "To set the benchmark for ethical legal counsel, shaping future judicial interpretations and empowering clients with legal strategies that anticipate socio-technological shifts.",
      color: "border-gold-300/40"
    },
    {
      title: "Core Integrity",
      icon: ShieldAlert,
      description: "Rooted in absolute transparency, diligence, and intellectual precision. We approach every brief with exhaustive preparation, strategic foresight, and dedication to justice.",
      color: "border-stone-200"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
            className={`p-8 bg-stone-50 rounded-xl border ${card.color} transition-all duration-300 flex flex-col gap-4 text-left`}
          >
            <div className="w-12 h-12 rounded-lg bg-gold-100 flex items-center justify-center text-gold-600">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-stone-900 tracking-wide uppercase">
              {card.title}
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              {card.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
