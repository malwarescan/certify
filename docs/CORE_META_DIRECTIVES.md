# CORE META DIRECTIVES — CERTIFICATE.NOW

**Version:** 2.1  
**Goal:** Enhance (not redesign) into a sovereign "trust mark" product that feels inevitable, standard-setting, and boardroom-grade.

**See:** `docs/EXECUTION_PLAN_V2.1.md` for ship-ready spec with acceptance criteria.

---

## 1. ONE NORTH STAR
Build Certificate.now as **"the trust mark + registry layer for luxury commerce."**
Every UI decision must reinforce: portable proof, registry-backed verification, accepted anywhere.

## 2. NO FEATURE-LIST MARKETING
We are not selling features. We are installing a protocol.
Kill any copy/UI that reads like: "AI + blockchain + NFC = cool."
Replace with: proof object, registry, acceptance, marketplace readability.

## 3. HERO MUST DECLARE INEVITABILITY (MANDATORY)
Add a single thesis sentence (near hero) that makes standardization explicit.
Constraint: one sentence, high-confidence, no buzzwords, no adjectives salad.
Example: "Registry-backed authenticity that travels with the asset."

## 4. MAKE THE LOOP VISIBLE WITHOUT ADDING SECTIONS
The user must intuit: **Scan → Verify → Share → Accepted → Repeat.**
Signal via microcopy + a small UI hint (not a new page).
No diagrams unless subtle and native.

## 5. TRUST MARK SYSTEM (VISUAL)
Create a "Trust Mark Spec" and implement it everywhere consistently:
- Verity Monogram / Seal
- Emerald "Truth Bit" accent usage
- Sovereign Navy primary
- Snow background discipline
- Titanium for hardware/precision cues
No new colors unless justified by the spec.

## 6. LUXURY RULE: MATERIALS, NOT GRADIENTS
Gradients allowed only if they behave like materials (ink, enamel, glass, metal).
No random glow, no candy UI.
Shadows must be tight and realistic (watch dial / jewel box, not SaaS fluff).

## 7. TYPOGRAPHY IS A CONTRACT
Lock a dual-weight typographic system:
- "CERTIFICATE" = airy archival tone
- "now" = decisive action
- Dot replacement = Truth Bit (where feasible)
Tracking and weights must be centrally defined as tokens.

## 8. STANDARDIZATION OVER NOVELTY
If a component can become a recognizable standard (seal, card, proof panel), do not change it per page.
Repeatable = trustworthy.

## 9. VERIFICATION PAGE IS THE PRODUCT (P0)
Treat /verify and /v/:id as the "truth surface."
The homepage is an introduction. The verification artifact is the moat.
Prioritize: speed, clarity, auditability, shareability.

## 10. PROOF OBJECT FIRST (DATA MODEL)
Define a Certificate Object Spec (machine + human readable).
Required: stable IDs, timestamps, issuer, subject asset, binding method, verification status, evidence pointers, revocation, transfer history.
UI must render a canonical "proof summary" + "detail drawer."

## 11. SHAREABILITY IS A DISTRIBUTION PRIMITIVE
Every certificate must produce:
- A clean public URL (canonical)
- A share card (OG image) that looks like a luxury hallmark
- A short "proof snippet" block (copy button) for marketplaces/support tickets

## 12. ZERO AMBIGUITY STATES
Verification UI must never feel uncertain.
Define explicit states: Verified, Not Verified, Unknown/Pending, Tampered/Mismatch, Revoked.
Each state: title, one-line meaning, next action.

## 13. REDUCE COGNITIVE LOAD
One primary action per screen.
Secondary actions tucked into "More" or a drawer.
No dense paragraphs. No multi-CTA chaos.

## 14. METRICS MUST FEEL REAL OR NOT EXIST
If numbers are demo, label as "sample" or remove.
Never fake authority.

## 15. ENTERPRISE READINESS SIGNALS (WITHOUT NOISE)
Quiet credibility cues: compliance-ready language, audit log concept, SLA/Support link, "For Brands" path that feels procurement-safe.
No bloaty enterprise page soup.

## 16. PERFORMANCE IS PART OF TRUST
P0 budgets: LCP < 2.0s mobile, no layout shifts around seal/metrics, images responsive/compressed, no heavy animation libraries.

## 17. ACCESSIBILITY = PREMIUM
High contrast, readable sizes, tap targets, keyboard navigation.

## 18. DESIGN TOKENS OR IT DOESN'T SHIP
All colors, radii, shadows, spacing, typography must be centralized tokens.
Create: tokens (tailwind theme) + component primitives.

## 19. "ENHANCE, DON'T REDESIGN" OPERATING MODE
Allowed: tighten spacing, refine copy, improve materials, unify tokens, strengthen states, improve loop clarity.
Not allowed: new layouts, new visual language, new navigation patterns, "fresh new look."

## 20. RELEASE DISCIPLINE
- **Pass 1:** hero thesis + loop microcopy + trust mark consistency
- **Proof / Verification Report:** verification artifact UI + states + share card (external name)
- **Protocol hardening:** certificate object spec + audit log rendering
- **For Brands:** procurement-safe path + onboarding flow

*Note: Do not use "Pass 2/Pass 3" in user-facing artifacts. Externally: "Proof" and "Verification Report."*
