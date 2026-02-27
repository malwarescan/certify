import Link from "next/link";
import { LibraryIcon } from "@/components/Icons";

export default function BrandPage({
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
          {slug.toUpperCase()}
        </h1>
      </div>

      <div className="space-y-6 px-4 pt-6">
        {/* Hero */}
        <div className="flex aspect-[16/9] flex-col items-center justify-center rounded-2xl border border-vault-slate/50 bg-vault-slate/50">
          <LibraryIcon className="h-16 w-16 text-vault-cloud" />
          <p className="mt-2 font-serif text-lg italic text-vault-cloud">
            A Crown for Every Achievement
          </p>
          <div className="mt-4 flex gap-3">
            <button className="rounded-lg bg-emerald-800 px-4 py-2 text-sm font-medium">
              Follow Brand
            </button>
            <button className="rounded-lg border border-vault-slate/50 px-4 py-2 text-sm">
              Visit Store →
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { value: "2,847", label: "Items" },
            { value: "$2.1B", label: "Value" },
            { value: "98%", label: "Verify" },
            { value: "156", label: "Years" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-vault-slate/50 bg-vault-slate/50 p-3 text-center"
            >
              <p className="font-semibold">{stat.value}</p>
              <p className="text-[10px] text-vault-cloud">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Collections */}
        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-vault-cloud">
            Collections
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: "Submariner", count: 523 },
              { name: "Daytona", count: 412 },
              { name: "GMT-Master", count: 298 },
              { name: "Datejust", count: 891 },
              { name: "Oyster", count: 623 },
              { name: "Vintage", count: 200 },
            ].map((col) => (
              <div
                key={col.name}
                className="rounded-xl border border-vault-slate/50 bg-vault-slate/50 p-4 text-center"
              >
                <p className="font-medium">{col.name}</p>
                <p className="text-xs text-vault-cloud">{col.count} items</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured */}
        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-vault-cloud">
            Featured Items
          </h2>
          <div className="space-y-3">
            <Link
              href="/record/2"
              className="flex items-center gap-4 rounded-xl border border-vault-slate/50 bg-vault-slate/50 p-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-vault-slate text-xs font-bold text-vault-cloud">
                DR
              </div>
              <div className="flex-1">
                <p className="font-medium">Daytona Rainbow</p>
                <p className="text-sm text-vault-cloud">$385K • Verified 1h ago</p>
              </div>
              <span className="text-emerald-700">View →</span>
            </Link>
            <Link
              href="/record/2"
              className="flex items-center gap-4 rounded-xl border border-vault-slate/50 bg-vault-slate/50 p-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-vault-slate text-xs font-bold text-vault-cloud">
                SH
              </div>
              <div className="flex-1">
                <p className="font-medium">Submariner Hulk</p>
                <p className="text-sm text-vault-cloud">$18,500 • Verified 3h ago</p>
              </div>
              <span className="text-emerald-700">View →</span>
            </Link>
          </div>
        </section>

        <Link
          href="/library"
          className="block text-center text-sm text-emerald-700"
        >
          Browse All Items →
        </Link>
      </div>
    </div>
  );
}
