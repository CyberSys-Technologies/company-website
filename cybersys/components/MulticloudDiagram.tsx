import React, { useEffect, useState } from 'react';

interface Hyperscaler {
  id: string;
  name: string;
  logo: string;
  /** Brand colour used for its connection, pulses and hover state */
  color: string;
  focus: string;
  /** Node centre in the 600x600 diagram space */
  x: number;
  y: number;
}

const HYPERSCALERS: Hyperscaler[] = [
  { id: 'azure', name: 'Microsoft Azure', logo: '/partners/azure.svg', color: '#0078D4', focus: 'Hybrid & enterprise workloads', x: 300, y: 92 },
  { id: 'aws', name: 'Amazon Web Services', logo: '/partners/aws.webp', color: '#FF9900', focus: 'Elastic compute & storage', x: 508, y: 300 },
  { id: 'gcp', name: 'Google Cloud', logo: '/partners/google-cloud.webp', color: '#34A853', focus: 'Data, analytics & AI', x: 300, y: 508 },
  { id: 'oci', name: 'Oracle Cloud', logo: '/partners/oracle.png', color: '#C74634', focus: 'ERP & mission-critical databases', x: 92, y: 300 }
];

const HUB = { x: 300, y: 300 };

const RING_WORDS = ['SECURE', 'OPTIMISED', 'GOVERNED'];

/**
 * Hub-and-spoke diagram of the four hyperscalers connected through CyberSys.
 * Pulses travel along each connection; hovering (or tapping) a provider highlights
 * its link in its brand colour and shows its focus in the hub.
 */
