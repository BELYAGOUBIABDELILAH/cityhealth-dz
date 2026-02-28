

# Redesign Citizen Dashboard + Fix Footer Duplicate Key

## Summary
Redesign the citizen dashboard (`PatientDashboard.tsx`) to be more service-oriented with quick access to all platform features, and fix the duplicate key console warning in the Footer.

---

## Changes

### 1. Redesign Dashboard with Quick Services Grid (src/pages/PatientDashboard.tsx)

**Add a "Quick Services" grid** between the stats cards and the tabs section. This grid provides direct access to all platform services with icons and descriptions:

- **Rechercher un praticien** -> `/search`
- **Carte Interactive** -> `/map/providers`
- **Urgences** -> `/emergency`
- **Assistant Medical IA** -> `/medical-assistant`
- **Don de Sang** -> `/blood-donation`
- **Communaute** -> `/community`
- **Annonces Medicales** -> `/annonces`
- **Recherche Medicale** -> `/research`
- **Mon Profil** -> `/profile`
- **Mes Favoris** -> `/favorites`
- **Rendez-vous** -> `/citizen/appointments`
- **Don Gratuit** -> `/citizen/provide`

Each card will be a `Link` with an icon, title, and short description, using a responsive grid (`grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`).

**Simplify the tabs section**: Keep only 3 tabs instead of 5:
- **A venir** (upcoming appointments) -- most important
- **Historique** (past appointments)
- **Notifications**

Move "Mes Avis" and "Articles Sauvegardes" into the quick services grid as links to their respective pages (reviews accessible from profile, articles from /research).

**Improve the header**: Add a greeting based on time of day ("Bonjour/Bonsoir") and show the current date.

### 2. Fix Footer Duplicate Key (src/components/Footer.tsx)

The `professionalsLinks` array has two items with the same `href: '/provider/register'`, and they use `link.href` as the `key` prop. Fix by using `link.label` as key instead, on both `servicesLinks` and `professionalsLinks` loops (lines 96-103 and 113-120).

---

## Technical Details

### PatientDashboard.tsx changes:
- Add `quickServices` array with `{ label, description, icon, href, color }` objects
- Render as a grid of `Link` components styled as cards with hover effects
- Reduce `TabsList` from `grid-cols-5` to `grid-cols-3`
- Remove `saved-articles` TabsContent and `reviews` tab (move access to profile/research pages)
- Remove `SavedArticlesTab` component (no longer needed inline)
- Add time-based greeting: `new Date().getHours() < 18 ? 'Bonjour' : 'Bonsoir'`

### Footer.tsx changes:
- Line 97: Change `key={link.href}` to `key={link.label}`
- Line 113: Change `key={link.href}` to `key={link.label}`

## Files Modified
- `src/pages/PatientDashboard.tsx` -- redesign dashboard layout with services grid
- `src/components/Footer.tsx` -- fix duplicate key warning

