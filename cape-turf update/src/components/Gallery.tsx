import { motion, AnimatePresence } from 'motion/react';
import { Camera, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

const galleryItems = [
  {
    title: 'Residential Backyard Transformation',
    before: 'https://lh3.googleusercontent.com/d/1u0WXoxf0q4kxzu_We71jrtloutKTuyr9',
    after: 'https://lh3.googleusercontent.com/d/1GCfKIhmsdX9wZWduL7lYeBdFuChJDEHN',
  },
  {
    title: 'Modern Courtyard Upgrade',
    before: 'https://lh3.googleusercontent.com/d/1L5rwvNRz0Fesz6rCKnUwua_elhXZNWzY',
    after: 'https://lh3.googleusercontent.com/d/1FOTAbh8_Hysc1x6l0KHOR1LxQcxjbNq9',
  },
  {
    title: 'Play Area Renovation',
    before: 'https://lh3.googleusercontent.com/d/1H3dShiltU407cO-vwJZD4P8tdQ6-1eD5',
    after: 'https://lh3.googleusercontent.com/d/1OaYFjtOtYdfjpYCVvih_1WEpT6sPXrye',
  },
  {
    title: 'Luxury Estate Lawn',
    before: 'https://lh3.googleusercontent.com/d/1RPfMyf3STD_ECdMK1Vz22192CeP2ICIh',
    after: 'https://lh3.googleusercontent.com/d/1E_n9B4FJT3hYmHwTy6lbYKmgUbnccV0E',
  },
  {
    title: 'Family Entertainment Area',
    before: 'https://lh3.googleusercontent.com/d/1BBhdKDTTtbRHpOASkm8lvIhjpBCb4qLU',
    after: 'https://lh3.googleusercontent.com/d/1pYmLRYkvPEU7xmJ1p9PHMDeSWME1Pxp8',
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

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-ink">
            Before & <span className="serif-italic font-light text-primary">After</span>
          </h2>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Info size={18} className="text-primary" />
            Drag the slider to see the transformation
          </p>
        </div>

        <div className="relative h-[315px] md:h-[455px] w-full lg:w-[70%] mx-auto rounded-[3rem] overflow-hidden shadow-2xl group bg-secondary">
          <AnimatePresence initial={false} custom={direction} mode="wait">
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
              className="absolute inset-0 w-full h-full"
            >
              <BeforeAfterSlider 
                beforeImage={galleryItems[currentIndex].before}
                afterImage={galleryItems[currentIndex].after}
                title={galleryItems[currentIndex].title}
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-8 md:p-12 pointer-events-none">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-white font-display font-bold text-2xl md:text-4xl mb-3">{galleryItems[currentIndex].title}</h4>
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
