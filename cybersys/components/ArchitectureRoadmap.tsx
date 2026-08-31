import React from 'react';
import { ArchitectureComponent } from '../types';
import { Shield, Cloud, Server, Database, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

interface ArchitectureRoadmapProps {
  architecture: ArchitectureComponent[];
  title?: string;
  onBookConsultation?: () => void;
}

const ArchitectureRoadmap: React.FC<ArchitectureRoadmapProps> = ({
  architecture,
  title = 'Recommended CyberSys Target Architecture',
  onBookConsultation
}) => {
  const layerIcons: Record<string, React.ReactNode> = {
    'Identity & Access': <Lock className="text-cyan-400" size={20} />,
    'Perimeter & OT Security': <Shield className="text-emerald-400" size={20} />,
    'Multicloud Infrastructure': <Cloud className="text-blue-400" size={20} />,
    'Core Applications & ERP': <Server className="text-purple-400" size={20} />,
    'Compliance & SOC': <Database className="text-amber-400" size={20} />
  };

  return (
    <div className="bg-[#0B132B]/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 text-white shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-4 border-b border-cyan-500/10">
        <div>
          <div className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-1">
            Dynamic Blueprint Visualizer
          </div>
          <h3 className="text-xl font-black text-white tracking-tight uppercase">{title}</h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Resilience Level: Enterprise Grade
        </div>
      </div>

      {/* Current vs Target State Quick Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 space-y-2">
          <div className="text-[10px] font-black uppercase text-red-400 tracking-wider">Current State Baseline</div>
          <p className="text-xs text-slate-300 font-medium leading-relaxed">
            Fragmented infrastructure, potential security audit gaps, un-optimized cloud compute, and manual operational handoffs.
          </p>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 space-y-2">
          <div className="text-[10px] font-black uppercase text-emerald-400 tracking-wider">Target CyberSys Standard</div>
          <p className="text-xs text-slate-200 font-medium leading-relaxed">
            Unified Multicloud mesh (Azure/AWS/OCI), 24/7 AI threat hunting, automated NDPR compliance, and 30%+ lower TCO.
          </p>
        </div>
      </div>

      {/* Architecture Layers Pipeline */}
      <div className="space-y-3 pt-2">
        <div className="text-xs font-black text-cyan-300 uppercase tracking-widest flex items-center justify-between">
          <span>Target Architecture Tiers</span>
          <span className="text-[10px] text-slate-400 font-normal">5 Layer Security-In-Depth</span>
        </div>

        <div className="space-y-3">
          {architecture.map((layer: ArchitectureComponent, idx: number) => (
            <div
              key={idx}
              className="group bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-cyan-400/40 rounded-xl p-4 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600"></div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pl-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:scale-110 transition-transform">
                    {layerIcons[layer.layer] || <Server size={20} className="text-cyan-400" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black text-cyan-400 uppercase tracking-wider bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                        Layer 0{idx + 1}: {layer.layer}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mt-1 uppercase tracking-tight">{layer.title}</h4>
                    <p className="text-xs text-slate-400 font-medium mt-0.5 leading-relaxed max-w-xl">
                      {layer.description}
                    </p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 sm:justify-end self-start sm:self-center pl-2 sm:pl-0">
                  {layer.techStack.map((tech: string, tIdx: number) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-black text-slate-300 bg-white/5 hover:bg-cyan-500/20 px-2.5 py-1 rounded-md border border-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      {onBookConsultation && (
        <div className="pt-4 border-t border-cyan-500/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-slate-400 font-medium flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-400" />
            Blueprint generated based on CyberSys CS5 Architecture Rules
          </div>
          <button
            onClick={onBookConsultation}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
          >
            Request Architect Review <ArrowRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ArchitectureRoadmap;
