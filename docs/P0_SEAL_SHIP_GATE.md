# P0 SHIP GATE — SEAL ROTATION (NO EXCUSES)

## A) Visual Proof (Required Artifacts)

| Artifact | Requirement |
|----------|-------------|
| **Debug video (5s)** | `NEXT_PUBLIC_SEAL_DEBUG=1` — notch moving noticeably |
| **Prod video (8–10s)** | DEBUG OFF — viewer tracks movement within 5–8 seconds |
| **Computed styles screenshot** | `.seal__rotor` showing `animation-name`, `animation-duration`, `animation-play-state: running` |
| **Element layering list** | DOM order + z-index for all seal layers |

## B) Visual Quality Constraints

1. **Notch must NOT read like loading spinner** — micro-marker: 6–10px × 10–16px
2. **Machined emboss** — `border: rgba(255,255,255,0.65)`, `box-shadow: 0 2px 6px rgba(0,0,0,0.25)`
3. **Visible at all breakpoints** — hero: 220 / 340 / 380; sm/md/lg
4. **Checkmark** — 13–14% stamp size, not success icon

## C) Layering / Z-Index (Must Pass)

| Element | z-index | DOM order | Notes |
|---------|---------|-----------|-------|
| `.seal__glow` | 0 | 1 | Aura, behind everything |
| `.seal__rotor` | 1 | 2 | Outer ring (animated) |
| `.seal__rotor-fill` | (inherits) | 2a | Gradient, inside rotor |
| `.seal__rotor-notch` | 10 | 2b | Above fill, inside rotor |
| `.seal__rotorInner` | 1 | 3 | Inner ring (animated) |
| `.seal__core` | 2 | 4 | Static center |
| `.seal__check` | 50 | 5 | Stamp, top |
| Outer highlight | 0 | 6 | Border, behind rotor |
| Micro-tick marks | 0 | 7 | Border, behind rotor |

**Notch must render above:** rotor fill, outer highlight, ticks.  
**Notch must render below:** checkmark, core (core is center only).

## D) Reduced Motion

- Mac: System Settings → Accessibility → Display → **Reduce motion OFF**
- `@media (prefers-reduced-motion)` disables motion only when enabled
- Do NOT ship with motion disabled if dev box has reduce motion on

## E) Debug Init Correctness

- `SealDebugInit` runs client-side only
- In DevTools Elements: `<html data-seal-debug="1">` when debug enabled
- If attribute missing: `.env` not read or component not mounted

## Artifacts Checklist

- [ ] Debug video (5s) — `DEBUG=1 node scripts/qa-seal-artifacts.mjs`
- [ ] Prod video (8–10s) — set `NEXT_PUBLIC_SEAL_DEBUG=0`, restart, then `DEBUG=0 node scripts/qa-seal-artifacts.mjs`
- [ ] Computed styles — auto-generated in `docs/qa-artifacts/`; or DevTools screenshot of `.seal__rotor`
- [ ] Element layering list (this doc)

**If any missing → not done.**

## Next Leap (After P0 Passes)

1. Micro-parallax on hover (2–4px translate + slight glow) — CSS only
2. Subtle specular sweep (low-opacity conic gradient, slower than rotor)

Do not start these until P0 proof artifacts are delivered.
