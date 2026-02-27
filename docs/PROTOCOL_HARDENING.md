# PROTOCOL HARDENING — CERTIFICATE OBJECT

**Purpose:** Versioning + canonicalization so proofs remain valid across UI changes.

---

## 1. VERSIONING FIELDS

| Field | Type | Purpose |
|-------|------|---------|
| `specVersion` | string (semver) | Protocol spec version (e.g. 1.0.0) |
| `renderVersion` | string (semver) | UI render version; changes don't invalidate old proofs |
| `schemaHash` | string | Hash of canonical JSON schema |

**Rule:** `renderVersion` may change when UI layout changes. `specVersion` changes only when the data model changes.

---

## 2. CANONICALIZATION RULES

### Before hashing or signing:

1. **Key order:** Sort all keys alphabetically (recursive for nested objects).
2. **Date format:** ISO 8601 UTC: `YYYY-MM-DDTHH:mm:ss.sssZ`
3. **Whitespace:** No extra spaces. Single-line JSON.
4. **Encoding:** UTF-8.
5. **Excluded from proof hash:** `renderVersion`, `schemaHash`, any UI-only fields.

### Proof hash scope (what is included):

- `id`, `specVersion`, `version`, `createdAt`, `updatedAt`
- `issuer` (full object)
- `subject` (full object)
- `binding` (full object)
- `status`
- `evidence` (pointers, signature, blockchainTx)
- `revocation` (if present)
- `transferHistory` (if present)

---

## 3. AUDIT LOG MODEL

```json
{
  "events": [
    {
      "type": "issued",
      "at": "2025-01-15T10:00:00.000Z",
      "actor": "issuer:brand_xyz",
      "details": {}
    },
    {
      "type": "verified",
      "at": "2025-01-20T14:30:00.000Z",
      "actor": "system",
      "details": { "method": "nfc" }
    }
  ]
}
```

**Event types:** `issued`, `verified`, `transferred`, `revoked`, `updated`

**Actor:** `issuer:<id>`, `system`, `user:<id>` (when applicable)

---

## 4. RENDERING

- Timeline component reads `events[]` and renders chronologically.
- Each event: type badge, timestamp, actor, optional details.
- No paragraphs. Field: value format.
