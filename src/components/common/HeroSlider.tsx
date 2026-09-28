import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import { HERO_SLIDES } from '../../data/blogAndFaqData';
import { PageRoute } from '../../App';

interface HeroSliderProps {
  setPage: (page: PageRoute) => void;
  setSelectedSlug: (slug: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ setPage, setSelectedSlug }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = HERO_SLIDES.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance slides every 6 seconds unless hovered
  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slideCount);
      }, 6000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide, isPaused, slideCount]);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleCtaClick = (slide: typeof HERO_SLIDES[0]) => {
    if (slide.ctaPage === 'service-detail' && slide.slug) {
      setSelectedSlug(slide.slug);
      setPage('service-detail');
    } else {
      setPage(slide.ctaPage as PageRoute);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSecondaryClick = (slide: typeof HERO_SLIDES[0]) => {
    if (slide.secondaryPage === 'project-detail' && slide.secondarySlug) {
      setSelectedSlug(slide.secondarySlug);
      setPage('project-detail');
    } else {
      setPage(slide.secondaryPage as PageRoute);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="relative w-full bg-[#002d2c] text-white overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="LVT Service and Solutions Showcase"
    >
      {/* Slide Container */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Visual with Authentic Gradient Scrim */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-transform duration-10000 ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                {/* Clean dark teal gradient scrim matching authentic Webflow palette */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#002d2c] via-[#002d2c]/85 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#002d2c] via-transparent to-black/30"></div>
              </div>

              {/* Text & Content Container */}
              <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center py-20 lg:py-28">
                <div className="max-w-2xl space-y-5">
                  {/* Category Tag */}
                  <div className="inline-flex items-center gap-2 bg-[#00aca9]/20 border border-[#00aca9]/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#00aca9] tracking-wider uppercase backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{slide.tag}</span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-light">
                    {slide.subtitle}
                  </p>

                  {/* Call to Actions */}
                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => handleCtaClick(slide)}
                      className="lvt-wf-button text-sm tracking-wide uppercase font-semibold shadow-lg hover:shadow-[#00aca9]/30"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>

                    <button
                      onClick={() => handleSecondaryClick(slide)}
                      className="lvt-wf-button-outline text-sm tracking-wide uppercase"
                    >
                      {slide.secondaryText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prev / Next Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-[#00aca9] text-white hover:text-black border border-white/20 transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-[#00aca9] text-white hover:text-black border border-white/20 transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators / Quick Jump Dots & Thumbnails */}
      <div className="absolute bottom-6 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide
                    ? 'w-10 h-2.5 bg-[#00aca9]'
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-xs font-mono tracking-widest text-neutral-300 bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
            <span className="text-[#00aca9] font-bold">0{currentSlide + 1}</span>
            <span className="mx-1 text-white/40">/</span>
            <span>0{slideCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
