import React, { useState } from 'react';
import { AUDIT_ITEMS, SOCIAL_PILLARS, DIGITAL_PRESENCE_AUDIT, AuditItem } from '../../data/auditData';
import { COMPANY_INFO, ALL_PROJECTS } from '../../data/lvtData';
import { PageRoute, ViewMode } from '../common/ModeControlBar';
import {
  Presentation,
  ShieldAlert,
  CheckCircle,
  TrendingUp,
  Share2,
  Search,
  Layers,
  ArrowRight,
  Eye,
  Sparkles,
  ExternalLink,
  Target,
  FileCheck,
  Compass
} from 'lucide-react';

interface ImprovementAuditPresentationProps {
  setMode: (mode: ViewMode) => void;
  setPage: (page: PageRoute) => void;
}

export const ImprovementAuditPresentation: React.FC<ImprovementAuditPresentationProps> = ({
  setMode,
  setPage
}) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'positioning' | 'digital' | 'social' | 'seo'>('audit');
  const [selectedAuditCategory, setSelectedAuditCategory] = useState<string>('all');

  const filteredAuditItems = selectedAuditCategory === 'all'
    ? AUDIT_ITEMS
    : AUDIT_ITEMS.filter((item) => item.category.toLowerCase().includes(selectedAuditCategory.toLowerCase()));

  return (
    <div className="w-full bg-[#040c0c] text-neutral-100 font-sans-luxury">
      {/* 1. EXECUTIVE PRESENTATION HEADER */}
      <section className="bg-[#001717] border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Presentation className="w-3.5 h-3.5" /> Executive Advisory &amp; Digital Transformation Demo
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display">
            LVT Strategic Website Improvement Audit
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
            Prepared for <strong>Michel Maduro</strong> &amp; <strong>Hans de Bruyne</strong>, Luxury Villa Technologies.
            This executive analysis compares the current live platform (lvt.sx) against the proposed luxury systems integration platform, detailing the commercial impact of closing digital trust leaks and seizing Caribbean market leadership.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            <div className="p-4 rounded-lg bg-black/40 border border-white/5">
              <span className="text-xs text-neutral-400">Pages Discovered &amp; Scraped</span>
              <div className="text-2xl font-bold text-[#00aca9] font-display mt-0.5">26 Live URLs</div>
              <div className="text-[11px] text-neutral-500">100% Retained in Mode 1</div>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-white/5">
              <span className="text-xs text-neutral-400">Real Projects Cataloged</span>
              <div className="text-2xl font-bold text-white font-display mt-0.5">16 Case Studies</div>
              <div className="text-[11px] text-neutral-500">From Terres Basses to Indigo Bay</div>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-white/5">
              <span className="text-xs text-neutral-400">Projected Contract Upsell</span>
              <div className="text-2xl font-bold text-emerald-400 font-display mt-0.5">+320%</div>
              <div className="text-[11px] text-neutral-500">Prime MEP Contractor Positioning</div>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-white/5">
              <span className="text-xs text-neutral-400">Inbound Lead Pre-qualification</span>
              <div className="text-2xl font-bold text-[#00aca9] font-display mt-0.5">4-Step Diagnostic</div>
              <div className="text-[11px] text-neutral-500">Eliminates Vague Inquiries</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TABBED NAVIGATION */}
      <section className="bg-[#001010] border-b border-white/10 sticky top-[138px] z-30">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 overflow-x-auto py-2.5">
          <button
            onClick={() => setActiveTab('audit')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'audit' ? 'bg-[#00aca9] text-black shadow-sm' : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" /> Core Improvement Audit (8 Areas)
          </button>

          <button
            onClick={() => setActiveTab('positioning')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'positioning' ? 'bg-[#00aca9] text-black shadow-sm' : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Target className="w-3.5 h-3.5" /> Strategic Positioning Analysis
          </button>

          <button
            onClick={() => setActiveTab('digital')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'digital' ? 'bg-[#00aca9] text-black shadow-sm' : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Compass className="w-3.5 h-3.5" /> Digital Presence (GBP &amp; Directories)
          </button>

          <button
            onClick={() => setActiveTab('social')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'social' ? 'bg-[#00aca9] text-black shadow-sm' : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" /> 12-Pillar Social &amp; Video Engine
          </button>

          <button
            onClick={() => setActiveTab('seo')}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'seo' ? 'bg-[#00aca9] text-black shadow-sm' : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Search className="w-3.5 h-3.5" /> Caribbean Regional SEO
          </button>
        </div>
      </section>

      {/* 3. MAIN TAB CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* TAB 1: 8-DIMENSION AUDIT */}
        {activeTab === 'audit' && (
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">Detailed Findings</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Current → Problem → Proposed → Expected Business Benefit
              </h2>
              <p className="text-sm text-neutral-400 max-w-2xl">
                Every dimension below identifies an exact friction point on the current website and shows how our Proposed Version solves it.
              </p>
            </div>

            <div className="space-y-8">
              {filteredAuditItems.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-[#001818] border border-white/10 rounded-xl overflow-hidden shadow-xl hover:border-[#00aca9]/50 transition-all"
                >
                  {/* Item Header */}
                  <div className="bg-[#002222] px-6 py-4 border-b border-white/5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#00aca9] text-black font-bold text-xs flex items-center justify-center font-display">
                        0{index + 1}
                      </span>
                      <div>
                        <span className="text-[10px] text-[#00aca9] uppercase font-bold tracking-wider">{item.category}</span>
                        <h3 className="text-base sm:text-lg font-bold text-white font-display">{item.title}</h3>
                      </div>
                    </div>

                    <div className="text-xs font-semibold px-3 py-1 rounded bg-[#00aca9]/10 text-[#00aca9] border border-[#00aca9]/30">
                      Impact: {item.metricImpact}
                    </div>
                  </div>

                  {/* 4-Step Comparison Grid */}
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
                    {/* CURRENT */}
                    <div className="p-4 rounded-lg bg-red-950/20 border border-red-500/20 space-y-2">
                      <span className="text-red-400 font-bold uppercase tracking-wider text-[10px] block">
                        [Current Website State]
                      </span>
                      <p className="text-neutral-300">{item.current}</p>
                    </div>

                    {/* PROBLEM */}
                    <div className="p-4 rounded-lg bg-amber-950/20 border border-amber-500/20 space-y-2">
                      <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px] block">
                        [The Core Problem &amp; Leak]
                      </span>
                      <p className="text-neutral-300">{item.problem}</p>
                    </div>

                    {/* PROPOSED */}
                    <div className="p-4 rounded-lg bg-teal-950/30 border border-[#00aca9]/30 space-y-2">
                      <span className="text-[#00aca9] font-bold uppercase tracking-wider text-[10px] block">
                        [Proposed Transformation]
                      </span>
                      <p className="text-neutral-100">{item.proposed}</p>
                    </div>

                    {/* BENEFIT */}
                    <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                      <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px] block">
                        [Expected Business Benefit]
                      </span>
                      <p className="text-neutral-200">{item.businessBenefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: POSITIONING ANALYSIS */}
        {activeTab === 'positioning' && (
          <div className="space-y-12">
            <div className="space-y-4 max-w-3xl">
              <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">Business Model Evaluation</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
                How LVT Must Be Positioned to Capture 7-Figure Contracts
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed">
                The user brief specifically asked:
                <em className="text-white block mt-2 p-3 bg-white/5 rounded border border-white/10 font-serif">
                  "Based on the public website, evaluate whether LVT should be positioned primarily as a smart-home company or a luxury-property technology and systems integration company. Explain the reasoning."
                </em>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Option A: Smart Home Installer */}
              <div className="p-8 rounded-xl bg-red-950/15 border border-red-500/20 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-red-400 font-display">Option A: "Smart-Home Company"</h3>
                  <span className="text-xs bg-red-500/20 text-red-300 px-2.5 py-1 rounded font-bold uppercase">NOT Recommended</span>
                </div>
                <div className="text-xs text-neutral-300 space-y-3 leading-relaxed">
                  <p>
                    <strong>Why it limits LVT:</strong> The term "smart home" has been commoditized by consumer retail brands (Amazon Alexa, Google Home, smart bulbs). When an ultra-high-net-worth owner or commercial developer hears "smart home," they envision retail gadgetry rather than mission-critical engineering.
                  </p>
                  <p>
                    <strong>Perceived Scope:</strong> Light switches, voice remotes, Sonos speakers.
                  </p>
                  <p>
                    <strong>Price Ceiling:</strong> Clients expect bills in the thousands, not the hundreds of thousands.
                  </p>
                  <p>
                    <strong>Architectural Relationship:</strong> Treated as an afterthought trade contractor called in after the drywall is already sealed.
                  </p>
                </div>
              </div>

              {/* Option B: Luxury Systems Integrator */}
              <div className="p-8 rounded-xl bg-[#002222] border border-[#00aca9] space-y-5 shadow-2xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#00aca9] font-display">Option B: "Luxury Property Systems Integrator"</h3>
                  <span className="text-xs bg-[#00aca9] text-black px-2.5 py-1 rounded font-bold uppercase">STRONGLY Recommended</span>
                </div>
                <div className="text-xs text-neutral-200 space-y-3 leading-relaxed">
                  <p>
                    <strong>Why it empowers LVT:</strong> It accurately mirrors Michel Maduro’s 35-year telecom engineering pedigree, Hans de Bruyne’s European Quality Management expertise, and LVT’s real achievements (e.g. emergency fiber recovery at La Samanna, ELIE SAAB MEP integration at Infinity Villas).
                  </p>
                  <p>
                    <strong>Perceived Scope:</strong> Full MEP coordination, armored fiber-optic networks, centralized rack architecture, BMS, automatic storm transfer switches, and 24/7 facility care via Luxury Villa Care.
                  </p>
                  <p>
                    <strong>Price Ceiling:</strong> Unlocks $50,000 to $500,000+ master infrastructure contracts.
                  </p>
                  <p>
                    <strong>Architectural Relationship:</strong> Positioned as a peer engineer to the lead architect, general contractor, and MEP consulting engineer during the planning phase.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Synthesis */}
            <div className="p-8 rounded-xl bg-[#001717] border border-white/10 space-y-4">
              <h4 className="text-lg font-bold text-white font-display">
                Key Strategic Takeaway for Michel &amp; Hans
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                By abandoning consumer smart-home phrasing and owning the <strong>"Luxury Property Technology &amp; Systems Integration"</strong> title, LVT immediately ceases competing with local AV installers and instead becomes the exclusive institutional choice for Caribbean luxury developers, estate managers, and foreign estate buyers.
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: DIGITAL PRESENCE */}
        {activeTab === 'digital' && (
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">Multi-Channel Visibility</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Digital Presence &amp; Reputation Audit
              </h2>
              <p className="text-sm text-neutral-400 max-w-2xl">
                Analysis of LVT’s current footprint across Google, business directories, and review platforms, with concrete action items to dominate local high-intent searches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {DIGITAL_PRESENCE_AUDIT.map((item) => (
                <div
                  key={item.channel}
                  className="bg-[#001717] border border-white/10 rounded-xl p-6 space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="font-bold text-white text-base font-display">{item.channel}</h3>
                    <span
                      className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                        item.priority === 'Immediate'
                          ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                          : 'bg-[#00aca9]/20 text-[#00aca9] border border-[#00aca9]/30'
                      }`}
                    >
                      {item.priority} Priority
                    </span>
                  </div>

                  <div className="text-xs space-y-2">
                    <span className="text-neutral-400 block font-semibold">Current State:</span>
                    <p className="text-neutral-300 leading-relaxed">{item.currentState}</p>
                  </div>

                  <div className="text-xs space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[#00aca9] block font-semibold">Action Steps:</span>
                    <ul className="space-y-1.5 list-disc list-inside text-neutral-300">
                      {item.recommendedActions.map((act, i) => (
                        <li key={i}>{act}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs p-3 rounded bg-[#002424] border border-[#00aca9]/20 text-[#00aca9]">
                    <strong>Target Outcome:</strong> {item.projectedOutcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: SOCIAL MEDIA & VIDEO STRATEGY */}
        {activeTab === 'social' && (
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">Content Engine</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                The "1 Project → 8 High-Ticket Assets" Content Engine
              </h2>
              <p className="text-sm text-neutral-400 max-w-2xl">
                LVT installs multi-million dollar technology in breathtaking beachfront villas. Here is how a single project shoot is systematically converted into 8 marketing assets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SOCIAL_PILLARS.map((p) => (
                <div
                  key={p.pillarNumber}
                  className="bg-[#001717] border border-white/10 rounded-xl p-6 space-y-4"
                >
                  <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                    <span className="text-xl font-bold text-[#00aca9] font-display">{p.pillarNumber}</span>
                    <h3 className="font-bold text-white text-base font-display">{p.title}</h3>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {p.focus}
                  </p>

                  <div className="bg-[#002222] p-4 rounded-lg space-y-2 border border-[#00aca9]/20">
                    <span className="text-[10px] text-[#00aca9] uppercase font-bold tracking-wider block">
                      Repurposing Workflow
                    </span>
                    <div className="text-xs text-white font-semibold">
                      Primary Asset: {p.repurposingFormula.primaryAsset}
                    </div>
                    <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside pt-1">
                      {p.repurposingFormula.derivedAssets.map((asset, i) => (
                        <li key={i}>{asset}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: REGIONAL SEO OPPORTUNITIES */}
        {activeTab === 'seo' && (
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="text-[#00aca9] text-xs font-bold uppercase tracking-wider">Search Engine Strategy</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                High-Intent Regional Keyword Opportunities
              </h2>
              <p className="text-sm text-neutral-400 max-w-2xl">
                Keywords with documented intent from second-home buyers, villa managers, architects, and foreign investors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
              <div className="p-6 rounded-xl bg-[#001717] border border-white/10 space-y-3">
                <span className="text-[#00aca9] font-bold uppercase tracking-wider text-[10px]">Territory 01</span>
                <h3 className="text-base font-bold text-white font-display">Sint Maarten (Dutch Side)</h3>
                <ul className="space-y-1.5 text-neutral-300">
                  <li>• "Smart home Sint Maarten"</li>
                  <li>• "Home automation Sint Maarten"</li>
                  <li>• "Villa networking Indigo Bay"</li>
                  <li>• "Starlink installation Sint Maarten"</li>
                  <li>• "MEP engineering Philipsburg"</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-[#001717] border border-white/10 space-y-3">
                <span className="text-[#00aca9] font-bold uppercase tracking-wider text-[10px]">Territory 02</span>
                <h3 className="text-base font-bold text-white font-display">Saint Martin (French Side)</h3>
                <ul className="space-y-1.5 text-neutral-300">
                  <li>• "Domotique Saint Martin"</li>
                  <li>• "Villa Terres Basses home automation"</li>
                  <li>• "Lutron lighting Saint Martin FWI"</li>
                  <li>• "Installation fibre optique villa Saint Martin"</li>
                  <li>• "Security systems Marigot"</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-[#001717] border border-white/10 space-y-3">
                <span className="text-[#00aca9] font-bold uppercase tracking-wider text-[10px]">Territory 03</span>
                <h3 className="text-base font-bold text-white font-display">St. Barth &amp; Anguilla Expansion</h3>
                <ul className="space-y-1.5 text-neutral-300">
                  <li>• "Luxury villa systems integration St Barth"</li>
                  <li>• "High-end audiovisual St Barthelemy"</li>
                  <li>• "Caribbean private estate automation"</li>
                  <li>• "Hurricane resilient smart home Caribbean"</li>
                  <li>• "Off-grid villa solar storage Caribbean"</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4. PRESENTATION FOOTER ACTION */}
      <section className="py-16 bg-[#001414] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h3 className="text-2xl font-bold text-white font-display">
            Compare The Two Experiences Now
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Toggle between the faithful 1:1 recreation of the live website and the proposed architectural luxury platform to see the immediate difference in perceived authority and conversion power.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => {
                setMode('current');
                setPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded text-xs uppercase font-bold tracking-wider bg-[#002d2c] border border-[#00aca9]/50 text-white hover:bg-[#00aca9] hover:text-black transition-all flex items-center gap-2"
            >
              <Eye className="w-3.5 h-3.5" /> View Mode 1: Current Website (1:1)
            </button>
            <button
              onClick={() => {
                setMode('proposed');
                setPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded text-xs uppercase font-bold tracking-wider bg-[#00aca9] text-black hover:bg-[#00aca9]/90 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" /> View Mode 2: Proposed Luxury Site
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
