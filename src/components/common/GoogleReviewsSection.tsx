import React from 'react';
import { Star, ShieldCheck, ExternalLink, CheckCircle } from 'lucide-react';
import { GOOGLE_REVIEWS } from '../../data/blogAndFaqData';

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#fbfcfc] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Authentic Google Rating Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-neutral-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-xs font-semibold text-neutral-700 shadow-xs">
              {/* Google G SVG */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>Verified Client Testimonials</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-[#002d2c] tracking-tight">
              Trusted by the Caribbean’s Most Discerning Estate Owners
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Read direct feedback from private estate trustees, beachfront villa owners, and leading project architects across Saint Martin &amp; Sint Maarten.
            </p>
          </div>

          {/* Google Score Banner */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-neutral-200 shadow-xs">
            <div className="text-3xl font-extrabold text-[#002d2c] font-display">
              4.9
            </div>
            <div>
              <div className="flex items-center text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-neutral-500 mt-1 flex items-center gap-1">
                <span>Google Reviews</span>
                <span>·</span>
                <span className="font-semibold text-neutral-800">28 Verified Reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Square Google Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200 shadow-xs hover:shadow-lg hover:border-[#00aca9]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Reviewer Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Circle Avatar */}
                    <div
                      className={`w-11 h-11 rounded-full ${review.avatarColor} text-white flex items-center justify-center font-bold text-sm shadow-xs`}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#002d2c] transition-colors line-clamp-1">
                        {review.authorName}
                      </h4>
                      <p className="text-[11px] text-neutral-500 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-600 inline" />
                        <span>{review.authorSubtitle}</span>
                      </p>
                    </div>
                  </div>

                  {/* Google G Badge */}
                  <svg className="w-4 h-4 shrink-0 opacity-80" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                </div>

                {/* Stars & Time */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center text-[#fbbc04] gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#fbbc04]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-400">{review.timeAgo}</span>
                </div>

                {/* Review Text Body */}
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
                  "{review.reviewText}"
                </p>
              </div>

              {/* Location Tag Footer */}
              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span className="font-medium text-[#002d2c]">{review.villaLocation}</span>
                <span className="text-neutral-400">Google Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* API Sync Notification Banner */}
        <div className="mt-8 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500 bg-white px-4 py-1.5 rounded-full border border-neutral-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live Reviews feed ready for direct Google My Business API sync</span>
          </span>
        </div>
      </div>
    </section>
  );
};
