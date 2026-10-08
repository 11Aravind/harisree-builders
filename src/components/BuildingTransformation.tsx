import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const BuildingTransformation: React.FC = () => {
  const stages = [
    {
      step: '01',
      title: 'Foundation & Steel Skeleton',
      subtitle: 'Soil Testing, Ground Excavation & RCC Footing',
      description: 'Precision engineering grid layout, deep foundation footing, anti-termite ground barrier treatment, and Grade-53 TMT 550D steel column framing.',
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85',
      badge: 'Phase 1: Ground Skeleton',
      metrics: [
        { label: 'Soil Audit', value: '100% Certified' },
        { label: 'Steel Grade', value: 'Tata TMT 550D' },
        { label: 'Footing Depth', value: '6.5 Feet Reinforced' },
      ]
    },
    {
      step: '02',
      title: 'Masonry & Outer Framing',
      subtitle: 'Red Brick Wall Casting, Beams & Concrete Slabs',
      description: 'First-class wire-cut brick masonry, thermal insulated concrete slab roofing, perimeter lintel beam alignment, and Kerala building permit compliance.',
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85',
      badge: 'Phase 2: Outer Framing',
      metrics: [
        { label: 'Brick Quality', value: 'Wire-Cut Red Clay' },
        { label: 'Slab Thickness', value: '150mm Grade RCC' },
        { label: 'Permit Status', value: 'KBR Approved' },
      ]
    },
    {
      step: '03',
      title: 'Waterproofing & 3D Exterior Elevation',
      subtitle: 'Plastering, Concealed Wiring & Weatherproof Coating',
      description: 'Double-coat waterproof barrier coating, concealed copper wiring channels, premium plumbing lines, and photorealistic exterior elevation finishing.',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      badge: 'Phase 3: Exterior & Utilities',
      metrics: [
        { label: 'Waterproofing', value: '3-Coat Polymer' },
        { label: 'Concealed Wire', value: 'Finolex / Havells' },
        { label: 'Elevation Finish', value: 'Weather-Shield Paint' },
      ]
    },
    {
      step: '04',
      title: 'Turnkey Luxury Interior & Handover',
      subtitle: 'Modular Kitchen, False Ceiling, Lighting & Key Handover',
      description: 'Bespoke marine-ply modular kitchen, gypsum false ceilings, ambient LED lighting layouts, Italian marble flooring, and ceremony key handover.',
      imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
      badge: 'Phase 4: Turnkey Completion',
      metrics: [
        { label: 'Interior Warranty', value: '15 Years BWP' },
        { label: 'Quality Score', value: '5.0 Star Audit' },
        { label: 'Handover Status', value: 'Ready to Occupy' },
      ]
    }
  ];

  return (
    <section id="transformation" className="py-20 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] text-[#304654] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#edf7f1] text-[#226e40] text-xs font-semibold uppercase tracking-widest">
            <span>Construction Journey</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#304654]">
            4-Stage <span className="text-[#226e40]">Construction Journey</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Experience our stage-by-stage engineering precision from initial ground excavation to turnkey interior completion.
          </p>
        </div>

        {/* Scroll-Triggered Sticky Stacked Cards */}
        <div className="space-y-8 sm:space-y-12 max-w-5xl mx-auto pb-12">
          {stages.map((stg, idx) => {
            const topOffsets = ['top-24 sm:top-28', 'top-28 sm:top-32', 'top-32 sm:top-36', 'top-36 sm:top-40'];
            const zIndexes = ['z-10', 'z-20', 'z-30', 'z-40'];

            return (
              <motion.div
                key={stg.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`sticky ${topOffsets[idx]} ${zIndexes[idx]} bg-white rounded-3xl border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden p-6 sm:p-8`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  
                  {/* Left Image Box */}
                  <div className="lg:col-span-6 relative h-56 sm:h-72 rounded-2xl overflow-hidden bg-slate-900 group">
                    <img
                      src={stg.imageUrl}
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85";
                      }}
                      alt={stg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#304654]/70 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-3.5 left-3.5 backdrop-blur-md bg-white/90 border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#304654] shadow-md flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#226e40] animate-pulse" />
                      <span>{stg.badge}</span>
                    </div>
                  </div>

                  {/* Right Details */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#226e40]">
                        Phase {stg.step} of 04
                      </span>
                      <span className="text-2xl font-extrabold text-slate-300">
                        {stg.step}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#304654]">
                        {stg.title}
                      </h3>
                      <p className="text-xs text-[#226e40] font-semibold mt-1">
                        {stg.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {stg.description}
                    </p>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-2.5 pt-2">
                      {stg.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="bg-[#edf7f1]/70 p-2.5 rounded-xl border border-[#226e40]/20">
                          <p className="text-[9px] text-slate-500 font-bold uppercase">{m.label}</p>
                          <p className="text-xs font-extrabold text-[#304654] mt-0.5">{m.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Inspection Guarantee */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">Quality Inspection</span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#226e40]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        100% Certified
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
