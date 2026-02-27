/**
 * Certificate.now Design Tokens
 * Single source of truth. No inline random values.
 * See docs/TRUST_MARK_SPEC.md for usage rules.
 */

export const tokens = {
  colors: {
    sovereignNavy: "#0F172A",
    navyInk: "#020617",
    cert: {
      50: "#EFF6FF",
      100: "#DBEAFE",
      200: "#BFDBFE",
      300: "#93C5FD",
      400: "#60A5FA",
      500: "#3B82F6",
      600: "#2563EB",
      700: "#1D4ED8",
      800: "#1E40AF",
      900: "#1E3A8A",
    },
    truthBit: "#10B981",
    emerald: {
      400: "#34D399",
      500: "#10B981",
      600: "#059669",
    },
    snow: "#F8FAFC",
    titanium: "#94A3B8",
    gold: "#F59E0B",
    aura: {
      stop1: "#1D2B64",
      stop2: "#2B6DEB",
      stop3: "#7C4DFF",
      angle: "135deg",
    },
  },
  typography: {
    headline: { weight: 800, tracking: "-0.03em" },
    heading: { weight: 700, tracking: "-0.03em" },
    microLabel: { weight: 600, tracking: "0.08em" },
    microLabelWide: { weight: 600, tracking: "0.12em" },
    body: { weight: 400, tracking: "0" },
    bodySemibold: { weight: 600, tracking: "0" },
    tabular: { weight: 700, tracking: "tight" },
  },
  spacing: {
    unit: 8,
    radiusSm: 6,
    radiusMd: 10,
    radiusLg: 12,
    sectionGap: 56,
    sectionGapLg: 80,
  },
  shadows: {
    tight: "0 1px 2px rgba(0,0,0,0.08)",
    panel: "0 2px 4px rgba(0,0,0,0.12)",
    dial: "0 4px 8px rgba(0,0,0,0.15)",
  },
} as const;
