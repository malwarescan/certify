import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import MetricsGrid from "@/sections/MetricsGrid";
import CTASection from "@/sections/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <div className="hero-plate">
        <Header />
        <Hero />
      </div>
      <main className="flex flex-1 flex-col bg-slate-50">
        <MetricsGrid />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
