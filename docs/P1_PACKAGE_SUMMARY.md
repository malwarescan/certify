# P1 Package — Header/Hero Harmony + Seal Premium Layers

## P1-A) Header/Nav Harmonize with Hero

### 1. Frosted film behind header
- `::before` on `.header-rail` with:
  - `radial-gradient(600px 220px at 90% 10%, rgba(37,99,235,0.10), transparent 60%)`
  - `linear-gradient(to bottom, rgba(248,250,252,0.80), rgba(248,250,252,0.45))`
  - `backdrop-filter: blur(10px) saturate(1.1)`
  - `border-bottom: 1px solid rgba(15,23,42,0.06)`

### 2. Content width
- Header uses same `Container` as hero (max-w-6xl, px-6 sm:px-8 lg:px-10)

### 3. Nav typography
- `text-slate-700`, `tracking-[0.01em]`
- Hover underline (titanium hairline) via `.nav-link::after`

### 4. Header CTA
- Same aura gradient tokens as hero
- Halo: blur 8px, opacity 0.15 (reduced)
- 1px hairline outline

---

## P1-B) Seal Premium Layers

| Layer | Status | Implementation |
|-------|--------|----------------|
| 1. Rotor rotation | ✓ | 60s/90s, notch |
| 2. Specular sweep | ✓ | `.seal__specular` — 15s conic gradient, soft-light |
| 3. Breathing | ✓ | `.seal__glow` opacity animate |
| 4. Checkmark stamp settle | ✓ | `seal-check-stamp` — scale 0.98→1, rotate -2→0, 420ms |
| 5. Parallax tilt on hover | ✓ | `rotateX(2deg) rotateY(-3deg) translateY(-2px)` |
| 6. Notch readability | ✓ | Prod opacity floor 0.6, z-index 10 |

---

## P1-C) Quick Fixes

- Header film (P1-A)
- Checkmark: 12% width, emboss layer
- Hero CTA glow: blur 10px, opacity 0.35

---

## Ship Gate (Animation Complete)

- [ ] Rotor visible within 5s (notch proves it)
- [ ] Specular sweep visible within 8–12s (detectable by non-technical viewer)
- [ ] Checkmark stamp settle on load (unless reduced motion)
- [ ] Hover tilt feels physical (2–3°), caption does NOT warp
- [ ] No jitter, FPS stable

**Required artifacts:** See `docs/P1_SHIP_GATE_PROOFS.md`
