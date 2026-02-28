

# Plan: Migrate Developer Login to Supabase Auth & Test Registration

## 1. Update Developer Login Page (`src/pages/developers/DeveloperLoginPage.tsx`)

- Remove `useAuth` import (which uses Firebase `loginAsCitizen`)
- Import `supabase` from `@/integrations/supabase/client`
- Add local `isLoading` state (like the register page)
- Replace `loginAsCitizen(email, password)` with `supabase.auth.signInWithPassword({ email, password })`
- Handle errors: check for `Invalid login credentials` and email not confirmed cases
- Keep everything else (UI, layout) unchanged

## 2. Test Developer Registration Flow

- Navigate to `/developers/register` in the browser
- Fill out the form with a test email
- Submit and verify the success screen appears
- Check network requests to confirm the signup API call succeeded

