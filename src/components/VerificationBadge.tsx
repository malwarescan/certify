"use client";

import { cn } from "@/lib/utils";

interface VerificationBadgeProps {
  className?: string;
  compact?: boolean;
}

export function VerificationBadge({ className, compact }: VerificationBadgeProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border-2 border-gold-800/60 bg-gradient-to-br from-sovereign-900 to-sovereign-800 p-4 shadow-lg transition-all duration-300 hover:shadow-glow-gold",
        compact && "p-3",
        className
      )}
    >
      {/* Holographic shimmer overlay on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 shimmer" />
      </div>

      <div className="relative flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-900/80">
            <svg
              className="h-5 w-5 text-emerald-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <span className="font-bold uppercase tracking-wider text-white">
            Verified
          </span>
        </div>

        <span className="text-sm font-medium text-blue-100">
          Certificate.now
        </span>

        <div className="my-1 h-px bg-gradient-to-r from-transparent via-gold-800/50 to-transparent" />

        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-medium text-slate-300">
            Blockchain Secured
          </span>
          <code className="font-mono text-xs text-gold-700">
            0x7f3a...9e2d
          </code>
        </div>
      </div>
    </div>
  );
}
