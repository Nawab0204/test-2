import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../../data/blogAndFaqData';
import { PageRoute } from '../../App';
import { Clock, Calendar, ArrowRight, User, X, Tag, Sparkles } from 'lucide-react';

interface CurrentBlogProps {
  setPage: (page: PageRoute) => void;
}

export const CurrentBlog: React.FC<CurrentBlogProps> = ({ setPage }) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const allTags = ['all', ...Array.from(new Set(BLOG_POSTS.flatMap((p) => p.tags)))];

  const filteredPosts = selectedTag === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.tags.includes(selectedTag));

  return (
    <div className="w-full bg-[#fafafa] text-[#161616]">
      {/* 1. HERO HEADER */}
      <section className="bg-[#002d2c] text-white py-20 border-b border-[#00aca9]/20">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#00aca9]/20 border border-[#00aca9]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#00aca9] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LVT Knowledge Base &amp; Engineering Whitepapers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Caribbean Villa Technology Insights
          </h1>

          <p className="text-base sm:text-lg text-neutral-200 max-w-3xl leading-relaxed font-light">
            In-depth technical analysis, coastal resilience strategies, and smart estate architectural blueprints written by Caribbean systems engineers.
          </p>
        </div>
      </section>

      {/* 2. TAG FILTER BAR */}
      <section className="bg-white border-b border-neutral-200 py-4 sticky top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider whitespace-nowrap mr-2">
            Filter Topics:
          </span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium capitalize whitespace-nowrap transition-all ${
                selectedTag === tag
                  ? 'bg-[#002d2c] text-white font-semibold'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {tag === 'all' ? 'All Articles' : tag}
            </button>
          ))}
        </div>
      </section>

      {/* 3. ARTICLES GRID */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#00aca9]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-semibold text-[#002d2c] border border-neutral-200 shadow-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#00aca9]" />
                      <span>{post.date}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#00aca9]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#002d2c] group-hover:text-[#00aca9] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-neutral-100 text-neutral-600 px-2.5 py-0.5 rounded-md"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author and Action */}
              <div className="p-6 sm:p-8 pt-0 border-t border-neutral-100 flex items-center justify-between mt-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#002d2c] text-white text-xs font-bold flex items-center justify-center">
                    {post.author.name[0]}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-900 block">{post.author.name}</span>
                    <span className="text-[10px] text-neutral-500 block">{post.author.role}</span>
                  </div>
                </div>

                <button
                  onClick={() => setActivePost(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00aca9] hover:text-[#002d2c] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. FULL ARTICLE READER MODAL */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative bg-white rounded-2xl max-w-3xl w-full my-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200">
            {/* Header Close Button */}
            <button
              onClick={() => setActivePost(null)}
              className="sticky top-4 right-4 ml-auto z-10 p-2 rounded-full bg-white/80 hover:bg-neutral-100 border border-neutral-200 text-neutral-700 transition-colors float-right mr-4 mt-4"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[21/9] overflow-hidden bg-neutral-100">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs bg-[#00aca9] text-white px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                  {activePost.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-4 text-xs text-neutral-500 border-b border-neutral-100 pb-4">
                <span>By <strong>{activePost.author.name}</strong>, {activePost.author.role}</span>
                <span>·</span>
                <span>{activePost.date}</span>
                <span>·</span>
                <span>{activePost.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#002d2c] leading-snug">
                {activePost.title}
              </h2>

              <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
                {activePost.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Topics:</span>
                  {activePost.tags.map((t, idx) => (
                    <span key={idx} className="text-xs bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-md">
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setActivePost(null);
                    setPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="lvt-wf-button text-xs uppercase tracking-wider font-semibold"
                >
                  Consult on this Architecture
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
