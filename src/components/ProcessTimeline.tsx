import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Box, FileCheck2, KeyRound, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/landingData';

export const ProcessTimeline: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-6 h-6" />;
      case 'Box':
        return <Box className="w-6 h-6" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-6 h-6" />;
      case 'KeyRound':
        return <KeyRound className="w-6 h-6" />;
      default:
        return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#edf7f1] text-[#226e40] text-xs font-semibold uppercase tracking-widest">
            <span>Seamless Execution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#304654] tracking-tight">
            How We Build Your <span className="text-[#226e40]">Dream Home</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Our structured 4-phase engineering roadmap guarantees transparent milestones from plot analysis to key handover.
          </p>
        </div>

        {/* Horizontal Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-[#226e40]/30 -translate-y-8 z-0" />

          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 relative z-10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#226e40] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="text-3xl font-extrabold text-slate-200 group-hover:text-[#226e40] transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#304654] group-hover:text-[#226e40] transition-colors mb-3 leading-snug">
                  {step.titleEn}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Deliverables:</p>
                <ul className="space-y-1.5">
                  {step.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#226e40] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
