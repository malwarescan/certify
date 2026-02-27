# P0: SEAL ROTATION STILL STUCK — TRIAGE CHECKLIST (ORDER MATTERS)

If the notch isn't moving on-screen, something is overriding the animation at runtime. Follow this sequence in order and paste results back.

## Known root cause: static `transform` kills animation

**Symptom:** `animation-play-state: running` but `getComputedStyle(el).transform` stays `matrix(1,0,0,1,0,0)`.

**Fix:** Remove any `transform: translateZ(0)` or other static `transform` from `.seal__rotor`. The rotor must own its transform via the keyframes only. Use explicit `from`/`to` in keyframes.

---

## 0) Confirm we're not hallucinating

- Open the page and do this first:
  - **Hard refresh:** Cmd+Shift+R
  - **Disable cache:** DevTools > Network > Disable cache, then refresh again
  - **Reduce Motion OFF:** System Settings > Accessibility > Display > Reduce motion OFF

If after this it still doesn't move, continue.

---

## 1) Verify the animation is applied to the ACTUAL moving element

In Elements panel, select the exact node you expect to rotate:
- `.seal__rotor` (or the element wrapping notch + fill)

In Console run:
```js
const el = document.querySelector('.seal__rotor');
el && getComputedStyle(el).animationName
```

**Expected:** `"seal-rotate"`  
**If empty or different:** Animation is not applied. Check CSS specificity, `animation: none` override, or wrong selector.

---

## 2) Check animation is not paused or overridden

```js
const el = document.querySelector('.seal__rotor');
const s = el && getComputedStyle(el);
console.log({
  animationName: s?.animationName,
  animationDuration: s?.animationDuration,
  animationPlayState: s?.animationPlayState,
  animationTimingFunction: s?.animationTimingFunction,
});
```

**Expected:** `animationPlayState: "running"`  
**If "paused":** Something set `animation-play-state: paused` or `animation: none`.

---

## 3) Check for transform override on the same node

```js
const el = document.querySelector('.seal__rotor');
const s = el && getComputedStyle(el);
console.log('transform:', s?.transform);
// Watch this over 2–3 seconds — it should change as animation runs
```

**Expected:** `transform` changes over time (e.g. `matrix(0.9, 0.4, -0.4, 0.9, 0, 0)` → different values)  
**If static:** Animation is not running or another rule overrides `transform`.

---

## 4) Check prefers-reduced-motion

```js
window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

**If true:** OS has Reduce Motion ON. Turn it OFF for testing, or temporarily comment out the `@media (prefers-reduced-motion)` block in globals.css to confirm.

---

## 5) Search for overrides

In DevTools > Elements > Styles, select `.seal__rotor` and look for:
- Any rule with `animation: none`
- Any rule with `animation-play-state: paused`
- Any rule with `transform` that might override the keyframe transform
- Higher-specificity rules (e.g. `body .seal__rotor` or inline styles)

---

## 6) Verify we're animating the right element

- The **rotor** (`.seal__rotor`) must contain the notch (`.seal__rotor-notch`) and fill (`.seal__rotor-fill`).
- If the notch is a **sibling** of the rotor instead of a child, the rotor would rotate but the notch would stay still.
- In Elements, confirm: `.seal__rotor` > `.seal__rotor-notch` (child).

---

## 7) Check for static overlay covering the rotor

- If a sibling has `z-index` higher than the rotor and covers the seal, the rotor could be animating but invisible.
- Rotor has `z-index: 1`. Notch has `z-index: 10` (inside rotor). Highlight/ticks have `z-index: 0`.
- Ensure no "glass" or overlay layer sits above the rotor with `pointer-events: none` but still blocks visibility.

---

## Paste back

Reply with:
1. Output of step 1 (`animationName`)
2. Output of step 2 (full object)
3. Step 3: does `transform` change over 2–3 seconds? (yes/no)
4. Step 4: `prefers-reduced-motion` result
5. Step 5: any overrides found?
6. Step 6: DOM structure of rotor (screenshot or copy)
7. Step 7: z-index list of seal children
