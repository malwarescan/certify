import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Custom max-width; default max-w-6xl */
  narrow?: boolean;
}

export function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-10",
        narrow ? "max-w-[1120px]" : "max-w-6xl",
        className
      )}
    >
      {children}
    </div>
  );
}
