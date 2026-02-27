"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, CheckIcon } from "@/components/Icons";

const categories = [
  { id: "all", label: "All" },
  { id: "gems", label: "Gems" },
  { id: "watches", label: "Watches" },
  { id: "jewelry", label: "Jewelry" },
  { id: "art", label: "Art" },
  { id: "bags", label: "Bags" },
];

const brands = [
  "T&Co",
  "Rolex",
  "Cartier",
  "Hermès",
  "Château",
  "Patek",
];

const products = [
  {
    id: 1,
    name: "Rolex Submariner",
    brand: "Rolex",
    price: "$12,500",
    verified: true,
    time: "2m ago",
    initials: "RS",
    height: "tall",
  },
  {
    id: 2,
    name: "Diamond Earrings",
    brand: "Tiffany",
    price: "$8,500",
    verified: true,
    time: "5m ago",
    initials: "DE",
    height: "short",
  },
  {
    id: 3,
    name: "Patek Nautilus",
    brand: "Patek Philippe",
    price: "$85,000",
    verified: true,
    time: "1h ago",
    initials: "PN",
    height: "tall",
  },
  {
    id: 4,
    name: "Emerald Ring",
    brand: "Cartier",
    price: "$45,000",
    verified: true,
    time: "3h ago",
    initials: "ER",
    height: "short",
  },
  {
    id: 5,
    name: "Cartier Love",
    brand: "Cartier",
    price: "$6,800",
    verified: true,
    time: "2h ago",
    initials: "CL",
    height: "tall",
  },
  {
    id: 6,
    name: "Vintage Wine",
    brand: "Château",
    price: "$3,200",
    verified: true,
    time: "3h ago",
    initials: "VW",
    height: "short",
  },
];

export default function LibraryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="space-y-4 px-4 pt-6">
      <div className="h-6" />

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-xl font-semibold">LIBRARY</h1>
        <button className="flex items-center gap-1 rounded-lg border border-vault-slate/50 px-3 py-1.5 text-sm text-vault-cloud">
          Filter
          <ChevronDownIcon className="h-4 w-4" />
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === cat.id
                ? "bg-emerald-800 text-white"
                : "border border-vault-slate/50 text-vault-cloud hover:bg-vault-slate/50"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Brands */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {brands.map((brand) => (
          <button
            key={brand}
            className="shrink-0 rounded-lg border border-vault-slate/50 bg-vault-slate/30 px-3 py-2 text-xs font-medium text-vault-cloud transition-colors hover:bg-vault-slate/50"
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Pinboard Grid */}
      <div className="columns-2 gap-3 pb-8">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/record/${p.id}`}
            className="mb-3 block break-inside-avoid transition-transform active:scale-[0.98]"
          >
            <div
              className={cn(
                "overflow-hidden rounded-xl border border-vault-slate/50 bg-vault-slate/50",
                p.height === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
              )}
            >
              <div className="flex h-full flex-col items-center justify-center p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-vault-slate text-2xl font-bold text-vault-cloud">
                  {p.initials}
                </div>
                <p className="mt-2 text-center text-sm font-medium">{p.name}</p>
                <p className="text-xs text-vault-cloud">{p.price}</p>
                <div className="mt-2 flex items-center gap-1 text-emerald-700">
                  <CheckIcon className="h-3.5 w-3.5" />
                  <span className="text-xs">Verified</span>
                  <span className="text-xs text-vault-cloud">• {p.time}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
