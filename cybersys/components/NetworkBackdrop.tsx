import React, { useEffect, useRef } from 'react';

/**
 * Faint network web drawn behind the home page hero and partner grid.
 * Nodes sit on a jittered grid and link to their nearest neighbours; short pulses of
 * light run along the links at random, like current moving through the network.
 * Kept very light so it never competes with the content on top.
 */

const LINE = 'rgba(32, 130, 166, 0.10)';   // brand-primary, faint
const NODE = 'rgba(32, 130, 166, 0.22)';
const PULSE_RGB = '32, 130, 166';           // pulse head in brand blue
const GLOW_RGB = '1, 203, 174';             // brand-secondary halo
const SPACING = 120;                        // average gap between nodes (px)
const MAX_PULSES = 7;

interface Node { x: number; y: number; links: number[]; flash: number }
interface Pulse { from: number; to: number; t: number; speed: number; hops: number }

// Small seeded random so the web keeps the same shape between renders
const seeded = (seed: number) => () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

const buildWeb = (w: number, h: number): Node[] => {
  const rand = seeded(7);
  const cols = Math.ceil(w / SPACING) + 1;
  const rows = Math.ceil(h / SPACING) + 1;
  const nodes: Node[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rand() < 0.18) continue; // leave gaps so it reads as a web, not a grid
      nodes.push({
        x: (c + (rand() - 0.5) * 0.8) * SPACING,
        y: (r + (rand() - 0.5) * 0.8) * SPACING,
        links: [],
        flash: 0
      });
    }
  }
  // Link each node to its nearest neighbours
  nodes.forEach((n, i) => {
    const nearest = nodes
      .map((m, j) => ({ j, d: (m.x - n.x) ** 2 + (m.y - n.y) ** 2 }))
      .filter(o => o.j !== i && o.d < (SPACING * 1.6) ** 2)
      .sort((a, b) => a.d - b.d)
      .slice(0, 3);
    nearest.forEach(({ j }) => {
      if (!n.links.includes(j)) n.links.push(j);
      if (!nodes[j].links.includes(i)) nodes[j].links.push(i);
    });
  });
  return nodes;
};

const NetworkBackdrop: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !parent || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let width = 0, height = 0, frame = 0, visible = true, last = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = buildWeb(width, height);
      pulses = [];
      draw(0);
    };

    const spawn = () => {
      const from = Math.floor(Math.random() * nodes.length);
      const node = nodes[from];
      if (!node || !node.links.length) return;
      const to = node.links[Math.floor(Math.random() * node.links.length)];
      pulses.push({ from, to, t: 0, speed: 0.6 + Math.random() * 0.5, hops: 2 + Math.floor(Math.random() * 5) });
    };

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, width, height);

      // Static web
      ctx.lineWidth = 1;
      ctx.strokeStyle = LINE;
      ctx.beginPath();
      nodes.forEach((n, i) => n.links.forEach(j => {
        if (j > i) { ctx.moveTo(n.x, n.y); ctx.lineTo(nodes[j].x, nodes[j].y); }
      }));
      ctx.stroke();

      nodes.forEach(n => {
        n.flash = Math.max(0, n.flash - dt * 1.4);
        ctx.fillStyle = NODE;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
        if (n.flash > 0) {
          ctx.fillStyle = `rgba(${GLOW_RGB}, ${0.35 * n.flash})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 3 + 5 * n.flash, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Moving pulses: a bright head with a fading tail along the link
      pulses.forEach(p => {
        const a = nodes[p.from], b = nodes[p.to];
        const head = Math.min(p.t, 1);
        const tail = Math.max(0, head - 0.35);
        const hx = a.x + (b.x - a.x) * head, hy = a.y + (b.y - a.y) * head;
        const tx = a.x + (b.x - a.x) * tail, ty = a.y + (b.y - a.y) * tail;
        const grad = ctx.createLinearGradient(tx, ty, hx, hy);
        grad.addColorStop(0, `rgba(${PULSE_RGB}, 0)`);
        grad.addColorStop(1, `rgba(${PULSE_RGB}, 0.45)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.stroke();
        ctx.fillStyle = `rgba(${GLOW_RGB}, 0.5)`;
        ctx.beginPath();
        ctx.arc(hx, hy, 1.8, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const step = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      pulses.forEach(p => { p.t += dt * p.speed; });
      // A pulse reaching a node lights it and may jump on to a neighbour
      pulses = pulses.flatMap(p => {
        if (p.t < 1) return [p];
        const node = nodes[p.to];
        node.flash = 1;
        const onward = node.links.filter(j => j !== p.from);
        if (p.hops <= 1 || !onward.length) return [];
        return [{ ...p, from: p.to, to: onward[Math.floor(Math.random() * onward.length)], t: 0, hops: p.hops - 1 }];
      });
      if (pulses.length < MAX_PULSES && Math.random() < dt * 2.2) spawn();

      draw(dt);
      if (visible) frame = requestAnimationFrame(step);
    };

    const start = () => {
      if (reduceMotion) return;
      cancelAnimationFrame(frame);
      last = performance.now();
      frame = requestAnimationFrame(step);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);
    // Only animate while the section is on screen
    const viewObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start(); else cancelAnimationFrame(frame);
    });
    viewObserver.observe(parent);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      viewObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none ${className}`}
      // Soften the web towards the top and bottom edges so the section blends into the page
      style={{ maskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 85%, transparent)' }}
    />
  );
};

export default NetworkBackdrop;
