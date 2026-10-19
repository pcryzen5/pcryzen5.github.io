import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCcw, Maximize2, X, Sparkles, ExternalLink } from "lucide-react";
import { getOptimizedImageUrl, getLightboxImageUrl } from "../../lib/imageUtils";

const PERSPECTIVE = 1000;
const DEPTH_SPACING = 14;

export default function SwipeStack({
  items = [],
  cardWidth = 320,
  cardHeight = 440,
  cardRadius = 18,
  swipeThreshold = 50,
  tiltAngleStart = 0,
  tiltAngle = -32,
  xOffset = 18,
  transition = { type: "spring", stiffness: 300, damping: 28, mass: 1 },
  repoName = "Hotwheels_collection",
  githubUsername = "pcryzen5"
}) {
  const [cards, setCards] = useState(() =>
    items.map((item, index) => ({
      ...item,
      uniqueKey: `${item.id || index}-${index}`,
      originalIndex: index
    }))
  );

  const [isPressed, setIsPressed] = useState(false);
  const [shouldReturnToCenter, setShouldReturnToCenter] = useState(false);
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [dragDistance, setDragDistance] = useState(0);

  // Sync if items update from GitHub fetch
  useEffect(() => {
    if (items && items.length > 0) {
      setCards(
        items.map((item, index) => ({
          ...item,
          uniqueKey: `${item.id || index}-${index}`,
          originalIndex: index
        }))
      );
    } else {
      setCards([]);
    }
  }, [items]);

  const handlePointerDown = () => setIsPressed(true);
  const handlePointerUp = () => setIsPressed(false);

  const handleDragEnd = (info) => {
    setIsPressed(false);
    setDragDistance(0);
    const { offset, velocity } = info;
    const distance = Math.hypot(offset.x, offset.y);
    const speed = Math.hypot(velocity.x, velocity.y);

    // Fast flick or distance past threshold cycles the card to back
    if (distance > swipeThreshold || speed > 400) {
      cycleNext();
    } else {
      setShouldReturnToCenter(true);
      const timer = setTimeout(() => setShouldReturnToCenter(false), 600);
      return () => clearTimeout(timer);
    }
  };

  const cycleNext = () => {
    setCards((prev) => {
      if (prev.length <= 1) return prev;
      const [topCard, ...rest] = prev;
      return [...rest, topCard];
    });
  };

  const cyclePrev = () => {
    setCards((prev) => {
      if (prev.length <= 1) return prev;
      const lastCard = prev[prev.length - 1];
      const rest = prev.slice(0, prev.length - 1);
      return [lastCard, ...rest];
    });
  };

  const resetStack = () => {
    setCards(
      items.map((item, index) => ({
        ...item,
        uniqueKey: `${item.id || index}-${index}`,
        originalIndex: index
      }))
    );
  };

  const getCardStyle = (index) => {
    const totalCards = cards.length;
    // Visually render up to 5 cards in stack to maximize 60fps performance
    const visualIndex = Math.min(index, 4);
    const stackOffset = visualIndex * 10;
    const scaleValue = 1 - visualIndex * 0.045;
    const rotationValue =
      totalCards > 1
        ? tiltAngleStart + (visualIndex / Math.min(totalCards - 1, 4)) * (tiltAngle - tiltAngleStart)
        : tiltAngleStart;
    const xOffsetValue =
      totalCards > 1 ? (visualIndex / Math.min(totalCards - 1, 4)) * xOffset : 0;
    const depthOffset = visualIndex * DEPTH_SPACING;
    const isTopCard = index === 0;
    const shouldReturn = isTopCard && shouldReturnToCenter;

    return {
      zIndex: cards.length - index,
      scale: scaleValue,
      x: shouldReturn ? 0 : xOffsetValue,
      y: shouldReturn ? 0 : -stackOffset,
      rotate: shouldReturn ? 0 : rotationValue,
      z: -depthOffset,
      opacity: index > 4 ? 0 : 1
    };
  };

  const topCard = cards.length > 0 ? cards[0] : null;

  return (
    <div className="relative w-full flex flex-col items-center py-6 select-none overflow-hidden">
      {/* 3D Stack Stage Container */}
      <div
        style={{
          perspective: `${PERSPECTIVE}px`,
          perspectiveOrigin: "center center"
        }}
        className="w-full min-h-[480px] sm:min-h-[520px] flex items-center justify-center relative touch-pan-y"
      >
        {/* Glow backdrop behind cards */}
        <div className="absolute w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none transform -translate-y-8" />
        <div className="absolute w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none transform translate-x-12 translate-y-6" />

        {/* When repository has no images yet, display the exact JSON response card */}
        {cards.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 15, rotate: tiltAngleStart }}
            animate={{ opacity: 1, y: 0, rotate: tiltAngleStart }}
            transition={{ duration: 0.5 }}
            style={{
              width: `${cardWidth}px`,
              maxWidth: "calc(100vw - 48px)",
              height: `${cardHeight}px`,
              borderRadius: `${cardRadius}px`,
              transformStyle: "preserve-3d"
            }}
            className="rounded-2xl border border-amber-500/30 bg-stone-950/95 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.85),0_0_25px_rgba(245,158,11,0.12)] ring-1 ring-white/10 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden relative"
          >
            {/* Holographic sheen */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-stone-900/40 pointer-events-none" />

            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-stone-800/80 pb-3 relative z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] font-mono text-stone-400">
                Hotwheels_collection
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                loading
              </span>
            </div>

            {/* Formatted JSON content as requested */}
            <div className="py-4 font-mono relative z-10 flex flex-col justify-center">
              <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 mb-2">
                GitHub Response
              </span>
              <pre className="text-stone-300 font-mono text-xs sm:text-sm bg-black/75 p-4 rounded-xl border border-stone-900/90 shadow-inner overflow-x-auto leading-relaxed">
                <code>
                  {"{\n"}
                  {"  "}<span className="text-amber-400">"message"</span>{": "}<span className="text-emerald-400">"soming soon"</span>{",\n"}
                  {"  "}<span className="text-amber-400">"status"</span>{": "}<span className="text-cyan-400">"loading"</span>{"\n"}
                  {"}"}
                </code>
              </pre>
            </div>

            {/* Bottom info & repository link */}
            <div className="pt-3 border-t border-stone-800/80 relative z-10 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                <span>Repository</span>
                <a
                  href={`https://github.com/${githubUsername}/${repoName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>gh/{repoName}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-[11px] text-stone-500 font-light leading-relaxed">
                Add car photos to your repository root to populate the 3D swipe deck.
              </p>
            </div>
          </motion.div>
        ) : (
          /* Card Stack Deck */
          <div
            style={{
              position: "relative",
              width: `${cardWidth}px`,
              maxWidth: "calc(100vw - 48px)",
              height: `${cardHeight}px`
            }}
            className="relative flex items-center justify-center"
          >
            {cards.slice(0, 6).map((card, index) => {
              const isTopCard = index === 0;
              const cardStyle = getCardStyle(index);
              const cardUrl = card.url || card.src || card.download_url;
              const optimizedUrl = getOptimizedImageUrl(cardUrl, {
                width: 640,
                height: 880,
                fit: "cover",
                quality: 85
              });

              return (
                <motion.div
                  key={card.uniqueKey || card.id}
                  drag={isTopCard}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.65}
                  dragMomentum={false}
                  dragTransition={{ bounceStiffness: 300, bounceDamping: 22 }}
                  onPointerDown={isTopCard ? handlePointerDown : undefined}
                  onPointerUp={isTopCard ? handlePointerUp : undefined}
                  onDrag={isTopCard ? (_, info) => setDragDistance(Math.hypot(info.offset.x, info.offset.y)) : undefined}
                  onDragEnd={isTopCard ? (_, info) => handleDragEnd(info) : undefined}
                  animate={cardStyle}
                  transition={{
                    x: transition,
                    y: transition,
                    rotate: transition,
                    scale: transition,
                    zIndex: { duration: 0.25 },
                    opacity: { duration: 0.3 }
                  }}
                  whileDrag={{
                    scale: 1.05,
                    rotate: tiltAngleStart + 4,
                    zIndex: 999
                  }}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: `${cardRadius}px`,
                    cursor: isTopCard ? (isPressed ? "grabbing" : "grab") : "default",
                    transformStyle: "preserve-3d"
                  }}
                  className={`group rounded-2xl overflow-hidden border transition-shadow duration-300 ${
                    isTopCard
                      ? "border-amber-500/40 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_25px_rgba(245,158,11,0.15)] ring-1 ring-white/10"
                      : "border-stone-800/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.7)]"
                  } bg-stone-950`}
                >
                  {/* Pure Background Car Image (no car names or metadata) */}
                  <img
                    src={optimizedUrl}
                    alt="Hot Wheels Collection Item"
                    draggable={false}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />

                  {/* Metallic holographic card sheen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-stone-950/20 pointer-events-none" />

                  {/* Top Card Badge: Index Tag */}
                  <div className="absolute top-3 left-3 z-10 pointer-events-none">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-stone-300 border border-stone-800/80 shadow-sm">
                      #{card.originalIndex !== undefined ? String(card.originalIndex + 1).padStart(2, "0") : String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Click to expand lightbox button on top card */}
                  {isTopCard && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalItem(card);
                      }}
                      className="absolute top-3 right-3 z-20 p-2 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700/60 backdrop-blur-md transition-transform hover:scale-110 active:scale-95 shadow-md"
                      title="Zoom in"
                      aria-label="Zoom Hot Wheels photo"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {/* Subtle drag feedback overlay */}
                  {isTopCard && isPressed && (
                    <div
                      style={{ opacity: Math.min(dragDistance / 100, 0.4) }}
                      className="absolute inset-0 bg-amber-500/20 pointer-events-none transition-opacity"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Interactive Controls & Navigation */}
      <div className="w-full max-w-md px-4 mt-4 flex flex-col items-center gap-3">
        {/* Counter and Buttons Bar */}
        <div className="flex items-center justify-between w-full bg-stone-950/70 border border-stone-900 rounded-full px-4 py-2 backdrop-blur-md">
          {/* Previous Card */}
          <button
            type="button"
            onClick={cyclePrev}
            disabled={cards.length <= 1}
            className="p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-all active:scale-90 disabled:opacity-30 disabled:hover:bg-transparent"
            title="Previous car"
            aria-label="Previous card in stack"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Current Card Indicator */}
          <div className="flex items-center gap-2">
            {cards.length > 0 ? (
              <>
                <span className="text-xs font-mono font-bold text-amber-400 tracking-wider">
                  {String((topCard?.originalIndex ?? 0) + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-mono text-stone-600">/</span>
                <span className="text-[11px] font-mono text-stone-500">
                  {String(items.length).padStart(2, "0")} CARS
                </span>
              </>
            ) : (
              <span className="text-[11px] font-mono text-stone-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                AWAITING ASSETS
              </span>
            )}
          </div>

          {/* Next Card */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={resetStack}
              disabled={cards.length <= 1}
              className="p-2 rounded-full hover:bg-stone-800 text-stone-500 hover:text-stone-300 transition-all active:scale-90 disabled:opacity-30 disabled:hover:bg-transparent"
              title="Reset stack order"
              aria-label="Reset card deck"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={cycleNext}
              disabled={cards.length <= 1}
              className="p-2 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 hover:text-amber-300 border border-amber-500/20 transition-all active:scale-90 disabled:opacity-30 disabled:hover:bg-transparent"
              title="Swipe next"
              aria-label="Next card in stack"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Action hints and GitHub source link */}
        <div className="flex items-center justify-between w-full text-[11px] text-stone-500 px-2">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{cards.length > 0 ? "Swipe or drag card to flick" : "Connects to GitHub repo"}</span>
          </span>

          <a
            href={`https://github.com/${githubUsername}/${repoName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-stone-400 hover:text-amber-300 transition-colors font-mono"
          >
            <span>gh/{repoName}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal for Full Resolution Detail */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalItem(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-white/80 hover:text-white border border-stone-700/50 backdrop-blur-md transition-transform active:scale-90"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[4/3] w-full bg-stone-900 overflow-hidden">
                <img
                  src={getLightboxImageUrl(activeModalItem.url || activeModalItem.src, 1400)}
                  alt="Hot Wheels Full Size"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4 sm:p-5 bg-stone-950 border-t border-stone-900 flex items-center justify-between">
                <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                  Hot Wheels Gallery
                </span>

                <a
                  href={activeModalItem.url || activeModalItem.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-200 text-xs font-mono uppercase tracking-wider border border-stone-800 transition-colors"
                >
                  <span>Open Full Size</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
