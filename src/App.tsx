import React, { useState, useEffect } from 'react';
import { CurrentNav } from './components/current/CurrentNav';
import { CurrentFooter } from './components/current/CurrentFooter';
import { CurrentHome } from './components/current/CurrentHome';
import { CurrentAbout } from './components/current/CurrentAbout';
import { CurrentServices } from './components/current/CurrentServices';
import { CurrentServiceDetail } from './components/current/CurrentServiceDetail';
import { CurrentProjects } from './components/current/CurrentProjects';
import { CurrentProjectDetail } from './components/current/CurrentProjectDetail';
import { CurrentContact } from './components/current/CurrentContact';
import { CurrentBlog } from './components/current/CurrentBlog';
import { CurrentFAQ } from './components/current/CurrentFAQ';
import { FloatingActionButtons } from './components/common/FloatingActionButtons';

export type PageRoute = 'home' | 'about' | 'services' | 'projects' | 'blog' | 'faq' | 'contact' | 'service-detail' | 'project-detail';

export default function App() {
  const [page, setPage] = useState<PageRoute>('home');
  const [selectedSlug, setSelectedSlug] = useState<string>('villa-bella-vita');

  // Sync with URL parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get('page') as PageRoute;
    const s = params.get('slug');
    if (p && ['home', 'about', 'services', 'projects', 'blog', 'faq', 'contact', 'service-detail', 'project-detail'].includes(p)) {
      setPage(p);
    }
    if (s) {
      setSelectedSlug(s);
    }
  }, []);

  // Update browser URL query params quietly
  useEffect(() => {
    const params = new URLSearchParams();
    if (page !== 'home') {
      params.set('page', page);
    }
    if (page === 'project-detail' || page === 'service-detail') {
      params.set('slug', selectedSlug);
    }
    const queryString = params.toString();
    const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
    window.history.replaceState({}, '', newUrl);
  }, [page, selectedSlug]);

  const renderPageView = () => {
    switch (page) {
      case 'home':
        return <CurrentHome setPage={setPage} setSelectedSlug={setSelectedSlug} />;
      case 'about':
        return <CurrentAbout setPage={setPage} />;
      case 'services':
        return <CurrentServices setPage={setPage} setSelectedSlug={setSelectedSlug} />;
      case 'service-detail':
        return <CurrentServiceDetail slug={selectedSlug} setPage={setPage} setSelectedSlug={setSelectedSlug} />;
      case 'projects':
        return <CurrentProjects setPage={setPage} setSelectedSlug={setSelectedSlug} />;
      case 'project-detail':
        return <CurrentProjectDetail slug={selectedSlug} setPage={setPage} setSelectedSlug={setSelectedSlug} />;
      case 'blog':
        return <CurrentBlog setPage={setPage} />;
      case 'faq':
        return <CurrentFAQ setPage={setPage} />;
      case 'contact':
        return <CurrentContact />;
      default:
        return <CurrentHome setPage={setPage} setSelectedSlug={setSelectedSlug} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#161616] flex flex-col font-sans selection:bg-[#00aca9] selection:text-white">
      {/* 1. AUTHENTIC NAVIGATION BAR */}
      <CurrentNav
        currentPage={page}
        setPage={setPage}
        setSelectedSlug={setSelectedSlug}
      />

      {/* 2. MAIN PAGE CONTENT */}
      <main className="flex-1 bg-white">
        {renderPageView()}
      </main>

      {/* 3. AUTHENTIC FOOTER */}
      <CurrentFooter
        setPage={setPage}
        setSelectedSlug={setSelectedSlug}
      />
    </div>
  );
}
