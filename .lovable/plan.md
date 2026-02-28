

# Fix Plan: Developer Register Email & Dynamic API URL

## Two Issues

### 1. Email verification not sending on `/developers/register`

**Root cause**: The `signupAsCitizen` function in `AuthContext.tsx` does send verification emails via `sendEmailVerification`. The function itself looks correct. Let me check if Firebase auth domain is properly configured — the Firebase config has `authDomain: "cityhealth-ec7e7.firebaseapp.com"` which looks valid.

The `signupAsCitizen` flow:
1. Creates user with `createUserWithEmailAndPassword`
2. Calls `sendEmailVerification` with `url: ${window.location.origin}/email-verified`
3. Signs out user so they must verify first

The code path looks correct. The issue is likely that the `sendEmailVerification` silently fails (both try/catch blocks catch and suppress errors). The only visible feedback is a toast for `auth/too-many-requests`. The success screen shows regardless.

**Fix**: Add better error feedback — if both `sendEmailVerification` attempts fail for reasons other than rate limiting, show a warning toast so the user knows the email wasn't sent. Also add a "Resend email" button on the success screen.

### 2. Hardcoded URL in `DeveloperDocsPage.tsx`

**Current**: Line 14 has `const API_BASE = 'https://lerfyjdokajfkyarlhjg.supabase.co/functions/v1/public-api'` — a wrong/old project URL.

**Fix**: Replace with dynamic URL from env variable:
```ts
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://qedotqjxndtmskcgrajt.supabase.co';
const API_BASE = `${SUPABASE_URL}/functions/v1/public-api`;
```

## Changes

### File 1: `src/pages/developers/DeveloperDocsPage.tsx`
- Replace hardcoded `API_BASE` constant (line 14) with dynamic version using `import.meta.env.VITE_SUPABASE_URL`

### File 2: `src/pages/developers/DeveloperRegisterPage.tsx`
- Add a "Resend verification email" button on the success screen
- Import `getAuth`, `sendEmailVerification` from Firebase
- Add a `resendEmail` handler that re-authenticates briefly and sends the verification email again
- Show a toast with better feedback if the email fails to send

### File 3: `src/contexts/AuthContext.tsx`
- Improve error handling in `signupAsCitizen` to surface email sending failures more visibly (add a warning toast when both verification attempts fail for non-rate-limit reasons)

