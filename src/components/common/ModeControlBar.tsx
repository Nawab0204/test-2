import React from 'react';
import { Eye, Sparkles, Presentation, Sliders, ExternalLink, Smartphone, Tablet, Monitor, ArrowRight, ShieldCheck } from 'lucide-react';
import { ALL_PROJECTS, ALL_SERVICES } from '../../data/lvtData';

export type ViewMode = 'current' | 'proposed' | 'demo';
export type PageRoute = 'home' | 'about' | 'services' | 'projects' | 'blog' | 'faq' | 'contact' | 'service-detail' | 'project-detail';
export type ViewportMode = 'responsive' | 'desktop' | 'tablet' | 'mobile';

interface ModeControlBarProps {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  page: PageRoute;
  setPage: (page: PageRoute) => void;
  selectedSlug: string;
  setSelectedSlug: (slug: string) => void;
  viewport: ViewportMode;
  setViewport: (viewport: ViewportMode) => void;
  isCompareMode: boolean;
  setIsCompareMode: (val: boolean) => void;
}

export const ModeControlBar: React.FC<ModeControlBarProps> = ({
  mode,
  setMode,
  page,
  setPage,
  selectedSlug,
  setSelectedSlug,
  viewport,
  setViewport,
  isCompareMode,
  setIsCompareMode
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#001f1e] text-white border-b border-[#00aca9]/30 shadow-xl">
      {/* Top Banner Notice */}
      <div className="bg-[#002d2c] border-b border-white/10 px-4 py-1.5 text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-neutral-300">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00aca9] animate-pulse"></span>
          <span className="font-semibold text-white">LVT Demonstration Platform</span>
          <span className="text-white/40">|</span>
          <span className="hidden sm:inline">Authorized Client Presentation for Luxury Villa Technologies (lvt.sx)</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-neutral-300">
          <span className="text-[#00aca9] flex items-center gap-1 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" /> Two-Mode Architecture Active
          </span>
          <a
            href="https://www.lvt.sx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1 text-white/70"
          >
            Live Site (lvt.sx) <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Switcher Controls */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Mode Tabs */}
        <div className="flex items-center bg-black/40 p-1 rounded-lg border border-white/10">
          <button
            onClick={() => {
              setMode('current');
              setIsCompareMode(false);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              mode === 'current' && !isCompareMode
                ? 'bg-[#002d2c] text-white shadow-sm border border-[#00aca9]/50'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-[#00aca9]" />
            <span>MODE 1: CURRENT WEBSITE</span>
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-normal hidden md:inline">(Faithful Recreation)</span>
          </button>

          <button
            onClick={() => {
              setMode('proposed');
              setIsCompareMode(false);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              mode === 'proposed' && !isCompareMode
                ? 'bg-[#00aca9] text-[#001717] shadow-sm font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>MODE 2: PROPOSED LVT</span>
            <span className="text-[10px] uppercase tracking-wider text-neutral-800/80 font-medium hidden md:inline">(Luxury Transformation)</span>
          </button>

          <button
            onClick={() => {
              setMode('demo');
              setIsCompareMode(false);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              mode === 'demo'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-amber-400/90 hover:text-amber-300'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>OWNER AUDIT DEMO</span>
          </button>
        </div>

        {/* Center: Quick Page Navigator */}
        <div className="flex items-center gap-2 text-xs">
          <label htmlFor="nav-page-select" className="text-neutral-400 text-[11px] uppercase tracking-wider hidden lg:inline">Active Page:</label>
          <select
            id="nav-page-select"
            value={page === 'service-detail' ? `service:${selectedSlug}` : page === 'project-detail' ? `project:${selectedSlug}` : page}
            onChange={(e) => {
              const val = e.target.value;
              if (val.startsWith('service:')) {
                setSelectedSlug(val.replace('service:', ''));
                setPage('service-detail');
              } else if (val.startsWith('project:')) {
                setSelectedSlug(val.replace('project:', ''));
                setPage('project-detail');
              } else {
                setPage(val as PageRoute);
              }
            }}
            className="bg-black/50 border border-white/20 text-white rounded px-2.5 py-1 text-xs focus:outline-none focus:border-[#00aca9]"
          >
            <optgroup label="Main Pages">
              <option value="home">Home Page (/)</option>
              <option value="about">About Us (/about-us)</option>
              <option value="services">Services Index (/services)</option>
              <option value="projects">Projects Index (/projects)</option>
              <option value="contact">Contact (/contact)</option>
            </optgroup>
            <optgroup label="Discovered Services (5)">
              {ALL_SERVICES.map((s) => (
                <option key={s.slug} value={`service:${s.slug}`}>
                  Service: {s.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="Discovered Projects (16)">
              {ALL_PROJECTS.map((p) => (
                <option key={p.slug} value={`project:${p.slug}`}>
                  Project: {p.title} ({p.country || p.region})
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        {/* Right: Viewport Previewer & Quick Compare */}
        <div className="flex items-center gap-2">
          {mode !== 'demo' && (
            <button
              onClick={() => setIsCompareMode(!isCompareMode)}
              className={`px-2.5 py-1 rounded text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                isCompareMode
                  ? 'bg-white text-[#002d2c] border-white font-semibold'
                  : 'bg-black/40 border-white/20 text-neutral-300 hover:text-white'
              }`}
              title="Split View: Current vs Proposed"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isCompareMode ? 'Exit Split View' : 'Compare Split'}</span>
            </button>
          )}

          {/* Viewport simulation */}
          <div className="hidden sm:flex items-center bg-black/40 p-0.5 rounded border border-white/10">
            <button
              onClick={() => setViewport('desktop')}
              className={`p-1 rounded ${viewport === 'desktop' ? 'bg-[#00aca9] text-black' : 'text-neutral-400 hover:text-white'}`}
              title="Desktop View (1440px)"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`p-1 rounded ${viewport === 'tablet' ? 'bg-[#00aca9] text-black' : 'text-neutral-400 hover:text-white'}`}
              title="Tablet View (768px)"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`p-1 rounded ${viewport === 'mobile' ? 'bg-[#00aca9] text-black' : 'text-neutral-400 hover:text-white'}`}
              title="Mobile View (390px)"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
