

## Diagnostic: Persistent ErrorBoundary crash on homepage

### Problem
The homepage (`/`) renders the top-level ErrorBoundary error screen. No console logs are captured, making it impossible to identify the exact crashing component from the outside.

### Root cause analysis
After thorough code review, the provider tree and context hierarchy in `App.tsx` are correct (`ErrorBoundary > QueryClientProvider > ThemeProvider > LanguageProvider > AuthProvider > ProviderProvider > BrowserRouter`). All contexts are properly nested.

The most likely cause: **unhandled runtime exceptions in components NOT wrapped in individual ErrorBoundaries**. In `AntigravityIndex.tsx`, lazy-loaded sections are wrapped in `SafeSection` (ErrorBoundary + Suspense), but these four components are NOT protected:
- `AnnouncementBannerTop`
- `AntigravityHero`
- `Footer`
- `FloatingProviderBanner`

If any of these throw (e.g., a Supabase fetch error in `AntigravityHero`, a `QRCodeSVG` rendering issue in `Footer`, or a Firebase auth state issue during initial load), the error bubbles up to the top-level ErrorBoundary and kills the entire page.

### Plan

**1. Wrap unprotected homepage components in SafeSection** (`AntigravityIndex.tsx`)
- Wrap `AnnouncementBannerTop`, `AntigravityHero`, `Footer`, and `FloatingProviderBanner` each in their own `<ErrorBoundary fallback={null}>` so a failure in one does not kill the whole page.

**2. Add defensive error handling in AntigravityHero** (`AntigravityHero.tsx`)
- Add try-catch around the `fetchStats` async function to prevent unhandled promise rejections from crashing the component.

**3. Improve ErrorBoundary logging** (`ErrorBoundary.tsx`)
- Ensure `componentDidCatch` always logs the full error and component stack to the browser console (currently it does via `console.error`), so future crashes are visible in the Lovable console panel.

These changes are minimal and only add resilience -- no visual or functional changes.

