import Link from "next/link";
import HolographicSeal from "@/components/HolographicSeal";
import { SealActivation } from "@/components/SealActivation";
import { Container, Section } from "@/components/layout";

const processSteps = [
  { label: "Scan", verified: false },
  { label: "Verify", verified: true },
  { label: "Share", verified: false },
  { label: "Accepted", verified: false },
];

export default function Hero() {
  return (
    <Section variant="hero" className="relative">
      {/* Pattern - near-silent; felt not seen */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundColor: "rgba(245, 246, 252, 0.2)",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 120% 100% at 50% 35%, transparent 40%, black 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 120% 100% at 50% 35%, transparent 40%, black 75%)",
        }}
      />

      <Container className="relative">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left: Content */}
          <div className="order-1 flex flex-col lg:max-w-xl">
            <p className="hero-eyebrow mb-2 text-xs font-bold uppercase tracking-[0.10em] text-slate-500">
              Certified Authenticity Intelligence
            </p>

            <h1 className="hero-headline mb-4 flex max-w-[520px] flex-col gap-2 text-[44px] leading-[0.95] tracking-[-0.03em] text-slate-900 sm:text-[56px] sm:leading-[0.95] lg:text-[72px] lg:leading-[0.95]">
              <span className="font-extrabold text-slate-950 tracking-tight">
                PROOF, NOT PROMISES.
              </span>
            </h1>

            <p className="mb-6 max-w-[560px] text-base font-medium leading-[1.5] text-slate-700">
              Cryptographic verification for physical assets.
              <span className="block mt-1 text-slate-600">
                Permanent. Transferable. Verifiable.
              </span>
            </p>

            {/* CTAs - full width on mobile */}
            <div className="hero-cta-row mb-6 flex flex-col gap-3 sm:flex-row sm:gap-5">
              <Link
                href="/verify"
                className="btn-primary is-full sm:w-auto sm:min-w-[180px]"
              >
                Start Verifying
              </Link>
              <Link
                href="#how-it-works"
                className="btn-secondary is-full sm:w-auto sm:min-w-[180px]"
              >
                View Demo
              </Link>
            </div>

            {/* Process rail - product story, grid alignment */}
            <div className="mb-5">
              <div className="process-rail">
                {processSteps.map((step) => (
                  <div key={step.label} className="process-step">
                    <span
                      className={`process-node ${step.verified ? "is-verified" : ""}`}
                    />
                    <span
                      className={`process-label ${step.verified ? "is-verified" : ""}`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-2 text-xs text-slate-500">
                <Link href="/verify" className="hover:text-slate-700">
                  Scan (NFC/QR) on the verification surface
                </Link>
              </div>
            </div>

            {/* Trust bullets - 2x2, baseline aligned */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-600">
              {[
                "Bank-grade NFC",
                "Registry-backed",
                "Cryptographic binding",
                "Resale-ready proof",
              ].map((badge) => (
                <span key={badge} className="flex items-baseline gap-2">
                  <svg
                    className="h-4 w-4 flex-shrink-0 text-[var(--verity-emerald)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">{badge}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right: Seal — graphic group (hover tilt) + label (outside transform, no warp) */}
          <SealActivation className="seal-anchor order-2 flex flex-col items-center pt-4 lg:order-2 lg:pt-[18px]">
            <div className="flex flex-shrink-0">
              <HolographicSeal size="hero" />
            </div>
            {/* Micro-label — outside seal transform context */}
            <div className="mt-1 hidden text-center lg:block">
              <p className="seal-stamp__kicker">
                Verification Seal
              </p>
              <p className="seal-stamp__state">
                <span>Registry-</span>
                <span className="is-verified">confirmed</span>
              </p>
            </div>
          </SealActivation>
        </div>
      </Container>
    </Section>
  );
}
