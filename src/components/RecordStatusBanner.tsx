"use client";

import { CheckIcon } from "@/components/Icons";
import { Copyable } from "@/components/Copyable";

type RecordStatusBannerProps = {
  recordId: string;
  timestamp: string;
  chain: string;
  contract: string;
  txHash: string;
};

function formatRelative(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins} min ago`;
  if (diffHours < 24) return `${diffHours} hr ago`;
  if (diffDays < 7) return `${diffDays} days ago`;
  return date.toLocaleDateString();
}

function formatAbsolute(iso: string): string {
  const d = new Date(iso);
  return d.toISOString().replace("T", " ").replace("Z", " UTC");
}

export function RecordStatusBanner({
  recordId,
  timestamp,
  chain,
  contract,
  txHash,
}: RecordStatusBannerProps) {
  const date = new Date(timestamp);
  const relative = formatRelative(date);
  const absolute = formatAbsolute(timestamp);

  return (
    <div className="rounded-lg border border-slate-200 bg-[var(--verity-emerald)]/10 px-6 py-5 sm:px-8 sm:py-6">
      <div className="flex items-center gap-2">
        <CheckIcon className="h-5 w-5 text-[var(--verity-emerald)]" />
        <span className="font-semibold uppercase tracking-wide text-[var(--verity-emerald)]">
          Verified — Registry Confirmed
        </span>
      </div>
      <div className="mt-3 space-y-1.5 font-mono text-[11px] leading-relaxed text-slate-600">
        <Copyable value={recordId} toastMessage="Record ID copied">
          <span className="break-all">Record ID: {recordId}</span>
        </Copyable>
        <div className="flex items-center gap-2">
          <span>
            Timestamp:{" "}
            <span title={absolute} className="cursor-help">
              {relative}
            </span>
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>Network: {chain}</span>
          <Copyable value={contract} toastMessage="Contract copied">
            <span>Contract: {contract}</span>
          </Copyable>
          <Copyable value={txHash} toastMessage="Tx hash copied">
            <span>Tx: {txHash.slice(0, 10)}...{txHash.slice(-6)}</span>
          </Copyable>
        </div>
      </div>
    </div>
  );
}
