import { Container, Section } from "@/components/layout";

const steps = [
  { label: "Scan", desc: "Tap NFC or scan QR on item." },
  { label: "Verify", desc: "Registry confirms authenticity." },
  { label: "Share", desc: "Proof travels with the asset." },
  { label: "Accepted", desc: "Marketplaces accept everywhere." },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" variant="tight" className="border-y border-slate-200/80 bg-white">
      <Container>
        <div className="grid grid-cols-2 gap-6 gap-y-8 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 text-sm font-semibold text-slate-900">
                {step.label}
              </span>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
