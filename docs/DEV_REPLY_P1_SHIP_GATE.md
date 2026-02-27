# Reply to Devs — P1 Ship Gate (Send Exactly)

---

## 1. GOOD — P1 PACKAGE ACCEPTED AS "SPEC COMPLETE"

Your summary is fine. Now deliver the ship gate artifacts.

---

## 2. REQUIRED PROOFS (ATTACH THESE FILES / LINKS)

### A) Header/Hero harmony

- **Screenshot 1:** Top of page (hero visible)
- **Screenshot 2:** Scrolled exactly ~120px (header still visible)
- Same viewport size in both

### B) Seal motion proof (objective)

Paste 2 console outputs, 2 seconds apart:

```js
const r = document.querySelector('.seal__rotor');
getComputedStyle(r).transform
```

**Must be different matrices.**

### C) Specular + stamp proof

- **8 second screen recording** starting at hard refresh
- Must show:
  - **Stamp settle on load**
  - **At least one specular sweep pass**

---

## 3. CRITICAL REGRESSION CHECK (DO THIS NOW)

We already got burned by transforms overriding animation.

**Confirm NO static transform exists on these classes:**
- `.seal__rotor`
- `.seal__rotorInner`
- `.seal__specular`

**Paste computed results:**

```js
['.seal__rotor','.seal__rotorInner','.seal__specular'].map(s=>{
  const el=document.querySelector(s);
  const cs=getComputedStyle(el);
  return [s, cs.transform, cs.animationName, cs.animationDuration, cs.willChange];
})
```

**Expected:** `transform` changes over time for rotor/rotorInner (animation drives it). Specular same. No static `transform: translateZ(0)` or similar.

---

## 4. SPECULAR FALLBACK RULE (YOU NEED THIS OR IT'LL DISAPPEAR ON SOME DISPLAYS)

Overlay can still vanish depending on background/monitor.
Implement fallback:

- If `mix-blend-mode` unsupported OR user agent disables backdrop filters:
  - Default to `normal` blend with slightly higher opacity (but capped)
- **Ship gate:** Specular must be visible on at least 2 different displays (or Chrome + Safari)

**Implemented:** `@supports not (mix-blend-mode: overlay)` → `mix-blend-mode: normal; opacity: 0.28`

---

## 5. DONE MEANS: ALL 3 ARTIFACTS + REGRESSION OUTPUTS POSTED IN THE PR

No more "it's subtle" talk. If the recording doesn't clearly show it, we adjust until it does.

Send that.
