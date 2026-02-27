import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Tight shadow (Trust Mark Spec: material-like) */
  variant?: "default" | "elevated";
}

const variantStyles = {
  default: "shadow-[0_1px_2px_rgba(0,0,0,0.08)]",
  elevated: "shadow-[0_2px_4px_rgba(0,0,0,0.12)]",
};

export function Card({
  children,
  className,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-slate-200 bg-white",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
