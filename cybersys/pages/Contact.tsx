import React, { useState } from 'react';
import { Mail, Globe, CheckCircle2, FileText, Users, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'consultation' | 'proposal' | 'partner'>('consultation');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const tabContent = {
    consultation: { title: 'Executive Consultation', desc: 'Direct access to senior infrastructure architects.' },
    proposal: { title: 'RFP Submission', desc: 'Secure technical documentation and requirements portal.' },
    partner: { title: 'Strategic Partnerships', desc: 'Global vendor integration and partnership program.' }
  };

  return (
    <div className="animate-in fade-in duration-1000 bg-white min-h-screen">
      {/* 1. PAGE HERO */}
      <section className="bg-slate-50 border-b border-slate-200 py-24 md:py-40 blueprint-grid relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 relative z-10">
          <div className="max-w-5xl">
            <div className="reveal-on-scroll active inline-flex items-center gap-4 mb-10">
               <div className="h-px w-12 bg-brand-primary"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">Direct Access</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-[0.85] mb-12">
              Start the <br /> <span className="text-brand-primary italic">Dialogue.</span>
            </h1>
            <p className="text-xl text-brand-muted max-w-3xl font-medium leading-relaxed border-l-2 border-brand-primary pl-10">
              Establish a direct line with our lead technical specialists to discuss modernization roadmaps, infrastructure security, and operational yield.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Left Column: Sidebar Tabs */}
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-4">
                <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">01 / Subject</h2>
                <div className="flex flex-col gap-4">
                  {[
                    { id: 'consultation', label: 'Consultation', icon: <MessageSquare size={16} /> },
                    { id: 'proposal', label: 'Proposals (RFP)', icon: <FileText size={16} /> },
                    { id: 'partner', label: 'Partnerships', icon: <Users size={16} /> }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-6 p-6 rounded-2xl border transition-all text-left group ${activeTab === tab.id ? 'bg-brand-primary border-brand-primary text-white shadow-xl shadow-brand-primary/20' : 'bg-slate-50 border-slate-100 text-brand-muted hover:border-brand-primary'}`}
                    >
                      <div className={activeTab === tab.id ? 'text-white' : 'text-brand-primary'}>
                        {tab.icon}
                      </div>
                      <span className="font-black uppercase tracking-[0.2em] text-[10px]">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-6">
                 <ShieldCheck size={32} className="text-brand-primary" />
                 <p className="text-[11px] text-brand-muted font-black leading-relaxed uppercase tracking-tight opacity-70">
                   Strict confidentiality protocols observed. Response window: 24 business hours. Technical data handled via encrypted channels.
                 </p>
              </div>
            </div>

            {/* Right Column: Form Area */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-slate-200 rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-slate-200/50">
                {submitted ? (
                  <div className="text-center py-20 space-y-8 animate-in fade-in zoom-in duration-700">
                     <div className="w-20 h-20 bg-brand-primary/5 text-brand-primary rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 size={40} />
                     </div>
                     <div className="space-y-4">
                        <h3 className="text-3xl font-black text-brand-text uppercase tracking-tighter italic">Transmission Received.</h3>
                        <p className="text-[12px] text-brand-muted font-black tracking-widest uppercase bg-slate-50 py-2 px-6 rounded-full inline-block">ID: CS-R-{(Math.random() * 1000).toFixed(0)}</p>
                     </div>
                     <p className="text-lg text-brand-muted font-medium max-w-md mx-auto">One of our lead architects will contact you shortly using your provided corporate email.</p>
                     <button onClick={() => setSubmitted(false)} className="text-brand-primary font-black text-[11px] uppercase tracking-widest border-b-2 border-brand-primary hover:border-brand-accent hover:text-brand-accent transition-all">Start New Transmission</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-3">
                      <h2 className="text-3xl font-black text-brand-text uppercase tracking-tighter italic">{tabContent[activeTab].title}</h2>
                      <p className="text-[12px] text-brand-muted font-black uppercase tracking-[0.3em] opacity-60">{tabContent[activeTab].desc}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted">Full Name</label>
                        <input required type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4.5 focus:border-brand-primary outline-none text-sm transition-all font-medium placeholder:text-slate-300" placeholder="e.g. John Doe" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted">Corporate Email</label>
                        <input required type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4.5 focus:border-brand-primary outline-none text-sm transition-all font-medium placeholder:text-slate-300" placeholder="e.g. john@company.com" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted">Subject Domain</label>
                      <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4.5 focus:border-brand-primary outline-none text-sm transition-all font-black uppercase tracking-tight text-brand-text cursor-pointer">
                        <option>Infrastructure Modernization</option>
                        <option>Cybersecurity & Governance</option>
                        <option>Multicloud & Hybrid Operations</option>
                        <option>Compliance Advisory</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted">Brief Requirements Summary</label>
                      <textarea required rows={5} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4.5 focus:border-brand-primary outline-none text-sm transition-all resize-none font-medium placeholder:text-slate-300" placeholder="Please describe your current infrastructure challenges..."></textarea>
                    </div>

                    <button type="submit" className="w-full py-6 bg-brand-primary text-white rounded-xl font-black text-[12px] uppercase tracking-[0.4em] shadow-2xl shadow-brand-primary/20 hover:bg-brand-accent transition-all transform hover:-translate-y-1">
                      Initiate Engagement
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
