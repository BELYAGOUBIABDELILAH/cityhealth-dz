

## Plan: Improve the Contact Page

The current page is functional but basic. Here's a modernized redesign using framer-motion animations, better visual hierarchy, and a more polished layout.

### Changes to `src/pages/ContactPage.tsx`

**1. Add framer-motion animations**
- Staggered fade-in for hero, form, info cards, FAQ, and team sections
- Replace CSS-only `animate-scale-in` with `motion.div` variants for smoother entrance

**2. Improve hero section**
- Add a subtle gradient badge/pill above the title (e.g., "Support 24/7")
- Larger icon with animated ring effect
- Add decorative floating gradient blobs in background

**3. Redesign contact info cards**
- Convert from a single card with list items to individual cards in a 2x2 grid above the form
- Each card gets its own colored icon background, hover scale effect

**4. Improve form UX**
- Add focus animations on inputs (scale ring)
- Add a success state animation (checkmark) after submission instead of just a toast
- Better visual grouping with section dividers

**5. Modernize FAQ section**
- Use accordion (collapsible) component from Radix instead of static list
- Smooth expand/collapse animation

**6. Improve team section**
- Add social links placeholders (LinkedIn, GitHub icons)
- Subtle gradient border on hover
- Avatar initials in the circle instead of just icons

**7. Add an embedded map preview**
- Small static map image or decorative map illustration near the address card

### File Changes

| File | Change |
|------|--------|
| `src/pages/ContactPage.tsx` | Full redesign with framer-motion, accordion FAQ, 2x2 info grid, improved team cards, better animations |

No database or backend changes needed.

