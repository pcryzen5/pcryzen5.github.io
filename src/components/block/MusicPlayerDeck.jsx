import { motion } from "framer-motion";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  ExternalLink,
  Youtube
} from "lucide-react";
import { useAudio } from "../../context/AudioContext";

export default function MusicPlayerDeck({ className = "" }) {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    togglePlay,
    handleNext,
    handlePrev,
    handleSeek,
    handleVolume,
    toggleMute,
    formatTime,
  } = useAudio();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`p-5 md:p-6 rounded-2xl bg-stone-950/70 border border-stone-800/80 backdrop-blur-xl shadow-2xl relative overflow-hidden ${className}`}
    >
      {/* Subtle Glow Strip */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left: Active Track Details + Mini Vinyl */}
        <div className="flex items-center gap-4 w-full lg:w-1/3">
          <div className="relative group shrink-0">
            <img
              src={currentTrack.cover}
              alt={currentTrack.title}
              className="w-16 h-16 rounded-xl object-cover border border-stone-800 shadow-md relative z-10"
            />
            {/* Mini Vinyl Record peeking */}
            <div
              className={`absolute -right-3 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-stone-900 border-2 border-stone-700 flex items-center justify-center transition-transform duration-500 shadow-lg ${
                isPlaying ? "animate-spin-slow translate-x-2" : "opacity-60"
              }`}
            >
              <div className="w-5 h-5 rounded-full border border-stone-600 bg-stone-950 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>

          <div className="min-w-0 pl-3">
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  isPlaying
                    ? "bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"
                    : "bg-stone-600"
                }`}
              />
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                {isPlaying ? "Now Playing" : "Paused"}
              </span>
            </div>
            <h4 className="text-white font-display font-bold text-lg truncate tracking-tight">
              {currentTrack.title}
            </h4>
            <p className="text-stone-400 text-xs truncate font-light">
              {currentTrack.artist}
            </p>
          </div>
        </div>

        {/* Center: Playback Controls & Scrubber Timeline */}
        <div className="flex flex-col items-center gap-3 w-full lg:w-5/12">
          {/* Buttons */}
          <div className="flex items-center gap-5">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-900/80 transition-colors cursor-pointer"
              title="Previous track"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-black" />
              ) : (
                <Play className="w-5 h-5 fill-black ml-0.5" />
              )}
            </button>

            <button
              onClick={handleNext}
              className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-900/80 transition-colors cursor-pointer"
              title="Next track"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Scrubber */}
          <div className="w-full flex items-center gap-3 text-xs font-mono text-stone-400">
            <span className="w-9 text-right">{formatTime(currentTime)}</span>
            <div className="relative flex-1 flex items-center group">
              <input
                type="range"
                min="0"
                max={duration || 30}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-white hover:accent-emerald-400 transition-all"
              />
            </div>
            <span className="w-9 text-left">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Right: Soundwave Visualizer & Volume */}
        <div className="flex items-center justify-between lg:justify-end gap-6 w-full lg:w-1/3">
          {/* Dynamic Equalizer Bars */}
          <div className="flex items-end gap-1 h-6 px-3 py-1 bg-stone-900/60 rounded-lg border border-stone-800/80">
            {[14, 24, 18, 28, 12, 22, 16, 26].map((h, i) => (
              <motion.span
                key={i}
                animate={
                  isPlaying
                    ? {
                        height: [
                          `${Math.max(4, h * 0.3)}px`,
                          `${h}px`,
                          `${Math.max(4, h * 0.6)}px`,
                          `${h * 0.9}px`,
                          `${Math.max(4, h * 0.2)}px`
                        ]
                      }
                    : { height: "4px" }
                }
                transition={{
                  repeat: Infinity,
                  duration: 0.6 + (i % 3) * 0.2,
                  ease: "easeInOut"
                }}
                className={`w-1 rounded-full ${
                  isPlaying ? "bg-emerald-400" : "bg-stone-700"
                }`}
              />
            ))}
          </div>

          {/* Volume Slider */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-stone-500" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolume}
              className="w-16 md:w-20 h-1 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-stone-300"
            />
          </div>

          {/* External YouTube Music Link */}
          <a
            href={currentTrack.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-stone-400 hover:text-red-400 border border-stone-800 hover:border-red-500/40 rounded-full px-3 py-1 transition-all"
            title="Open track on YouTube Music"
          >
            <Youtube className="w-3.5 h-3.5 text-red-500" />
            <span>YT Music</span>
            <ExternalLink className="w-3 h-3 text-stone-500" />
          </a>
        </div>

      </div>
    </motion.div>
  );
}
