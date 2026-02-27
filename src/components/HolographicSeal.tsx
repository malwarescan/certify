"use client";

import { cn } from "@/lib/utils";
import { useSealActivation } from "@/components/SealActivation";

type SealSize = "sm" | "md" | "lg" | "hero";

export default function HolographicSeal({ size = "md" }: { size?: SealSize }) {
  const sealActive = useSealActivation();

  return (
    <div className="seal-wrapper">
      <figure
        className={cn("seal", `seal--${size}`)}
        data-seal-active={sealActive ? "1" : undefined}
      >
      {/* One-time ring ripple when entering viewport */}
      <div className="seal__ripple" aria-hidden="true" />
      {/* Aura (optional) */}
      <div className="seal__glow" aria-hidden="true" />

      {/* OUTER RING: rotate CW — gradient + notch in separate layers so notch stays bright */}
      <div className="seal__rotor" aria-hidden="true">
        <div
          className="seal__rotor-fill"
          style={{
            inset: "var(--ring-outer-inset)",
            background:
              "conic-gradient(from 0deg, #4a8ee8, #3B82F6, #4a8ee8)",
            opacity: 0.3,
          }}
        />
        <div className="seal__rotor-notch" aria-hidden="true" />
      </div>

      {/* Layer 2: Specular sweep — light glint, rotates slower (drift) */}
      <div className="seal__specular" aria-hidden="true" />

      {/* INNER RING: rotate CCW */}
      <div
        className="seal__rotorInner"
        aria-hidden="true"
        style={{
          inset: "var(--ring-inner-inset)",
          background:
            "conic-gradient(from 180deg, #3B82F6, #2563EB, #3B82F6)",
          opacity: 0.18,
        }}
      />

      {/* CORE: static */}
      <div
        className="seal__core"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, #0e141a 0%, #0b0f14 52%, #0b0f14 100%)",
          border: "1px solid rgba(30,41,59,0.45)",
          boxShadow:
            "inset 0 1px 0 rgba(148,163,184,0.05), inset 0 -2px 4px rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.12)",
        }}
      >
        <div
          className="absolute inset-1 rounded-full opacity-30"
          style={{
            border: "1px solid rgba(148,163,184,0.12)",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.3)",
          }}
        />
      </div>

      {/* Checkmark — stamp optics: emboss behind, main emerald on top */}
      <svg
        className="seal__check"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {/* Emboss: subtle (opacity <= 0.35, blur <= 1.25px) */}
        <path
          className="seal__check-emboss"
          d="M5 13l4 4L19 7"
          fill="none"
          stroke="rgba(13, 150, 96, 0.35)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(0.5, 0.5)"
          style={{ filter: "blur(1px)" }}
        />
        {/* Main emerald — stroke constant 5 */}
        <path
          d="M5 13l4 4L19 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Outer ring highlight — behind rotor so notch is visible */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ zIndex: 0, border: "1px solid rgba(51,65,85,0.25)" }}
      />

      {/* Micro-tick marks — static, like watch dial */}
      <div className="absolute inset-0 rounded-full border-2 border-slate-800/20" style={{ zIndex: 0 }} />
    </figure>
    </div>
  );
}
