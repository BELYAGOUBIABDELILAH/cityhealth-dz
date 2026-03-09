
# Plan: Add Real Pricing to Developer Section

## Current State
The Developer API pricing currently shows static placeholder prices (2,000 DA and 8,000 DA) with only monthly options and no annual billing toggle.

## Proposed Pricing (Algerian Market)
Align the Developer API pricing structure with the platform's pricing model by introducing realistic tiers and an annual billing toggle (with a ~20% discount).

| Plan | Monthly | Annual (−20%) | Limits |
|------|---------|---------------|--------|
| **Free** | Gratuit | Gratuit | 100 req/day |
| **Basic** | 2 500 DA | 24 000 DA/an | 1,000 req/day |
| **Pro** | 7 900 DA | 75 000 DA/an | 10,000 req/day |

## Implementation Details

**File:** `src/pages/developers/DeveloperLandingPage.tsx`

1. **State Addition:**
   - Add `const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');`

2. **Data Structure Update (`getPlans`):**
   - Replace the single `price` string with `monthlyPrice` and `annualPrice` objects for all languages (fr, ar, en).
   - Adjust the Basic plan to 2 500 DA (monthly) / 24 000 DA (annual).
   - Adjust the Pro plan to 7 900 DA (monthly) / 75 000 DA (annual).

3. **UI Enhancements:**
   - Add the Monthly/Annual toggle button group above the pricing grid (matching the style used in `PricingSection.tsx` with the animated "-20%" badge).
   - Update the pricing cards to dynamically display the selected price based on the `billing` state.
