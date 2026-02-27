"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type TapState = "idle" | "scanning" | "success" | "failed";

interface NFCTapZoneProps {
  className?: string;
  onVerify?: () => Promise<boolean>;
  variant?: "light" | "dark";
}

export function NFCTapZone({
  className,
  onVerify,
  variant = "light",
}: NFCTapZoneProps) {
  const isDark = variant === "dark";
  const [state, setState] = useState<TapState>("idle");
  const [progress, setProgress] = useState(0);

  const handleTap = async () => {
    if (state === "scanning") return;

    setState("scanning");
    setProgress(0);

    // Simulate scanning progress
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 10;
      });
    }, 80);

    try {
      // Simulate verification (replace with actual NFC logic)
      await new Promise((resolve) => setTimeout(resolve, 800));
      const success = onVerify ? await onVerify() : true;

      clearInterval(interval);
      setProgress(100);
      setState(success ? "success" : "failed");
    } catch {
      clearInterval(interval);
      setState("failed");
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-6 rounded-xl border-2 p-8 transition-all duration-300",
        state === "idle" &&
          (isDark
            ? "border-vault-slate/50 bg-vault-slate/30"
            : "border-vault-cloud bg-vault-snow"),
        state === "scanning" &&
          (isDark
            ? "border-sovereign-700 bg-sovereign-800/50 shadow-glow"
            : "border-sovereign-700 bg-sovereign-100/30 shadow-glow"),
        state === "success" &&
          (isDark
            ? "border-emerald-800 bg-emerald-900/30 shadow-glow-emerald"
            : "border-emerald-800 bg-emerald-100/30 shadow-glow-emerald"),
        state === "failed" &&
          (isDark ? "border-rose-500 bg-rose-900/30" : "border-rose-500 bg-rose-50"),
        className
      )}
    >
      <button
        onClick={handleTap}
        disabled={state === "scanning"}
        className={cn(
          "flex flex-col items-center justify-center gap-4 rounded-xl border-2 p-12 transition-all duration-300",
          "hover:scale-[0.98] active:scale-[0.95]",
          state === "idle" &&
            (isDark
              ? "border-vault-slate/50 hover:border-vault-cloud hover:bg-vault-slate/50"
              : "border-vault-mist hover:border-vault-cloud hover:bg-vault-mist/30"),
        state === "scanning" &&
            (isDark
              ? "cursor-wait border-sovereign-700 bg-sovereign-800/50"
              : "cursor-wait border-sovereign-700 bg-sovereign-100/50"),
        state === "success" &&
            (isDark
              ? "cursor-default border-emerald-800 bg-emerald-900/50"
              : "cursor-default border-emerald-800 bg-emerald-100/50"),
        state === "failed" &&
            (isDark ? "border-rose-500 bg-rose-900/50" : "border-rose-500 bg-rose-100/50")
        )}
      >
        {/* NFC Icon */}
        <div
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-full transition-colors",
            state === "idle" && (isDark ? "bg-vault-slate/50" : "bg-vault-mist"),
            state === "scanning" &&
              (isDark ? "bg-sovereign-700/30 animate-pulse" : "bg-sovereign-700/20 animate-pulse"),
            state === "success" && "bg-emerald-800",
            state === "failed" && "bg-rose-500"
          )}
        >
          {state === "success" ? (
            <svg
              className="h-10 w-10 text-white animate-bloom"
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
          ) : (
            <svg
              className={cn(
                "h-10 w-10",
                state === "idle" &&
                  (isDark ? "text-vault-cloud" : "text-vault-stone"),
                state === "scanning" &&
                  (isDark ? "text-sovereign-400" : "text-sovereign-800"),
                state === "failed" &&
                  (isDark ? "text-rose-400" : "text-rose-600")
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          )}
        </div>

        <div className="text-center">
          <p
            className={cn(
              "font-bold uppercase tracking-wider",
              state === "idle" && "text-vault-slate",
              state === "scanning" && "text-sovereign-800",
              state === "success" && "text-emerald-900",
              state === "failed" && "text-rose-600"
            )}
          >
            {state === "idle" && "Tap to Verify"}
            {state === "scanning" && "Verifying..."}
            {state === "success" && "Authentic!"}
            {state === "failed" && "Verification Failed"}
          </p>
          <p
            className={cn(
              "mt-1 text-sm",
              isDark ? "text-vault-cloud" : "text-vault-stone"
            )}
          >
            {state === "idle" && "Hold phone near item's NFC tag"}
            {state === "scanning" && "Reading tag..."}
            {state === "success" && "Certificate verified on blockchain"}
            {state === "failed" && "Try again or check tag"}
          </p>
        </div>
      </button>

      {/* Progress bar (scanning state) */}
      {state === "scanning" && (
        <div className="w-full max-w-xs">
          <div className="h-1.5 overflow-hidden rounded-full bg-vault-mist">
            <div
              className="h-full rounded-full bg-sovereign-700 transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p
            className={cn(
              "mt-2 text-center text-xs",
              isDark ? "text-vault-cloud" : "text-vault-stone"
            )}
          >
            {(progress / 100).toFixed(1)}s
          </p>
        </div>
      )}

      {/* Retry button (failed state) */}
      {state === "failed" && (
        <button
          onClick={() => setState("idle")}
          className={cn(
            "rounded-lg border border-rose-500 px-4 py-2 text-sm font-medium transition-colors",
            isDark
              ? "text-rose-400 hover:bg-rose-900/50"
              : "text-rose-600 hover:bg-rose-100"
          )}
        >
          Retry
        </button>
      )}
    </div>
  );
}
