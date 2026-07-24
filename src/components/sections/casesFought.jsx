import React from "react";
import { Link } from "react-router-dom";
import HoverImageReveal from "../block/HoverImageReveal";

export default function CasesFought({ hoverRevealItems, casesData }) {
  return (
    <section
      id="cases_fought"
      className="bg-stone-900 text-white py-24 md:py-32 relative z-20 border-t border-stone-850"
    >
      {/* Section Header Wrapper - Centered */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-6 text-left">
          <span className="text-gold-400 font-bold uppercase tracking-widest text-xs">
            Litigation Records & Precedents
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wider text-white uppercase">
            Cases Fought
          </h2>

        </div>
      </div>



      {/* Desktop/Tablet version utilizing the OriginKit HoverImageReveal component - Full Section Breadth, Centered items */}
      <div className="hidden md:block w-full">
        <HoverImageReveal
          items={hoverRevealItems}
          textColor="#caa15e"
          dimColor="rgba(255, 255, 255, 0.25)"
          align="center"
          rowGap={36}
          imageWidth={340}
          imageHeight={210}
          rounded={12}
          offsetX={0}
          offsetY={-100}
          followStrength={8}
          backgroundColor="transparent"
          font={{
            fontFamily: "'Thestral Neue', 'Playfair Display', serif",
            fontWeight: "bold",
            fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
            lineHeight: "1.2em",
            letterSpacing: "0.02em"
          }}
        />
      </div>

      {/* Mobile version (static list layout with inline images) - Centered */}
      <div className="block md:hidden max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="border-t border-stone-850 divide-y divide-stone-850">
          {casesData.map((legalCase) => (
            <div key={legalCase.id} className="py-6">
              <Link to={`/case/${legalCase.id}`} className="block text-left">
                <div className="flex items-center gap-4 text-[10px] font-semibold text-gold-500 uppercase tracking-widest mb-1.5">
                  <span>{legalCase.court}</span>
                  <span>•</span>
                  <span>{legalCase.year}</span>
                </div>
                <h3 className="text-xl font-display font-bold uppercase text-white hover:text-gold-400">
                  {legalCase.title}
                </h3>
                <p className="text-xs text-stone-400 font-light mt-1.5 mb-4 leading-relaxed">
                  {legalCase.summary}
                </p>
                <div className="w-full aspect-[16/9] rounded-lg overflow-hidden border border-stone-800">
                  <img
                    src={legalCase.image}
                    alt={legalCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
