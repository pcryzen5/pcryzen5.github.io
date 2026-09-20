import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "About", target: "about" },
    { name: "Work", target: "projects" },
    { name: "Certificates", target: "certificates" },
    { name: "Contact", target: "contact" }
  ];

  if (portfolioData.resumeUrl) {
    const resumePath = portfolioData.resumeUrl.startsWith("http")
      ? portfolioData.resumeUrl
      : `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${portfolioData.resumeUrl.replace(/^\//, "")}`;
    navLinks.push({ name: "Resume", target: resumePath, isExternal: true });
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-black/95 border-b border-stone-900 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
        }`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between">

        {/* Left Side: Navigation Links (desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.isExternal) {
              return (
                <a
                  key={link.name}
                  href={link.target}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-white font-medium text-sm tracking-widest uppercase transition-colors duration-200 cursor-pointer relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              );
            }
            return (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="text-stone-400 hover:text-white font-medium text-sm tracking-widest uppercase transition-colors duration-200 cursor-pointer relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
              </button>
            );
          })}
        </nav>

        {/* Mobile menu trigger on the left */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-stone-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Right Side: Logo Name */}
        <div className="flex items-center">
          <button
            onClick={() => handleNavClick("hero")}
            className="text-xl font-display font-bold tracking-widest text-white hover:text-stone-300 transition-colors cursor-pointer uppercase"
          >
            Shubham Purkait
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-b border-stone-900"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                if (link.isExternal) {
                  return (
                    <a
                      key={link.name}
                      href={link.target}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-stone-300 hover:text-white font-semibold text-lg text-left tracking-wider uppercase py-2 border-b border-stone-900 block"
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <button
                    key={link.target}
                    onClick={() => handleNavClick(link.target)}
                    className="text-stone-300 hover:text-white font-semibold text-lg text-left tracking-wider uppercase py-2 border-b border-stone-900"
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
