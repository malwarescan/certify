"use client";

import { Fragment, useState } from "react";
import type { OwnershipEntry } from "@/lib/verification-record-data";

type RecordOwnershipTableProps = {
  entries: OwnershipEntry[];
};

export function RecordOwnershipTable({ entries }: RecordOwnershipTableProps) {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  if (!entries || entries.length === 0) {
    return (
      <p className="text-sm text-slate-500">Ownership data not public.</p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-slate-500">
            <th className="pb-2 pr-4 font-medium">Owner</th>
            <th className="pb-2 pr-4 font-medium">Date</th>
            <th className="pb-2 pr-4 font-medium">Transfer Type</th>
            <th className="pb-2 pr-4 font-medium">Transfer Event ID</th>
            <th className="pb-2 font-medium">Verified By</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((row, i) => (
            <Fragment key={i}>
              <tr
                className="cursor-pointer border-b border-slate-100 transition-colors hover:bg-slate-50"
                onClick={() => setExpandedRow(expandedRow === i ? null : i)}
              >
                <td className="py-2 pr-4 font-mono">{row.ownerLabel}</td>
                <td className="py-2 pr-4 font-mono">{row.date}</td>
                <td className="py-2 pr-4">{row.type}</td>
                <td className="py-2 pr-4 font-mono text-slate-500">
                  {row.transferEventId || "—"}
                </td>
                <td className="py-2">{row.verifiedBy || "—"}</td>
              </tr>
              {expandedRow === i && (
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td colSpan={5} className="px-4 py-2">
                    <div className="text-xs text-slate-600">
                      {row.anchor && <div>Anchor: {row.anchor}</div>}
                      <div>Transfer event recorded on registry.</div>
                    </div>
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
