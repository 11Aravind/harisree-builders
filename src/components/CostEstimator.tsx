import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Check, Sparkles } from 'lucide-react';
import { ESTIMATOR_PACKAGES } from '../data/landingData';

export const CostEstimator: React.FC = () => {
  const [areaSqFt, setAreaSqFt] = useState<number>(1800);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('premium');
  const [scope, setScope] = useState<'turnkey' | 'interior' | 'renovation'>('turnkey');

  const selectedPackage = useMemo(() => {
    return ESTIMATOR_PACKAGES.find((p) => p.id === selectedPackageId) || ESTIMATOR_PACKAGES[1];
  }, [selectedPackageId]);

  const scopeMultiplier = useMemo(() => {
    switch (scope) {
      case 'turnkey':
        return 1.0;
      case 'interior':
        return 0.45;
      case 'renovation':
        return 0.65;
    }
  }, [scope]);

  const totalEstimateMin = useMemo(() => {
    const baseRate = selectedPackage.ratePerSqFt * scopeMultiplier;
    return Math.round((areaSqFt * baseRate) / 100000) / 10;
  }, [areaSqFt, selectedPackage, scopeMultiplier]);

  const totalEstimateMax = useMemo(() => {
    const baseRate = (selectedPackage.ratePerSqFt * 1.12) * scopeMultiplier;
    return Math.round((areaSqFt * baseRate) / 100000) / 10;
  }, [areaSqFt, selectedPackage, scopeMultiplier]);

  const breakdown = useMemo(() => {
    if (scope === 'interior') {
      return [
        { label: 'Modular Joinery & Cabinets', pct: '45%' },
        { label: 'False Ceiling & Lighting', pct: '25%' },
        { label: 'Paint, Wall Paneling & Polish', pct: '18%' },
        { label: 'Hardware & Accessories', pct: '12%' }
      ];
    }
    return [
      { label: 'Foundation & Civil Structure', pct: '48%' },
      { label: 'Flooring, Tiles & Granite', pct: '18%' },
      { label: 'Electrical, Plumbing & Bath', pct: '16%' },
      { label: 'Doors, Windows & Paint', pct: '18%' }
    ];
  }, [scope]);

  const handleWhatsAppQuote = () => {
    const scopeLabel = scope === 'turnkey' ? 'Complete Turnkey Construction' : scope === 'interior' ? 'Interior Only Fit-out' : 'Renovation & Extension';
    const text = encodeURIComponent(
      `Hello Harisree Builders! I generated a cost estimate on your website:\n\n` +
      `📏 Built-up Area: ${areaSqFt.toLocaleString()} sq. ft.\n` +
      `🏗️ Scope: ${scopeLabel}\n` +
      `📦 Package: ${selectedPackage.name}\n` +
      `💰 Estimated Budget Range: ₹${totalEstimateMin} Lakhs – ₹${totalEstimateMax} Lakhs\n\n` +
      `Please send me an itemized quotation for my plot in Sasthamcotta/Kollam.`
    );
    window.open(`https://wa.me/919633479993?text=${text}`, '_blank');
  };

  return (
    <section id="estimator" className="py-24 bg-gradient-to-b from-[#F4F5F6] via-[#FBFBFB] to-[#F4F5F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-[#C2410C] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Instant House Construction <span className="terracotta-gradient-text">& Budget Estimator</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Select your plot built-up area and specification level to compute an instant transparent budget estimate.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form & Controls (Left 7 Columns) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg space-y-8">
            
            {/* 1. Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  1. Select Total Built-up Area (Sq. Ft.)
                </label>
                <span className="text-2xl font-black text-[#C2410C]">
                  {areaSqFt.toLocaleString()} <span className="text-xs font-medium text-slate-500">sq ft</span>
                </span>
              </div>

              <input
                type="range"
                min={800}
                max={4500}
                step={50}
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C2410C]"
              />

              {/* Area Preset Buttons */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[1200, 1800, 2500, 3200, 4000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAreaSqFt(preset)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      areaSqFt === preset
                        ? 'bg-[#C2410C] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {preset} sq ft
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scope Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-3">
                2. Select Project Scope
              </label>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'turnkey', label: 'Complete Turnkey', sub: 'Full Construction' },
                  { id: 'interior', label: 'Interior Fit-out', sub: 'Modular Joinery' },
                  { id: 'renovation', label: 'Renovation', sub: 'Extension / Remodel' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScope(s.id as any)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      scope === s.id
                        ? 'border-[#C2410C] bg-orange-50/70 ring-2 ring-[#C2410C]/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <p className={`text-xs font-bold ${scope === s.id ? 'text-[#C2410C]' : 'text-slate-800'}`}>
                      {s.label}
                    </p>
                    <p className="text-[10px] text-slate-500">{s.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Package Selector Cards */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-3">
                3. Choose Specification Level
              </label>

              <div className="space-y-3">
                {ESTIMATOR_PACKAGES.map((pkg) => {
                  const isSelected = selectedPackageId === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#C2410C] bg-orange-50/40 ring-2 ring-[#C2410C]/20 shadow-sm'
                          : 'border-slate-200/90 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'border-[#C2410C] bg-[#C2410C] text-white' : 'border-slate-300'}`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                          <div>
                            <span className="text-sm font-bold text-slate-900">{pkg.name}</span>
                            {pkg.isPopular && (
                              <span className="ml-2 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-orange-100 text-[#C2410C]">
                                Recommended
                              </span>
                            )}
                          </div>
                        </div>

                        <span className="text-sm font-black text-slate-900">
                          ₹{Math.round(pkg.ratePerSqFt * scopeMultiplier)} <span className="text-[10px] text-slate-500 font-normal">/ sq ft</span>
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 mt-2 pl-7">{pkg.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Result Card (Right 5 Columns) - Light Clean Warm Card */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              layout
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#C2410C]/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-orange-100/60 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs font-extrabold uppercase tracking-widest text-[#C2410C]">
                Estimated Project Cost
              </span>

              <div className="mt-3 mb-6">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  ₹{totalEstimateMin} – ₹{totalEstimateMax} <span className="text-lg text-[#C2410C] font-bold">Lakhs*</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Based on {areaSqFt.toLocaleString()} sq. ft. @ approx. ₹{Math.round(selectedPackage.ratePerSqFt * scopeMultiplier)} / sq. ft.
                </p>
              </div>

              {/* Itemized Breakdown Gauge */}
              <div className="space-y-3 pt-4 border-t border-slate-100 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Estimated Cost Allocations:
                </p>
                {breakdown.map((b, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-slate-700 font-medium">{b.label}</span>
                    <span className="font-extrabold text-[#C2410C]">{b.pct}</span>
                  </div>
                ))}
              </div>

              {/* Selected Package Key Specs */}
              <div className="bg-orange-50/60 rounded-2xl p-4 border border-orange-100 mb-6 space-y-2">
                <p className="text-xs font-bold text-[#C2410C] uppercase">Package Includes:</p>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {selectedPackage.highlights.slice(0, 4).map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Primary Lead Conversion CTA */}
              <button
                onClick={handleWhatsAppQuote}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Get Itemized Quotation on WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-slate-500 mt-3">
                *Final cost depends on plot contour, foundation depth & custom material selections.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
