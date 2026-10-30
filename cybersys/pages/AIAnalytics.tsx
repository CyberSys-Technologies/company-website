import React, { useState } from 'react';
import { BrainCircuit, ChartColumn, Database, GitMerge, LayoutDashboard, TrendingUp, Workflow, Lightbulb, Zap } from 'lucide-react';
import { Page } from '../types';
import { BackToSolutions, Eyebrow, PhotoCTA, PrimaryButton, SectionHeader, icon, useReveal } from '../components/SolutionBlocks';

const BARS = [42, 58, 51, 67, 74, 63, 82, 90, 78, 95];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

/** Illustrative dashboard: hovering a month updates the summary figures and note */
const LiveDashboard: React.FC = () => {
  const [hover, setHover] = useState<number | null>(null);
  const shown = hover ?? BARS.length - 1;

  return (
    <div className="w-full max-w-[620px] mx-auto bg-white rounded-2xl border border-slate-200 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.35)]">
      <div className="flex items-center justify-between px-6 sm:px-8 pt-6 sm:pt-7">
        <div>
          <div className="text-sm text-slate-500">Operations overview</div>
          <div className="mt-0.5 text-lg font-semibold text-brand-text">Monthly performance</div>
        </div>
        <span className="text-sm text-slate-500">{MONTHS[shown]} 2026</span>
      </div>

      <div className="mt-6 px-6 sm:px-8 grid grid-cols-3 gap-3">
        {[
          { label: 'Efficiency', value: `${BARS[shown]}%` },
          { label: 'Forecast', value: shown >= 7 ? 'On track' : 'Review' },
          { label: 'Data sources', value: '12' }
        ].map(kpi => (
          <div key={kpi.label} className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3 sm:px-4">
            <div className="text-xs text-slate-500">{kpi.label}</div>
            <div className="mt-1 text-base sm:text-xl font-semibold text-brand-text">{kpi.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 px-6 sm:px-8 h-44 sm:h-52 flex items-end gap-2 sm:gap-3 border-b border-slate-100 pb-4" onMouseLeave={() => setHover(null)}>
        {BARS.map((value, i) => {
          const active = i === shown;
          return (
            <button
              key={i}
              type="button"
              onMouseEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
              aria-label={`${MONTHS[i]}: ${value}%`}
              className="flex-1 h-full flex flex-col justify-end items-center gap-2 cursor-pointer"
            >
              <span
                className={`w-full rounded-sm origin-bottom animate-bar-grow transition-colors duration-200 ${active ? 'bg-brand-primary' : 'bg-slate-200 hover:bg-slate-300'}`}
                style={{ height: `${value}%`, animationDelay: `${300 + i * 70}ms` }}
              />
              <span className={`text-[11px] ${active ? 'text-brand-primary font-semibold' : 'text-slate-400'}`}>{MONTHS[i]}</span>
            </button>
          );
        })}
      </div>

      <div className="flex items-start gap-3 px-6 sm:px-8 py-5">
        <TrendingUp size={18} className="text-brand-secondary flex-shrink-0 mt-0.5" />
        <p className="text-sm text-slate-600 leading-snug">
          {shown >= 7 ? 'Performance is trending above target this quarter.' : 'An early dip was flagged and corrected before month end.'}
        </p>
      </div>
    </div>
  );
};

const CAPABILITIES = [
  { icon: <LayoutDashboard />, title: 'Executive Dashboards & BI', desc: 'Real-time KPIs and reports that leadership teams actually use.' },
  { icon: <GitMerge />, title: 'Data Integration & Pipelines', desc: 'Connect ERP, CRM, operational and cloud data into one source of truth.' },
  { icon: <Database />, title: 'Data Warehousing & Lakes', desc: 'Scalable, governed platforms for structured and unstructured data.' },
  { icon: <ChartColumn />, title: 'Predictive Analytics', desc: 'Forecasting and machine-learning models that anticipate what comes next.' },
  { icon: <BrainCircuit />, title: 'Generative AI Solutions', desc: 'Secure assistants, document intelligence and AI built on your own data.' },
  { icon: <Workflow />, title: 'Intelligent Automation', desc: 'Automate repetitive processes so teams can focus on higher-value work.' }
];

const PLATFORMS = [
  { name: 'Power BI & Power Platform', logo: '/partners/products/ms-powerplatform.svg' },
  { name: 'Microsoft Copilot', logo: '/partners/products/ms-copilot.svg' },
  { name: 'Azure Data & AI', logo: '/partners/products/ms-azure.svg' },
  { name: 'Google BigQuery', logo: '/partners/products/gcp-bigquery.svg' },
  { name: 'Vertex AI', logo: '/partners/products/gcp-vertexai.svg' },
  { name: 'Amazon Bedrock', logo: '/partners/products/aws-bedrock.svg' },
  { name: 'Amazon SageMaker', logo: '/partners/products/aws-sagemaker.svg' },
  { name: 'DPAnalytics', logo: '/partners/dpanalytics.png' }
];

const JOURNEY = [
  { icon: <Database />, step: 'Collect', desc: 'Bring data together from every system and source.' },
  { icon: <GitMerge />, step: 'Integrate', desc: 'Clean, model and govern it in one trusted platform.' },
  { icon: <Lightbulb />, step: 'Analyse', desc: 'Surface insight with dashboards, forecasts and AI.' },
  { icon: <Zap />, step: 'Act', desc: 'Automate decisions and actions across the business.' }
];

const AIAnalytics: React.FC<{ onPageChange: (p: Page) => void }> = ({ onPageChange }) => {
  useReveal();

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO: text and a live dashboard */}
      <section className="relative bg-white border-b border-slate-100">
        <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 relative py-16 lg:py-20">
          <BackToSolutions onPageChange={onPageChange} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            <div className="lg:col-span-5 max-w-xl w-full mx-auto text-left animate-hero-rise">
              <Eyebrow>Data, Insight & Intelligence</Eyebrow>
              <h1 className="mt-5 text-[2rem] sm:text-5xl lg:text-[2.6rem] xl:text-5xl 2xl:text-6xl font-bold text-brand-text leading-[1.1]">
                AI &<br /> <span className="text-brand-primary">Data Analytics</span>
              </h1>
              <p className="mt-6 text-base md:text-lg 2xl:text-xl text-brand-muted font-medium leading-relaxed">
                CyberSys Technologies builds and implements the dashboards, predictive analytics and AI that turn enterprise data into everyday decisions.
              </p>
              <PrimaryButton onClick={() => onPageChange('contact')} className="mt-8">Talk to a Data Specialist</PrimaryButton>
            </div>
            <div className="lg:col-span-7 animate-hero-image">
              <LiveDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES: numbered list in two columns, rows cascade in */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader eyebrow="What We Deliver" title={<>From Raw Data to <span className="text-brand-primary">Clear Decisions</span></>} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 bg-white rounded-[1.75rem] border border-slate-200 px-6 sm:px-10">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.title}
                className="reveal-cascade group flex items-start gap-5 py-6 border-b border-slate-100 md:[&:nth-last-child(-n+2)]:border-b-0 last:border-b-0"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="text-sm font-bold text-slate-300 group-hover:text-brand-secondary transition-colors pt-3 w-6">0{i + 1}</span>
                <span className="w-12 h-12 flex-shrink-0 rounded-xl bg-brand-mist text-brand-primary flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:text-white transition-all duration-500">
                  {icon(cap.icon, 22)}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-text group-hover:text-brand-primary transition-colors">{cap.title}</h3>
                  <p className="mt-1.5 text-sm md:text-base text-brand-muted font-medium leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DATA TO DECISION: solid deep blue, steps joined by a line */}
      <section className="py-16 lg:py-20 bg-brand-mist relative overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[32rem] h-[32rem] bg-brand-mint/20 blur-[120px] rounded-full pointer-events-none" aria-hidden="true"></div>
        <div className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] bg-brand-primary/10 blur-[110px] rounded-full pointer-events-none" aria-hidden="true"></div>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 relative">
          <SectionHeader eyebrow="How It Works" title={<>The Data-to-Decision <span className="text-brand-primary">Journey</span></>} className="mb-14" reveal="reveal-zoom" />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-brand-mint/0 via-brand-secondary/50 to-brand-mint/0" aria-hidden="true"></div>
            {JOURNEY.map((j, i) => (
              <div key={j.step} className="relative text-center reveal-on-scroll group" style={{ transitionDelay: `${i * 140}ms` }}>
                <div className="relative mx-auto w-16 h-16 rounded-full bg-white text-brand-primary flex items-center justify-center shadow-[0_0_0_8px_rgba(32,130,166,0.08)] group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  {icon(j.icon, 26)}
                </div>
                <div className="mt-6 text-[13px] font-medium uppercase tracking-[0.2em] text-brand-primary">Step 0{i + 1}</div>
                <h3 className="mt-2 text-xl font-semibold text-brand-text">{j.step}</h3>
                <p className="mt-3 text-base text-brand-muted font-medium leading-relaxed max-w-xs mx-auto">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PLATFORMS: logo tiles zoom in */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16">
          <SectionHeader eyebrow="Platforms We Work With" title={<>Built on Leading <span className="text-brand-primary">Data & AI Platforms</span></>} text="We implement and integrate these platforms for our clients, alongside our analytics partner DPAnalytics." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
            {PLATFORMS.map((p, i) => (
              <div
                key={p.name}
                className="reveal-zoom flex flex-col items-center justify-center text-center gap-4 rounded-2xl border border-slate-200 px-4 py-8 hover:border-brand-primary/40 hover:-translate-y-1 hover:shadow-[0_20px_40px_-28px_rgba(32,130,166,0.5)] transition-all duration-500"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <img src={p.logo} alt="" className="h-10 w-auto max-w-[80%] object-contain" />
                <span className="text-xs font-bold text-brand-text leading-snug">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION: split with photo */}
      <PhotoCTA
        onPageChange={onPageChange}
        eyebrow="Work with CyberSys"
        title="Make Your Data Work Smarter"
        text="Talk to CyberSys Technologies about building the dashboards, forecasts and AI your teams can act on."
        cta="Start a Data Conversation"
        image="/pages/ai-analytics.webp"
        imageAlt="Analysts reviewing a performance dashboard"
      />
    </div>
  );
};

export default AIAnalytics;
