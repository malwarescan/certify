# COMPONENT CONTRACTS — CERTIFICATE.NOW

**Purpose:** Exact interfaces so nothing drifts. All Proof/Report UI must conform.

---

## PROOF ARTIFACT COMPONENTS

### ProofSummary
**File:** `src/components/proof/ProofSummary.tsx`

| Prop | Type | Required |
|------|------|----------|
| certificate | CertificateObject | ✓ |

**Renders:**
- Status pill (from StatusPill)
- Item name (subject.displayName)
- Issuer (issuer.name)
- Verified timestamp
- Binding badge
- Proof ID + copy button
- Actions: Share Proof (primary), View Details (secondary), Report an Issue (link)

**Contract:** Must never invent fields. Fallback to "—" for missing.

---

### DetailsDrawer
**File:** `src/components/proof/DetailsDrawer.tsx`

| Prop | Type | Required |
|------|------|----------|
| certificate | CertificateObject | ✓ |
| open | boolean | ✓ |
| onClose | () => void | ✓ |

**Sections (in order):**
1. Evidence — pointers, hashes, links (copy each)
2. Binding — method, tag id, crypto summary
3. Registry — registry id; chain ref only if claims allow
4. History — transferHistory
5. Revocation — if revoked

**Contract:** field: value only. Copy buttons on all IDs/hashes/URLs.

---

### StatusPill
**File:** `src/components/proof/StatusPill.tsx`

| Prop | Type | Required |
|------|------|----------|
| status | "verified" \| "not_verified" \| "pending" \| "tampered" \| "revoked" | ✓ |

**Visual mapping:**
| status | Color | Label |
|--------|-------|-------|
| verified | emerald-500 | Verified |
| not_verified | slate-500 | Not Verified |
| pending | titanium | Pending |
| tampered | amber-600 | Mismatch Detected |
| revoked | slate-600 | Revoked |

**Contract:** No panic red. Premium, controlled palette.

---

### ShareProofButton
**File:** `src/components/proof/ShareProofButton.tsx`

| Prop | Type | Required |
|------|------|----------|
| certificate | CertificateObject | ✓ |

**Output:**
- Copy snippet: `Verified authentic — {item} — Issued by {issuer}. Proof: certificate.now/v/{id}`
- System share sheet (when available)
- Primary CTA styling

**Contract:** Snippet format exact. No emojis. No marketing words.

---

### ProofTimeline
**File:** `src/components/proof/ProofTimeline.tsx`

| Prop | Type | Required |
|------|------|----------|
| events | Event[] | ✓ |

**Event shape:**
```ts
interface Event {
  type: "issued" | "verified" | "transferred" | "revoked" | "updated";
  at: string; // ISO8601
  actor: string;
  details?: Record<string, unknown>;
}
```

**Renders:** Chronological list. Type badge, timestamp, actor, optional details.

---

### OGProofImage
**File:** `src/app/api/og/proof/route.tsx` (or equivalent)

| Input | Query param: id |
|-------|-----------------|
| Output | Image 1200×630 |

**Displays:**
- Trust Mark (seal)
- Status
- Item display name
- Issuer
- Proof short id
- "Verify at certificate.now"

**Contract:** Minimal. Hallmark aesthetic. No hype.

---

## TYPES (SHARED)

```ts
// From Certificate Object Spec
interface CertificateObject {
  id: string;
  specVersion: string;
  version: string;
  renderVersion?: string;
  schemaHash?: string;
  createdAt: string;
  updatedAt?: string;
  issuer: { id: string; name: string; url?: string };
  subject: {
    assetId: string;
    assetType: string;
    displayName?: string;
    description?: string;
    metadata?: Record<string, unknown>;
  };
  binding: {
    method: "nfc" | "qr" | "serial" | "manual";
    nfcUid?: string;
    qrPayload?: string;
    serialNumber?: string;
  };
  status: "verified" | "not_verified" | "pending" | "tampered" | "revoked";
  evidence: {
    pointers: string[];
    signature?: string;
    blockchainTx?: string;
  };
  revocation?: { revokedAt: string; reason?: string; revokedBy?: string };
  transferHistory?: Array<{ from: string; to: string; at: string }>;
  events?: Event[];
}
```
