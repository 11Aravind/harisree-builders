import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Calendar, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';

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
      `📅 Preferred Date: ${formData.preferredDate || 'As soon as possible'}\n` +
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
            className="fixed inset-0 bg-[#304654]/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100"
          >
            {/* Modal Header */}
            <div className="bg-[#226e40] p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 rounded-full text-xs font-semibold tracking-wide uppercase mb-2">
                <span>✨ Free Site Visit & Vastu Consultation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Book Architectural Consultation</h3>
              <p className="text-[#edf7f1] text-xs sm:text-sm mt-1">
                Fill in your project details below to schedule a meeting with our chief architect.
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-[#edf7f1] text-[#226e40] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-[#304654]">Consultation Request Received!</h4>
                  <p className="text-slate-600 text-sm mt-2">
                    Thank you, <strong className="text-[#304654]">{formData.name}</strong>. Our chief architect will call you back at <strong className="text-[#304654]">{formData.phone}</strong> shortly.
                  </p>

                  <div className="mt-6 p-4 bg-[#edf7f1] rounded-xl border border-[#226e40]/20 text-left">
                    <p className="text-xs text-slate-600 font-medium mb-2">Need immediate project discussion?</p>
                    <button
                      onClick={handleWhatsAppDirect}
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md text-sm cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      Chat directly on WhatsApp now
                    </button>
                  </div>

                  <button
                    onClick={handleReset}
                    className="mt-6 text-sm text-slate-500 hover:text-[#304654] underline font-medium cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#226e40] focus:ring-2 focus:ring-[#226e40]/20 outline-none text-slate-800 text-sm transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">Phone / Mobile *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9633479993"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#226e40] focus:ring-2 focus:ring-[#226e40]/20 outline-none text-slate-800 text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">Plot Location</label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="text"
                          placeholder="e.g. Sasthamcotta, Adoor..."
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#226e40] focus:ring-2 focus:ring-[#226e40]/20 outline-none text-slate-800 text-sm transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">Required Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#226e40] focus:ring-2 focus:ring-[#226e40]/20 outline-none text-slate-800 text-sm bg-white transition-all"
                      >
                        <option value="Full Turnkey Construction">Full Turnkey Construction</option>
                        <option value="Vastu & Architectural 2D/3D Plan">Vastu & 3D Elevation</option>
                        <option value="Modular Kitchen & Interior Styling">Modular Interior Styling</option>
                        <option value="Building Permit & Bank Loan Support">Building Permit & Bank Loan</option>
                        <option value="Renovation & Landscaping">Renovation & Landscaping</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full pl-10 pr-3 py-2 rounded-xl border border-slate-200 focus:border-[#226e40] focus:ring-2 focus:ring-[#226e40]/20 outline-none text-slate-800 text-sm transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">Project Details / Requirements (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="Specify approximate sq ft, budget expectations, or specific requirements..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-[#226e40] focus:ring-2 focus:ring-[#226e40]/20 outline-none text-slate-800 text-sm transition-all"
                    />
                  </div>

                  <div className="pt-2 space-y-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#226e40] hover:bg-[#1b5732] text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg cursor-pointer active:scale-[0.99]"
                    >
                      <Send className="w-4 h-4" />
                      Submit Booking Request
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full flex items-center justify-center gap-2 bg-[#edf7f1] hover:bg-[#d8eedf] text-[#226e40] font-medium py-2.5 px-4 rounded-xl border border-[#226e40]/30 transition-all text-xs cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-[#226e40]" />
                      Or Send Details Instantly on WhatsApp
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
