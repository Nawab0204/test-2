import React, { useState } from 'react';
import { PageRoute } from '../common/ModeControlBar';
import { CurrentHome } from '../current/CurrentHome';
import { CurrentAbout } from '../current/CurrentAbout';
import { CurrentServices } from '../current/CurrentServices';
import { CurrentServiceDetail } from '../current/CurrentServiceDetail';
import { CurrentProjects } from '../current/CurrentProjects';
import { CurrentProjectDetail } from '../current/CurrentProjectDetail';
import { CurrentContact } from '../current/CurrentContact';
import { ProposedHome } from '../proposed/ProposedHome';
import { ProposedAbout } from '../proposed/ProposedAbout';
import { ProposedServices } from '../proposed/ProposedServices';
import { ProposedProjects } from '../proposed/ProposedProjects';
import { ProposedContact } from '../proposed/ProposedContact';
import { ProposedProjectDetail } from '../proposed/ProposedProjectDetail';
import { ProposedServiceDetail } from '../proposed/ProposedServiceDetail';
import { Sparkles, Eye, ArrowLeftRight, X } from 'lucide-react';

interface ComparisonSplitViewProps {
  page: PageRoute;
  setPage: (page: PageRoute) => void;
  selectedSlug: string;
  setSelectedSlug: (slug: string) => void;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ComparisonSplitView: React.FC<ComparisonSplitViewProps> = ({
  page,
  setPage,
  selectedSlug,
  setSelectedSlug,
  onClose,
  onOpenConsultation
}) => {
  const [splitRatio, setSplitRatio] = useState<'50-50' | 'focus-current' | 'focus-proposed'>('50-50');

  const renderCurrentPage = () => {
    switch (page) {
      case 'home':
        return <CurrentHome setPage={setPage} setSelectedSlug={setSelectedSlug} />;
      case 'about':
        return <CurrentAbout setPage={setPage} />;
      case 'services':
        return <CurrentServices setPage={setPage} setSelectedSlug={setSelectedSlug} />;
      case 'service-detail':
        return <CurrentServiceDetail slug={selectedSlug} setPage={setPage} setSelectedSlug={setSelectedSlug} />;
      case 'projects':
        return <CurrentProjects setPage={setPage} setSelectedSlug={setSelectedSlug} />;
      case 'project-detail':
        return <CurrentProjectDetail slug={selectedSlug} setPage={setPage} setSelectedSlug={setSelectedSlug} />;
      case 'contact':
        return <CurrentContact />;
      default:
        return <CurrentHome setPage={setPage} setSelectedSlug={setSelectedSlug} />;
    }
  };

  const renderProposedPage = () => {
    switch (page) {
      case 'home':
        return (
          <ProposedHome
            setPage={setPage}
            setSelectedSlug={setSelectedSlug}
            targetAudience="owners"
            setTargetAudience={() => {}}
            onOpenConsultation={onOpenConsultation}
          />
        );
      case 'about':
        return <ProposedAbout setPage={setPage} onOpenConsultation={onOpenConsultation} />;
      case 'services':
        return (
          <ProposedServices
            setPage={setPage}
            setSelectedSlug={setSelectedSlug}
            onOpenConsultation={onOpenConsultation}
          />
        );
      case 'projects':
        return (
          <ProposedProjects
            setPage={setPage}
            setSelectedSlug={setSelectedSlug}
            onOpenConsultation={onOpenConsultation}
          />
        );
      case 'contact':
        return <ProposedContact />;
      case 'service-detail':
        return (
          <ProposedServiceDetail
            slug={selectedSlug}
            setPage={setPage}
            setSelectedSlug={setSelectedSlug}
            onOpenConsultation={onOpenConsultation}
          />
        );
      case 'project-detail':
        return (
          <ProposedProjectDetail
            slug={selectedSlug}
            setPage={setPage}
            setSelectedSlug={setSelectedSlug}
            onOpenConsultation={onOpenConsultation}
          />
        );
      default:
        return (
          <ProposedHome
            setPage={setPage}
            setSelectedSlug={setSelectedSlug}
            targetAudience="owners"
            setTargetAudience={() => {}}
            onOpenConsultation={onOpenConsultation}
          />
        );
    }
  };

  return (
    <div className="w-full bg-black min-h-screen">
      {/* Top Split Controller */}
      <div className="bg-[#001717] border-b border-white/10 px-6 py-3 flex items-center justify-between sticky top-[77px] z-40 text-xs">
        <div className="flex items-center gap-3">
          <span className="font-bold text-white flex items-center gap-1.5 font-display text-sm">
            <ArrowLeftRight className="w-4 h-4 text-[#00aca9]" />
            Side-by-Side Visual Comparison
          </span>
          <span className="text-neutral-500">|</span>
          <span className="text-neutral-400 capitalize">Viewing: {page.replace('-', ' ')}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-black/50 p-0.5 rounded border border-white/10">
            <button
              onClick={() => setSplitRatio('50-50')}
              className={`px-3 py-1 rounded text-[11px] font-medium ${
                splitRatio === '50-50' ? 'bg-[#00aca9] text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              50 / 50 Split
            </button>
            <button
              onClick={() => setSplitRatio('focus-current')}
              className={`px-3 py-1 rounded text-[11px] font-medium ${
                splitRatio === 'focus-current' ? 'bg-[#00aca9] text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Expand Current
            </button>
            <button
              onClick={() => setSplitRatio('focus-proposed')}
              className={`px-3 py-1 rounded text-[11px] font-medium ${
                splitRatio === 'focus-proposed' ? 'bg-[#00aca9] text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Expand Proposed
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-white/10 text-neutral-400 hover:text-white"
            title="Close Split View"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* The Dual Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
        {/* Left: CURRENT */}
        <div
          className={`overflow-y-auto max-h-[calc(100vh-120px)] ${
            splitRatio === 'focus-proposed' ? 'hidden' : splitRatio === 'focus-current' ? 'lg:col-span-2' : ''
          }`}
        >
          <div className="bg-[#002d2c] text-white px-4 py-2 border-b border-white/10 text-xs font-bold uppercase tracking-wider flex items-center justify-between sticky top-0 z-20">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Eye className="w-3.5 h-3.5 text-[#00aca9]" /> MODE 1: CURRENT LVT (Live Recreation)
            </span>
            <span className="text-[10px] text-neutral-400 font-normal">Original Webflow Style</span>
          </div>
          <div className="bg-[#fafafa]">
            {renderCurrentPage()}
          </div>
        </div>

        {/* Right: PROPOSED */}
        <div
          className={`overflow-y-auto max-h-[calc(100vh-120px)] ${
            splitRatio === 'focus-current' ? 'hidden' : splitRatio === 'focus-proposed' ? 'lg:col-span-2' : ''
          }`}
        >
          <div className="bg-[#00aca9] text-[#001717] px-4 py-2 border-b border-black/20 text-xs font-bold uppercase tracking-wider flex items-center justify-between sticky top-0 z-20">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> MODE 2: PROPOSED LVT (Luxury Transformation)
            </span>
            <span className="text-[10px] text-neutral-900 font-semibold">Architectural Systems Platform</span>
          </div>
          <div className="bg-[#030d0d]">
            {renderProposedPage()}
          </div>
        </div>
      </div>
    </div>
  );
};
