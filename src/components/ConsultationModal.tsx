import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ModalProps> = ({ isOpen, onClose, initialService = 'Full Turnkey Construction' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    service: initialService,
    preferredDate: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Harisree Builders, I would like to book a consultation.\n\n` +
      `👤 Name: ${formData.name || 'Not provided'}\n` +
      `📞 Phone: ${formData.phone || 'Not provided'}\n` +
      `📍 Plot Location: ${formData.location || 'Sasthamcotta'}\n` +
      `🛠️ Service Required: ${formData.service}\n` +
      `📝 Notes: ${formData.notes || 'None'}`
    );
    window.open(`https://wa.me/919633479993?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', location: '', service: 'Full Turnkey Construction', preferredDate: '', notes: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
          />

          {/* Modal Container Card (Exact Layout matching Screenshot) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-100 grid grid-cols-1 md:grid-cols-12 my-auto"
          >
            {/* Close Button Top Right (Matching Attached Image) */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-slate-700/60 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image Column (High-Res Architectural Image) */}
            <div className="md:col-span-5 relative bg-slate-900 min-h-[260px] md:min-h-[500px] flex flex-col justify-between p-6 text-white overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80";
                }}
                alt="Harisree Builders Architectural Consultation"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#304654]/90 via-[#304654]/30 to-transparent pointer-events-none" />

              {/* Top Pill Tag on Image */}
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-wider border border-white/20 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Free Plot Consultation</span>
                </span>
              </div>

              {/* Bottom Info Overlay on Left Image */}
              <div className="relative z-10 space-y-2">
                <h4 className="text-lg font-extrabold leading-snug text-white drop-shadow-md">
                  Harisree Builders & Interiors
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">
                  Premier Vastu Shastra & 3D Architectural Studio in Sasthamcotta, Kollam.
                </p>

                <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[11px] text-emerald-300 font-semibold">
                  <span>100% Engineer Certified</span>
                  <span>15+ Years Trust</span>
                </div>
              </div>
            </div>

            {/* Right Column: Form / Content */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white relative">
              {submitted ? (
                <div className="my-auto py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#edf7f1] text-[#226e40] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#304654]">Consultation Booked!</h4>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#304654]">{formData.name}</strong>. Our senior architect will call you back at <strong className="text-[#304654]">{formData.phone}</strong> shortly.
                  </p>

                  <div className="pt-4 space-y-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3.5 px-5 rounded-xl transition-all shadow-md text-sm cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
                      <span>Chat Directly on WhatsApp Now</span>
                    </button>

                    <button
                      onClick={handleReset}
                      className="text-xs font-semibold text-slate-500 hover:text-[#304654] underline cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pr-2">
                  {/* Top Header Badge & Title */}
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#edf7f1] text-[#226e40] text-[11px] font-bold uppercase tracking-wider mb-2">
                      Book Architectural Consultation
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#304654] tracking-tight leading-snug">
                      Plan Your Dream Project
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Fill out your details to schedule an expert plot visit & 3D plan discussion.
                    </p>
                  </div>

                  {/* Form Input Grid */}
                  <div className="space-y-3 pt-1">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#226e40] focus:ring-2 focus:ring-[#226e40]/20 outline-none text-slate-800 text-xs sm:text-sm transition-all bg-slate-50/50"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9633479993"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#226e40] focus:ring-2 focus:ring-[#226e40]/20 outline-none text-slate-800 text-xs sm:text-sm transition-all bg-slate-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Plot Location</label>
                        <input
                          type="text"
                          placeholder="e.g. Sasthamcotta, Adoor"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#226e40] focus:ring-2 focus:ring-[#226e40]/20 outline-none text-slate-800 text-xs sm:text-sm transition-all bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Required Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#226e40] focus:ring-2 focus:ring-[#226e40]/20 outline-none text-slate-800 text-xs sm:text-sm bg-slate-50/50 transition-all"
                      >
                        <option value="Full Turnkey Construction">Full Turnkey Construction</option>
                        <option value="Vastu & Architectural 2D/3D Plan">Vastu & 3D Architectural Plan</option>
                        <option value="Modular Kitchen & Interior Styling">Modular Kitchen & Interior</option>
                        <option value="Renovation & Landscaping">Renovation & Landscaping</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Project Requirements / Sq Ft (Optional)</label>
                      <textarea
                        rows={2}
                        placeholder="Tell us about plot size, budget, number of bedrooms..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-[#226e40] focus:ring-2 focus:ring-[#226e40]/20 outline-none text-slate-800 text-xs sm:text-sm transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Submit CTA Button (Matching Attached Image Style) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-[#226e40] hover:bg-[#1b5732] shadow-lg shadow-[#226e40]/20 text-sm transition-all cursor-pointer active:scale-[0.99]"
                    >
                      <span>Book Free Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

