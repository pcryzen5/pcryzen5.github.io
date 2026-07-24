import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Scale, Award, Calendar, Landmark, User } from "lucide-react";
import { casesData } from "../data/casesData";
import DotGrid from "../components/shared/DotGrid";

export default function CaseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const legalCase = casesData.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!legalCase) {
    return (
      <div className="min-h-screen bg-stone-950 text-white flex flex-col items-center justify-center gap-6">
        <h2 className="text-2xl font-bold uppercase tracking-wider">Case Brief Not Found</h2>
        <Link to="/" className="px-6 py-2.5 bg-gold-600 text-stone-950 uppercase font-semibold text-xs tracking-wider rounded">
          Return to Chambers
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
      className="bg-stone-950 text-white min-h-screen pt-32 pb-24 relative overflow-hidden"
    >
      <DotGrid opacity={0.1} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Back navigation */}
        <Link 
          to="/#cases_fought"
          className="inline-flex items-center gap-2 text-stone-400 hover:text-gold-400 font-semibold tracking-wider text-xs uppercase transition-colors mb-12 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Cases Fought
        </Link>

        {/* Title and Metadata */}
        <div className="flex flex-col items-start gap-4 mb-10 text-left">
          <span className="text-gold-500 font-bold uppercase tracking-widest text-xs">
            {legalCase.category}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-white leading-tight">
            {legalCase.title}
          </h1>
          <div className="w-20 h-1 bg-gold-500 rounded mt-2" />
        </div>

        {/* Case Banner Image */}
        <div className="w-full aspect-[21/9] rounded-xl overflow-hidden border border-stone-850 shadow-2xl mb-12">
          <img 
            src={legalCase.image} 
            alt={legalCase.title} 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Grid: Details and Main Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Metadata Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-stone-900 border border-stone-850 p-6 rounded-lg space-y-6">
              <h3 className="font-display font-semibold uppercase tracking-wider text-stone-200 text-sm border-b border-stone-800 pb-3">
                Case Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] text-stone-500 uppercase tracking-widest font-semibold">Represented Client</div>
                    <div className="text-stone-300 font-medium text-sm">{legalCase.client}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] text-stone-500 uppercase tracking-widest font-semibold">Litigation Year</div>
                    <div className="text-stone-300 font-medium text-sm">{legalCase.year}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Landmark className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] text-stone-500 uppercase tracking-widest font-semibold">Judicial Bench</div>
                    <div className="text-stone-300 font-medium text-sm">{legalCase.court}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-900/40 border border-stone-850 p-6 rounded-lg text-center">
              <p className="text-stone-400 text-xs font-light leading-relaxed mb-4">
                Facing a similar legal dispute? Consult our counsel to review your case brief.
              </p>
              <button
                onClick={() => navigate("/#contact")}
                className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-stone-950 text-xs font-bold uppercase tracking-wider rounded cursor-pointer transition-all duration-300"
              >
                Request Brief Review
              </button>
            </div>
          </div>

          {/* Right Column: Case Brief Body */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* 1. Case Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider">
                The Dispute Brief
              </h2>
              <p className="text-stone-300 font-light leading-relaxed text-base">
                {legalCase.description}
              </p>
            </div>

            {/* 2. Legal Strategy */}
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider">
                Defense Counsel Strategy
              </h2>
              <div className="bg-stone-900 border border-stone-850 p-6 rounded-lg text-stone-300 font-light leading-relaxed text-sm">
                {legalCase.legalStrategy}
              </div>
            </div>

            {/* 3. Judicial Outcome */}
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Award className="w-6 h-6 text-gold-500" /> Case Outcome
              </h2>
              <p className="text-stone-300 font-light leading-relaxed text-base">
                {legalCase.outcome}
              </p>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
