import { Instagram, Facebook, Twitter, Phone, Mail, MapPin, Star, Leaf } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
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
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-grass/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="https://lh3.googleusercontent.com/d/1HhyHEWjAQaAFqi6CHvXWqPLG-gEsn_pW" 
                alt="Cape Turf Logo" 
                className="h-32 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-white/70 leading-relaxed max-w-xs">
              Cape Turf provides high-quality artificial grass solutions with professional supply and fitment services across South Africa.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61557041974009#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/capeturf24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Instagram size={20} />
              </a>
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">5.0 Rating</span>
              </div>
              <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Verified Google Reviews</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/#services" onClick={() => handleLinkClick('/#services')} className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Product Range</Link></li>
              <li><Link to="/#gallery" onClick={() => handleLinkClick('/#gallery')} className="hover:text-white transition-colors">Our Gallery</Link></li>
              <li><Link to="/#contact" onClick={() => handleLinkClick('/#contact')} className="hover:text-white transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-8">Turf Solutions</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/products" className="hover:text-white transition-colors">Residential Lawns</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Commercial Turf</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Pet-Friendly Grass</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Putting Greens</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Play Area Surfaces</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6 text-white/70">
              <li className="flex items-start gap-4">
                <Phone size={20} className="text-grass shrink-0" />
                <a href="tel:0624549298" className="hover:text-white transition-colors">062 454 9298</a>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={20} className="text-grass shrink-0" />
                <a href="mailto:capeturf24@gmail.com" className="hover:text-white transition-colors">capeturf24@gmail.com</a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-grass shrink-0" />
                <span>7 Honeyside West, Crawford, Cape Town</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Cape Turf. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
