import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Ruler, Check } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      await fetch("https://formsubmit.co/ajax/Capeturf24@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "New Contact Request",
          ...data
        })
      });
      setIsSubmitted(true);
      e.currentTarget.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1590674867571-873552485c70?q=80&w=2000&auto=format&fit=crop" 
          alt="" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/50 -skew-x-12 translate-x-1/4 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get in Touch</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-ink leading-tight mb-8 text-balance">
              Let's <span className="serif-italic font-light text-primary">Transform</span> Your Space.
            </h2>
            <p className="text-gray-500 text-lg mb-12 max-w-md leading-relaxed">
              Whether you're looking for a residential lawn, a commercial project, or wholesale supply, our team is ready to assist.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Call Us</h4>
                  <a href="tel:0624549298" className="text-xl font-display font-bold text-ink hover:text-primary transition-colors">062 454 9298</a>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email Us</h4>
                  <a href="mailto:capeturf24@gmail.com" className="text-xl font-display font-bold text-ink hover:text-primary transition-colors">capeturf24@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Visit Us</h4>
                  <p className="text-xl font-display font-bold text-ink">7 Honeyside West, Crawford</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100"
          >
            <h3 className="text-3xl font-display font-bold text-ink mb-8">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="082 000 0000"
                    className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Service Required</label>
                  <select name="service" required className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none">
                    <option>Installation & Supply</option>
                    <option>Supply Only</option>
                    <option>Maintenance</option>
                    <option>Commercial Project</option>
                    <option>Reseller Application</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Required SQM</label>
                  <div className="relative">
                    <Ruler className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="number" 
                      name="sqm"
                      placeholder="e.g. 50"
                      className="w-full pl-14 pr-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Your Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-secondary border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-xl flex items-center justify-center gap-3 ${
                  isSubmitted 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-primary text-white hover:bg-primary-light shadow-primary/20 transform hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? 'Sending...' : isSubmitted ? <><Check size={20} /> Sent Successfully</> : 'Send Request'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
