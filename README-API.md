# API Integration for lunaxcode-site

This project is now integrated with the **lunaxcode-fastapi** backend.

## Quick Start

### 1. Environment Setup

The `.env.local` file is already configured:

```env
NEXT_PUBLIC_API_URL=https://lunaxcode-fastapi.vercel.app
NEXT_PUBLIC_API_VERSION=v1
```

### 2. Using the API in Components

```typescript
// Use hooks for client components
'use client';
import { usePricingPlans, useServices } from '@/hooks/useApi';

export default function MyComponent() {
  const { plans, loading, error } = usePricingPlans();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  
  return <div>{plans?.map(plan => ...)}</div>;
}
```

### 3. Available Hooks

- `usePricingPlans()` - Pricing plans with caching
- `useServices()` - Services list
- `useFeatures()` - Feature highlights
- `useAddons()` - Add-on services
- `useCompanyInfo()` - Company information
- `useOnboardingQuestions(type)` - Dynamic form questions

### 4. Direct API Access

```typescript
import { api } from '@/lib/api';

// Get data
const plans = await api.getPricingPlans();

// Submit lead
const lead = await api.createLead({
  name: 'John Doe',
  email: 'john@example.com',
  service_type: 'landing_page',
  budget_range: '5000-10000',
  answers: {}
});
```

## Documentation

- **Complete Integration Guide**: [claudedocs/api-integration-guide.md](claudedocs/api-integration-guide.md)
- **API Summary**: [claudedocs/api-integration-summary.md](claudedocs/api-integration-summary.md)
- **Frontend Integration**: [api-integration/FRONTEND_INTEGRATION.md](api-integration/FRONTEND_INTEGRATION.md)
- **Quick Reference**: [api-integration/API_QUICK_REFERENCE.md](api-integration/API_QUICK_REFERENCE.md)

## API Endpoints

**Base URL**: `https://lunaxcode-fastapi.vercel.app/api/v1`

### Public Endpoints
- `GET /health` - API health check
- `GET /pricing` - All pricing plans
- `GET /services` - All services
- `GET /features` - All features
- `GET /addons` - All add-ons
- `GET /company` - Company info
- `GET /onboarding/questions/{service_type}` - Onboarding questions
- `POST /leads` - Submit lead/contact form

## Files Structure

```
src/
├── hooks/
│   └── useApi.ts           # React hooks with SWR
├── lib/
│   ├── api.ts              # API service class
│   └── data-service.ts     # Updated to use API
└── types/
    └── api.ts              # TypeScript types

.env.local                  # Environment configuration
```

## Testing

```bash
# Start development server
npm run dev

# Test API health
curl https://lunaxcode-fastapi.vercel.app/api/v1/health
```

## Features

✅ Automatic caching with SWR  
✅ Error handling with fallbacks  
✅ TypeScript type safety  
✅ Loading states  
✅ Optimized performance  
✅ Production ready  

## Support

**API Docs**: https://lunaxcode-fastapi.vercel.app/api/v1/docs  
**Backend Repo**: lunaxcode-fastapi
