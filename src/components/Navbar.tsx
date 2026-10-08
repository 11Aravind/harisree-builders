import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronRight, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface NavbarProps {
  onOpenConsultation: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSubmenu = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#who-we-are' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const projectSubLinks = [
    { name: '3D Exterior Elevations', href: '#projects' },
    { name: 'Luxury Interior Design', href: '#projects' },
    { name: 'Kerala Courtyards & Landscapes', href: '#projects' },
    { name: 'Completed Turnkey Homes', href: '#projects' },
  ];

  const servicesSubLinks = [
    { name: 'Turnkey Residential Construction', href: '#services' },
    { name: '2D Architectural Plans & 3D Renders', href: '#services' },
    { name: 'Authentic Vastu Shastra Consultation', href: '#services' },
    { name: 'Custom Modular Kitchens & Wardrobes', href: '#services' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Switch from transparent over hero to solid white when scrolled down past 60px
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-sans border-none ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 sm:py-4'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 sm:py-6'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Brand Logo Section */}
            <a href="#" className="flex items-center group shrink-0 focus:outline-none">
              <img
                src={!isScrolled ? '/mobile-logo.webp' : '/logo.webp'}
                onError={(e) => {
                  if (e.currentTarget.src.endsWith('mobile-logo.webp')) {
                    e.currentTarget.src = '/logo2.png';
                  } else if (e.currentTarget.src.endsWith('logo.webp')) {
                    e.currentTarget.src = '/logo.png';
                  }
                }}
                alt="Harisree Builders & Interiors"
                className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${isScrolled ? 'h-11 sm:h-12 max-w-[220px]' : 'h-13 sm:h-15 max-w-[270px]'
                  }`}
              />
            </a>

            {/* Center Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 font-sans">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[14px] xl:text-[15px] font-semibold transition-all py-1.5 relative group ${isScrolled
                    ? 'text-[#304654] hover:text-[#226e40]'
                    : 'text-white/95 hover:text-white drop-shadow-sm'
                    }`}
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 rounded-full group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Right Action CTA Button (Desktop) */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => onOpenConsultation()}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-300 active:scale-95 group cursor-pointer ${isScrolled
                  ? 'text-white bg-[#226e40] hover:bg-[#1b5732] shadow-md hover:shadow-lg'
                  : 'text-white bg-[#226e40] hover:bg-[#1b5732] border border-white/30 shadow-lg'
                  }`}
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Actions: 3-Bar Hamburger */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-1 flex flex-col items-center justify-center gap-[5px] transition-all cursor-pointer focus:outline-none"
                aria-label="Toggle menu"
              >
                <span className={`block w-6 h-[2.5px] rounded-full transition-all ${isScrolled ? 'bg-[#304654]' : 'bg-white'}`} />
                <span className={`block w-6 h-[2.5px] rounded-full transition-all ${isScrolled ? 'bg-[#304654]' : 'bg-white'}`} />
                <span className={`block w-6 h-[2.5px] rounded-full transition-all ${isScrolled ? 'bg-[#304654]' : 'bg-white'}`} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen Portal Mobile Drawer Menu (Rendered directly in body with z-[9999]) */}
      {mounted && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              aria-label="Mobile Navigation Menu"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: 'easeInOut' }}
              className="lg:hidden fixed inset-0 z-[9999] w-screen h-[100dvh] bg-white flex flex-col justify-between overflow-hidden font-sans select-none"
            >
              {/* Top Header Bar */}
              <div className="pt-5 px-6 pb-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
                <a href="#" onClick={() => setMobileMenuOpen(false)} className="block">
                  <img
                    src="/logo.webp"
                    onError={(e) => {
                      if (e.currentTarget.src.endsWith('logo.webp')) {
                        e.currentTarget.src = '/logo2.png';
                      }
                    }}
                    alt="Harisree Builders & Interiors"
                    className="h-11 sm:h-12 w-auto max-w-[210px] object-contain"
                  />
                </a>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-800 hover:text-black rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7 stroke-[2.2]" />
                </button>
              </div>

              {/* Main Navigation Links List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1 bg-white">

                {/* 1. Home */}
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-[19px] sm:text-[20px] font-bold text-[#226e40] hover:text-[#1b5732] transition-colors border-b border-slate-50"
                >
                  Home
                </a>

                {/* 2. About Us */}
                <a
                  href="#who-we-are"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-[19px] sm:text-[20px] font-medium text-slate-800 hover:text-[#226e40] transition-colors border-b border-slate-50"
                >
                  About Us
                </a>

                {/* 3. Services */}
                <div className="border-b border-slate-50">
                  <div
                    onClick={() => toggleSubmenu('services')}
                    className="flex items-center justify-between py-3 text-[19px] sm:text-[20px] font-medium text-slate-800 hover:text-[#226e40] transition-colors cursor-pointer"
                  >
                    <span>Services</span>
                    {expandedSection === 'services' ? (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    )}
                  </div>

                  <AnimatePresence>
                    {expandedSection === 'services' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 pb-2 space-y-2 border-l-2 border-emerald-500/30 ml-1 overflow-hidden"
                      >
                        {servicesSubLinks.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 text-sm text-slate-600 hover:text-[#226e40] transition-colors"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 4. Projects */}
                <div className="border-b border-slate-50">
                  <div
                    onClick={() => toggleSubmenu('projects')}
                    className="flex items-center justify-between py-3 text-[19px] sm:text-[20px] font-medium text-slate-800 hover:text-[#226e40] transition-colors cursor-pointer"
                  >
                    <span>Projects</span>
                    {expandedSection === 'projects' ? (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    )}
                  </div>

                  <AnimatePresence>
                    {expandedSection === 'projects' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 pb-2 space-y-2 border-l-2 border-emerald-500/30 ml-1 overflow-hidden"
                      >
                        {projectSubLinks.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 text-sm text-slate-600 hover:text-[#226e40] transition-colors"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 5. Reviews */}
                <a
                  href="#reviews"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-[19px] sm:text-[20px] font-medium text-slate-800 hover:text-[#226e40] transition-colors border-b border-slate-50"
                >
                  Reviews
                </a>

                {/* 6. Contact Us */}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-[19px] sm:text-[20px] font-medium text-slate-800 hover:text-[#226e40] transition-colors border-b border-slate-50"
                >
                  Contact Us
                </a>

              </div>

              {/* Bottom Action Area with Consultation Button & Green Accent Strip */}
              <div className="p-6 pt-3 bg-slate-50 border-t border-slate-100 space-y-3 shrink-0">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-bold text-white bg-[#226e40] hover:bg-[#1b5732] shadow-md active:scale-98 transition-all cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span>Helpline:</span>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold text-[#304654] hover:text-[#226e40]">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Solid Green Bottom Accent Strip */}
              <div className="h-3 w-full bg-[#226e40] shrink-0" />

            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
