import React, { useState } from 'react';
import { 
  MapPin, Phone, Clock, MessageSquare, Send, CheckCircle2, Navigation 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    service: 'Full Turnkey Construction',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Harisree Builders, I sent an inquiry via your contact form:\n\n` +
      `👤 Name: ${formData.name || 'Not provided'}\n` +
      `📞 Phone: ${formData.phone || 'Not provided'}\n` +
      `📍 Plot Location: ${formData.location || 'Sasthamcotta'}\n` +
      `🛠️ Service: ${formData.service}\n` +
      `💬 Message: ${formData.message || 'I would like to discuss my home project.'}`
    );
    window.open(`https://wa.me/919633479993?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#edf7f1] text-[#226e40] text-xs font-semibold uppercase tracking-widest">
            <span>Connect With Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#304654] tracking-tight">
            Let’s Build Your Dream Home in <span className="text-[#226e40]">Sasthamcotta</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Contact our engineering studio today to schedule a free on-site plot visit and Vastu consultation.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200/90 space-y-8 relative overflow-hidden">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#226e40]">
                  STUDIO & OFFICE
                </span>
                <h3 className="text-2xl font-extrabold text-[#304654] mt-1">
                  Harisree Builders & Interiors
                </h3>
                <p className="text-slate-500 text-xs mt-1">
                  Premier Architectural & Construction Studio
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#edf7f1] text-[#226e40] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Office Location</h4>
                    <p className="text-sm font-semibold text-[#304654] mt-0.5">{COMPANY_INFO.location}</p>
                    <p className="text-xs text-slate-500 mt-0.5">Sasthamcotta, Kollam, Kerala</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#edf7f1] text-[#226e40] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone & Helpline</h4>
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-base font-bold text-[#304654] hover:text-[#226e40] transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                    <p className="text-xs text-slate-500">Direct Engineer Consultation</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#edf7f1] text-[#226e40] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Working Hours</h4>
                    <p className="text-sm font-semibold text-[#304654] mt-0.5">{COMPANY_INFO.workingHours}</p>
                    <p className="text-xs text-slate-500">Sunday by appointment only</p>
                  </div>
                </div>
              </div>

              {/* Instant Social & Location Quick Buttons */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <a
                  href={`https://wa.me/919633479993?text=${encodeURIComponent('Hi Harisree Builders, I am looking for home construction services in Sasthamcotta.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg transition-all"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Direct WhatsApp Quick-Chat</span>
                </a>

                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-6 rounded-2xl text-xs font-semibold text-white bg-[#1877F2] hover:bg-[#166fe5] shadow-md transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Visit Facebook Page</span>
                </a>
              </div>
            </div>

            {/* Sasthamcotta Region Visual / Directions Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-[#304654]">Sasthamcotta Regional Hub</h4>
                <p className="text-xs text-slate-500 mt-0.5">Serving Kollam, Adoor, Karunagappally & Kottarakkara</p>
              </div>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#226e40] bg-[#edf7f1] hover:bg-[#226e40] hover:text-white transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Google Map</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xl">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#edf7f1] text-[#226e40] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#304654]">Thank You! Your Inquiry is Sent.</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  We have received your details. Our engineer will reach out to you within 2 business hours.
                </p>

                <button
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md transition-all mt-4 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send via WhatsApp as well</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4 mb-2">
                  <h3 className="text-xl font-bold text-[#304654]">Send an Online Project Inquiry</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Fill out the details below and we’ll prepare an initial proposal for you.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Varghese"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#226e40] focus:ring-2 focus:ring-[#226e40]/20 outline-none text-slate-800 text-sm transition-all bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9633479993"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#226e40] focus:ring-2 focus:ring-[#226e40]/20 outline-none text-slate-800 text-sm transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Plot Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Sasthamcotta / Muthupilakkadu"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#226e40] focus:ring-2 focus:ring-[#226e40]/20 outline-none text-slate-800 text-sm transition-all bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#226e40] focus:ring-2 focus:ring-[#226e40]/20 outline-none text-slate-800 text-sm transition-all bg-slate-50/50"
                    >
                      <option value="Full Turnkey Construction">Full Turnkey Construction</option>
                      <option value="2D/3D Architectural Plan & Vastu">2D/3D Architectural & Vastu</option>
                      <option value="Modular Kitchen & Interior Styling">Modular Interior Styling</option>
                      <option value="Building Permit & Bank Loan Support">Building Permit & Bank Loan</option>
                      <option value="Landscape & Renovation">Landscape & Renovation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">Your Message / Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your plot size, budget, number of bedrooms, or special Vastu preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#226e40] focus:ring-2 focus:ring-[#226e40]/20 outline-none text-slate-800 text-sm transition-all bg-slate-50/50"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-white bg-[#226e40] hover:bg-[#1b5732] shadow-lg text-sm transition-all active:scale-[0.99] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Project Inquiry</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
