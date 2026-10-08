import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Box, FileCheck2, KeyRound, CheckCircle2, ArrowRight, Sparkles, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/landingData';

export const ProcessTimeline: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-5 h-5" />;
      case 'Box':
        return <Box className="w-5 h-5" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-5 h-5" />;
      case 'KeyRound':
        return <KeyRound className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] font-sans relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#226e40]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#304654]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#edf7f1] text-[#226e40] text-xs font-semibold uppercase tracking-widest border border-[#226e40]/15 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Step-by-Step Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#304654] tracking-tight">
            Our Construction <span className="text-[#226e40]">Process</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            A transparent 4-stage engineering roadmap ensuring quality, Vastu compliance, and on-time handover.
          </p>
        </div>

        {/* 4-Step Cards Grid (Fully Responsive on All Screen Sizes, No Cutoffs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#226e40]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#226e40] to-[#304654] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Background Phase Number Watermark */}
              <div className="absolute top-3 right-4 text-5xl font-black text-slate-100 group-hover:text-[#226e40]/10 transition-colors duration-300 select-none pointer-events-none">
                {step.step}
              </div>

              <div>
                {/* Step Icon & Phase Badge */}
                <div className="flex items-center justify-between mb-5 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#226e40] to-[#154628] text-white flex items-center justify-center shadow-md shadow-[#226e40]/20 group-hover:scale-110 transition-transform duration-300">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#edf7f1] text-[#226e40] border border-[#226e40]/15">
                    Phase {step.step} of 04
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#304654] group-hover:text-[#226e40] transition-colors duration-300 mb-2.5 leading-snug">
                  {step.titleEn}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Deliverables List */}
                {step.deliverables && (
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                      Deliverables:
                    </p>
                    {step.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center gap-2 text-xs text-slate-700 font-medium"
                      >
                        <span className="w-4 h-4 rounded-full bg-[#edf7f1] text-[#226e40] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#226e40]">
                <span>Phase {step.step} Milestone</span>
                <div className="w-8 h-8 rounded-full bg-[#edf7f1] flex items-center justify-center group-hover:bg-[#226e40] group-hover:text-white transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
