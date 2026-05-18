
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Multicloud from './pages/Multicloud';
import WhyCyberSys from './pages/WhyCyberSys';
import Insights from './pages/Insights';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Services from './pages/Services';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const validPages: Page[] = [
    'home', 'solutions', 'solutions-software', 'solutions-digital', 
    'solutions-bi', 'solutions-cybersecurity', 'services',
    'services-cloud', 'services-multicloud', 'services-managed', 
    'services-training', 'industries', 'multicloud', 'why-cybersys', 
    'insights', 'company', 'contact'
  ];

  // Simple hash-based navigation listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    // Check if current page is a solution detail page
    if (currentPage.startsWith('solutions-')) {
      return <Solutions onPageChange={handlePageChange} detailView={currentPage.replace('solutions-', '')} />;
    }

    // Check if current page is a service detail page
    if (currentPage.startsWith('services-')) {
      return <Services onPageChange={handlePageChange} serviceType={currentPage.replace('services-', '')} />;
    }

    switch (currentPage) {
      case 'home': return <Home onPageChange={handlePageChange} />;
      case 'solutions': return <Solutions onPageChange={handlePageChange} />;
      case 'services': return <Services onPageChange={handlePageChange} />;
      case 'industries': return <Industries onPageChange={handlePageChange} />;
      case 'multicloud': return <Multicloud onPageChange={handlePageChange} />;
      case 'why-cybersys': return <WhyCyberSys onPageChange={handlePageChange} />;
      case 'insights': return <Insights />;
      case 'company': return <Company onPageChange={handlePageChange} />;
      case 'contact': return <Contact />;
      default: return <Home onPageChange={handlePageChange} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={handlePageChange}>
      {renderPage()}
    </Layout>
  );
};

export default App;
