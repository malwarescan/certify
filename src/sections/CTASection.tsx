"use client";

import Link from "next/link";
import { Container, Section } from "@/components/layout";

const trustItems = [
  "No credit card required",
  "14-day free trial",
  "Cancel anytime",
];

export default function CTASection() {
  return (
    <Section className="bg-slate-50 py-16 lg:py-20">
      <Container narrow>
        <div
          className="cta-panel relative rounded-2xl px-6 py-16 text-center sm:px-10 lg:py-20"
          style={{
            background:
              "linear-gradient(135deg, #111827 0%, #1F2937 58%, #1E3A8A 100%)",
          }}
        >
          <div className="relative z-10">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ready to install the standard?
            </h2>
            <p className="mx-auto mb-6 max-w-[48ch] text-sm leading-relaxed text-slate-300">
              Adopt infrastructure-grade authenticity for your brand.
            </p>

            <div className="cta-row flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link href="/vault" className="btn-primary w-full max-w-[520px]">
                Start Free Trial
              </Link>
              <Link
                href="#"
                className="flex h-12 w-full items-center justify-center rounded-[14px] border border-white/20 bg-transparent px-8 font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5 sm:h-[52px] sm:w-auto"
              >
                Schedule Demo
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
              {trustItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
