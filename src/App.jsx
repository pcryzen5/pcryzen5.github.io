import { useEffect, lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import PortfolioHome from "./pages/PortfolioHome";
import GlitterWrap from "./components/block/GlitterWrap";
import "./App.css";

const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));

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
            particleCount={250}
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
              <Route
                path="/project/:id"
                element={
                  <Suspense
                    fallback={
                      <div className="min-h-screen flex items-center justify-center text-stone-500 font-mono text-sm">
                        Loading Project...
                      </div>
                    }
                  >
                    <ProjectDetail />
                  </Suspense>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
