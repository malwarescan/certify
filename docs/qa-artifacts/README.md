# P0 Seal QA Artifacts

## Generate Artifacts

**Prerequisites:** Dev server running (`npm run dev`)

### Debug mode (5s video)
```bash
# Ensure .env.local has NEXT_PUBLIC_SEAL_DEBUG=1, restart dev server
DEBUG=1 node scripts/qa-seal-artifacts.mjs
```

### Prod mode (10s video)
```bash
# Set NEXT_PUBLIC_SEAL_DEBUG=0 in .env.local, RESTART dev server
DEBUG=0 node scripts/qa-seal-artifacts.mjs
```

## Output

- `seal-computed-styles-debug.txt` / `seal-computed-styles-prod.txt` — computed styles for `.seal__rotor`
- `*.webm` — screen recordings (Playwright auto-names)

## Manual: DevTools Screenshot

1. Open page, inspect `.seal__rotor`
2. Computed tab → filter for `animation`
3. Screenshot showing: `animation-name: seal-rotate`, `animation-duration`, `animation-play-state: running`
