import { motion } from "framer-motion";
import { Film, Star, Clock, ExternalLink, Quote } from "lucide-react";
import { favoritesData } from "../../data/favoritesData";

export default function PortfolioMovies() {
  const { movies } = favoritesData;
  const items = movies.items;

  return (
    <section
      id="movies"
      className="bg-transparent text-white py-24 border-t border-stone-900 overflow-hidden relative"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-6 md:px-12 text-left relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Film className="w-4 h-4 text-amber-400" />
              <span className="text-stone-400 font-mono text-xs uppercase tracking-widest">
                // Cinema Archive
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
              Favorite Movies
            </h2>
            <div className="w-16 h-[1px] bg-stone-700 mt-4" />
          </div>
          <p className="text-stone-400 text-sm max-w-md font-light leading-relaxed">
            {movies.description}
          </p>
        </div>

        {/* Cinematic Grid (2x2 on phone, 4 cols on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {items.map((movie, index) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl sm:rounded-2xl bg-stone-950/50 border border-stone-900 hover:border-stone-700 p-2.5 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl backdrop-blur-sm overflow-hidden"
            >
              {/* Poster Container */}
              <div className="relative aspect-[2/3] w-full rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4 border border-stone-800/80 bg-stone-900">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Film grain / subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between z-10">
                  {/* Rating */}
                  <span className="flex items-center gap-1 text-[9px] sm:text-[11px] font-mono text-amber-300 bg-black/85 backdrop-blur-md border border-amber-500/30 rounded-full px-1.5 sm:px-2.5 py-0.5 shadow-lg">
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400" />
                    {movie.rating}
                  </span>

                  {/* Badge */}
                  <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-wider text-stone-300 bg-black/85 backdrop-blur-md border border-stone-800 rounded-full px-1.5 sm:px-2.5 py-0.5">
                    {movie.badge}
                  </span>
                </div>

                {/* Bottom Overlay Info (Genre & Runtime) */}
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between text-[8px] sm:text-[11px] font-mono text-stone-300 z-10">
                  <span className="bg-black/80 backdrop-blur-md border border-stone-800 rounded px-1.5 sm:px-2 py-0.5 truncate max-w-[70px] sm:max-w-none">
                    {movie.genre}
                  </span>
                  <span className="flex items-center gap-0.5 sm:gap-1 bg-black/80 backdrop-blur-md border border-stone-800 rounded px-1.5 sm:px-2 py-0.5 text-stone-400 shrink-0">
                    <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-stone-500" />
                    {movie.runtime}
                  </span>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="flex-1 flex flex-col justify-between space-y-2 sm:space-y-4">
                <div>
                  <div className="flex items-baseline justify-between gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                    <h3 className="text-sm sm:text-xl font-display font-bold uppercase tracking-tight text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {movie.title}
                    </h3>
                    <span className="text-[10px] sm:text-xs font-mono text-stone-500 shrink-0">
                      {movie.year}
                    </span>
                  </div>
                  <p className="text-stone-400 text-[10px] sm:text-xs font-light tracking-wide mb-1.5 sm:mb-3 truncate">
                    Directed by <span className="text-stone-200 font-medium">{movie.creator}</span>
                  </p>

                  {/* Iconic Quote */}
                  <div className="relative pl-2 sm:pl-3 border-l-2 border-stone-800 group-hover:border-amber-500/60 transition-colors my-1.5 sm:my-3">
                    <Quote className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-stone-600 mb-0.5 sm:mb-1" />
                    <p className="text-stone-300 text-[10px] sm:text-xs italic font-light leading-relaxed line-clamp-2 sm:line-clamp-3">
                      "{movie.quote}"
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-2 sm:pt-3 border-t border-stone-900 flex items-center justify-end">
                  <a
                    href={movie.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-xs font-mono uppercase tracking-wider text-stone-400 hover:text-white transition-colors group/link"
                  >
                    <span>IMDb Profile</span>
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
