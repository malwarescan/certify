"use client";

import { useEffect } from "react";
import { logEvent } from "@/lib/logEvent";

type DirectAccessBannerProps = {
  recordId: string;
  reasonCode: string;
};

export function DirectAccessBanner({
  recordId,
  reasonCode,
}: DirectAccessBannerProps) {
  useEffect(() => {
    logEvent("record_direct_access", {
      recordId,
      reasonCode,
      uaHash: typeof navigator !== "undefined" ? navigator.userAgent.length : undefined,
    });
  }, [recordId, reasonCode]);

  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 px-6 py-5 sm:px-8 sm:py-6">
      <p className="flex items-start gap-2 text-sm text-amber-800">
        <span className="text-amber-600">⚠</span>
        <span>
          <strong>Direct access detected.</strong> Verify via NFC/QR on the asset
          for highest confidence.
        </span>
      </p>
    </div>
  );
}
