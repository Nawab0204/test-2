import React, { useState } from 'react';
import {
  Star,
  ShieldCheck,
  ExternalLink,
  CheckCircle,
  Award,
  Users,
  Linkedin,
  MapPin
} from 'lucide-react';
import {
  GOOGLE_REVIEWS,
  TRUSTPILOT_DATA,
  LINKEDIN_DATA,
  GoogleReview
} from '../../data/blogAndFaqData';

export const TrustAndSocialSection: React.FC = () => {
  const [filterSource, setFilterSource] = useState<'all' | 'google' | 'trustpilot'>('all');

  // Combine Google and Trustpilot reviews
  const allReviews: GoogleReview[] = [
    ...GOOGLE_REVIEWS,
    ...TRUSTPILOT_DATA.reviews
  ];

  const filteredReviews =
    filterSource === 'all'
      ? allReviews
      : allReviews.filter((r) => r.source === filterSource);

  return (
    <section className="py-24 bg-[#fbfcfc] border-b border-neutral-200" id="reviews-trust">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full text-xs font-semibold text-neutral-700 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#00aca9]" />
              <span>Verified Client Reputation &amp; Global Industry Standards</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002d2c] tracking-tight">
              Trusted Across the Caribbean &amp; Verified Globally
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base max-w-2xl font-light">
              Endorsed by high-net-worth estate owners, premier architects, and certified on Trustpilot, Google Reviews, and LinkedIn.
            </p>
          </div>

          {/* Social / Rating Tabs */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setFilterSource('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filterSource === 'all'
                  ? 'bg-[#002d2c] text-[#00aca9]'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              All Testimonials ({allReviews.length})
            </button>
            <button
              onClick={() => setFilterSource('google')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                filterSource === 'google'
                  ? 'bg-[#002d2c] text-[#00aca9]'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              <span>Google</span>
              <span className="font-mono text-[10px] text-amber-500">★ 4.9</span>
            </button>
            <button
              onClick={() => setFilterSource('trustpilot')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                filterSource === 'trustpilot'
                  ? 'bg-[#002d2c] text-[#00aca9]'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              <span>Trustpilot</span>
              <span className="font-mono text-[10px] text-[#00b67a]">★ 4.9</span>
            </button>
          </div>
        </div>

        {/* Multi-Platform Authority Badges (Trustpilot, Google, LinkedIn, CEDIA) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Google Reviews Card */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs hover:border-[#4285F4]/50 hover:shadow-md transition-all space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
                <span className="font-bold text-sm text-neutral-800">Google Rating</span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                VERIFIED
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-[#002d2c]">4.9</span>
              <div className="flex items-center text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-xs text-neutral-500">
              Based on 28 verified 5-star estate reviews across St. Martin.
            </p>
          </div>

          {/* 2. Trustpilot ("Interest Pilot") Card */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs hover:border-[#00b67a]/50 hover:shadow-md transition-all space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Trustpilot Green Star Icon */}
                <div className="w-5 h-5 rounded bg-[#00b67a] flex items-center justify-center text-white font-bold text-xs">
                  ★
                </div>
                <span className="font-bold text-sm text-neutral-800">Trustpilot</span>
              </div>
              <span className="text-xs font-mono font-bold text-[#00b67a] bg-[#00b67a]/10 px-2 py-0.5 rounded">
                EXCELLENT
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-[#002d2c]">4.9</span>
              {/* 5 Green Squares for Trustpilot */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 rounded-xs bg-[#00b67a] flex items-center justify-center text-white text-[9px] font-bold">
                    ★
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-neutral-500">
              TrustScore 4.9 · 34 Independent client reviews.
            </p>
          </div>

          {/* 3. LinkedIn Business Network Card */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs hover:border-[#0a66c2]/50 hover:shadow-md transition-all space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#0a66c2] flex items-center justify-center text-white">
                  <Linkedin className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-sm text-neutral-800">LinkedIn Verified</span>
              </div>
              <span className="text-xs font-mono font-bold text-[#0a66c2] bg-[#0a66c2]/10 px-2 py-0.5 rounded">
                ENTERPRISE
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-[#002d2c]">1,240+</span>
              <span className="text-xs text-neutral-500">Industry Followers</span>
            </div>
            <p className="text-xs text-neutral-500">
              Connected with leading Caribbean architects &amp; developers.
            </p>
          </div>

          {/* 4. CEDIA & HTA Certifications */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs hover:border-[#00aca9]/50 hover:shadow-md transition-all space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#00aca9]" />
                <span className="font-bold text-sm text-neutral-800">CEDIA &amp; HTA</span>
              </div>
              <span className="text-xs font-mono font-bold text-[#00aca9] bg-[#00aca9]/10 px-2 py-0.5 rounded">
                MEMBER
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold text-[#002d2c]">Certified</span>
              <span className="text-xs text-neutral-500">Estate Integrator</span>
            </div>
            <p className="text-xs text-neutral-500">
              Custom Electronic Design &amp; Installation Association standards.
            </p>
          </div>
        </div>

        {/* Square Review Cards Grid (Requested as square shape like Google review) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => {
            const isTrustpilot = review.source === 'trustpilot';

            return (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-7 border border-neutral-200 shadow-xs hover:shadow-xl hover:border-[#00aca9]/50 transition-all duration-300 flex flex-col justify-between group aspect-auto min-h-[300px]"
              >
                <div className="space-y-4">
                  {/* Top Bar with Reviewer Info and Source Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full ${review.avatarColor} text-white flex items-center justify-center font-bold text-sm shadow-xs`}
                      >
                        {review.initials}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#002d2c] group-hover:text-[#00aca9] transition-colors leading-snug">
                          {review.authorName}
                        </h4>
                        <p className="text-[11px] text-neutral-500 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-emerald-600 inline" />
                          <span>{review.authorSubtitle}</span>
                        </p>
                      </div>
                    </div>

                    {/* Source Indicator */}
                    {isTrustpilot ? (
                      <div className="flex items-center gap-1 bg-[#00b67a]/10 px-2 py-1 rounded text-[10px] font-bold text-[#00b67a] shrink-0">
                        <span>★</span>
                        <span>Trustpilot</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded text-[10px] font-bold text-[#4285F4] shrink-0">
                        <svg className="w-3 h-3" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                        </svg>
                        <span>Google</span>
                      </div>
                    )}
                  </div>

                  {/* Stars & Timestamp */}
                  <div className="flex items-center justify-between text-xs">
                    {isTrustpilot ? (
                      <div className="flex items-center gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <div
                            key={i}
                            className="w-3.5 h-3.5 rounded-xs bg-[#00b67a] flex items-center justify-center text-white text-[8px] font-bold"
                          >
                            ★
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center text-[#fbbc04] gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#fbbc04]" />
                        ))}
                      </div>
                    )}
                    <span className="text-[11px] text-neutral-400 font-mono">{review.timeAgo}</span>
                  </div>

                  {/* Review Quote Body */}
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
                    "{review.reviewText}"
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-4 mt-6 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                  <span className="font-medium text-[#002d2c] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#00aca9]" />
                    {review.villaLocation}
                  </span>
                  <span className="text-neutral-400">Verified Client</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* LinkedIn Founders Spotlight Card */}
        <div className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a66c2] flex items-center gap-1.5">
                <Linkedin className="w-4 h-4 fill-[#0a66c2] text-[#0a66c2]" />
                Professional Leadership on LinkedIn
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#002d2c]">
                Connect with the Principals of Luxury Villa Technologies
              </h3>
            </div>
            <a
              href={LINKEDIN_DATA.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a66c2] hover:bg-[#004182] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
            >
              <Linkedin className="w-4 h-4" />
              <span>Follow LVT on LinkedIn</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LINKEDIN_DATA.founders.map((founder, fIdx) => (
              <div
                key={fIdx}
                className="p-5 rounded-2xl bg-[#fafafa] border border-neutral-200 flex flex-col justify-between space-y-4 hover:border-[#0a66c2]/50 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-[#002d2c]">{founder.name}</h4>
                      <span className="text-xs font-medium text-[#00aca9]">{founder.role}</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#0a66c2] bg-[#0a66c2]/10 px-2 py-0.5 rounded font-semibold">
                      {founder.connections}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {founder.headline}
                  </p>
                </div>

                <a
                  href={founder.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0a66c2] hover:text-[#002d2c] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>View Full Professional Credentials</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
