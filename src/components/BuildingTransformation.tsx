import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, CheckCircle2, Sparkles } from 'lucide-react';

export const BuildingTransformation: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const stages = [
    {
      step: '01',
      title: 'Foundation & Steel Skeleton',
      subtitle: 'Soil Testing, Ground Excavation & RCC Footing',
      description: 'Precision engineering grid layout, deep foundation footing, anti-termite ground barrier treatment, and Grade-53 TMT 550D steel column framing.',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=85',
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

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, stages.length]);

  const currentStage = stages[activeStage];

  return (
    <section id="transformation" className="py-24 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] text-[#304654] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#edf7f1] text-[#226e40] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Construction Progression</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#304654]">
            Watch Your Dream Home Evolve From <span className="text-[#226e40]">Skeleton to Perfection</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Experience our stage-by-stage engineering precision: from ground excavation and steel framing to final turnkey interior execution.
          </p>
        </div>

        {/* Stage Progress Bar / Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stages.map((stg, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={stg.step}
                onClick={() => {
                  setActiveStage(idx);
                  setIsPlaying(false);
                }}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  isActive
                    ? 'border-[#226e40] bg-white shadow-xl ring-2 ring-[#226e40]/20'
                    : 'border-slate-200/90 bg-white/80 hover:bg-white hover:border-slate-300'
                }`}
              >
                {/* Active Progress Line */}
                {isActive && isPlaying && (
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: 'linear' }}
                    className="absolute top-0 left-0 h-1 bg-[#226e40]"
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold uppercase tracking-widest ${isActive ? 'text-[#226e40]' : 'text-slate-400'}`}>
                    Stage {stg.step}
                  </span>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${isActive ? 'bg-[#edf7f1] text-[#226e40]' : 'bg-slate-100 text-slate-600'}`}>
                    {idx === 0 ? 'Skeleton' : idx === 1 ? 'Framing' : idx === 2 ? 'Elevation' : 'Turnkey'}
                  </span>
                </div>

                <h3 className={`text-sm sm:text-base font-semibold transition-colors ${isActive ? 'text-[#304654]' : 'text-slate-600 group-hover:text-[#304654]'}`}>
                  {stg.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Animated Visual Canvas Box */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-4 sm:p-8 shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image Panning Canvas */}
            <div className="lg:col-span-7 relative h-[360px] sm:h-[480px] rounded-2xl overflow-hidden bg-slate-900 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.step}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="w-full h-full relative overflow-hidden"
                >
                  {/* Smooth Panning Motion Image */}
                  <motion.img
                    animate={{ scale: [1, 1.08, 1], x: [0, -10, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    src={currentStage.imageUrl}
                    alt={currentStage.title}
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#304654]/80 via-transparent to-transparent" />
                  
                  {/* Phase Overlay Pill */}
                  <div className="absolute top-4 left-4 backdrop-blur-md bg-white/90 border border-slate-200 px-4 py-2 rounded-full text-xs font-semibold text-[#304654] shadow-md flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#226e40] animate-pulse" />
                    <span>{currentStage.badge}</span>
                  </div>

                  {/* Stage Play / Pause Control */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute top-4 right-4 backdrop-blur-md bg-white/90 hover:bg-white text-slate-900 p-2.5 rounded-full shadow-md transition-colors cursor-pointer"
                    aria-label={isPlaying ? 'Pause auto transition' : 'Play auto transition'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 text-[#304654]" /> : <Play className="w-4 h-4 text-[#226e40] fill-[#226e40]" />}
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Information Panel */}
            <div className="lg:col-span-5 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#226e40]">
                      Phase {currentStage.step} of 04
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#304654] mt-1">
                      {currentStage.title}
                    </h3>
                    <p className="text-xs text-[#226e40] font-semibold mt-1">
                      {currentStage.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {currentStage.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {currentStage.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-[#edf7f1]/60 p-3 rounded-xl border border-[#226e40]/20">
                        <p className="text-[10px] text-slate-500 font-bold uppercase">{m.label}</p>
                        <p className="text-xs font-extrabold text-[#304654] mt-0.5">{m.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Verification Guarantee */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Stage Guaranteed Inspection</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#226e40]">
                      <CheckCircle2 className="w-4 h-4" />
                      100% Certified
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