const MulticloudDiagram: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const current = HYPERSCALERS.find(h => h.id === active) || null;

  return (
    <div className="mc-diagram relative w-full max-w-[640px] mx-auto aspect-square select-none" style={{ containerType: 'inline-size' }}>
      <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id="mc-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2BDFB4" stopOpacity="0.28" />
            <stop offset="60%" stopColor="#2082A6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#2082A6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="mc-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2082A6" />
            <stop offset="100%" stopColor="#01CBAE" />
          </linearGradient>
          <path id="mc-ring-text" d="M300,300 m-118,0 a118,118 0 1,1 236,0 a118,118 0 1,1 -236,0" />
        </defs>

        {/* Soft glow and orbit rings */}
        <circle cx="300" cy="300" r="290" fill="url(#mc-glow)" />
        <circle cx="300" cy="300" r="208" fill="none" stroke="#2082A6" strokeOpacity="0.12" strokeWidth="1" />
        <g className={animate ? 'animate-[spin_70s_linear_infinite]' : ''} style={{ transformOrigin: '300px 300px' }}>
          <circle cx="300" cy="300" r="250" fill="none" stroke="#2082A6" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 10" />
          <circle cx="300" cy="50" r="5" fill="#2BDFB4" />
          <circle cx="550" cy="300" r="3.5" fill="#2082A6" />
        </g>

        {/* Connections: dashed flow, brightened in brand colour on hover */}
        {HYPERSCALERS.map(h => {
          const isActive = active === h.id;
          const dimmed = active !== null && !isActive;
          return (
            <g key={h.id} style={{ opacity: dimmed ? 0.25 : 1, transition: 'opacity 300ms' }}>
              <line x1={HUB.x} y1={HUB.y} x2={h.x} y2={h.y} stroke={isActive ? h.color : '#94A3B8'} strokeOpacity={isActive ? 0.9 : 0.45} strokeWidth={isActive ? 3 : 1.5} style={{ transition: 'stroke 300ms, stroke-width 300ms' }} />
              <line
                x1={HUB.x} y1={HUB.y} x2={h.x} y2={h.y}
                stroke={h.color} strokeWidth={isActive ? 3 : 2} strokeDasharray="6 14" strokeLinecap="round"
                className={animate ? 'animate-dash-flow' : ''}
                strokeOpacity={isActive ? 1 : 0.55}
              />
              {animate && [0, 1.2].map(delay => (
                <circle key={delay} r={isActive ? 6 : 4.5} fill={h.color}>
                  <animateMotion dur={isActive ? '1.6s' : '2.6s'} begin={`${delay}s`} repeatCount="indefinite" path={`M${HUB.x},${HUB.y} L${h.x},${h.y}`} />
                  <animate attributeName="opacity" values="0;1;1;0" dur={isActive ? '1.6s' : '2.6s'} begin={`${delay}s`} repeatCount="indefinite" />
                </circle>
              ))}
            </g>
          );
        })}

        {/* Hub */}
        <circle cx="300" cy="300" r="140" fill="#FFFFFF" fillOpacity="0.85" stroke="#2082A6" strokeOpacity="0.15" />
        <g className={animate ? 'animate-[spin_40s_linear_infinite]' : ''} style={{ transformOrigin: '300px 300px' }}>
          {/* Three words a third of the ring apart, each with a dot between */}
          <text fontSize="14" fontWeight="800" letterSpacing="6" fill="#2082A6" fillOpacity="0.75" textAnchor="middle">
            {RING_WORDS.map((word, i) => (
              <textPath key={word} href="#mc-ring-text" startOffset={`${(i * 100) / RING_WORDS.length + 100 / RING_WORDS.length / 2}%`}>{word}</textPath>
            ))}
          </text>
          <text fontSize="16" fill="#2BDFB4" textAnchor="middle">
            {RING_WORDS.map((word, i) => (
              <textPath key={word} href="#mc-ring-text" startOffset={`${i === 0 ? 99.4 : (i * 100) / RING_WORDS.length}%`}>•</textPath>
            ))}
          </text>
        </g>
        <circle cx="300" cy="300" r="96" fill="url(#mc-hub)" />
        <circle cx="300" cy="300" r="96" fill="none" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="2 6" />
      </svg>

      {/* Hub label (HTML so it wraps cleanly) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] text-center text-white pointer-events-none">
        <div key={current?.id || 'default'} className="animate-panel-in">
          <div className="font-bold uppercase tracking-tight leading-none" style={{ fontSize: 'clamp(11px, 3.6cqw, 22px)' }}>
            {current ? current.name.replace('Amazon Web Services', 'AWS') : 'Multicloud'}
          </div>
          <div className="mt-2 font-medium uppercase tracking-[0.2em] text-white/85 leading-snug" style={{ fontSize: 'clamp(7px, 1.8cqw, 11.5px)' }}>
            {current ? current.focus : 'One control plane'}
          </div>
        </div>
      </div>

      {/* Provider cards */}
      {HYPERSCALERS.map(h => {
        const isActive = active === h.id;
        return (
          <button
            key={h.id}
            type="button"
            onMouseEnter={() => setActive(h.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(h.id)}
            onBlur={() => setActive(null)}
            onClick={() => setActive(isActive ? null : h.id)}
            aria-label={`${h.name}: ${h.focus}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-[29%] bg-white rounded-2xl border text-left transition-all duration-300 cursor-pointer"
            style={{
              left: `${(h.x / 600) * 100}%`,
              top: `${(h.y / 600) * 100}%`,
              padding: 'clamp(8px, 2.6cqw, 16px)',
              borderColor: isActive ? h.color : 'rgba(226,232,240,1)',
              boxShadow: isActive ? `0 22px 45px -20px ${h.color}88` : '0 10px 30px -18px rgba(15,23,42,0.25)',
              transform: `translate(-50%, -50%) ${isActive ? 'translateY(-6px) scale(1.05)' : ''}`
            }}
          >
            <div className="flex items-center" style={{ height: 'clamp(18px, 5.6cqw, 36px)' }}>
              <img src={h.logo} alt="" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="mt-2 font-bold uppercase tracking-tight text-brand-text leading-tight" style={{ fontSize: 'clamp(9px, 2cqw, 12.5px)' }}>{h.name}</div>
            <div className="mc-focus mt-1 text-brand-muted leading-snug" style={{ fontSize: 'clamp(9px, 1.8cqw, 11.5px)' }}>{h.focus}</div>
            <span className="absolute left-0 right-0 bottom-0 h-1 rounded-b-2xl transition-opacity duration-300" style={{ backgroundColor: h.color, opacity: isActive ? 1 : 0 }} />
          </button>
        );
      })}
    </div>
  );
};

export default MulticloudDiagram;
