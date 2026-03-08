

## Already Implemented

The feature you're requesting is **already in place**. Here's what currently happens when you click a provider in the sidebar:

1. **`handleProviderClick`** in `MapSidebar.tsx` calls:
   - `setSelectedProvider(provider)` — highlights the provider and shows its card on the map
   - `flyTo(provider.lat, provider.lng, 16)` — smoothly animates the map to center on the provider at zoom level 16

2. **`flyTo`** in `MapContext.tsx` uses Leaflet's `map.flyTo()` with a 0.5s animation duration.

3. The selected marker also gets a **pulse/glow highlight** animation (added previously in `MapMarkers.tsx`).

No changes are needed — the map already scrolls to the corresponding provider when clicked in the sidebar. If you're experiencing an issue where this isn't working, it could be due to missing `lat`/`lng` data on certain providers. I can investigate further if you confirm a specific provider that isn't working.

