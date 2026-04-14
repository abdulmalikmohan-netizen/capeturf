import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Check, Truck, Shield, MapPin, Ruler, Send, Package, ChevronLeft, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import React, { useState, useEffect } from 'react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [sqm, setSqm] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'collection'>('delivery');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-display font-bold mb-4">Product not found</h2>
        <Link to="/" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="pt-32 pb-20 bg-white">
      <Helmet>
        <title>{`${product.name} | Artificial Grass | Cape Turf`}</title>
        <meta name="description" content={`Buy ${product.name} artificial grass from Cape Turf. ${product.description.substring(0, 120)}...`} />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-12 font-bold uppercase tracking-widest text-xs"
        >
          <ArrowLeft size={16} /> Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 aspect-square bg-secondary"
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImageIndex}
                  src={product.images[activeImageIndex]} 
                  alt={product.name} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {product.onSale && (
                <div className="absolute top-8 left-8 bg-accent text-primary px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl z-10">
                  Special Offer
                </div>
              )}

              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-white transition-all shadow-lg z-10"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-white transition-all shadow-lg z-10"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </motion.div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImageIndex === idx ? 'border-primary shadow-lg scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
              {product.pileHeight} Pile Height
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-ink mb-6 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-display font-bold text-primary">{product.price}</span>
              {product.oldPrice && (
                <span className="text-xl text-gray-400 line-through">{product.oldPrice}</span>
              )}
              <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">/ per m²</span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 text-balance">
              {product.description}
            </p>

            {/* Specifications */}
            {product.specifications && (
              <div className="grid grid-cols-2 gap-6 mb-12 p-8 bg-secondary/30 rounded-3xl border border-secondary">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="text-ink font-bold">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Enquiry Form */}
            <div className="bg-white rounded-[2rem] p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                <h3 className="text-xl font-display font-bold text-ink flex items-center gap-3">
                  <Send size={20} className="text-primary" />
                  {deliveryType === 'delivery' ? 'Request Delivery Quote' : 'Request Collection Quote'}
                </h3>

                <div className="flex bg-secondary p-1 rounded-xl">
                  <button
                    onClick={() => setDeliveryType('delivery')}
                    className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                      deliveryType === 'delivery' ? 'bg-white text-primary shadow-sm' : 'text-gray-400 hover:text-primary'
                    }`}
                  >
                    Delivery
                  </button>
                  <button
                    onClick={() => setDeliveryType('collection')}
                    className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                      deliveryType === 'collection' ? 'bg-white text-primary shadow-sm' : 'text-gray-400 hover:text-primary'
                    }`}
                  >
                    Collection
                  </button>
                </div>
              </div>

              <form onSubmit={handleEnquiry} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                      Required SQM
                    </label>
                    <div className="relative">
                      <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="number" 
                        required
                        value={sqm}
                        onChange={(e) => setSqm(e.target.value)}
                        placeholder="e.g. 50"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  {deliveryType === 'delivery' ? (
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                        Delivery Address
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          type="text" 
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Suburb, Cape Town"
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                        Collection Point
                      </label>
                      <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl border border-dashed border-primary/20">
                        <Package className="text-primary shrink-0" size={18} />
                        <span className="text-xs font-bold text-ink">7 Honeyside West, Crawford</span>
                      </div>
                    </div>
                  )}
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 ${
                    isSubmitted 
                      ? 'bg-green-500 text-white' 
                      : 'bg-primary text-white hover:bg-primary-light shadow-xl shadow-primary/20'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <Check size={20} /> Enquiry Sent Successfully
                    </>
                  ) : (
                    'Enquire Now'
                  )}
                </button>
              </form>
              
              <div className="mt-6 flex items-center justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <div className="flex items-center gap-2">
                  <Truck size={14} className="text-primary" /> 
                  {deliveryType === 'delivery' ? 'Fast Delivery' : 'Instant Pickup'}
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-primary" /> 8 Year Warranty
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
