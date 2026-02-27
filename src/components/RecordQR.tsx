"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

type RecordQRProps = {
  url: string;
  size?: number;
  className?: string;
};

export function RecordQR({ url, size = 128, className = "" }: RecordQRProps) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    QRCode.toDataURL(url, {
      width: size,
      margin: 2,
      color: { dark: "#0F172A", light: "#FFFFFF" },
    }).then(setDataUrl);
  }, [url, size]);

  if (!dataUrl) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg border border-slate-200 bg-white ${className}`}
        style={{ width: size, height: size }}
      >
        <span className="text-xs text-slate-400">QR</span>
      </div>
    );
  }

  return (
    <img
      src={dataUrl}
      alt="Record QR code"
      width={size}
      height={size}
      className={`rounded-lg border border-slate-200 ${className}`}
    />
  );
}
