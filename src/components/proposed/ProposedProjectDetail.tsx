import React, { useState } from 'react';
import { PageRoute } from '../common/ModeControlBar';
import { ALL_PROJECTS, ProjectData } from '../../data/lvtData';
import { ArrowLeft, CheckCircle2, Shield, Sparkles, MapPin, Calendar, ZoomIn, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface ProposedProjectDetailProps {
  slug: string;
  setPage: (page: PageRoute) => void;
  setSelectedSlug: (slug: string) => void;
  onOpenConsultation: () => void;
}

export const ProposedProjectDetail: React.FC<ProposedProjectDetailProps> = ({
  slug,
  setPage,
  setSelectedSlug,
  onOpenConsultation
}) => {
  const project = ALL_PROJECTS.find((p) => p.slug === slug) || ALL_PROJECTS[0];
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Other projects to suggest
  const relatedProjects = ALL_PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="w-full bg-[#030d0d] text-neutral-100 font-sans-luxury">
      {/* 1. HERO BANNER */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-end bg-[#001717] border-b border-white/10 overflow-hidden">
        {project.images.length > 0 && (
          <div className="absolute inset-0 z-0">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030d0d] via-[#030d0d]/70 to-transparent"></div>
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full space-y-4">
          <button
            onClick={() => {
              setPage('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs text-[#00aca9] hover:underline flex items-center gap-1 font-bold uppercase tracking-wider mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio Catalog
          </button>

          {/* Clean Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#00aca9] uppercase tracking-wider font-semibold">
            <span>{project.country || project.region}</span>
            <span aria-hidden="true">·</span>
            <span>{project.region}</span>
            <span aria-hidden="true">·</span>
            <span>Status: {project.completionDate || 'Completed'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight font-display">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-base sm:text-xl text-neutral-300 max-w-3xl leading-relaxed font-light">
              {project.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* 2. PROJECT SPECIFICATIONS DASHBOARD */}
      <section className="py-12 bg-[#001212] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-neutral-300">
            <div className="p-4 rounded bg-white/5 border border-white/5">
              <span className="text-[#00aca9] uppercase font-bold text-[10px] tracking-wider block mb-1">Location &amp; Territory</span>
              <div className="text-sm font-bold text-white">{project.country || 'Sint Maarten'}</div>
              <div className="text-neutral-400 mt-0.5">{project.region}</div>
            </div>

            <div className="p-4 rounded bg-white/5 border border-white/5">
              <span className="text-[#00aca9] uppercase font-bold text-[10px] tracking-wider block mb-1">Project Timeline</span>
              <div className="text-sm font-bold text-white">{project.startDate || '2023'} — {project.completionDate || '2026'}</div>
              <div className="text-neutral-400 mt-0.5">Turnkey Delivery</div>
            </div>

            <div className="p-4 rounded bg-white/5 border border-white/5">
              <span className="text-[#00aca9] uppercase font-bold text-[10px] tracking-wider block mb-1">Engineering Discipline</span>
              <div className="text-sm font-bold text-white">Full MEP &amp; Systems</div>
              <div className="text-neutral-400 mt-0.5">Low-Voltage &amp; Automation</div>
            </div>

            <div className="p-4 rounded bg-white/5 border border-white/5">
              <span className="text-[#00aca9] uppercase font-bold text-[10px] tracking-wider block mb-1">Facility Management</span>
              <div className="text-sm font-bold text-white">Luxury Villa Care (LVC)</div>
              <div className="text-neutral-400 mt-0.5">24/7 Remote Telemetry SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDY BODY: The Challenge & LVT Engineering Solution */}
      <section className="py-20 bg-[#030d0d] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Prose */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-xs font-bold text-[#00aca9] uppercase tracking-wider">Architectural Scope</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
                Executive Project Overview
              </h2>
            </div>

            <div className="space-y-5 text-neutral-300 text-sm sm:text-base leading-relaxed">
              {project.descriptionParagraphs.map((para, i) => (
                <p key={i} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Testimonial / Verification */}
            {project.testimonial && (
              <div className="bg-[#002222] border-l-4 border-[#00aca9] p-8 rounded-r-lg space-y-3 shadow-xl">
                <blockquote className="text-base sm:text-lg italic text-neutral-100 font-light leading-relaxed">
                  {project.testimonial}
                </blockquote>
                <div className="text-xs font-bold text-[#00aca9] uppercase tracking-wider">
                  Verified Stakeholder Feedback · {project.title}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Engineering Highlights */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#001818] p-6 rounded-xl border border-white/10 space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-[#00aca9] font-display">
                Systems Deployed
              </h3>
              <ul className="space-y-3 text-xs text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00aca9] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">MEP Design &amp; Coordination:</strong>
                    Architectural schematics, electrical load balancing &amp; HVAC integration
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00aca9] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Armored Fiber-Optic Ring:</strong>
                    Multi-gigabit backbone connecting main villa, server rack, and outdoor living
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00aca9] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Architectural Lighting &amp; Shading:</strong>
                    Keypad scenes, circadian lighting, and motorized hurricane storm closures
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00aca9] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Starlink Dual-WAN Failover:</strong>
                    Automatic satellite failover ensuring zero interruption during weather events
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded text-xs uppercase font-bold tracking-wider bg-[#00aca9] text-[#001717] hover:bg-[#00aca9]/90 transition-all text-center"
                >
                  Consult on Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HIGH-RESOLUTION INTERACTIVE GALLERY */}
      <section className="py-20 bg-[#001212] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">Visual Documentation</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mt-0.5">
                Installation Gallery ({project.images.length} High-Res Assets)
              </h2>
            </div>
            <span className="text-xs text-neutral-400 hidden sm:inline">Click any photo for full-screen inspection</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImageIndex(i)}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-black/40 border border-white/10 cursor-pointer shadow-md hover:border-[#00aca9] transition-all"
              >
                <img
                  src={img}
                  alt={`${project.title} photographic detail ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="flex items-center gap-1.5 text-xs font-medium bg-black/70 px-3 py-1.5 rounded border border-white/20">
                    <ZoomIn className="w-4 h-4 text-[#00aca9]" />
                    <span>Enlarge Image</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FULL-SCREEN LIGHTBOX MODAL */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImageIndex(null)}
        >
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 text-white p-2 hover:bg-white/20 rounded-full z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) => (prev! > 0 ? prev! - 1 : project.images.length - 1));
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/20 rounded-full"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) => (prev! < project.images.length - 1 ? prev! + 1 : 0));
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/20 rounded-full"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <img
            src={project.images[activeImageIndex]}
            alt="Full-resolution view"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-300 bg-black/70 px-4 py-1.5 rounded border border-white/20">
            Image {activeImageIndex + 1} of {project.images.length} · {project.title}
          </div>
        </div>
      )}

      {/* 6. RELATED CASE STUDIES */}
      <section className="py-20 bg-[#001717] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Explore More Landmark Caribbean Integrations
            </h3>
            <button
              onClick={() => {
                setPage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs text-[#00aca9] hover:underline uppercase font-bold"
            >
              All Projects →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((rp) => (
              <div
                key={rp.slug}
                onClick={() => {
                  setSelectedSlug(rp.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#001f1f] rounded-lg border border-white/10 overflow-hidden hover:border-[#00aca9] transition-all cursor-pointer group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={rp.thumbnail}
                    alt={rp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-1">
                  <span className="text-[10px] text-[#00aca9] font-bold uppercase tracking-wider">{rp.country || rp.region}</span>
                  <h4 className="font-bold text-white group-hover:text-[#00aca9] transition-colors">{rp.title}</h4>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">{rp.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-20 bg-[#001212]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
            Plan Your High-Performance Estate
          </h2>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Connect directly with LVT’s senior engineering leadership to review your architectural plans, equipment specifications, or retrofit feasibility.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded text-xs uppercase font-bold tracking-wider bg-[#00aca9] text-[#001717] hover:bg-[#00aca9]/90 transition-all"
            >
              Schedule Engineering Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
