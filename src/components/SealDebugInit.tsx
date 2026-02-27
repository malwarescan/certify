"use client";

import { useEffect } from "react";

/**
 * Sets data-seal-debug="1" on <html> when NEXT_PUBLIC_SEAL_DEBUG=1.
 * Enables 6s/9s rotor speeds + 0.75 notch opacity via :root[data-seal-debug="1"].
 */
export function SealDebugInit() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_SEAL_DEBUG === "1") {
      document.documentElement.setAttribute("data-seal-debug", "1");
    }
  }, []);
  return null;
}
