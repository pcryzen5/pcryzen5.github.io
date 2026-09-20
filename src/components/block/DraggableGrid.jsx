import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { getOptimizedImageUrl, getLightboxImageUrl } from "../../lib/imageUtils";

function GridImageItem({ item, isDragging, onSelect }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const thumbUrl = getOptimizedImageUrl(item.url, {
    width: 320,
    height: 320,
    fit: "cover",
    quality: 80,
    format: "webp",
  });

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      onClick={() => {
        if (!isDragging) {
          onSelect(item);
        }
      }}
      className="group relative bg-stone-950 border border-stone-900 rounded-lg overflow-hidden cursor-pointer aspect-square"
    >
      {/* Sleek skeleton shimmer loader while downloading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-stone-900/60 animate-pulse flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-stone-700 border-t-stone-400 rounded-full animate-spin opacity-40" />
        </div>
      )}

      <img
        src={thumbUrl}
        alt="Gallery Item"
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover select-none pointer-events-none transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <ZoomIn className="w-5 h-5 text-white" />
      </div>
    </motion.div>
  );
}

export default function DraggableGrid({ items = [], autoScrollSpeed = 0.5 }) {
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  // Motion values to bind drag offsets
  const x = useMotionValue(-120);
  const y = useMotionValue(-120);

  const [activeItem, setActiveItem] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Floating drift directions
  const dirX = useRef(-1); // -1: left, 1: right
  const dirY = useRef(-1); // -1: up, 1: down

  // RequestAnimationFrame loop for auto-scrolling (float drift) when not dragging
  useEffect(() => {
    let animationFrameId;

    const tick = () => {
      if (!isDragging && containerRef.current && gridRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const gridRect = gridRef.current.getBoundingClientRect();

        const maxLeft = containerRect.width - gridRect.width;
        const maxTop = containerRect.height - gridRect.height;

        // Auto scroll horizontally if grid overflows
        if (maxLeft < 0) {
          let nextX = x.get() + dirX.current * autoScrollSpeed;

          if (nextX <= maxLeft) {
            nextX = maxLeft;
            dirX.current = 1; // Reverse direction to drift right
          } else if (nextX >= 0) {
            nextX = 0;
            dirX.current = -1; // Reverse direction to drift left
          }
          x.set(nextX);
        }

        // Auto scroll vertically if grid overflows
        if (maxTop < 0) {
          let nextY = y.get() + dirY.current * autoScrollSpeed;

          if (nextY <= maxTop) {
            nextY = maxTop;
            dirY.current = 1; // Reverse direction to drift down
          } else if (nextY >= 0) {
            nextY = 0;
            dirY.current = -1; // Reverse direction to drift up
          }
          y.set(nextY);
        }
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging, autoScrollSpeed, x, y]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] md:h-[900px] overflow-hidden bg-black border border-stone-900 rounded-2xl cursor-grab active:cursor-grabbing select-none"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />

      {/* Draggable grid canvas */}
      <motion.div
        ref={gridRef}
        drag
        dragElastic={0.1}
        dragConstraints={containerRef} // Native Framer Motion bounding ref to avoid React state loops
        style={{ x, y }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        className="absolute left-0 top-0 w-[180%] sm:w-[160%] md:w-[140%] p-8 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-3 z-10"
      >
        {items.map((item, index) => (
          <GridImageItem
            key={item.id || index}
            item={item}
            isDragging={isDragging}
            onSelect={setActiveItem}
          />
        ))}
      </motion.div>

      {/* Lightbox Modal (Just Image, No Description) */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/95 flex items-center justify-center p-6 backdrop-blur-md cursor-default"
          >
            {/* Close trigger on background click */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveItem(null)} />

            {/* Magnified Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative z-10 max-w-4xl max-h-[85vh] overflow-hidden rounded-lg shadow-2xl border border-stone-900"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 bg-stone-900/80 hover:bg-stone-850 text-stone-300 p-2 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <img
                src={getLightboxImageUrl(activeItem.url, 1200, 85)}
                alt="Magnified View"
                className="max-w-full max-h-[80vh] object-contain block"
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
