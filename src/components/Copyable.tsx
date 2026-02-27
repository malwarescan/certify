"use client";

import { useState, useCallback } from "react";

type CopyableProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
  toastMessage?: string;
};

export function Copyable({
  value,
  children,
  className = "",
  toastMessage = "Copied",
}: CopyableProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [value]);

  return (
    <div className={`group flex flex-wrap items-center gap-2 ${className}`}>
      {children}
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex shrink-0 items-center justify-center rounded p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
        title="Copy"
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <span className="text-[10px] font-medium text-[var(--verity-emerald)]">
            {toastMessage}
          </span>
        ) : (
          <CopyIcon className="h-3.5 w-3.5" />
        )}
      </button>
    </div>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}
