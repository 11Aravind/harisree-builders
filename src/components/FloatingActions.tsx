import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Phone, Mail, Edit3 } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingActionsProps {
  onOpenConsultation: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenConsultation }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        // Reveal floating actions only after scrolling past the Hero section (entering white background)
        setIsVisible(rect.bottom <= 60);
      } else {
        setIsVisible(window.scrollY > 500);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const actions = [
    {
      id: 'phone',
      icon: <Phone className="w-5 h-5 text-white shrink-0" />,
      label: 'Call Now',
      bgClass: 'bg-[#009688] hover:bg-[#00796b]',
      href: `tel:${COMPANY_INFO.phoneRaw}`,
    },
    {
      id: 'whatsapp',
      icon: <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />,
      label: 'WhatsApp',
      bgClass: 'bg-[#25D366] hover:bg-[#20bd5a]',
      href: `https://wa.me/919633479993?text=${encodeURIComponent('Hello Harisree Builders! I am interested in your architectural & construction services.')}`,
      target: '_blank'
    },
    {
      id: 'email',
      icon: <Mail className="w-5 h-5 text-white shrink-0" />,
      label: 'Mail Us',
      bgClass: 'bg-[#00a8e8] hover:bg-[#0088c2]',
      href: `mailto:${COMPANY_INFO.email}`,
    },
    {
      id: 'enquiry',
      icon: <Edit3 className="w-5 h-5 text-white shrink-0" />,
      label: 'Enquire',
      bgClass: 'bg-[#00875a] hover:bg-[#006c48]',
      onClick: onOpenConsultation,
    }
  ];

  // Stagger animation variants for Desktop buttons (Pop in one by one)
  const desktopContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const desktopItemVariants: Variants = {
    hidden: { opacity: 0, x: 45, scale: 0.75 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 16,
        stiffness: 220
      }
    },
    exit: {
      opacity: 0,
      x: 35,
      scale: 0.75,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      {/* Mobile Screen: ONLY WhatsApp Floating Button in the Bottom Right Corner with Pulse Animation */}
      <AnimatePresence>
        {isVisible && (
          <motion.aside
            key="mobile-floating-whatsapp"
            aria-label="Mobile WhatsApp Floating Action"
            initial={{ opacity: 0, scale: 0.4, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.4, y: 30 }}
            transition={{ type: 'spring', damping: 15, stiffness: 260 }}
            className="md:hidden fixed bottom-6 right-5 z-50 select-none"
          >
            <div className="relative flex items-center justify-center">
              {/* Outer Radiating Pulse Ripple Waves */}
              <span className="absolute w-14 h-14 rounded-full bg-[#25D366] opacity-40 animate-ping" />
              <span className="absolute w-16 h-16 rounded-full bg-[#25D366]/25 animate-pulse" />

              <motion.a
                href={`https://wa.me/919633479993?text=${encodeURIComponent('Hello Harisree Builders! I am interested in your architectural & construction services.')}`}
                target="_blank"
                rel="noreferrer"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, -3, 3, -3, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut"
                }}
                className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-emerald-900/50 flex items-center justify-center active:scale-90 transition-transform cursor-pointer border-2 border-white"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-7 h-7 text-white shrink-0 drop-shadow-sm" />
              </motion.a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Screen: Vertical Floating Actions Stack (Pops in one-by-one after scrolling past Hero) */}
      <AnimatePresence>
        {isVisible && (
          <motion.aside
            key="desktop-floating-actions"
            aria-label="Desktop Quick Contact Actions"
            variants={desktopContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 flex-col items-end gap-3.5 select-none"
          >
            {actions.map((act) => {
              const innerContent = (
                <div className="flex items-center justify-center h-full w-full px-0 group-hover:px-4 transition-all duration-300">
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    {act.icon}
                  </div>
                  <span className="max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:ml-2.5 transition-all duration-300 ease-out whitespace-nowrap overflow-hidden text-sm font-semibold tracking-wide">
                    {act.label}
                  </span>
                </div>
              );

              const commonClasses = `group h-12 w-12 group-hover:w-auto rounded-full border border-white/20 shadow-xl shadow-slate-900/20 text-white flex items-center justify-center cursor-pointer transition-all duration-300 ease-out overflow-hidden hover:scale-105 hover:shadow-2xl ${act.bgClass}`;

              if (act.onClick) {
                return (
                  <motion.button
                    key={`desktop-${act.id}`}
                    variants={desktopItemVariants}
                    onClick={act.onClick}
                    className={`${commonClasses} focus:outline-none`}
                    aria-label={act.label}
                  >
                    {innerContent}
                  </motion.button>
                );
              }

              return (
                <motion.a
                  key={`desktop-${act.id}`}
                  variants={desktopItemVariants}
                  href={act.href}
                  target={act.target}
                  rel={act.target ? 'noreferrer' : undefined}
                  className={`${commonClasses} focus:outline-none`}
                  aria-label={act.label}
                >
                  {innerContent}
                </motion.a>
              );
            })}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};
