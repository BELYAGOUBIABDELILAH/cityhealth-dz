

# Improve Visibility of Provider Registration Section on Homepage

## Current State
The `ProviderRegistrationSection` is present on the homepage (`AntigravityIndex.tsx`) but sits at the very bottom (after Pricing, before Footer) with a subtle `bg-muted/30` background that blends into the page. It lacks strong visual contrast to grab attention.

## Plan

### 1. Boost visual contrast in `ProviderRegistrationSection.tsx`
- Replace the subtle `bg-muted/30` background with a stronger gradient — e.g. `bg-gradient-to-br from-primary/10 via-background to-primary/5` with a visible top/bottom border accent
- Add a decorative top border or divider (colored line) to clearly separate it from the Pricing section above
- Make the CTA button pulse with a subtle `animate-pulse` ring or glow to draw the eye

### 2. Reposition higher on the homepage in `AntigravityIndex.tsx`
- Move the `ProviderRegistrationSection` **above** the Pricing section (or right after Testimonials) so it appears earlier during scroll, increasing the chance users see it
- Current order: Testimonials → Pricing → ProviderRegistration
- New order: Testimonials → **ProviderRegistration** → Pricing

### 3. Add a mini floating CTA banner
- Add a small sticky/fixed banner or a "Provider? Join us" mini-link in the header or after the hero that anchors to `#inscription-provider`, giving an additional entry point to the section

### Files Modified
- `src/components/homepage/ProviderRegistrationSection.tsx` — stronger background, border accent, CTA glow
- `src/pages/AntigravityIndex.tsx` — reorder sections to place registration higher

