"use client";

import { cn } from "@/lib/utils";
import { CheckIcon, LockIcon } from "@/components/Icons";

interface CertificateCardProps {
  className?: string;
  brandName?: string;
  productName?: string;
  specifications?: string[];
  provenance?: string[];
}

export function CertificateCard({
  className,
  brandName = "Luxury Brand",
  productName = "Diamond Ring | 2.3ct | VS1 | G",
  specifications = [
    "Material: Platinum",
    "Gem: Diamond",
    "Weight: 2.3ct",
  ],
  provenance = [
    "Mined: 2019",
    "Cut: Antwerp",
    "Certified: GIA",
  ],
}: CertificateCardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-vault-mist bg-vault-snow shadow-md transition-all duration-300 hover:shadow-lg",
        className
      )}
    >
      {/* Top accent - Azure Mist */}
      <div className="h-1 bg-gradient-to-r from-sovereign-100 to-transparent" />

      <div className="p-6">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between border-b border-vault-mist pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sovereign-900 text-white font-bold">
            {brandName.charAt(0)}
          </div>
          <span className="text-sm font-medium text-vault-stone">
            Certificate.now
          </span>
        </div>

        {/* Product image placeholder */}
        <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-vault-mist">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-vault-stone">DR</span>
          </div>
          {/* Verified seal overlay */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-emerald-900 px-2 py-1 text-xs font-bold text-white">
            <CheckIcon className="h-3 w-3" />
            AUTHENTIC
          </div>
        </div>

        {/* Product info */}
        <div className="mb-4 rounded-lg border-l-4 border-emerald-900 bg-emerald-100/50 p-3">
          <p className="font-semibold text-vault-ink">{productName}</p>
        </div>

        {/* Specifications grid */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-vault-stone">
              Specifications
            </h4>
            <ul className="space-y-1 text-sm text-vault-slate">
              {specifications.map((spec, i) => (
                <li key={i}>• {spec}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-vault-stone">
              Provenance
            </h4>
            <ul className="space-y-1 text-sm text-vault-slate">
              {provenance.map((prov, i) => (
                <li key={i}>• {prov}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex-1 rounded-lg bg-sovereign-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sovereign-900">
            View Full Certificate
          </button>
          <button className="rounded-lg border border-vault-mist px-4 py-2.5 text-sm font-medium text-vault-slate transition-colors hover:bg-vault-mist">
            Transfer
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-vault-mist bg-white px-6 py-3">
        <p className="flex items-center gap-2 text-xs text-vault-stone">
          <LockIcon className="h-4 w-4" />
          Secured by Certificate.now Blockchain
        </p>
      </div>
    </div>
  );
}
