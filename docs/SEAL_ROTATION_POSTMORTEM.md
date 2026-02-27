# Seal Rotation Fix — Official Postmortem + Patch Summary

## What the Console Proved (No Debate)

- `prefers-reduced-motion` = false
- `.seal__rotor` had active animation (playState: running, duration: 6000)
- **BUT** computed `transform` stayed `matrix(1,0,0,1,0,0)` at t0 / t1 / t2

=> The animation existed, but it was **not animating transform** on the actual rotating layer. That's why it looked stuck.

---

## Root Cause

**Static `transform` on the rotor element overrode the keyframe animation.**

The rotor had `transform: translateZ(0)` (added for GPU acceleration). In the CSS cascade, this static transform prevented the animation's `transform: rotate(Xdeg)` from being applied. The animation ran, but its output was effectively ignored.

---

## P0 Fix (Shipped)

### 1. Keyframes — explicit from/to

```css
@keyframes seal-rotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
```

### 2. Remove static transform from rotor

**Before:** `.seal__rotor` had `transform: translateZ(0)`  
**After:** Removed. The rotor must own its transform via keyframes only.

### 3. Fallback durations

```css
animation: seal-rotate var(--seal-rotor-a, 60s) linear infinite;
```

### 4. Notch as child of rotor

Confirmed: `.seal__rotor-notch` is inside `.seal__rotor` so it inherits rotation.

---

## Verification (Ship Gate)

```js
const r = document.querySelector('.seal__rotor');
getComputedStyle(r).transform
```

Run twice, 1–2 seconds apart. If values differ (e.g. `matrix(0.27, 0.96, -0.96, 0.27, 0, 0)`), rotation is applied.

---

## Best Stack (No Three.js)

- **Pure CSS keyframes** for constant rotation ✓
- **Optional:** Framer Motion for hover/scroll-reactive micro-interactions (breathe, parallax, tilt)
- **Optional:** Web Animations API only if runtime control per state needed

Three.js is for 3D. This seal stays crisp, cheap, and deterministic.
