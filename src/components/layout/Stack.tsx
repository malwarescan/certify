import { cn } from "@/lib/utils";

type GapScale = 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;

interface StackProps {
  children: React.ReactNode;
  className?: string;
  gap?: GapScale;
  direction?: "col" | "row";
}

const gapMap: Record<GapScale, string> = {
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
};

export function Stack({
  children,
  className,
  gap = 4,
  direction = "col",
}: StackProps) {
  return (
    <div
      className={cn(
        "flex",
        direction === "col" ? "flex-col" : "flex-row",
        gapMap[gap],
        className
      )}
    >
      {children}
    </div>
  );
}
