

## Diagnosis: Intermittent ErrorBoundary Crash

### Finding
After extensive review of all code paths on the `/` route, **no deterministic crash source was found**. Every async operation (Firebase auth, Firestore queries, Supabase calls) has proper try-catch or fallback handling. The session replay shows animations running (hero rendering), confirming the page initially loads before something crashes asynchronously.

The most likely cause is an **intermittent Firebase connectivity issue** or a race condition during lazy component loading.

### Plan: Add defensive measures to prevent future crashes

**1. Wrap the homepage lazy sections in individual ErrorBoundaries** (`AntigravityIndex.tsx`)
- Each `<Suspense>` child section (EmergencyProviders, FeaturedProviders, AnimatedMap, etc.) gets its own `<ErrorBoundary fallback={null}>` so a single section failure doesn't take down the entire page.

**2. Add a global `window.onerror` / `unhandledrejection` logger** (`src/main.tsx`)
- Capture errors that happen outside React's tree (module load failures, unhandled promise rejections) and log them to console so we can see them next time.

**3. Improve ErrorBoundary console logging** (`ErrorBoundary.tsx`)
- Add `console.error` with `[FATAL]` prefix and `JSON.stringify` the error to ensure it shows up in console capture tools.

### Files to Edit
| File | Change |
|------|--------|
| `src/pages/AntigravityIndex.tsx` | Wrap each lazy section in its own `<ErrorBoundary fallback={null}>` |
| `src/main.tsx` | Add `window.addEventListener('error')` and `unhandledrejection` loggers |
| `src/components/ErrorBoundary.tsx` | Enhance `componentDidCatch` logging with `[FATAL]` prefix |

This makes the app resilient — individual section failures degrade gracefully instead of showing the full error screen.

