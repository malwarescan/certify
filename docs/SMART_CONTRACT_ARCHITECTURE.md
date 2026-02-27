# Certificate.now: Smart Contract Architecture

## Overview

The Certificate.now blockchain layer uses a **hybrid architecture** on Polygon PoS:

1. **CertificateNFT** (ERC-721A) – Ownership records, transfer history, public verification
2. **VerificationRegistry** – NFC tag ↔ Token binding, anti-cloning, verification events

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        CERTIFICATE.NOW LAYER                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌─────────────────────────────┐    ┌─────────────────────────────┐    │
│  │     CertificateNFT         │    │   VerificationRegistry       │    │
│  │     (ERC-721A)             │◄───│   (NFC → Token Mapping)      │    │
│  │                             │    │                             │    │
│  │  • mintWithNFC()           │    │  • registerNFC()             │    │
│  │  • transfer()              │    │  • verifyByNFC()            │    │
│  │  • tokenURI() → IPFS       │    │  • getTokenByNFC()           │    │
│  │  • EIP-2981 royalties      │    │  • revokeNFC() (admin)       │    │
│  └─────────────────────────────┘    └─────────────────────────────┘    │
│              │                                    │                     │
│              │                                    │                     │
│              ▼                                    ▼                     │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                    IPFS (Pinata)                                 │   │
│  │  Metadata: { name, description, image, attributes, proof }       │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Contract 1: CertificateNFT

### Purpose
ERC-721A NFT representing a certified luxury item. Gas-optimized for batch minting (brands mint hundreds at once).

### Key Features

| Feature | Implementation |
|---------|----------------|
| **Standard** | ERC-721A (gas-efficient vs ERC-721) |
| **Royalties** | EIP-2981 (secondary market fees to brands) |
| **Access Control** | OpenZeppelin AccessControl |
| **Metadata** | IPFS hash stored on-chain, full JSON off-chain |

### Data Structures

```solidity
struct Certificate {
    bytes32 nfcTagHash;      // keccak256(uid + certId) - prevents replay
    bytes32 metadataHash;    // IPFS content hash
    uint64 mintedAt;
    bool isVerified;
    address brand;
}
```

### Core Functions

| Function | Role | Description |
|----------|------|-------------|
| `mintWithNFC` | BRAND_ROLE | Mints certificate, registers NFC in VerificationRegistry |
| `batchMintWithNFC` | BRAND_ROLE | Gas-efficient batch mint for brand onboarding |
| `tokenURI` | Public | Returns `ipfs://{hash}` for metadata |
| `setTokenRoyalty` | BRAND_ROLE | EIP-2981 royalty per token |

### Security Considerations

- **NFC Hash**: Store `keccak256(abi.encodePacked(nfcUid, certificateId))` – not raw UID (privacy)
- **Reentrancy**: Use OpenZeppelin ReentrancyGuard on mint
- **Pausable**: Optional emergency pause for critical vulnerabilities

---

## Contract 2: VerificationRegistry

### Purpose
Single source of truth for NFC tag → Token ID mapping. Enables instant verification without querying NFT contract.

### Key Features

| Feature | Implementation |
|---------|----------------|
| **Mapping** | `nfcTagHash → tokenId` (one-to-one) |
| **Reverse Lookup** | `tokenId → nfcTagHash` for revocation |
| **Events** | `NFCRegistered`, `NFCRevoked`, `VerificationAttempt` |

### Core Functions

| Function | Role | Description |
|----------|------|-------------|
| `register` | CertificateNFT only | Binds NFC hash to token ID |
| `verify` | Public (view) | Returns (tokenId, isAuthentic) for NFC hash |
| `revoke` | ADMIN_ROLE | Invalidates NFC (lost/stolen tag) |
| `getTokenByNFC` | Public (view) | Same as verify, convenience |

### NFC Hash Schema

```
nfcTagHash = keccak256(abi.encodePacked(
    nfcUid,           // 7 bytes from NTAG 424 DNA
    certificateId,    // bytes32 or string identifier
    chainId           // prevent cross-chain replay
))
```

---

## Deployment Flow

### Polygon Testnet (Amoy)

1. Deploy **VerificationRegistry** first
2. Deploy **CertificateNFT** with registry address
3. Grant `BRAND_ROLE` to brand onboarding service
4. Grant `REGISTRY_WRITER` to CertificateNFT

### Polygon Mainnet

1. Audit (Certik / Trail of Bits)
2. Deploy with same order
3. Verify on Polygonscan
4. Configure Alchemy/Infura RPC for backend

---

## Integration: Backend → Blockchain

```typescript
// Verification flow (Node.js)
async function verifyCertificate(nfcTagHash: string): Promise<VerificationResult> {
  const registry = new Contract(REGISTRY_ADDRESS, ABI, provider);
  const [tokenId, isAuthentic] = await registry.verify(nfcTagHash);
  
  if (!isAuthentic) return { valid: false };
  
  const nft = new Contract(NFT_ADDRESS, NFT_ABI, provider);
  const tokenURI = await nft.tokenURI(tokenId);
  const metadata = await fetchIPFS(tokenURI);
  
  return { valid: true, certificate: metadata, tokenId };
}
```

---

## Gas Estimates (Polygon)

| Operation | Estimated Gas | Cost (~30 gwei) |
|-----------|---------------|-----------------|
| mintWithNFC (single) | ~150,000 | ~$0.003 |
| batchMintWithNFC (10) | ~400,000 | ~$0.008 |
| verify (view) | 0 | Free |
| transfer | ~80,000 | ~$0.002 |

---

## Compilation & Deployment

```bash
npm run compile              # Compile contracts
npm run deploy:local         # Deploy to local Hardhat network
npm run deploy:amoy          # Deploy to Polygon Amoy testnet (set POLYGON_AMOY_RPC)
```

---

## Upgrade Strategy

- **Immutable**: CertificateNFT and VerificationRegistry are **not upgradeable** (trust)
- **New versions**: Deploy V2, migrate active brands, sunset V1
- **Proxy pattern**: Consider UUPS for future admin functions only (e.g., new royalty standard)
