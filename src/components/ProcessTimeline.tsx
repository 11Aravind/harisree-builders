import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Box, FileCheck2, KeyRound, CheckCircle2, ArrowRight, Sparkles, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/landingData';

export const ProcessTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth right-to-left horizontal slide translation for compact cards
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-54%']);
  const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

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
    <section
      ref={containerRef}
      id="process"
      className="relative h-[240vh] bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] font-sans"
    >
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-6">
        {/* Background Ambient Glow Blobs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#226e40]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#304654]/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#edf7f1] text-[#226e40] text-xs font-semibold uppercase tracking-widest border border-[#226e40]/15 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step-by-Step Roadmap</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#304654] tracking-tight">
              Our Construction <span className="text-[#226e40]">Process</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Scroll down to explore each phase of our 4-stage engineering roadmap.
            </p>
          </div>

          {/* Progress Bar Track */}
          <div className="relative mb-8 max-w-lg mx-auto">
            <div className="h-1.5 w-full bg-slate-200/80 rounded-full overflow-hidden">
              <motion.div
                style={{ width: lineProgress }}
                className="h-full bg-gradient-to-r from-[#226e40] via-[#1b5732] to-[#304654] rounded-full"
              />
            </div>
            <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-2 tracking-wider">
              <span className="text-[#226e40]">01. SITE VISIT</span>
              <span>02. 3D MODELING</span>
              <span>03. BUDGET & PERMIT</span>
              <span>04. HANDOVER</span>
            </div>
          </div>

          {/* Horizontal Scrollable Compact Cards Container */}
          <div className="relative w-full overflow-hidden py-2">
            <motion.div
              style={{ x }}
              className="flex gap-5 sm:gap-6 w-max pl-2 sm:pl-4 pr-10"
            >
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="w-[280px] sm:w-[320px] lg:w-[340px] flex-shrink-0"
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#226e40]/40 transition-all duration-300 h-full flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Top Accent Gradient Border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#226e40] to-[#304654] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Background Phase Number Watermark */}
                    <div className="absolute top-2 right-4 text-4xl font-black text-slate-100 group-hover:text-[#226e40]/10 transition-colors duration-300 select-none pointer-events-none">
                      {step.step}
                    </div>

                    <div>
                      {/* Step Icon & Phase Badge */}
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#226e40] to-[#154628] text-white flex items-center justify-center shadow-md shadow-[#226e40]/20 group-hover:scale-110 transition-transform duration-300">
                          {getStepIcon(step.icon)}
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#edf7f1] text-[#226e40] border border-[#226e40]/15">
                          Phase {step.step} of 04
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-[#304654] group-hover:text-[#226e40] transition-colors duration-300 mb-2 leading-snug">
                        {step.titleEn}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {step.description}
                      </p>

                      {/* Compact Deliverables List */}
                      {step.deliverables && (
                        <div className="space-y-1.5 pt-3 border-t border-slate-100">
                          <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                            Deliverables:
                          </p>
                          {step.deliverables.map((item, dIdx) => (
                            <div
                              key={dIdx}
                              className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium"
                            >
                              <span className="w-3.5 h-3.5 rounded-full bg-[#edf7f1] text-[#226e40] flex items-center justify-center shrink-0">
                                <Check className="w-2.5 h-2.5" />
                              </span>
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Compact Card Footer */}
                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#226e40]">
                      <span>Phase {step.step} Milestone</span>
                      <div className="w-7 h-7 rounded-full bg-[#edf7f1] flex items-center justify-center group-hover:bg-[#226e40] group-hover:text-white transition-colors duration-300">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};



