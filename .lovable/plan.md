

## Plan: Improve Auth Pages - Forgot Password, Reset Password, Google Auth

### Current State
- App uses **Firebase Auth** (not Supabase Auth) for all authentication
- Forgot password is currently **inline** within login pages (toggle state, not separate page)
- Google Auth exists on **citizen login/register** but is **missing from provider login**
- No standalone `/forgot-password` or `/reset-password` pages exist
- Firebase's `sendPasswordResetEmail` is already used inline

### Changes

#### 1. Create `/forgot-password` standalone page
**New file: `src/pages/ForgotPasswordPage.tsx`**
- Centered card layout matching app design (bg `#F8F9FA`, white card)
- CityHealth logo + "Mot de passe oublié" title + subtitle
- Email input, "Envoyer le lien" primary button (full width)
- "Retour a la connexion" link below
- Success state (same page): animated green checkmark, "Email envoye !" title, description text
- "Renvoyer l'email" ghost button with 60s cooldown timer
- Uses Firebase `sendPasswordResetEmail(auth, email)`

#### 2. Create `/reset-password` page
**New file: `src/pages/ResetPasswordPage.tsx`**
- Firebase handles password reset via `oobCode` query param from the email link
- "Nouveau mot de passe" title
- Password + confirm password inputs with eye toggle
- Password strength indicator bar (Weak/red, Fair/orange, Strong/green)
- Rules checklist: 8+ chars, 1 uppercase, 1 number, 1 special char
- "Reinitialiser" button disabled until passwords match + strong enough
- Uses Firebase `confirmPasswordReset(auth, oobCode, newPassword)`
- On success: redirect to `/` with toast "Mot de passe mis a jour"

#### 3. Add Google Auth to Provider Login page
**Edit: `src/pages/ProviderLoginPage.tsx`**
- Add "ou continuer avec" divider after the login button
- Add Google sign-in button (white bg, border, Google "G" logo, "Continuer avec Google")
- Uses existing `loginWithGoogle('provider')` from AuthContext

#### 4. Register routes
**Edit: `src/App.tsx`**
- Add `/forgot-password` and `/reset-password` public routes
- Lazy-load both new pages
- Add paths to `hiddenPrefixes` to hide main header

#### 5. Update login page links
**Edit: `src/pages/CitizenLoginPage.tsx` and `src/pages/ProviderLoginPage.tsx`**
- Change "Mot de passe oublie ?" link to navigate to `/forgot-password` instead of toggling inline state
- Remove inline forgot password UI (simplifies components)

### Technical Notes
- All auth uses Firebase (not Supabase) - `sendPasswordResetEmail`, `confirmPasswordReset` from `firebase/auth`
- Firebase password reset emails contain an `oobCode` param; the reset page extracts and uses it
- Google Auth already works via `loginWithGoogle` in AuthContext - just needs to be added to provider login UI
- No database changes needed

