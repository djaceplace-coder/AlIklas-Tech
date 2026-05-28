import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const AnimatedLogo = () => (
  <>
    <style>{`
      .morph-grid-iklas {
        display: grid;
        align-items: center;
        animation: morphGridIklas 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }
      @keyframes morphGridIklas {
        0%, 30% { grid-template-columns: 1fr; margin-left: 0rem; margin-right: 0.35rem; opacity: 1; }
        40%, 65% { grid-template-columns: 0fr; margin-left: 0rem; margin-right: 0rem; opacity: 0; }
        75%, 100% { grid-template-columns: 1fr; margin-left: 0rem; margin-right: 0.35rem; opacity: 1; }
      }

      .morph-iklas-text {
        animation: morphIklasText 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }
      @keyframes morphIklasText {
        0%, 30% { transform: translateX(0); }
        40%, 65% { transform: translateX(-100%); }
        75%, 100% { transform: translateX(0); }
      }
      
      .morph-grid-sun {
        display: grid;
        align-items: center;
        animation: morphGridSun 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }
      @keyframes morphGridSun {
        0%, 35% { grid-template-columns: 0fr; margin-left: 0; opacity: 0; }
        45%, 60% { grid-template-columns: 1fr; margin-left: 0.25rem; opacity: 1; }
        70%, 100% { grid-template-columns: 0fr; margin-left: 0; opacity: 0; }
      }

      .morph-sun-text {
        animation: morphSunText 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }
      @keyframes morphSunText {
        0%, 35% { transform: translateX(100%); }
        45%, 60% { transform: translateX(0); }
        70%, 100% { transform: translateX(100%); }
      }
    `}</style>
    <span className="font-display font-extrabold text-2xl tracking-tighter flex items-center uppercase py-1">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500 mr-2 drop-shadow-sm">⚡</span>
      
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green-100 relative z-10">AL</span>
      
      <span className="morph-grid-iklas overflow-hidden">
        <span className="min-w-0">
          <span className="whitespace-nowrap morph-iklas-text block text-transparent bg-clip-text bg-gradient-to-r from-white to-green-100">-IKLAS</span>
        </span>
      </span>
      
      <span className="text-green-600">TECH</span>
      
      <span className="morph-grid-sun overflow-hidden">
        <span className="min-w-0 text-[20px] leading-none mb-1">
          <span className="whitespace-nowrap morph-sun-text block drop-shadow-md">☀️</span>
        </span>
      </span>
    </span>
  </>
);

export const Navbar: React.FC<{ currentPage: string, setCurrentPage: (page: string) => void }> = ({ currentPage, setCurrentPage }) => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = typeof window !== 'undefined' 
    ? Math.min(100, (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100) 
    : 0;

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'products', label: 'Products' },
    { id: 'calculator', label: 'Calculator' },
    { id: 'blog', label: 'Blog' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 60 ? 'bg-[#020b06]/95 backdrop-blur-xl border-b border-green-500/10' : 'bg-transparent border-transparent py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
              <AnimatedLogo />
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link, idx) => (
                <div 
                  key={link.id} 
                  className={`relative cursor-pointer text-sm font-semibold tracking-wide transition-colors ${mounted ? 'animate-stagger-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${idx * 40}ms` }}
                  onClick={() => handleNavClick(link.id)}
                >
                  <span className={`${currentPage === link.id ? 'text-green-500' : 'text-gray-400 hover:text-green-400'}`}>
                    {link.label}
                  </span>
                  
                  {/* Active/Hover states */}
                  <div className={`absolute -bottom-2 left-0 w-full h-[2px] bg-green-500 transition-transform origin-left duration-300 ${currentPage === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
                  {currentPage === link.id && (
                     <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-green-500 animate-glow-breathe"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => { window.open('https://wa.me/2348166614479', '_blank'); }}
                className="px-5 py-2.5 rounded-lg border border-green-500/40 text-green-400 font-semibold text-sm hover:bg-green-500/10 transition-colors flex items-center gap-2"
              >
                📞 WhatsApp Us
              </button>
              <button 
                onClick={() => handleNavClick('calculator')}
                className="px-5 py-2.5 rounded-lg bg-gradient-brand text-black font-bold text-sm shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all hover:-translate-y-0.5"
              >
                Get Free Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300 hover:text-white p-2">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Removed Progress Bar per user request */}
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#020b06]/98 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto lg:hidden">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-2xl font-display font-bold text-left ${currentPage === link.id ? 'text-green-400 flex items-center gap-3' : 'text-gray-400'}`}
              >
                {currentPage === link.id && <span className="w-2 h-2 rounded-full bg-green-500"></span>}
                {link.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col space-y-4 mt-8">
              <button 
                onClick={() => { window.open('https://wa.me/2348166614479', '_blank'); }}
                className="w-full px-5 py-3 rounded-lg border border-green-500/40 text-green-400 font-semibold text-lg text-center flex items-center justify-center gap-2"
              >
                📞 +234 816 661 4479
              </button>
              <button 
                onClick={() => handleNavClick('calculator')}
                className="w-full px-5 py-4 rounded-lg bg-gradient-brand text-black font-bold text-lg shadow-[0_0_20px_rgba(34,197,94,0.25)] text-center"
              >
                Get Free Quote
              </button>
          </div>
        </div>
      )}
    </>
  );
};

