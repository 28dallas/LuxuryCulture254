# Build Fix Plan

## Issues Identified from Vercel Deployment Logs

### 1. **"Event handlers cannot be passed to Client Component props"**
- **Cause**: `FeaturedCollections.tsx` uses `window.location.href` inside `onClick` handler on a Button component
- **Affected File**: `components/home/FeaturedCollections.tsx`
- **Fix**: Replace `onClick={() => window.location.href = ...}` with Next.js `Link` component

### 2. **"Unsupported metadata viewport is configured in metadata export"**
- **Cause**: Pages have `viewport` property inside `metadata` object instead of separate `viewport` export
- **Affected Pages**: `/about`, `/best-sellers`, `/cart`, `/checkout`, `/collections`, `/new-arrivals`, `/order/success`
- **Fix**: Remove `viewport` from `metadata` exports since it's already defined in `app/layout.tsx`

### 3. **Static page generation timeout**
- **Cause**: Repeated build failures due to above errors
- **Fix**: Resolve the two issues above

## Files to Edit

1. `components/home/FeaturedCollections.tsx` - Fix event handler with window.location.href
2. `app/about/page.tsx` - Remove viewport from metadata
3. `app/best-sellers/page.tsx` - Remove viewport from metadata
4. `app/cart/page.tsx` - Remove viewport from metadata
5. `app/checkout/page.tsx` - Remove viewport from metadata
6. `app/collections/page.tsx` - Remove viewport from metadata
7. `app/new-arrivals/page.tsx` - Remove viewport from metadata
8. `app/order/success/page.tsx` - Remove viewport from metadata

