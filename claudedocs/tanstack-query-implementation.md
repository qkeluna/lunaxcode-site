# TanStack Query Implementation

## Overview
TanStack Query has been integrated for reactive data fetching with automatic caching, background refetching, and optimistic updates.

## Setup

### Provider
The `QueryProvider` wraps the entire app in [src/app/layout.tsx](src/app/layout.tsx):
- **Cache duration**: 5 minutes (staleTime)
- **Garbage collection**: 10 minutes (gcTime)
- **Refetch on window focus**: Disabled
- **Retry**: 1 attempt
- **DevTools**: Enabled in development mode

### Custom Hooks
All data fetching hooks are in [src/hooks/use-data.ts](src/hooks/use-data.ts).

## Available Hooks

### Query Hooks (Data Fetching)

```typescript
import {
  useServices,
  usePricingPlans,
  useFeatures,
  useAddons,
  useCompanyInfo,
  useOnboardingQuestions
} from '@/hooks/use-data';

// Example: Fetch services with caching
function ServicesComponent() {
  const { data, isLoading, error, refetch } = useServices();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading services</div>;

  return (
    <div>
      {data?.map(service => (
        <div key={service.id}>{service.name}</div>
      ))}
    </div>
  );
}

// Example: Conditional fetching (only fetch when needed)
function OnboardingQuestions({ serviceType }: { serviceType: string }) {
  const { data: questions, isLoading } = useOnboardingQuestions(serviceType);
  // This will only fetch when serviceType is provided

  return <div>{/* render questions */}</div>;
}
```

### Mutation Hooks (Data Submission)

```typescript
import { useSubmitOnboarding, useSubmitContact } from '@/hooks/use-data';

// Example: Contact form submission
function ContactForm() {
  const { mutate: submitContact, isPending, isError, isSuccess } = useSubmitContact();

  const handleSubmit = (formData: ContactData) => {
    submitContact(formData, {
      onSuccess: () => {
        // Handle success
        console.log('Form submitted!');
      },
      onError: (error) => {
        // Handle error
        console.error('Submission failed:', error);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

// Example: Onboarding submission
function OnboardingFlow() {
  const { mutate: submitOnboarding, isPending } = useSubmitOnboarding();

  const handleComplete = (data: OnboardingData) => {
    submitOnboarding(data, {
      onSuccess: (result) => {
        // Redirect to payment
        window.location.href = `/payment?id=${result.id}`;
      }
    });
  };

  return <div>{/* onboarding steps */}</div>;
}
```

## Benefits

### 1. Automatic Caching
- Data is cached for 5 minutes (staleTime)
- No redundant API calls when navigating between pages
- Automatic background refetch when data becomes stale

### 2. Loading & Error States
- Built-in `isLoading`, `isPending`, `isError`, `isSuccess` states
- No need for manual state management

### 3. Optimistic Updates
- UI can update immediately while API call processes
- Automatic rollback on error

### 4. DevTools
- Visual debugging of queries and cache
- See query status, data, and timing
- Available in development mode

## Migration Examples

### Before (Direct DataService)
```typescript
function Component() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    DataService.getServices()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  return <div>{/* render */}</div>;
}
```

### After (TanStack Query)
```typescript
function Component() {
  const { data, isLoading } = useServices();

  if (isLoading) return <div>Loading...</div>;
  return <div>{/* render */}</div>;
}
```

## Cache Invalidation

Manually invalidate cache when needed:

```typescript
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/hooks/use-data';

function Component() {
  const queryClient = useQueryClient();

  const refreshServices = () => {
    queryClient.invalidateQueries({ queryKey: queryKeys.services });
  };

  return <button onClick={refreshServices}>Refresh</button>;
}
```

## Notes

### Zustand Stores
The onboarding store ([src/store/onboarding-store.ts](src/store/onboarding-store.ts)) continues to use `DataService` directly since:
- Zustand stores cannot use React hooks
- Store handles complex multi-step state logic
- Components using the store should still benefit from cache via DataService → API layer

### DataService Layer
`DataService` remains as the abstraction layer:
- TanStack Query hooks call `DataService` methods
- Easy to swap API implementation without changing hooks
- Maintains separation of concerns

## Performance Improvements

- **Reduced API calls**: Cached data prevents redundant requests
- **Better UX**: Instant loading of cached data while refetching in background
- **Network efficiency**: Automatic request deduplication
- **Memory management**: Automatic garbage collection of unused cache

## Future Enhancements

1. **Prefetching**: Preload data before user navigation
2. **Pagination**: Built-in pagination support for large datasets
3. **Infinite queries**: For infinite scroll implementations
4. **Optimistic updates**: Update UI before server confirmation
5. **Dependent queries**: Chain queries based on previous results
