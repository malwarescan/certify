# TRUST MARK SPEC — CERTIFICATE.NOW

**Version:** 1.0  
**Purpose:** Single source of truth for visual identity. All UI must conform.

---

## 1. LOGO & WORDMARK

### Structure
- **CERTIFICATE** — archival tone, lighter weight (500–600), extended tracking (0.02em)
- **now** — decisive, heavier weight (700–800), tight tracking (-0.02em)
- **Truth Bit:** The dot in "Certificate.now" may be replaced with the emerald checkmark (●) where the brand allows. Use sparingly.

### Usage
- Primary: `Certificate.now` on snow (#F8FAFC) or sovereign navy (#0F172A)
- Minimum size: 24px for wordmark
- Clear space: 1x height of "C" on all sides

---

## 2. VERITY MONOGRAM / SEAL

### Composition
- Outer ring: Sovereign navy gradient (material-like, no candy glow)
- Inner center: Deep navy (#020617–#0a0f1a) with subtle radial gradient
- Truth Bit: Emerald checkmark (#10B981 / emerald-500) centered
- Micro-tick border: Titanium at 20% opacity
- Rotation: Ultra-slow (66s / 50s reverse) — ceremonial, not flashy

### Sizing
- Hero: 288px × 288px (sm: 320px)
- Card/compact: 64px × 64px
- Inline/badge: 24px × 24px

### Don'ts
- No neon, no multi-color effects, no random glow
- No animation faster than 45s per rotation

---

## 3. COLOR PALETTE (TOKENS)

| Token | Hex | Usage |
|-------|-----|-------|
| **Sovereign Navy** | #0F172A | Primary brand, headers, seal center |
| **Navy Ink** | #020617 | Deepest tone, seal inner |
| **Cert Blue** | #2563EB (600) | CTAs, links, accent |
| **Truth Bit (Emerald)** | #10B981 | Verified state, checkmarks, success |
| **Snow** | #F8FAFC | Backgrounds, cards on dark |
| **Titanium** | #94A3B8 | Hardware cues, borders, precision elements |
| **Slate** | 50–900 scale | Text hierarchy, borders, neutrals |
| **Gold** | #F59E0B | CTA accent (sparingly), premium highlight |

---

## 4. TYPOGRAPHY TOKENS

| Token | Weight | Tracking | Use |
|-------|--------|---------|-----|
| `headline` | 800 | -0.03em | H1 |
| `heading` | 700 | -0.03em | H2, H3 |
| `micro-label` | 600 | 0.08–0.12em | Uppercase labels |
| `body` | 400 | 0 | Body text |
| `body-semibold` | 600 | 0 | Emphasized body |
| `tabular` | 700 | tight | Numbers, IDs |

---

## 5. SPACING & RADII

| Token | Value | Use |
|-------|-------|-----|
| `radius-sm` | 6px | Buttons, badges |
| `radius-md` | 10px | Cards, panels |
| `radius-lg` | 12px | Sections, modals |
| `space-unit` | 8px | Base grid |
| `section-gap` | 56–80px | Between major sections |

---

## 6. SHADOWS (MATERIAL-LIKE)

| Token | Value | Use |
|-------|-------|-----|
| `shadow-tight` | 0 1px 2px rgba(0,0,0,0.08) | Cards, subtle lift |
| `shadow-panel` | 0 2px 4px rgba(0,0,0,0.12) | Panels, proof cards |
| `shadow-dial` | 0 4px 8px rgba(0,0,0,0.15) | Seal, elevated surfaces |

No blur > 12px. No colored shadows except seal glow (minimal).

---

## 7. TRUTH BIT ACCENT RULES

- **Verified state:** Emerald checkmark, emerald-500
- **Success/confirmation:** Emerald-500 or emerald-600
- **Do not** use emerald for decorative elements
- **Do not** use emerald for unverified or neutral states

---

## 8. BACKGROUND DISCIPLINE

- **Primary background:** Snow (#F8FAFC) or slate-50
- **Dark sections:** Sovereign navy gradient (material-like)
- **Cards:** White on snow, or snow on navy
- **No** random gradients, no orbs, no candy textures

---

## 9. USAGE EXAMPLES

### Seal on hero
- Full seal, snow background, 48px gap to NFC zone

### Proof card
- White card, tight shadow, emerald checkmark for verified, titanium border

### CTA button
- Cert-600 fill, white text, tight shadow, no gradient

### Badge (verified)
- Emerald circle + checkmark, 24px, on white or snow
