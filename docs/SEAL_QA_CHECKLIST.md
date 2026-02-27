# Seal Rotor QA Checklist

## Debug Mode

Set `NEXT_PUBLIC_SEAL_DEBUG=1` in `.env.local` and restart the dev server.

### With debug ON (6s / 9s)

- [ ] Rotation is obvious within 1 second
- [ ] White notch visible on outer ring (12 o'clock)
- [ ] 1px white dot visible on inner ring (12 o'clock)
- [ ] Provide: 1 screenshot (notch visible)
- [ ] Provide: 1 five-second screen recording

### With debug OFF (60s / 90s)

- [ ] Subtle notch on outer ring (tracking detail)
- [ ] Rotation detectable within 5–8 seconds by watching the notch
- [ ] Provide: 1 five-second screen recording showing subtle movement

## DevTools Verification

If rotation is unclear:

1. Inspect `.seal__rotor` in Chrome DevTools
2. Confirm `animation-name: seal-rotate` and animation is running (not paused)
3. Confirm computed `transform` changes over time
4. If transform is static → check for CSS override/specificity

## Ship Gate

- [ ] Outer ring rotates smoothly (60s production)
- [ ] Inner ring counter-rotates smoothly (90s production)
- [ ] Checkmark stays centered and does not drift
- [ ] `prefers-reduced-motion` disables all seal animation
