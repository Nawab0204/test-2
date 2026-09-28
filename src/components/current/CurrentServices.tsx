import React from 'react';
import { PageRoute } from '../../App';
import { CoreServicesSection } from '../common/CoreServicesSection';
import { Download, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CurrentServicesProps {
  setPage: (page: PageRoute) => void;
  setSelectedSlug: (slug: string) => void;
}

export const CurrentServices: React.FC<CurrentServicesProps> = ({ setPage, setSelectedSlug }) => {
  return (
    <div className="w-full bg-white text-[#161616]">
      {/* 1. HERO HEADER */}
      <section className="bg-[#002d2c] text-white py-20 border-b border-[#00aca9]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">
              Comprehensive Architectural &amp; Technology Solutions
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Design, Build, Integrate and Maintain
            </h1>
            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-light">
              We handle the full spectrum of technology services for your dream villa—from initial architectural concept and MEP engineering to complete integration, commissioning, and 24/7 proactive care.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FULL CORE SERVICES SECTION (Main Large Square Boxes Left-to-Right + Subcategories Beneath) */}
      <CoreServicesSection setPage={setPage} setSelectedSlug={setSelectedSlug} />

      {/* 3. BROCHURE & CONSULTATION CTA */}
      <section className="py-20 bg-[#002d2c] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#00aca9] font-bold">
            Executive Engineering Consultation
          </span>
          <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to Plan the Technology Architecture for Your Estate?
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Download our complete portfolio brochure or schedule a discovery session with Michel Maduro and Hans de Bruyne to review architectural blueprints and technical specifications.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                setPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="lvt-wf-button text-xs uppercase tracking-wider font-semibold"
            >
              Plan a Meeting with Us
            </button>
            <a
              href="https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f071c2e25a73fe3d0b8fd6_LVT%20LVC%20Portfolio%20and%20Approach%2020240905..pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="lvt-wf-button-outline text-xs uppercase tracking-wider font-semibold flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Brochure (PDF)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
