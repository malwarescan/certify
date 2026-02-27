import { cn } from "@/lib/utils";

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  /** Optional title for proof/detail panels */
  title?: string;
}

export function Panel({ children, className, title }: PanelProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-slate-200 bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.12)]",
        className
      )}
    >
      {title && (
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
