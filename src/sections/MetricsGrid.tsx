"use client";

import Link from "next/link";
import { Container, Section } from "@/components/layout";

interface Metric {
  value: string;
  label: string;
  qualifier: string;
}

const metrics: Metric[] = [
  { value: "2M+", label: "Items certified", qualifier: "Last 30 days" },
  { value: "$4.2B", label: "Total value", qualifier: "Rolling 30 days" },
  { value: "99.9%", label: "Accuracy rate", qualifier: "Registry-confirmed" },
];

export default function MetricsGrid() {
  return (
    <Section className="border-y border-slate-200/80 bg-slate-50 py-16 lg:py-24">
      <Container className="mt-6">
        <div className="mb-8">
          <h2 className="text-base font-bold text-slate-900">
            Registry Overview
          </h2>
          <p className="mt-0.5 text-sm text-slate-600">
            Real-time certification metrics
          </p>
          <Link
            href="/vault"
            className="link-aura mt-3 inline-block rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-500 transition-colors hover:bg-white"
          >
            View report
          </Link>
        </div>

        <div className="grid gap-5 md:gap-6 lg:gap-8 md:grid-cols-3">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-slate-300"
            >
              <p className="text-4xl font-extrabold tabular-nums tracking-[-0.02em] text-slate-900 lg:text-5xl">
                {metric.value}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                {metric.label}
              </p>
              <div className="mt-4 border-t border-slate-100 pt-4">
                <span className="text-xs text-slate-500">
                  {metric.qualifier}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Insight - subtle signal, not alert */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-slate-200 border-l-2 border-l-emerald-500/50 bg-white p-4">
          <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center">
            <svg
              className="h-4 w-4 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Authenticity Insight
            </p>
            <p className="mt-1 text-sm text-slate-700">
              Certification volume up 23% in luxury watch category.{" "}
              <Link
                href="/search"
                className="link-aura underline underline-offset-4 hover:underline"
              >
                View trending
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
