
import React from 'react';
import { CS5_FRAMEWORK, CYBER_VALUES } from '../constants';
import { Page } from '../types';
import { ShieldCheck, Award, Zap } from 'lucide-react';

const WhyCyberSys: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-5xl font-bold">The Standard for Enterprise Trust.</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              In an era of rapid digital shift, organizations need more than a technology vendor—they need a long-term partner with a deep understanding of infrastructure resilience and regulatory landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-16 text-center">The CYBER Brand Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {CYBER_VALUES.map((val) => (
              <div key={val.letter} className="p-8 bg-slate-900 rounded-xl border border-white/5 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center rounded-full text-white font-bold text-2xl mb-6">
                  {val.letter}
                </div>
                <h4 className="font-bold text-lg mb-3">{val.value}</h4>
                <p className="text-slate-400 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Built for African Realities, Delivered to Global Standards.</h2>
            <p className="text-slate-400">We bridge the gap between global technology and local operational needs, ensuring that every solution is resilient to regional constraints while remaining globally competitive.</p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <ShieldCheck className="text-blue-500 w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Compliance-Aware Infrastructure</h4>
                  <p className="text-slate-400 text-sm">Deep expertise in financial and telecommunications regulations across key African markets.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Award className="text-blue-500 w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Yield-Focused Outcomes</h4>
                  <p className="text-slate-400 text-sm">We don't just deploy tech; we measure its impact on your operational efficiency and bottom line.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Zap className="text-blue-500 w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Operational Continuity</h4>
                  <p className="text-slate-400 text-sm">Architectures engineered for maximum uptime, even in challenging connectivity environments.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-950 border border-white/5 p-12 rounded-2xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8">Ready to Partner?</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">Schedule a session with one of our lead architects to discuss your infrastructure modernization roadmap.</p>
            <button 
              onClick={() => onPageChange('contact')}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded"
            >
              Talk to a Solutions Architect
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyCyberSys;
