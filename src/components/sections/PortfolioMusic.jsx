import { motion } from "framer-motion";
import {
  Play,
  Pause,
  ExternalLink,
  Music2,
  Youtube
} from "lucide-react";
import { favoritesData } from "../../data/favoritesData";
import { useAudio } from "../../context/AudioContext";
import MusicPlayerDeck from "../block/MusicPlayerDeck";

export default function PortfolioMusic() {
  const { music } = favoritesData;
  const tracks = music.items;

  const {
    currentTrackIndex,
    isPlaying,
    selectTrack
  } = useAudio();

  return (
    <section
      id="music"
      className="bg-transparent text-white py-24 border-t border-stone-900 overflow-hidden relative"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-6 md:px-12 text-left relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Music2 className="w-4 h-4 text-emerald-400" />
              <span className="text-stone-400 font-mono text-xs uppercase tracking-widest">
                // Sonic Archive
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
              Favorite Music
            </h2>
            <div className="w-16 h-[1px] bg-stone-700 mt-4" />
          </div>
          <p className="text-stone-400 text-sm max-w-md font-light leading-relaxed">
            {music.description}
          </p>
        </div>

        {/* ======================================================== */}
        {/* HI-FI NOW PLAYING DECK (Interactive Master Player Console) */}
        {/* ======================================================== */}
        <MusicPlayerDeck className="mb-14" />

        {/* ======================================================== */}
        {/* MUSIC CARDS GRID (2x2 Grid on Mobile, 4 Cols on Desktop) */}
        {/* ======================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {tracks.map((track, index) => {
            const isCurrent = currentTrackIndex === index;
            const isCurrentPlaying = isCurrent && isPlaying;

            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => selectTrack(index)}
                className={`group relative rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-sm border ${
                  isCurrentPlaying
                    ? "bg-stone-950/90 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.12)] -translate-y-1"
                    : isCurrent
                    ? "bg-stone-950/70 border-stone-700 -translate-y-0.5"
                    : "bg-stone-950/40 border-stone-900 hover:border-stone-700 hover:-translate-y-1"
                }`}
              >
                {/* Top: Album Art & Spinning Vinyl Record */}
                <div className="relative mb-3 sm:mb-5 pt-1 sm:pt-2">
                  <div className="relative w-full aspect-square flex items-center justify-center">
                    
                    {/* Vinyl Record that slides out on hover or when playing */}
                    <div
                      className={`absolute right-1 w-[88%] aspect-square rounded-full bg-gradient-to-tr from-stone-950 via-stone-900 to-stone-950 border border-stone-700/80 shadow-2xl flex items-center justify-center transition-all duration-500 ${
                        isCurrentPlaying
                          ? "translate-x-3 sm:translate-x-6 lg:translate-x-8 animate-spin-slow"
                          : "group-hover:translate-x-3 sm:group-hover:translate-x-6 group-hover:rotate-45"
                      }`}
                    >
                      {/* Vinyl Groove Rings */}
                      <div className="w-[82%] aspect-square rounded-full border border-stone-800 flex items-center justify-center">
                        <div className="w-[66%] aspect-square rounded-full border border-stone-800/80 flex items-center justify-center">
                          <div className="w-[50%] aspect-square rounded-full border border-stone-800 flex items-center justify-center">
                            {/* Center Vinyl Label Sticker */}
                            <div className="w-[36%] aspect-square rounded-full overflow-hidden border-2 border-stone-900 shadow-inner flex items-center justify-center bg-stone-900">
                              <img
                                src={track.cover}
                                alt="label"
                                className="w-full h-full object-cover opacity-90"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Album Cover Sleeve */}
                    <div className="relative z-10 w-full aspect-square rounded-lg sm:rounded-xl overflow-hidden border border-stone-800/90 shadow-xl bg-stone-900 group">
                      <img
                        src={track.cover}
                        alt={track.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Dark Overlay with Play / Pause Icon */}
                      <div
                        className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 ${
                          isCurrentPlaying
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110 active:scale-95">
                          {isCurrentPlaying ? (
                            <Pause className="w-4 h-4 sm:w-6 sm:h-6 fill-black" />
                          ) : (
                            <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-black ml-0.5 sm:ml-1" />
                          )}
                        </div>
                      </div>

                      {/* Playing soundwave overlay tag */}
                      {isCurrentPlaying && (
                        <div className="absolute top-1.5 sm:top-2.5 left-1.5 sm:left-2.5 z-20 flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/40">
                          <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-wider text-emerald-300">
                            Playing
                          </span>
                        </div>
                      )}

                      {/* Badge in top right */}
                      <div className="absolute top-1.5 sm:top-2.5 right-1.5 sm:right-2.5 z-20">
                        <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-wider text-stone-300 bg-black/80 backdrop-blur-md border border-stone-800 rounded px-1.5 sm:px-2 py-0.5">
                          {track.badge}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Track Metadata & Notes */}
                <div className="space-y-1.5 sm:space-y-2.5">
                  <div className="flex items-start justify-between gap-1 sm:gap-2">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-lg font-display font-bold uppercase tracking-tight text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                        {track.title}
                      </h3>
                      <p className="text-stone-400 text-[11px] sm:text-xs font-light truncate">
                        {track.artist}
                      </p>
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono text-stone-500 shrink-0">
                      {track.year}
                    </span>
                  </div>

                  <p className="text-stone-400 text-[10px] sm:text-xs font-light leading-relaxed line-clamp-2">
                    {track.note}
                  </p>

                  <div className="pt-2 sm:pt-3 border-t border-stone-900/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-wider text-stone-500 bg-stone-900/80 border border-stone-800/80 rounded px-1.5 py-0.5 truncate self-start">
                      {track.genre}
                    </span>

                    <a
                      href={track.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-stone-400 hover:text-red-400 transition-colors group/yt self-end sm:self-auto"
                      title="Listen on YouTube Music"
                    >
                      <Youtube className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-500 group-hover/yt:scale-110 transition-transform" />
                      <span className="text-[9px] sm:text-[11px] font-mono uppercase">YT Music</span>
                      <ExternalLink className="w-2 h-2 sm:w-2.5 sm:h-2.5 opacity-60" />
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
