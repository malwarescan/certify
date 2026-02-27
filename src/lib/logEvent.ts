/**
 * Central event logging — routes to PostHog/Segment/Supabase without refactoring.
 * Replace console.* with this for audit trail.
 */

type LogEventPayload = Record<string, unknown>;

export function logEvent(
  event: string,
  payload?: LogEventPayload
): void {
  const data = {
    event,
    ...payload,
    timestamp: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    // TODO: PostHog posthog.capture(event, payload)
    // TODO: Segment analytics.track(event, payload)
    // TODO: Supabase log insert
    // Dev: structured output for debugging
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.debug("[logEvent]", data);
    }
  }
}
