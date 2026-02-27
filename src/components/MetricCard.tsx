"use client";

import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string;
  label: string;
  change?: string;
  className?: string;
}

export function MetricCard({ value, label, change, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-vault-mist bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md",
        className
      )}
    >
      <p className="font-semibold tabular-nums text-vault-ink" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}>
        {value}
      </p>
      <div className="my-1 h-px w-12 bg-vault-mist" />
      <p className="text-sm font-medium text-vault-stone">{label}</p>
      {change && (
        <p className="mt-2 text-xs text-emerald-800">{change}</p>
      )}
    </div>
  );
}
