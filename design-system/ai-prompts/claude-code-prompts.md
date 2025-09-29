# Claude Code Integration Prompts

> Context-aware prompts for generating components using the unified design system

## Getting Started

When working with Claude Code, reference the design system tokens and components from this repository:

```
Design Tokens: docs/unified-design-tokens.json
CSS Variables: docs/unified-design-tokens.css
Style Guide: docs/unified-style-guide.md
Component Templates: docs/component-templates/
```

---

## Component Generation Prompts

### Hero Section

```
Create a hero section component using our design system with:
- Dark theme background (--bg-primary)
- Display typography (--text-display) for the headline
- Centered alignment with max-width 1200px
- Primary CTA button using --accent-primary
- Responsive design (mobile: single column, desktop: maintain layout)

Design tokens reference: docs/unified-design-tokens.css
Component example: docs/component-templates/HeroSection.tsx
```

### Feature Grid

```
Build a feature grid section with:
- Auto-fit grid layout (minmax(300px, 1fr))
- Feature cards with:
  * Icon (48px, --accent-primary color)
  * Title (--text-h4, --weight-semibold)
  * Description (--text-body, --text-secondary)
  * Hover effect: translateY(-4px) + border glow
- Grid gap: var(--grid-gap)
- Card styling: feature card tokens from design system

Reference: docs/unified-style-guide.md (Feature Sections)
Template: docs/component-templates/FeatureCard.tsx
```

### Pricing Section

```
Generate a pricing section with:
- Grid layout: repeat(auto-fit, minmax(280px, 1fr))
- Pricing cards with:
  * Plan name, price, period
  * Feature list with checkmark icons
  * CTA button (primary style)
  * Optional "Recommended" badge (--accent-primary)
- Responsive: stack on mobile (<768px)

Design tokens: docs/unified-design-tokens.json (components.card.pricing)
Template: docs/component-templates/PricingCard.tsx
```

### Navigation Bar

```
Create a sticky navigation bar with:
- Height: var(--nav-height)
- Backdrop blur: var(--nav-backdrop)
- Logo, navigation links, and CTA buttons
- Border bottom: 1px solid var(--border-subtle)
- Active link color: var(--accent-primary)
- Hover transitions: var(--transition-fast)

Reference: docs/unified-style-guide.md (Navigation section)
Template: docs/component-templates/Navigation.tsx
```

### FAQ Accordion

```
Build an FAQ accordion component with:
- Max-width: 800px, centered
- Accordion items:
  * Question: --text-h5, chevron icon
  * Answer: --text-body, --text-secondary
  * Border-bottom: 1px solid var(--border-subtle)
  * Padding: 24px 0
- Smooth expand/collapse animation (var(--transition-base))

Design pattern: Linear FAQ section
Reference: docs/unified-style-guide.md (FAQ Section)
```

---

## Style Application Prompts

### Dark Theme Implementation

```
Apply dark theme styling using our design system:
- Background: var(--bg-primary) to var(--bg-tertiary) hierarchy
- Text: var(--text-primary) for headings, var(--text-secondary) for body
- Borders: var(--border-subtle) to var(--border-strong)
- Surface elevation: var(--surface-elevated) for cards
- Import CSS: docs/unified-design-tokens.css

Color palette: docs/unified-design-tokens.json (colors.dark)
```

### Button Variants

```
Create button components with these variants:
1. Primary: --accent-primary bg, white text, hover opacity 0.9
2. Secondary: transparent bg, --border-medium, hover --surface-elevated
3. Gradient: --gradient-primary bg, white text, bold weight
4. Outlined: 2px border, transparent bg (Cal.com style)

Sizing: padding var(--btn-primary-padding), radius var(--radius-md)
Reference: docs/unified-style-guide.md (Buttons section)
```

### Responsive Layout

```
Implement responsive breakpoints from design system:
- Mobile (<768px): single column, reduced padding, 0.9x typography
- Tablet (768px-1024px): 2-column grid, standard padding
- Desktop (>1024px): 3-4 column grid, full spacing

Breakpoint tokens: var(--breakpoint-sm) to var(--breakpoint-2xl)
Pattern reference: docs/unified-style-guide.md (Responsive Patterns)
```

---

## Animation & Interaction Prompts

### Card Hover Effects

```
Add hover interactions to cards using design system transitions:
- Transform: translateY(-4px)
- Border glow: border-color var(--accent-primary)
- Transition: var(--transition-base) with var(--ease-in-out)
- Scale buttons on hover: scale(1.02)

Timing functions: docs/unified-design-tokens.css (transition section)
```

### Page Transitions

```
Implement smooth page transitions with:
- Fade in animation: opacity 0 → 1, translateY(10px) → 0
- Duration: var(--duration-base)
- Timing: var(--ease-out)
- Stagger children by 50ms for sequential reveal

Animation reference: docs/unified-design-tokens.css (@keyframes)
```

