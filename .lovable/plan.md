

## Diagnosis: Root-level Error Boundary triggered on `/`

### Problem
The app shows the generic ErrorBoundary screen ("Une erreur s'est produite") on the homepage. Console logs and session replay are empty, making it impossible to pinpoint the exact error remotely. The browser tool is also unavailable.

### Most Likely Causes
1. **Firebase initialization failure** — The `AuthProvider` and `ProviderProvider` wrap the entire app and make Firebase calls on mount. If Firebase is temporarily unreachable or throws during `onAuthStateChanged`, the error propagates up.
2. **A recent code change** introduced a subtle runtime error (e.g., in `MapSidebar.tsx`, `BloodDonationPage.tsx`, `Header.tsx`, or `MiniMapPreview.tsx`), though none of these should affect the `/` route directly.

### Plan

**Step 1: Add error logging to ErrorBoundary**
- Update `componentDidCatch` to `console.error` the full error message and component stack prominently, so the next message will have console log data.

**Step 2: Add try-catch safety to AuthProvider initialization**
- Wrap the Firebase `onAuthStateChanged` callback and `fetchUserProfile` calls with additional error handling to prevent uncaught errors from crashing the entire app.

**Step 3: Add try-catch safety to ProviderProvider**
- Ensure the `ProviderProvider` doesn't throw if the auth context returns unexpected values during loading.

This approach will either fix the crash (if it's from unhandled promise rejections in providers) or surface the exact error in console logs for targeted fixing.

### Files to Edit
| File | Change |
|------|--------|
| `src/components/ErrorBoundary.tsx` | Add detailed `console.error` in `componentDidCatch` |
| `src/contexts/AuthContext.tsx` | Add defensive error handling in `onAuthStateChanged` listener |

