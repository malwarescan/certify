"use client";

import { cn } from "@/lib/utils";

const metrics = [
  {
    value: "$47,500",
    label: "TOTAL VALUE",
    change: "+ 8.2% this month",
    trend: "up",
  },
  {
    value: "12",
    label: "ITEMS",
    change: "+ 2 new this month",
    trend: "up",
  },
  {
    value: "100%",
    label: "VERIFIED",
    change: "Authentic guaranteed",
    trend: "neutral",
  },
];

const breakdown = [
  { label: "Gems", value: 68, color: "bg-cert-blue-600" },
  { label: "Watches", value: 25, color: "bg-cert-gold" },
  { label: "Jewelry", value: 6, color: "bg-cert-emerald" },
];

export function DashboardMetricsGrid() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="section-title">My Vault Dashboard</h2>
        <select className="rounded-lg border border-cert-slate-200 bg-white px-3 py-1.5 text-sm text-cert-slate-600">
          <option>Last 30 days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-xl border border-cert-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="data-number">{m.value}</p>
            <div className="my-2 h-px w-12 bg-cert-slate-200" />
            <p className="data-label">{m.label}</p>
            <p
              className={cn(
                "mt-2 text-xs font-medium",
                m.trend === "up" && "text-emerald-600",
                m.trend === "down" && "text-rose-600",
                m.trend === "neutral" && "text-cert-slate-500"
              )}
            >
              {m.change}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-cert-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 data-label">VALUE BREAKDOWN</h3>
        <div className="space-y-3">
          {breakdown.map((b) => (
            <div key={b.label}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-cert-slate-600">{b.label}</span>
                <span className="font-medium text-cert-slate-900">{b.value}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-cert-slate-100">
                <div
                  className={cn("h-full rounded-full transition-all", b.color)}
                  style={{ width: `${b.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
