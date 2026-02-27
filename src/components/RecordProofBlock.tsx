"use client";

import { useState } from "react";
import { Copyable } from "@/components/Copyable";

type RecordProofBlockProps = {
  hash: string;
  hashFull: string;
  signature: string;
  signatureFull: string;
  blockNumber: string;
  tokenId: string;
};

const WHAT_IS_THIS =
  "This block contains the cryptographic proof that links this physical asset to an immutable registry record. The verification hash is a SHA-256 digest of the asset data. The digital signature proves the record was issued by an authorized registry node. The block number anchors the record to a specific point in time on the blockchain.";

export function RecordProofBlock({
  hash,
  hashFull,
  signature,
  signatureFull,
  blockNumber,
  tokenId,
}: RecordProofBlockProps) {
  const [expanded, setExpanded] = useState(false);
  const [shortFormat, setShortFormat] = useState(true);

  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50/50 px-6 py-6 sm:px-8 sm:py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Proof Details
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setShortFormat(!shortFormat)}
            className="text-[10px] font-medium text-slate-500 underline hover:text-slate-700"
          >
            {shortFormat ? "Full" : "Short"}
          </button>
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-[10px] font-medium text-slate-500 underline hover:text-slate-700"
          >
            {expanded ? "Hide" : "What is this?"}
          </button>
        </div>
      </div>

      {expanded && (
        <p className="mb-3 text-xs leading-relaxed text-slate-600">
          {WHAT_IS_THIS}
        </p>
      )}

      <div className="space-y-3 font-mono text-xs leading-relaxed text-slate-700">
        <Copyable
          value={shortFormat ? hash : hashFull}
          toastMessage="Hash copied"
        >
          <span>
            Verification Hash (SHA-256): {shortFormat ? hash : hashFull}
          </span>
        </Copyable>
        <Copyable
          value={shortFormat ? signature : signatureFull}
          toastMessage="Signature copied"
        >
          <span>Digital Signature: {shortFormat ? signature : signatureFull}</span>
        </Copyable>
        <div>Registry Anchor Block: {blockNumber}</div>
        <div>NFT / Token ID: {tokenId}</div>
      </div>
    </div>
  );
}
