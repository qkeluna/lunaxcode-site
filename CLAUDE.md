# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Architecture

### Tech Stack
- **Framework**: Next.js 15.5.4 with App Router
- **TypeScript**: Full TypeScript with strict mode
- **Styling**: Tailwind CSS 4.0 with CSS variables
- **UI Components**: Shadcn/ui (configured in components.json)
- **Icons**: Lucide React
- **State Management**: Zustand for global state
- **Forms**: Zod for validation
- **Email**: EmailJS for contact forms

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page - orchestrates all sections
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── layout/             # Navigation, Header, Footer
│   ├── sections/           # Page sections (Hero, Services, Features, etc.)
│   ├── onboarding/         # Multi-step onboarding modal system
│   ├── forms/              # Contact forms and question renderers
│   └── ui/                 # Base UI components (Shadcn/ui)
├── store/                  # Zustand stores
│   ├── ui-store.ts         # Mobile menu and UI state
│   └── onboarding-store.ts # Complex onboarding flow state
├── data/                   # Static data and configuration
├── lib/                    # Utilities and services
│   ├── utils.ts            # Tailwind merge utilities
│   └── data-service.ts     # Data abstraction layer
└── types/                  # TypeScript type definitions
```

### Key Architectural Patterns

#### 1. **Data Service Layer**
The `DataService` class in `src/lib/data-service.ts` provides a clean abstraction for data access:
- Currently uses local data from `src/data/` files
- Built for easy migration to API backend
- Handles localStorage persistence temporarily
- Includes email notification hooks (EmailJS ready)

#### 2. **Onboarding System**
Complex multi-step onboarding flow managed by Zustand:
- **Store**: `onboarding-store.ts` manages state, validation, and flow
- **Components**: Step-based components in `src/components/onboarding/`
- **Data**: Dynamic questions per service type in `src/data/onboarding-questions.ts`
- **Flow**: Service selection → Basic info → Service-specific questions → Summary → Success

#### 3. **Design System Integration**
- **Tokens**: CSS variables defined in `src/app/globals.css`
- **Components**: Shadcn/ui base components in `src/components/ui/`
- **Templates**: Reference templates in `design-system/component-templates/`
- **Style Guide**: Comprehensive guide at `design-system/unified-style-guide.md`

#### 4. **State Management**
- **UI Store**: Simple navigation and mobile menu state
- **Onboarding Store**: Complex form flow with validation and persistence
- **No providers needed**: Zustand works directly in components

### Design System

This project uses a comprehensive design system inspired by Linear, Notion, and Cursor:

#### Key Design Tokens
```css
/* Colors */
--bg-primary: #000000        /* Main background */
--bg-secondary: #0a0a0a      /* Card backgrounds */
--text-primary: #ffffff      /* Main text */
--text-secondary: #a0a0a0    /* Secondary text */
--accent-primary: #5b6eff    /* Primary brand color */

/* Typography */
--text-display: 72px         /* Hero headlines */
--text-h1: 56px             /* Main headings */
--text-body: 16px           /* Body text */

/* Spacing */
--space-4: 16px             /* Standard spacing */
--space-8: 32px             /* Component padding */
```

#### Component Conventions
- Dark-first design with subtle surfaces
- 8px base spacing unit
- Consistent border radius (8px, 12px, 16px)
- Smooth transitions (0.3s ease-in-out)
- Hover effects: translateY(-4px) + border glow

### Business Logic

#### Services & Pricing
- **Services**: Defined in `src/data/services.ts` with timelines and descriptions
- **Pricing**: Flexible pricing in `src/data/pricing.ts` with featured plans
- **Features**: Marketing features in `src/data/features.ts`
- **Add-ons**: Additional services in `src/data/addons.ts`

#### Contact & Lead Management
- **Contact Form**: Direct email via EmailJS
- **Onboarding**: Captures detailed project requirements
- **Lead Flow**: Onboarding → Payment redirect → Project fulfillment

### Important Conventions

#### Path Aliases
- `@/*` maps to `src/*` (configured in tsconfig.json)
- Use absolute imports: `import { Button } from '@/components/ui/button'`

#### Component Patterns
- **Section Components**: Self-contained page sections with data fetching
- **Layout Components**: Reusable layout elements (Header, Footer, Navigation)
- **UI Components**: Base components following Shadcn/ui patterns
- **Form Components**: Controlled components with Zod validation

#### TypeScript Usage
- Strict mode enabled
- Interface definitions in `src/types/index.ts`
- Generic types for reusable components
- Proper prop typing for all components

### Data Flow

1. **Static Data**: Defined in `src/data/` files
2. **Data Service**: `DataService` class provides abstraction
3. **Components**: Fetch data via `DataService` methods
4. **Store**: Zustand manages complex state (onboarding, UI)
5. **Persistence**: LocalStorage for temporary data, EmailJS for submissions

### Styling Guidelines

#### Tailwind Configuration
- Uses Tailwind CSS 4.0 with CSS variables
- Custom design tokens integrated
- Responsive breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)

#### CSS Variables Pattern
```css
/* Use design system variables */
background-color: var(--bg-primary);
color: var(--text-primary);
padding: var(--space-4);
border-radius: var(--radius-md);
```

#### Component Styling
- **Cards**: `bg-secondary`, `border-subtle`, `rounded-xl`
- **Buttons**: Follow design system variants (primary, secondary, gradient)
- **Typography**: Use semantic classes (`text-h1`, `text-body`, etc.)

### Testing & Quality

- **ESLint**: Configured with Next.js TypeScript rules
- **TypeScript**: Strict type checking enabled
- **Build**: Uses Turbopack for faster builds
- **No Tests**: No testing framework currently configured

### Deployment Considerations

- **Next.js App**: Server-side rendering ready
- **Static Assets**: In `public/` directory
- **Environment**: No environment variables currently used
- **Database**: Currently localStorage-based, ready for API migration

### Migration Path

The architecture is designed for easy migration from localStorage to a backend API:

1. **Data Service**: Already abstracts data access
2. **Types**: Comprehensive TypeScript definitions ready
3. **State Management**: Zustand stores can easily integrate with API calls
4. **Email**: EmailJS integration ready for production

When implementing API backend:
1. Replace `DataService` methods with API calls
2. Add environment variables for API endpoints
3. Implement server-side data persistence
4. Add authentication if needed

### Design System Files

Reference these files when creating new components:
- `design-system/unified-style-guide.md` - Complete design system documentation
- `design-system/unified-design-tokens.css` - CSS variable definitions
- `design-system/component-templates/` - Reference component implementations
- `design-system/ai-prompts/claude-code-prompts.md` - AI-specific component generation prompts