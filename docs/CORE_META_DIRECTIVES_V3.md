# CORE META DIRECTIVES v3.0 — APPLE/TESLA-GRADE

**Status:** Implemented (P0)

---

## IMPLEMENTED

### 1. Layout Primitives
- `Container` — max-w-6xl, px-6 sm:px-8 lg:px-10
- `Section` — py-14 sm:py-16 lg:py-20 (default), hero, tight variants
- `Stack` — gap scale 2–12

### 2. Pattern
- Opacity: 0.008 mobile, 0.012 sm, 0.015 lg
- Mask: radial fade so pattern disappears under content

### 3. Typography
- Headline: text-[44px] mobile, text-[64px] lg:text-[72px]
- Accent: 2-stop gradient (#1E3A8A → #334155)
- Support: max-w-[52ch]

### 4. Buttons
- Sovereign Navy primary, h-12 (48px) mobile, h-[52px] desktop
- radius: 14px
- Soft shadow (Apple-grade)
- Full width on mobile

### 5. Hero
- Single column mobile, seal 220px
- Desktop: seal 360px lg:420px
- NFC zone removed from hero (lives on /verify)
- Micro-label under seal on desktop: "Verification Seal" / "Registry-confirmed"

### 6. Metrics
- Compact: p-5, text-4xl, one hairline divider
- Growth noise removed; qualifier only ("Rolling 30d", etc.)
- Single shadow token

### 7. How It Works Strip
- 4 steps: Scan, Verify, Share, Accepted
- Eliminates dead zone before CTA

### 8. CTA Panel
- Softer gradient
- Primary gold, secondary ghost
- Trust line: text-xs text-slate-400

### 9. Header
- 64px height
- 1px low-contrast border
- Get Started = same height token as hero primary
