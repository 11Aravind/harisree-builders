import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, ShieldCheck, Compass, Users, Smile, HardHat, CheckCircle2 
} from 'lucide-react';

interface WhoWeAreProps {
  onOpenConsultation?: (service?: string) => void;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = () => {
  const stats = [
    {
      value: "250+",
      label: "Happy Customers",
      subtext: "Delivered Across Kollam District",
      icon: <Smile className="w-6 h-6 text-[#226e40]" />
    },
    {
      value: "15+ Years",
      label: "Years of Construction",
      subtext: "Architectural & Civil Heritage",
      icon: <HardHat className="w-6 h-6 text-[#226e40]" />
    },
    {
      value: "5,00,000+",
      label: "Built-up Area Delivered",
      subtext: "Sq. Ft. Completed Residential Spaces",
      icon: <Building2 className="w-6 h-6 text-[#226e40]" />
    },
    {
      value: "100%",
      label: "Vastu Harmony",
      subtext: "Certified Architectural Blueprints",
      icon: <Compass className="w-6 h-6 text-[#226e40]" />
    }
  ];

  return (
    <section id="who-we-are" className="py-24 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Architectural Photo Frame (Sharp Edges, Zero Radius) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Studio Image with Sharp Square Edges (Zero Radius) */}
            <div className="relative rounded-none overflow-hidden shadow-2xl bg-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80";
                }}
                alt="Harisree Builders Architectural Studio & Site Planning"
                className="w-full h-[440px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#304654]/70 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right Column: Shortened Clean Heading & Studio Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#edf7f1] text-[#226e40] text-xs font-semibold uppercase tracking-widest">
              <span>About Harisree Builders</span>
            </div>

            {/* Shortened Clean Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#304654] tracking-tight leading-tight">
              Who We Are
            </h2>
            <p className="text-lg text-[#226e40] font-semibold -mt-3">
              Crafting Timeless Residential Architecture in Sasthamcotta
            </p>

            {/* Body Copy */}
            <p className="text-slate-600 text-base font-normal leading-relaxed">
              Headquartered in Muthupilakkadu, Sasthamcotta, <strong>Harisree Builders & Interiors</strong> is the leading architectural design and turnkey building construction firm serving <strong>Sasthamcotta</strong>, <strong>Bharanikavu</strong>, <strong>Karunagappally</strong>, <strong>Adoor</strong>, <strong>Kottarakkara</strong>, and across <strong>Kollam, Kerala</strong>. We seamlessly bridge authentic traditional Vastu Shastra principles with sleek contemporary engineering.
            </p>

            <p className="text-slate-600 text-sm font-normal leading-relaxed">
              Our full-service engineering studio provides complete end-to-end solutions — from initial 2D spatial layouts, 3D photorealistic exterior elevations, and official Panchayat & Municipality building permit approvals, to structural civil execution, on-site supervision, and bespoke modular interior craftsmanship.
            </p>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#edf7f1] text-[#226e40] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#304654]">Certified Engineers</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Licensed structural & site supervision team.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#edf7f1] text-[#226e40] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#304654]">100% Vastu Harmony</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Authentic orientation for energy balance.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#edf7f1] text-[#226e40] flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#304654]">Transparent BOQ Costing</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Itemized material lists with zero hidden fees.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#edf7f1] text-[#226e40] flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#304654]">In-House Interiors</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Factory marine-ply modular kitchens & ceilings.</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Bottom Key Performance Statistics Row */}
        <div className="pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((st, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#226e40]/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#edf7f1] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {st.icon}
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-[#226e40]" />
                </div>
                <h3 className="text-3xl font-extrabold text-[#304654] group-hover:text-[#226e40] transition-colors">
                  {st.value}
                </h3>
                <p className="text-sm font-semibold text-[#304654] mt-1">
                  {st.label}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {st.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
