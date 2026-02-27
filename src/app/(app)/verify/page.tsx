import { NFCTapZone } from "@/components/NFCTapZone";
import Link from "next/link";
import { CheckIcon, CameraIcon, HashtagIcon, SearchIcon } from "@/components/Icons";

export default function VerifyPage() {
  return (
    <div className="space-y-6 px-4 pt-6">
      <div className="h-6" />

      {/* Hero NFC Zone */}
      <div className="rounded-2xl border border-vault-slate/50 bg-vault-slate/50 p-8">
        <NFCTapZone variant="dark" className="border-vault-slate/50 bg-transparent" />
      </div>

      {/* Recent Verifications */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-vault-cloud">
          Recent Verifications
        </h2>
        <div className="space-y-2">
          {[
            { item: "Diamond Ring", time: "2m ago" },
            { item: "Rolex Sub", time: "1h ago" },
            { item: "Cartier Love", time: "3h ago" },
          ].map((v) => (
            <div
              key={v.item}
              className="flex items-center justify-between rounded-lg bg-vault-slate/50 px-4 py-3"
            >
              <CheckIcon className="h-4 w-4 text-emerald-700" />
              <span className="text-sm">{v.item}</span>
              <span className="text-xs text-vault-cloud">{v.time}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Alternative Verify Methods */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-vault-cloud">
          Or Verify By
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { Icon: CameraIcon, label: "Scan QR" },
            { Icon: HashtagIcon, label: "Enter ID" },
            { Icon: SearchIcon, label: "Search" },
          ].map((m) => (
            <button
              key={m.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-vault-slate/50 bg-vault-slate/50 py-4 transition-colors hover:bg-vault-slate/80"
            >
              <m.Icon className="h-5 w-5 text-vault-cloud" />
              <span className="text-xs font-medium">{m.label}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="flex gap-4 text-sm text-vault-cloud">
        <Link href="#" className="hover:text-vault-snow">
          How it works →
        </Link>
        <Link href="#" className="hover:text-vault-snow">
          Troubleshooting →
        </Link>
      </div>
    </div>
  );
}
