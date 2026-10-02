import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  FileText, 
  Users, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  Loader2, 
  AlertCircle 
} from 'lucide-react';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'consultation' | 'proposal' | 'partner'>('consultation');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subjectDomain: 'Infrastructure Modernization',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submissionId, setSubmissionId] = useState('');

  const tabContent = {
    consultation: { title: 'Executive Consultation', desc: 'Direct access to senior infrastructure architects.' },
    proposal: { title: 'RFP Submission', desc: 'Secure technical documentation and requirements portal.' },
    partner: { title: 'Strategic Partnerships', desc: 'Global vendor integration and partnership program.' }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const generatedId = `CS-R-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionId(generatedId);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@cybersystechnologies.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ticket_id: generatedId,
          engagement_type: tabContent[activeTab].title,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          subject_domain: formData.subjectDomain,
          requirements: formData.message,
          _subject: `CyberSys Inquiry [${generatedId}]: ${formData.subjectDomain} - ${formData.fullName}`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false'
        })
      });

      let isSuccess = response.ok;
      try {
        const result = await response.json();
        // If formsubmit returns success === "false" due to activation or other reasons
        if (result && (result.success === 'false' || result.success === false)) {
          if (result.message && result.message.includes('Activation')) {
            // The gateway received it and triggered activation email
            isSuccess = true;
          } else {
            isSuccess = false;
            setSubmitError(result.message || 'Unable to deliver message automatically. Please use direct email below.');
          }
        }
      } catch {
        // If response is not JSON, rely on HTTP status
      }

      if (isSuccess) {
        setSubmitted(true);
      } else if (!submitError) {
        setSubmitError('Unable to send automatically via gateway. Please use the direct email button below or try again.');
      }
    } catch {
      setSubmitError('Network connection issue. You can transmit directly to info@cybersystechnologies.com below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoFallbackUrl = `mailto:info@cybersystechnologies.com?subject=${encodeURIComponent(
    `CyberSys Inquiry: ${formData.subjectDomain} (${formData.fullName || 'New Client'})`
  )}&body=${encodeURIComponent(
    `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nEngagement: ${tabContent[activeTab].title}\nSubject Domain: ${formData.subjectDomain}\n\nRequirements:\n${formData.message}`
  )}`;

  return (
    <div className="animate-in fade-in duration-1000 bg-white min-h-screen">
      {/* 1. PAGE HERO */}
      <section className="bg-slate-50 border-b border-slate-200 py-20 md:py-32 blueprint-grid relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-fine opacity-40 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="reveal-on-scroll active inline-flex items-center gap-4 mb-4">
                 <div className="h-px w-12 bg-brand-primary"></div>
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">Direct Access</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-brand-text tracking-tighter uppercase leading-[0.9] mb-6">
                Start the <br /> <span className="text-brand-primary italic">Dialogue.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-muted max-w-2xl font-medium leading-relaxed border-l-2 border-brand-primary pl-6 sm:pl-8 py-1">
                Establish a direct line with our lead technical specialists to discuss modernization roadmaps, infrastructure security, and operational yield.
              </p>
            </div>
            <div className="lg:col-span-5 reveal-on-scroll active relative">
              <div className="absolute -inset-4 blueprint-grid opacity-30 pointer-events-none rounded-[2.5rem]"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 p-2 bg-white/50 backdrop-blur-md shadow-2xl shadow-slate-200/30 group">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=70" 
                  alt="Direct Access" 
                  className="w-full h-[240px] sm:h-[300px] object-cover rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none rounded-[1.5rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Sidebar Tabs & Corporate Details */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                <h2 className="text-[12px] font-black text-brand-primary uppercase tracking-[0.6em]">01 / Subject</h2>
                <div className="flex flex-col gap-3">
                  {[
                    { id: 'consultation', label: 'Consultation', icon: <MessageSquare size={16} /> },
                    { id: 'proposal', label: 'Proposals (RFP)', icon: <FileText size={16} /> },
                    { id: 'partner', label: 'Partnerships', icon: <Users size={16} /> }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-5 p-5 rounded-2xl border transition-all text-left group ${
                        activeTab === tab.id 
                          ? 'bg-brand-primary border-brand-primary text-white shadow-xl shadow-brand-primary/20' 
                          : 'bg-slate-50 border-slate-100 text-brand-muted hover:border-brand-primary'
                      }`}
                    >
                      <div className={activeTab === tab.id ? 'text-white' : 'text-brand-primary'}>
                        {tab.icon}
                      </div>
                      <span className="font-black uppercase tracking-[0.2em] text-[10px]">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Direct Reach Information */}
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-6">
                <div className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em]">Corporate Headquarters</div>
                
                <div className="space-y-5 text-xs text-brand-muted">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-white text-brand-primary rounded-xl border border-slate-200/60 shadow-sm flex-shrink-0 mt-0.5">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Office Location</p>
                      <p className="text-slate-800 font-bold leading-snug">Plot 23, Providence Street, Lekki Phase 1, Lagos, Nigeria</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-white text-brand-primary rounded-xl border border-slate-200/60 shadow-sm flex-shrink-0 mt-0.5">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Official Email</p>
                      <a href="mailto:info@cybersystechnologies.com" className="text-brand-primary font-bold hover:underline break-all">
                        info@cybersystechnologies.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-white text-brand-primary rounded-xl border border-slate-200/60 shadow-sm flex-shrink-0 mt-0.5">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Direct Lines</p>
                      <div className="space-y-0.5">
                        <a href="tel:+2348025955618" className="block text-slate-800 font-bold hover:text-brand-primary transition-colors">
                          +234 802 595 5618
                        </a>
                        <a href="tel:+2348109076541" className="block text-slate-800 font-bold hover:text-brand-primary transition-colors">
                          +234 810 907 6541
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                  <ShieldCheck size={18} className="text-brand-primary flex-shrink-0" />
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Confidentiality guaranteed. 24h SLA.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Active Form Area */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-slate-200 rounded-[3rem] p-8 sm:p-12 md:p-16 shadow-2xl shadow-slate-200/50">
                {submitted ? (
                  <div className="text-center py-16 space-y-6 animate-in fade-in zoom-in duration-700">
                     <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner border border-emerald-100">
                        <CheckCircle2 size={40} />
                     </div>
                     <div className="space-y-3">
                        <h3 className="text-3xl font-black text-brand-text uppercase tracking-tighter italic">Transmission Received.</h3>
                        <p className="text-[12px] text-brand-primary font-black tracking-widest uppercase bg-brand-primary/5 py-2 px-6 rounded-full inline-block border border-brand-primary/10">
                          Reference: {submissionId}
                        </p>
                     </div>
                     <p className="text-base text-brand-muted font-medium max-w-md mx-auto leading-relaxed">
                       Your inquiry has been successfully dispatched to <span className="font-bold text-brand-text">info@cybersystechnologies.com</span>. One of our lead architects will contact you shortly using your provided corporate email (<span className="font-bold text-brand-text">{formData.email}</span>).
                     </p>
                     <div className="pt-4">
                       <button 
                         onClick={() => {
                           setSubmitted(false);
                           setFormData({ fullName: '', email: '', phone: '', subjectDomain: 'Infrastructure Modernization', message: '' });
                         }} 
                         className="text-brand-primary font-black text-[11px] uppercase tracking-widest border-b-2 border-brand-primary hover:border-brand-accent hover:text-brand-accent transition-all pb-1"
                       >
                         Start New Transmission
                       </button>
                     </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                    <div className="space-y-2">
                      <h2 className="text-2xl sm:text-3xl font-black text-brand-text uppercase tracking-tighter italic">
                        {tabContent[activeTab].title}
                      </h2>
                      <p className="text-[11px] text-brand-muted font-black uppercase tracking-[0.25em] opacity-60">
                        {tabContent[activeTab].desc}
                      </p>
                    </div>

                    {submitError && (
                      <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl space-y-3">
                        <div className="flex items-center gap-2.5 text-amber-900 font-bold text-xs">
                          <AlertCircle size={18} className="text-amber-600 flex-shrink-0" />
                          <span>{submitError}</span>
                        </div>
                        <a
                          href={mailtoFallbackUrl}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-primary text-white rounded-xl font-bold text-xs hover:bg-brand-accent transition-all"
                        >
                          <Mail size={14} /> Send Directly via Email Client
                        </a>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted">Full Name *</label>
                        <input 
                          required 
                          type="text" 
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:border-brand-primary focus:bg-white outline-none text-sm transition-all font-medium placeholder:text-slate-300" 
                          placeholder="e.g. John Doe" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted">Corporate Email *</label>
                        <input 
                          required 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:border-brand-primary focus:bg-white outline-none text-sm transition-all font-medium placeholder:text-slate-300" 
                          placeholder="e.g. john@company.com" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted">Phone Number (Optional)</label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:border-brand-primary focus:bg-white outline-none text-sm transition-all font-medium placeholder:text-slate-300" 
                          placeholder="e.g. +234 800 000 0000" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted">Subject Domain</label>
                        <select 
                          value={formData.subjectDomain}
                          onChange={(e) => setFormData({ ...formData, subjectDomain: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:border-brand-primary focus:bg-white outline-none text-sm transition-all font-bold uppercase tracking-tight text-brand-text cursor-pointer"
                        >
                          <option value="Infrastructure Modernization">Infrastructure Modernization</option>
                          <option value="Multicloud & Hybrid Operations">Multicloud & Hybrid Operations</option>
                          <option value="Cybersecurity & Governance">Cybersecurity & Governance</option>
                          <option value="Compliance Advisory">Compliance Advisory</option>
                          <option value="Enterprise ERP & Primavera">Enterprise ERP & Primavera</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted">Brief Requirements Summary *</label>
                      <textarea 
                        required 
                        rows={5} 
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:border-brand-primary focus:bg-white outline-none text-sm transition-all resize-none font-medium placeholder:text-slate-300" 
                        placeholder="Please describe your current infrastructure, cloud, or security requirements..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-5 bg-brand-primary text-white rounded-xl font-black text-[12px] uppercase tracking-[0.35em] shadow-2xl shadow-brand-primary/20 hover:bg-brand-accent transition-all transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Transmitting Engagement...</span>
                        </>
                      ) : (
                        <>
                          <span>Initiate Engagement</span>
                          <ArrowRight size={16} />
                        </>
                      )}
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
