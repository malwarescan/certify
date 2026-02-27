# CLAIMS MODE — ENFORCE IN CODE

**Purpose:** UI must never show blockchain/chain claims unless proof supports them.

---

## claimsMode (per environment/page)

| Mode | When |
|------|------|
| `registryOnly` | Default. Always safe. |
| `chainAnchored` | Only when proof includes verifiable chain reference |

---

## Implementation

```ts
// src/lib/claims.ts

export type ClaimsMode = "registryOnly" | "chainAnchored";

export function getClaimsMode(certificate: CertificateObject | null): ClaimsMode {
  if (!certificate) return "registryOnly";
  const hasChainRef =
    certificate.evidence?.blockchainTx ||
    certificate.evidence?.pointers?.some((p) =>
      /^(https?:\/\/)?(etherscan|blockchair|explorer)/i.test(p)
    );
  return hasChainRef ? "chainAnchored" : "registryOnly";
}

export function canShowChainAnchor(mode: ClaimsMode): boolean {
  return mode === "chainAnchored";
}
```

---

## UI Conditional Display

| Claim | Condition |
|-------|-----------|
| "Registry-backed" | Always allowed |
| "Blockchain anchored" | `canShowChainAnchor(mode)` AND proof has chain ref + link |
| "Blockchain secured" | Never in hero/eyebrow; only in Details if chainAnchored |

---

## Usage in Components

```tsx
// In ProofSummary, DetailsDrawer, etc.
const mode = getClaimsMode(certificate);

// Registry section
<p>Registry-backed</p>

// Chain section (only if allowed)
{canShowChainAnchor(mode) && certificate.evidence?.blockchainTx && (
  <a href={...}>View on chain</a>
)}
```
