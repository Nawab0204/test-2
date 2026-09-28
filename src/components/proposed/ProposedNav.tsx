import React, { useState } from 'react';
import { PageRoute } from '../common/ModeControlBar';
import { ALL_SERVICES } from '../../data/lvtData';
import { Phone, ChevronDown, Menu, X, Shield, Sparkles, Building2, Home } from 'lucide-react';

interface ProposedNavProps {
  currentPage: PageRoute;
  setPage: (page: PageRoute) => void;
  setSelectedSlug: (slug: string) => void;
  targetAudience: 'owners' | 'architects';
  setTargetAudience: (aud: 'owners' | 'architects') => void;
  onOpenConsultation: () => void;
}

export const ProposedNav: React.FC<ProposedNavProps> = ({
  currentPage,
  setPage,
  setSelectedSlug,
  targetAudience,
  setTargetAudience,
  onOpenConsultation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#001717] text-white border-b border-white/10 sticky top-[77px] z-40">
      {/* Upper Audience Routing Bar */}
      <div className="bg-[#001010] border-b border-white/5 px-6 py-1.5 text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded border border-white/10">
          <button
            onClick={() => setTargetAudience('owners')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-[11px] font-medium transition-all ${
              targetAudience === 'owners'
                ? 'bg-[#00aca9] text-slate-950 font-bold shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Home className="w-3 h-3" />
            <span>For Private Villa Owners</span>
          </button>
          <button
            onClick={() => setTargetAudience('architects')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-[11px] font-medium transition-all ${
              targetAudience === 'architects'
                ? 'bg-[#00aca9] text-slate-950 font-bold shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Building2 className="w-3 h-3" />
            <span>For Architects &amp; Developers</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-[11px] text-neutral-400">
          <span className="flex items-center gap-1 text-[#00aca9]">
            <Shield className="w-3 h-3" /> 24/7/365 Proactive SLA Facility Dispatch
          </span>
          <a href="tel:+590690886671" className="hover:text-white transition-colors">
            Hotline: +590 (690) 886671
          </a>
        </div>
      </div>

      {/* Main Luxury Navigation Bar (Strict 3-Zone Contract) */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => {
            setPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left group flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded bg-[#002d2c] border border-[#00aca9]/40 flex items-center justify-center text-[#00aca9] font-bold text-sm tracking-widest font-display">
            LVT
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold tracking-wider text-white font-display uppercase group-hover:text-[#00aca9] transition-colors">
              Luxury Villa Technologies
            </div>
            <div className="text-[10px] text-neutral-400 tracking-widest uppercase font-light">
              Caribbean Systems &amp; MEP Integration
            </div>
          </div>
        </button>

        {/* Zone 2: 4-6 Clean text navigation links */}
        <div className="hidden lg:flex items-center space-x-7 text-xs font-medium uppercase tracking-wider">
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              onClick={() => {
                setPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1 py-2 hover:text-[#00aca9] transition-colors ${
                currentPage === 'services' || currentPage === 'service-detail' ? 'text-[#00aca9]' : 'text-neutral-300'
              }`}
            >
              <span>Engineering Solutions</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-0 w-80 bg-[#001717] border border-white/10 shadow-2xl py-2 z-50">
                <button
                  onClick={() => {
                    setPage('services');
                    setSolutionsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full text-left px-5 py-2.5 text-xs text-[#00aca9] font-bold border-b border-white/5 hover:bg-white/5"
                >
                  All 5 Core Disciplines →
                </button>
                {ALL_SERVICES.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => {
                      setSelectedSlug(s.slug);
                      setPage('service-detail');
                      setSolutionsOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-left px-5 py-2 text-xs text-neutral-300 hover:text-white hover:bg-white/5 transition-colors line-clamp-1"
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => {
              setPage('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`py-2 hover:text-[#00aca9] transition-colors ${
              currentPage === 'projects' || currentPage === 'project-detail' ? 'text-[#00aca9]' : 'text-neutral-300'
            }`}
          >
            Portfolio (16 Case Studies)
          </button>

          <button
            onClick={() => {
              setPage('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`py-2 hover:text-[#00aca9] transition-colors ${
              currentPage === 'about' ? 'text-[#00aca9]' : 'text-neutral-300'
            }`}
          >
            Heritage &amp; Founders
          </button>

          <button
            onClick={() => {
              setPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`py-2 hover:text-[#00aca9] transition-colors ${
              currentPage === 'contact' ? 'text-[#00aca9]' : 'text-neutral-300'
            }`}
          >
            Contact
          </button>
        </div>

        {/* Zone 3: 1-2 Primary actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 rounded text-xs uppercase font-bold tracking-wider bg-[#00aca9] text-[#001717] hover:bg-[#00aca9]/90 hover:shadow-lg transition-all"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#001414] border-t border-white/10 px-6 py-6 space-y-4 text-sm">
          <button
            onClick={() => {
              setPage('home');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 font-medium text-neutral-200"
          >
            Home
          </button>
          <button
            onClick={() => {
              setPage('services');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 font-medium text-neutral-200"
          >
            Engineering Solutions
          </button>
          <button
            onClick={() => {
              setPage('projects');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 font-medium text-neutral-200"
          >
            Portfolio (16 Projects)
          </button>
          <button
            onClick={() => {
              setPage('about');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 font-medium text-neutral-200"
          >
            Heritage &amp; Founders
          </button>
          <button
            onClick={() => {
              setPage('contact');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 font-medium text-neutral-200"
          >
            Contact
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded text-xs uppercase font-bold tracking-wider bg-[#00aca9] text-[#001717]"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
