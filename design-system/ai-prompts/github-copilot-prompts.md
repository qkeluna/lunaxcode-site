# GitHub Copilot Integration Guide

> Comment patterns and code suggestions for the unified design system

## Setup

Add this comment block at the top of your files for better Copilot suggestions:

```typescript
/**
 * Design System: Unified (Linear, Notion, Cursor, Cal.com, Bird, Square)
 * Tokens: docs/unified-design-tokens.json
 * CSS: docs/unified-design-tokens.css
 * Guide: docs/unified-style-guide.md
 *
 * Color Palette:
 * - Dark: --bg-primary (#000), --text-primary (#fff), --accent-primary (#5b6eff)
 * - Light: --bg-primary (#fff), --text-primary (#000)
 *
 * Spacing: 8px base unit (--space-2 to --space-32)
 * Typography: --text-display (72px) to --text-caption (12px)
 * Transitions: --transition-base (300ms ease-in-out)
 */
```

---

## Comment Patterns for Code Generation

### Hero Section

```typescript
// Create a hero section with:
// - Dark background (--bg-primary)
// - Large display text (--text-display, --weight-bold)
// - Secondary text (--text-body-lg, --text-secondary)
// - Primary CTA button (--accent-primary, 12px 24px padding)
// - Centered layout, max-width 1200px

const HeroSection = () => {
  // Copilot will generate the component based on the pattern
```

### Feature Grid

```typescript
// Feature grid component:
// - Auto-fit grid: minmax(300px, 1fr)
// - Gap: var(--grid-gap)
// - Cards with icon (48px), title (--text-h4), description (--text-body)
// - Hover effect: translateY(-4px) + border glow (--accent-primary)
// - Background: --bg-secondary, border: --border-subtle

const FeatureGrid = ({ features }) => {
  // Copilot generates grid layout
```

### Pricing Cards

```typescript
// Pricing card component:
// - Background: --bg-primary
// - Border: 2px solid --border-medium (--accent-primary if recommended)
// - Plan name: --text-h5, --weight-semibold
// - Price: --text-h1, --weight-bold
// - Period: --text-body, --text-secondary
// - Features list with checkmarks (--accent-success)
// - CTA button (full width)

const PricingCard = ({ plan, price, features, recommended }) => {
  // Copilot generates pricing card
```

### Navigation Bar

```typescript
// Sticky navigation:
// - Height: var(--nav-height) = 64px
// - Backdrop blur: blur(20px)
// - Border bottom: 1px solid --border-subtle
// - Logo left, links center, CTA right
// - Link hover: --text-secondary → --text-primary
// - Active link: --accent-primary

const Navigation = ({ logo, links, ctaButton }) => {
  // Copilot generates navigation
```

---

## Inline Comment Patterns

### Styling

```typescript
// Background: dark theme primary
background: 'var(--bg-primary)',

// Text: large body with secondary color
fontSize: 'var(--text-body-lg)',
color: 'var(--text-secondary)',

// Spacing: 32px padding (--space-8)
padding: 'var(--space-8)',

// Border: subtle with medium radius
border: '1px solid var(--border-subtle)',
borderRadius: 'var(--radius-md)',

// Transition: base timing with ease-in-out
transition: 'var(--transition-base)',
```

### Responsive Design

```typescript
// Responsive grid:
// Desktop (>1024px): 3 columns
// Tablet (768-1024px): 2 columns
// Mobile (<768px): 1 column
// Gap: var(--grid-gap)

const gridStyles = {
  display: 'grid',
  // Copilot suggests responsive grid-template-columns
```

### Hover Effects

```typescript
// Hover: lift card and glow border
// Transform: translateY(-4px)
// Border color: --border-subtle → --accent-primary
// Transition: var(--transition-base)

onMouseEnter={(e) => {
  // Copilot generates hover effect
```

---

## Component Generation Patterns

### Button Component

```typescript
// Primary button component using design tokens
// Props: variant ('primary' | 'secondary' | 'gradient'), size, children
// Primary: --accent-primary bg, white text
// Secondary: transparent bg, --border-medium
// Gradient: --gradient-primary bg
// Hover: opacity 0.9, scale 1.02

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  // Copilot completes the component
```

### Card Component

```typescript
// Feature card with icon, title, description, optional link
// Background: --bg-secondary
// Border: 1px solid --border-subtle
// Border radius: --radius-xl (16px)
// Padding: --space-8 (32px)
// Hover: translateY(-4px), border → --accent-primary

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  link?: { text: string; href: string };
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  // Copilot generates card
```

### Form Input

```typescript
// Input field with design system styling
// Background: --bg-primary
// Border: 1px solid --border-medium
// Focus: border → --accent-primary, no outline
// Padding: 12px 16px
// Border radius: --radius-md (8px)

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  // Copilot completes input
```

---

## Layout Patterns

### Container Layout

```typescript
// Centered container with max-width
// Max-width: var(--container-max-width) = 1200px
// Padding: var(--container-padding) = 24px
// Margin: 0 auto for centering

<div style={{
  maxWidth: 'var(--container-max-width)',
  // Copilot suggests remaining container styles
```

### Section Layout

```typescript
// Section with vertical padding
// Padding: var(--section-padding-md) = 80px vertical
// Container padding horizontal
// Background: optional (--bg-secondary for contrast)

<section style={{
  padding: 'var(--section-padding-md) 0',
  // Copilot completes section layout
```

