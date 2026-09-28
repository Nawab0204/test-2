import React from 'react';
import { COMPANY_INFO } from '../../data/lvtData';

export const PartnerMarquee: React.FC = () => {
  const logos = COMPANY_INFO.partnerLogos;

  return (
    <section className="w-full bg-white border-y border-neutral-200 py-10 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-2">
        <span className="font-semibold uppercase tracking-widest text-[#002d2c] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00aca9]"></span>
          Authorized Integration Partners &amp; Industry Standards
        </span>
        <span className="hidden sm:inline text-neutral-400">
          Factory-Certified Commercial &amp; Residential Technologies
        </span>
      </div>

      {/* Infinite Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex items-center gap-14 sm:gap-16 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] py-3">
          {/* First set of original brand logos - NO double names, larger size */}
          {logos.map((logo, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="flex items-center justify-center px-4 py-2 group transition-transform duration-300 hover:scale-110 shrink-0"
              title={`${logo.name} — ${logo.category}`}
            >
              <img
                src={logo.logoUrl}
                alt={logo.name}
                className="h-10 sm:h-12 md:h-14 max-w-[170px] w-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                loading="lazy"
              />
            </div>
          ))}

          {/* Duplicate set for seamless continuous loop - NO double names, larger size */}
          {logos.map((logo, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="flex items-center justify-center px-4 py-2 group transition-transform duration-300 hover:scale-110 shrink-0"
              title={`${logo.name} — ${logo.category}`}
            >
              <img
                src={logo.logoUrl}
                alt={logo.name}
                className="h-10 sm:h-12 md:h-14 max-w-[170px] w-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-xs"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
