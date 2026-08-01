import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import PortfolioHome from "./pages/PortfolioHome";
import ProjectDetail from "./pages/ProjectDetail";
import GlitterWrap from "./components/block/GlitterWrap";
import "./App.css";

// Scroll to hash handler for single page smooth scrolling
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly to let the page render before scrolling
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="flex flex-col min-h-screen bg-black text-stone-100 selection:bg-white selection:text-black relative">
        {/* Full Page Fixed Background Warp Animation */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <GlitterWrap 
            particleCount={350}
            color1="#ffffff"
            color2="#a8a29e"
            color3="#57534e"
            speed={2}
            density={80}
            starSize={12}
            focalDepth={15}
            brightness={70}
            glitterIntensity={2}
            trailAmount={85}
          />
        </div>

        {/* Content wrapper on top of background */}
        <div className="relative z-10 flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<PortfolioHome />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
