import React from 'react';
import { PageRoute } from '../common/ModeControlBar';
import { ALL_SERVICES, ServiceData } from '../../data/lvtData';
import { ArrowLeft, Download, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

interface CurrentServiceDetailProps {
  slug: string;
  setPage: (page: PageRoute) => void;
  setSelectedSlug: (slug: string) => void;
}

export const CurrentServiceDetail: React.FC<CurrentServiceDetailProps> = ({
  slug,
  setPage,
  setSelectedSlug
}) => {
  const service = ALL_SERVICES.find((s) => s.slug === slug) || ALL_SERVICES[0];

  return (
    <div className="w-full bg-[#fafafa] text-[#161616]">
      {/* 1. HERO HEADER */}
      <section className="bg-[#002d2c] text-white py-16 border-b border-[#00aca9]/20">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <button
            onClick={() => {
              setPage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs text-[#00aca9] hover:underline flex items-center gap-1 font-semibold uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to all services
          </button>
          <div className="flex items-center gap-4 pt-2">
            <div className="w-12 h-12 rounded bg-white/10 p-2 flex items-center justify-center">
              <img src={service.iconUrl} alt={service.title} className="w-8 h-8 object-contain" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {service.title}
            </h1>
          </div>
          <p className="text-base sm:text-lg text-neutral-200 max-w-3xl font-light leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* 2. INTRODUCTION TO THIS SERVICE */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-[#002d2c]">
              An introduction to this service
            </h2>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              {service.introParagraph}
            </p>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              We design, engineer, and integrate advanced technology systems that enhance both functionality and aesthetics, creating seamless, intelligent solutions tailored to your villa’s unique needs and vision.
            </p>
          </div>

          <div className="bg-[#fafafa] p-6 rounded border border-neutral-200 space-y-4">
            <div className="flex items-center gap-3 text-[#002d2c]">
              <Download className="w-5 h-5 text-[#00aca9]" />
              <h3 className="font-bold text-sm">Brochure &amp; Specifications</h3>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {service.brochureText}
            </p>
            <button
              onClick={() => {
                setPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full lvt-wf-button text-xs uppercase tracking-wider"
            >
              Request service brief
            </button>
          </div>
        </div>
      </section>

      {/* 3. WHAT IS INCLUDED IN THIS SERVICE */}
      <section className="py-20 bg-[#fafafa] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="space-y-2">
            <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">Scope of Work</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#002d2c]">
              What is included in this service
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feat, index) => (
              <div
                key={feat.title}
                className="bg-white p-6 rounded border border-neutral-200 hover:border-[#00aca9] transition-all space-y-2.5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#00aca9]">0{index + 1}</span>
                  <CheckCircle className="w-4 h-4 text-[#00aca9]" />
                </div>
                <h3 className="text-base font-bold text-[#002d2c]">
                  {feat.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMAGE GALLERY */}
      {service.images.length > 0 && (
        <section className="py-16 bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 space-y-8">
            <h2 className="text-2xl font-bold text-[#002d2c]">
              Implementation Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {service.images.map((img, i) => (
                <div key={i} className="aspect-[4/3] rounded overflow-hidden bg-neutral-100 shadow-sm border border-neutral-200">
                  <img
                    src={img}
                    alt={`${service.title} implementation ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. CTA */}
      <section className="py-16 bg-[#002d2c] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            More about our services? Plan a meet with us
          </h2>
          <p className="text-neutral-300 text-sm max-w-xl mx-auto">
            Schedule a dedicated technology planning session for your villa project in Saint Martin, Sint Maarten, or anywhere across the Caribbean.
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
