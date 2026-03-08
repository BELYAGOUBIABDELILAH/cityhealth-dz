

# Footer Redesign — Complete Site Coverage

## Missing Sections in Current Footer
The footer currently has 5 columns: Brand, Services (5 links), Professionals (5 links), Login, Legal. It's missing:

- **Community** (`/community`)
- **Annonces / Ads** (`/annonces`)
- **Research Hub** (`/research`)
- **Community Aid / Provide** (`/citizen/provide`)
- **Emergency Card** (feature)
- **Appointments** (feature)
- **Developer Portal** (`/developers`)
- **Map modes** (Blood map `/map/blood`)

## Plan

### Restructure into 6 columns (grid `lg:grid-cols-6`) with better grouping:

**Column 1 — Brand + Contact** (keep as-is, `lg:col-span-1`)

**Column 2 — Services** (expanded)
- Search Doctors → `/search`
- Interactive Map → `/map/providers`
- Emergency 24/7 → `/map/emergency`
- AI Assistant → `/medical-assistant`
- Blood Donation → `/blood-donation`
- Blood Map → `/map/blood`
- Emergency Card → `/citizen/dashboard` (feature)

**Column 3 — Community** (NEW column)
- Community Forum → `/community`
- Community Aid → `/citizen/provide`
- Medical Ads → `/annonces`
- Research Hub → `/research`

**Column 4 — Professionals**
- Become Partner → `/provider/register`
- Pricing → `/tarifs`
- Documentation → `/docs`
- Developer Portal → `/developers`
- API Docs → `/developers/docs`

**Column 5 — Login** (keep as-is)

**Column 6 — Legal + Language** (keep as-is)

### i18n
Add trilingual labels inline (FR/EN/AR pattern already used in footer) for new links.

### File Modified
- `src/components/Footer.tsx` — add new icons, restructure grid, add missing links with i18n labels.

