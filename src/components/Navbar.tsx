import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, Leaf } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Reseller', href: '/reseller-application' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="group flex items-center gap-3">
              <img 
                src="https://lh3.googleusercontent.com/d/1HhyHEWjAQaAFqi6CHvXWqPLG-gEsn_pW" 
                alt="Cape Turf Logo" 
                className="h-24 w-auto object-contain transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                  isScrolled || location.pathname !== '/' ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={() => handleLinkClick('/#contact')}
              className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled || location.pathname !== '/' ? 'text-primary' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a
                  href="tel:0624549298"
                  className="flex items-center gap-2 text-primary font-semibold px-3"
                >
                  <Phone size={18} /> 062 454 9298
                </a>
                <Link
                  to="/#contact"
                  onClick={() => handleLinkClick('/#contact')}
                  className="w-full bg-primary text-white text-center py-3 rounded-lg font-bold"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
