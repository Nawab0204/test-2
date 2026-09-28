import React, { useState } from 'react';
import { PageRoute } from '../../App';
import { ALL_SERVICES } from '../../data/lvtData';
import { WORK_SUBCATEGORIES } from '../../data/blogAndFaqData';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface CoreServicesSectionProps {
  setPage: (page: PageRoute) => void;
  setSelectedSlug: (slug: string) => void;
}

export const CoreServicesSection: React.FC<CoreServicesSectionProps> = ({
  setPage,
  setSelectedSlug
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  // 100% verified 200 OK CDN images for Core Services Hero Cards
  const serviceMeta: Record<
    string,
    {
      badge: string;
      leadMetric: string;
      heroImage: string;
      quote: string;
      format: '2x3' | '2x2';
      highlights: string[];
    }
  > = {
    'design-engineering': {
      badge: 'Discipline 01 · Full-Scope MEP & Architectural Engineering',
      leadMetric: '100% Pre-Pour CAD Integration',
      heroImage:
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf439d3cb71cda94385f_Infinity%20Project%20Rendering.webp',
      quote:
        'Comprehensive low-voltage, electrical, and mechanical blueprints coordinated before concrete pours, eliminating costly retrofits and conduit rerouting.',
      format: '2x3',
      highlights: [
        'AutoCAD MEP & Revit 3D Blueprints',
        'Structural Slab & Grade Beam Conduit Layouts',
        'Tropical HVAC & Humidity Mitigation Schematics',
        'Clean Electrical Distribution & Surge Isolation'
      ]
    },
    'home-automation-system-integration': {
      badge: 'Discipline 02 · Unified Smart Living & Whole-Villa Control',
      leadMetric: 'Single-App Intuitive Orchestration',
      heroImage:
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28.webp',
      quote:
        'One seamless platform for lighting, climate, motorized shades, pool temperature, and audiovisuals across the entire Caribbean estate.',
      format: '2x3',
      highlights: [
        'Lutron Palladiom & Crestron Architectural Keypads',
        'Whole-Villa iOS / Android / In-Wall Touchscreen OS',
        'Automated Hurricane Roll-Shutters & Solar Screens',
        'Smart Pool, Spa, Tennis Court & Cabana Telemetry'
      ]
    },
    'lights-access-security-sound-video': {
      badge: 'Discipline 03 · Architectural Lighting, Marine AV & Perimeter AI',
      leadMetric: '95+ CRI LED & Marine 316 Stainless',
      heroImage:
        'https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d77d5b1bf257cbf481a8c7_27.webp',
      quote:
        'Museum-quality tunable circadian lighting, weatherproof landscape audio, and optical AI gate attendants engineered for coastal environments.',
      format: '2x3',
      highlights: [
        'Circadian Tunable White & Warm Dimming Scenes',
        'AI License Plate & Biometric Perimeter Gates',
        'Marine 316 Stainless Weatherproof Sound Arrays',
        'Dolby Atmos 4K Laser Screening Theaters'
      ]
    },
    'network-infrastructure-engineering': {
      badge: 'Discipline 04 · High-Reliability Enterprise Communications',
      leadMetric: '10Gbps Armored Fiber Optics',
      heroImage:
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e85282f88781019a21fe_La%20Samanna%205.jpg',
      quote:
        'Steel-armored fiber optic subterranean loops across multi-acre compounds with sub-second Starlink satellite backup.',
      format: '2x2',
      highlights: [
        'Subterranean 10Gbps Single-Mode Fiber Backbones',
        'Dual-WAN Starlink + Local Fiber Auto-Failover',
        'Climate-Controlled Positive-Pressure Server Racks',
        'Zero Dead-Zone High-Density Enterprise Wi-Fi 6/7'
      ]
    },
    'sustainability-maintenance-and-support': {
      badge: 'Discipline 05 · Clean Energy & 24/7/365 On-Island Support',
      leadMetric: '2-Hour SLA Dispatch via LVC',
      heroImage:
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0ece4a2ae7434eec419d_C%27est%20la%20Vie%208.webp',
      quote:
        'Solar microgrid synchronization paired with around-the-clock remote monitoring and rapid technician dispatch from Marigot headquarters.',
      format: '2x2',
      highlights: [
        'Solar PV Microgrid & LiFePO4 Battery Storage',
        '24/7/365 On-Island SLA Emergency Dispatch (LVC)',
        'Continuous Cloud Heartbeat Telemetry Every 60s',
        'Quarterly Salt-Spray Audits & Hurricane Lockdown Tests'
      ]
    }
  };

  const filteredServices =
    activeTab === 'all'
      ? ALL_SERVICES
      : ALL_SERVICES.filter((s) => s.slug === activeTab);

  return (
    <section className="py-24 bg-white border-b border-neutral-200" id="core-services">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00aca9] bg-[#00aca9]/10 px-3.5 py-1.5 rounded-full inline-block">
              Foundational Disciplines · How We Can Help
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002d2c] tracking-tight">
              Our Core Services &amp; Specialized Disciplines
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base max-w-2xl font-light">
              Explore the five foundational technology divisions engineered by Luxury Villa Technologies. Beneath each core service, discover its exact subcategories presented in structured 2x3 and 2x2 formats with verified imagery.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="lvt-wf-button text-xs uppercase tracking-wider font-semibold shrink-0"
            >
              Full Service Matrix
            </button>
          </div>
        </div>

        {/* Quick Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-neutral-100">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-[#002d2c] text-[#00aca9] shadow-sm'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            All 5 Core Services
          </button>
          {ALL_SERVICES.map((s, idx) => (
            <button
              key={s.slug}
              onClick={() => setActiveTab(s.slug)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeTab === s.slug
                  ? 'bg-[#002d2c] text-[#00aca9] shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              0{idx + 1}. {s.title.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* 5 Core Services Stack */}
        <div className="space-y-28">
          {filteredServices.map((service, sIdx) => {
            const meta = serviceMeta[service.slug] || {
              badge: `Discipline 0${sIdx + 1}`,
              leadMetric: 'Turnkey Integration',
              heroImage: service.images[0],
              quote: service.introParagraph,
              format: '2x3' as const,
              highlights: service.features.slice(0, 4).map((f) => f.title)
            };

            // Get subcategories specifically belonging to this service
            const subcategories = WORK_SUBCATEGORIES.filter(
              (sub) => sub.parentServiceSlug === service.slug
            );

            return (
              <div
                key={service.slug}
                className="space-y-10 scroll-mt-28"
                id={`service-${service.slug}`}
              >
                {/* 1. MAIN LARGE SQUARE/PROMINENT BOX SPANNING LEFT TO RIGHT */}
                <div className="bg-[#fbfcfc] rounded-3xl border border-neutral-200 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    {/* Visual Half: Big Large Image Box */}
                    <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] bg-black overflow-hidden group">
                      <img
                        src={meta.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Top Overlay Badges */}
                      <div className="absolute top-6 left-6 flex flex-wrap items-center gap-2">
                        <span className="bg-[#002d2c]/90 backdrop-blur-md text-[#00aca9] font-mono font-bold text-xs px-3.5 py-1.5 rounded-full border border-[#00aca9]/30 shadow-md">
                          DISCIPLINE 0{sIdx + 1}
                        </span>
                        <span className="bg-white/90 backdrop-blur-md text-[#002d2c] font-semibold text-xs px-3.5 py-1.5 rounded-full shadow-md">
                          {meta.leadMetric}
                        </span>
                      </div>

                      {/* Bottom Image Overlay Caption */}
                      <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                        <div className="text-xs uppercase tracking-widest text-[#00aca9] font-bold">
                          Caribbean Field Installation
                        </div>
                        <div className="text-xl font-bold drop-shadow-md">
                          {service.title}
                        </div>
                      </div>
                    </div>

                    {/* Content Half */}
                    <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8 bg-white">
                      <div className="space-y-5">
                        <div className="space-y-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#00aca9]">
                            {meta.badge}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold text-[#002d2c] tracking-tight leading-snug">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-neutral-600 text-sm leading-relaxed font-light">
                          {service.shortDescription}
                        </p>

                        <blockquote className="p-4 rounded-xl bg-[#fafafa] border-l-4 border-[#00aca9] text-xs text-neutral-700 italic leading-relaxed">
                          "{meta.quote}"
                        </blockquote>

                        {/* Engineering Highlights */}
                        <div className="space-y-2.5 pt-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-neutral-800 block">
                            Key Engineering Pillars:
                          </span>
                          <ul className="space-y-2">
                            {meta.highlights.map((item, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-2.5 text-xs text-neutral-600">
                                <CheckCircle2 className="w-4 h-4 text-[#00aca9] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center gap-4">
                        <button
                          onClick={() => {
                            setSelectedSlug(service.slug);
                            setPage('service-detail');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="lvt-wf-button text-xs uppercase tracking-wider font-semibold flex items-center gap-2"
                        >
                          <span>Explore Blueprint</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => {
                            setPage('contact');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="lvt-wf-button-outline !text-[#002d2c] !border-neutral-300 hover:!border-[#00aca9] text-xs uppercase tracking-wider font-semibold"
                        >
                          Inquire for Villa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. SUBCATEGORIES BENEATH EACH SERVICE IN 2x3 OR 2x2 FORMAT */}
                <div className="space-y-6 pt-2">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#00aca9]">
                        Specialized Work Subcategories
                      </span>
                      <h4 className="text-xl font-bold text-[#002d2c] flex items-center gap-2 mt-1">
                        <Layers className="w-4 h-4 text-[#00aca9]" />
                        <span>Subcategories of {service.title} ({meta.format} Format)</span>
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-semibold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full hidden sm:inline">
                      {subcategories.length} Technical Divisions
                    </span>
                  </div>

                  {/* Dynamic 2x3 or 2x2 Grid Layout */}
                  <div
                    className={`grid gap-6 ${
                      meta.format === '2x3'
                        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        : 'grid-cols-1 md:grid-cols-2'
                    }`}
                  >
                    {subcategories.map((sub) => (
                      <div
                        key={sub.id}
                        onClick={() => {
                          setSelectedSlug(sub.parentServiceSlug);
                          setPage('service-detail');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#00aca9] transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                      >
                        <div>
                          {/* Rectangular Image with Zoom Effect */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                            <img
                              src={sub.image}
                              alt={sub.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="bg-[#002d2c]/90 backdrop-blur-md text-[#00aca9] text-[10px] font-semibold px-2.5 py-1 rounded shadow-xs uppercase tracking-wider">
                                {sub.tag}
                              </span>
                            </div>
                          </div>

                          <div className="p-6 space-y-2.5">
                            <h5 className="text-base font-bold text-[#002d2c] group-hover:text-[#00aca9] transition-colors leading-snug">
                              {sub.title}
                            </h5>
                            <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed font-light">
                              {sub.description}
                            </p>
                          </div>
                        </div>

                        <div className="p-6 pt-0">
                          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                            {sub.technologies.slice(0, 3).map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] bg-neutral-100 text-neutral-700 px-2.5 py-0.5 rounded font-mono font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