---

## Integration Examples

### Full Landing Page

```
Generate a complete landing page using our design system with:

1. Navigation (sticky, blur backdrop)
2. Hero section (dark, centered, with CTA)
3. Feature grid (3 columns desktop, 1 column mobile)
4. Two-column feature showcase (alternating layout)
5. Pricing section (3-4 cards, recommended highlight)
6. FAQ accordion (centered, max-width 800px)
7. CTA section (gradient background, centered)

Design system files:
- Style guide: docs/unified-style-guide.md
- CSS tokens: docs/unified-design-tokens.css
- Component templates: docs/component-templates/

Apply:
- Dark theme throughout
- Linear/Notion-inspired aesthetics
- Smooth transitions (300ms ease-in-out)
- Responsive breakpoints
```

### Component Library Setup

```
Set up a component library using the unified design system:

1. Import design tokens CSS globally
2. Create base components:
   - Button (primary, secondary, gradient variants)
   - Card (feature, pricing variants)
   - Input (with focus states)
   - Navigation
3. Export all components with TypeScript types
4. Include Storybook documentation

Token reference: docs/unified-design-tokens.json
Templates: docs/component-templates/*.tsx
Style guide: docs/unified-style-guide.md
```

---

## Tailwind CSS Integration

```
Configure Tailwind to use our design system tokens:

1. Extend theme with:
   - Colors: accent-primary, accent-secondary, bg-primary/secondary/tertiary
   - Spacing: 0-32 scale (4px base unit)
   - Border radius: sm (4px) to 2xl (24px)
   - Font family: primary, display, mono

2. Add custom utilities for:
   - Gradient backgrounds
   - Backdrop blur navigation
   - Card hover effects

Configuration reference: docs/unified-style-guide.md (Tailwind Config)
Token values: docs/unified-design-tokens.json
```

---

## Style Debugging Prompts

### Design Token Verification

```
Verify design token implementation by checking:
- Are CSS variables imported? (unified-design-tokens.css)
- Do colors match the palette? (--bg-primary, --accent-primary)
- Is spacing consistent? (var(--space-*) scale)
- Are transitions applied? (var(--transition-base))

Debug checklist:
1. Inspect computed styles for var() values
2. Check browser DevTools for CSS variable values
3. Validate against docs/unified-design-tokens.css
```

### Accessibility Review

```
Review component accessibility using design system guidelines:
- Color contrast: Minimum 7:1 (AAA) for text
- Focus states: 2px outline, visible indicator
- Keyboard navigation: logical tab order, skip links
- ARIA labels: icons, interactive elements
- Semantic HTML: proper heading hierarchy

Reference: docs/unified-style-guide.md (Accessibility Guidelines)
```

---

## Quick Reference

### Color Variables
```css
/* Dark Theme */
--bg-primary: #000000
--bg-secondary: #0a0a0a
--text-primary: #ffffff
--text-secondary: #a0a0a0
--accent-primary: #5b6eff
--accent-secondary: #0066ff
```

### Typography Scale
```css
--text-display: 72px / 1.1 / bold
--text-h1: 56px / 1.2 / bold
--text-h2: 40px / 1.3 / bold
--text-body: 16px / 1.6 / regular
```

### Spacing Scale
```css
--space-2: 8px   /* Base unit */
--space-4: 16px  /* Standard spacing */
--space-6: 24px  /* Section gaps */
--space-8: 32px  /* Component padding */
```

### Common Patterns
```css
/* Button Primary */
background: var(--accent-primary);
padding: 12px 24px;
border-radius: var(--radius-md);
transition: var(--transition-base);

/* Feature Card */
background: var(--bg-secondary);
border: 1px solid var(--border-subtle);
border-radius: var(--radius-xl);
padding: var(--space-8);

/* Navigation */
height: var(--nav-height);
backdrop-filter: blur(20px);
border-bottom: 1px solid var(--border-subtle);
```

---

## Advanced Prompts

### Multi-Theme Support

```
Extend design system to support light and dark themes:
1. Add theme toggle component
2. Use [data-theme="light"] selector for light mode overrides
3. Transition theme changes smoothly (var(--transition-base))
4. Persist user preference in localStorage

Light theme tokens: docs/unified-design-tokens.css ([data-theme="light"])
```

### Gradient Enhancements

```
Add Cursor-inspired gradient effects:
- Primary gradient: linear-gradient(135deg, #ff006e 0%, #ff8c00 50%, #ffeb3b 100%)
- Apply to: CTA buttons, section backgrounds, card accents
- Animate gradient position on hover
- Combine with blur effects for depth

Gradient tokens: docs/unified-design-tokens.json (colors.gradient)
```

---

*For complete design system documentation, see: `docs/unified-style-guide.md`*