import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, FileText, Newspaper, ChevronRight } from 'lucide-react';

const Insights: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'whitepapers' | 'case-studies' | 'news'>('blog');

  const content = {
    blog: [
      { category: 'Cybersecurity', title: 'The Evolution of Threat Landscapes in African Financial Hubs', date: 'Mar 12, 2024' },
      { category: 'Multicloud', title: 'Optimizing Cloud Yield: Beyond Simple Reselling', date: 'Feb 28, 2024' }
    ],
    whitepapers: [
      { category: 'Compliance', title: 'Data Sovereignty Framework: A Guide for African Governments', date: 'Jan 2024' },
      { category: 'Strategy', title: 'Multicloud Adoption for Enterprise Resilience', date: 'Dec 2023' }
    ],
    'case-studies': [
      { category: 'Banking', title: 'Zero-Downtime Migration for Tier 1 Regional Bank', date: 'Mar 2024' },
      { category: 'Telco', title: 'Edge Computing Infrastructure Deployment Case Study', date: 'Nov 2023' }
    ],
    news: [
      { category: 'Company', title: 'CyberSys Expands Infrastructure Hub into East Africa', date: 'Mar 2024' },
      { category: 'Partnership', title: 'CyberSys Named AWS Resilience Partner of the Year', date: 'Jan 2024' }
    ]
  };

  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      {/* 1. PAGE HERO */}
      <section className="bg-slate-50 border-b border-slate-200 py-24 md:py-40 blueprint-grid relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="max-w-5xl">
            <div className="reveal-on-scroll active inline-flex items-center gap-4 mb-10">
               <div className="h-px w-12 bg-brand-primary"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">Corporate Authority</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-[0.85] mb-12">
              Knowledge & <br /> <span className="text-brand-primary">Authority.</span>
            </h1>
            <p className="text-xl text-brand-muted max-w-3xl font-medium leading-relaxed border-l-2 border-brand-primary pl-10 py-2">
              Expert perspectives and framework documentation for the future of enterprise technology in complex jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STICKY NAVIGATION */}
      <section className="sticky top-[80px] bg-white/80 backdrop-blur-xl border-b border-slate-200 z-30 shadow-sm overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="flex gap-12 overflow-x-auto pb-0 no-scrollbar">
            {[
              { id: 'blog', label: 'Analysis & Blog', icon: <Newspaper size={16} /> },
              { id: 'whitepapers', label: 'Whitepapers', icon: <FileText size={16} /> },
              { id: 'case-studies', label: 'Case Studies', icon: <BookOpen size={16} /> },
              { id: 'news', label: 'Corporate News', icon: <Clock size={16} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-3 whitespace-nowrap py-6 border-b-2 transition-all font-black text-[10px] uppercase tracking-[0.3em] ${activeTab === tab.id ? 'border-brand-primary text-brand-primary' : 'border-transparent text-brand-muted hover:text-brand-text'}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTENT GRID */}
      <section className="py-24 min-h-[600px] bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content[activeTab].map((item, idx) => (
              <div key={idx} className="group p-10 bg-slate-50 border border-slate-100 rounded-[2rem] hover:border-brand-primary transition-all duration-500 cursor-pointer hover:shadow-xl hover:-translate-y-2">
                <div className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">{item.category}</div>
                <h3 className="text-xl font-black text-brand-text mb-8 uppercase tracking-tighter leading-snug group-hover:text-brand-primary transition-colors">{item.title}</h3>
                <div className="flex justify-between items-center text-[10px] font-black text-brand-muted uppercase tracking-[0.2em] pt-6 border-t border-slate-200/50">
                  <span>{item.date}</span>
                  <div className="h-8 w-8 bg-white border border-slate-200 rounded-full flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-500">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER CTA */}
      <section className="py-24 bg-brand-text text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic">Stay ahead <br /> of the curve.</h2>
              <p className="text-slate-400 font-medium text-lg">Subscribe to our monthly Enterprise Intelligence briefing.</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
              <input 
                type="email" 
                placeholder="Corporate Email" 
                className="bg-white/5 border border-white/10 rounded-xl px-8 py-5 outline-none w-full lg:w-80 placeholder:text-white/20 focus:border-brand-primary transition-colors font-medium" 
              />
              <button className="bg-brand-primary hover:bg-brand-accent text-white px-10 py-5 rounded-xl font-black text-[12px] uppercase tracking-[0.4em] transition-all whitespace-nowrap shadow-xl shadow-brand-primary/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
