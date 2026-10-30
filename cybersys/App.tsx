import React, { Suspense, lazy, useEffect, useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import { Page } from './types';
import { PAGE_META, ROUTES, pageFromHash, pageFromPath } from './routes';

// Every page except Home loads on demand, so the first visit downloads less
const Solutions = lazy(() => import('./pages/Solutions'));
const CloudInfrastructure = lazy(() => import('./pages/CloudInfrastructure'));
const Cybersecurity = lazy(() => import('./pages/Cybersecurity'));
const AIAnalytics = lazy(() => import('./pages/AIAnalytics'));
const BusinessApplications = lazy(() => import('./pages/BusinessApplications'));
const ManagedServices = lazy(() => import('./pages/ManagedServices'));
const TrainingConsultancy = lazy(() => import('./pages/TrainingConsultancy'));
const Industries = lazy(() => import('./pages/Industries'));
const Company = lazy(() => import('./pages/Company'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));

const SITE_URL = 'https://www.cybersystechnologies.com';

/** Set the tab title, search description, canonical address and share preview for a page */
const applyMeta = (page: Page) => {
  const { title, description } = PAGE_META[page];
  const url = SITE_URL + ROUTES[page];
  document.title = title;
  const set = (selector: string, attr: string, value: string) => {
    document.head.querySelector(selector)?.setAttribute(attr, value);
  };
  set('meta[name="description"]', 'content', description);
  set('link[rel="canonical"]', 'href', url);
  set('meta[property="og:title"]', 'content', title);
  set('meta[property="og:description"]', 'content', description);
  set('meta[property="og:url"]', 'content', url);
  set('meta[name="twitter:title"]', 'content', title);
  set('meta[name="twitter:description"]', 'content', description);
};

const initialPage = (): Page => {
  const { pathname, hash } = window.location;
  // Old #page links (e.g. /#company) move to the clean address
  const legacy = pageFromHash(hash);
  if (legacy) {
    window.history.replaceState(null, '', ROUTES[legacy]);
    return legacy;
  }
  // Unknown addresses fall back to Home; a trailing slash is tidied; in-page anchors are kept
  const page = pageFromPath(pathname) || 'home';
  if (pathname !== ROUTES[page]) window.history.replaceState(null, '', ROUTES[page] + hash);
  return page;
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(initialPage);
  // The page a visitor was on when they went to Contact, used to pre-select the enquiry topic
  const [contactFrom, setContactFrom] = useState<Page | null>(null);

  // Back and forward buttons, plus old #page links followed while the site is already open
  useEffect(() => {
    const handlePopState = () => setCurrentPage(pageFromPath(window.location.pathname) || 'home');
    const handleHashChange = () => {
      const legacy = pageFromHash(window.location.hash);
      if (!legacy) return;
      window.history.replaceState(null, '', ROUTES[legacy]);
      setCurrentPage(legacy);
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => applyMeta(currentPage), [currentPage]);

  const handlePageChange = (page: Page) => {
    if (page === 'contact' && currentPage !== 'contact') setContactFrom(currentPage);
    setCurrentPage(page);
    if (window.location.pathname !== ROUTES[page]) window.history.pushState(null, '', ROUTES[page]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    if (currentPage.startsWith('industries-')) {
      return <Industries onPageChange={handlePageChange} industryPage={currentPage} />;
    }

    switch (currentPage) {
      case 'solutions': return <Solutions onPageChange={handlePageChange} />;
      case 'services-cloud': return <CloudInfrastructure onPageChange={handlePageChange} />;
      case 'solutions-cybersecurity': return <Cybersecurity onPageChange={handlePageChange} />;
      case 'solutions-bi': return <AIAnalytics onPageChange={handlePageChange} />;
      case 'solutions-software': return <BusinessApplications onPageChange={handlePageChange} />;
      case 'services-managed': return <ManagedServices onPageChange={handlePageChange} />;
      case 'services-training': return <TrainingConsultancy onPageChange={handlePageChange} />;
      case 'industries': return <Industries onPageChange={handlePageChange} />;
      case 'company': return <Company onPageChange={handlePageChange} />;
      case 'careers': return <Careers onPageChange={handlePageChange} />;
      case 'contact': return <Contact from={contactFrom} />;
      default: return <Home onPageChange={handlePageChange} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={handlePageChange}>
      {/* Keep the space filled while a page's code loads, so the footer doesn't jump up */}
      <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
        {renderPage()}
      </Suspense>
    </Layout>
  );
};

export default App;
