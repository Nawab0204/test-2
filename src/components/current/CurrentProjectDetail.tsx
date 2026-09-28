import React, { useState } from 'react';
import { PageRoute } from '../common/ModeControlBar';
import { ALL_PROJECTS, ProjectData } from '../../data/lvtData';
import { ArrowLeft, MapPin, Calendar, CheckCircle2, ChevronRight, X, ZoomIn } from 'lucide-react';

interface CurrentProjectDetailProps {
  slug: string;
  setPage: (page: PageRoute) => void;
  setSelectedSlug: (slug: string) => void;
}

export const CurrentProjectDetail: React.FC<CurrentProjectDetailProps> = ({
  slug,
  setPage,
  setSelectedSlug
}) => {
  const project = ALL_PROJECTS.find((p) => p.slug === slug) || ALL_PROJECTS[0];
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#fafafa] text-[#161616]">
      {/* 1. HERO HEADER */}
      <section className="bg-[#002d2c] text-white py-16 border-b border-[#00aca9]/20">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <button
            onClick={() => {
              setPage('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs text-[#00aca9] hover:underline flex items-center gap-1 font-semibold uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to all projects
          </button>

          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-base sm:text-lg text-neutral-200 max-w-3xl font-light leading-relaxed">
              {project.subtitle}
            </p>
          )}

          {/* 4-Item Authentic Webflow Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#00aca9] font-bold">Region</span>
              <div className="text-sm font-medium text-white">{project.region || 'Caribbean'}</div>
            </div>

            <div className="space-y-1">
              {/* Preserving exact live typo "Country / Sate" in Current Mode */}
              <span className="text-[11px] uppercase tracking-wider text-[#00aca9] font-bold">Country / Sate</span>
              <div className="text-sm font-medium text-white">{project.country || 'Sint Maarten'}</div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#00aca9] font-bold">Start date</span>
              <div className="text-sm font-medium text-white">{project.startDate || 'January 2024'}</div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#00aca9] font-bold">To be completed</span>
              <div className="text-sm font-medium text-white">{project.completionDate || 'Completed'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN ABOUT THIS PROJECT SECTION */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Description Paragraphs */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-[#002d2c]">
              About this project
            </h2>

            {project.descriptionParagraphs.map((para, idx) => (
              <p key={idx} className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                {para}
              </p>
            ))}

            {/* Testimonial if present */}
            {project.testimonial && (
              <div className="mt-8 bg-[#eaf4f4] border-l-4 border-[#00aca9] p-6 rounded-r">
                <p className="text-sm sm:text-base italic text-[#002d2c] leading-relaxed">
                  {project.testimonial}
                </p>
                <div className="text-xs font-bold text-[#00aca9] uppercase tracking-wider mt-2">
                  Client Verification
                </div>
              </div>
            )}
          </div>

          {/* Right: Project Highlights & Inquire Card */}
          <div className="space-y-6">
            <div className="bg-[#fafafa] p-6 rounded border border-neutral-200 space-y-4">
              <h3 className="font-bold text-base text-[#002d2c]">LVT Scope Highlights</h3>
              <ul className="space-y-2 text-xs text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00aca9] shrink-0 mt-0.5" />
                  <span>Turnkey MEP &amp; Low-Voltage Engineering</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00aca9] shrink-0 mt-0.5" />
                  <span>Centralized Lighting &amp; Scenario Programming</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00aca9] shrink-0 mt-0.5" />
                  <span>Enterprise Fiber Ring &amp; Dual-WAN Starlink</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00aca9] shrink-0 mt-0.5" />
                  <span>Surveillance, AI Access &amp; Perimeter Security</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00aca9] shrink-0 mt-0.5" />
                  <span>Integrated Climate, Pools &amp; Outdoor Audio</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full lvt-wf-button text-xs uppercase tracking-wider"
                >
                  Plan a meet with us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IMAGE GALLERY */}
      <section className="py-20 bg-[#fafafa] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#002d2c]">
              Image Gallery ({project.images.length} Photos)
            </h2>
            <span className="text-xs text-neutral-500 hidden sm:inline">Click any image to view enlarged</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveModalImage(img)}
                className="group relative aspect-[4/3] rounded overflow-hidden bg-neutral-200 cursor-pointer shadow-sm hover:shadow-lg transition-all"
              >
                <img
                  src={img}
                  alt={`${project.title} gallery photo ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODAL LIGHTBOX */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 p-4 flex items-center justify-center"
          onClick={() => setActiveModalImage(null)}
        >
          <button
            onClick={() => setActiveModalImage(null)}
            className="absolute top-6 right-6 text-white p-2 hover:bg-white/20 rounded-full"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={activeModalImage}
            alt="Enlarged project view"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* 5. CTA */}
      <section className="py-16 bg-[#002d2c] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            More about our services? Plan a meet with us
          </h2>
          <p className="text-neutral-300 text-sm max-w-xl mx-auto">
            Discuss how LVT can engineer equivalent smart luxury infrastructure for your upcoming Caribbean villa or boutique hotel.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="lvt-wf-button text-xs uppercase tracking-wider"
            >
              Plan a meet with us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
