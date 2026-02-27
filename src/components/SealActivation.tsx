"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

const SealActivationContext = createContext(false);

/**
 * Adds data-seal-active="1" once when seal enters viewport.
 * Triggers one-time ring ripple (CSS keyframe).
 */
export function SealActivation({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let hasActivated = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasActivated) {
          hasActivated = true;
          setActive(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <SealActivationContext.Provider value={active}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </SealActivationContext.Provider>
  );
}

export function useSealActivation() {
  return useContext(SealActivationContext);
}
