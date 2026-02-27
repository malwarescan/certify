/**
 * Verification record data model — scales past demo.
 * accessContext.reasonCode: internal only, for logging.
 */
export type RecordStatus = "verified" | "invalid" | "pending";

export type Anchor = {
  chain: string;
  contract: string;
  txHash: string;
  blockNumber: string;
};

export type Product = {
  brandSlug: string;
  brand: string;
  name: string;
  sku: string;
  origin: string;
  material: string;
  category: string;
  collection: string;
  logoPath: string;
  images: string[];
};

export type Cryptography = {
  hash: string;
  hashFull: string;
  signature: string;
  signatureFull: string;
  algo: string;
  publicKeyId?: string;
};

export type OwnershipEntry = {
  ownerLabel: string;
  date: string;
  type: string;
  transferEventId?: string;
  verifiedBy?: "Registry" | "Brand" | "Custodian";
  anchor?: string;
};

export type AccessContext = {
  viaNfc: boolean;
  viaQr: boolean;
  accessedDirectly: boolean;
  reasonCode: "nfc" | "qr" | "direct_link" | "referrer";
  referrer?: string;
  device?: string;
};

export type VerificationRecord = {
  id: string;
  status: RecordStatus;
  createdAt: string;
  anchor: Anchor;
  product: Product;
  cryptography: Cryptography;
  ownershipChain: OwnershipEntry[];
  accessContext: AccessContext;
};

