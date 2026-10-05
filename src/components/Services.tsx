import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, FileCheck, Building2, Calculator, Eye, Layers, Armchair, Trees, 
  ArrowUpRight, CheckCircle2, Sparkles 
} from 'lucide-react';
import { SERVICES } from '../data/landingData';

interface ServicesProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Calculator':
        return <Calculator className="w-5 h-5" />;
      case 'Eye':
        return <Eye className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Armchair':
        return <Armchair className="w-5 h-5" />;
      case 'Trees':
        return <Trees className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#edf7f1] text-[#226e40] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Service Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#304654] tracking-tight">
            Comprehensive Architectural & <span className="text-[#226e40]">Engineering Services</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            All your home planning, permit approvals, 3D elevation renderings, site supervision, and turnkey interior fit-outs handled under one studio.
          </p>
        </div>

        {/* 8 Services Grid with High-Res Background Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Top Image Showcase Header with Hover Zoom */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={service.imageUrl}
                  alt={service.titleEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#304654]/90 via-[#304654]/40 to-transparent" />

                {/* Top Floating Badge */}
                {service.badge ? (
                  <span className="absolute top-3.5 right-3.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#226e40] text-white shadow-md">
                    {service.badge}
                  </span>
                ) : (
                  <span className="absolute top-3.5 right-3.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 text-[#304654] backdrop-blur-md">
                    0{idx + 1}
                  </span>
                )}

                {/* Icon Container Overlay */}
                <div className="absolute bottom-3 left-4 flex items-center gap-2.5 text-white">
                  <div className="w-10 h-10 rounded-xl bg-[#226e40] text-white flex items-center justify-center shadow-lg">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-bold text-[#edf7f1] uppercase tracking-wide">
                    Service 0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#304654] group-hover:text-[#226e40] transition-colors mb-2 leading-snug">
                    {service.titleEn}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features Checklist */}
                  <ul className="space-y-1.5 mb-2">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#226e40] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inquire Action Button */}
                <button
                  onClick={() => onOpenConsultation(service.titleEn)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-[#304654] group-hover:text-white bg-slate-100 group-hover:bg-[#226e40] transition-all duration-300 shadow-xs cursor-pointer"
                >
                  <span>Book Service Consultation</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
