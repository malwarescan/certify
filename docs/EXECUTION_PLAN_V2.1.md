# EXECUTION PLAN v2.1 — CERTIFICATE.NOW

**Status:** Ship-ready | **Lock:** Identity + Protocol + UI Spec

---

## 1. NORTH STAR (DO NOT DEVIATE)

Certificate.now is not "an app that verifies." It is **the trust registry + proof artifact standard** that luxury and resale can rely on.

Every screen must feel like a hallmark: **calm, exact, archival, inevitable.**

---

## 2. HOME HERO (LOCKED)

| Element | Value | Lock |
|---------|-------|------|
| Eyebrow | Certified Authenticity Intelligence | ✓ |
| Thesis | Registry-backed authenticity that travels with the asset. | ✓ |
| Loop | Scan · Verify · Share · Accepted (emerald Truth Bit separators) | ✓ |
| Bullets | Bank-grade NFC / Registry-backed / Cryptographic binding / Resale-ready proof | ✓ |

**Rules:**
- No "blockchain secured" unless claims guardrails allow + proof shows reference
- No redundant paragraphs. One support line max.

---

## 3. ROUTING + INFORMATION ARCHITECTURE (P0)

| Route | Purpose | Contract |
|-------|---------|----------|
| `/` | Homepage — category definition + entry points | Hero (locked), metrics, CTA |
| `/verify` | Scanning/entry UX (consumer) | NFC/QR/ID entry, recent verifications |
| `/v/[id]` | **Proof Artifact** — public, shareable, canonical | See Section 4 |
| `/report/[id]` | Verification Report — expanded, printable | See Section 5 |
| `/vault` | My Vault — user-owned items + saved proofs | Dashboard, saved proofs |

**Rules:**
- Proof Artifact (`/v/[id]`) is the canonical URL shared externally
- Report must never contradict Proof

---

## 4. PROOF ARTIFACT — P0 SPEC (MUST SHIP EXACTLY)

### Route Contract
- **Path:** `/v/[id]`
- **Public:** Yes (no auth required)
- **Shareable:** Yes (canonical URL)
- **Load target:** <1s on fast connection; clean skeleton on slow

---

### A) Proof Summary Card (above the fold, always visible)

| Field | Source | Fallback |
|-------|--------|----------|
| Status pill | `status` | — |
| Item name | `subject.displayName` | `subject.description` → "—" |
| Issuer | `issuer.name` | "—" |
| Verified timestamp | `verifiedAt` | `createdAt` |
| Binding badge | `binding.method` | NFC / QR / Serial / Manual |
| Proof ID | `id` (short format) | — |

**Actions:**
- **Primary:** Share Proof
- **Secondary:** View Details
- **Quiet link:** Report an Issue

---

### B) Details Drawer (structured, field:value)

| Section | Content |
|---------|---------|
| Evidence | Links + hashes, copy buttons |
| Binding | Method, tag id, cryptographic summary |
| Registry | Registry id; chain anchor only if claims allow |
| History | transferHistory (if exists) |
| Revocation | If revoked: revokedAt, reason, revokedBy |

**Rules:**
- Copy buttons for all IDs/hashes/URLs
- No paragraphs. Ledger printout style.

---

### C) Share Proof (mandatory)

**Copy snippet (exact format):**
```
Verified authentic — {Item} — Issued by {Brand}. Proof: certificate.now/v/{id}
```

**Channels:**
- Copy to clipboard
- System share sheet (mobile)
- OG image (see Section 7)

---

### D) State Visual Rules

| State | Visual |
|-------|--------|
| Verified | Emerald Truth Bit, calm confidence, no fireworks |
| Not Verified / Tampered / Revoked | Controlled warning palette, premium, not panic red |
| Pending | Time-bound copy ("Pending — re-checking evidence"), never indefinite |

---

## 5. VERIFICATION REPORT — P0/P1

**Route:** `/report/[id]`

**Purpose:** Proof expanded, not marketing.

**Contents:**
- Proof Summary (same as artifact)
- Timeline (events[])
- Evidence gallery (if media)
- Technical appendix (hashes, ids, canonical JSON hash)

**Rules:**
- Printable (paper-like layout)
- Screenshot-clean
- Never contradicts Proof

---

