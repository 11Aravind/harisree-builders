import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, ShieldCheck, Compass, Award, ArrowRight, Users, Sparkles 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface WhoWeAreProps {
  onOpenConsultation: (service?: string) => void;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ onOpenConsultation }) => {
  return (
    <section id="who-we-are" className="py-24 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Photo Composite Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Studio Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
                alt="Harisree Builders Architectural Studio & Site Planning"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#304654]/70 via-transparent to-transparent" />
            </div>

            {/* Overlapping Secondary Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 bg-white p-5 rounded-2xl shadow-xl border border-slate-200/90 max-w-xs z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#edf7f1] text-[#226e40] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-[#304654]">{COMPANY_INFO.experienceYears} Years</p>
                  <p className="text-xs text-slate-600 font-medium">Of Architectural & Construction Heritage</p>
                </div>
              </div>
            </motion.div>

            {/* Top Left Floating Tag */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-md text-xs font-semibold text-[#304654] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#226e40] animate-pulse" />
              <span>Sasthamcotta Regional Studio</span>
            </div>
          </motion.div>

          {/* Right Column: Studio Story & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#edf7f1] text-[#226e40] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#304654] tracking-tight leading-tight">
              Leading Architectural Studio & <span className="text-[#226e40]">Engineering Excellence</span> in Sasthamcotta
            </h2>

            {/* Body Copy */}
            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
              Based in Muthupilakkadu, Sasthamcotta, <strong>Harisree Builders & Interiors</strong> is a premier residential design and turnkey construction firm. We seamlessly bridge authentic traditional Vastu Shastra principles with sleek contemporary architecture.
            </p>

            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              Our full-service engineering studio provides complete end-to-end solutions — from initial 2D spatial layouts, 3D photorealistic exterior renderings, and official Panchayat/Municipality building permit approvals, to structural civil execution, site supervision, and bespoke modular interior craftsmanship.
            </p>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#edf7f1] text-[#226e40] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#304654]">Certified Engineers</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Licensed structural & site supervision team.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#edf7f1] text-[#226e40] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#304654]">100% Vastu Harmony</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Authentic orientation for energy balance.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#edf7f1] text-[#226e40] flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#304654]">Transparent BOQ Costing</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Itemized material lists with zero hidden fees.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#edf7f1] text-[#226e40] flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#304654]">In-House Interiors</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Factory marine-ply modular kitchens & ceilings.</p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenConsultation('Studio Consultation & Site Visit')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl font-semibold text-white bg-[#226e40] hover:bg-[#1b5732] shadow-lg text-sm transition-all cursor-pointer"
              >
                <span>Book Studio Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-[#304654] bg-white hover:bg-slate-50 border border-slate-200 text-sm transition-all shadow-xs"
              >
                <span>View Delivered Projects</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
