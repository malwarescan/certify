import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
import { getRecord } from "@/lib/verification-record-data";
import HolographicSeal from "@/components/HolographicSeal";
import { SealActivation } from "@/components/SealActivation";
import { RecordStatusBanner } from "@/components/RecordStatusBanner";
import { RecordProofBlock } from "@/components/RecordProofBlock";
import { RecordOwnershipTable } from "@/components/RecordOwnershipTable";
import { RecordQR } from "@/components/RecordQR";
import { DirectAccessBanner } from "@/components/DirectAccessBanner";

export default async function RecordPage({
  params,
}: {
  params: { id: string };
}) {
  const record = getRecord(params.id);
  if (!record) return null;

  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const proto = headersList.get("x-forwarded-proto") ?? "http";
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    (host ? `${proto}://${host}` : null) ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
    "https://certificate.now";

  return (
    <div className="min-h-screen w-full">
      {/* A) Header */}
      <header className="border-b border-slate-200 bg-white px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-900 hover:text-slate-700"
          >
            certnow
          </Link>
          <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Verification Record
          </span>
        </div>
      </header>

      <div className="space-y-8 px-4 py-8 sm:px-6 sm:py-10">
        {/* B) Status Banner */}
        <RecordStatusBanner
          recordId={record.id}
          timestamp={record.createdAt}
          chain={record.anchor.chain}
          contract={record.anchor.contract}
          txHash={record.anchor.txHash}
        />

        {/* C) Core Product Panel */}
        <div className="grid gap-0 rounded-lg border border-slate-200 bg-white sm:grid-cols-2">
          {/* Left: Product Identity */}
          <div className="border-b border-slate-200 p-6 sm:border-b-0 sm:border-r sm:p-8">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Product Identity
            </h2>
            {/* Brand + logo from public/brands/{slug}-verify/ */}
            <div className="mb-6 flex items-center gap-3">
              <Image
                src={record.product.logoPath}
                alt={record.product.brand}
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <span className="font-semibold text-slate-900">
                {record.product.brand}
              </span>
            </div>
            {/* Product images gallery */}
            {record.product.images && record.product.images.length > 0 && (
              <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {record.product.images.map((src, i) => (
                  <div
                    key={src}
                    className="aspect-square overflow-hidden rounded-lg border border-slate-200"
                  >
                    <Image
                      src={src}
                      alt={`${record.product.name} — ${i + 1}`}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-slate-500">Product Name</dt>
                <dd className="font-medium text-slate-900">
                  {record.product.name}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Origin</dt>
                <dd>{record.product.origin}</dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                  {record.product.material}
                </span>
                <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                  {record.product.category}
                </span>
              </div>
              <div>
                <dt className="text-slate-500">SKU</dt>
                <dd className="font-mono text-slate-700">
                  {record.product.sku}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Collection</dt>
                <dd>{record.product.collection}</dd>
              </div>
            </dl>
          </div>

          {/* Right: Seal + Proof confidence */}
          <div className="flex flex-col items-center justify-center border-t border-slate-200 p-8 sm:border-t-0 sm:border-l-0">
            <SealActivation className="record-seal flex justify-center">
              <HolographicSeal size="lg" />
            </SealActivation>
            <p className="mt-3 text-xs font-medium text-[var(--verity-emerald)]">
              Registry-confirmed
            </p>
            <p className="text-xs text-slate-500">Cryptographically bound</p>
            {/* Proof confidence microline */}
            <ul className="mt-2 space-y-0.5 text-[11px] text-[var(--verity-emerald)]">
              <li>Cryptographic binding: valid</li>
              <li>Signature: valid</li>
              <li>Ownership chain: intact</li>
            </ul>
            <Link
              href={`https://etherscan.io/tx/${record.anchor.txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              View On-Chain Proof
            </Link>
          </div>
        </div>

        {/* D) Proof Details */}
        <RecordProofBlock
          hash={record.cryptography.hash}
          hashFull={record.cryptography.hashFull}
          signature={record.cryptography.signature}
          signatureFull={record.cryptography.signatureFull}
          blockNumber={`Block #${record.anchor.blockNumber}`}
          tokenId={record.id.split("-").pop() ?? "—"}
        />

        {/* E) Ownership Chain */}
        <div className="rounded-lg border border-slate-200 bg-white px-6 py-6 sm:px-8 sm:py-8">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Ownership History
          </h2>
          <RecordOwnershipTable entries={record.ownershipChain} />
        </div>

        {/* F) Physical Instructions */}
        <div className="rounded-lg border border-slate-200 bg-white px-6 py-6 sm:px-8 sm:py-8">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
            How to verify this product physically
          </h2>
          <ol className="list-inside list-decimal space-y-2 text-sm text-slate-700">
            <li>
              Tap NFC tag on the asset → opens this record → compare Record ID
            </li>
            <li>Scan QR code below → opens this record → compare Record ID</li>
            <li>Confirm Record ID matches exactly</li>
          </ol>
          <p className="mt-2 text-xs font-medium text-slate-600">
            If the Record ID doesn&apos;t match: treat as counterfeit.
          </p>
          <div className="mt-6 flex flex-wrap gap-6">
            <div className="flex flex-col items-center gap-2">
              <RecordQR
                url={`${baseUrl}/record/${params.id}`}
                size={128}
              />
              <span className="text-[10px] text-slate-500">
                Scan to open this record
              </span>
            </div>
            <div className="flex h-[128px] w-[128px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200 bg-slate-50">
              <span className="text-xs font-medium text-slate-400">NFC</span>
              <span className="mt-1 text-[10px] text-slate-400">
                Tap on asset
              </span>
            </div>
          </div>
        </div>

        {/* G) Anti-Fraud */}
        {record.accessContext.accessedDirectly && (
          <DirectAccessBanner
            recordId={record.id}
            reasonCode={record.accessContext.reasonCode}
          />
        )}

        {/* Back link */}
        <div className="pt-4">
          <Link
            href="/library"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            ← Back to Library
          </Link>
        </div>
      </div>
    </div>
  );
}
