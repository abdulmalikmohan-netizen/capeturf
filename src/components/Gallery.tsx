import { motion, AnimatePresence } from 'motion/react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const galleryItems = [
  {
    title: 'Premium Residential Installation',
    image: 'https://capeturf.co.za/cdn/shop/files/watermarkPhoto-12_1.jpg?v=1746629690',
  },
  {
    title: 'Modern Home Courtyard',
    image: 'https://capeturf.co.za/cdn/shop/files/IMG_9273.jpg?v=1774277911',
  },
  {
    title: 'Backyard / Garden Installation',
    image: 'https://capeturf.co.za/cdn/shop/files/IMG_5833.jpg?v=1753195480',
  },
  {
    title: 'Professional Sports Surface',
    image: 'https://capeturf.co.za/cdn/shop/files/IMG_6486_e8edbdc0-b400-44ee-97da-4502a626a080.jpg?v=1745185992',
  },
  {
    title: 'Primary School Play Park',
    image: 'https://capeturf.co.za/cdn/shop/files/IMG_7132.jpg?v=1753527680',
  },
  {
    title: 'Lush Family Garden',
    image: 'https://capeturf.co.za/cdn/shop/files/IMG_9345.jpg?v=1774277897',
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + galleryItems.length) % galleryItems.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="gallery" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-ink">
            Recent <span className="serif-italic font-light text-primary">Installations</span>
          </h2>
        </div>

        <div className="relative h-[400px] md:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl group bg-secondary" ref={constraintsRef}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={constraintsRef}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={galleryItems[currentIndex].image}
                alt={galleryItems[currentIndex].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-12 md:p-20">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-white font-display font-bold text-3xl md:text-5xl mb-4">{galleryItems[currentIndex].title}</h4>
                  <p className="text-accent text-lg font-medium tracking-widest uppercase flex items-center gap-3">
                    <Camera size={20} /> Cape Turf Excellence
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all z-20 opacity-0 group-hover:opacity-100"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={32} />
          </button>
          <button
            className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all z-20 opacity-0 group-hover:opacity-100"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={32} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {galleryItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === idx ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
