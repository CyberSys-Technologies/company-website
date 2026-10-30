// Run from the project root: node scripts/banking-atm-skin.cjs <pixabay-atm-1524868_1280.jpg> public/industries/banking-atm.webp 118,74,50
// Source photo: https://pixabay.com/photos/atm-brexit-cash-withdraw-cash-1524868/ (Pixabay Content Licence)
// Deepens the skin tone of the hands in the ATM photo, keeping the original shading
const path = require('path');
const sharp = require(path.resolve('node_modules/sharp'));
const [src, out, toneArg] = process.argv.slice(2);
const TONE = (toneArg || '108,66,44').split(',').map(Number);   // mid-tone target (rich brown)
const REGION = { x0: 760, y0: 520, x1: 1280, y1: 853 };          // where the hands are
(async () => {
  const { data, info } = await sharp(src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = info;
  const mask = new Float32Array(W * H);
  const smooth = (e0, e1, x) => { const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };
  let sumL = 0, n = 0;
  // Outline of the hands (traced on the photo), offset to full-image coordinates
  const POLY = [[34,34],[100,20],[210,42],[338,92],[352,150],[358,218],[300,198],[230,182],[170,188],[134,212],[150,244],[114,313],[34,313],[26,180]].map(([x, y]) => [x + 780, y + 540]);
  const inside = (x, y) => { let c = false; for (let i = 0, j = POLY.length - 1; i < POLY.length; j = i++) { const [xi, yi] = POLY[i], [xj, yj] = POLY[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; };
  for (let y = REGION.y0; y < REGION.y1; y++) for (let x = REGION.x0; x < REGION.x1; x++) {
    if (!inside(x, y)) continue;
    const i = (y * W + x) * 3, r = data[i], g = data[i + 1], b = data[i + 2];
    const max = Math.max(r, g, b), min = Math.min(r, g, b), sat = max ? (max - min) / max : 0;
    // everything inside the outline is skin except the strongly orange jacket and the dark keypad gaps
    const m = smooth(7, 16, r - b) * (1 - smooth(0.42, 0.52, sat)) * smooth(35, 60, max);
    mask[y * W + x] = m;
    if (m > 0.8) { sumL += 0.3 * r + 0.59 * g + 0.11 * b; n++; }
  }
  // Soften the mask edges (two box-blur passes)
  const blur = (m, rad) => {
    const tmp = new Float32Array(W * H), res = new Float32Array(W * H);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { let s = 0, c = 0; for (let k = -rad; k <= rad; k++) { const xx = x + k; if (xx >= 0 && xx < W) { s += m[y * W + xx]; c++; } } tmp[y * W + x] = s / c; }
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { let s = 0, c = 0; for (let k = -rad; k <= rad; k++) { const yy = y + k; if (yy >= 0 && yy < H) { s += tmp[yy * W + x]; c++; } } res[y * W + x] = s / c; }
    return res;
  };
  const soft = blur(blur(mask, 2), 2);
  const meanL = sumL / n;
  for (let p = 0; p < W * H; p++) {
    const a = Math.min(1, soft[p] * 1.15); if (a <= 0.01) continue;
    const i = p * 3, r = data[i], g = data[i + 1], b = data[i + 2];
    const k = (0.3 * r + 0.59 * g + 0.11 * b) / meanL;           // keep light and shade
    const f = Math.pow(k, 1.1);
    const nr = Math.min(255, TONE[0] * f), ng = Math.min(255, TONE[1] * f), nb = Math.min(255, TONE[2] * f);
    data[i] = r + (nr - r) * a; data[i + 1] = g + (ng - g) * a; data[i + 2] = b + (nb - b) * a;
  }
  await sharp(data, { raw: { width: W, height: H, channels: 3 } }).webp({ quality: 80 }).toFile(out);
  await sharp(data, { raw: { width: W, height: H, channels: 3 } }).extract({ left: 760, top: 520, width: 520, height: 333 }).png().toFile(out.replace(/\.webp$/, '-crop.png'));
  console.log('skin pixels', n, 'mean L', meanL.toFixed(0));
})();
