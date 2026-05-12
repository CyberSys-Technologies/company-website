
import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, FileText, Newspaper } from 'lucide-react';

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
    <div className="animate-in fade-in duration-700">
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-5xl font-bold mb-6">Knowledge & Authority.</h1>
          <p className="text-xl text-slate-400 max-w-3xl">Expert perspectives and framework documentation for the future of enterprise technology.</p>
        </div>
      </section>

      <section className="py-12 border-b border-white/5 sticky top-20 bg-slate-950/80 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex gap-8 overflow-x-auto pb-4 no-scrollbar">
            {[
              { id: 'blog', label: 'Analysis & Blog', icon: <Newspaper size={18} /> },
              { id: 'whitepapers', label: 'Whitepapers & Reports', icon: <FileText size={18} /> },
              { id: 'case-studies', label: 'Case Studies', icon: <BookOpen size={18} /> },
              { id: 'news', label: 'Company News', icon: <Clock size={18} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 whitespace-nowrap pb-2 border-b-2 transition-all font-semibold ${activeTab === tab.id ? 'border-blue-500 text-blue-500' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content[activeTab].map((item, idx) => (
              <div key={idx} className="group p-8 bg-slate-900 border border-white/5 rounded-2xl hover:border-blue-500/50 transition-all cursor-pointer">
                <div className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">{item.category}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <div className="flex justify-between items-center text-sm text-slate-500 pt-6 border-t border-white/5">
                  <span>{item.date}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-3xl font-bold">Stay ahead of the curve.</h2>
            <p className="text-blue-100">Subscribe to our monthly Enterprise Intelligence briefing.</p>
          </div>
          <div className="flex w-full lg:w-auto gap-4">
            <input type="email" placeholder="Corporate Email" className="bg-white/10 border border-white/20 rounded-lg px-6 py-4 outline-none w-full lg:w-80 placeholder:text-white/50" />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
