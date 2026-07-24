import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/forms/contactForm";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-stone-950 text-white min-h-screen pt-32 pb-24"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <span className="text-gold-400 font-bold uppercase tracking-widest text-xs">
            Direct Chamber Connection
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-wider text-white uppercase">
            Schedule Consultation
          </h1>
          <div className="w-20 h-1 bg-gold-500 rounded" />
        </div>

        <div className="bg-stone-900 border border-stone-850 p-8 rounded-xl backdrop-blur-md">
          <ContactForm />
        </div>
      </div>
    </motion.div>
  );
}
