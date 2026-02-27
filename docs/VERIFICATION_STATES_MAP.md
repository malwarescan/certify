# VERIFICATION STATES MAP

**Purpose:** Zero ambiguity. Every verification UI must map to one of these states.

---

## STATE: VERIFIED

| Field | Value |
|-------|-------|
| **Title** | Verified |
| **Meaning** | Certificate matches registry. Asset authenticity confirmed. |
| **Visual** | Emerald checkmark, emerald-500, Truth Bit accent |
| **Next action** | Share proof, View details, Add to vault |

---

## STATE: NOT VERIFIED

| Field | Value |
|-------|-------|
| **Title** | Not Verified |
| **Meaning** | No matching certificate found in registry for this item. |
| **Visual** | Slate icon, slate-500, no emerald |
| **Next action** | Try another method, Contact seller, Report |

---

## STATE: PENDING / UNKNOWN

| Field | Value |
|-------|-------|
| **Title** | Verification Pending |
| **Meaning** | Request submitted. Registry lookup in progress. |
| **Visual** | Titanium spinner or pulse, slate-400 |
| **Next action** | Wait, Refresh, Check back |
| **Note** | Minimize this state. Prefer verified/not_verified. |

---

## STATE: TAMPERED / MISMATCH

| Field | Value |
|-------|-------|
| **Title** | Mismatch Detected |
| **Meaning** | Certificate data does not match physical item or registry. Possible tampering. |
| **Visual** | Amber/slate warning, no emerald, explicit icon |
| **Next action** | Report, Contact support, Do not purchase |

---

## STATE: REVOKED

| Field | Value |
|-------|-------|
| **Title** | Revoked |
| **Meaning** | Certificate was valid but has been revoked by issuer. |
| **Visual** | Slate-600, strikethrough or revoke icon |
| **Next action** | View revocation details, Contact issuer |

---

## UI RENDERING RULES

1. **One state per view.** Never show two states simultaneously.
2. **Title + one-line meaning** always visible.
3. **Next action** as single primary button; secondary in "More" if needed.
4. **No uncertain language.** "Verified" or "Not Verified" — never "Maybe" or "Unclear."
