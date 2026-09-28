import React, { useState } from 'react';
import { PageRoute } from '../../App';
import { ALL_PROJECTS, COMPANY_INFO, FOUNDERS } from '../../data/lvtData';
import { FAQ_ITEMS, BLOG_POSTS } from '../../data/blogAndFaqData';
import { HeroSlider } from '../common/HeroSlider';
import { PartnerMarquee } from '../common/PartnerMarquee';
import { CoreServicesSection } from '../common/CoreServicesSection';
import { TrustAndSocialSection } from '../common/TrustAndSocialSection';
import { OfficeLocationMap } from '../common/OfficeLocationMap';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ChevronDown,
  Download,
  ShieldCheck,
  Send,
  Building2,
  Phone,
  Mail,
  Images
} from 'lucide-react';

interface CurrentHomeProps {
  setPage: (page: PageRoute) => void;
  setSelectedSlug: (slug: string) => void;
}

export const CurrentHome: React.FC<CurrentHomeProps> = ({ setPage, setSelectedSlug }) => {
  const [faqOpenIds, setFaqOpenIds] = useState<string[]>([FAQ_ITEMS[0].id]);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [activeProjectThumbs, setActiveProjectThumbs] = useState<Record<string, string>>({});
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2025-03-25',
    time: '10:00 AM AST',
    location: 'Terres Basses, Saint Martin',
    projectType: 'New Architectural Build',
    notes: ''
  });

  const toggleFaq = (id: string) => {
    setFaqOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  // Top 6 Landmark Projects with verified multi-image galleries for the 2x3 grid
  const featuredProjects = [
    {
      slug: 'villa-bella-vita',
      title: 'Villa Bella Vita',
      category: 'Autonomous Smart Estate',
      region: 'Guana Bay, Sint Maarten',
      completionDate: 'Completed',
      heroImage: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28.webp',
      gallery: [
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/6751ca51e85c1178d5155a2f_Bella%20Vita-28.webp',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf41cba2b12c64393a45_Bella%20Vita-6.webp',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5cf35bdb59a765024f95c_Bella%20Vita-111.webp',
        'https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d77d5b1bf257cbf481a8c7_27.webp'
      ],
      tagline: 'Named the First Automated SMART Home on Sint Maarten. Complete Lutron lighting & microgrid integration.'
    },
    {
      slug: 'infinity-villas',
      title: 'Infinity Villas',
      category: 'Architectural MEP & Automation',
      region: 'Indigo Bay, Sint Maarten',
      completionDate: '2026 Build',
      heroImage: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf439d3cb71cda94385f_Infinity%20Project%20Rendering.webp',
      gallery: [
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf439d3cb71cda94385f_Infinity%20Project%20Rendering.webp',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf8307ae315daf0016fc_Villa%20Infinity%20-%20Kitchen%20%26%20Dining.webp',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66eacf8d19bb00b9b5339298_Villa%20Infinity%20-%20Pool%20seating.webp',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ead01107ae315daf00d7f0_Villa%20Infinity%20-%20Exterior.webp'
      ],
      tagline: 'Turnkey high and low-voltage distribution, motorized shading, and AI gate attendant.'
    },
    {
      slug: 'la-samanna',
      title: 'Belmond La Samanna',
      category: 'Resort Fiber Infrastructure',
      region: 'Baie Longue, Saint Martin',
      completionDate: 'Active SLA',
      heroImage: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e85282f88781019a21fe_La%20Samanna%205.jpg',
      gallery: [
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e85282f88781019a21fe_La%20Samanna%205.jpg',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e860685d673047bc3321_La%20Samanna%206.jpg',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e98a54dbfccf5ee6f7ba00_La%20Samanna%207.webp',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e4d8933cfdc9d406cf9d_La%20Samanna%204.jpg'
      ],
      tagline: '10Gbps armored optical backbone rings connecting private beachfront guest pavilions.'
    },
    {
      slug: 'villa-cest-la-vie',
      title: "Villa C'est La Vie",
      category: 'Beachfront Solar Microgrid',
      region: 'Terres Basses, Saint Martin',
      completionDate: 'Completed',
      heroImage: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0ece4a2ae7434eec419d_C%27est%20la%20Vie%208.webp',
      gallery: [
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0ece4a2ae7434eec419d_C%27est%20la%20Vie%208.webp',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0e94adb5cd6dda451e32_C%27est%20la%20Vie%2012.webp',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0efc3f040ff9b1261668_C%27est%20la%20Vie%2014.webp',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66ef0f71dbe2c0cec884248b_C%27est%20la%20Vie%2015.webp'
      ],
      tagline: 'Zero-flicker solar PV inverter telemetry, whole-property Savant OS, and concealed audio.'
    },
    {
      slug: 'aqua-resort',
      title: 'Aqua Resort',
      category: 'Commercial MEP & HVAC Design',
      region: 'Cupecoy, Sint Maarten',
      completionDate: 'Delivered',
      heroImage: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d09a3d5e2d88ed4115a_Aqua%20Resort%202.webp',
      gallery: [
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d09a3d5e2d88ed4115a_Aqua%20Resort%202.webp',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d56e75eb074ca7f0568_Aqua%20Resort%207.webp',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d67ff98c0b0b09a03ae_Aqua%20Resort%203%20First%20Pour.webp',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f86d63c89927e9851b3fb6_Aqua%20Resort%206.webp'
      ],
      tagline: '3MW electrical distribution design, HVAC mechanical engineering, and marina automation.'
    },
    {
      slug: 'palapa-marina',
      title: 'Palapa Marina',
      category: 'Marine Sound & High-Speed Networks',
      region: 'Simpson Bay Lagoon',
      completionDate: 'Completed',
      heroImage: 'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856d3e0b8866162af1c24_Palapa%20Marina%208.webp',
      gallery: [
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f856d3e0b8866162af1c24_Palapa%20Marina%208.webp',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f8603254c439c7c3ea06cd_Palapa%20Marina%2010.webp',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f861201e8ffb8f1376c2aa_Palapa%20Marina%2011.webp',
        'https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66f861c8b23d615192175ef9_Palapa%20Marina%2012.webp'
      ],
      tagline: 'Commercial weatherproof sound arrays and mega-yacht fiber slip connectivity.'
    }
  ];

  return (
    <div className="w-full bg-white text-[#161616] relative">
      {/* 1. TOP HERO SLIDER (6 Slides including About LVT & all 5 Core Services) */}
      <HeroSlider setPage={setPage} setSelectedSlug={setSelectedSlug} />

      {/* 2. PARTNERING COMPANIES SLIDER (Original large logos, NO double names) */}
      <PartnerMarquee />

      {/* 3. DISCOVER THE WORLD OF AUTOMATION & INTEGRATION (Clean, Elevated, Real Photos, Anti-AI) */}
      <section className="py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00aca9] bg-[#00aca9]/10 px-3.5 py-1.5 rounded-full inline-block">
              What Differentiates Us · Simple We Lead
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002d2c] tracking-tight leading-tight">
              Discover the World of Home Automation &amp; Integrated Technology
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-light">
              Creating a unique experience in your dream villa is the result of combining specialized technical installations into one fully integrated platform. Luxury Villa Technologies designs, delivers, installs, configures, and maintains all technologies in your dream villa. It all starts with a clear design and deep understanding of the MEP needs of the estate.
            </p>
          </div>

          {/* 3 Pillars Grid with Real Photos & Clean Luxury Styling (No fake AI bars/slashes) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Pillar 1: Design, Build & Maintain */}
            <div className="bg-[#fbfcfc] rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#00aca9]/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src="https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d7731bc090bd10b2a0a6fa_Image.webp"
                    alt="Design, Build & Maintain"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#002d2c] text-[#00aca9] font-bold text-xs px-3 py-1 rounded-full shadow-md">
                    Pillar 01
                  </div>
                </div>

                <div className="p-8 space-y-3">
                  <h3 className="text-2xl font-bold text-[#002d2c] group-hover:text-[#00aca9] transition-colors">
                    Design, Build &amp; Maintain
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-light">
                    We handle the full spectrum of technology services for your dream villa—from initial MEP design and installation to configuration and ongoing maintenance. We utilize commercial-grade solutions that prioritize energy efficiency, sustainability, and longevity, ensuring the entire system lifecycle is expertly managed.
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => {
                    setSelectedSlug('design-engineering');
                    setPage('service-detail');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold uppercase tracking-wider text-[#00aca9] hover:text-[#002d2c] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Engineering Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Pillar 2: Integrated & Innovative Villa Solutions */}
            <div className="bg-[#fbfcfc] rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#00aca9]/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src="https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d7730d694013862aa39bc4_Image.webp"
                    alt="Integrated & Innovative Villa Solutions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#002d2c] text-[#00aca9] font-bold text-xs px-3 py-1 rounded-full shadow-md">
                    Pillar 02
                  </div>
                </div>

                <div className="p-8 space-y-3">
                  <h3 className="text-2xl font-bold text-[#002d2c] group-hover:text-[#00aca9] transition-colors">
                    Integrated &amp; Innovative Villa Solutions
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-light">
                    Full control at your fingertips of your villa with one app! Creating the luxury experience through innovative integration of all technical systems in your residence. By staying at the forefront of automation advancements, we continually engineer cutting-edge solutions for our clients.
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => {
                    setSelectedSlug('home-automation-system-integration');
                    setPage('service-detail');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold uppercase tracking-wider text-[#00aca9] hover:text-[#002d2c] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Discover Smart Home Systems</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Pillar 3: Sustainability & 24/7/365 Support */}
            <div className="bg-[#fbfcfc] rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#00aca9]/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src="https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d772ffbdbd18a7ec5b7210_Image.webp"
                    alt="Sustainability & 24/7/365 Support"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#002d2c] text-[#00aca9] font-bold text-xs px-3 py-1 rounded-full shadow-md">
                    Pillar 03
                  </div>
                </div>

                <div className="p-8 space-y-3">
                  <h3 className="text-2xl font-bold text-[#002d2c] group-hover:text-[#00aca9] transition-colors">
                    Sustainability &amp; 24/7/365 Support
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-light">
                    To protect your investment and ensure the longevity of your home automation system, we provide comprehensive maintenance through Service Level Agreements (SLA) and our sister company Luxury Villa Care (LVC). Our dedicated on-island team is available around the clock.
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => {
                    setSelectedSlug('sustainability-maintenance-and-support');
                    setPage('service-detail');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold uppercase tracking-wider text-[#00aca9] hover:text-[#002d2c] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Learn About 24/7 Care</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Authentic Architectural Banner */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#002d2c] text-white">
            <div className="absolute inset-0 z-0">
              <img
                src="https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66d77d5b1bf257cbf481a8c7_27.webp"
                alt="Your SMART Home Awaits"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#002d2c] via-[#002d2c]/80 to-transparent"></div>
            </div>

            <div className="relative z-10 p-8 sm:p-14 lg:p-16 max-w-3xl space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#00aca9] font-bold">
                Turnkey Caribbean Integration
              </span>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Let Us Guide You. Your SMART Home Awaits.
              </h3>

              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
                Discover the world of home automation and integrated technology. Creating a unique experience in your dream villa is the result of combining multiple specialized technical installations into one fully integrated platform.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="lvt-wf-button text-sm tracking-wide uppercase font-semibold"
                >
                  Schedule a call
                </button>

                <a
                  href="https://cdn.prod.website-files.com/66d75aa57d623cd1ed487e64/66f071c2e25a73fe3d0b8fd6_LVT%20LVC%20Portfolio%20and%20Approach%2020240905..pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lvt-wf-button-outline text-sm tracking-wide uppercase flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Brochure (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES SECTION (Main Large Square Boxes Left-to-Right + Subcategories Beneath in 2x3 / 2x2 Format) */}
      <CoreServicesSection setPage={setPage} setSelectedSlug={setSelectedSlug} />

      {/* 5. PORTFOLIO OF EXCELLENCE: 2x3 FORMAT WITH BIGGER IMAGES & GALLERY THUMBNAILS */}
      <section className="py-24 bg-white border-b border-neutral-200" id="projects-section">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00aca9]">
                Portfolio of Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002d2c] tracking-tight">
                Landmark Caribbean Installations (2x3 Showcase)
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base max-w-2xl font-light">
                High-fidelity photographic showcase of autonomous private estates, boutique resorts, and commercial developments across Sint Maarten and Saint Martin.
              </p>
            </div>

            <button
              onClick={() => {
                setPage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="lvt-wf-button text-xs uppercase tracking-wider font-semibold shrink-0"
            >
              Explore All 16 Projects
            </button>
          </div>

          {/* 2x3 Grid with Much Bigger Images and Multi-Image Preview Strips */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => {
              const currentActiveImage =
                activeProjectThumbs[project.slug] || project.heroImage;

              return (
                <div
                  key={project.slug}
                  className="bg-[#fbfcfc] rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#00aca9]/60 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Much Bigger Aspect Ratio Image (16/11) */}
                    <div className="relative aspect-[16/11] overflow-hidden bg-neutral-900 cursor-pointer">
                      <img
                        src={currentActiveImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                      {/* Location Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-black/75 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                          <MapPin className="w-3.5 h-3.5 text-[#00aca9]" />
                          <span>{project.region}</span>
                        </span>
                      </div>

                      {/* Completion Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/95 backdrop-blur-md text-[#002d2c] text-xs font-mono font-bold px-3 py-1 rounded-full shadow-md">
                          {project.completionDate}
                        </span>
                      </div>

                      {/* Gallery Count Pill */}
                      <div className="absolute bottom-3 right-4">
                        <span className="bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                          <Images className="w-3.5 h-3.5 text-[#00aca9]" />
                          <span>{project.gallery.length} Photos</span>
                        </span>
                      </div>
                    </div>

                    {/* Interactive Multi-Image Thumbnail Strip */}
                    <div className="p-3 bg-neutral-100/70 border-b border-neutral-200 flex items-center gap-2 overflow-x-auto">
                      {project.gallery.map((thumbUrl, tIdx) => (
                        <button
                          key={tIdx}
                          onClick={() =>
                            setActiveProjectThumbs({
                              ...activeProjectThumbs,
                              [project.slug]: thumbUrl
                            })
                          }
                          className={`relative w-12 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                            currentActiveImage === thumbUrl
                              ? 'border-[#00aca9] scale-105 shadow-xs'
                              : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={thumbUrl}
                            alt={`${project.title} photo ${tIdx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>

                    {/* Clean Minimal Text Container */}
                    <div className="p-7 space-y-2.5">
                      <span className="text-xs uppercase tracking-wider text-[#00aca9] font-bold block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-[#002d2c] group-hover:text-[#00aca9] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Clean Footer Button */}
                  <div className="p-7 pt-0 border-t border-neutral-100 mt-2">
                    <button
                      onClick={() => {
                        setSelectedSlug(project.slug);
                        setPage('project-detail');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full py-3 bg-white group-hover:bg-[#002d2c] text-neutral-800 group-hover:text-white rounded-xl text-xs uppercase tracking-wider font-bold transition-all border border-neutral-200 group-hover:border-transparent flex items-center justify-center gap-2 shadow-xs"
                    >
                      <span>Explore Project Gallery</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#00aca9]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. TRUST & REVIEWS SECTION: TRUSTPILOT, LINKEDIN, GOOGLE REVIEWS, CEDIA */}
      <TrustAndSocialSection />

      {/* 7. ABOUT THE BUSINESS SECTION */}
      <section className="py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image Collage */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200">
                <img
                  src="https://cdn.prod.website-files.com/66db640e1ba22467ee86fed5/66e5e85282f88781019a21fe_La%20Samanna%205.jpg"
                  alt="Caribbean Engineering Heritage"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#002d2c] text-white p-6 rounded-2xl shadow-2xl border border-[#00aca9]/30 max-w-xs space-y-2">
                <div className="text-3xl font-bold text-[#00aca9]">35+ Years</div>
                <p className="text-xs text-neutral-200 leading-relaxed font-light">
                  Pioneering telecommunications and high-end residential engineering in Sint Maarten &amp; Saint Martin.
                </p>
              </div>
            </div>

            {/* Right Column: Company Story & Founders */}
            <div className="space-y-6 lg:pl-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00aca9]">
                Our Leadership &amp; Heritage
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#002d2c] tracking-tight leading-tight">
                Built by Caribbean Telecom Pioneers &amp; Systems Engineers
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
                Luxury Villa Technologies was established by Michel Maduro and Hans de Bruyne to deliver dedicated high-end engineering, automation, and MEP integration for Caribbean estates.
              </p>

              <div className="space-y-4 pt-2">
                {FOUNDERS.map((founder, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-5 rounded-xl bg-[#fbfcfc] border border-neutral-200 space-y-2 hover:border-[#00aca9]/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#002d2c]">{founder.name}</h4>
                      <span className="text-xs font-medium text-[#00aca9] bg-[#00aca9]/10 px-2.5 py-0.5 rounded-full">
                        {founder.role}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                      {founder.bio}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => {
                    setPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="lvt-wf-button text-xs uppercase tracking-wider font-semibold"
                >
                  More About Us
                </button>

                <div className="text-xs text-neutral-500">
                  <span>HQ in Marigot (Saint Martin)</span>
                  <span className="mx-2">·</span>
                  <span>Dutch &amp; French Licensed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FEATURED BLOG POSTS SECTION */}
      <section className="py-24 bg-[#fafafa] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00aca9]">
                Knowledge &amp; Insights
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#002d2c] tracking-tight">
                Latest from the LVT Engineering Journal
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base max-w-2xl font-light">
                Technical articles on coastal salt-spray protection, Category-5 storm protocols, fiber backbones, and solar microgrid integration.
              </p>
            </div>

            <button
              onClick={() => {
                setPage('blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="lvt-wf-button text-xs uppercase tracking-wider font-semibold shrink-0"
            >
              View All Articles
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#00aca9]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="bg-white/95 backdrop-blur-md text-[#002d2c] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center gap-3 text-[11px] text-neutral-400">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#002d2c] group-hover:text-[#00aca9] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-neutral-600 text-xs leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-100 mt-2">
                  <button
                    onClick={() => {
                      setPage('blog');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00aca9] hover:text-[#002d2c] transition-colors pt-2"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="py-24 bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00aca9]">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002d2c] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-light">
              Clear answers to the most common questions regarding Caribbean smart home integration, pre-construction MEP, and maintenance.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.slice(0, 5).map((faq) => {
              const isOpen = faqOpenIds.includes(faq.id);

              return (
                <div
                  key={faq.id}
                  className="bg-[#fbfcfc] rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:border-[#00aca9]/50 transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-6 flex items-start justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base font-bold text-[#002d2c] leading-snug">
                      {faq.question}
                    </span>
                    <span className={`p-1 rounded-full bg-neutral-200 text-[#002d2c] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#00aca9]/20 text-[#00aca9]' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/60 pt-4 font-light">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => {
                setPage('faq');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold uppercase tracking-wider text-[#00aca9] hover:text-[#002d2c] inline-flex items-center gap-1.5 transition-colors"
            >
              <span>View All Questions &amp; Answers</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 10. FULL-WIDTH LEFT-TO-RIGHT MAP SECTION (Without side cards) */}
      <OfficeLocationMap />

      {/* 11. CONTACT FORM / SCHEDULE A CALL / BOOK A MEETING */}
      <section className="py-24 bg-[#002d2c] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Contact Info & Value Prop */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00aca9]">
                Initiate Discovery
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Schedule a Consultation with Our Engineers
              </h2>

              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
                Whether you are designing a new architectural residence in Indigo Bay, retrofitting a legacy estate in Terres Basses, or upgrading resort fiber infrastructure, book a direct consultation with Michel Maduro &amp; Hans de Bruyne.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#00aca9]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-xs">Marigot Headquarters</span>
                    <span className="text-white font-medium">5 Rue du Général de Gaulle, Saint Martin (FWI)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#00aca9]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-xs">Direct Telephone Lines</span>
                    <span className="text-white font-medium">+1 (721) 553-1660 / +590 690 886671</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Booking Form */}
            <div className="lg:col-span-7 bg-white text-[#161616] p-8 sm:p-12 rounded-3xl shadow-2xl">
              {bookingSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#002d2c]">Meeting Request Confirmed</h3>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto leading-relaxed font-light">
                    Thank you, <strong>{bookingForm.name}</strong>. Our engineering team has reserved your discovery window for <strong>{bookingForm.date} at {bookingForm.time}</strong>. An executive confirmation has been dispatched to {bookingForm.email}.
                  </p>
                  <button
                    onClick={() => setBookingSubmitted(false)}
                    className="px-6 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-[#002d2c]">Book an Architectural Discovery Meeting</h3>
                    <p className="text-xs text-neutral-500 font-light">
                      Reserve a 30-minute discovery call directly with the principals.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alexandre Laurent"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:border-[#00aca9]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. a.laurent@estate.com"
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:border-[#00aca9]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (721) ... or +33 6 ..."
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:border-[#00aca9]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                        Villa Location
                      </label>
                      <select
                        value={bookingForm.location}
                        onChange={(e) => setBookingForm({ ...bookingForm, location: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:border-[#00aca9]"
                      >
                        <option value="Terres Basses, Saint Martin">Terres Basses, Saint Martin (French)</option>
                        <option value="Indigo Bay, Sint Maarten">Indigo Bay, Sint Maarten (Dutch)</option>
                        <option value="Pelican Key / Simpson Bay">Pelican Key / Simpson Bay</option>
                        <option value="Cupecoy / Lowlands">Cupecoy / Lowlands</option>
                        <option value="Saint Barthélemy">Saint Barthélemy (St. Barth)</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Other Caribbean Location">Other Caribbean Location</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:border-[#00aca9]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                        Preferred Time (AST)
                      </label>
                      <select
                        value={bookingForm.time}
                        onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:border-[#00aca9]"
                      >
                        <option value="09:00 AM AST">09:00 AM AST</option>
                        <option value="10:00 AM AST">10:00 AM AST</option>
                        <option value="11:30 AM AST">11:30 AM AST</option>
                        <option value="02:00 PM AST">02:00 PM AST</option>
                        <option value="04:00 PM AST">04:00 PM AST</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                      Project Notes / Specific Needs
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Briefly describe the property, pre-construction stage, or existing smart home equipment..."
                      value={bookingForm.notes}
                      onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:border-[#00aca9]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#00aca9] hover:bg-[#002d2c] text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Confirm &amp; Book Discovery Meeting</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
