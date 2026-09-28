import React, { useState } from 'react';
import { PageRoute } from '../common/ModeControlBar';
import { ALL_PROJECTS, ProjectData } from '../../data/lvtData';
import { MapPin, Calendar, ArrowRight, ShieldCheck, Cpu, Filter, Sparkles, Building, Landmark, Anchor } from 'lucide-react';

interface ProposedProjectsProps {
  setPage: (page: PageRoute) => void;
  setSelectedSlug: (slug: string) => void;
  onOpenConsultation?: () => void;
}

export const ProposedProjects: React.FC<ProposedProjectsProps> = ({
  setPage,
  setSelectedSlug,
  onOpenConsultation
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'villas' | 'hospitality' | 'institutional'>('all');

  const filterProject = (project: ProjectData) => {
    if (activeCategory === 'all') return true;
    const cat = (project.category || '').toLowerCase();
    const name = project.title.toLowerCase();

    if (activeCategory === 'villas') {
      return name.startsWith('villa') || cat.includes('villa') || cat.includes('estate') || cat.includes('residence') || cat.includes('house');
    }
    if (activeCategory === 'hospitality') {
      return name.includes('samanna') || name.includes('marina') || name.includes('resort') || cat.includes('hospitality');
    }
    if (activeCategory === 'institutional') {
      return name.includes('government') || name.includes('parliament') || name.includes('windward') || cat.includes('commercial') || cat.includes('mep');
    }
    return true;
  };

  const filteredProjects = ALL_PROJECTS.filter(filterProject);

  return (
    <div className="w-full bg-[#030d0d] text-neutral-100 font-sans-luxury">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 sm:py-32 bg-[#001717] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751cbbe9e1ea55d6e27301c_Infinity%20Villas-11.webp"
            alt="Engineered Caribbean Projects"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001717] via-[#001717]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-6">
          <div className="flex items-center gap-2 text-xs text-[#00aca9] font-medium tracking-widest uppercase">
            <span>Proven Caribbean Portfolio</span>
            <span aria-hidden="true">·</span>
            <span>16 Landmark Installations</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display max-w-4xl leading-tight">
            Engineered Architecture Across the Northern Caribbean.
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed font-light">
            From the secluded beachfront estates of Terres Basses to the cliffside architectural marvels of Indigo Bay and five-star resorts, explore how LVT delivers resilient autonomous environments.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap gap-2">
            {[
              { id: 'all', label: `All Landmark Projects (${ALL_PROJECTS.length})` },
              { id: 'villas', label: 'Ultra-Luxury Private Estates' },
              { id: 'hospitality', label: 'Boutique Resorts & Marinas' },
              { id: 'institutional', label: 'Commercial & Government Infrastructure' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === tab.id
                    ? 'bg-[#00aca9] text-black shadow-md'
                    : 'bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROJECTS CATALOG GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="group bg-[#001818] border border-white/10 rounded-xl overflow-hidden hover:border-[#00aca9]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={project.thumbnail || project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001818] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Location Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-medium bg-black/70 border border-white/10 text-neutral-200 px-2.5 py-1 rounded backdrop-blur-md flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#00aca9]" />
                      <span>{project.country || project.region}</span>
                    </span>
                  </div>

                  {/* Completion Date */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-mono bg-black/70 border border-white/10 text-neutral-300 px-2 py-0.5 rounded backdrop-blur-md">
                      {project.completionDate}
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[11px] uppercase tracking-wider text-[#00aca9] font-semibold block">
                      {project.category || 'Integrated Luxury Project'}
                    </span>
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-[#00aca9] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-300 line-clamp-3 leading-relaxed font-light">
                    {project.subtitle || project.descriptionParagraphs[0]}
                  </p>

                  {/* Key Contribution Badge */}
                  <div className="pt-2 border-t border-white/10">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider block mb-1">Engineering Scope</span>
                    <p className="text-xs text-neutral-200 line-clamp-2 italic">
                      "{project.subtitle}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    setSelectedSlug(project.slug);
                    setPage('project-detail');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 bg-white/5 group-hover:bg-[#00aca9] border border-white/10 group-hover:border-[#00aca9] text-neutral-200 group-hover:text-black font-semibold text-xs uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Architectural Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CONFIDENTIAL CLIENT DISCOVERY */}
      <section className="py-20 bg-[#001212] border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Have a Commission in Pre-Construction?
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
            The ideal time to engage LVT is during schematic design, before conduit trenches and concrete floor slabs are poured. Avoid costly retrofits and delays.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenConsultation ? onOpenConsultation() : setPage('contact')}
              className="px-8 py-3.5 bg-[#00aca9] hover:bg-[#00c5c1] text-black font-bold text-sm uppercase tracking-wider rounded transition-all shadow-lg hover:shadow-[#00aca9]/30"
            >
              Book Pre-Construction Discovery Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
