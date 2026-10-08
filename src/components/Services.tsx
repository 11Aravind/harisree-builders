import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, FileCheck, Building2, Calculator, Eye, Layers, Armchair, Trees, 
  ArrowUpRight 
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
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#edf7f1] text-[#226e40] text-xs font-semibold uppercase tracking-widest">
            <span>Our Service Portfolio</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#304654] tracking-tight">
            Architectural & <span className="text-[#226e40]">Engineering Services</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            All your home planning, permit approvals, 3D elevation renderings, site supervision, and turnkey interior fit-outs handled under one studio.
          </p>
        </div>

        {/* Services Grid with 5 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner Header */}
                <div className="relative h-40 overflow-hidden bg-slate-900">
                  <img
                    src={service.imageUrl}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80";
                    }}
                    alt={service.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#304654]/70 via-transparent to-transparent" />

                  {/* Icon Badge Top-Left */}
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md text-[#226e40] flex items-center justify-center shadow-md">
                    {getServiceIcon(service.iconName)}
                  </div>

                  {/* Optional Popular Tag Top-Right */}
                  {service.badge && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#226e40] text-white shadow-xs">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Card Body Content */}
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-[#304654] group-hover:text-[#226e40] transition-colors line-clamp-2 leading-snug">
                    {service.titleEn}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenConsultation(service.titleEn)}
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl text-xs font-semibold text-[#226e40] group-hover:text-white bg-[#edf7f1] group-hover:bg-[#226e40] transition-all duration-300 cursor-pointer"
                >
                  <span>Enquire Now</span>
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
