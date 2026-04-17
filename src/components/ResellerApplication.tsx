import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building2, Mail, MapPin, Phone, User, Send, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function ResellerApplication() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    location: '',
    businessType: '',
    about: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("https://formsubmit.co/ajax/Capeturf24@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "New Reseller Application",
          ...formData
        })
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          location: '',
          businessType: '',
          about: ''
        });
      }, 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <Helmet>
        <title>Become a Reseller | Wholesale Artificial Grass | Cape Turf</title>
        <meta name="description" content="Join the Cape Turf network. Apply to become a reseller and offer your clients premium artificial grass solutions at exclusive wholesale rates in South Africa." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Partner With Us</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-ink mb-6">
              Reseller <span className="serif-italic font-light text-primary">Application</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join the Cape Turf network and offer your clients premium artificial grass solutions at exclusive wholesale rates.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-secondary/30 rounded-[3rem] p-8 md:p-12 border border-secondary relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Business / Company Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Business / Company Name</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Cape Landscapes Pty Ltd"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="082 123 4567"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Location / City */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Location / City</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Cape Town"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Type of Business */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Type of Business</label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <select
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm appearance-none text-gray-700"
                  >
                    <option value="" disabled>Select business type</option>
                    <option value="Installer">Installer</option>
                    <option value="Retailer">Retailer</option>
                    <option value="Landscaper">Landscaper</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tell us about your business */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Tell us about your business</label>
              <textarea
                name="about"
                required
                value={formData.about}
                onChange={handleChange}
                rows={4}
                placeholder="Briefly describe your business and how you plan to use or sell Cape Turf products..."
                className="w-full p-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full py-5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 mt-8 ${
                isSubmitted
                  ? 'bg-green-500 text-white'
                  : 'bg-primary text-white hover:bg-primary-light shadow-xl shadow-primary/20'
              }`}
            >
              {isSubmitting ? (
                'Submitting...'
              ) : isSubmitted ? (
                <>
                  <Check size={20} /> Application Submitted
                </>
              ) : (
                <>
                  <Send size={20} /> Submit Application
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
