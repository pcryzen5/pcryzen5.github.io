import { motion } from "framer-motion";
import PortfolioHero from "../components/sections/PortfolioHero";
import MusicPlayerDeck from "../components/block/MusicPlayerDeck";
import PortfolioAbout from "../components/sections/PortfolioAbout";
import PortfolioProjects from "../components/sections/PortfolioProjects";
import PortfolioCertificates from "../components/sections/PortfolioCertificates";
import PortfolioMusic from "../components/sections/PortfolioMusic";
import PortfolioMovies from "../components/sections/PortfolioMovies";
import PortfolioBooks from "../components/sections/PortfolioBooks";
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

      {/* Music Player Deck directly below Hero */}
      <div className="w-full px-6 md:px-12 lg:px-24 -mt-6 sm:-mt-8 mb-16 relative z-20">
        <MusicPlayerDeck />
      </div>

      {/* 2. Biography & Archives (My Work / My Life) */}
      <PortfolioAbout />
      {/* 5. Separate Favorite Sections */}
      {/* 5.1 Playable Favorite Music Section */}
      <PortfolioMusic />

      {/* 5.2 Favorite Movies Section */}
      <PortfolioMovies />

      {/* 5.3 Favorite Books Section */}
      <PortfolioBooks />

      {/* 3. Selected Projects (Hover Reveal) */}
      <PortfolioProjects />

      {/* 4. Certificates Section */}
      {/* <PortfolioCertificates /> */}

      {/* 6. Connect Form */}
      <PortfolioContact />
    </motion.div>
  );
}
