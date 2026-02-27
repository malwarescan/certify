"use client";

import { useState } from "react";
import { SmartphoneIcon } from "@/components/Icons";
import { cn } from "@/lib/utils";

export default function NFCZone() {
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={cn(
        "group relative flex w-64 flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 transition-all duration-200 cursor-pointer select-none",
        isActive
          ? "scale-105 border-cert-500 border-solid bg-cert-100"
          : isHovering
            ? "border-cert-400 bg-cert-50/50"
            : "border-slate-300 bg-slate-50"
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
    >
      {/* Ripple effect */}
      {isHovering && !isActive && (
        <div className="pointer-events-none absolute inset-0 animate-ping rounded-2xl border-2 border-cert-400 opacity-20" />
      )}

      {/* Phone icon - responds to hover */}
      <div
        className={cn(
          "mb-3 flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-200",
          isActive
            ? "scale-110 border-cert-300 bg-cert-200 text-cert-700"
            : "border-slate-200 text-slate-500 group-hover:scale-110 group-hover:border-cert-300 group-hover:text-cert-600"
        )}
      >
        <SmartphoneIcon className="h-6 w-6" />
      </div>

      {/* Labels */}
      <p className="text-center text-sm font-bold uppercase tracking-wider text-slate-900">
        Tap to Verify
      </p>
      <p className="mt-1 text-center text-xs text-slate-500">
        Hold phone near item&apos;s NFC tag
      </p>

      {/* Active overlay */}
      {isActive && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-cert-500/10" />
      )}
    </div>
  );
}
