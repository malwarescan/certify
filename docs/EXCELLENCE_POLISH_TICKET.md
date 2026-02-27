# 🎯 EXCELLENCE POLISH TICKET
**Priority:** P1 | **Est:** 2 hours

---

## 1. TYPOGRAPHY TIGHTENING (15 min)

**File:** `src/app/globals.css`

```css
@layer base {
  h1, h2, h3 {
    letter-spacing: -0.03em;
    font-weight: 700;
  }
  
  .hero-headline {
    line-height: 1.05;
  }
}
```

**File:** `src/sections/Hero.tsx`

```tsx
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-8">
```

---

## 2. SEAL DEPTH ENHANCEMENT (30 min)

**File:** `src/components/HolographicSeal.tsx`

```tsx
<div className="relative w-72 h-72 sm:w-80 sm:h-80">
  {/* Outer soft glow */}
  <div className="absolute inset-0 rounded-full bg-cert-500/20 blur-3xl" />
  
  {/* Middle ring - solid gradient, no spin */}
  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cert-400 to-cert-600 opacity-60" />
  
  {/* Inner dark circle */}
  <div className="absolute inset-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-2xl">
    <svg className="w-16 h-16 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  </div>
</div>
```

---

## 3. SPACING SYSTEM (15 min)

**File:** `src/sections/Hero.tsx`

```tsx
<div className="max-w-2xl">
  <p className="text-sm font-bold text-cert-600 uppercase tracking-wider mb-4">
    Certified Authenticity Intelligence
  </p>
  
  <h1 className="... mb-8"> {/* 32px */} </h1>
  
  <p className="text-lg text-slate-600 mb-10 leading-relaxed"> {/* 40px */} </p>
  
  <div className="flex flex-wrap gap-4 mb-10"> {/* 40px */} </div>
  
  <div className="flex flex-wrap gap-x-8 gap-y-3"> {/* Trust badges */} </div>
</div>
```

---

## 4. MICRO-INTERACTIONS (30 min)

**Buttons:**
```tsx
className="hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md transition-all duration-200"
```

**Cards:**
```tsx
className="hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
```

**Links:**
```tsx
className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cert-500 after:transition-all duration-300"
```

---

## 5. NFC ZONE INTERACTION (20 min)

**File:** `src/components/NFCZone.tsx`

```tsx
<div 
  className={cn(
    "relative w-64 rounded-2xl border-2 border-dashed p-6 flex flex-col items-center justify-center transition-all duration-200 cursor-pointer group",
    isActive 
      ? "border-cert-500 bg-cert-100 border-solid scale-105" 
      : isHovering 
        ? "border-cert-400 bg-cert-50/50" 
        : "border-slate-300 bg-slate-50"
  )}
>
  <div className={cn(
    "w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-200",
    isActive 
      ? "bg-cert-200 text-cert-700 scale-110" 
      : "bg-white border border-slate-200 group-hover:border-cert-300 group-hover:scale-110"
  )}>
    <Smartphone className={cn(
      "w-6 h-6 transition-colors",
      isActive ? "text-cert-700" : "text-slate-500 group-hover:text-cert-600"
    )} />
  </div>
</div>
```

---

## 6. BACKGROUND PATTERN SUBTLE (5 min)

**File:** `src/sections/Hero.tsx`

```tsx
<div 
  className="absolute inset-0 opacity-[0.02]" /* Reduced from 0.03 */
  style={{ backgroundImage: `url("...")` }}
/>
```

---

## ACCEPTANCE CRITERIA

- [x] Headlines have tight tracking (-0.03em) and bold weight (700)
- [x] Seal has layered depth (glow + gradient ring + dark center)
- [x] Spacing follows 8px grid (32px, 40px, 48px gaps)
- [x] All interactive elements have hover states
- [x] NFC zone responds to hover with color and scale changes
- [x] Background pattern is nearly invisible (2% opacity)

---

**Status:** Implemented. The site is ready to ship.
