import { useState, useEffect } from "react";
import DraggableGrid from "../block/DraggableGrid";
import { portfolioData } from "../../data/portfolioData";

export default function PortfolioAbout() {
  const [lifeImages, setLifeImages] = useState(portfolioData.lifeGallery);
  const [failuresImages, setFailuresImages] = useState(portfolioData.failuresGallery);

  useEffect(() => {
    const fetchImages = async (repoName, setImages, fallbackList) => {
      const config = portfolioData.githubStorageConfig;
      if (!config || !config.username || !repoName) return;

      const cacheKey = `portfolio_gh_${config.username}_${repoName}`;
      const cacheTimestampKey = `${cacheKey}_ts`;
      const CACHE_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

      // Check localStorage first
      try {
        const cached = localStorage.getItem(cacheKey);
        const cachedTs = localStorage.getItem(cacheTimestampKey);
        if (cached && cachedTs && Date.now() - Number(cachedTs) < CACHE_TTL_MS) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setImages(parsed);
            return;
          }
        }
      } catch (e) {
        // Ignore localStorage error (e.g. incognito quota)
      }

      const apiUrl = `https://api.github.com/repos/${config.username}/${repoName}/contents`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (Array.isArray(data)) {
          const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"];
          const filtered = data
            .filter(file => {
              if (file.type !== "file") return false;
              const nameLower = file.name.toLowerCase();
              return imageExtensions.some(ext => nameLower.endsWith(ext));
            })
            .map(file => ({
              id: file.sha,
              url: file.download_url
            }));

          if (filtered.length > 0) {
            setImages(filtered);
            try {
              localStorage.setItem(cacheKey, JSON.stringify(filtered));
              localStorage.setItem(cacheTimestampKey, Date.now().toString());
            } catch (e) {
              // Ignore cache write error
            }
          }
        }
      } catch (err) {
        // Silently preserve current list (which is already pre-populated)
        console.warn(`Could not refresh ${repoName} from GitHub. Using existing list.`);
      }
    };

    fetchImages(portfolioData.githubStorageConfig.lifeRepo, setLifeImages, portfolioData.lifeGallery);
    fetchImages(portfolioData.githubStorageConfig.failuresRepo, setFailuresImages, portfolioData.failuresGallery);
  }, []);
  return (
    <section
      id="about"
      className="bg-transparent text-white py-24 border-t border-stone-900 space-y-24"
    >
      <div className="w-full px-6 md:px-12">

        {/* 1. About Me (Brief Biography) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left mb-16">
          <div className="lg:col-span-5">
            <span className="text-stone-500 font-bold uppercase tracking-widest text-xs block mb-3">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight leading-tight">
              Driven. <br />
              Versatile. <br />
              Intelligent.
            </h2>
            <div className="w-16 h-[1px] bg-stone-700 mt-6" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="text-stone-300 font-light text-base md:text-lg leading-relaxed">
              I’m Shubham Purkait, a developer driven by a single belief: data powers modern intelligence. Building on a solid foundation of Python backend development, I craft scalable data pipelines, analytical systems, and intelligent machine learning models.
            </p>
            <p className="text-stone-400 font-light text-sm leading-relaxed">
              Whether engineering backend architecture, analyzing complex datasets, or fine-tuning deep learning models, I bridge the gap between robust software engineering and data-driven insights to build end-to-end AI solutions.
            </p>
          </div>
        </div>

        {/* 2. "My Life" Gallery */}
        <div className="space-y-6 text-left border-t border-stone-900 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2">
            <div>
              <span className="text-stone-500 font-bold uppercase tracking-widest text-[10px] block mb-1">
                Archive 01
              </span>
              <h3 className="font-display font-semibold uppercase tracking-wider text-xl text-stone-200">
                My Life
              </h3>
            </div>
            <p className="text-stone-400 text-xs font-light tracking-wide max-w-md">
              Draggable grid wall displaying personal snaps, travel sights, and scenery. Resumes auto-scrolling at 0.5x speed when released.
            </p>
          </div>

          <DraggableGrid items={lifeImages} autoScrollSpeed={0.5} />
        </div>

        {/* 3. "My Failures" Gallery */}
        <div className="space-y-6 text-left border-t border-stone-900 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2">
            <div>
              <span className="text-stone-500 font-bold uppercase tracking-widest text-[10px] block mb-1">
                Archive 02
              </span>
              <h3 className="font-display font-semibold uppercase tracking-wider text-xl text-stone-200">
                My Failures
              </h3>
            </div>
            <p className="text-stone-400 text-xs font-light tracking-wide max-w-md">
              Draggable grid wall displaying glitches, experimental code bugs, and abandoned design concepts. Resumes auto-scrolling at 0.5x speed when released.
            </p>
          </div>

          <DraggableGrid items={failuresImages} autoScrollSpeed={0.5} />
        </div>

      </div>
    </section>
  );
}
