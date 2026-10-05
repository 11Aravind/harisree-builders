import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, DraftingCompass, Palette, Compass, Coins, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/landingData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'DraftingCompass':
        return <DraftingCompass className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'Coins':
        return <Coins className="w-6 h-6" />;
      default:
        return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-[#FAF9F6] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#edf7f1] text-[#226e40] text-xs font-semibold uppercase tracking-widest">
            <span>Why Choose Harisree Builders</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#304654] tracking-tight">
            Built on Trust, Precision & <span className="text-[#226e40]">Architectural Excellence</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            From initial plot planning and Vastu consultation to engineer-supervised ground execution and timely key handover.
          </p>
        </div>

        {/* 5 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/80 border border-slate-200/80 transition-all duration-300 relative group flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-2 md:col-span-2 bg-gradient-to-br from-white via-[#edf7f1]/30 to-white border-[#226e40]/30' : ''
              }`}
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#226e40] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-bold text-slate-400 group-hover:text-[#226e40] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* English Title */}
                <h3 className="text-xl font-bold text-[#304654] group-hover:text-[#226e40] transition-colors mb-3 leading-snug">
                  {item.titleEn}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Verified Quality Standard</span>
                <CheckCircle2 className="w-4 h-4 text-[#226e40]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
