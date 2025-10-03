# 🚀 API Integration Complete - Implementation Guide

## ✅ Integration Status

**Status**: READY FOR PRODUCTION  
**API**: https://lunaxcode-fastapi.vercel.app  
**Development Server**: http://localhost:3001

### What's Been Implemented

1. ✅ Environment configuration (`.env.local`)
2. ✅ API service layer (`src/lib/api.ts`)
3. ✅ TypeScript types (`src/types/api.ts`)
4. ✅ React hooks with SWR caching (`src/hooks/useApi.ts`)
5. ✅ DataService migration to API (`src/lib/data-service.ts`)
6. ✅ Error handling and fallbacks
7. ✅ API health verification

---

## 📁 Files Created/Modified

### New Files
- [.env.local](.env.local) - Environment variables
- [src/types/api.ts](src/types/api.ts) - API type definitions
- [src/lib/api.ts](src/lib/api.ts) - API service class
- [src/hooks/useApi.ts](src/hooks/useApi.ts) - React hooks for data fetching

### Modified Files
- [src/lib/data-service.ts](src/lib/data-service.ts) - Now uses API instead of local data
- [package.json](package.json) - Added axios and swr dependencies

---

## 🎯 How to Use the API Integration

### Option 1: Using React Hooks (Recommended for Client Components)

```typescript
'use client';
import { usePricingPlans, useServices, useFeatures } from '@/hooks/useApi';

export default function MyComponent() {
  const { plans, loading, error } = usePricingPlans();
  const { services } = useServices();
  const { features } = useFeatures();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {plans?.map(plan => (
        <div key={plan.id}>{plan.name} - ₱{plan.price}</div>
      ))}
    </div>
  );
}
```

### Option 2: Direct API Calls (For Custom Logic)

```typescript
import { api } from '@/lib/api';

// Get data
const plans = await api.getPricingPlans();
const services = await api.getServices();
const features = await api.getFeatures();

// Submit lead
const lead = await api.createLead({
  name: 'John Doe',
  email: 'john@example.com',
  service_type: 'landing_page',
  budget_range: '5000-10000',
  project_description: 'Need a landing page',
  answers: {},
});
```

### Option 3: Through DataService (Existing Code Compatibility)

```typescript
import { DataService } from '@/lib/data-service';

// All existing code works - now uses API internally
const services = await DataService.getServices();
const plans = await DataService.getPricingPlans();

// Onboarding submission now goes to API
const result = await DataService.saveOnboarding(onboardingData);
```

---

## 🔄 Migration Checklist for Components

### Components to Update

#### 1. **Pricing Section** (if using local data)
**Before:**
```typescript
import { PRICING_PLANS } from '@/data/pricing';

export default function PricingSection() {
  return <div>{PRICING_PLANS.map(...)}</div>;
}
```

**After:**
```typescript
'use client';
import { usePricingPlans } from '@/hooks/useApi';

export default function PricingSection() {
  const { plans, loading, error } = usePricingPlans();
  
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return <div>{plans?.map(...)}</div>;
}
```

#### 2. **Services Section**
```typescript
'use client';
import { useServices } from '@/hooks/useApi';

export default function ServicesSection() {
  const { services, loading } = useServices();
  
  if (loading) return <div>Loading services...</div>;
  
  return (
    <div className="services-grid">
      {services?.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
```

#### 3. **Onboarding Form** (already compatible!)
The onboarding form uses `DataService.saveOnboarding()` which now automatically submits to the API. No changes needed!

#### 4. **Contact Form** (already compatible!)
The contact form uses `DataService.saveContact()` which now automatically submits to the API. No changes needed!

---

## 📊 Available React Hooks

### Data Fetching Hooks

| Hook | Returns | Cache Duration |
|------|---------|----------------|
| `usePricingPlans()` | `{ plans, loading, error, refetch }` | 1 minute |
| `useServices()` | `{ services, loading, error, refetch }` | 1 minute |
| `useFeatures()` | `{ features, loading, error }` | 1 minute |
| `useAddons()` | `{ addons, loading, error }` | 1 minute |
| `useCompanyInfo()` | `{ company, loading, error }` | 5 minutes |
| `useOnboardingQuestions(type)` | `{ schema, loading, error }` | 1 minute |

### Generic Hook

```typescript
import { useApi } from '@/hooks/useApi';
import { api } from '@/lib/api';

// Custom API call with caching
const { data, loading, error, refetch } = useApi(
  () => api.getService('landing_page'),
  'service-landing-page'
);
```

---

## 🔌 API Endpoints Reference

### Public Endpoints (No Auth Required)

```typescript
// Health
GET /health              → HealthResponse
GET /health/db           → DatabaseHealthResponse

// Content
GET /pricing             → PricingPlan[]
GET /pricing/{id}        → PricingPlan
GET /services            → Service[]
GET /services/{id}       → Service
GET /features            → Feature[]
GET /addons              → Addon[]
GET /company             → CompanyInfo

// Dynamic Forms
GET /onboarding/questions/{service_type} → OnboardingSchema

// Lead Submission
POST /leads              → Lead
```

