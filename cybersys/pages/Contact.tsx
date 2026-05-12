
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
    consultation: { title: 'Executive Consultation', desc: 'Senior infrastructure architect access.' },
    proposal: { title: 'RFP Submission', desc: 'Secure technical documentation portal.' },
    partner: { title: 'Strategic Partnerships', desc: 'Global vendor and integration program.' }
  };

  return (
    <div className="animate-in fade-in duration-500 bg-white min-h-screen">
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl space-y-4">
             <h1 className="text-4xl md:text-5xl font-black tracking-tight text-brand-text uppercase">Get in touch.</h1>
             <p className="text-lg text-brand-muted font-medium">Establish a dialogue with our lead technical specialists.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col gap-3">
              {[
                { id: 'consultation', label: 'Consultation', icon: <MessageSquare size={16} /> },
                { id: 'proposal', label: 'Proposals (RFP)', icon: <FileText size={16} /> },
                { id: 'partner', label: 'Partnerships', icon: <Users size={16} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-4 p-4 rounded border transition-all text-left group ${activeTab === tab.id ? 'bg-brand-primary border-brand-primary text-white shadow-md shadow-brand-primary/10' : 'bg-white border-slate-200 text-brand-muted hover:border-brand-primary'}`}
                >
                  <div className={activeTab === tab.id ? 'text-white' : 'text-brand-primary'}>
                    {tab.icon}
                  </div>
                  <span className="font-black uppercase tracking-[0.1em] text-[10px]">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 space-y-4">
               <ShieldCheck size={24} className="text-brand-primary" />
               <p className="text-[11px] text-brand-muted font-bold leading-relaxed uppercase tracking-tight">
                 Strict confidentiality protocols observed. Response window: 24 business hours.
               </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-200 rounded-xl p-8 md:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-16 space-y-6">
                   <div className="w-16 h-16 bg-brand-primary/5 text-brand-primary rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} />
                   </div>
                   <div className="space-y-3">
                      <h3 className="text-2xl font-black text-brand-text uppercase tracking-tight">Transmission Received.</h3>
                      <p className="text-[11px] text-brand-muted font-bold tracking-widest uppercase">ID: CS-R-{(Math.random() * 1000).toFixed(0)}</p>
                   </div>
                   <button onClick={() => setSubmitted(false)} className="text-brand-primary font-black text-[10px] uppercase tracking-widest border-b-2 border-brand-primary">New Submission</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-1.5">
                    <h2 className="text-xl font-black text-brand-text uppercase tracking-tight">{tabContent[activeTab].title}</h2>
                    <p className="text-[11px] text-brand-muted font-bold uppercase tracking-widest">{tabContent[activeTab].desc}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3.5 focus:border-brand-primary outline-none text-xs transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Corporate Email</label>
                      <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3.5 focus:border-brand-primary outline-none text-xs transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Subject / Domain</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3.5 focus:border-brand-primary outline-none text-xs transition-all text-slate-500">
                      <option>Cloud Infrastructure</option>
                      <option>Cybersecurity & Governance</option>
                      <option>Multicloud & FinOps</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Requirements Summary</label>
                    <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3.5 focus:border-brand-primary outline-none text-xs transition-all resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full py-4.5 bg-brand-primary text-white rounded font-black text-[11px] uppercase tracking-[0.25em] shadow-lg shadow-brand-primary/10 hover:bg-brand-accent transition-all">
                    Initiate Engagement
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
