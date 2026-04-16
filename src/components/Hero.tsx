import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Hero() {
  const location = useLocation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('/#') && location.pathname === '/') {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-primary">
      <Helmet>
        <title>Cape Turf | Premium Artificial Grass & Astroturf in Cape Town</title>
        <meta name="description" content="Cape Turf provides high-quality artificial grass, astroturf, and synthetic lawns at wholesale rates in Cape Town. Professional supply and fitment services." />
      </Helmet>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://lh3.googleusercontent.com/d/1FOTAbh8_Hysc1x6l0KHOR1LxQcxjbNq9"
          alt="Lush green lawn in Cape Town"
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-accent"></div>
              <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs">
                Est. 2024 • Cape Town
              </span>
              <div className="h-[1px] w-12 bg-accent"></div>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-display font-bold text-white leading-none mb-8 tracking-tighter uppercase">
              CAPE <span className="text-accent">TURF</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
              Premium artificial grass solutions at <span className="text-white font-bold underline decoration-accent underline-offset-4">wholesale rates</span>. 
              Elevating Cape Town's landscapes with evergreen perfection.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              <Link
                to="/#contact"
                onClick={() => handleLinkClick('/#contact')}
                className="bg-accent hover:bg-accent/90 text-primary px-12 py-6 rounded-none font-bold text-sm uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-2xl"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/products"
                className="group flex items-center gap-4 text-white font-bold text-sm uppercase tracking-widest transition-all"
              >
                View Catalog 
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                  <ArrowRight size={20} />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
