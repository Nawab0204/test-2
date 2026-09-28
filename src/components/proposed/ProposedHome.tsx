import React from 'react';
import { PageRoute } from '../common/ModeControlBar';
import { ALL_PROJECTS, ALL_SERVICES, COMPANY_INFO } from '../../data/lvtData';
import { VillaReadinessAudit } from './VillaReadinessAudit';
import { ArrowRight, ShieldCheck, Cpu, Wifi, Sun, CheckCircle, ExternalLink, Sparkles, Building2, Home as HomeIcon, Award } from 'lucide-react';

interface ProposedHomeProps {
  setPage: (page: PageRoute) => void;
  setSelectedSlug: (slug: string) => void;
  targetAudience: 'owners' | 'architects';
  setTargetAudience: (aud: 'owners' | 'architects') => void;
  onOpenConsultation: () => void;
}

export const ProposedHome: React.FC<ProposedHomeProps> = ({
  setPage,
  setSelectedSlug,
  targetAudience,
  setTargetAudience,
  onOpenConsultation
}) => {
  // Flagship projects for Proposed Showcase
  const flagshipProjects = [
    {
      ...ALL_PROJECTS.find((p) => p.slug === 'villa-bella-vita')!,
      metric: 'First in Caribbean',
      metricLabel: 'Smart Home Pioneer',
      challenge: 'Retrofitting a massive beachfront luxury estate with whole-villa automation, solar microgrid, and unified iPad/keypad control without cutting visible concrete surfaces.',
      outcome: 'Named the first automated smart home on St. Maarten. 40% reduction in peak generator load and seamless single-app control.'
    },
    {
      ...ALL_PROJECTS.find((p) => p.slug === 'la-samanna')!,
      metric: '6-Week Rapid Deploy',
      metricLabel: 'Resort Reopening',
      challenge: 'Opening date was 4 days away with 0 rooms connected to IT infrastructure following devastating hurricane damage.',
      outcome: 'LVT engineered and installed complete armored fiber-optic infrastructure, IPTV, VoIP, and Wi-Fi across 83 guest rooms and 8 villas with 100% operational uptime.'
    },
    {
      ...ALL_PROJECTS.find((p) => p.slug === 'infinity-villas')!,
      metric: '12 Luxury Estates',
      metricLabel: 'ELIE SAAB Interiors',
      challenge: 'Engineering complete MEP, electrical, and AI security systems for 12 cliffside villas in Indigo Bay to meet stringent international luxury design codes.',
      outcome: 'Engineered comprehensive high/low-voltage distribution, concealed architectural lighting, and AI-powered gate access attendant.'
    }
  ];

  return (
    <div className="w-full bg-[#030d0d] text-neutral-100 font-sans-luxury">
      {/* 1. ARCHITECTURAL LUXURY HERO */}
      <section className="relative min-h-[750px] lg:min-h-[850px] flex items-center bg-[#001717] overflow-hidden border-b border-white/10">
        {/* Full-bleed Architectural Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28.webp"
            alt="Villa Bella Vita Caribbean Smart Estate"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001717] via-[#001717]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#001717] via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl space-y-6">
            {/* Trust Kicker (Unboxed Clean Metadata) */}
            <div className="flex items-center gap-2 text-xs text-[#00aca9] font-medium tracking-widest uppercase">
              <span>Sint Maarten &amp; Saint Martin</span>
              <span aria-hidden="true">·</span>
              <span>Systems Integration &amp; MEP</span>
              <span aria-hidden="true">·</span>
              <span>Est. 2016</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-display">
              Engineering the Caribbean’s Most Advanced Autonomous Estates.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
              We coordinate precision MEP engineering, 10Gbps fiber-optic backbones, and bespoke Building Management Systems for multi-million dollar Caribbean villas and five-star resorts. From initial schematics to 24/7/365 proactive care.
            </p>

            {/* Persona Switcher Quick Action */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 rounded text-xs uppercase font-bold tracking-wider bg-[#00aca9] text-[#001717] hover:bg-[#00aca9]/90 hover:shadow-xl transition-all"
              >
                Schedule Technical Consultation
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('readiness-audit');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded text-xs uppercase font-medium tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Run Villa Readiness Audit <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-neutral-300">
              <div>
                <div className="text-2xl font-bold text-white font-display">35+ Yrs</div>
                <div className="text-xs text-neutral-400 mt-0.5">Telecom &amp; Systems Pedigree</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-display">16 Landmark</div>
                <div className="text-xs text-neutral-400 mt-0.5">Villas &amp; Commercial Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-display">100%</div>
                <div className="text-xs text-neutral-400 mt-0.5">Hurricane Irma Fiber Recovery</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-display">24/7/365</div>
                <div className="text-xs text-neutral-400 mt-0.5">Dedicated SLA Care (LVC)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DUAL PERSONA ROUTING SECTION */}
      <section className="py-20 bg-[#001212] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">Tailored Engagement</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
              Built for Those Who Demand Absolute Excellence
            </h2>
            <p className="text-sm text-neutral-400">
              Select your persona below to view custom specifications and collaboration workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Villa Owners */}
            <div
              onClick={() => setTargetAudience('owners')}
              className={`p-8 rounded-xl border transition-all cursor-pointer space-y-6 ${
                targetAudience === 'owners'
                  ? 'bg-[#002222] border-[#00aca9] shadow-2xl'
                  : 'bg-black/30 border-white/10 hover:border-white/30'
              }`}
            >
              <div className="w-12 h-12 rounded bg-[#002d2c] text-[#00aca9] flex items-center justify-center">
                <HomeIcon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#00aca9] uppercase tracking-wider">For Villa Owners &amp; Estate Managers</span>
                <h3 className="text-2xl font-bold text-white font-display">Effortless Sovereign Living</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Your Caribbean residence should feel like an intuitive sanctuary. Control multi-zone climate, automated lighting, motorized blackout shades, and crystal-clear acoustic zones from a single app or bespoke wall keypad—whether sitting on your terrace or managing from Geneva or New York.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00aca9] shrink-0" />
                  <span>Single-App Control: Eliminate 8 different remotes and disparate apps</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00aca9] shrink-0" />
                  <span>Remote Surveillance &amp; Telemetry: Monitor water cisterns, power, and AC from abroad</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00aca9] shrink-0" />
                  <span>Vacation Rental Mode: One-touch guest scenes with locked technical infrastructure</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="text-xs text-[#00aca9] font-bold uppercase tracking-wider flex items-center gap-1.5 hover:underline"
                >
                  Consult for Private Residence →
                </button>
              </div>
            </div>

            {/* Card 2: Architects & Developers */}
            <div
              onClick={() => setTargetAudience('architects')}
              className={`p-8 rounded-xl border transition-all cursor-pointer space-y-6 ${
                targetAudience === 'architects'
                  ? 'bg-[#002222] border-[#00aca9] shadow-2xl'
                  : 'bg-black/30 border-white/10 hover:border-white/30'
              }`}
            >
              <div className="w-12 h-12 rounded bg-[#002d2c] text-[#00aca9] flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#00aca9] uppercase tracking-wider">For Architects &amp; General Contractors</span>
                <h3 className="text-2xl font-bold text-white font-display">Engineering Precision &amp; MEP Liaison</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Avoid costly redesigns, messy wall clutter, and contractor friction. LVT acts as your dedicated low-voltage and MEP integration engineering partner, providing full CAD/Revit schematics, thermal rack load calculations, conduit layout schedules, and tender compliance.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00aca9] shrink-0" />
                  <span>BIM &amp; CAD Schematics: Pre-construction low-voltage coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00aca9] shrink-0" />
                  <span>Turnkey Subcontractor: Single point of responsibility for electrical, fiber, AV &amp; BMS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00aca9] shrink-0" />
                  <span>Commercial Tender Support: Rigorous technical specifications for institutional bids</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="text-xs text-[#00aca9] font-bold uppercase tracking-wider flex items-center gap-1.5 hover:underline"
                >
                  Request Architectural Collaboration →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE VILLA READINESS AUDIT */}
      <section id="readiness-audit" className="py-24 bg-[#001717] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">Live System Configurator</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
              Diagnose Your Property’s Technology Architecture
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl mx-auto">
              Configure your estate parameters to generate an instant technical blueprint outlining rack specifications, fiber drops, and hurricane resilience requirements.
            </p>
          </div>

          <VillaReadinessAudit onScheduleConsultation={onOpenConsultation} />
        </div>
      </section>

      {/* 4. MARQUEE ARCHITECTURAL CASE STUDIES (Challenge -> Scope -> Outcome) */}
      <section className="py-24 bg-[#001010] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">Irrefutable Proof of Work</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white font-display mt-1">
                Architectural Case Studies
              </h2>
            </div>
            <button
              onClick={() => {
                setPage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs uppercase font-bold text-[#00aca9] hover:underline flex items-center gap-1"
            >
              Browse All 16 Case Studies →
            </button>
          </div>

          <div className="space-y-16">
            {flagshipProjects.map((p, idx) => (
              <div
                key={p.slug}
                onClick={() => {
                  setSelectedSlug(p.slug);
                  setPage('project-detail');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#001a1a] rounded-xl border border-white/10 overflow-hidden hover:border-[#00aca9]/60 transition-all cursor-pointer group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-xs">
                    <span className="text-[#00aca9] font-bold">{p.metric}</span>
                    <span className="text-neutral-400 mx-1.5">|</span>
                    <span className="text-neutral-200">{p.metricLabel}</span>
                  </div>
                </div>

                <div className="lg:col-span-6 p-8 lg:p-10 space-y-6">
                  <div>
                    <span className="text-xs text-[#00aca9] font-bold uppercase tracking-wider">
                      {p.country || p.region}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1 group-hover:text-[#00aca9] transition-colors">
                      {p.title}
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs text-neutral-300">
                    <div>
                      <strong className="text-neutral-100 uppercase tracking-wider text-[11px] block mb-1">
                        The Challenge:
                      </strong>
                      <p className="text-neutral-400 leading-relaxed">{p.challenge}</p>
                    </div>

                    <div>
                      <strong className="text-neutral-100 uppercase tracking-wider text-[11px] block mb-1">
                        Engineering Result:
                      </strong>
                      <p className="text-neutral-300 leading-relaxed">{p.outcome}</p>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs font-bold text-[#00aca9]">
                    <span>View Complete Architectural Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TROPICAL RESILIENCE & HURRICANE HARDENING */}
      <section className="py-20 bg-[#001717] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">The Caribbean Engineering Standard</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
              Engineered to Outlast Salt-Air, Heat &amp; Category 5 Storms
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Standard consumer smart home gear corrodes and fails within 18 months in the Caribbean. LVT designs commercial-grade architectures specifically hardened against tropical reality:
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#00aca9] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Salt-Air Hermetic Sealing</h4>
                  <p className="text-xs text-neutral-400">
                    IP66 weatherproof outdoor enclosures, marine-grade stainless hardware, and conformal-coated electronics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Wifi className="w-5 h-5 text-[#00aca9] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Starlink Dual-WAN Zero-Downtime Failover</h4>
                  <p className="text-xs text-neutral-400">
                    If local island fiber is severed during tropical storms, satellite telemetry instantly keeps security, cameras, and keypads online.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sun className="w-5 h-5 text-[#00aca9] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Microgrid Solar &amp; Battery Sequencing</h4>
                  <p className="text-xs text-neutral-400">
                    Automatic generator transfer switches and intelligent load shedding preserve critical refrigeration and AC zones during island outages.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#002222] p-8 rounded-xl border border-[#00aca9]/30 space-y-6">
            <h3 className="text-xl font-bold text-white font-display">
              Sister Company Advantage: Luxury Villa Care (LVC)
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Technology without local maintenance is an estate liability. LVT operates alongside Luxury Villa Care (LVC) to deliver proactive 24/7/365 telemetry monitoring, quarterly firmware patches, battery audits, and rapid on-site emergency dispatch.
            </p>
            <div className="p-4 bg-black/40 rounded border border-white/10 text-xs space-y-1 text-neutral-300">
              <div><strong>Average Response Time:</strong> &lt; 2 Hours across Saint Martin &amp; Sint Maarten</div>
              <div><strong>Remote Telemetry:</strong> 24/7 Server closet temperature &amp; UPS heartbeat</div>
              <div><strong>Warranty:</strong> Priority hardware hot-swaps without overseas shipping delays</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GLOBAL CERTIFIED PARTNERS MATRIX */}
      <section className="py-16 bg-[#001010] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-8">
            Certified Caribbean Integration Partner for World-Leading Infrastructure
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center opacity-85">
            {COMPANY_INFO.partnerLogos.map((p) => (
              <div
                key={p.name}
                className="h-12 flex items-center justify-center p-2 bg-white/5 rounded border border-white/5 hover:border-[#00aca9]/40 hover:bg-white/10 transition-all"
                title={`${p.name} (${p.category})`}
              >
                <img
                  src={p.logoUrl}
                  alt={p.name}
                  className="max-h-7 max-w-full object-contain filter invert"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HIGH-CONVERTING EXECUTIVE CTA */}
      <section className="py-24 bg-[#001717]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">Begin The Conversation</span>
          <h2 className="text-2xl sm:text-5xl font-bold text-white font-display">
            Plan Your Villa Technology Master Plan
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Whether designing a new beachfront estate in Terres Basses or developing a multi-unit resort in Indigo Bay, schedule a confidential technical session with founders Michel Maduro and Hans de Bruyne.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded text-xs uppercase font-bold tracking-wider bg-[#00aca9] text-[#001717] hover:bg-[#00aca9]/90 hover:shadow-2xl transition-all"
            >
              Book Executive Consultation
            </button>
            <a
              href="tel:+590690886671"
              className="px-8 py-4 rounded text-xs uppercase font-medium tracking-wider border border-white/20 text-white hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Call +590 (690) 886671
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
