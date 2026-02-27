import { DashboardMetricsGrid } from "@/components/DashboardMetricsGrid";
import { InsightsFeed } from "@/components/InsightsFeed";
import { TabbedLibrary } from "@/components/TabbedLibrary";

export default function VaultPage() {
  return (
    <div className="min-h-screen bg-cert-slate-50 px-4 py-6 md:rounded-t-xl">
      <div className="mx-auto max-w-5xl">
        <DashboardMetricsGrid />

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <TabbedLibrary />
          </div>
          <div className="lg:col-span-1">
            <InsightsFeed />
          </div>
        </div>
      </div>
    </div>
  );
}
