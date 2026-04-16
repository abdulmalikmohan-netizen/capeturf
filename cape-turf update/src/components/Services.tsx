import { motion } from 'motion/react';
import { Truck, Ruler, Hammer, Droplets, ShieldCheck, Sun } from 'lucide-react';

const services = [
  {
    title: 'Supply & Delivery',
    description: 'We supply premium grade artificial turf directly to your door across the Western Cape.',
    icon: Truck,
  },
  {
    title: 'Professional Installation',
    description: 'Our expert team handles the entire process, from ground preparation to the final seam.',
    icon: Hammer,
  },
  {
    title: 'Custom Design',
    description: 'Bespoke landscaping solutions tailored to your unique space and aesthetic preferences.',
    icon: Ruler,
  },
  {
    title: 'Water-Wise Solutions',
    description: 'Drought-proof your garden and save on water bills with our eco-friendly turf options.',
    icon: Droplets,
  },
  {
    title: 'UV Protection',
    description: 'All our products are UV stabilized to withstand the harsh South African sun.',
    icon: Sun,
  },
  {
    title: 'Maintenance Services',
    description: 'Keep your turf looking brand new with our professional cleaning and brushing services.',
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img 
          src="https://capeturf.co.za/cdn/shop/files/IMG_7132.jpg?v=1753527680" 
          alt="" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Expertise</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-ink leading-tight">
              Crafting <span className="serif-italic font-light">Seamless</span> <br />
              Outdoor Experiences.
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-gray-500 text-lg leading-relaxed border-l-2 border-accent pl-6">
              From residential sanctuaries to high-performance sports fields, we deliver excellence in every square meter.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
          {/* Bento Item 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-3 lg:col-span-4 bg-secondary p-10 rounded-[2rem] flex flex-col justify-between min-h-[320px] group"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <Truck size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Supply & Delivery</h3>
              <p className="text-gray-600">Premium grade artificial turf supplied directly to your door across the Western Cape.</p>
            </div>
          </motion.div>

          {/* Bento Item 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-3 lg:col-span-8 bg-primary text-white p-10 rounded-[2rem] flex flex-col md:flex-row gap-10 items-center min-h-[320px] group"
          >
            <div className="flex-1">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                <Hammer size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Professional Installation</h3>
              <p className="text-white/70">Our expert team handles the entire process, from ground preparation to the final seam, ensuring a flawless finish.</p>
            </div>
            <div className="flex-1 w-full h-64 md:h-full rounded-xl overflow-hidden block">
              <img src="https://lh3.googleusercontent.com/d/1ujenkxNjZtRjBsbBG5x-CKTv5K8lUnL7" alt="Professional Installation" className="w-full h-full object-cover transition-all duration-700" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          {/* Bento Item 3 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 lg:col-span-7 bg-accent/10 p-10 rounded-[2rem] flex flex-col justify-between min-h-[320px] group border border-accent/20"
          >
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <Ruler size={32} />
              </div>
              <div className="text-accent font-black text-6xl opacity-20">03</div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Custom Design</h3>
              <p className="text-gray-600">Bespoke landscaping solutions tailored to your unique space and aesthetic preferences.</p>
            </div>
          </motion.div>

          {/* Bento Item 4 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 lg:col-span-5 bg-secondary p-10 rounded-[2rem] flex flex-col justify-between min-h-[320px] group"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <Droplets size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Water-Wise</h3>
              <p className="text-gray-600">Drought-proof your garden and save on water bills with eco-friendly turf.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
