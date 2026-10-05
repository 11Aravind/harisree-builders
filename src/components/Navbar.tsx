import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface NavbarProps {
  onOpenConsultation: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectItems = [
    { title: 'Luxury Villas', desc: 'Custom 4-5 BHK Sasthamcotta Villas', href: '#projects' },
    { title: 'Contemporary Residences', desc: 'Modern Climate-Adapted Homes', href: '#projects' },
    { title: 'Ongoing Construction', desc: 'Projects currently under build', href: '#projects' },
    { title: 'Completed Landmarks', desc: 'Finished architectural works', href: '#projects' },
  ];

  const serviceItems = [
    { title: 'Architectural Design & Blueprints', href: '#services' },
    { title: '3D Elevation & Virtual Tours', href: '#services' },
    { title: 'Bespoke Modular Interiors', href: '#services' },
    { title: 'Certified Vastu Consultation', href: '#services' },
    { title: 'Turnkey Construction & Supervision', href: '#services' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/80 ${
        isScrolled ? 'py-2.5 shadow-md shadow-slate-900/5' : 'py-3.5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Section */}
          <a href="#" className="flex items-center gap-3 group shrink-0 py-1">
            <img
              src="/logo.webp"
              alt="Harisree Builders & Interiors"
              className="h-10 sm:h-12 max-w-[220px] object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-sans">
            
            {/* 1. Home (Active) */}
            <a
              href="#"
              className="text-[15px] font-semibold text-[#226e40] hover:text-[#1b5732] transition-colors py-2 relative"
            >
              Home
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#226e40] rounded-full" />
            </a>

            {/* 2. Projects (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setProjectsDropdownOpen(true)}
              onMouseLeave={() => setProjectsDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-[15px] font-medium text-[#304654] hover:text-[#226e40] transition-colors py-2 cursor-pointer"
                onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
              >
                <span>Projects</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${projectsDropdownOpen ? 'rotate-180 text-[#226e40]' : ''}`} />
              </button>

              <AnimatePresence>
                {projectsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 mt-1 text-[#304654] space-y-1"
                  >
                    {projectItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setProjectsDropdownOpen(false)}
                        className="block p-2.5 rounded-xl hover:bg-[#edf7f1] transition-colors group"
                      >
                        <p className="text-xs font-semibold text-[#304654] group-hover:text-[#226e40]">{item.title}</p>
                        <p className="text-[11px] text-slate-400">{item.desc}</p>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. About Us */}
            <a
              href="#who-we-are"
              className="text-[15px] font-medium text-[#304654] hover:text-[#226e40] transition-colors py-2"
            >
              About Us
            </a>

            {/* 4. Virtual Tours */}
            <a
              href="#transformation"
              className="text-[15px] font-medium text-[#304654] hover:text-[#226e40] transition-colors py-2"
            >
              Virtual Tours
            </a>

            {/* 5. Offers */}
            <a
              href="#why-us"
              className="text-[15px] font-medium text-[#304654] hover:text-[#226e40] transition-colors py-2"
            >
              Offers
            </a>

            {/* 6. Services (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-[15px] font-medium text-[#304654] hover:text-[#226e40] transition-colors py-2 cursor-pointer"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#226e40]' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 mt-1 text-[#304654] space-y-1"
                  >
                    {serviceItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          onOpenConsultation(item.title);
                        }}
                        className="block p-2 rounded-xl text-xs font-medium text-[#304654] hover:bg-[#edf7f1] hover:text-[#226e40] transition-colors"
                      >
                        {item.title}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 7. Insights */}
            <a
              href="#reviews"
              className="text-[15px] font-medium text-[#304654] hover:text-[#226e40] transition-colors py-2"
            >
              Insights
            </a>

            {/* 8. Contact Us */}
            <a
              href="#contact"
              className="text-[15px] font-medium text-[#304654] hover:text-[#226e40] transition-colors py-2"
            >
              Contact Us
            </a>

          </nav>

          {/* Right Action CTA Button (Exact Pill Shape) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#226e40] hover:bg-[#1b5732] shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 group cursor-pointer"
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
            <div className="px-6 py-5 space-y-3">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-[#226e40]"
              >
                Home
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-[#304654]"
              >
                Projects
              </a>
              <a
                href="#who-we-are"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-[#304654]"
              >
                About Us
              </a>
              <a
                href="#transformation"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-[#304654]"
              >
                Virtual Tours
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-[#304654]"
              >
                Offers
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-[#304654]"
              >
                Services
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-[#304654]"
              >
                Insights
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-[#304654]"
              >
                Contact Us
              </a>

              <div className="pt-3">
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
