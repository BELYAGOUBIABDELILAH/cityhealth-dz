
# Professional Redesign of Carte Interactive (/map)

## Overview
Visual-only redesign of the interactive map page to improve professionalism, visual hierarchy, spacing, and overall polish. All logic, interactions, data fetching, and features remain unchanged.

## Components to Modify

### 1. `src/components/map/MapMother.tsx` - Main Layout

**Current issues**: Plain title section, basic border/shadow on map container, basic route info banner.

**Changes**:
- Replace the plain title area with a compact, refined header bar featuring a subtle bottom border and improved typography (smaller subtitle, tighter spacing)
- Upgrade the map container wrapper: softer border radius, refined shadow (`shadow-lg` to `shadow-xl`), subtle inner glow in dark mode
- Improve the route info banner at the bottom: better card styling with glassmorphism, cleaner transport mode toggle with icon tooltips, more readable route data with better alignment
- Add a subtle gradient overlay at the top of the map for better contrast with the floating control panel

### 2. `src/components/map/MapSidebar.tsx` - Provider List Sidebar

**Current issues**: Basic header, plain provider cards, cramped action buttons.

**Changes**:
- Redesign the sticky header: add a subtle gradient background, better font weight hierarchy, improved count display with a small pill badge
- Improve provider list cards:
  - Better avatar treatment with a subtle ring/border
  - Cleaner name + verified badge alignment
  - Improved type badge colors with softer, more refined palette
  - Better address truncation with a slightly larger font
  - More spacious action button row with better button proportions
  - Refined selected state with a left accent border instead of just background color
  - Smoother hover transition with subtle scale effect
- Improve the empty state with a more refined illustration area
- Add subtle separators between provider items
- Improve the toggle button (when sidebar is closed) with better shadow and rounded styling

### 3. `src/components/map/children/ProvidersMapChild.tsx` - Floating Control Panel

**Current issues**: Control panel has low opacity by default (opacity-40), basic search input, plain mode pills, cramped filter section.

**Changes**:
- Remove the low opacity default (opacity-40 hover:opacity-100 is poor UX) - keep panel always visible at full opacity with a refined glass effect
- Redesign the search bar: remove the Menu hamburger button (unused/non-functional), make search input full-width with improved styling (rounded-xl, better placeholder, subtle focus ring)
- Redesign mode pills: better active/inactive states with filled vs ghost styling, improved spacing, slight shadow on active pill
- Improve the filter collapsible section: better toggle button with animated chevron, cleaner filter options with improved checkbox alignment, refined "active filters" indicator
- Better overall card styling: refined shadow, border, and blur

### 4. `src/components/map/ProviderCard.tsx` - Selected Provider Popup

**Current issues**: Basic card styling, cramped info layout, plain action buttons.

**Changes**:
- Improve card elevation and styling: refined border radius (rounded-2xl), better shadow treatment, subtle border
- Better image section: rounded corners with overflow, subtle gradient overlay at bottom of image for text readability
- Improved info section: better typography hierarchy (name larger and bolder, type badge with refined colors), cleaner distance/rating display
- Redesigned action buttons: more consistent sizing, primary button with better contrast, outline button with refined hover state
- Better "view profile" link styling with subtle underline on hover
- Smoother entrance animation

### 5. `src/components/map/MapControls.tsx` - Floating Action Buttons

**Current issues**: Basic round buttons, plain styling.

**Changes**:
- Improve button styling: refined shadows, subtle border, better hover effects with scale transition
- Better visual grouping with a connected pill container instead of separate floating buttons
- Improved AI assistant button with a subtle pulse animation when idle
- Better dark mode contrast for the button backgrounds

## Design Principles
- All changes use existing design tokens for theme compatibility
- RTL and multi-language support preserved
- All event handlers, callbacks, and data flow unchanged
- Mobile responsive behavior preserved
- Fullscreen mode behavior preserved

## Files Modified (5 files)
1. `src/components/map/MapMother.tsx`
2. `src/components/map/MapSidebar.tsx`
3. `src/components/map/children/ProvidersMapChild.tsx`
4. `src/components/map/ProviderCard.tsx`
5. `src/components/map/MapControls.tsx`
