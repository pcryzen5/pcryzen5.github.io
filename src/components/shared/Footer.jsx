import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-transparent text-stone-500 py-12 border-t border-stone-900">
      <div className="w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-3">
          <span className="font-display font-bold tracking-wider text-stone-200 text-lg uppercase">
            Shubham Purkait
          </span>
          <span className="text-xs text-stone-600 border-l border-stone-800 pl-3 uppercase tracking-wider font-light">
            Machine learner
          </span>
        </div>

        <div className="text-xs text-stone-500 text-center md:text-right">
          <p>© {new Date().getFullYear()} Shubham Purkait. Portfolio Archival.</p>
        </div>

        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-stone-900 border border-stone-800 hover:border-white hover:text-white transition-all duration-300 group cursor-pointer"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
