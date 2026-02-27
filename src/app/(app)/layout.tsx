import { BottomNav } from "@/components/BottomNav";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-sovereign-900 text-vault-snow">
      <main className="mx-auto min-h-screen max-w-lg pb-20 lg:max-w-5xl">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