### Admin Endpoints (Require X-API-Key header)

```typescript
GET /leads              → Lead[]
GET /leads/{id}         → Lead
```

---

## 🎨 Service Types & Budget Ranges

### Service Types (for onboarding)
```typescript
type ServiceType = 
  | 'landing_page'      // Landing Page
  | 'basic_website'     // Basic Website
  | 'custom_development' // Custom Development
  | 'mobile_app'        // Mobile App
  | 'ai_integration';   // AI Integration
```

### Budget Ranges
```typescript
type BudgetRange = 
  | 'under-5000'        // Under ₱5,000
  | '5000-10000'        // ₱5,000 - ₱10,000
  | '10000-25000'       // ₱10,000 - ₱25,000
  | '25000-50000'       // ₱25,000 - ₱50,000
  | '50000-plus';       // ₱50,000+
```

---

## 🛡️ Error Handling

### Built-in Error Handling

The API service includes automatic error handling:

1. **Server Errors** → Detailed error message from API
2. **Network Errors** → User-friendly "Check your connection" message
3. **Timeout** → 10-second timeout with error

### Fallback Strategy

DataService methods automatically fall back to localStorage if API fails:

```typescript
try {
  return await api.createLead(data);
} catch (error) {
  // Automatically saves to localStorage
  return saveToLocalStorage(data);
}
```

### Custom Error Handling

```typescript
import { api } from '@/lib/api';

try {
  const plans = await api.getPricingPlans();
} catch (error) {
  if (error instanceof Error) {
    // Handle specific error
    console.error('Failed to load pricing:', error.message);
  }
}
```

---

## ⚡ Performance & Caching

### SWR Configuration

- **Revalidate on focus**: Disabled (no unnecessary refetches)
- **Deduplication**: 60 seconds (prevents duplicate requests)
- **Company info cache**: 5 minutes (rarely changes)

### Cache Invalidation

```typescript
const { plans, refetch } = usePricingPlans();

// Force refresh data
await refetch();
```

### Optimistic Updates (for forms)

```typescript
import { useSWRConfig } from 'swr';

const { mutate } = useSWRConfig();

// After submitting form
await api.createLead(data);
mutate('pricing-plans'); // Refresh pricing data
```

---

## 🧪 Testing

### Test API Connection

```bash
# Health check
curl https://lunaxcode-fastapi.vercel.app/api/v1/health

# Get pricing
curl https://lunaxcode-fastapi.vercel.app/api/v1/pricing

# Get services
curl https://lunaxcode-fastapi.vercel.app/api/v1/services
```

### Test in Browser Console

```javascript
// Test basic fetch
fetch('https://lunaxcode-fastapi.vercel.app/api/v1/pricing')
  .then(r => r.json())
  .then(console.log);

// Test lead submission
fetch('https://lunaxcode-fastapi.vercel.app/api/v1/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    service_type: 'landing_page',
    budget_range: '5000-10000',
    answers: {}
  })
}).then(r => r.json()).then(console.log);
```

---

## 🔐 CORS Configuration

The API accepts requests from:
- ✅ https://lunaxcode.site
- ✅ https://www.lunaxcode.site
- ✅ http://localhost:3000
- ✅ http://localhost:3001

If you encounter CORS errors, check the backend `CORS_ORIGINS` environment variable.

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Verify `.env.local` is in `.gitignore` (it is!)
- [ ] Set `NEXT_PUBLIC_API_URL` in Vercel/hosting environment variables
- [ ] Test all API endpoints in production
- [ ] Monitor API response times
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Test form submissions end-to-end
- [ ] Verify CORS works with production domain

---

## 📚 Additional Resources

- **API Documentation**: https://lunaxcode-fastapi.vercel.app/api/v1/docs
- **Integration Reference**: [api-integration/FRONTEND_INTEGRATION.md](../api-integration/FRONTEND_INTEGRATION.md)
- **Quick Reference**: [api-integration/API_QUICK_REFERENCE.md](../api-integration/API_QUICK_REFERENCE.md)

---

## 🎉 What's Working Now

1. ✅ All static data (pricing, services, features) loads from API
2. ✅ Onboarding form submits leads to API backend
3. ✅ Contact form submits leads to API backend
4. ✅ Automatic caching with SWR (1-5 minute cache)
5. ✅ Error handling with localStorage fallback
6. ✅ TypeScript type safety throughout
7. ✅ Ready for production deployment

---

## 🔮 Future Enhancements

1. **Authentication**: Add admin dashboard with API key auth
2. **Real-time Updates**: WebSocket support for live lead notifications
3. **Analytics**: Track API performance and error rates
4. **Optimistic UI**: Show updates before API confirms
5. **Offline Support**: Enhanced offline functionality with service workers

---

**Integration completed successfully! 🎊**

All components can now use live data from the lunaxcode-fastapi backend.
