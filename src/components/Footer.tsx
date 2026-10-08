import React from 'react';
import { 
  Phone, Mail, MapPin, ArrowUp, Clock, 
  Compass, ShieldCheck, Award, ArrowRight, ExternalLink
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/landingData';

interface FooterProps {
  onOpenConsultation?: (serviceTitle?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceAreas = [
    'Sasthamcotta', 'Muthupilakkadu', 'Karunagappally', 
    'Adoor', 'Kottarakkara', 'Kunnathur', 
    'Chavara', 'Kollam City', 'Kadampanad', 
    'Sooranad', 'Bharanikavu', 'Kundara'
  ];

  const servicesList = [
    { name: '2D Drafting & Sanction Blueprints', href: '#services' },
    { name: '3D Photorealistic Exterior Elevations', href: '#services' },
    { name: 'Full Turnkey Civil Construction', href: '#services' },
    { name: 'Authentic Vastu Shastra Consultation', href: '#services' },
    { name: 'Bespoke Modular Kitchens & Interiors', href: '#services' },
    { name: 'Landscape Design & Paved Courtyards', href: '#services' },
    { name: 'Panchayat & Bank Loan Estimation', href: '#services' }
  ];

  const quickLinks = [
    { name: 'About Our Studio', href: '#who-we-are' },
    { name: 'Featured Projects & Gallery', href: '#projects' },
    { name: 'Our 4-Step Working Process', href: '#process' },
    { name: 'Why Homeowners Choose Us', href: '#why-us' },
    { name: 'Client Reviews & Stories', href: '#reviews' },
    { name: 'Frequently Asked Questions', href: '#faq' },
    { name: 'Contact & Plot Visit Request', href: '#contact' }
  ];

  return (
    <>
      {/* 1. Pre-Footer Call-To-Action Banner (Clean White Background) */}
      <section className="bg-[#FAF9F6] py-10 lg:py-14 relative font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#1b3b2b] via-[#1a3328] to-[#162722] border border-emerald-500/20 p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            {/* Background pattern accent */}
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-2 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>Complimentary Plot Evaluation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Ready to Build Your Dream Home in Kollam?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our certified architects & Vastu engineers for a personalized plot visit, 3D design brief, and transparent cost estimate.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              {onOpenConsultation && (
                <button
                  onClick={() => onOpenConsultation()}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#226e40] hover:bg-[#1b5732] shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/60 transition-all active:scale-95 cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
              
              <a
                href={`https://wa.me/919633479993?text=${encodeURIComponent('Hi Harisree Builders, I would like to consult with an engineer regarding my house plan.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md transition-all active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600/60 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Footer */}
      <footer className="bg-[#15232d] text-slate-300 font-sans relative overflow-hidden">
        {/* Decorative top ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#226e40]/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-700/60">
          
          {/* Col 1: Brand & Credentials (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="inline-block group">
              <div className="bg-white/95 px-4 py-2.5 rounded-2xl shadow-md border border-white/20 inline-block transition-transform group-hover:scale-105">
                <img
                  src="/logo.webp"
                  onError={(e) => {
                    if (e.currentTarget.src.endsWith('logo.webp')) {
                      e.currentTarget.src = '/logo.png';
                    }
                  }}
                  alt="Harisree Builders & Interiors"
                  className="h-10 w-auto max-w-[220px] object-contain"
                />
              </div>
            </a>

            <p className="text-sm text-slate-300 leading-relaxed pr-2">
              Sasthamcotta’s premier architectural planning, 3D exterior elevation, and turnkey civil construction studio. Delivering authentic Vastu-compliant homes with engineered precision across Kollam & Pathanamthitta.
            </p>

            {/* Trust Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-3 text-center">
                <div className="text-lg font-extrabold text-emerald-400">{COMPANY_INFO.experienceYears}</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Years Experience</div>
              </div>
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-3 text-center">
                <div className="text-lg font-extrabold text-emerald-400">{COMPANY_INFO.projectsCompleted}</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Projects Handed Over</div>
              </div>
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-3 text-center">
                <div className="text-lg font-extrabold text-emerald-400">100%</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Vastu Compliant</div>
              </div>
            </div>

            {/* Certified Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Licensed Engineers</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>KBR Sanction Certified</span>
              </span>
            </div>
          </div>

          {/* Col 2: Services Offered (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-3">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {servicesList.map((service, idx) => (
                <li key={idx}>
                  <a 
                    href={service.href}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 group-hover:bg-emerald-400 transition-colors shrink-0" />
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-emerald-400 transition-colors shrink-0" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Studio Location & Direct Contact (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-3">
              Studio & Contact
            </h4>
            
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Head Office & Studio</p>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-emerald-400 transition-colors block mt-0.5 leading-relaxed"
                  >
                    Muthupilakkadu, Sasthamcotta, Kollam, Kerala 690520
                  </a>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:underline mt-1 font-semibold"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-slate-400 text-[11px]">Direct Engineer Consultation</p>
                  <a 
                    href={`tel:${COMPANY_INFO.phoneRaw}`} 
                    className="text-white hover:text-emerald-400 font-bold text-sm transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-slate-400 text-[11px]">Email Inquiries</p>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`} 
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Working Hours</p>
                  <p className="text-slate-300">{COMPANY_INFO.workingHours}</p>
                  <p className="text-[11px] text-slate-400">Sunday by prior appointment</p>
                </div>
              </div>

              {/* Social Connect Icons */}
              <div className="pt-2 flex items-center gap-2.5">
                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all border border-slate-700 shadow-sm group"
                  aria-label="Facebook Page"
                >
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#25D366] text-white flex items-center justify-center transition-all border border-slate-700 shadow-sm group"
                  aria-label="WhatsApp Contact"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white transition-transform group-hover:scale-110" />
                </a>

                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#EA4335] text-white flex items-center justify-center transition-all border border-slate-700 shadow-sm group"
                  aria-label="Google Maps Location"
                >
                  <MapPin className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Service Regions Grid Strip */}
        <div className="py-6 border-b border-slate-700/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="shrink-0 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Key Service Regions:
            </h5>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
            {serviceAreas.map((area, idx) => (
              <span key={area} className="inline-flex items-center">
                <span className="hover:text-emerald-400 transition-colors">{area}</span>
                {idx < serviceAreas.length - 1 && (
                  <span className="text-slate-600 mx-1.5">•</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* 4. Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Harisree Builders & Interiors. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-600">|</span>
            <p className="text-slate-500">Architectural Drafting, Civil Construction & Vastu Studio, Sasthamcotta</p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/50 text-white transition-all shadow-md active:scale-95 cursor-pointer group"
            aria-label="Scroll back to top of the page"
          >
            <span className="text-xs font-semibold">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
    </>
  );
};
