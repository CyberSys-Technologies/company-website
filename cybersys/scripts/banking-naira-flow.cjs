// Run from the project root: node scripts/banking-naira-flow.cjs public/industries/banking-naira-flow.webp
// Builds the Banking hero illustration: naira at the centre of a payment network
const path = require('path');
const sharp = require(path.resolve('node_modules/sharp'));
const W = 1600, H = 1200, CX = 800, CY = 600;

// Seeded random so the background web is the same every run
let seed = 11; const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

// Faint background web
const nodes = [];
for (let y = -60; y < H + 120; y += 130) for (let x = -60; x < W + 120; x += 130) {
  if (rand() < 0.2) continue;
  nodes.push([x + (rand() - 0.5) * 90, y + (rand() - 0.5) * 90]);
}
let web = '';
nodes.forEach((a, i) => {
  nodes.map((b, j) => [j, (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2]).filter(([j, d]) => j > i && d < 190 ** 2)
    .sort((p, q) => p[1] - q[1]).slice(0, 2)
    .forEach(([j]) => { web += `<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${nodes[j][0].toFixed(1)}" y2="${nodes[j][1].toFixed(1)}"/>`; });
});
const webDots = nodes.map(([x, y]) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.2"/>`).join('');

// Soft out-of-focus lights for depth
const bokeh = Array.from({ length: 14 }, () => {
  const x = rand() * W, y = rand() * H, r = 20 + rand() * 55;
  const c = rand() < 0.5 ? '#01EFAC' : '#7FD3F0';
  return `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r.toFixed(0)}" fill="${c}" opacity="${(0.06 + rand() * 0.1).toFixed(2)}"/>`;
}).join('');

// Lucide-style icons (24×24 grid, stroke only) for the four channels
const ICONS = {
  phone: '<rect width="7" height="12" x="2" y="6" rx="1"/><path d="M13 8.32a7.43 7.43 0 0 1 0 7.36"/><path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58"/><path d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"/>',
  bank: '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
  card: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><line x1="6" x2="10" y1="15" y2="15"/>',
  pos: '<rect width="12" height="20" x="6" y="2" rx="2"/><rect width="8" height="5" x="8" y="5" rx="1"/><path d="M9 13h.01M12 13h.01M15 13h.01M9 16h.01M12 16h.01M15 16h.01M9 19h.01M12 19h.01M15 19h.01"/>'
};
const SAT = [
  { x: 330, y: 300, icon: 'phone' }, { x: 1270, y: 300, icon: 'bank' },
  { x: 330, y: 900, icon: 'card' }, { x: 1270, y: 900, icon: 'pos' }
];

// Curved links from each channel to the centre, with pulses of light along them
const RING = 210;
let links = '', pulses = '';
SAT.forEach((s, k) => {
  const dx = CX - s.x, dy = CY - s.y, len = Math.hypot(dx, dy);
  const sx = s.x + dx / len * 100, sy = s.y + dy / len * 100;         // edge of the channel circle
  const ex = CX - dx / len * RING, ey = CY - dy / len * RING;          // edge of the centre ring
  const bend = (k % 2 ? -1 : 1) * 70;
  const mx = (sx + ex) / 2 - dy / len * bend, my = (sy + ey) / 2 + dx / len * bend;
  links += `<path d="M${sx.toFixed(1)} ${sy.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}"/>`;
  [0.28, 0.62, 0.86].forEach((t, n) => {
    const px = (1 - t) ** 2 * sx + 2 * (1 - t) * t * mx + t * t * ex;
    const py = (1 - t) ** 2 * sy + 2 * (1 - t) * t * my + t * t * ey;
    const r = n === 1 ? 10 : 7;
    pulses += `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${r * 3}" fill="#01EFAC" opacity="0.18" filter="url(#soft)"/><circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${r}" fill="#B9FFF0"/>`;
  });
});

const sats = SAT.map(s => `
  <g>
    <circle cx="${s.x}" cy="${s.y}" r="128" fill="#7FD3F0" opacity="0.10" filter="url(#soft)"/>
    <circle cx="${s.x}" cy="${s.y}" r="100" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-width="4"/>
    <g transform="translate(${s.x - 48} ${s.y - 48}) scale(4)" fill="none" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[s.icon]}</g>
  </g>`).join('');

// Naira sign drawn as strokes so it renders without a special font
const naira = `
  <g stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M${CX - 58} ${CY + 82} V${CY - 82} L${CX + 58} ${CY + 82} V${CY - 82}" stroke-width="30"/>
    <path d="M${CX - 92} ${CY - 20} H${CX + 92} M${CX - 92} ${CY + 24} H${CX + 92}" stroke-width="15"/>
  </g>`;

// Dashed segmented ring around the centre, like a secure vault dial
const segs = Array.from({ length: 36 }, (_, i) => {
  if (i % 9 === 8) return '';
  const a0 = (i * 10 + 1.5) * Math.PI / 180, a1 = (i * 10 + 8.5) * Math.PI / 180, r = 228;
  return `<path d="M${(CX + r * Math.cos(a0)).toFixed(1)} ${(CY + r * Math.sin(a0)).toFixed(1)} A${r} ${r} 0 0 1 ${(CX + r * Math.cos(a1)).toFixed(1)} ${(CY + r * Math.sin(a1)).toFixed(1)}"/>`;
}).join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B3550"/><stop offset="0.55" stop-color="#176482"/><stop offset="1" stop-color="#1F86A9"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#01CBAE" stop-opacity="0.55"/><stop offset="1" stop-color="#01CBAE" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="core" cx="0.5" cy="0.4" r="0.6">
      <stop offset="0" stop-color="#2AA6C9"/><stop offset="1" stop-color="#176482"/>
    </radialGradient>
    <filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="14"/></filter>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="22"/></filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <g filter="url(#blur)">${bokeh}</g>
  <g stroke="#ffffff" stroke-opacity="0.07" stroke-width="1.4">${web}</g>
  <g fill="#ffffff" fill-opacity="0.12">${webDots}</g>
  <circle cx="${CX}" cy="${CY}" r="420" fill="url(#glow)"/>
  <g fill="none" stroke="#ffffff" stroke-opacity="0.8" stroke-width="5" stroke-dasharray="2 16" stroke-linecap="round">${links}</g>
  <g fill="none" stroke="#01EFAC" stroke-opacity="0.6" stroke-width="3">${links}</g>
  ${pulses}
  ${sats}
  <circle cx="${CX}" cy="${CY}" r="270" fill="none" stroke="#ffffff" stroke-opacity="0.18" stroke-width="2"/>
  <g fill="none" stroke="#ffffff" stroke-opacity="0.85" stroke-width="10" stroke-linecap="butt">${segs}</g>
  <circle cx="${CX}" cy="${CY}" r="${RING - 12}" fill="url(#core)" stroke="#ffffff" stroke-width="5"/>
  ${naira}
</svg>`;

sharp(Buffer.from(svg)).webp({ quality: 82, effort: 6 }).toFile(process.argv[2])
  .then(i => console.log(i.width, i.height, Math.round(i.size / 1024) + 'KB'));
