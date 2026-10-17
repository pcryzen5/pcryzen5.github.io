import { motion } from "framer-motion";
import { BookOpen, Bookmark, ExternalLink, Lightbulb } from "lucide-react";
import { favoritesData } from "../../data/favoritesData";

export default function PortfolioBooks() {
  const { books } = favoritesData;
  const items = books.items;

  return (
    <section
      id="books"
      className="bg-transparent text-white py-24 border-t border-stone-900 overflow-hidden relative"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-6 md:px-12 text-left relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span className="text-stone-400 font-mono text-xs uppercase tracking-widest">
                // Literary Archive
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
              Favorite Books
            </h2>
            <div className="w-16 h-[1px] bg-stone-700 mt-4" />
          </div>
          <p className="text-stone-400 text-sm max-w-md font-light leading-relaxed">
            {books.description}
          </p>
        </div>

        {/* Bookshelf Grid (2x2 on phone, 4 cols on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {items.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl sm:rounded-2xl bg-stone-950/50 border border-stone-900 hover:border-stone-700 p-2.5 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl backdrop-blur-sm overflow-hidden"
            >
              {/* Top: Book Cover with Hardcover Book Spine Depth Effect */}
              <div className="mb-3 sm:mb-5 flex justify-center">
                <div className="relative w-24 xs:w-32 sm:w-44 aspect-[2/3] rounded-r-lg rounded-l-sm overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.8)] border border-stone-800 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_18px_36px_rgba(0,0,0,0.9)]">
                  
                  {/* Spine Crease & Reflection Effect */}
                  <div className="absolute top-0 bottom-0 left-0 w-2 sm:w-3 bg-gradient-to-r from-black/80 via-white/10 to-transparent z-10 pointer-events-none" />
                  <div className="absolute top-0 bottom-0 left-2 sm:left-3 w-[1px] bg-white/10 z-10 pointer-events-none" />
                  
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Badge */}
                  <div className="absolute top-1.5 sm:top-2.5 right-1.5 sm:right-2.5 z-20">
                    <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-wider text-white bg-black/85 backdrop-blur-md border border-stone-700 rounded px-1.5 sm:px-2 py-0.5">
                      {book.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Middle: Details & Takeaway */}
              <div className="flex-1 flex flex-col justify-between space-y-2 sm:space-y-4">
                <div>
                  <div className="flex items-baseline justify-between gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                    <h3 className="text-xs sm:text-lg font-display font-bold uppercase tracking-tight text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                      {book.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-1 sm:gap-1.5 text-stone-400 text-[10px] sm:text-xs font-light tracking-wide mb-1.5 sm:mb-3 truncate">
                    <Bookmark className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-stone-500 shrink-0" />
                    <span className="truncate">{book.creator}</span>
                    <span className="text-stone-600">•</span>
                    <span className="font-mono text-stone-500 shrink-0">{book.year}</span>
                  </div>

                  {/* Core Takeaway Box */}
                  <div className="bg-stone-900/50 border border-stone-800/80 rounded-lg sm:rounded-xl p-2 sm:p-3.5 space-y-1 sm:space-y-1.5 group-hover:border-stone-700 transition-colors">
                    <div className="flex items-center gap-1 sm:gap-1.5 text-[8px] sm:text-[10px] font-mono uppercase tracking-wider text-blue-400">
                      <Lightbulb className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400 shrink-0" />
                      <span>Key Takeaway</span>
                    </div>
                    <p className="text-stone-300 text-[10px] sm:text-xs font-light leading-relaxed line-clamp-3">
                      "{book.takeaway}"
                    </p>
                  </div>
                </div>

                {/* Bottom Footer: Genre pill & Goodreads link */}
                <div className="pt-2 sm:pt-3 border-t border-stone-900 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-wider text-stone-500 bg-stone-900/80 border border-stone-800/80 rounded px-1.5 py-0.5 truncate self-start max-w-[75px] sm:max-w-none">
                    {book.genre}
                  </span>

                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-stone-400 hover:text-white font-mono text-[9px] sm:text-[11px] uppercase tracking-wider transition-colors group/link self-end sm:self-auto"
                  >
                    <span>Goodreads</span>
                    <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-stone-500 group-hover/link:text-white group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
