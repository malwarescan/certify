# Next Leap — Dev Directive (Header + Seal Completion)

## 1. HEADER STILL FEELS DETACHED — MAKE IT PART OF THE HERO "PLATE"

**Problem:** Header reads like a separate app chrome layer sitting on top of a soft hero.

### Fix (implemented)

**A) Same optical plane as hero**
- Blur: 10px → 12px
- Saturate: 1.1 → 1.15
- Top inner highlight: `box-shadow: inset 0 1px 0 rgba(255,255,255,0.65)`
- Bottom gradient: `linear-gradient(to bottom, rgba(248,250,252,0.82), rgba(248,250,252,0.55))`

**B) Nav typography**
- text-slate-600, font-weight: 500
- gap-5 → gap-4

**C) CTA glow**
- Machined: `box-shadow: 0 10px 24px rgba(37,99,235,0.22), 0 0 0 1px rgba(255,255,255,0.35) inset`
- Reduced halo blur

**Ship gate:** Screenshot top + scrolled 120px must show header blending into hero (no "floating bar").

---

## 2. SEAL ANIMATION — 2 FINISHING MOTIFS

### A) Micro-physics: subpixel drift + depth breathing
- 11s animation on seal group: `translateY(0) → -1px → 0`, `rotate(0) → 0.3deg → 0`
- Nearly imperceptible, like a suspended object

### B) Notch-driven readability
- Notch opacity floor: 0.65
- Tiny specular catch on notch: `inset 0 1px 0 rgba(255,255,255,0.5)`
- Notch visible even when rotor opacity is low

---

## 3. PERFORMANCE / SAFETY

- No Three.js
- `prefers-reduced-motion` disables: rotor, specular, micro-physics, stamp settle, hover tilt
- No static transform on animated elements

---

## 4. REQUIRED PROOFS

**A) Header harmony:** 2 screenshots (top + 120px scrolled)

**B) Seal completion:** 10s recording showing:
- Notch readability at prod speed
- Micro-physics drift (barely visible but real)
- Specular pass detectable at least once

**C) Console proof:**
```js
const r=document.querySelector('.seal__rotor');
getComputedStyle(r).transform
```
Transform matrix must change over time.
