import React from 'react';
import { PageRoute } from '../common/ModeControlBar';
import { COMPANY_INFO, FOUNDERS } from '../../data/lvtData';
import { ShieldCheck, Award, Cpu, Anchor, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface ProposedAboutProps {
  setPage: (page: PageRoute) => void;
  onOpenConsultation?: () => void;
}

export const ProposedAbout: React.FC<ProposedAboutProps> = ({ setPage, onOpenConsultation }) => {
  return (
    <div className="w-full bg-[#030d0d] text-neutral-100 font-sans-luxury">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 sm:py-32 bg-[#001717] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751c9444391c015b63297a7_Palapa-7.webp"
            alt="Caribbean Engineering Heritage"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001717] via-[#001717]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-6">
          <div className="flex items-center gap-2 text-xs text-[#00aca9] font-medium tracking-widest uppercase">
            <span>Leadership &amp; Heritage</span>
            <span aria-hidden="true">·</span>
            <span>35+ Years Caribbean Experience</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display max-w-4xl leading-tight">
            The Engineering Heritage Behind the Caribbean’s Elite Estates.
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed font-light">
            Luxury Villa Technologies was founded on a singular conviction: ultra-luxury Caribbean estates cannot depend on standard residential installers. We bring enterprise telecommunications rigor, electrical engineering depth, and 24/7 proactive facilities management to the world’s most demanding beachfront villas.
          </p>
        </div>
      </section>

      {/* 2. THE LEADERSHIP / FOUNDER SPOTLIGHT */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="space-y-4 mb-16">
          <span className="text-xs text-[#00aca9] font-semibold tracking-widest uppercase">Executive Leadership</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Direct Access to the Principals.
          </h2>
          <p className="text-neutral-400 max-w-2xl text-sm sm:text-base">
            Every LVT commission is directed personally by Michel Maduro and Hans de Bruyne. No junior handoffs or uncoordinated subcontractors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {FOUNDERS.map((founder, idx) => (
            <div
              key={idx}
              className="bg-[#001b1b] border border-white/10 rounded-xl p-8 sm:p-10 space-y-6 flex flex-col justify-between hover:border-[#00aca9]/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-display">{founder.name}</h3>
                    <p className="text-sm text-[#00aca9] font-medium">{founder.role}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00aca9]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {founder.bio}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Core Specialization</span>
                  <div className="flex flex-wrap gap-2">
                    {founder.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded text-neutral-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>Based in Saint Martin &amp; Sint Maarten</span>
                <span className="text-[#00aca9] font-medium">Direct Commission Oversight</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EVOLUTION TIMELINE */}
      <section className="py-20 sm:py-28 bg-[#001414] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4 mb-16 max-w-2xl">
            <span className="text-xs text-[#00aca9] font-semibold tracking-widest uppercase">Company Evolution</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              From Island Telecom Pioneer to Luxury Estate Integrator.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              A decades-long commitment to resilient Caribbean infrastructure that no off-island contractor can match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#001f1f] border border-white/10 p-6 rounded-lg space-y-3">
              <span className="text-xs font-bold text-[#00aca9] tracking-wider">1989 — 2015</span>
              <h4 className="text-lg font-bold text-white">Telecom Pioneers</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Michel introduces first commercial internet connectivity to St. Maarten via Network IDL and spearheads island-wide telecom networks at TelEm Group.
              </p>
            </div>

            <div className="bg-[#001f1f] border border-white/10 p-6 rounded-lg space-y-3">
              <span className="text-xs font-bold text-[#00aca9] tracking-wider">2016</span>
              <h4 className="text-lg font-bold text-white">IMCS Founded</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Hans &amp; Michel establish Innovative Management &amp; Consulting Services, delivering enterprise fiber, MEP consulting, and government-grade networking.
              </p>
            </div>

            <div className="bg-[#001f1f] border border-[#00aca9]/40 p-6 rounded-lg space-y-3 relative overflow-hidden">
              <div className="absolute top-2 right-2 text-[10px] bg-[#00aca9] text-black font-bold px-2 py-0.5 rounded">Core Brand</div>
              <span className="text-xs font-bold text-[#00aca9] tracking-wider">2022</span>
              <h4 className="text-lg font-bold text-white">LVT Created</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Luxury Villa Technologies launches to bring high-end engineering, whole-villa automation, and bespoke architectural technology exclusively to elite Caribbean residences.
              </p>
            </div>

            <div className="bg-[#001f1f] border border-white/10 p-6 rounded-lg space-y-3">
              <span className="text-xs font-bold text-emerald-400 tracking-wider">2024 &amp; Beyond</span>
              <h4 className="text-lg font-bold text-white">Luxury Villa Care</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Unveiled LVC: the Caribbean’s first dedicated 24/7/365 proactive monitoring, SLA dispatch, and remote diagnostics service for luxury villa owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TROPICAL RESILIENCE CONSTITUTION */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs text-[#00aca9] font-semibold tracking-widest uppercase">The Tropical Engineering Standard</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display leading-tight">
              Why Off-Island Systems Fail in the Caribbean.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Mainland integrators specify standard residential electronics that corrode in ocean air within 18 months, or crash during local power grid fluctuations. We engineer for Caribbean reality:
            </p>

            <ul className="space-y-4 text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00aca9] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Marine-Grade Conformal Coating &amp; Enclosures</strong>
                  Sub-micron conformal coatings on sensitive PCBs and 316-grade stainless steel exterior hardware to resist salt spray corrosion.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00aca9] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Power Grid Telemetry &amp; Microgrid Synchronization</strong>
                  Seamless automated switching between utility grid, backup diesel generators, and solar battery storage with zero flicker or equipment reboot.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00aca9] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Cat 5 Hurricane Lockdown Automation</strong>
                  One-tap hurricane storm protocols that lower motorized storm shutters, secure automated gates, seal HVAC dampers, and switch critical network racks to isolated battery backups.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#001717] border border-white/10 rounded-xl p-8 space-y-6">
            <h3 className="text-xl font-bold text-white font-display">Enterprise Credentials</h3>
            <p className="text-xs text-neutral-400">
              Certified and authorized by the world's most exacting luxury automation and infrastructure manufacturers:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['Crestron Home Certified', 'Lutron Palladiom & QSX', 'Savant Systems', 'Pakedge Enterprise Networking', 'Vantage Controls', 'Panduit Certified Structured Cabling', 'Triad Architectural Audio', 'JBL Synthesis', 'Josh.ai Private Voice AI'].map((brand, bIdx) => (
                <div key={bIdx} className="p-3 bg-black/40 border border-white/5 rounded text-xs text-center text-neutral-300 font-medium flex items-center justify-center">
                  {brand}
                </div>
              ))}
            </div>

            <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-xs text-emerald-300">
              <strong>100% Authorized Warranty Protection:</strong> All installations backed by factory warranty and local on-island spare parts inventory in Marigot.
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-b from-[#001717] to-[#000f0f] text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Plan Your Next Caribbean Commission with the Principals.
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Whether preparing MEP schematics for a new cliffside build in Indigo Bay or retrofitting a legacy estate in Terres Basses, Michel and Hans offer direct confidential discovery consultations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenConsultation ? onOpenConsultation() : setPage('contact')}
              className="px-8 py-3.5 bg-[#00aca9] hover:bg-[#00c5c1] text-black font-bold text-sm uppercase tracking-wider rounded transition-all shadow-lg hover:shadow-[#00aca9]/30"
            >
              Schedule Direct Discovery Call
            </button>
            <button
              onClick={() => setPage('projects')}
              className="px-8 py-3.5 border border-white/20 hover:border-white text-white font-medium text-sm rounded transition-all"
            >
              Explore Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
