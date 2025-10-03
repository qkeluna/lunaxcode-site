# API Integration Summary

## Completed Tasks

### 1. Environment Configuration
- ✅ Created `.env.local` with API configuration
- Base URL: `https://lunaxcode-fastapi.vercel.app`
- API Version: `v1`

### 2. Dependencies Installed
- ✅ `axios` - HTTP client for API requests
- ✅ `swr` - Data fetching and caching library

### 3. TypeScript Types Created
- ✅ [src/types/api.ts](src/types/api.ts)
- Complete type definitions for all API endpoints
- Includes: PricingPlan, Service, Feature, Addon, CompanyInfo, OnboardingSchema, Lead, etc.

### 4. API Service Implementation
- ✅ [src/lib/api.ts](src/lib/api.ts)
- Singleton ApiService class with axios
- Error handling and interceptors
- All endpoints implemented:
  - Health checks
  - Pricing plans
  - Services
  - Features
  - Add-ons
  - Company info
  - Onboarding questions
  - Lead submission

### 5. React Hooks Created
- ✅ [src/hooks/useApi.ts](src/hooks/useApi.ts)
- SWR-based hooks with caching
- Hooks available:
  - `usePricingPlans()`
  - `useServices()`
  - `useFeatures()`
  - `useAddons()`
  - `useCompanyInfo()`
  - `useOnboardingQuestions(serviceType)`
  - `useApi()` - Generic hook

### 6. DataService Updated
- ✅ [src/lib/data-service.ts](src/lib/data-service.ts)
- Migrated from local data to API calls
- All methods now use the API service
- Graceful fallback to localStorage on API errors
- Lead submission integrated

## API Integration Architecture

```
Components
    ↓
React Hooks (useApi.ts) ← SWR caching
    ↓
API Service (api.ts) ← Axios client
    ↓
lunaxcode-fastapi API
```

## Usage Examples

### In Components (Client-Side with Hooks)

```typescript
import { usePricingPlans } from '@/hooks/useApi';

export default function PricingSection() {
  const { plans, loading, error } = usePricingPlans();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      {plans?.map(plan => (
        <PricingCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
}
```

### Direct API Calls

```typescript
import { api } from '@/lib/api';

// Submit lead
const lead = await api.createLead({
  name: 'John Doe',
  email: 'john@example.com',
  service_type: 'landing_page',
  budget_range: '5000-10000',
  answers: {}
});
```

### Through DataService (Legacy Support)

```typescript
import { DataService } from '@/lib/data-service';

// Still works, now uses API internally
const services = await DataService.getServices();
const result = await DataService.saveOnboarding(data);
```

## Next Steps

1. **Update Components**: Convert existing components to use new hooks
2. **Test Forms**: Verify contact and onboarding forms submit to API
3. **Error Handling**: Add user-friendly error messages
4. **Loading States**: Improve loading UI across components
5. **Monitoring**: Add error tracking (Sentry, etc.)

## API Endpoints Available

### Public Endpoints
- `GET /health` - Health check
- `GET /pricing` - All pricing plans
- `GET /services` - All services
- `GET /features` - All features
- `GET /addons` - All add-ons
- `GET /company` - Company info
- `GET /onboarding/questions/{service_type}` - Dynamic questions
- `POST /leads` - Submit lead/contact

### Admin Endpoints (Require API Key)
- `GET /leads` - Get all leads
- `GET /leads/{id}` - Get specific lead

## Configuration

### Environment Variables
```env
NEXT_PUBLIC_API_URL=https://lunaxcode-fastapi.vercel.app
NEXT_PUBLIC_API_VERSION=v1
```

### SWR Cache Settings
- Revalidate on focus: Disabled
- Deduplication interval: 60 seconds (1 minute)
- Company info: 300 seconds (5 minutes)

## Error Handling

The API service includes comprehensive error handling:
- Server errors → Throws detailed error message
- Network errors → User-friendly connection message
- Fallback → localStorage for critical operations

## Testing

Development server running at: http://localhost:3001

Test API health:
```bash
curl https://lunaxcode-fastapi.vercel.app/api/v1/health
```

## Migration from Local Data

All components using local data from `src/data/*` should be updated to:
1. Use hooks from `src/hooks/useApi.ts` for client components
2. Use `api` service directly for server components
3. Use `DataService` methods which now internally call the API

## CORS Configuration

The API is configured to accept requests from:
- https://lunaxcode.site
- https://www.lunaxcode.site
- http://localhost:3000
- http://localhost:3001 (development)

If CORS issues occur, verify the backend CORS_ORIGINS environment variable includes your domain.
