import React, { useState } from 'react';
import { PageRoute } from '../common/ModeControlBar';
import { ALL_PROJECTS, ProjectData } from '../../data/lvtData';
import { ArrowRight, MapPin, Calendar, Search } from 'lucide-react';

interface CurrentProjectsProps {
  setPage: (page: PageRoute) => void;
  setSelectedSlug: (slug: string) => void;
}

export const CurrentProjects: React.FC<CurrentProjectsProps> = ({ setPage, setSelectedSlug }) => {
  const [filterRegion, setFilterRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = ALL_PROJECTS.filter((p) => {
    const matchesRegion =
      filterRegion === 'all'
        ? true
        : filterRegion === 'caribbean'
        ? p.region.toLowerCase().includes('caribbean') || p.country.toLowerCase().includes('maarten') || p.country.toLowerCase().includes('martin')
        : p.region.toLowerCase().includes('usa') || p.country.toLowerCase().includes('usa');

    const matchesSearch =
      searchQuery === ''
        ? true
        : p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesRegion && matchesSearch;
  });

  return (
    <div className="w-full bg-[#fafafa] text-[#161616]">
      {/* 1. HERO HEADER */}
      <section className="bg-[#002d2c] text-white py-20 border-b border-[#00aca9]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">Project Portfolio</span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Our Portfolio of Excellence
            </h1>
            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-light">
              Explore our curated portfolio of integrated smart villas, landmark resorts, mega-yacht marinas, and commercial infrastructure across Saint Martin, Sint Maarten, the Caribbean, and North America.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH BAR */}
      <section className="py-6 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500 font-medium">Filter:</span>
            <button
              onClick={() => setFilterRegion('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                filterRegion === 'all' ? 'bg-[#002d2c] text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              All Projects ({ALL_PROJECTS.length})
            </button>
            <button
              onClick={() => setFilterRegion('caribbean')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                filterRegion === 'caribbean' ? 'bg-[#002d2c] text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              Caribbean (13)
            </button>
            <button
              onClick={() => setFilterRegion('usa')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                filterRegion === 'usa' ? 'bg-[#002d2c] text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              North America (3)
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-neutral-300 rounded focus:outline-none focus:border-[#00aca9]"
            />
          </div>
        </div>
      </section>

      {/* 3. CATALOG GRID */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div
                key={p.slug}
                onClick={() => {
                  setSelectedSlug(p.slug);
                  setPage('project-detail');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-neutral-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#002d2c]/90 text-white text-[11px] px-2.5 py-1 rounded">
                      {p.country || p.region}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h2 className="text-xl font-bold text-[#002d2c] group-hover:text-[#00aca9] transition-colors">
                      {p.title}
                    </h2>
                    <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                      {p.subtitle || p.descriptionParagraphs[0]}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#00aca9]">
                  <span>Explore Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-neutral-500 text-sm">
              No projects found matching your search.
            </div>
          )}
        </div>
      </section>

      {/* 4. FOOTER BANNER */}
      <section className="py-16 bg-[#002d2c] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Have a luxury villa or hospitality project in mind?
          </h2>
          <p className="text-neutral-300 text-sm max-w-xl mx-auto">
            Discuss your engineering requirements, MEP schematics, or automation vision with our senior integration team.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="lvt-wf-button text-xs uppercase tracking-wider"
            >
              Contact our team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
