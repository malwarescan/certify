# P1 Visual Polish Tickets

Postmortem delivered. Seal rotation fixed. Next batch:

| Ticket | Status |
|--------|--------|
| P1: Header CTA glow containment + token unification | Done |
| P1: Primary/secondary CTA polish (shadows, borders, inner highlights) | Done |
| P1: Process rail grid alignment | Done |
| P1: Trust grid spacing + baseline alignment | Done |
| P1: Seal checkmark stamp treatment (scale + emboss) + notch opacity floor | Done |
| P1: Background grid opacity + radial fade | Done |

## Implemented

### Header
- CTA glow: blur 10–12px, reduced opacity, `overflow: hidden` on header bg layer
- `isolation: isolate` on header
- Nav: text-slate-600 (darker), py-2, min-h-[44px] hit area

### CTAs
- Primary: crisper shadow, 1px inner highlight, reduced bloom blur
- Secondary: more transparent bg, stronger border

### Hero
- Eyebrow: text-slate-500 (cooler, less saturated)
- Headline: leading-[0.95] explicit
- Process rail: grid alignment, uniform spacing
- Trust grid: gap-x-6, items-baseline

### Seal
- Checkmark: 13% width, stroke 4.5, emboss layer
- Notch opacity floor: 0.6 in prod

### Background grid
- Opacity reduced ~35%, radial fade (transparent near headline, intensifies toward edges)
