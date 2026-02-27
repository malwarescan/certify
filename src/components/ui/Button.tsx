import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "gold" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary:
    "bg-white text-slate-700 border border-slate-300 shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:bg-slate-50 hover:border-slate-400 active:shadow-none",
  gold:
    "bg-amber-400 text-slate-900 shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:bg-amber-300 hover:shadow-[0_2px_4px_rgba(0,0,0,0.12)] active:shadow-[0_1px_2px_rgba(0,0,0,0.08)]",
  ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
};

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap select-none disabled:opacity-50 disabled:pointer-events-none",
        variant === "primary" ? "" : "rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
