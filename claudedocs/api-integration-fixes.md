# API Integration Fixes

**Date**: 2025-10-06
**Issue**: Onboarding form submission failing with `❌ API Error Response: {}`

## Root Causes Identified

### 1. Field Name Mismatch
**Problem**: Backend expects `full_name`, frontend was sending `name`
**Impact**: All API requests were being rejected immediately

### 2. Phone Number Validation
**Problem**: Backend requires Philippine phone format (`+63...`)
**Impact**: Submissions with invalid phone formats would fail

### 3. Missing Required Fields
**Problem**: Backend AI prompt generation requires `timeline` and `project_description`
**Impact**: Submissions without these fields triggered "sequence item 5: expected str instance, NoneType found" error

## Changes Implemented

### [src/types/api.ts](../src/types/api.ts)
```typescript
// Changed from 'name' to 'full_name'
export interface LeadCreate {
  full_name: string;  // ✅ Was: name: string
  email: string;
  phone?: string;
  // ... rest of fields
}
```

### [src/lib/data-service.ts](../src/lib/data-service.ts)

#### Added Phone Validation Helper
```typescript
private static formatPhilippinePhone(phone: string | undefined): string | undefined {
  if (!phone) return undefined;

  const digits = phone.replace(/\D/g, '');

  // Handle formats: 63XXXXXXXXXX, 9XXXXXXXXX, 09XXXXXXXXXX
  if (digits.startsWith('63')) {
    return `+${digits}`;
  } else if (digits.startsWith('9') && digits.length === 10) {
    return `+63${digits}`;
  } else if (digits.startsWith('0') && digits.length === 11) {
    return `+63${digits.substring(1)}`;
  }

  // Invalid format - skip phone field
  console.warn('⚠️ Invalid phone format, skipping phone field:', phone);
  return undefined;
}
```

#### Updated saveOnboarding Method
```typescript
static async saveOnboarding(data: OnboardingData): Promise<{ id: string }> {
  try {
    // Get service info for default timeline
    const services = await this.getServices();
    const service = services.find(s => s.id === data.serviceType);
    const defaultTimeline = service?.timeline || '1-2 weeks';

    // Generate project description from available data
    const projectDescription = data.additionalNotes ||
      (Object.keys(data.serviceSpecific || {}).length > 0
        ? `Service requirements: ${JSON.stringify(data.serviceSpecific)}`
        : `${service?.name || 'Project'} request`);

    const leadData: LeadCreate = {
      full_name: data.basicInfo.name,  // ✅ Changed from 'name'
      email: data.basicInfo.email,
      phone: this.formatPhilippinePhone(data.basicInfo.phone),  // ✅ Format validation
      company: data.basicInfo.company || undefined,
      service_type: data.serviceType,
      budget_range: data.budget || 'not_specified',
      timeline: data.timeline || defaultTimeline,  // ✅ Always provide timeline
      project_description: projectDescription,  // ✅ Always provide description
      answers: data.serviceSpecific || {},
      source: 'onboarding_form',
    };

    // Rest of implementation...
  }
}
```

### [src/lib/api.ts](../src/lib/api.ts)

#### Enhanced Error Logging
```typescript
console.error('❌ API Error Response:', {
  status: error.response.status,
  data: error.response.data,
  url: error.config?.url,
  method: error.config?.method,
  requestData: error.config?.data,  // ✅ Added for debugging
});
```

### [src/app/api-test/page.tsx](../src/app/api-test/page.tsx)
```typescript
// Updated test data
const testLead = {
  full_name: 'Test User',  // ✅ Changed from 'name'
  email: 'test@example.com',
  // ... rest
};
```

## Backend Requirements Discovered

### Required Fields
- `full_name` (string) - Customer name
- `email` (string) - Customer email
- `service_type` (string) - Must match service IDs from `/api/v1/services`
- `budget_range` (string) - Can be "not_specified"
- `timeline` (string) - Required for AI prompt generation
- `project_description` (string) - Required for AI prompt generation
- `answers` (object) - Can be empty object

### Optional Fields
- `phone` (string) - Must be Philippine format if provided (`+63XXXXXXXXXX`)
- `company` (string)
- `source` (string)

### Valid Service Types
- `landing_page`
- `basic_website`
- `advanced_website`
- `basic_mobile_app`
- `advanced_mobile_app`

## Testing Results

### ✅ All Tests Passing
```bash
# Test 1: Full payload with Philippine phone
curl -X POST https://lunaxcode-fastapi.vercel.app/api/v1/leads \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "John Doe",
    "email": "john@example.com",
    "phone": "+639171234567",
    "service_type": "landing_page",
    "budget_range": "1000-3000",
    "timeline": "48 hours",
    "project_description": "Landing page request",
    "answers": {},
    "source": "onboarding_form"
  }'
# Response: 200 OK with lead ID

# Test 2: Without phone (valid)
curl -X POST https://lunaxcode-fastapi.vercel.app/api/v1/leads \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Jane Smith",
    "email": "jane@example.com",
    "service_type": "basic_website",
    "budget_range": "not_specified",
    "timeline": "5-7 days",
    "project_description": "Business website",
    "answers": {}
  }'
# Response: 200 OK with lead ID
```

## Impact

### Before Fixes
- ❌ 100% of onboarding submissions failing
- ❌ No error details visible to developers
- ❌ Fallback to localStorage always triggered

### After Fixes
- ✅ All valid submissions succeed
- ✅ Phone validation handles multiple formats gracefully
- ✅ Default values prevent missing field errors
- ✅ Enhanced logging for debugging
- ✅ Proper error handling with fallback

## Future Improvements

### Recommended Frontend Changes
1. **Add Timeline Selection**: Add timeline picker in onboarding flow
2. **Add Budget Selection**: Add budget range selector
3. **Phone Input Validation**: Add frontend validation with format hints
4. **Better Error Messages**: Show user-friendly validation errors

### Recommended Backend Changes
1. **Make project_description Optional**: Use service name as default
2. **Make timeline Optional**: Use service timeline as default
3. **Phone Format Flexibility**: Accept international formats or make truly optional
4. **Better Validation Errors**: Return field-specific error messages

## Deployment Notes

- ✅ TypeScript compilation passes
- ✅ No breaking changes to existing code
- ✅ Backward compatible with localStorage fallback
- ✅ Ready for production deployment

## Related Files

- [API Requirements](./api-requirements.md) - Backend API specification
- [src/lib/data-service.ts](../src/lib/data-service.ts) - Data abstraction layer
- [src/types/api.ts](../src/types/api.ts) - API type definitions
- [src/lib/api.ts](../src/lib/api.ts) - API client implementation
