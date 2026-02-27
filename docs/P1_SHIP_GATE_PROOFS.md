# P1 Ship Gate — Required Proofs + Spec Fixes

**No hand-wavy confirmations.** Deliver these artifacts before calling P1 done.

---

## 1. SHIP GATE PROOFS (Required Artifacts)

### A) Header/Hero Harmony

**2 screenshots (same viewport):**
1. Top of page (hero visible)
2. Scroll 120px (header still visible)

**Goal:** Header film visually blends into hero haze — no "seam line" vibe.

---

### B) Seal Motion Proof (Not Subjective)

Run in console **twice, 2 seconds apart:**

```js
const r = document.querySelector('.seal__rotor');
getComputedStyle(r).transform
```

**Must differ** — rotation matrix changes (e.g. `matrix(0.9, 0.4, ...)` → different values).

---

### C) Specular + Stamp Proof

**8s screen recording:**
- Includes the moment page loads (stamp settle)
- Includes at least one visible specular sweep pass (even if subtle)
- **If specular is too subtle to detect on recording, it's too subtle in prod.**

---

## 2. TWO SPEC FIXES (Implemented)

### A) Specular Arc — Readable on Light Backgrounds

- **Fix:** `mix-blend-mode: overlay` (soft-light can vanish on light monitors)
- **Fix:** Arc alpha increased (0.45 in gradient, 0.2 opacity)
- **Ship gate:** Specular must be detectable within 10 seconds by a non-technical viewer.

### B) Hover Tilt — No Warp on Caption

- **Fix:** Caption/label is **outside** the seal figure (sibling, not child)
- **Structure:** `.seal-anchor` > seal graphic (transform) + label div (no transform)
- Hover tilt applies only to `.seal` (the figure), not the "Verification Seal" text.

---

## 3. Checkmark Consistency (Ship Gate Rules)

| Rule | Target |
|------|--------|
| Check width | 12–13% of seal diameter (hero) |
| Stroke | Constant 5 |
| Emboss opacity | ≤ 0.35 |
| Emboss blur | ≤ 1.25px |

---

## 4. P2 (Next Leap) — DO NOT START UNTIL P1 ARTIFACTS DELIVERED

- Scroll-linked micro-parallax (tiny)
- Specular sweep reacts to cursor position (light direction)
- Notch gets micro "lens" highlight when crossing 12 o'clock

**Block:** P2 work until P1 ship gate proofs are delivered.

---

## Artifacts Checklist

- [ ] Screenshot: top of page
- [ ] Screenshot: scrolled 120px
- [ ] Console proof: `getComputedStyle(r).transform` differs at t0 vs t2
- [ ] 8s screen recording: stamp settle + specular pass visible
