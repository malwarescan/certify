# ROUTE STRUCTURE — CERTIFICATE.NOW

**Source of truth for routing. Aligns with EXECUTION_PLAN_V2.1.**

---

## CURRENT ROUTES

| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Homepage | ✓ |
| `/verify` | Scanning/entry UX | ✓ |
| `/vault` | My Vault | ✓ |
| `/library` | Library | ✓ |
| `/search` | Search | ✓ |
| `/me` | Profile | ✓ |
| `/product/[id]` | Product detail | ✓ |
| `/brand/[slug]` | Brand page | ✓ |
| `/store/[slug]` | Store page | ✓ |

---

## P0 ROUTES TO ADD

| Route | Purpose | PR |
|-------|---------|-----|
| `/v/[id]` | **Proof Artifact** — canonical, shareable | PR-1 |
| `/report/[id]` | Verification Report — printable | PR-3 |

---

## SUGGESTED FILE STRUCTURE

```
src/app/
├── page.tsx                    # Homepage
├── (app)/
│   ├── verify/page.tsx         # Scan/entry
│   ├── vault/page.tsx          # My Vault
│   ├── v/
│   │   └── [id]/
│   │       └── page.tsx        # Proof Artifact (NEW)
│   └── report/
│       └── [id]/
│           └── page.tsx        # Verification Report (NEW)
└── api/
    └── og/
        └── proof/
            └── route.tsx       # OG image (NEW)
```

---

## URL CONTRACT

- **Proof:** `https://certificate.now/v/{id}` — canonical share URL
- **Report:** `https://certificate.now/report/{id}` — expanded view
- **OG:** `https://certificate.now/api/og/proof?id={id}` — for meta tags
