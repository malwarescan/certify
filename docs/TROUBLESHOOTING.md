# When the site breaks

## Quick fix (run this first)

```bash
rm -rf .next && npm run dev
```

Or: `npm run dev:clean`

## Common causes

| Symptom | Fix |
|---------|-----|
| `__webpack_modules__[moduleId] is not a function` | Corrupted cache. Run `rm -rf .next` then `npm run dev` |
| Blank page / wrong styles | Hard refresh (Cmd+Shift+R) or clear .next |
| Dev server won't start | Kill any process on port 3000: `lsof -ti:3000 \| xargs kill -9` |
| Styling looks wrong | Ensure you're on `/` (home) not `/library` (dark app) |

## Nuclear option

```bash
rm -rf .next node_modules/.cache
npm run build
```

If it still breaks, the error message in the terminal or browser console will tell you what's wrong.
