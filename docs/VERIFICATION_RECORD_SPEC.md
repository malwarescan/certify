# Verification Record — Ship Gate Checklist

**Route:** `/record/[id]` (canonical). `/product/[id]` → route-level redirect.

## Dev directives (no debate)

1. **Redirect:** Ship with either `redirects()` in next.config OR route-level redirect page. Confirm which. No other approach. *(Using route-level: `src/app/product/[id]/page.tsx`)*
2. **Logging:** Replace console.info with `logEvent()` utility. *(Done: `src/lib/logEvent.ts`)*
3. **No placeholders:** No placeholders allowed on record pages. MUZEM must have real logo + product images in this PR. *(Assets in `public/brands/{slug}-verify/` — replace with official brand assets before ship)*

---

## A) Status Banner (Trust Anchor)

| Requirement | Status |
|-------------|--------|
| VERIFIED + Registry confirmed | ✓ |
| Record ID visible | ✓ |
| Record ID copyable (1-click + toast) | ✓ |
| Timestamp: relative + absolute on hover | ✓ |
| Network anchor: chain + contract + tx hash | ✓ |
| Contract copyable | ✓ |
| Tx hash copyable | ✓ |

---

## B) Core Panel

| Requirement | Status |
|-------------|--------|
| Left: Brand with logo | ✓ |
| Left: Product name, origin, material/category tags | ✓ |
| Left: 1 image (aspect ratio) | ✓ |
| Right: Seal (no hero haze) | ✓ |
| Right: Registry-confirmed | ✓ |
| Right: Proof confidence microline (3 bullets green) | ✓ |
| Right: View On-Chain Proof button | ✓ |

---

## C) Proof Details Block

| Requirement | Status |
|-------------|--------|
| Mono for values | ✓ |
| "What is this?" expandable | ✓ |
| Copy buttons for hash/signature/tx | ✓ |
| Short format + full format toggle | ✓ |

---

## D) Ownership Chain Table

| Requirement | Status |
|-------------|--------|
| Transfer Event ID column | ✓ |
| Verified By column | ✓ |
| Rows clickable to expand | ✓ |

---

## E) Physical Instructions

| Requirement | Status |
|-------------|--------|
| QR encodes record URL (real, scannable) | ✓ |
| NFC instruction: "Tap → opens this record → compare Record ID" | ✓ |
| "If Record ID doesn't match: treat as counterfeit" | ✓ |

---

## F) Anti-Fraud Banner

| Requirement | Status |
|-------------|--------|
| "Direct access detected" | ✓ |
| "Verify via NFC/QR on the asset for highest confidence" | ✓ |
| Reason code (internal, for logging) | ✓ |
| Log event when accessedDirectly triggers | ✓ |

---

## G) Visual Rules

| Requirement | Status |
|-------------|--------|
| Light slate, no gradients | ✓ |
| No hero haze/glow carryover | ✓ |
| One consistent blue for links | ✓ |
| Mono for values, sans for labels | ✓ |

---

## H) Data Model (Minimum)

```
record.id, record.status, record.createdAt
record.anchor { chain, contract, txHash, blockNumber }
product { brandSlug, name, sku, origin, images[] }
cryptography { hash, signature, algo, publicKeyId? }
ownershipChain[] { ownerLabel, date, type, anchor?, transferEventId?, verifiedBy? }
accessContext { viaNfc, viaQr, accessedDirectly, reasonCode, referrer?, device? }
```

---

## PR Ship Gate (No Debate)

- [ ] Screenshot: top of record
- [ ] Screenshot: proof block expanded
- [ ] 8–10s recording: seal rotor + copy-to-clipboard + expand/collapse proof
- [ ] Demo QR is real (scan opens the record)
- [ ] Logging: when accessedDirectly triggers, log event with recordId
