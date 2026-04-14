import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, Filter, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';

export default function Catalog() {
  const [pileHeightFilter, setPileHeightFilter] = useState<string>('All');
  const [onSaleFilter, setOnSaleFilter] = useState<boolean | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pileHeights = useMemo(() => {
    const heights = ['All', ...new Set(products.map(p => p.pileHeight))];
    return heights.sort((a, b) => {
      if (a === 'All') return -1;
      if (b === 'All') return 1;
      return parseInt(a) - parseInt(b);
    });
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesHeight = pileHeightFilter === 'All' || product.pileHeight === pileHeightFilter;
      const matchesSale = onSaleFilter === null || product.onSale === onSaleFilter;
      return matchesHeight && matchesSale;
    });
  }, [pileHeightFilter, onSaleFilter]);

  return (
    <div className="pt-32 pb-20 bg-secondary min-h-screen">
      <Helmet>
        <title>Artificial Grass Catalog | Wholesale Astroturf | Cape Turf</title>
        <meta name="description" content="Browse our full catalog of premium artificial grass and astroturf. From 13mm to 40mm pile heights, find the perfect synthetic lawn for your residential or commercial project." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Full Catalog</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-ink leading-tight">
              Premium <span className="serif-italic font-light text-primary">Wholesale</span> <br />
              Turf Selection.
            </h1>
          </div>
          <div className="pb-4">
            <Link
              to="/reseller-application"
              className="group flex items-center gap-3 text-primary font-bold text-sm uppercase tracking-widest"
            >
              Become a Reseller
              <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Info size={18} />
              </div>
            </Link>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-12 p-6 bg-white rounded-[2rem] shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary">
                <Filter size={20} />
              </div>
              <span className="font-display font-bold text-ink uppercase tracking-widest text-sm">Filter By</span>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-3 bg-secondary/50 p-1.5 rounded-2xl">
                {pileHeights.map((height) => (
                  <button
                    key={height}
                    onClick={() => setPileHeightFilter(height)}
                    className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                      pileHeightFilter === height
                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                        : 'text-gray-400 hover:text-primary'
                    }`}
                  >
                    {height}
                  </button>
                ))}
              </div>

              <div className="h-8 w-[1px] bg-gray-200 hidden lg:block mx-2"></div>

              <div className="flex items-center gap-3 bg-secondary/50 p-1.5 rounded-2xl">
                <button
                  onClick={() => setOnSaleFilter(null)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                    onSaleFilter === null
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'text-gray-400 hover:text-primary'
                  }`}
                >
                  All Status
                </button>
                <button
                  onClick={() => setOnSaleFilter(true)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                    onSaleFilter === true
                      ? 'bg-accent text-primary shadow-lg shadow-accent/20'
                      : 'text-gray-400 hover:text-primary'
                  }`}
                >
                  On Sale
                </button>
              </div>

              {(pileHeightFilter !== 'All' || onSaleFilter !== null) && (
                <button
                  onClick={() => {
                    setPileHeightFilter('All');
                    setOnSaleFilter(null);
                  }}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-600 transition-all ml-2"
                >
                  <X size={14} /> Reset
                </button>
              )}
            </div>

            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Showing <span className="text-primary">{filteredProducts.length}</span> Products
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col border border-gray-100"
              >
                <Link to={`/product/${product.id}`} className="relative h-64 overflow-hidden block">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <div className="glass px-3 py-1.5 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">
                      {product.pileHeight}
                    </div>
                    {product.onSale && (
                      <div className="bg-accent text-primary px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                        Sale
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-xl font-display font-bold text-ink mb-3 line-clamp-1 hover:text-primary transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2 h-10 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-2xl font-display font-bold text-primary">{product.price}</span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                      )}
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest ml-1">/ m²</span>
                    </div>
                    
                    <Link 
                      to={`/product/${product.id}`}
                      className="block w-full py-4 rounded-xl bg-secondary text-primary text-xs font-bold uppercase tracking-[0.2em] text-center hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
