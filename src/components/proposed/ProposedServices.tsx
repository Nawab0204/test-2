import React, { useState } from 'react';
import { PageRoute } from '../common/ModeControlBar';
import { ALL_SERVICES, ServiceData } from '../../data/lvtData';
import { ArrowRight, Cpu, Wifi, Sun, ShieldCheck, Wrench, CheckCircle, ExternalLink, Sparkles, Filter } from 'lucide-react';

interface ProposedServicesProps {
  setPage: (page: PageRoute) => void;
  setSelectedSlug: (slug: string) => void;
  onOpenConsultation?: () => void;
}

export const ProposedServices: React.FC<ProposedServicesProps> = ({
  setPage,
  setSelectedSlug,
  onOpenConsultation
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'new-build' | 'retrofit' | 'hospitality'>('all');

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'design-engineering':
        return <Cpu className="w-6 h-6 text-[#00aca9]" />;
      case 'home-automation':
        return <Sparkles className="w-6 h-6 text-[#00aca9]" />;
      case 'network-infrastructure':
        return <Wifi className="w-6 h-6 text-[#00aca9]" />;
      case 'lights-access-security':
        return <Sun className="w-6 h-6 text-[#00aca9]" />;
      case 'sustainability-maintenance':
        return <Wrench className="w-6 h-6 text-[#00aca9]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#00aca9]" />;
    }
  };

  const getServiceSpecifics = (slug: string) => {
    switch (slug) {
      case 'design-engineering':
        return {
          leadProject: 'Infinity Villas, Indigo Bay',
          scopeBullets: [
            'Full CAD/BIM architectural technology integration schematics',
            'Lead MEP contractor coordination before concrete pours',
            'Precision cable pathway & centralized equipment room engineering',
            'Thermal load management for equipment enclosures'
          ],
          technologies: 'AutoCAD · Revit MEP · Middle Atlantic Racks · SurgeX Enterprise'
        };
      case 'home-automation':
        return {
          leadProject: 'Villa Bella Vita, Guana Bay',
          scopeBullets: [
            'Single-interface iPad, wall touchscreen & keypad orchestration',
            'Multi-zone HVAC humidity & temperature climate control',
            'Motorized shades & hurricane shutter scene integration',
            'Josh.ai privacy-first natural voice processing'
          ],
          technologies: 'Crestron Home · Lutron Palladiom · Savant · Josh.ai · Vantage'
        };
      case 'network-infrastructure':
        return {
          leadProject: 'Belmond La Samanna Resort',
          scopeBullets: [
            '10Gbps armored optical fiber backbones across multi-acre estates',
            'Enterprise zero-handoff Wi-Fi 7 with 100% pool, beach & guest coverage',
            'Redundant dual-WAN ISP failover (Starlink + island fiber)',
            'Isolated VLANs for guests, staff, AV streaming & building systems'
          ],
          technologies: 'Pakedge · Panduit Armored Fiber · Ruckus Wireless · Starlink Business'
        };
      case 'lights-access-security':
        return {
          leadProject: 'Aqua Resort & Marina',
          scopeBullets: [
            'Museum-grade 1% warm dimming architectural lighting scenes',
            'AI-powered optical license plate & facial recognition gate access',
            'Marine-grade 316 stainless exterior weatherproof acoustic audio',
            'Oceanfront PTZ surveillance with offshore vessel alerts'
          ],
          technologies: 'Lutron HomeWorks QSX · Triad Outdoor · JBL Synthesis · 2N Access'
        };
      case 'sustainability-maintenance':
        return {
          leadProject: 'Villa C’est La Vie, Terres Basses',
          scopeBullets: [
            'Solar PV microgrid, battery inverter & diesel generator automated synchronization',
            'Proprietary 24/7/365 remote telemetry via Luxury Villa Care (LVC)',
            'Guaranteed on-island 2-hour emergency technician dispatch',
            'Quarterly salt spray corrosion audit & preventive hardware servicing'
          ],
          technologies: 'LVC Telemetry · Schneider Inverters · Victron Energy · Kohler ATS'
        };
      default:
        return {
          leadProject: 'Caribbean Luxury Estates',
          scopeBullets: ['Complete turn-key engineering', 'Local on-island warranty support'],
          technologies: 'Enterprise Systems'
        };
    }
  };

  return (
    <div className="w-full bg-[#030d0d] text-neutral-100 font-sans-luxury">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 sm:py-32 bg-[#001717] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28.webp"
            alt="Engineering Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001717] via-[#001717]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-6">
          <div className="flex items-center gap-2 text-xs text-[#00aca9] font-medium tracking-widest uppercase">
            <span>Engineering Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Five Core Disciplines</span>
            <span aria-hidden="true">·</span>
            <span>Zero Hand-off Gaps</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display max-w-4xl leading-tight">
            Integrated Systems for the Caribbean’s Most Discerning Estates.
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed font-light">
            We eliminate the finger-pointing between architects, electrical contractors, and AV installers. LVT delivers single-source accountability across design, infrastructure, automation, and lifetime maintenance.
          </p>

          {/* Interactive Project Scope Filter */}
          <div className="pt-4 flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Disciplines' },
              { id: 'new-build', label: 'New Architectural Builds' },
              { id: 'retrofit', label: 'Legacy Estate Retrofits' },
              { id: 'hospitality', label: 'Boutique Resorts & Marinas' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeFilter === f.id
                    ? 'bg-[#00aca9] text-black shadow-md'
                    : 'bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SERVICES CATALOG */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          {ALL_SERVICES.map((service, index) => {
            const specifics = getServiceSpecifics(service.slug);
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.slug}
                className="bg-[#001717] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00aca9]/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Visual Half */}
                <div className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full ${isEven ? 'lg:order-2' : ''}`}>
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-full object-cover absolute inset-0 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001717] via-transparent to-transparent lg:hidden"></div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-xs font-mono font-bold bg-black/70 border border-white/10 text-[#00aca9] px-3 py-1 rounded backdrop-blur-md">
                      0{index + 1} / 05
                    </span>
                  </div>
                </div>

                {/* Content Half */}
                <div className={`lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                        {getServiceIcon(service.slug)}
                      </div>
                      <span className="text-xs text-[#00aca9] uppercase tracking-widest font-semibold">
                        Core Engineering Discipline
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                      {service.title}
                    </h2>

                    <p className="text-sm text-neutral-300 leading-relaxed font-light">
                      {service.introParagraph || service.shortDescription}
                    </p>

                    {/* Scope Bullets */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                        Engineering Deliverables:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                        {specifics.scopeBullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[#00aca9] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies & Reference Project */}
                    <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-neutral-500 block">Lead Reference Installation</span>
                        <span className="text-white font-medium">{specifics.leadProject}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block">Hardware &amp; Protocols</span>
                        <span className="text-neutral-300 font-mono text-[11px]">{specifics.technologies}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <button
                      onClick={() => {
                        setSelectedSlug(service.slug);
                        setPage('service-detail');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#00aca9] hover:text-[#00c5c1] transition-colors group"
                    >
                      <span>Explore Technical Blueprint</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenConsultation ? onOpenConsultation() : setPage('contact')}
                      className="text-xs text-neutral-400 hover:text-white transition-colors"
                    >
                      Consult on this discipline →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="py-20 bg-[#001212] border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Need a Multi-Discipline Engineering Package?
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
            We provide integrated MEP coordination and automated estate schematics that architects and prime general contractors can directly import into construction sets.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenConsultation ? onOpenConsultation() : setPage('contact')}
              className="px-8 py-3.5 bg-[#00aca9] hover:bg-[#00c5c1] text-black font-bold text-sm uppercase tracking-wider rounded transition-all shadow-lg hover:shadow-[#00aca9]/30"
            >
              Request Architectural Discovery Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
