import React from 'react';
import { PageRoute } from '../common/ModeControlBar';
import { ALL_SERVICES, ALL_PROJECTS, ServiceData } from '../../data/lvtData';
import { ArrowLeft, CheckCircle2, Shield, Download, ArrowRight, Layers, FileText, Cpu, Wrench } from 'lucide-react';

interface ProposedServiceDetailProps {
  slug: string;
  setPage: (page: PageRoute) => void;
  setSelectedSlug: (slug: string) => void;
  onOpenConsultation: () => void;
}

export const ProposedServiceDetail: React.FC<ProposedServiceDetailProps> = ({
  slug,
  setPage,
  setSelectedSlug,
  onOpenConsultation
}) => {
  const service = ALL_SERVICES.find((s) => s.slug === slug) || ALL_SERVICES[0];

  // Specific project references for this service
  const relevantProjects = ALL_PROJECTS.slice(0, 3);

  return (
    <div className="w-full bg-[#030d0d] text-neutral-100 font-sans-luxury">
      {/* 1. HERO HEADER */}
      <section className="bg-[#001717] py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <button
            onClick={() => {
              setPage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs text-[#00aca9] hover:underline flex items-center gap-1 font-bold uppercase tracking-wider mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Engineering Services
          </button>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-lg bg-[#002d2c] border border-[#00aca9]/30 p-2.5 flex items-center justify-center shrink-0">
              <img src={service.iconUrl} alt={service.title} className="w-9 h-9 object-contain" />
            </div>
            <div>
              <span className="text-xs text-[#00aca9] uppercase font-bold tracking-wider">
                Engineering Discipline &amp; Specification
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed font-light">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* 2. ENGINEERING FRAMEWORK & DELIVERABLES */}
      <section className="py-20 bg-[#001212] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Scope */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4">
              <span className="text-xs text-[#00aca9] uppercase font-bold tracking-wider">
                The LVT Engineering Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Architectural Execution &amp; Scope of Work
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {service.introParagraph}
              </p>
            </div>

            {/* Subsystem Capabilities Grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white font-display">
                Engineered Subsystems ({service.features.length} Components)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((f, i) => (
                  <div
                    key={f.title}
                    className="p-4 rounded-lg bg-[#001a1a] border border-white/5 space-y-2 hover:border-[#00aca9]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#00aca9]">0{i + 1}</span>
                      <h4 className="font-bold text-sm text-white">{f.title}</h4>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Deliverables & Consultation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#001c1c] p-6 rounded-xl border border-white/10 space-y-5">
              <div className="flex items-center gap-2 text-[#00aca9]">
                <FileText className="w-5 h-5" />
                <h4 className="font-bold text-sm uppercase tracking-wider text-white">
                  Formal Deliverables
                </h4>
              </div>

              <ul className="space-y-2.5 text-xs text-neutral-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00aca9] shrink-0 mt-0.5" />
                  <span>CAD / Revit Low-Voltage Conduit Schematics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00aca9] shrink-0 mt-0.5" />
                  <span>Rack Elevation Drawings &amp; Thermal Load Sizing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00aca9] shrink-0 mt-0.5" />
                  <span>Cable Schedule &amp; Termination Pinout Records</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00aca9] shrink-0 mt-0.5" />
                  <span>Commissioning Sign-Off &amp; Handover Training</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00aca9] shrink-0 mt-0.5" />
                  <span>Integrated As-Built Documentation Manual</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-white/10">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded text-xs uppercase font-bold tracking-wider bg-[#00aca9] text-[#001717] hover:bg-[#00aca9]/90 transition-all text-center"
                >
                  Request Technical Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDY EXAMPLES */}
      <section className="py-20 bg-[#001717] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-[#00aca9] uppercase font-bold tracking-wider">Field Implementation</span>
              <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                Representative Projects Utilizing This Service
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relevantProjects.map((p) => (
              <div
                key={p.slug}
                onClick={() => {
                  setSelectedSlug(p.slug);
                  setPage('project-detail');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#001212] rounded-lg border border-white/10 overflow-hidden hover:border-[#00aca9] transition-all cursor-pointer group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-1">
                  <span className="text-[10px] text-[#00aca9] uppercase font-bold tracking-wider">{p.country || p.region}</span>
                  <h4 className="font-bold text-white group-hover:text-[#00aca9] transition-colors">{p.title}</h4>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">{p.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