## 6. PROTOCOL HARDENING (NON-NEGOTIABLE)

### Object Fields (required)
- `specVersion`
- `renderVersion`
- `schemaHash`

### Canonicalization (MUST be implemented, not only documented)
- Stable key ordering (alphabetical)
- Date normalization (ISO 8601 UTC)
- Deterministic hash input
- Excluded from hash: renderVersion, schemaHash, UI-only fields

### events[] Model (required)
```json
{
  "type": "issued|verified|transferred|revoked|updated",
  "at": "ISO8601",
  "actor": "issuer:id|system|user:id",
  "details": {}
}
```

### Render Contract
- UI must never invent "blockchain" fields or "AI certainty" beyond what object/evidence supports

---

## 7. OG IMAGE / SOCIAL PROOF SURFACE (P0)

**Endpoint:** `/api/og/proof?id=...` (or equivalent)

**Used by:** `/v/[id]` meta tags

**OG displays:**
- Trust Mark
- Status (Verified / Not Verified / etc.)
- Item display name
- Issuer
- Proof short id
- "Verify at certificate.now"

**Rules:**
- Minimal, hallmark aesthetic
- No hype words. No emojis. No SaaS-ad gradients

---

## 8. CLAIMS GUARDRAILS (ENFORCE IN CODE)

### claimsMode (per environment/page)
| Mode | When |
|------|------|
| `registryOnly` | Default |
| `chainAnchored` | Only when proof includes verifiable chain reference |

### UI Conditional Display
| Claim | When Allowed |
|-------|--------------|
| "Registry-backed" | Always |
| "Blockchain anchored" | claimsMode=chainAnchored AND proof has chain ref + link |

---

## 9. QA / ACCEPTANCE CRITERIA (SHIP GATE)

- [ ] Proof Artifact page loads in <1s on fast connection; clean skeleton on slow
- [ ] Share snippet matches spec exactly
- [ ] Status mapping consistent: badge color ↔ headline ↔ next action
- [ ] Zero copy inconsistencies ("registry-backed" vs "blockchain secured")
- [ ] No repeated marketing lines across hero/support/bullets

---

## 10. PR BREAKDOWN (EXACT)

### PR-1: Proof Artifact + OG
| Deliverable | Acceptance |
|-------------|------------|
| `/v/[id]` page | Renders Proof Summary + Details drawer |
| Proof Summary card | All required fields, actions |
| Details drawer | Sections: Evidence, Binding, Registry, History, Revocation |
| Share Proof | Copy snippet exact format; system share |
| OG endpoint | `/api/og/proof` or equivalent |
| OG template | Trust Mark, status, item, issuer, id, "Verify at certificate.now" |

### PR-2: Protocol + Timeline
| Deliverable | Acceptance |
|-------------|------------|
| Canonicalization utility | Stable key order, date norm, hash input |
| Canonicalization tests | Unit tests pass |
| events[] timeline component | Renders events chronologically |
| schemaHash computation | Utility + verification |
| Certificate Object | specVersion, renderVersion, schemaHash in schema |

### PR-3: Verification Report
| Deliverable | Acceptance |
|-------------|------------|
| `/report/[id]` route | Printable layout |
| Proof Summary | Same as artifact |
| Timeline | events[] rendered |
| Evidence gallery | If media exists |
| Technical appendix | Hashes, ids, canonical JSON hash |

---

## COMPONENT CONTRACTS (REFERENCE)

| Component | Props | Output |
|-----------|-------|--------|
| `ProofSummary` | `certificate: CertificateObject` | Card with fields + actions |
| `DetailsDrawer` | `certificate: CertificateObject` | Sections with field:value + copy |
| `StatusPill` | `status: VerificationState` | Pill with correct color + label |
| `ShareProofButton` | `certificate: CertificateObject` | Copy + share sheet |
| `ProofTimeline` | `events: Event[]` | Chronological event list |
| `OGProofImage` | `certificate: CertificateObject` | 1200×630 image |

---

## ROUTE CONTRACTS (REFERENCE)

| Route | Data | Layout |
|-------|------|--------|
| `/v/[id]` | Fetch certificate by id | Proof Summary + Details drawer |
| `/report/[id]` | Same + events | Printable, paper-like |
| `/api/og/proof` | Query: id | Image response |
