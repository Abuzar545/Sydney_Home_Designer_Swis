
import React from 'react';

import { 
  PhoneCall, 
  MailOpen, 
  MapPin, 
  X, 
 
  ArrowRight 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-10 px-6 overflow-hidden font-sans">
      
      {/* Background Watermark */}
      <div className="absolute top-0 right-0 text-[12vw] font-black text-white/[0.02] select-none leading-none translate-y-[-10%] translate-x-[10%] pointer-events-none">
        SYDNEY
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter mb-4">
                SYDNEY DESIGNER <span className="text-gray-500 font-light text-xl">HOMES</span>
              </h2>
              <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
                Crafting luxury spaces that define modern living. Experience excellence in architectural design and construction.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-200">Subscribe to Updates</p>
              <div className="flex border-b border-white/90 pb-2 group focus-within:border-white transition-all max-w-sm">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-transparent border-none outline-none w-full text-sm placeholder:text-gray-600 py-2"
                />
                <button className="text-gray-400 hover:text-white transition-colors p-2">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">Company</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Our Projects</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">Legal</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Order Policy</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">Get In Touch</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4 text-gray-400 hover:text-white transition">
                <MapPin size={18} className="mt-1 shrink-0" />
                <address className="not-italic text-sm leading-relaxed">
                  11 Lamington Circuit,<br />North Kellyville NSW 2155
                </address>
              </div>
              <div className="flex items-center gap-4 text-gray-400 hover:text-white transition">
                <PhoneCall size={18} className="shrink-0" />
                <a href="tel:1300574235" className="text-sm">1300 574 235</a>
              </div>
              <div className="flex items-center gap-4 text-gray-400 hover:text-white transition">
                <MailOpen size={18} className="shrink-0" />
                <a href="mailto:info@sydneydesignerhomes.com.au" className="text-sm truncate">info@sydneydesignerhomes.com.au</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[11px] uppercase tracking-widest text-gray-100 text-center md:text-left">
            <p>© {currentYear} Sydney Designer Home. Developed by Swismax Solutions.</p>
          </div>
          
          <div className="flex gap-4">
             <a href="#" className="p-2.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10
              transition-all"><X size={18} /></a>
              <a href="#" className="hover:text-pink-400 transition p-2.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10
              transition-all">📸</a>
            <a href="#" className="hover:text-green-500 transition p-2.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10
              transition-all">💬</a>
            <a href="#" className="hover:text-red-500 transition p-2.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10
              transition-all">▶️</a>
            <a href="#" className="hover:text-blue-600 transition p-2.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10
              transition-all">🅕</a>
            <a href="#" className="hover:text-blue-500 transition p-2.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10
              transition-all">in</a>
           </div>
        </div>
      </div>
    </footer>
  );
}