### Grid System

```typescript
// Auto-fit responsive grid
// Columns: minmax(300px, 1fr)
// Gap: var(--grid-gap) = 24px
// Works for feature grids, pricing cards, blog posts

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  // Copilot adds gap and other grid properties
```

---

## Animation Patterns

### Fade In Animation

```typescript
// Fade in from bottom
// Start: opacity 0, translateY(10px)
// End: opacity 1, translateY(0)
// Duration: var(--duration-base) = 300ms
// Timing: var(--ease-out)

const fadeInStyle = {
  animation: 'fadeIn var(--duration-base) var(--ease-out)',
  // Copilot suggests @keyframes if needed
```

### Hover Transform

```typescript
// Button hover effect
// Transform: scale(1.02)
// Opacity: 0.9
// Transition: var(--transition-base)

':hover': {
  transform: 'scale(1.02)',
  // Copilot completes hover effect
```

---

## Theming Patterns

### Dark Theme (Default)

```typescript
// Apply dark theme tokens
// Background: --bg-primary (#000)
// Text: --text-primary (#fff)
// Borders: --border-subtle (rgba(255,255,255,0.1))

const darkTheme = {
  background: 'var(--bg-primary)',
  // Copilot suggests dark theme properties
```

### Light Theme Toggle

```typescript
// Light theme override
// Use [data-theme="light"] selector
// Background: white (#fff)
// Text: black (#000)
// Borders: rgba(0,0,0,0.1)

const lightThemeOverride = `
  [data-theme="light"] {
    --bg-primary: #ffffff;
    // Copilot suggests light theme overrides
```

---

## Common CSS Combinations

### Primary Button Style

```typescript
// Complete primary button styling
background: 'var(--accent-primary)',
color: '#ffffff',
padding: '12px 24px',
borderRadius: 'var(--radius-md)',
fontSize: 'var(--text-body)',
fontWeight: 'var(--weight-semibold)',
border: 'none',
cursor: 'pointer',
transition: 'var(--transition-base)',
```

### Feature Card Style

```typescript
// Complete feature card styling
background: 'var(--bg-secondary)',
border: '1px solid var(--border-subtle)',
borderRadius: 'var(--radius-xl)',
padding: 'var(--space-8)',
transition: 'var(--transition-base)',
cursor: 'pointer',
```

### Navigation Style

```typescript
// Complete navigation styling
position: 'sticky',
top: 0,
height: 'var(--nav-height)',
background: 'var(--bg-primary)',
backdropFilter: 'blur(20px)',
borderBottom: '1px solid var(--border-subtle)',
padding: '0 48px',
display: 'flex',
alignItems: 'center',
justifyContent: 'space-between',
zIndex: 1000,
```

---

## Multi-line Comment Blocks

### Complete Component Template

```typescript
/**
 * Hero Section Component
 *
 * Layout:
 * - Centered content, max-width 1200px
 * - Vertical padding: var(--section-padding-lg) = 120px
 * - Horizontal padding: var(--container-padding) = 24px
 *
 * Typography:
 * - Title: var(--text-display) = 72px, bold, tight tracking
 * - Subtitle: var(--text-body-lg) = 18px, secondary color
 *
 * Actions:
 * - Primary CTA: accent-primary background, white text
 * - Secondary CTA: transparent bg, border-medium border
 * - Gap between buttons: var(--space-4) = 16px
 *
 * Theme Support:
 * - Dark (default): --bg-primary background
 * - Light: white background, black text
 */

const HeroSection = ({ title, subtitle, ctaPrimary, ctaSecondary, theme = 'dark' }) => {
  return (
    // Copilot generates complete hero section based on the spec
```

### API Integration Pattern

```typescript
/**
 * Fetch and display pricing data
 *
 * Data Structure:
 * - plans: Array<{ name, price, period, features[], recommended }>
 *
 * UI Layout:
 * - Grid: auto-fit, minmax(280px, 1fr)
 * - Each card: pricing card component from design system
 * - Recommended plan: highlighted border (--accent-primary)
 *
 * Tokens Used:
 * - Card bg: --bg-primary
 * - Border: --border-medium (2px if recommended: --accent-primary)
 * - Price text: --text-h1, --weight-bold
 * - Features: --text-body-sm with checkmark icons
 */

const PricingSection = () => {
  // Copilot generates data fetching and rendering
```

---

## Quick Token Reference

Add this comment block for quick access:

```typescript
/**
 * Quick Token Reference:
 *
 * Colors:
 * --bg-primary: #000 | --bg-secondary: #0a0a0a | --bg-tertiary: #1a1a1a
 * --text-primary: #fff | --text-secondary: #a0a0a0 | --text-tertiary: #666
 * --accent-primary: #5b6eff | --accent-secondary: #0066ff
 *
 * Spacing (8px base):
 * --space-2: 8px | --space-4: 16px | --space-6: 24px | --space-8: 32px
 *
 * Typography:
 * --text-display: 72px | --text-h1: 56px | --text-h2: 40px | --text-body: 16px
 *
 * Border Radius:
 * --radius-md: 8px | --radius-lg: 12px | --radius-xl: 16px
 *
 * Transitions:
 * --transition-fast: 150ms | --transition-base: 300ms | --transition-slow: 500ms
 * --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
 */
```

---

*For complete design system documentation: `docs/unified-style-guide.md`*