import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, ShieldAlert, Github, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import DotGrid from "../components/shared/DotGrid";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = portfolioData.projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    const descTag = document.querySelector('meta[name="description"]');
    const prevDesc = descTag ? descTag.getAttribute("content") : "";

    if (project) {
      document.title = `${project.title} — Shubham Purkait`;
      if (descTag && project.summary) {
        descTag.setAttribute("content", project.summary);
      }
    } else {
      document.title = "Project Not Found — Shubham Purkait";
    }

    return () => {
      document.title = prevTitle;
      if (descTag && prevDesc) {
        descTag.setAttribute("content", prevDesc);
      }
    };
  }, [id, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center gap-6">
        <h2 className="text-xl font-bold uppercase tracking-wider">Project Not Found</h2>
        <Link to="/" className="px-6 py-2.5 bg-white text-black uppercase font-semibold text-xs tracking-wider rounded">
          Return to Studio
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-transparent text-white min-h-screen pt-32 pb-24 relative overflow-hidden"
    >
      <DotGrid opacity={0.05} />

      <div className="w-full px-6 md:px-12 relative z-10">
        
        {/* Back Link */}
        <Link 
          to="/#projects"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-white font-semibold tracking-wider text-xs uppercase transition-colors mb-12 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Selected Work
        </Link>

        {/* Title Block */}
        <div className="flex flex-col items-start gap-4 mb-10 text-left">
          <span className="text-stone-400 font-bold uppercase tracking-widest text-xs">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-white leading-tight">
            {project.title}
          </h1>
          <div className="w-16 h-[1px] bg-stone-700 mt-2" />
        </div>

        {/* Banner Cover Image */}
        <div className="w-full aspect-[21/9] rounded-xl overflow-hidden border border-stone-900 shadow-2xl mb-12 bg-stone-950">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Metadata Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-stone-950/40 border border-stone-900 p-6 rounded-xl space-y-6">
              <h3 className="font-display font-semibold uppercase tracking-wider text-stone-200 text-xs border-b border-stone-900 pb-3">
                Project Details
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-[9px] text-stone-500 uppercase tracking-widest font-semibold mb-1">Client</div>
                  <div className="text-stone-300 font-medium text-xs">{project.client}</div>
                </div>

                <div>
                  <div className="text-[9px] text-stone-500 uppercase tracking-widest font-semibold mb-1">Role / Domain</div>
                  <div className="text-stone-300 font-medium text-xs">{project.role}</div>
                </div>

                <div>
                  <div className="text-[9px] text-stone-500 uppercase tracking-widest font-semibold mb-1">Timeline Year</div>
                  <div className="text-stone-300 font-medium text-xs">{project.year}</div>
                </div>
              </div>
            </div>

            {/* Technologies Block */}
            <div className="bg-stone-950/40 border border-stone-900 p-6 rounded-xl space-y-4">
              <h3 className="font-display font-semibold uppercase tracking-wider text-stone-200 text-xs border-b border-stone-900 pb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 bg-stone-900 text-stone-300 text-[10px] uppercase font-medium tracking-wider rounded border border-stone-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-stone-950/40 border border-stone-900 p-6 rounded-xl space-y-4 text-center">
              <h3 className="font-display font-semibold uppercase tracking-wider text-stone-200 text-xs border-b border-stone-900 pb-3 text-left">
                Project Links
              </h3>
              <div className="flex flex-col gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-stone-900 hover:bg-stone-850 text-stone-100 hover:text-white border border-stone-800 text-xs font-bold uppercase tracking-wider rounded cursor-pointer transition-all flex items-center justify-center gap-2"
                  >
                    <Github className="w-3.5 h-3.5" /> GitHub Code
                  </a>
                )}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-white hover:bg-stone-200 text-black text-xs font-bold uppercase tracking-wider rounded cursor-pointer transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live Preview
                  </a>
                ) : (
                  <div
                    className="w-full py-3 bg-black text-stone-700 border border-stone-900 text-xs font-bold uppercase tracking-wider rounded cursor-not-allowed flex items-center justify-center gap-2 select-none"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-stone-800" /> Live Preview
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Description & Detailed Content */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Outline */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-white uppercase tracking-wider">
                Overview
              </h2>
              <p className="text-stone-300 font-light leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
            </div>

            {/* Challenges */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-stone-500" /> Engineering Challenges
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="bg-stone-950/40 border border-stone-900 p-5 rounded-lg text-stone-300 font-light leading-relaxed text-xs md:text-sm">
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes / Solutions */}
            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-stone-500" /> Implemented Solutions
              </h2>
              <ul className="space-y-3">
                {project.solutions.map((solution, i) => (
                  <li key={i} className="bg-stone-950/40 border border-stone-900 p-5 rounded-lg text-stone-300 font-light leading-relaxed text-xs md:text-sm">
                    {solution}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
