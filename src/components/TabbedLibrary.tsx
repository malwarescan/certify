"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckIcon } from "@/components/Icons";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "items", label: "My Items" },
  { id: "verified", label: "Recently Verified" },
  { id: "trending", label: "Trending" },
  { id: "brands", label: "Brands" },
  { id: "stores", label: "Stores" },
];

const items = [
  {
    id: 1,
    name: "Diamond Ring",
    brand: "Tiffany & Co.",
    price: "$12,500",
    verified: "2m ago",
    initials: "DR",
  },
  {
    id: 2,
    name: "Rolex Submariner",
    brand: "2021",
    price: "$8,200",
    verified: "1h ago",
    initials: "RS",
  },
  {
    id: 3,
    name: "Cartier Love Bracelet",
    brand: "Cartier",
    price: "$6,800",
    verified: "3h ago",
    initials: "CL",
  },
];

export function TabbedLibrary() {
  const [activeTab, setActiveTab] = useState("items");

  return (
    <div className="rounded-xl border border-cert-slate-200 bg-white shadow-sm">
      <div className="flex gap-1 border-b border-cert-slate-200 p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              activeTab === tab.id
                ? "bg-cert-slate-100 text-cert-slate-900"
                : "text-cert-slate-600 hover:bg-cert-slate-50 hover:text-cert-slate-900"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="divide-y divide-cert-slate-100">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/record/${item.id}`}
            className="flex items-center justify-between p-4 transition-colors hover:bg-cert-slate-50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cert-slate-100 text-sm font-bold text-cert-slate-600">
                {item.initials}
              </div>
              <div>
                <p className="font-medium text-cert-slate-900">{item.name}</p>
                <p className="text-sm text-cert-slate-500">
                  {item.price} - {item.brand}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-sm text-emerald-600">
                <CheckIcon className="h-4 w-4" />
                Verified {item.verified}
              </span>
              <span className="text-sm font-medium text-cert-blue-600">
                View -
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
