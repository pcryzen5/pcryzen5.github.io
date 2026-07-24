import { Scale, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <Scale className="w-6 h-6 text-gold-500" />
          <span className="font-display font-bold tracking-wider text-stone-200 text-lg uppercase">
            John Doe
          </span>
          <span className="text-xs text-stone-600 border-l border-stone-800 pl-3">
            Legal Advocate & Counsel
          </span>
        </div>

        <div className="text-xs text-stone-500 text-center md:text-right">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <p className="mt-1 text-stone-600">Disclaimer: Under the rules of the Bar Council, this website is meant solely for informational purposes.</p>
        </div>

        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-stone-900 border border-stone-800 hover:border-gold-500/50 hover:text-gold-400 transition-all duration-300 group cursor-pointer"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
