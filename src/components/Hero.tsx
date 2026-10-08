import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollRate, setScrollRate] = useState(0);

  const heroSlides = [
    {
      id: 1,
      trustedTag: "Sasthamcotta’s Most Trusted Builder",
      title: "Expect More",
      description: "End-to-end architectural design, 3D elevation modeling, certified engineering, and luxury interior execution.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
      location: "Harisree Signature Villa, Sasthamcotta"
    },
    {
      id: 2,
      trustedTag: "Experience Resort Living",
      title: "The Eco Sanctum",
      description: "Kerala climate-adapted roofing, open courtyard architecture, and photorealistic 3D virtual elevations.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85",
      location: "Modern Contemporary Residence, Kollam"
    },
    {
      id: 3,
      trustedTag: "Come Home to a Resort",
      title: "Crafting Architectural Icons",
      description: "100% Vastu compliant blueprints, marine-ply modular kitchens, false ceilings & bespoke carpentry.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85",
      location: "Luxury Interior Suite, Sasthamcotta"
    }
  ];

  // Window scroll listener for continuous parallax scale zoom effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollRate(Math.min(scrollY / 1000, 0.4));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);





  const slide = heroSlides[currentSlide];

  return (
    <section id="hero" className="kent-banner-sec relative font-sans text-white select-none">



      {/* Parallax Zooming Image Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="kent-hero-parallax-bg"
          style={{
            transform: `scale(${1 + scrollRate * 0.5})`,
          }}
        >
          <img
            src={slide.image}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85";
            }}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />

          {/* Double Vignette Overlay */}
          <div className="absolute inset-0 kent-vignette-overlay" />
          <div className="absolute inset-0 kent-bottom-gradient" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content Overlay */}
      <div className="kent-hero-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="max-w-3xl">

            {/* Top Sub-Headline */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tag-${slide.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6 }}
                className="trusted-tagline text-[#edf7f1] text-xl sm:text-3xl lg:text-[36px] font-normal mb-2 lg:mb-4 tracking-wide flex items-center gap-3"
              >
                <span className="w-10 h-[3px] bg-[#226e40] inline-block rounded-full" />
                <span>{slide.trustedTag}</span>
              </motion.div>
            </AnimatePresence>

            {/* Animated Hero Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${slide.id}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="hero-title text-4xl sm:text-6xl lg:text-[5.555rem] font-normal text-white leading-[1.05] tracking-tight mb-3 lg:mb-5 drop-shadow-md"
              >
                {slide.title}
              </motion.h1>
            </AnimatePresence>

            {/* Short Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${slide.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-slate-200 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-xl mb-6 text-shadow-sm"
              >
                {slide.description}
              </motion.p>
            </AnimatePresence>

            {/* Single Pill CTA Button & Centered Carousel Dots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex flex-col items-center gap-4 mb-6"
            >
              <button
                onClick={() => onOpenConsultation('Enquiry Now')}
                className="px-8 py-3 rounded-full text-base font-semibold text-white bg-black/20 hover:bg-white hover:text-[#304654] border border-white transition-all duration-300 active:scale-95 flex items-center gap-3 group cursor-pointer shadow-lg"
              >
                <span>Enquiry Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              {/* Carousel Pagination Dots (Centered beneath the button) */}
              <div className="flex items-center justify-center gap-3 pt-1">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentSlide
                        ? 'bg-white scale-100 shadow-xs'
                        : 'border border-white/80 bg-transparent hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>



    </section>
  );
};
