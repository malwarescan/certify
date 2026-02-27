"use client";

import Link from "next/link";
import { ChartIcon, BellIcon } from "@/components/Icons";

const insights = [
  {
    icon: ChartIcon,
    title: "Your collection value increased 8.2%",
    subtitle: "Consider updating insurance coverage",
    action: "Update Policy",
    href: "#",
  },
  {
    icon: BellIcon,
    title: "3 items need appraisal renewal",
    subtitle: "Expires within 30 days",
    action: "Schedule Now",
    href: "#",
  },
  {
    icon: ChartIcon,
    title: "Trending in your network",
    subtitle: "5 Rolex Submariners verified this week",
    action: "View Trend",
    href: "#",
  },
];

export function InsightsFeed() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="section-title">AI-Powered Insights</h2>
        <Link
          href="#"
          className="text-sm font-medium text-cert-blue-600 hover:text-cert-blue-700"
        >
          View All
        </Link>
      </div>

      <div className="space-y-3">
        {insights.map((insight) => (
          <div
            key={insight.title}
            className="rounded-lg border-l-4 border-cert-blue-500 bg-cert-blue-50 p-4"
          >
            <div className="flex gap-3">
              <insight.icon className="h-5 w-5 shrink-0 text-cert-blue-500" />
              <div>
                <p className="insight-text font-medium text-cert-slate-900">
                  {insight.title}
                </p>
                <p className="insight-text mt-0.5 text-cert-slate-600">
                  {insight.subtitle}
                </p>
                <Link
                  href={insight.href}
                  className="mt-2 inline-block text-sm font-medium text-cert-blue-600 hover:text-cert-blue-700"
                >
                  {insight.action} -
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
