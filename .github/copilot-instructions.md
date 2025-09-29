# Lunaxcode Website - AI Coding Agent Instructions

## Architecture Overview

**Framework Stack:**
- Next.js 15.5.4 with React 19.1.0 and TypeScript
- Tailwind CSS v4 with custom design tokens
- Zustand for state management
- Turbopack for fast builds (`npm run build --turbopack`)

**Core Architecture Patterns:**
- **Data-Driven Design**: All content lives in `/src/data/` files (services, pricing, features, onboarding questions)
- **Service Abstraction**: `DataService` class provides clean API for data access with migration path to backend
- **Component Organization**:
  - `/sections/` - Page sections (Hero, Services, Pricing, etc.)
  - `/forms/` - Form components with validation
  - `/layout/` - Header, Footer, Navigation
  - `/onboarding/` - Multi-step onboarding modal flow

## Critical Developer Workflows

**Build Commands:**
```bash
npm run dev      # Development server with Turbopack
npm run build    # Production build with Turbopack
npm run start    # Production server
npm run lint     # ESLint checking
```

**Data Management:**
- Content changes go in `/src/data/` files, not hardcoded in components
- Onboarding questions are service-specific and defined in `onboarding-questions.ts`
- Use `DataService` for all data access - never import data files directly in components

## Component Patterns

**Design System:**
- Unified shadcn/ui + Shopify Polaris tokens in `/design-system/`
- CSS custom properties for theming: `var(--color-bg-fill-brand)`
- Component variants use Class Variance Authority (CVA)
- Import design tokens CSS in `globals.css`

**State Management:**
```typescript
// Use Zustand stores in /src/store/
import { useOnboardingStore } from '@/store/onboarding-store';

// Actions are methods, state is reactive
const { currentStep, nextStep, formData } = useOnboardingStore();
```

**Dynamic Forms:**
- Onboarding uses service-specific questions from `ONBOARDING_QUESTIONS[serviceType]`
- Form validation happens in store `canProceed()` method
- Questions support: text, select, checkbox, textarea types

## Data Flow & Integration Points

**Onboarding Flow:**
1. User selects service → `openModal(serviceType)`
2. Questions loaded dynamically from `DataService.getOnboardingQuestions()`
3. Form data stored in Zustand store
4. Submission generates JSON prompt + saves to localStorage
5. Redirects to payment with submission ID

**Email Integration:**
- Uses EmailJS (`@emailjs/browser`) for contact forms
- Configured in `DataService.sendContactEmail()` and `sendNotificationEmail()`
- Currently logs to console - needs API key configuration

**Payment Flow:**
- Onboarding redirects to `/payment?id=${submissionId}&service=${serviceType}`
- Payment page not implemented yet - placeholder route

## File Organization Conventions

**Import Paths:**
```typescript
// Use absolute imports with @ alias
import { DataService } from '@/lib/data-service';
import { SERVICES } from '@/data/services';
import { Button } from '@/components/ui/button'; // If using shadcn/ui
```

**Data Structure:**
- All static data in `/src/data/` with TypeScript const exports
- Types defined in `/src/types/index.ts`
- DataService provides abstraction layer for future API migration

**Component Structure:**
```typescript
// Client components marked with 'use client'
'use client';

import { useState } from 'react';
// ... component logic
```

## Common Patterns & Gotchas

**Form Handling:**
- Use controlled components with Zustand store state
- Validation logic lives in store methods (see `canProceed()`)
- Form data is nested: `formData.basicInfo.name`, `formData.serviceSpecific`

**Styling:**
- Use design token CSS variables: `bg-[var(--color-bg-fill-brand)]`
- Combine with Tailwind utilities
- Responsive design uses Tailwind breakpoints

**Data Persistence:**
- Temporary storage uses localStorage via DataService
- Includes migration helpers for future API integration
- Store submission IDs in `onboarding_list` array

**Navigation:**
- Client-side routing with Next.js App Router
- Dynamic redirects: `window.location.href = '/payment?id=...'`

## Development Priorities

1. **Data-First**: Always check `/src/data/` files for content changes
2. **Store-Driven**: UI state changes go through Zustand stores
3. **Service Abstracted**: Use DataService, not direct data imports
4. **Token-Based Styling**: Use design system tokens over arbitrary values
5. **Migration-Ready**: Code with future API integration in mind

## Key Reference Files

- `src/store/onboarding-store.ts` - Complete onboarding flow logic
- `src/lib/data-service.ts` - Data access patterns and localStorage handling
- `src/data/onboarding-questions.ts` - Dynamic form configuration
- `design-system/component-templates/Button.tsx` - Component architecture patterns
- `src/types/index.ts` - Complete type definitions</content>
<parameter name="filePath">/Users/erickluna/Cloud_Repo/lunaxcode-site/.github/copilot-instructions.md