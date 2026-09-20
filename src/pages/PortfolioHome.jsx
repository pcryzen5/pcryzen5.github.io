import { motion } from "framer-motion";
import PortfolioHero from "../components/sections/PortfolioHero";
import PortfolioAbout from "../components/sections/PortfolioAbout";
import PortfolioProjects from "../components/sections/PortfolioProjects";
import PortfolioCertificates from "../components/sections/PortfolioCertificates";
import PortfolioContact from "../components/sections/PortfolioContact";

export default function PortfolioHome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-transparent"
    >
      {/* 1. Hero Block */}
      <PortfolioHero />

      {/* 2. Biography & Archives (My Work / My Life) */}
      <PortfolioAbout />

      {/* 3. Selected Projects (Hover Reveal) */}
      <PortfolioProjects />

      {/* 4. Certificates Section */}
      {/* <PortfolioCertificates /> */}

      {/* 5. Connect Form */}
      <PortfolioContact />
    </motion.div>
  );
}
