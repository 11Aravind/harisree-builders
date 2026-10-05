import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Edit3 } from 'lucide-react';
import { COMPANY_INFO } from '../data/landingData';

interface FloatingActionsProps {
  onOpenConsultation: () => void;
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenConsultation }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
      bgClass: 'bg-[#20c997] hover:bg-[#12b886]',
      onClick: onOpenConsultation,
    }
  ];

  return (
    <aside
      aria-label="Quick Contact Actions"
      className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3.5 select-none"
    >
      {actions.map((act, idx) => {
        const isHovered = hoveredIdx === idx;

        const buttonElement = (
          <motion.div
            animate={{ y: isHovered ? 0 : [0, -3, 0] }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }
            }}
            className={`h-12 rounded-full border border-white/20 shadow-xl shadow-slate-900/20 text-white flex items-center justify-center cursor-pointer transition-all duration-300 ease-out overflow-hidden ${
              act.bgClass
            } ${isHovered ? 'px-4.5 gap-2.5 scale-105 shadow-2xl' : 'w-12 px-0'}`}
          >
            {/* Centered Icon */}
            {act.icon}

            {/* Label inside expanding pill */}
            <span
              className={`text-sm font-semibold tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 ${
                isHovered ? 'max-w-[130px] opacity-100' : 'max-w-0 opacity-0'
              }`}
            >
              {act.label}
            </span>
          </motion.div>
        );

        if (act.onClick) {
          return (
            <button
              key={act.id}
              onClick={act.onClick}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="focus:outline-none cursor-pointer"
              aria-label={act.label}
            >
              {buttonElement}
            </button>
          );
        }

        return (
          <a
            key={act.id}
            href={act.href}
            target={act.target}
            rel={act.target ? 'noreferrer' : undefined}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="focus:outline-none cursor-pointer"
            aria-label={act.label}
          >
            {buttonElement}
          </a>
        );
      })}
    </aside>
  );
};
