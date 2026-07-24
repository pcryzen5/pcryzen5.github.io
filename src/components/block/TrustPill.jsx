import React from "react";
import { motion } from "framer-motion";

export default function TrustPill({ text, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900/60 border border-gold-500/20 backdrop-blur-md shadow-sm"
      whileHover={{ 
        scale: 1.05, 
        borderColor: "rgba(189, 136, 64, 0.5)",
        boxShadow: "0 0 15px rgba(189, 136, 64, 0.1)"
      }}
    >
      {Icon && <Icon className="w-4 h-4 text-gold-400" />}
      <span className="text-xs font-semibold uppercase tracking-wider text-gold-300">
        {text}
      </span>
    </motion.div>
  );
}
