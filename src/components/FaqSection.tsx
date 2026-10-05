import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/landingData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#FAF9F6] to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#edf7f1] text-[#226e40] text-xs font-semibold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#304654] tracking-tight">
            Frequently Asked <span className="text-[#226e40]">Questions</span>
          </h2>

          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Clear answers regarding building sanctions, Vastu integration, bank loans, and contract terms.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-[#304654] hover:text-[#226e40] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#edf7f1] text-[#226e40] text-xs font-bold flex items-center justify-center shrink-0">
                      Q{idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>

                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#edf7f1] text-[#226e40]' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-slate-100 bg-[#edf7f1]/30"
                    >
                      <div className="p-6 text-sm text-slate-600 leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
