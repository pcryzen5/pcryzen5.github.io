import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, Calendar, BadgeCheck } from "lucide-react";
import { certificatesData } from "../../data/portfolio_certificates_data";

export default function PortfolioCertificates() {
  return (
    <section
      id="certificates"
      className="bg-transparent text-white py-24 border-t border-stone-900 overflow-hidden"
    >
      <div className="w-full px-6 md:px-12 text-left">
        {/* Header Block */}
        <div className="mb-16">
          <span className="text-stone-500 font-bold uppercase tracking-widest text-xs block mb-3">
            Accreditations & Badges
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
            Certificates
          </h2>
          <div className="w-16 h-[1px] bg-stone-700 mt-4" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-stone-950/40 border border-stone-900 hover:border-stone-700 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden backdrop-blur-sm"
            >
              {/* Top Row: Icon & Date */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="p-3 bg-stone-900/80 border border-stone-800 rounded-xl text-stone-200 group-hover:text-white group-hover:border-stone-600 transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  {cert.date && (
                    <span className="flex items-center gap-1.5 text-xs font-mono text-stone-400 bg-stone-900/60 border border-stone-800/80 rounded-full px-3 py-1">
                      <Calendar className="w-3 h-3 text-stone-500" />
                      {cert.date}
                    </span>
                  )}
                </div>

                {/* Title & Issuer */}
                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-stone-100 group-hover:text-white transition-colors mb-1.5">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-1.5 text-stone-400 text-xs font-light tracking-wide mb-4">
                  <BadgeCheck className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Summary */}
                {cert.summary && (
                  <p className="text-stone-400 text-xs leading-relaxed font-light mb-6">
                    {cert.summary}
                  </p>
                )}
              </div>

              {/* Bottom Section: Skills & Credential Link */}
              <div className="pt-4 border-t border-stone-900/80 space-y-4">
                {/* Skill Pills */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] uppercase font-mono tracking-wider text-stone-400 bg-stone-900/90 border border-stone-800/90 rounded px-2.5 py-0.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer Link / ID */}
                <div className="flex items-center justify-between text-xs pt-1">
                  {cert.credentialId ? (
                    <span className="text-[11px] font-mono text-stone-500 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      ID: {cert.credentialId}
                    </span>
                  ) : <span />}

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white font-medium text-xs tracking-wider uppercase transition-colors group/link py-1"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover/link:text-white transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
