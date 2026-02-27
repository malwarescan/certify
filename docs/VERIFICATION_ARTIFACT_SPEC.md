# VERIFICATION ARTIFACT UI — SHIP CRITERIA

**External name:** Proof / Verification Report  
**Internal:** Verification Artifact

---

## A) CANONICAL ROUTE + ARTIFACT

- **Route:** `/v/[id]` (or equivalent)
- Renders standardized **Proof Artifact** panel
- Must be **printable** and **screenshot-clean** (luxury requirement)
- **Proof Summary** top card + **Details** drawer

---

## B) PROOF SUMMARY (above the fold, always)

### Required fields (render even if "—"):

| Field | Source | Fallback |
|-------|--------|----------|
| Status pill | `status` | — |
| Item name | `subject.displayName` or `subject.description` | — |
| Issuer | `issuer.name` | — |
| Verified timestamp | `createdAt` or `updatedAt` | — |
| Binding method badge | `binding.method` | NFC / QR / Serial |
| Proof ID | `id` (short form) | — |

### Actions:

- **Primary:** Share Proof
- **Secondary:** View Details
- **Tertiary:** Report an Issue (quiet link)

---

## C) DETAILS DRAWER (structured, not paragraphs)

### Sections:

1. **Evidence** — links + hashes
2. **Binding** — method, tag id, cryptographic binding summary
3. **Registry** — network/ledger ref if real; otherwise "Registry entry" (no blockchain claim unless verifiable)
4. **History** — transferHistory if exists
5. **Revocation** — if revoked

**Rule:** Everything is `field: value` with copy buttons.

---

## D) SHARE SURFACE (mandatory)

### OG image for `/v/[id]`:

- Trust Mark (seal)
- Status
- Item name
- Issuer
- Proof ID (short)
- "Verify at certificate.now"

### Proof Snippet (copy block):

One-line summary + canonical URL.

**Format:**
```
Verified authentic — [Item] — Issued by [Brand]. Proof: certificate.now/v/abc123
```

No emojis. No marketing words.

---

## E) VERIFICATION STATES (visually unmistakable)

| State | Visual |
|-------|--------|
| Verified | Emerald Truth Bit + calm confidence |
| Not Verified / Tampered / Revoked | Controlled warning palette (premium, no bright red panic) |
| Pending | Rare; explicitly time-bound if used |

---

## ACCEPTANCE CHECKLIST

- [ ] `/v/[id]` route exists
- [ ] Proof Summary card with all required fields
- [ ] Details drawer with field:value + copy
- [ ] State-driven UI from Verification States Map
- [ ] Share Proof: copy snippet + share URL
- [ ] OG image generator for proof URLs
- [ ] Printable, screenshot-clean layout