const DEMO_RECORDS: Record<string, VerificationRecord> = {
  "1": {
    id: "CN-CO-MUZEM-AN1924-0923842",
    status: "verified",
    createdAt: "2026-02-27T18:41:22Z",
    anchor: {
      chain: "Ethereum Mainnet",
      contract: "0x7a3...f91",
      txHash: "0x9f2c4a1b8e7d3c6f5a0b9e8d7c6b5a4f3e2d1c0b9a8e7d6c5b4a3f2e1d0c9b8a93e",
      blockNumber: "19283492",
    },
    product: {
      brandSlug: "muzem",
      brand: "MUZEM",
      name: "Anillo en Oro Blanco AN1924",
      sku: "AN1924",
      origin: "Colombia",
      material: "18K White Gold",
      category: "Oro blanco / Jewelry",
      collection: "Oro Blanco",
      logoPath: "/brands/muzem-verify/Muzem_logo.webp",
      images: [
        "/brands/muzem-verify/gold-emeral-diamond-ring1.webp",
        "/brands/muzem-verify/gold-emeral-diamond-ring2.webp",
        "/brands/muzem-verify/gold-emeral-diamond-ring3.webp",
        "/brands/muzem-verify/gold-emeral-diamond-ring4.webp",
        "/brands/muzem-verify/gold-emeral-diamond-ring5.webp",
        "/brands/muzem-verify/gold-emeral-diamond-ring6.webp",
      ],
    },
    cryptography: {
      hash: "0x9f2c...a93e",
      hashFull:
        "0x9f2c4a1b8e7d3c6f5a0b9e8d7c6b5a4f3e2d1c0b9a8e7d6c5b4a3f2e1d0c9b8a93e",
      signature: "0xA3F...229",
      signatureFull:
        "0xA3F7B2C1D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9B0C1D2E3F4A5B6C7D8E9F0229",
      algo: "ECDSA secp256k1",
    },
    ownershipChain: [
      {
        ownerLabel: "MUZEM",
        date: "2026-02-25",
        type: "Minted",
        transferEventId: "TE-0923842-001",
        verifiedBy: "Registry",
      },
      {
        ownerLabel: "User Wallet",
        date: "2026-02-27",
        type: "Transferred",
        transferEventId: "TE-0923842-002",
        verifiedBy: "Registry",
      },
    ],
    accessContext: {
      viaNfc: true,
      viaQr: false,
      accessedDirectly: false,
      reasonCode: "nfc",
    },
  },
  "2": {
    id: "CN-US-TIFFANY-DR2301-0847291",
    status: "verified",
    createdAt: "2026-02-26T14:22:10Z",
    anchor: {
      chain: "Ethereum Mainnet",
      contract: "0x8b4...a02",
      txHash: "0x7b1e5c2a9f8d4e3b7a6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5c42a",
      blockNumber: "19280123",
    },
    product: {
      brandSlug: "tiffany",
      brand: "Tiffany",
      name: "Diamond Ring 2.3ct",
      sku: "DR-2301",
      origin: "USA",
      material: "Platinum",
      category: "Fine Jewelry",
      collection: "Signature",
      logoPath: "/brands/tiffany-verify/logo.svg",
      images: ["/brands/tiffany-verify/products/dr-2301/hero.svg"],
    },
    cryptography: {
      hash: "0x7b1e...c42a",
      hashFull:
        "0x7b1e5c2a9f8d4e3b7a6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5c42a",
      signature: "0xB2C...441",
      signatureFull:
        "0xB2C8D3E4F5A6B7C8D9E0F1A2B3C4D5E6F7A8B9C0D1E2F3A4B5C6D7E8F9A0B1441",
      algo: "ECDSA secp256k1",
    },
    ownershipChain: [
      {
        ownerLabel: "Tiffany & Co.",
        date: "2026-02-20",
        type: "Minted",
        transferEventId: "TE-0847291-001",
        verifiedBy: "Brand",
      },
      {
        ownerLabel: "User Wallet",
        date: "2026-02-26",
        type: "Transferred",
        transferEventId: "TE-0847291-002",
        verifiedBy: "Registry",
      },
    ],
    accessContext: {
      viaNfc: false,
      viaQr: false,
      accessedDirectly: true,
      reasonCode: "direct_link",
    },
  },
  "3": {
    id: "CN-CH-ROLEX-126610LV-0912837",
    status: "verified",
    createdAt: "2026-02-25T09:15:33Z",
    anchor: {
      chain: "Ethereum Mainnet",
      contract: "0x9c5...b13",
      txHash: "0x4d8a6e3b1c0f9d8e7c6b5a4f3e2d1c0b9a8e7d6c5b4a3f2e1d0c9b8a7e6d5f71c",
      blockNumber: "19276542",
    },
    product: {
      brandSlug: "rolex",
      brand: "Rolex",
      name: "Submariner 126610LV",
      sku: "126610LV",
      origin: "Switzerland",
      material: "Steel / Ceramic",
      category: "Watches",
      collection: "Professional",
      logoPath: "/brands/rolex-verify/logo.svg",
      images: ["/brands/rolex-verify/products/126610lv/hero.svg"],
    },
    cryptography: {
      hash: "0x4d8a...f71c",
      hashFull:
        "0x4d8a6e3b1c0f9d8e7c6b5a4f3e2d1c0b9a8e7d6c5b4a3f2e1d0c9b8a7e6d5f71c",
      signature: "0xC1E...882",
      signatureFull:
        "0xC1E9F0A1B2C3D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9B0C1D2E3F4A5B6C7D8882",
      algo: "ECDSA secp256k1",
    },
    ownershipChain: [
      {
        ownerLabel: "Rolex AD",
        date: "2026-02-22",
        type: "Minted",
        transferEventId: "TE-0912837-001",
        verifiedBy: "Registry",
      },
      {
        ownerLabel: "User Wallet",
        date: "2026-02-25",
        type: "Transferred",
        transferEventId: "TE-0912837-002",
        verifiedBy: "Registry",
      },
    ],
    accessContext: {
      viaNfc: false,
      viaQr: true,
      accessedDirectly: false,
      reasonCode: "qr",
    },
  },
};

export function getRecord(id: string): VerificationRecord | null {
  return DEMO_RECORDS[id] || DEMO_RECORDS["1"];
}