export const Footer: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-[#030f07] border-t border-green-900/40 font-sans mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="space-y-6">
            <div className="font-display font-extrabold tracking-tighter">
              <AnimatedLogo />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nigeria's Premier Solar & Electrical Engineering Authority. Power. Precision. Purpose.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-green-950 border border-green-900/50 flex items-center justify-center text-green-500 hover:bg-green-900 hover:text-white transition-colors">
                  <span className="text-xs font-mono">{social.substring(0,2)}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
             <h4 className="text-green-500 font-bold uppercase tracking-[2px] text-xs mb-6">Quick Links</h4>
             <ul className="space-y-3">
               {['About Us', 'Services', 'Projects', 'Careers', 'Solar Calculator'].map(link => (
                 <li key={link}>
                   <button onClick={() => setCurrentPage(link.split(' ')[0].toLowerCase())} className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2 group">
                     <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-green-400 transition-colors"></span>
                     {link}
                   </button>
                 </li>
               ))}
             </ul>
          </div>

          <div>
             <h4 className="text-green-500 font-bold uppercase tracking-[2px] text-xs mb-6">Contact</h4>
             <ul className="space-y-4 text-sm text-gray-400">
               <li className="flex items-start gap-3">
                 <span className="text-green-500 mt-0.5">📍</span>
                 <span>Apapa, Lagos, Nigeria<br/>Nationwide Services</span>
               </li>
               <li className="flex items-center gap-3">
                 <span className="text-green-500">📞</span>
                 <span>+234 816 661 4479</span>
               </li>
               <li className="flex items-center gap-3">
                 <span className="text-green-500">✉️</span>
                 <span>support@aliklastech.com.ng</span>
               </li>
             </ul>
          </div>

          <div>
            <h4 className="text-green-500 font-bold uppercase tracking-[2px] text-xs mb-6">Certifications</h4>
            <div className="grid grid-cols-2 gap-3">
              {['NEMSA', 'SON', 'ISO 9001', 'COREN', 'REA', 'NAEC'].map(cert => (
                <div key={cert} className="px-3 py-2 bg-[#052e16]/30 border border-green-900/30 rounded inline-flex justify-center text-xs font-mono text-gray-300">
                  {cert}
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-green-900/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Al-Iklas Tech. Engineered in Nigeria.
            </p>
            <p className="text-gray-600/80 text-[10px] uppercase tracking-widest flex items-center justify-center md:justify-start gap-1">
              Imagined by <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] via-[#4ade80] to-[#16a34a] tracking-[0.2em] text-xs lowercase">junestudio</span>
            </p>
          </div>
          <div className="flex space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-green-400">Privacy Policy</a>
            <a href="#" className="hover:text-green-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
