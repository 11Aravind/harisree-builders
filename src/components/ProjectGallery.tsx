import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Maximize2, X, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '../data/landingData';

interface GalleryProps {
  onOpenConsultation: (projectTitle?: string) => void;
}

export const ProjectGallery: React.FC<GalleryProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'elevations', label: '3D Elevations' },
    { id: 'interiors', label: 'Interiors' },
    { id: 'landscaping', label: 'Landscaping' },
    { id: 'completed', label: 'Completed Homes' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#edf7f1] text-[#226e40] text-xs font-semibold uppercase tracking-widest">
            <span>Featured Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#304654] tracking-tight">
            Our Featured <span className="text-[#226e40]">Projects</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Explore our latest 3D elevation renders, luxury modular interior layouts, and completed residential homes across Kollam district.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  isActive ? 'text-white' : 'text-[#304654] hover:text-[#226e40] bg-white border border-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-[#226e40] rounded-full shadow-md"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, scale: 1.01 }}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-slate-300/60 transition-all duration-300 cursor-pointer group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={item.imageUrl}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";
                    }}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-300" />
                  
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-[#304654] backdrop-blur-md shadow-sm">
                    {item.categoryLabel}
                  </span>

                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 text-[#304654] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#304654] group-hover:text-[#226e40] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#226e40]" />
                      {item.location}
                    </span>
                    <span className="font-semibold text-[#304654] bg-[#edf7f1] px-2.5 py-0.5 rounded-full">
                      {item.area}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Popup Modal */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full z-10 shadow-2xl border border-slate-100 grid grid-cols-1 md:grid-cols-12"
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="md:col-span-7 bg-slate-950 relative min-h-[300px] md:min-h-[450px]">
                  <img
                    src={selectedItem.imageUrl}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";
                    }}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#edf7f1] text-[#226e40]">
                      {selectedItem.categoryLabel}
                    </span>

                    <h3 className="text-2xl font-bold text-[#304654] mt-3 mb-2">
                      {selectedItem.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {selectedItem.description}
                    </p>

                    <div className="mt-6 space-y-2 pt-4 border-t border-slate-100 text-xs">
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-500">Location:</span>
                        <span className="font-semibold text-[#304654]">{selectedItem.location}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-500">Built-up Area / Scope:</span>
                        <span className="font-semibold text-[#304654]">{selectedItem.area}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-500">Design Supervision:</span>
                        <span className="font-semibold text-[#226e40]">100% Vastu & Engineer Certified</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        const title = selectedItem.title;
                        setSelectedItem(null);
                        onOpenConsultation(`Design Query: ${title}`);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-[#226e40] hover:bg-[#1b5732] shadow-lg text-sm transition-all cursor-pointer"
                    >
                      <span>Inquire About This Design</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
