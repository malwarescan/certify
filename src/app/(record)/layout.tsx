/**
 * Verification Record layout — light, slate, no gradients.
 * Stripe/Etherscan/Apple Developer portal energy.
 */
export default function RecordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-900">
      <main className="mx-auto w-full max-w-4xl">{children}</main>
    </div>
  );
}
