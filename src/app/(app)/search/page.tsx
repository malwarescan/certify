"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SearchIcon } from "@/components/Icons";

const categories = [
  "All Categories",
  "Gems & Diamonds",
  "Watches",
  "Fine Jewelry",
  "Handbags & Accessories",
  "Wine & Spirits",
  "Art & Collectibles",
];

const brands = [
  "Rolex",
  "Patek Philippe",
  "Audemars Piguet",
  "Cartier",
  "Omega",
  "TAG Heuer",
];

export default function SearchPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-6 px-4 pt-6">
      <div className="h-6" />

      <h1 className="font-serif text-xl font-semibold">SEARCH</h1>

      {/* Search Input */}
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-vault-cloud" />
        <input
          type="text"
          placeholder="Search products, brands..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-vault-slate/50 bg-vault-slate/50 py-3 pl-10 pr-4 text-vault-snow placeholder:text-vault-cloud focus:border-sovereign-700 focus:outline-none"
        />
      </div>

      {/* Active Filters */}
      <div className="rounded-lg border border-vault-slate/50 bg-vault-slate/30 px-4 py-3">
        <p className="text-sm text-vault-cloud">
          Watches • $5K-$50K • Verified
        </p>
        <button className="mt-1 text-xs text-emerald-700">Clear All</button>
      </div>

      {/* Sort */}
      <section>
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-vault-cloud">
          Sort By
        </h2>
        <div className="flex gap-2">
          {["Recent", "Value", "Brand", "4Cs"].map((sort, i) => (
            <button
              key={sort}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                i === 0
                  ? "bg-emerald-800 text-white"
                  : "border border-vault-slate/50 text-vault-cloud hover:bg-vault-slate/50"
              )}
            >
              {sort}
            </button>
          ))}
        </div>
      </section>

      {/* Category */}
      <section>
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-vault-cloud">
          Category
        </h2>
        <div className="space-y-2">
          {categories.map((cat, i) => (
            <label
              key={cat}
              className="flex items-center gap-3 rounded-lg border border-vault-slate/50 bg-vault-slate/30 px-4 py-3"
            >
              <input
                type="checkbox"
                defaultChecked={i === 0 || i === 2}
                className="rounded border-vault-slate text-emerald-800 focus:ring-emerald-800"
              />
              <span className="text-sm">{cat}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Brand */}
      <section>
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-vault-cloud">
          Brand
        </h2>
        <div className="space-y-2">
          {brands.slice(0, 4).map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-3 rounded-lg border border-vault-slate/50 bg-vault-slate/30 px-4 py-3"
            >
              <input
                type="checkbox"
                defaultChecked={brand === "Rolex" || brand === "Patek Philippe"}
                className="rounded border-vault-slate text-emerald-800 focus:ring-emerald-800"
              />
              <span className="text-sm">{brand}</span>
            </label>
          ))}
          <p className="text-center text-xs text-vault-cloud">+ 42 more...</p>
        </div>
      </section>

      {/* Price Range */}
      <section>
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-vault-cloud">
          Price Range
        </h2>
        <div className="rounded-lg border border-vault-slate/50 bg-vault-slate/30 p-4">
          <input
            type="range"
            min="0"
            max="100000"
            defaultValue="50000"
            className="w-full accent-emerald-800"
          />
          <p className="mt-2 text-center text-sm text-vault-cloud">
            $5K – $50K
          </p>
        </div>
      </section>

      {/* Verification */}
      <section>
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-vault-cloud">
          Verification Status
        </h2>
        <div className="space-y-2">
          {["All", "Verified only", "With certificates", "Recently added"].map(
            (opt, i) => (
              <label
                key={opt}
                className="flex items-center gap-3 rounded-lg border border-vault-slate/50 bg-vault-slate/30 px-4 py-3"
              >
                <input
                  type="radio"
                  name="verification"
                  defaultChecked={i === 0}
                  className="border-vault-slate text-emerald-800 focus:ring-emerald-800"
                />
                <span className="text-sm">{opt}</span>
              </label>
            )
          )}
        </div>
      </section>

      {/* Apply */}
      <div className="space-y-4 pb-12">
        <button className="w-full rounded-xl bg-emerald-800 py-4 font-semibold text-white transition-colors hover:bg-emerald-700">
          Apply Filters
        </button>
        <p className="text-center text-sm text-vault-cloud">
          247 results match your criteria
        </p>
      </div>
    </div>
  );
}
