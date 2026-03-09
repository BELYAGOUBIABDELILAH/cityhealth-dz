

# Plan: Add Real Pricing to Tarifs Section

## Current State
All three plans display "0 DA" or "Gratuit" with the "Free for 1st year" badge. No actual post-trial pricing is shown.

## Proposed Pricing (Algerian Market)

| Plan | Monthly | Annual (−20%) |
|------|---------|---------------|
| **Basic** | Gratuit | Gratuit |
| **Standard** | 2 500 DA | 24 000 DA/an |
| **Premium** | 4 900 DA | 47 000 DA/an |

**Rationale:**
- Basic stays free to maximize adoption
- Standard at ~$17/month is competitive for growing practices
- Premium at ~$33/month provides margin while staying accessible
- Annual discount is pre-built (20% off)

## Implementation

**File:** `src/components/homepage/PricingSection.tsx`

Update the `plans` array (lines 57-106):

```typescript
{
  name: 'Standard',
  monthlyPrice: { fr: '2 500 DA', ar: '2,500 د.ج', en: '2,500 DA' },
  annualPrice: { fr: '24 000 DA', ar: '24,000 د.ج', en: '24,000 DA' },
  // ...
},
{
  name: 'Premium',
  monthlyPrice: { fr: '4 900 DA', ar: '4,900 د.ج', en: '4,900 DA' },
  annualPrice: { fr: '47 000 DA', ar: '47,000 د.ج', en: '47,000 DA' },
  // ...
}
```

**Also update** `src/components/provider/SubscriptionCard.tsx` to reflect the same pricing in the upgrade modal.

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/homepage/PricingSection.tsx` | Update Standard & Premium prices |
| `src/components/provider/SubscriptionCard.tsx` | Update "0 DA" badge to show actual price after trial |

