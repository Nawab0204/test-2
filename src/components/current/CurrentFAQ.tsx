import React, { useState } from 'react';
import { FAQ_ITEMS, FAQItem } from '../../data/blogAndFaqData';
import { PageRoute } from '../../App';
import { ChevronDown, HelpCircle, Search, Sparkles, PhoneCall, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../../data/lvtData';

interface CurrentFAQProps {
  setPage: (page: PageRoute) => void;
}

export const CurrentFAQ: React.FC<CurrentFAQProps> = ({ setPage }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<string[]>([FAQ_ITEMS[0].id]);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery =
      searchQuery === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full bg-[#fafafa] text-[#161616]">
      {/* 1. HERO HEADER */}
      <section className="bg-[#002d2c] text-white py-20 border-b border-[#00aca9]/20">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#00aca9]/20 border border-[#00aca9]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#00aca9] tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Executive Client Guidance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-lg text-neutral-200 max-w-3xl leading-relaxed font-light">
            Answers to common questions regarding pre-construction MEP planning, coastal climate resilience, power continuity, and 24/7 proactive facilities care in Saint Martin &amp; Sint Maarten.
          </p>

          {/* Search Box */}
          <div className="pt-4 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search questions (e.g. power outages, salt spray, MEP, French side)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white/10 text-white placeholder-neutral-300 rounded-xl border border-white/20 focus:outline-none focus:border-[#00aca9] text-sm backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY PILL FILTER */}
      <section className="bg-white border-b border-neutral-200 py-4 sticky top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 overflow-x-auto">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'planning', label: 'Pre-Construction & MEP' },
            { id: 'resilience', label: 'Tropical Resilience & Power' },
            { id: 'technology', label: 'Automation & Hardware' },
            { id: 'support', label: 'Maintenance & LVC SLA' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#002d2c] text-white font-semibold'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. FAQ ACCORDION LIST */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-neutral-200 p-8 space-y-4">
              <p className="text-neutral-500 text-sm">No matching questions found for "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="text-xs font-bold text-[#00aca9] hover:underline"
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);

              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:border-[#00aca9]/50 transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#002d2c] leading-snug">
                      {faq.question}
                    </span>
                    <span className={`p-1.5 rounded-full bg-neutral-100 text-[#002d2c] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#00aca9]/10 text-[#00aca9]' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-16 bg-white rounded-2xl border border-neutral-200 p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-[#002d2c]">Have a Specific Estate Commission Question?</h3>
            <p className="text-sm text-neutral-600 max-w-xl">
              Michel Maduro and Hans de Bruyne are available for confidential consultations regarding technical feasibility, CAD schematics, and estate retrofits.
            </p>
          </div>

          <button
            onClick={() => {
              setPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="lvt-wf-button text-sm tracking-wide uppercase font-semibold shrink-0"
          >
            Schedule Discovery Call
          </button>
        </div>
      </section>
    </div>
  );
};
