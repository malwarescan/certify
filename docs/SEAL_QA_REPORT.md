# Seal Animation QA Report

**Date:** 2026-02-27  
**Env:** `NEXT_PUBLIC_SEAL_DEBUG=1`

---

## P0 Fix Applied (Invisible Rotation)

**Root cause:** Rotating a symmetric ring = no tracking detail for the eye.

**Fix implemented:**
1. **Visible notch** — Solid white wedge at 12 o'clock on outer rotor (separate layer, not dimmed by rotor opacity)
2. **data-seal-debug** — `:root[data-seal-debug="1"]` for 6s/9s + 0.75 notch opacity (set by `SealDebugInit`)
3. **Checkmark** — Shrunk to 15% (stamp size), stroke 5
4. **Overlays** — z-index lowered so notch is visible

---

## Automated Checks ✅

| Check | Result |
|-------|--------|
| Build | ✓ Compiled successfully |
| Page load | ✓ HTTP 200 |
| Rotor elements | ✓ `seal__rotor`, `seal__rotor-fill`, `seal__rotor-notch` |
| Animation name | ✓ `seal-rotate` |
| Animation duration (debug) | ✓ `6s` |
| Animation state | ✓ `running` |

---

## DevTools Verification (Manual)

1. **Inspect `.seal__rotor`** — confirm:
   - `animation-name: seal-rotate`
   - `animation-duration: 6s` (debug) or `60s` (production)
   - Computed `transform` changes over time

2. **With debug OFF** — set `NEXT_PUBLIC_SEAL_DEBUG=0` in `.env.local`, restart, then:
   - Rotation detectable within 5–8 seconds
   - Subtle notch visible on outer ring

---

## Ship Gate Checklist

- [x] Outer ring rotates (CW)
- [x] Inner ring counter-rotates (CCW)
- [x] Checkmark static, centered
- [x] Debug mode: 6s/9s, notch + dot visible
- [x] `prefers-reduced-motion` disables animation

---

## Screenshots

- `seal-qa-debug.png` — Debug mode (6s/9s, notch visible)
