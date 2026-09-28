import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../../data/lvtData';

export const OfficeLocationMap: React.FC = () => {
  const address = COMPANY_INFO.address;

  return (
    <section className="w-full bg-white border-b border-neutral-200 pt-20 pb-0" id="office-location">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00aca9] bg-[#00aca9]/10 px-3.5 py-1.5 rounded-full inline-block">
            Central Island Operations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002d2c] tracking-tight">
            Our Engineering Headquarters Location
          </h2>
          <p className="text-neutral-600 text-sm max-w-2xl font-light">
            Located at 5 Rue du Général de Gaulle in Marigot, Saint Martin (FWI), providing rapid technical dispatch and smart estate engineering across the Caribbean.
          </p>
        </div>

        <a
          href={address.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="lvt-wf-button text-xs uppercase tracking-wider font-semibold flex items-center gap-2 shrink-0"
        >
          <Navigation className="w-4 h-4" />
          <span>Open Full Google Map</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Full-Width Left-to-Right Edge-to-Edge Interactive Google Map */}
      <div className="w-full relative h-[480px] sm:h-[560px] bg-neutral-100 overflow-hidden border-t border-neutral-200">
        <div className="absolute top-4 left-6 z-10 bg-[#002d2c]/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs flex items-center gap-2 shadow-lg border border-white/10">
          <MapPin className="w-4 h-4 text-[#00aca9]" />
          <span className="font-semibold">Marigot, Saint Martin (FWI)</span>
          <span className="text-neutral-400 font-mono text-[10px]">18.0678° N, 63.0849° W</span>
        </div>

        <iframe
          title="Luxury Villa Technologies Headquarters Marigot"
          width="100%"
          height="100%"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=5+Rue+du+G%C3%A9n%C3%A9ral+de+Gaulle,+Marigot+97150,+Saint+Martin&t=&z=16&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </section>
  );
};
