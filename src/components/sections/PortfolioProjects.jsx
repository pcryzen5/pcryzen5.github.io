import HoverImageReveal from "../block/HoverImageReveal";
import { portfolioData } from "../../data/portfolioData";

export default function PortfolioProjects() {
  const { projects } = portfolioData;

  // Format projects data for the HoverImageReveal component structure
  const formattedItems = {
    itemCount: projects.length,
  };

  projects.forEach((project, index) => {
    formattedItems[`item${index + 1}`] = {
      text: `0${index + 1}. ${project.title.toUpperCase()}`,
      image: { src: project.image },
      link: `/project/${project.id}`,
    };
  });

  const customFontConfig = {
    fontFamily: "Movark, sans-serif",
    fontWeight: 700,
    fontSize: 48,
    lineHeight: "1em",
    letterSpacing: "-0.04em",
    textAlign: "left",
  };

  return (
    <section 
      id="projects" 
      className="bg-transparent text-white py-24 border-t border-stone-900 overflow-hidden"
    >
      <div className="w-full px-6 md:px-12 text-left">
        
        {/* Header Block */}
        <div className="mb-16">
          <span className="text-stone-500 font-bold uppercase tracking-widest text-xs block mb-3">
            Selected Commissions
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
            Active Projects
          </h2>
          <div className="w-16 h-[1px] bg-stone-700 mt-4" />
        </div>

        {/* Hover Reveal Container */}
        <div className="border border-stone-900 rounded-2xl overflow-hidden bg-stone-950/40">
          <HoverImageReveal 
            items={formattedItems} 
            font={customFontConfig}
            textColor="#FFFFFF"
            dimColor="#3a3a3a"
            align="left"
            offsetX={180}
            offsetY={0}
            rowGap={36}
            imageWidth={340}
            imageHeight={460}
            backgroundColor="#000000"
            rounded={8}
          />
        </div>

      </div>
    </section>
  );
}
