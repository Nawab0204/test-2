import React from 'react';
import { PageRoute } from '../../App';
import { COMPANY_INFO, ALL_SERVICES } from '../../data/lvtData';
import { LINKEDIN_DATA } from '../../data/blogAndFaqData';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, ShieldCheck } from 'lucide-react';

interface CurrentFooterProps {
  setPage: (page: PageRoute) => void;
  setSelectedSlug: (slug: string) => void;
}

export const CurrentFooter: React.FC<CurrentFooterProps> = ({ setPage, setSelectedSlug }) => {
  return (
    <footer className="bg-white text-[#161616] border-t border-neutral-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-200">
          {/* Col 1: Brand, Bio & Trust Badges */}
          <div className="space-y-4">
            <button
              onClick={() => {
                setPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="focus:outline-none"
            >
              <img
                src="https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f070662f8b433bf85a3f8f_LVT_Teal_Horizontal_RBG.svg"
                alt="Luxury Villa Technologies"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </button>
            <p className="text-sm text-neutral-600 leading-relaxed font-light">
              The Caribbean’s Premier Expert in Integrated Villa Solutions. Transforming luxury spaces into smart, responsive sanctuaries with uncompromised engineering and 24/7 proactive care.
            </p>

            {/* Social & Review Badges in Footer */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* Trustpilot Badge */}
              <a
                href="#reviews-trust"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#00b67a]/10 hover:bg-[#00b67a]/20 text-[#00b67a] rounded-full text-xs font-semibold transition-colors"
                title="TrustScore 4.9 on Trustpilot"
              >
                <span>★</span>
                <span>Trustpilot 4.9</span>
              </a>

              {/* LinkedIn Badge */}
              <a
                href={LINKEDIN_DATA.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 text-[#0a66c2] rounded-full text-xs font-semibold transition-colors"
                title="Follow LVT on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>

              {/* Google Verified */}
              <a
                href={COMPANY_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-xs font-semibold transition-colors"
              >
                <MapPin className="w-3 h-3 text-[#00aca9]" />
                <span>Google 4.9★</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-[#002d2c]">
              <span className="text-neutral-500">Official Sister Company: </span>
              <span className="font-semibold text-[#002d2c]">Luxury Villa Care (LVC)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#002d2c]">Navigation</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <button
                  onClick={() => {
                    setPage('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#00aca9] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#00aca9] transition-colors"
                >
                  About us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#00aca9] transition-colors"
                >
                  Core Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPage('projects');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#00aca9] transition-colors"
                >
                  Landmark Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPage('blog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#00aca9] transition-colors"
                >
                  Engineering Journal &amp; Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPage('faq');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#00aca9] transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#00aca9] transition-colors"
                >
                  Contact &amp; Map
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#002d2c]">Core Disciplines</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              {ALL_SERVICES.map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => {
                      setSelectedSlug(s.slug);
                      setPage('service-detail');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#00aca9] transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#002d2c]">Central Headquarters</h4>
            <div className="space-y-2.5 text-xs text-neutral-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00aca9] shrink-0 mt-0.5" />
                <a
                  href={COMPANY_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00aca9] leading-relaxed"
                >
                  {COMPANY_INFO.address.line1}<br />
                  {COMPANY_INFO.address.line2}<br />
                  {COMPANY_INFO.address.line3}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-[#00aca9] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#00aca9] font-medium text-[#002d2c]">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="space-y-1.5 pt-1">
                {COMPANY_INFO.phones.map((p, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#00aca9] shrink-0" />
                    <a href={`tel:${p.tel}`} className="hover:text-[#00aca9]">
                      <span className="text-neutral-500 mr-1">{p.label}:</span>
                      {p.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} Luxury Villa Technologies. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-neutral-500">Sint Maarten &amp; Saint Martin (FWI)</span>
            <button
              onClick={() => {
                setPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#00aca9] transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
