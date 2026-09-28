import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { ALL_SERVICES } from '../../data/lvtData';
import { PageRoute } from '../../App';

interface CurrentNavProps {
  currentPage: PageRoute;
  setPage: (page: PageRoute) => void;
  setSelectedSlug: (slug: string) => void;
}

export const CurrentNav: React.FC<CurrentNavProps> = ({
  currentPage,
  setPage,
  setSelectedSlug
}) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white text-[#161616] border-b border-neutral-200 sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => {
            setPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center text-left focus:outline-none"
        >
          <img
            src="https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f070662f8b433bf85a3f8f_LVT_Teal_Horizontal_RBG.svg"
            alt="Luxury Villa Technologies"
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation Links in Requested Order:
            1. Services
            2. Projects
            3. About Us (Dropdown with Blogs & FAQ)
            4. Contact
        */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {/* 1. SERVICES (Dropdown to 5 Disciplines) */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => {
                setPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1.5 py-2 transition-colors ${
                currentPage === 'services' || currentPage === 'service-detail'
                  ? 'text-[#00aca9] font-bold'
                  : 'text-neutral-800 hover:text-[#00aca9]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180 text-[#00aca9]' : ''
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 w-80 bg-white border border-neutral-200 shadow-2xl py-2 z-50 rounded-b-2xl">
                <button
                  onClick={() => {
                    setPage('services');
                    setServicesOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full text-left px-5 py-2.5 text-xs uppercase tracking-wider text-[#00aca9] font-bold border-b border-neutral-100 hover:bg-neutral-50 flex items-center justify-between"
                >
                  <span>All 5 Core Disciplines</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                {ALL_SERVICES.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => {
                      setSelectedSlug(s.slug);
                      setPage('service-detail');
                      setServicesOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-left px-5 py-2.5 text-xs text-neutral-700 hover:text-[#002d2c] hover:bg-[#00aca9]/10 transition-colors flex items-center justify-between"
                  >
                    <span>{s.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 2. PROJECTS */}
          <button
            onClick={() => {
              setPage('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`transition-colors py-2 ${
              currentPage === 'projects' || currentPage === 'project-detail'
                ? 'text-[#00aca9] font-bold'
                : 'text-neutral-800 hover:text-[#00aca9]'
            }`}
          >
            Projects
          </button>

          {/* 3. ABOUT US (Dropdown containing Blogs and Frequently Asked Questions) */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              onClick={() => {
                setPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-1.5 py-2 transition-colors ${
                currentPage === 'about' || currentPage === 'blog' || currentPage === 'faq'
                  ? 'text-[#00aca9] font-bold'
                  : 'text-neutral-800 hover:text-[#00aca9]'
              }`}
            >
              <span>About us</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  aboutOpen ? 'rotate-180 text-[#00aca9]' : ''
                }`}
              />
            </button>

            {aboutOpen && (
              <div className="absolute top-full left-0 w-72 bg-white border border-neutral-200 shadow-2xl py-2 z-50 rounded-b-2xl">
                <button
                  onClick={() => {
                    setPage('about');
                    setAboutOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full text-left px-5 py-2.5 text-xs font-semibold text-neutral-800 hover:text-[#002d2c] hover:bg-neutral-50 transition-colors flex items-center justify-between"
                >
                  <span>Our Leadership &amp; Heritage</span>
                </button>
                <button
                  onClick={() => {
                    setPage('blog');
                    setAboutOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full text-left px-5 py-2.5 text-xs font-semibold text-neutral-800 hover:text-[#002d2c] hover:bg-neutral-50 transition-colors flex items-center justify-between"
                >
                  <span>Engineering Journal &amp; Blog</span>
                  <span className="text-[10px] bg-[#00aca9]/10 text-[#00aca9] px-2 py-0.5 rounded font-mono font-bold">
                    Articles
                  </span>
                </button>
                <button
                  onClick={() => {
                    setPage('faq');
                    setAboutOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full text-left px-5 py-2.5 text-xs font-semibold text-neutral-800 hover:text-[#002d2c] hover:bg-neutral-50 transition-colors flex items-center justify-between"
                >
                  <span>Frequently Asked Questions</span>
                  <span className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded font-mono">
                    FAQ
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* 4. CONTACT */}
          <button
            onClick={() => {
              setPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`transition-colors py-2 ${
              currentPage === 'contact' ? 'text-[#00aca9] font-bold' : 'text-neutral-800 hover:text-[#00aca9]'
            }`}
          >
            Contact
          </button>
        </div>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => {
              setPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="lvt-wf-button text-sm tracking-wide uppercase font-semibold"
          >
            Schedule a call
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-800 hover:text-black focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200 px-6 py-6 space-y-4 shadow-xl">
          <button
            onClick={() => {
              setPage('home');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block w-full text-left text-base font-medium text-neutral-800 hover:text-[#00aca9]"
          >
            Home
          </button>

          <button
            onClick={() => {
              setPage('services');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block w-full text-left text-base font-medium text-neutral-800 hover:text-[#00aca9]"
          >
            Services &amp; Blueprints
          </button>

          <button
            onClick={() => {
              setPage('projects');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block w-full text-left text-base font-medium text-neutral-800 hover:text-[#00aca9]"
          >
            Projects Portfolio
          </button>

          <div className="pl-4 border-l-2 border-[#00aca9] space-y-2 py-1">
            <button
              onClick={() => {
                setPage('about');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="block w-full text-left text-sm text-neutral-700 hover:text-[#00aca9]"
            >
              About LVT Leadership
            </button>
            <button
              onClick={() => {
                setPage('blog');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="block w-full text-left text-sm text-neutral-700 hover:text-[#00aca9]"
            >
              Engineering Journal &amp; Blog
            </button>
            <button
              onClick={() => {
                setPage('faq');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="block w-full text-left text-sm text-neutral-700 hover:text-[#00aca9]"
            >
              Frequently Asked Questions (FAQ)
            </button>
          </div>

          <button
            onClick={() => {
              setPage('contact');
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block w-full text-left text-base font-medium text-neutral-800 hover:text-[#00aca9]"
          >
            Contact &amp; Map
          </button>

          <div className="pt-4">
            <button
              onClick={() => {
                setPage('contact');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full lvt-wf-button text-center block text-sm uppercase tracking-wider"
            >
              Schedule a call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
