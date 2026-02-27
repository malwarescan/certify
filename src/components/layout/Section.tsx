import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Hero variant: pt-16 sm:pt-20 lg:pt-24, pb-10 sm:pb-12 lg:pb-14 */
  variant?: "default" | "hero" | "tight";
}

const variantStyles = {
  default: "py-14 sm:py-16 lg:py-20",
  hero: "pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-14",
  tight: "py-10 sm:py-12 lg:py-14",
};

export function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section id={id} className={cn(variantStyles[variant], className)}>
      {children}
    </section>
  );
}
