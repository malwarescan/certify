import Link from "next/link";
import { StoreIcon } from "@/components/Icons";

export default function StorePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return (
    <div className="min-h-screen pb-8">
      <div className="sticky top-0 z-10 flex items-center border-b border-vault-slate/50 bg-sovereign-900/95 px-4 py-3 backdrop-blur-lg">
        <Link href="/library" className="text-vault-cloud hover:text-white">
          ← Back
        </Link>
        <h1 className="ml-4 font-serif text-lg font-semibold">
          {slug.replace(/-/g, " ").toUpperCase()}
        </h1>
      </div>

      <div className="space-y-6 px-4 pt-6">
        {/* Store Image */}
        <div className="aspect-video overflow-hidden rounded-2xl border border-vault-slate/50 bg-vault-slate/50">
          <div className="flex h-full items-center justify-center">
            <StoreIcon className="h-20 w-20 text-vault-cloud" />
          </div>
        </div>

        {/* Store Info */}
        <div className="rounded-xl border border-vault-slate/50 bg-vault-slate/50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-sm font-medium text-gold-700">5.0</span>
            <span className="text-sm text-vault-cloud">4.9 (127 reviews)</span>
          </div>
          <p className="text-sm text-vault-cloud">
            Authorized Dealer since 1985
          </p>
          <p className="mt-1 text-sm text-emerald-700">
            Certificate.now Verified
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <p>215 N Rodeo Dr, Beverly Hills</p>
            <p>Open today 10AM-6PM</p>
            <p>(310) 555-0123</p>
          </div>
          <div className="mt-4 flex gap-3">
            <button className="rounded-lg bg-emerald-800 px-4 py-2 text-sm font-medium">
              Get Directions
            </button>
            <button className="rounded-lg border border-vault-slate/50 px-4 py-2 text-sm">
              Call
            </button>
          </div>
        </div>

        {/* NFC Zone */}
        <div className="rounded-xl border border-vault-slate/50 bg-vault-slate/50 p-6 text-center">
          <p className="mb-4 font-medium">In-Store Verification</p>
          <p className="text-sm text-vault-cloud">
            Tap NFC to verify items here
          </p>
          <div className="my-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-vault-slate bg-vault-slate/30">
              <span className="text-xs font-medium text-vault-cloud">NFC</span>
            </div>
          </div>
          <p className="text-xs text-vault-cloud">
            Last verified: 2 minutes ago • 23 items verified today
          </p>
        </div>

        {/* Inventory */}
        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-vault-cloud">
            Current Inventory
          </h2>
          <div className="space-y-3">
            <Link
              href="/record/2"
              className="flex items-center gap-4 rounded-xl border border-vault-slate/50 bg-vault-slate/50 p-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-vault-slate text-xs font-bold text-vault-cloud">
                RS
              </div>
              <div className="flex-1">
                <p className="font-medium">Rolex Submariner</p>
                <p className="text-sm text-vault-cloud">
                  $14,500 • New • Box & Papers
                </p>
              </div>
              <span className="text-sm text-emerald-700">Verify →</span>
            </Link>
            <Link
              href="/record/3"
              className="flex items-center gap-4 rounded-xl border border-vault-slate/50 bg-vault-slate/50 p-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-vault-slate text-xs font-bold text-vault-cloud">
                PN
              </div>
              <div className="flex-1">
                <p className="font-medium">Patek Nautilus</p>
                <p className="text-sm text-vault-cloud">
                  $95,000 • Pre-owned • 2021
                </p>
              </div>
              <span className="text-sm text-emerald-700">Verify →</span>
            </Link>
          </div>
        </section>

        <Link
          href="/library"
          className="block text-center text-sm text-emerald-700"
        >
          View All 89 Items →
        </Link>
      </div>
    </div>
  );
}
