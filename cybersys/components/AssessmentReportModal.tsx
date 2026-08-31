import React, { useState } from 'react';
import { SolutionRecommendation, AssessmentLeadData } from '../types';
import { X, CheckCircle2, Download, Send, FileText, Building, Mail, User, ShieldCheck } from 'lucide-react';

interface AssessmentReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  recommendation: SolutionRecommendation | null;
  selectedIndustry?: string;
}

const AssessmentReportModal: React.FC<AssessmentReportModalProps> = ({
  isOpen,
  onClose,
  recommendation,
  selectedIndustry = 'Enterprise'
}) => {
  const [formData, setFormData] = useState<AssessmentLeadData>({
    name: '',
    email: '',
    company: '',
    industry: selectedIndustry,
    companySize: '50-250 employees',
    primaryGoal: recommendation?.title || 'Multicloud & Security Assessment'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen || !recommendation) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-[#0D1527] border border-cyan-500/30 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden text-white relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-950 via-[#0D1527] to-[#0D1527] p-6 border-b border-cyan-500/20 flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/30 text-cyan-400">
              <FileText size={24} />
            </div>
            <div>
              <div className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em]">
                Executive Lead Engine
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight">
                Preliminary Technology Assessment
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Recommendation Summary Preview */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
                <div className="text-xs font-black text-cyan-300 uppercase tracking-widest flex items-center justify-between">
                  <span>Assessment Target Profile</span>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    Complimentary Report
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white uppercase">{recommendation.title}</h4>
                  <p className="text-xs text-slate-400 font-medium mt-1 leading-relaxed">
                    {recommendation.tagline}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-white/5">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-black block">Expected Outcome</span>
                    <span className="text-slate-200 font-medium">{recommendation.expectedOutcome}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-black block">Core Stack</span>
                    <span className="text-cyan-400 font-medium">{recommendation.recommendedTechnologies.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="space-y-4">
                <div className="text-xs font-black text-slate-300 uppercase tracking-wider">
                  Where should we send your preliminary assessment?
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-1.5">
                      <User size={12} className="text-cyan-400" /> Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adebayo Okonkwo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 focus:border-cyan-400 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-1.5">
                      <Mail size={12} className="text-cyan-400" /> Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="adebayo@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 focus:border-cyan-400 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-1.5">
                      <Building size={12} className="text-cyan-400" /> Company Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="CyberSys Partner Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 focus:border-cyan-400 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400">Company Size</label>
                    <select
                      value={formData.companySize}
                      onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                      className="w-full bg-slate-900 border border-white/15 focus:border-cyan-400 rounded-lg px-3 py-2.5 text-xs text-white outline-none"
                    >
                      <option value="1-50 employees">1 - 50 employees</option>
                      <option value="50-250 employees">50 - 250 employees</option>
                      <option value="250-1000 employees">250 - 1,000 employees</option>
                      <option value="1000+ enterprise">1,000+ Enterprise</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="text-[10px] text-slate-400 font-medium flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-cyan-400" />
                  Direct delivery to CyberSys Architecture Practice
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                >
                  {loading ? 'Generating Assessment...' : 'Generate & Download Assessment'} <Send size={14} />
                </button>
              </div>
            </form>
          ) : (
            /* Success View */
            <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 size={36} />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h4 className="text-2xl font-black text-white uppercase tracking-tight">Assessment Ready!</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Thank you, <span className="text-cyan-400 font-bold">{formData.name}</span>. Your preliminary architecture report for <span className="text-white font-bold">{formData.company}</span> has been generated and dispatched to <span className="text-cyan-400 font-bold">{formData.email}</span>.
                </p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="text-[10px] font-black uppercase text-cyan-400">Next Steps:</div>
                <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                  <li>A CyberSys Principal Architect will contact you within 4 hours.</li>
                  <li>Complimentary 30-minute Architecture Review session.</li>
                </ul>
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <button
                  onClick={() => alert(`Downloading Preliminary_Assessment_${formData.company.replace(/\s+/g, '_')}.pdf`)}
                  className="px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2"
                >
                  <Download size={14} /> Download PDF Assessment
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-black uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssessmentReportModal;
