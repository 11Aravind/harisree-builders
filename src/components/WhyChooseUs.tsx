import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, DraftingCompass, Palette, Compass, Coins, CheckCircle2, 
  Award, Sparkles, ArrowUpRight, Building2, Check 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/landingData';

export const WhyChooseUs: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

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

  const featureBadges = [
    "100% Site Audited",
    "Government Licensed",
    "15-Yr Material Warranty",
    "Authentic Vastu Alignment",
    "Zero Cost Overrun"
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] relative overflow-hidden font-sans">
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#226e40]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[30rem] h-[30rem] bg-[#304654]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#edf7f1] text-[#226e40] text-xs font-semibold uppercase tracking-widest border border-[#226e40]/15 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose Harisree Builders</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#304654] tracking-tight leading-tight">
            Built on <span className="text-[#226e40]">Trust & Excellence</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            From plot analysis and 3D architectural renders to engineer-supervised civil execution and timely key handover.
          </p>
        </div>

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Hero Bento Card (Col-Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#304654] via-[#243540] to-[#1a2730] text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between group min-h-[500px]"
          >
            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 opacity-25 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Harisree Architectural Excellence"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2730] via-[#1a2730]/60 to-transparent pointer-events-none" />

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-semibold border border-white/15">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>15+ Years Trust Guarantee</span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Kollam Studio
              </span>
            </div>

            {/* Main Hero Card Body Content */}
            <div className="relative z-10 my-auto py-8 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#226e40] to-[#154628] flex items-center justify-center text-white shadow-xl shadow-[#226e40]/40 border border-emerald-400/20">
                <Building2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug tracking-tight text-white">
                Uncompromising Quality in Every Foundation
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                We combine licensed structural engineering, authentic Vastu Shastra principles, and fixed-budget transparency to build homes that stand strong for generations.
              </p>

              {/* Key Highlights */}
              <div className="space-y-2 pt-2">
                {[
                  "On-site Supervision by Senior Engineers",
                  "100% Vastu Compliant Architectural Plans",
                  "Fixed BOQ Cost Agreement — Zero Overruns",
                  "Factory-finished Marine-Ply Modular Joinery"
                ].map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Counter Bar */}
            <div className="relative z-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xl sm:text-2xl font-black text-emerald-400">250+</p>
                <p className="text-[10px] text-slate-300 uppercase font-semibold">Homes Built</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-emerald-400">100%</p>
                <p className="text-[10px] text-slate-300 uppercase font-semibold">Vastu Harmony</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-emerald-400">15+ Yrs</p>
                <p className="text-[10px] text-slate-300 uppercase font-semibold">Warranty</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 5 Interactive Feature Cards (Col-Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {WHY_CHOOSE_US.map((item, idx) => {
              const badge = featureBadges[idx] || "Verified Standard";
              const isActive = activeCard === idx;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onClick={() => setActiveCard(idx)}
                  whileHover={{ x: 6 }}
                  className={`rounded-2xl p-5 sm:p-6 border transition-all duration-300 cursor-pointer relative overflow-hidden group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    isActive
                      ? 'bg-white border-[#226e40] shadow-xl shadow-[#226e40]/10 ring-1 ring-[#226e40]/30'
                      : 'bg-white/80 hover:bg-white border-slate-200/90 shadow-xs hover:shadow-md'
                  }`}
                >
                  {/* Left Icon & Content */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'bg-[#226e40] text-white shadow-lg shadow-[#226e40]/30 scale-105'
                        : 'bg-[#edf7f1] text-[#226e40] group-hover:bg-[#226e40] group-hover:text-white'
                    }`}>
                      {getIcon(item.icon)}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400">0{idx + 1}.</span>
                        <h3 className="text-base sm:text-lg font-bold text-[#304654] group-hover:text-[#226e40] transition-colors leading-snug">
                          {item.titleEn}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Badge Tag */}
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#edf7f1] text-[#226e40] border border-[#226e40]/15 whitespace-nowrap">
                      {badge}
                    </span>
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? 'text-[#226e40] translate-x-0.5 -translate-y-0.5' : 'text-slate-400 group-hover:text-[#226e40]'
                    }`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

