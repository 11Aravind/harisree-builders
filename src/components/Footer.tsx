import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceAreas = [
    'Sasthamcotta', 'Muthupilakkadu', 'Karunagappally', 
    'Adoor', 'Kottarakkara', 'Kunnathur', 'Chavara', 'Kollam City'
  ];

  return (
    <footer className="bg-[#FAF9F6] text-slate-600 pt-16 pb-24 lg:pb-12 border-t border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200/80">
          
          {/* Col 1 & 2: Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <img
                src="/logo.webp"
                alt="Harisree Builders & Interiors"
                className="h-12 w-auto max-w-[240px] object-contain transition-transform group-hover:scale-105"
              />
            </a>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Premier Architectural Design, Construction & Vastu Planning Studio in Sasthamcotta, Kollam. Crafting timeless residential spaces with certified engineering precision.
            </p>
          </div>

          {/* Col 3: Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#304654]">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#who-we-are" className="hover:text-[#226e40] transition-colors">About Studio</a></li>
              <li><a href="#services" className="hover:text-[#226e40] transition-colors">Architectural Services</a></li>
              <li><a href="#why-us" className="hover:text-[#226e40] transition-colors">Why Choose Harisree</a></li>
              <li><a href="#projects" className="hover:text-[#226e40] transition-colors">3D Elevations & Portfolio</a></li>
              <li><a href="#process" className="hover:text-[#226e40] transition-colors">Our 4-Step Process</a></li>
              <li><a href="#reviews" className="hover:text-[#226e40] transition-colors">Client Reviews</a></li>
            </ul>
          </div>

          {/* Col 4: Service Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#304654]">Service Regions</h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-slate-600">
              {serviceAreas.map((area) => (
                <li key={area} className="hover:text-[#226e40] transition-colors">
                  • {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#304654]">Direct Contact</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#226e40] shrink-0 mt-0.5" />
                <span>Muthupilakkadu, Sasthamcotta, Kollam, Kerala 690520</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#226e40] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-[#304654] hover:text-[#226e40] font-bold">
                  +91 9633479993
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#226e40] shrink-0" />
                <span>contact@harisreebuilders.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Harisree Builders & Interiors. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-[#edf7f1] text-[#304654] transition-colors shadow-xs cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#226e40]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
