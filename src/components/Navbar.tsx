
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface NavbarProps {
  onOpenConsultation: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#who-we-are' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Our Process', href: '#process' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/80 ${
        isScrolled ? 'py-2 shadow-md shadow-slate-900/5' : 'py-3'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Section */}
          <a href="#" className="flex items-center gap-3 group shrink-0 py-1">
            <img
              src="/logo.webp"
              onError={(e) => {
                if (e.currentTarget.src.endsWith('logo.webp')) {
                  e.currentTarget.src = '/logo.png';
                }
              }}
              alt="Harisree Builders & Interiors"
              className="h-10 sm:h-11 max-w-[210px] object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 font-sans">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] xl:text-[15px] font-medium text-[#304654] hover:text-[#226e40] transition-colors py-1.5 relative group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#226e40] rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs xl:text-sm font-semibold text-white bg-[#226e40] hover:bg-[#1b5732] shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 group cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="p-2 rounded-full bg-[#edf7f1] text-[#226e40]"
              aria-label="Call Harisree Builders"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#304654] rounded-lg hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-2xl overflow-hidden text-[#304654]"
          >
            <div className="px-6 py-4 space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={`mobile-${link.name}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-medium text-[#304654] hover:text-[#226e40] transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-semibold text-white bg-[#226e40] shadow-md"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

