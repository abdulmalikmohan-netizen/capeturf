import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Products() {
  // Select a few featured products (e.g., first 4)
  const featuredProducts = products.slice(0, 4);

  return (
    <section id="products" className="py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Featured Products</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-ink leading-tight">
              Premium <span className="serif-italic font-light text-primary">Wholesale</span> <br />
              Turf Selection.
            </h2>
          </div>
          <div className="pb-4">
            <Link
              to="/products"
              className="group flex items-center gap-3 text-primary font-bold text-sm uppercase tracking-widest"
            >
              View Full Catalog
              <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
        </div>
        
        <div className="mt-16 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary-light transition-all shadow-xl shadow-primary/20"
          >
            Explore All Products <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

