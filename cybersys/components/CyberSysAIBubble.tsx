import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { 
  Sparkles, 
  X, 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  TrendingDown, 
  Code, 
  ArrowRight, 
  ChevronRight,
  RotateCcw,
  Building,
  CheckCircle2
} from 'lucide-react';

interface CyberSysAIBubbleProps {
  onPageChange: (page: Page) => void;
}

interface GoalOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  targetPage: Page;
  subQuestions?: {
    question: string;
    choices: { label: string; targetPage: Page; tip: string }[];
  };
}

const CyberSysAIBubble: React.FC<CyberSysAIBubbleProps> = ({ onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<GoalOption | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<{ label: string; targetPage: Page; tip: string } | null>(null);
  const [isChangingStep, setIsChangingStep] = useState(false);

  // Classy 700ms phase-in & phase-out timer
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    } else {
      const timer = setTimeout(() => {
        setIsRendered(false);
        setSelectedGoal(null);
        setSelectedChoice(null);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const goalOptions: GoalOption[] = [
    {
      id: 'cloud',
      title: 'Move to Cloud & Multicloud',
      description: 'Migrate workloads to Azure, AWS, or OCI seamlessly.',
      icon: <Cloud className="text-brand-primary" size={20} />,
      targetPage: 'services-cloud',
      subQuestions: {
        question: 'What is your primary cloud objective?',
        choices: [
          { label: 'Migrate On-Premise Servers to Cloud', targetPage: 'services-cloud', tip: 'Our Cloud & Infrastructure team handles full lift-and-shift or re-platforming.' },
          { label: 'Orchestrate AWS, Azure & OCI Multicloud', targetPage: 'services-multicloud', tip: 'Our Multicloud Mastery framework prevents lock-in and optimizes latency.' },
          { label: 'Outsource 24/7 Cloud Management', targetPage: 'services-managed', tip: 'Our Managed Services team provides round-the-clock infrastructure continuity.' }
        ]
      }
    },
    {
      id: 'security',
      title: 'Secure Business & Audit Compliance',
      description: '24/7 Managed SOC, NDPR/CBN governance & OT protection.',
      icon: <ShieldCheck className="text-brand-primary" size={20} />,
      targetPage: 'solutions-cybersecurity',
      subQuestions: {
        question: 'What security challenge needs immediate focus?',
        choices: [
          { label: 'Pass NDPR / CBN Regulatory Audits', targetPage: 'solutions-cybersecurity', tip: 'We audit your posture and establish evidence-backed governance frameworks.' },
          { label: '24/7 SOC & Threat Defense', targetPage: 'solutions-cybersecurity', tip: 'Our Nigeria-based SOC provides real-time threat hunting and incident SLA.' },
          { label: 'Secure Oil & Gas SCADA / OT Systems', targetPage: 'solutions-cybersecurity', tip: 'Critical infrastructure protection designed specifically for field operations.' }
        ]
      }
    },
    {
      id: 'operations',
      title: 'Enterprise ERP & Analytics',
      description: 'Oracle Fusion, Primavera P6 & BI decision dashboards.',
      icon: <Cpu className="text-brand-primary" size={20} />,
      targetPage: 'solutions-bi',
      subQuestions: {
        question: 'Which operational layer do you want to optimize?',
        choices: [
          { label: 'Oracle ERP & Primavera P6 Implementation', targetPage: 'solutions-bi', tip: 'Customized enterprise project controls and ERP optimization.' },
          { label: 'Real-time BI Analytics & Dashboards', targetPage: 'solutions-bi', tip: 'Transform multi-departmental data into actionable yield dashboards.' }
        ]
      }
    },
    {
      id: 'costs',
      title: 'Reduce Cloud & Infrastructure Spend',
      description: 'FinOps cost optimization (cut 25-50% off monthly bills).',
      icon: <TrendingDown className="text-brand-primary" size={20} />,
      targetPage: 'services-multicloud',
      subQuestions: {
        question: 'Where is your biggest budget friction point?',
        choices: [
          { label: 'High AWS / Azure Monthly Cloud Invoices', targetPage: 'services-multicloud', tip: 'Our FinOps audit identifies idle compute and optimizes reserved instances.' },
          { label: 'High Software & Database Licensing Costs', targetPage: 'why-cybersys', tip: 'We consolidate redundant licenses and streamline cloud contracts.' }
        ]
      }
    },
    {
      id: 'build',
      title: 'Build Custom Applications & SaaS',
      description: 'Bespoke enterprise software, mobile apps & API automation.',
      icon: <Code className="text-brand-primary" size={20} />,
      targetPage: 'solutions-software',
      subQuestions: {
        question: 'What type of software platform are you looking to build?',
        choices: [
          { label: 'Custom B2B Enterprise Portal or Mobile App', targetPage: 'solutions-software', tip: 'Engineered with zero-trust architecture and scalable APIs.' },
          { label: 'Digital Transformation & Workflow Automation', targetPage: 'solutions-digital', tip: 'Connecting legacy databases with automated modern microservices.' }
        ]
      }
    },
    {
      id: 'industries',
      title: 'Explore Solutions by Industry',
      description: 'Oil & Gas, Financial Services, Utilities & Government.',
      icon: <Building className="text-brand-primary" size={20} />,
      targetPage: 'industries',
      subQuestions: {
        question: 'Which industry best matches your company?',
        choices: [
          { label: 'Oil & Gas / Energy', targetPage: 'industries', tip: 'OT protection, field SCADA monitoring, and Primavera project management.' },
          { label: 'Financial Services & Fintech', targetPage: 'industries', tip: 'CBN compliance, PCI-DSS standards, and zero-downtime banking cloud.' },
          { label: 'Government & Public Sector', targetPage: 'industries', tip: 'Digital sovereignty and secure citizen-facing service platforms.' }
        ]
      }
    }
  ];

  // Classy step transition wrapper
  const changeStepSmoothly = (action: () => void) => {
    setIsChangingStep(true);
    setTimeout(() => {
      action();
      setIsChangingStep(false);
    }, 220);
  };

  const handleSelectGoal = (goal: GoalOption) => {
    changeStepSmoothly(() => {
      setSelectedGoal(goal);
      setSelectedChoice(null);
    });
  };

  const handleSelectChoice = (choice: { label: string; targetPage: Page; tip: string }) => {
    changeStepSmoothly(() => {
      setSelectedChoice(choice);
    });
  };

  const handleNavigate = (page: Page) => {
    onPageChange(page);
    setIsOpen(false);
  };

  const handleReset = () => {
    changeStepSmoothly(() => {
      setSelectedGoal(null);
      setSelectedChoice(null);
    });
  };

  return (
    <>
      {/* FLOATING BUTTON (BOTTOM RIGHT) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 group">
        {/* Tooltip Label - Classy Smooth Hover Slide */}
        {!isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center gap-2 px-3 py-1.5 bg-brand-text/95 backdrop-blur-md text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl border border-slate-700/50 cursor-pointer whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
            <span>Solution Navigator</span>
          </div>
        )}

        {/* Compact Trigger Circle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-11 h-11 rounded-full shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center border ${
            isOpen 
              ? 'bg-white text-brand-text border-slate-200 hover:bg-slate-50 rotate-90 scale-95' 
              : 'bg-brand-primary text-white border-brand-primary/20 hover:bg-brand-accent shadow-brand-primary/30 transform hover:scale-110'
          }`}
          aria-label="Toggle Solution Navigator"
        >
          {isOpen ? <X size={18} /> : <Sparkles size={18} />}
        </button>
      </div>

      {/* BACKDROP BLUR OVERLAY */}
      {isRendered && (
        <div 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            cursor: 'pointer',
            backgroundColor: 'rgba(15,23,42,0.55)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'auto' : 'none',
            transition: 'opacity 600ms cubic-bezier(0.4,0,0.2,1)',
          }}
        />
      )}

      {/* POPUP CONTAINER — inline-style transition for reliability */}
      {isRendered && (
        <div 
          style={{
            position: 'fixed',
            bottom: '5rem',
            right: '1.5rem',
            left: undefined,
            zIndex: 50,
            width: '420px',
            maxWidth: 'calc(100vw - 1.5rem)',
            backgroundColor: '#ffffff',
            border: '1px solid rgba(226,232,240,0.9)',
            borderRadius: '1rem',
            boxShadow: '0 24px 64px -8px rgba(15,23,42,0.22), 0 8px 24px -4px rgba(15,23,42,0.1)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '82vh',
            fontFamily: 'inherit',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
            pointerEvents: isOpen ? 'auto' : 'none',
            transition: 'opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)',
            transformOrigin: 'bottom right',
          }}
        >
          
          {/* HEADER */}
          <div className="bg-brand-text p-4 sm:p-6 text-white relative flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-brand-primary/20 rounded-lg text-brand-primary border border-brand-primary/30">
                  <Sparkles size={15} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">
                  CyberSys Navigator
                </span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors duration-300 p-1 rounded-lg hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>

            <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight mt-3">
              What are you looking to achieve?
            </h3>
            <p className="text-xs text-slate-300 font-medium mt-1 leading-relaxed">
              Select your priority to be directed to the right solution.
            </p>
          </div>

          {/* BODY CONTENT WITH SMOOTH STEP CROSSFADE */}
          <div className="p-4 sm:p-6 space-y-4 overflow-y-auto bg-slate-50/50 flex-1">

            <div className={`transition-all duration-300 ease-out ${
              isChangingStep ? 'opacity-0 scale-[0.98] translate-y-1' : 'opacity-100 scale-100 translate-y-0'
            }`}>

              {!selectedGoal ? (
                /* STEP 1: GOAL SELECTION */
                <div className="space-y-2.5">
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-2">
                    Select a goal to explore
                  </div>

                  {goalOptions.map((goal) => (
                    <div
                      key={goal.id}
                      onClick={() => handleSelectGoal(goal)}
                      className="p-4 bg-white border border-slate-200/80 hover:border-brand-primary/60 rounded-xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_12px_30px_-10px_rgba(32,130,166,0.15)] hover:-translate-y-0.5 group flex items-center justify-between"
                    >
                      <div className="flex items-start gap-3.5 pr-2">
                        <div className="p-2.5 bg-slate-50 group-hover:bg-brand-primary/10 rounded-lg transition-all duration-500 group-hover:scale-105 flex-shrink-0 mt-0.5 border border-transparent group-hover:border-brand-primary/20">
                          {goal.icon}
                        </div>
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-tight text-brand-text group-hover:text-brand-primary transition-colors duration-500">
                            {goal.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-0.5">
                            {goal.description}
                          </p>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-slate-300 group-hover:text-brand-primary group-hover:translate-x-1.5 transition-all duration-500 flex-shrink-0" />
                    </div>
                  ))}
                </div>
              ) : !selectedChoice ? (
                /* STEP 2: CLARIFYING CHOICE */
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <button
                      onClick={handleReset}
                      className="text-[11px] font-bold text-slate-500 hover:text-brand-primary flex items-center gap-1 transition-colors duration-300"
                    >
                      <RotateCcw size={12} /> Back to goals
                    </button>
                    <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">
                      Step 2 of 2
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-black uppercase text-brand-text">
                      {selectedGoal.subQuestions?.question || 'What is your specific focus?'}
                    </h4>
                  </div>

                  <div className="space-y-2">
                    {selectedGoal.subQuestions?.choices.map((choice, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleSelectChoice(choice)}
                        className="p-3.5 bg-white border border-slate-200/80 hover:border-brand-primary/60 rounded-xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-sm hover:-translate-y-0.5 group flex items-center justify-between"
                      >
                        <span className="text-xs font-bold text-slate-800 group-hover:text-brand-primary transition-colors duration-500">
                          {choice.label}
                        </span>
                        <ChevronRight size={14} className="text-slate-300 group-hover:text-brand-primary group-hover:translate-x-1.5 transition-all duration-500" />
                      </div>
                    ))}
                  </div>

                  {/* Direct shortcut option */}
                  <button
                    onClick={() => handleNavigate(selectedGoal.targetPage)}
                    className="w-full py-2.5 border border-slate-200/90 text-slate-600 hover:bg-slate-100 hover:text-brand-text rounded-xl text-[11px] font-bold uppercase tracking-wider transition-colors duration-300"
                  >
                    View All {selectedGoal.title} &rarr;
                  </button>
                </div>
              ) : (
                /* STEP 3: RECOMMENDATION & DIRECT NAVIGATION */
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest flex items-center gap-1.5">
                      <CheckCircle2 size={14} /> Solution Found
                    </span>
                    <button
                      onClick={handleReset}
                      className="text-[11px] font-bold text-slate-500 hover:text-brand-primary flex items-center gap-1 transition-colors duration-300"
                    >
                      <RotateCcw size={12} /> Start Over
                    </button>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3 shadow-sm">
                    <div className="text-[10px] font-black uppercase text-brand-primary tracking-wider">
                      Recommended Direction
                    </div>
                    <h4 className="text-sm font-black text-brand-text uppercase">
                      {selectedChoice.label}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                      {selectedChoice.tip}
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavigate(selectedChoice.targetPage)}
                    className="w-full py-3.5 bg-brand-primary hover:bg-brand-accent text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl transition-all duration-500 shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    Take Me To Solution Page <ArrowRight size={14} />
                  </button>
                </div>
              )}

            </div>

          </div>

          {/* FOOTER */}
          <div className="bg-white px-6 py-3 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-medium flex-shrink-0">
            <span>CyberSys Guided Navigator</span>
            <button 
              onClick={() => handleNavigate('contact')}
              className="text-brand-primary hover:underline font-bold uppercase tracking-wider transition-colors duration-300"
            >
              Talk to Architect &rarr;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CyberSysAIBubble;
