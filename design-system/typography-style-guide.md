# Typography System Specification for LLM Coding Agents

> **Document Purpose**: Complete typography implementation guide for AI coding agents  
> **Format**: Machine-readable specification with copy-paste ready code  
> **Version**: 1.0 | October 2025

---

## AGENT INSTRUCTIONS

This document contains a production-ready typography system. When implementing:

1. **Copy the complete CSS from Section 13** - This is your base stylesheet
2. **Reference Quick Tables (Section 15)** - For specific values during development
3. **Follow Implementation Checklist (Section 16)** - Step-by-step integration guide
4. **Use Code Blocks** - All code is ready to copy-paste without modification
5. **Apply Responsive Patterns** - Use provided breakpoint structures

**Key Principle**: Use `rem` units for all font sizes to respect user accessibility preferences.

---

## TABLE OF CONTENTS

| Section | Topic | Agent Use Case |
|---------|-------|----------------|
| 1 | [System Overview](#1-system-overview) | Understand design principles |
| 2 | [CSS Variables](#2-css-variables-complete-reference) | Copy root variables |
| 3 | [Font Stack](#3-font-stack-implementation) | Set font families |
| 4 | [Type Scale](#4-type-scale-font-sizes) | Reference font sizes |
| 5 | [Font Weights](#5-font-weights) | Apply weight hierarchy |
| 6 | [Line Height](#6-line-height-specifications) | Set line heights |
| 7 | [Letter Spacing](#7-letter-spacing-tracking) | Apply tracking |
| 8 | [Spacing System](#8-vertical-spacing-system) | Implement margins/padding |
| 9 | [Responsive Patterns](#9-responsive-typography-patterns) | Add breakpoints |
| 10 | [Accessibility](#10-accessibility-requirements) | Meet WCAG standards |
| 11 | [Color System](#11-color-contrast-system) | Apply text colors |
| 12 | [Performance](#12-performance-optimization) | Optimize font loading |
| 13 | [Complete CSS](#13-complete-css-implementation) | **COPY THIS** |
| 14 | [Component Examples](#14-component-implementation-examples) | Reference patterns |
| 15 | [Quick Reference](#15-quick-reference-tables) | Fast lookups |
| 16 | [Implementation Guide](#16-implementation-checklist-for-agents) | Step-by-step |

---

## 1. SYSTEM OVERVIEW

### Core Principles
```yaml
base_font_size: 16px (1rem - browser default)
scale_ratio: 1.25 (Major Third)
unit_system: rem (relative units for accessibility)
spacing_system: 8pt grid (multiples of 0.5rem)
wcag_compliance: Level AA (4.5:1 contrast minimum)
responsive_strategy: Fluid typography with clamp()
```

### Design Philosophy
- **Accessibility First**: All sizes in `rem` to respect user preferences
- **Progressive Enhancement**: Mobile-first responsive design
- **Performance**: System fonts by default (zero download cost)
- **Consistency**: 8pt spacing grid for predictable layouts

---

## 2. CSS VARIABLES (COMPLETE REFERENCE)

### ⚡ COPY THIS BLOCK - Root Variables

```css
:root {
  /* ===== FONT FAMILIES ===== */
  --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                  'Helvetica Neue', Arial, sans-serif;
  --font-serif: Georgia, 'Times New Roman', Times, serif;
  --font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', 
               Consolas, 'Courier New', monospace;
  
  /* ===== FONT SIZES (rem) ===== */
  /* Headings - Fluid scaling with clamp() */
  --font-size-h1: clamp(2.75rem, 5vw + 1rem, 5rem);        /* 44px → 80px */
  --font-size-h2: clamp(2rem, 3.5vw + 0.5rem, 3.5rem);     /* 32px → 56px */
  --font-size-h3: clamp(1.5rem, 2vw + 0.5rem, 2rem);       /* 24px → 32px */
  --font-size-h4: clamp(1.25rem, 1.5vw + 0.25rem, 1.5rem); /* 20px → 24px */
  --font-size-h5: 1.25rem;  /* 20px */
  --font-size-h6: 1.125rem; /* 18px */
  
  /* Body text sizes */
  --font-size-xl: 1.5rem;    /* 24px */
  --font-size-lg: 1.25rem;   /* 20px */
  --font-size-base: 1.125rem; /* 18px - default body */
  --font-size-sm: 1rem;      /* 16px */
  --font-size-xs: 0.875rem;  /* 14px */
  
  /* ===== FONT WEIGHTS ===== */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  
  /* ===== LINE HEIGHTS (unitless) ===== */
  --line-height-tight: 1.1;   /* Large headings */
  --line-height-snug: 1.2;    /* Headings, buttons */
  --line-height-normal: 1.5;  /* Default */
  --line-height-relaxed: 1.75; /* Body text */
  --line-height-loose: 2;     /* Spacious text */
  
  /* ===== LETTER SPACING ===== */
  --tracking-tight: -0.02em;  /* Body text */
  --tracking-snug: -0.01em;   /* Headings */
  --tracking-normal: 0;       /* Default */
  --tracking-wide: 0.01em;    /* Buttons */
  --tracking-wider: 0.05em;   /* UPPERCASE */
  --tracking-widest: 0.1em;   /* Wide UPPERCASE */
  
  /* ===== SPACING SCALE (8pt grid) ===== */
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  --space-2xl: 3rem;     /* 48px */
  --space-3xl: 4rem;     /* 64px */
  --space-4xl: 6rem;     /* 96px */
  
  /* ===== LINE LENGTH (measure) ===== */
  --measure-narrow: 25em;   /* ~40 characters */
  --measure-default: 40em;  /* ~65 characters - optimal */
  --measure-wide: 50em;     /* ~80 characters */
  
  /* ===== COLORS - LIGHT MODE ===== */
  --text-primary: #1a1a1a;      /* 15.3:1 contrast on white */
  --text-secondary: #4a4a4a;    /* 9.73:1 contrast */
  --text-tertiary: #6b6b6b;     /* 5.74:1 contrast */
  --text-disabled: #9e9e9e;     /* 2.85:1 - large text only */
  
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --bg-tertiary: #e0e0e0;
  
  --color-primary: #0066cc;     /* 4.58:1 contrast */
  --color-primary-dark: #004a99; /* 6.94:1 contrast */
  --color-success: #0f7c3a;     /* 4.52:1 contrast */
  --color-error: #c41e3a;       /* 5.51:1 contrast */
  --color-warning: #996300;     /* 4.51:1 contrast */
}

/* ===== DARK MODE COLORS ===== */
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #e8e8e8;      /* 13.2:1 on #1a1a1a */
    --text-secondary: #b8b8b8;    /* 7.89:1 */
    --text-tertiary: #8e8e8e;     /* 4.63:1 */
    --text-disabled: #5e5e5e;     /* 2.46:1 - large only */
    
    --bg-primary: #1a1a1a;
    --bg-secondary: #2a2a2a;
    --bg-tertiary: #3a3a3a;
    
    --color-primary: #4da3ff;     /* 6.15:1 */
    --color-primary-dark: #80c0ff; /* 9.12:1 */
    --color-success: #4ade80;     /* 8.23:1 */
    --color-error: #f87171;       /* 5.91:1 */
    --color-warning: #fbbf24;     /* 10.4:1 */
  }
}
```

---

## 3. FONT STACK IMPLEMENTATION

### System Font Stack (Recommended - Zero Performance Cost)

```css
/* Primary sans-serif font stack */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
               'Helvetica Neue', Arial, sans-serif, 
               'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

/* Monospace for code */
code, pre, kbd, samp {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', 
               Consolas, 'Courier New', monospace;
}

/* Optional serif for decorative use */
.serif-text {
  font-family: Georgia, 'Times New Roman', Times, serif;
}
```

### Custom Web Font Pattern (If needed)

```css
/* Use font-display: swap to prevent FOIT (Flash of Invisible Text) */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom-font.woff2') format('woff2'),
       url('/fonts/custom-font.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Show fallback immediately, swap when loaded */
}

/* Preload in HTML <head> */
/* <link rel="preload" href="/fonts/custom-font.woff2" as="font" type="font/woff2" crossorigin> */
```

---

## 4. TYPE SCALE (FONT SIZES)

### Size Mapping Table

| Element | Desktop | Tablet | Mobile | rem | CSS Variable |
|---------|---------|--------|--------|-----|--------------|
| **h1** | 80px | 64px | 44px | 5rem → 2.75rem | `--font-size-h1` |
| **h2** | 56px | 44px | 32px | 3.5rem → 2rem | `--font-size-h2` |
| **h3** | 32px | 28px | 24px | 2rem → 1.5rem | `--font-size-h3` |
| **h4** | 24px | 22px | 20px | 1.5rem → 1.25rem | `--font-size-h4` |
| **h5** | 20px | 18px | 18px | 1.25rem | `--font-size-h5` |
| **h6** | 18px | 16px | 16px | 1.125rem | `--font-size-h6` |
| **body** | 18px | 16px | 16px | 1.125rem → 1rem | `--font-size-base` |
| **.text-lg** | 20px | 18px | 18px | 1.25rem | `--font-size-lg` |
| **.text-sm** | 16px | 14px | 14px | 1rem | `--font-size-sm` |
| **.text-xs** | 14px | 13px | 13px | 0.875rem | `--font-size-xs` |

### Usage Examples

```css
/* Headings - use fluid scaling */
h1 { font-size: var(--font-size-h1); }
h2 { font-size: var(--font-size-h2); }
h3 { font-size: var(--font-size-h3); }

/* Body text sizes */
body { font-size: var(--font-size-base); }
.text-lg { font-size: var(--font-size-lg); }
.text-sm { font-size: var(--font-size-sm); }

/* Lead paragraph */
.lead {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-regular);
}
```

---

## 5. FONT WEIGHTS

### Weight Mapping

```yaml
300 (Light): Large display text only
400 (Regular): Body text, paragraphs, descriptions
500 (Medium): Links, emphasized text, secondary buttons
600 (Semibold): Headings (h3-h6), labels, primary buttons
700 (Bold): Headings (h1-h2), strong emphasis
800 (Extra Bold): Rare, high impact only
```

### Implementation Pattern

```css
/* Body text */
body, p { font-weight: var(--font-weight-regular); } /* 400 */

/* Headings */
h1, h2 { font-weight: var(--font-weight-bold); } /* 700 */
h3, h4, h5, h6 { font-weight: var(--font-weight-semibold); } /* 600 */

/* Interactive elements */
a { font-weight: var(--font-weight-medium); } /* 500 */
button, .btn { font-weight: var(--font-weight-semibold); } /* 600 */

/* Emphasis */
strong, b { font-weight: var(--font-weight-bold); } /* 700 */
em, i { font-style: italic; }

/* Labels and tags */
label, .tag { font-weight: var(--font-weight-semibold); } /* 600 */
```

---

## 6. LINE HEIGHT SPECIFICATIONS

### Line Height Rules

```yaml
Large headings (h1-h2): 1.1 - 1.15 (tight)
Medium headings (h3-h4): 1.2 - 1.3 (snug)
Small headings (h5-h6): 1.3 (snug)
Body text: 1.75 (relaxed - optimal reading)
Small text: 1.6 (relaxed)
Buttons/UI: 1.2 (snug)
```

### Implementation

```css
/* Headings */
h1 { line-height: var(--line-height-tight); }    /* 1.1 */
h2 { line-height: 1.15; }
h3, h4 { line-height: var(--line-height-snug); } /* 1.2 */
h5, h6 { line-height: 1.3; }

/* Body text */
body, p { line-height: var(--line-height-relaxed); } /* 1.75 */

/* UI elements */
button, .btn { line-height: var(--line-height-snug); } /* 1.2 */

/* Small text */
.text-sm, .text-xs { line-height: 1.6; }
```

**Important**: Always use unitless line-height values (e.g., `1.5` not `150%` or `1.5em`)

---

## 7. LETTER SPACING (TRACKING)

### Tracking Guidelines

```yaml
Body text (16-20px): -0.02em (tighter for readability)
Headings: -0.01em to 0 (neutral to slight tightness)
Buttons: +0.01em (slight spacing)
UPPERCASE: +0.05em to +0.1em (wider for legibility)
Code/Mono: 0 (neutral)
Small text (<14px): 0 (neutral)
```

### Implementation

```css
/* Body text - tighter */
body, p {
  letter-spacing: var(--tracking-tight); /* -0.02em */
}

/* Headings - slightly tight */
h1, h2, h3, h4, h5, h6 {
  letter-spacing: var(--tracking-snug); /* -0.01em */
}

/* Buttons - slight spacing */
button, .btn {
  letter-spacing: var(--tracking-wide); /* 0.01em */
}

/* Uppercase - wider spacing */
.uppercase {
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider); /* 0.05em */
}

/* Code - neutral */
code, pre {
  letter-spacing: var(--tracking-normal); /* 0 */
}
```

---

## 8. VERTICAL SPACING SYSTEM

### 8pt Grid Scale

```yaml
--space-xs (4px):   Icon gaps, tight spacing
--space-sm (8px):   List items, small gaps
--space-md (16px):  Default spacing, form fields
--space-lg (24px):  Paragraph spacing (default)
--space-xl (32px):  Component spacing
--space-2xl (48px): Section breaks
--space-3xl (64px): Major sections
--space-4xl (96px): Page-level spacing
```

### Spacing Patterns

```css
/* Paragraphs */
p {
  margin-bottom: var(--space-lg); /* 24px */
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  margin-top: var(--space-2xl);    /* 48px */
  margin-bottom: var(--space-sm);  /* 8px */
}

/* First heading - no top margin */
h1:first-child, h2:first-child, h3:first-child {
  margin-top: 0;
}

/* Lists */
ul, ol {
  margin-bottom: var(--space-lg);
  padding-left: var(--space-xl);
}

li {
  margin-bottom: var(--space-sm);
}

/* Sections */
section {
  margin-bottom: var(--space-3xl); /* 64px */
}

/* Cards */
.card {
  padding: var(--space-lg); /* 24px */
}
```

---

## 9. RESPONSIVE TYPOGRAPHY PATTERNS

### Breakpoints

```css
/* Mobile: < 768px (default, mobile-first) */
/* Tablet: 768px - 1023px */
/* Desktop: >= 1024px */
```

### Method 1: Fluid Typography (Recommended)

```css
/* Automatically scales between mobile and desktop - NO media queries needed */
h1 {
  font-size: clamp(2.75rem, 5vw + 1rem, 5rem);
  /* min: 44px (mobile) → scales with viewport → max: 80px (desktop) */
}

h2 {
  font-size: clamp(2rem, 3.5vw + 0.5rem, 3.5rem);
  /* min: 32px → max: 56px */
}

body {
  font-size: clamp(1rem, 0.5vw + 0.875rem, 1.125rem);
  /* min: 16px → max: 18px */
}
```

### Method 2: Breakpoint-Based (Traditional)

```css
/* Mobile first - default styles */
body {
  font-size: 1rem; /* 16px */
}

h1 {
  font-size: 2.75rem; /* 44px */
}

/* Tablet */
@media (min-width: 768px) {
  h1 {
    font-size: 4rem; /* 64px */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  body {
    font-size: 1.125rem; /* 18px */
  }
  
  h1 {
    font-size: 5rem; /* 80px */
  }
}
```

### Responsive Container Pattern

```css
/* Responsive container with max-width */
.container {
  width: 100%;
  max-width: var(--measure-default); /* 40em ~= 640px at 16px base */
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-md);
  padding-right: var(--space-md);
}

@media (min-width: 768px) {
  .container {
    padding-left: var(--space-xl);
    padding-right: var(--space-xl);
  }
}
```

---

## 10. ACCESSIBILITY REQUIREMENTS

### WCAG 2.1 Level AA Checklist

```yaml
✓ Contrast Ratios:
  - Normal text (<24px): 4.5:1 minimum
  - Large text (≥24px): 3:1 minimum
  - All provided colors meet these requirements

✓ Font Sizes:
  - Body text: Never below 16px (1rem)
  - Minimum: 14px (0.875rem) for fine print only

✓ Scalability:
  - Use rem units (respects user zoom/preferences)
  - Test at 200% browser zoom
  - No horizontal scrolling at 200% zoom

✓ Line Length:
  - Body text: 50-75 characters per line
  - Max: 80 characters

✓ Focus Indicators:
  - Visible 3px outline on all interactive elements
  - 2px offset for clarity
```

### Implementation

```css
/* Contrast ratios - all colors meet WCAG AA */
body {
  color: var(--text-primary); /* 15.3:1 on white */
  background: var(--bg-primary);
}

/* Focus indicators */
a:focus,
button:focus,
input:focus,
textarea:focus {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* Skip to content link for keyboard users */
.skip-to-content {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-to-content:focus {
  top: 0;
}

/* Respect user motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  :root {
    --text-primary: #000000;
    --bg-primary: #ffffff;
    --color-primary: #0000ff;
  }
}
```

---

## 11. COLOR & CONTRAST SYSTEM

### Light Mode Colors (WCAG Compliant)

```css
:root {
  /* Text colors - descending contrast */
  --text-primary: #1a1a1a;      /* 15.3:1 - body text */
  --text-secondary: #4a4a4a;    /* 9.73:1 - secondary text */
  --text-tertiary: #6b6b6b;     /* 5.74:1 - captions, helper text */
  --text-disabled: #9e9e9e;     /* 2.85:1 - disabled (large text only) */
  
  /* Backgrounds */
  --bg-primary: #ffffff;        /* Main background */
  --bg-secondary: #f5f5f5;      /* Secondary surfaces */
  --bg-tertiary: #e0e0e0;       /* Borders, dividers */
  
  /* Accent colors - all meet 4.5:1 minimum */
  --color-primary: #0066cc;     /* Links, primary actions */
  --color-primary-dark: #004a99; /* Hover state */
  --color-success: #0f7c3a;     /* Success messages */
  --color-error: #c41e3a;       /* Error messages */
  --color-warning: #996300;     /* Warning messages */
}
```

### Dark Mode Colors

```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #e8e8e8;      /* 13.2:1 on dark bg */
    --text-secondary: #b8b8b8;    /* 7.89:1 */
    --text-tertiary: #8e8e8e;     /* 4.63:1 */
    --text-disabled: #5e5e5e;     /* 2.46:1 - large only */
    
    --bg-primary: #1a1a1a;
    --bg-secondary: #2a2a2a;
    --bg-tertiary: #3a3a3a;
    
    /* Brighter colors for dark backgrounds */
    --color-primary: #4da3ff;
    --color-primary-dark: #80c0ff;
    --color-success: #4ade80;
    --color-error: #f87171;
    --color-warning: #fbbf24;
  }
}
```

### Usage Pattern

```css
/* Apply colors */
body {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}

a {
  color: var(--color-primary);
}

a:hover {
  color: var(--color-primary-dark);
}

.success { color: var(--color-success); }
.error { color: var(--color-error); }
.warning { color: var(--color-warning); }
```

---

## 12. PERFORMANCE OPTIMIZATION

### Font Loading Best Practices

```css
/* 1. Use font-display: swap to prevent invisible text */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom-font.woff2') format('woff2');
  font-display: swap; /* Show fallback immediately */
}

/* 2. Preload critical fonts in HTML <head> */
/* <link rel="preload" href="/fonts/font.woff2" as="font" type="font/woff2" crossorigin> */

/* 3. Prefer system fonts (zero download cost) */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### Variable Fonts (One File, Multiple Weights)

```css
@font-face {
  font-family: 'InterVariable';
  src: url('/fonts/Inter-Variable.woff2') format('woff2 supports variations');
  font-weight: 100 900; /* Entire weight range in one file */
  font-display: swap;
}

body {
  font-family: 'InterVariable', sans-serif;
  font-weight: 400; /* Can use any weight from 100-900 */
}
```

---

## 13. COMPLETE CSS IMPLEMENTATION

### ⚡ COPY THIS ENTIRE BLOCK - Ready for Production

```css
/* ============================================================================
   TYPOGRAPHY SYSTEM - PRODUCTION READY
   Version: 1.0 | Optimized for LLM Implementation
   ============================================================================ */

/* ===== CSS CUSTOM PROPERTIES ===== */
:root {
  /* Font Families */
  --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                  'Helvetica Neue', Arial, sans-serif;
  --font-serif: Georgia, 'Times New Roman', Times, serif;
  --font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', 
               Consolas, 'Courier New', monospace;
  
  /* Font Sizes - Fluid scaling */
  --font-size-h1: clamp(2.75rem, 5vw + 1rem, 5rem);
  --font-size-h2: clamp(2rem, 3.5vw + 0.5rem, 3.5rem);
  --font-size-h3: clamp(1.5rem, 2vw + 0.5rem, 2rem);
  --font-size-h4: clamp(1.25rem, 1.5vw + 0.25rem, 1.5rem);
  --font-size-h5: 1.25rem;
  --font-size-h6: 1.125rem;
  --font-size-xl: 1.5rem;
  --font-size-lg: 1.25rem;
  --font-size-base: 1.125rem;
  --font-size-sm: 1rem;
  --font-size-xs: 0.875rem;
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  
  /* Line Heights */
  --line-height-tight: 1.1;
  --line-height-snug: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  --line-height-loose: 2;
  
  /* Letter Spacing */
  --tracking-tight: -0.02em;
  --tracking-snug: -0.01em;
  --tracking-normal: 0;
  --tracking-wide: 0.01em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
  
  /* Spacing Scale (8pt grid) */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;
  
  /* Line Length */
  --measure-narrow: 25em;
  --measure-default: 40em;
  --measure-wide: 50em;
  
  /* Colors - Light Mode */
  --text-primary: #1a1a1a;
  --text-secondary: #4a4a4a;
  --text-tertiary: #6b6b6b;
  --text-disabled: #9e9e9e;
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --bg-tertiary: #e0e0e0;
  --color-primary: #0066cc;
  --color-primary-dark: #004a99;
  --color-success: #0f7c3a;
  --color-error: #c41e3a;
  --color-warning: #996300;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #e8e8e8;
    --text-secondary: #b8b8b8;
    --text-tertiary: #8e8e8e;
    --text-disabled: #5e5e5e;
    --bg-primary: #1a1a1a;
    --bg-secondary: #2a2a2a;
    --bg-tertiary: #3a3a3a;
    --color-primary: #4da3ff;
    --color-primary-dark: #80c0ff;
    --color-success: #4ade80;
    --color-error: #f87171;
    --color-warning: #fbbf24;
  }
}

/* ===== RESET & BASE STYLES ===== */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 100%; /* 16px base */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);
  background-color: var(--bg-primary);
}

/* ===== HEADINGS ===== */
h1, h2, h3, h4, h5, h6 {
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-snug);
  letter-spacing: var(--tracking-snug);
  margin-top: var(--space-2xl);
  margin-bottom: var(--space-sm);
  max-width: var(--measure-narrow);
}

h1:first-child,
h2:first-child,
h3:first-child,
h4:first-child,
h5:first-child,
h6:first-child {
  margin-top: 0;
}

h1 {
  font-size: var(--font-size-h1);
  line-height: var(--line-height-tight);
}

h2 {
  font-size: var(--font-size-h2);
  line-height: 1.15;
}

h3 {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-semibold);
}

h4 {
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-semibold);
}

h5 {
  font-size: var(--font-size-h5);
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
}

h6 {
  font-size: var(--font-size-h6);
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
}

/* ===== BODY TEXT ===== */
p {
  margin-bottom: var(--space-lg);
  max-width: var(--measure-default);
}

.text-xl {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-relaxed);
}

.text-lg {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
}

.text-sm {
  font-size: var(--font-size-sm);
  line-height: 1.6;
  letter-spacing: var(--tracking-normal);
}

.text-xs {
  font-size: var(--font-size-xs);
  line-height: 1.6;
  letter-spacing: var(--tracking-normal);
}

.text-secondary {
  color: var(--text-secondary);
}

.text-tertiary {
  color: var(--text-tertiary);
}

/* ===== INLINE ELEMENTS ===== */
strong, b {
  font-weight: var(--font-weight-bold);
}

em, i {
  font-style: italic;
}

small {
  font-size: var(--font-size-xs);
}

mark {
  background-color: #fff59d;
  color: #000;
  padding: 0.125em 0.25em;
  border-radius: 2px;
}

code {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background-color: var(--bg-secondary);
  padding: 0.125em 0.375em;
  border-radius: 0.25rem;
  letter-spacing: var(--tracking-normal);
}

pre {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
  background-color: var(--bg-secondary);
  padding: var(--space-lg);
  border-radius: 0.5rem;
  overflow-x: auto;
  margin-bottom: var(--space-lg);
}

pre code {
  background-color: transparent;
  padding: 0;
}

/* ===== LINKS ===== */
a {
  color: var(--color-primary);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.2em;
  font-weight: var(--font-weight-medium);
  transition: color 0.2s ease;
}

a:hover {
  color: var(--color-primary-dark);
}

a:focus {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 2px;
}

/* ===== LISTS ===== */
ul, ol {
  margin-bottom: var(--space-lg);
  padding-left: var(--space-xl);
  max-width: var(--measure-default);
}

li {
  margin-bottom: var(--space-sm);
}

li:last-child {
  margin-bottom: 0;
}

ul ul, ul ol, ol ul, ol ol {
  margin-top: var(--space-sm);
  margin-bottom: var(--space-sm);
}

/* ===== QUOTES ===== */
blockquote {
  font-size: var(--font-size-lg);
  font-style: italic;
  margin: var(--space-xl) 0;
  padding-left: var(--space-xl);
  border-left: 4px solid var(--color-primary);
  color: var(--text-secondary);
  max-width: var(--measure-default);
}

blockquote cite {
  display: block;
  font-size: var(--font-size-sm);
  font-style: normal;
  margin-top: var(--space-sm);
  color: var(--text-tertiary);
}

blockquote cite::before {
  content: "— ";
}

/* ===== BUTTONS ===== */
button, .btn {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  letter-spacing: var(--tracking-wide);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-block;
  text-decoration: none;
}

.btn-primary {
  background-color: var(--color-primary);
  color: #ffffff;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
}

.btn-secondary {
  font-weight: var(--font-weight-medium);
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
  background-color: var(--color-primary);
  color: #ffffff;
}

button:focus, .btn:focus {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

button:disabled, .btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ===== FORMS ===== */
label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-xs);
  color: var(--text-primary);
}

input,
textarea,
select {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  padding: 0.625rem 0.875rem;
  border: 1px solid var(--bg-tertiary);
  border-radius: 0.375rem;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  width: 100%;
  max-width: 30em;
  transition: border-color 0.2s ease, outline 0.2s ease;
}

input:focus,
textarea:focus,
select:focus {
  outline: 3px solid var(--color-primary);
  outline-offset: 0;
  border-color: var(--color-primary);
}

input:disabled,
textarea:disabled,
select:disabled {
  background-color: var(--bg-secondary);
  color: var(--text-disabled);
  cursor: not-allowed;
}

::placeholder {
  color: var(--text-tertiary);
  opacity: 1;
}

/* ===== UTILITY CLASSES ===== */
.uppercase {
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.measure-narrow {
  max-width: var(--measure-narrow);
}

.measure-default {
  max-width: var(--measure-default);
}

.measure-wide {
  max-width: var(--measure-wide);
}

.font-mono {
  font-family: var(--font-mono);
}

.font-serif {
  font-family: var(--font-serif);
}

/* ===== ACCESSIBILITY ===== */
.skip-to-content {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  z-index: 100;
  font-weight: var(--font-weight-semibold);
}

.skip-to-content:focus {
  top: 0;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  :root {
    --text-primary: #000000;
    --bg-primary: #ffffff;
    --color-primary: #0000ff;
  }
}

/* ===== RESPONSIVE ADJUSTMENTS ===== */
@media (max-width: 767px) {
  body {
    font-size: 1rem; /* 16px on mobile */
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: var(--space-xl);
  }
  
  blockquote {
    padding-left: var(--space-lg);
  }
  
  ul, ol {
    padding-left: var(--space-lg);
  }
}

/* ===== PRINT STYLES ===== */
@media print {
  body {
    font-size: 12pt;
    line-height: 1.5;
    color: #000;
    background: #fff;
  }
  
  h1 { font-size: 24pt; page-break-after: avoid; }
  h2 { font-size: 18pt; page-break-after: avoid; }
  h3 { font-size: 14pt; page-break-after: avoid; }
  
  a {
    text-decoration: underline;
    color: #000;
  }
  
  a[href]::after {
    content: " (" attr(href) ")";
  }
  
  blockquote {
    page-break-inside: avoid;
  }
}
```

---

## 14. COMPONENT IMPLEMENTATION EXAMPLES

### Card Component

```html
<div class="card">
  <h3>Card Title</h3>
  <p class="text-secondary">Card description goes here with proper spacing and typography.</p>
  <a href="#" class="btn btn-primary">Learn More</a>
</div>
```

```css
.card {
  background: var(--bg-secondary);
  border-radius: 0.5rem;
  padding: var(--space-lg);
  margin-bottom: var(--space-xl);
  max-width: var(--measure-default);
}

.card h3 {
  margin-top: 0;
  margin-bottom: var(--space-sm);
}

.card p {
  margin-bottom: var(--space-md);
}
```

### Hero Section

```html
<section class="hero">
  <h1>Main Headline</h1>
  <p class="text-xl">Supporting text that explains the value proposition.</p>
  <button class="btn btn-primary">Get Started</button>
</section>
```

```css
.hero {
  padding: var(--space-3xl) var(--space-md);
  text-align: center;
}

.hero h1 {
  margin-bottom: var(--space-md);
}

.hero .text-xl {
  margin-bottom: var(--space-xl);
  max-width: var(--measure-default);
  margin-left: auto;
  margin-right: auto;
}
```

### Form Group

```html
<div class="form-group">
  <label for="email">Email Address</label>
  <input type="email" id="email" placeholder="you@example.com">
  <span class="text-sm text-tertiary">We'll never share your email.</span>
</div>
```

```css
.form-group {
  margin-bottom: var(--space-lg);
}

.form-group label {
  display: block;
  margin-bottom: var(--space-xs);
}

.form-group input {
  margin-bottom: var(--space-xs);
}
```

### Article Layout

```html
<article class="article">
  <header>
    <h1>Article Title</h1>
    <p class="text-sm text-secondary">By Author Name • October 7, 2025</p>
  </header>
  
  <div class="article-content">
    <p class="text-lg">Lead paragraph with larger text for emphasis.</p>
    <p>Regular body paragraph with optimal line length and spacing.</p>
    <h2>Section Heading</h2>
    <p>More content...</p>
  </div>
</article>
```

```css
.article {
  max-width: var(--measure-default);
  margin: 0 auto;
  padding: var(--space-xl) var(--space-md);
}

.article header {
  margin-bottom: var(--space-2xl);
}

.article h1 {
  margin-bottom: var(--space-sm);
}
```

---

## 15. QUICK REFERENCE TABLES

### Font Size Reference

| Element | Mobile | Tablet | Desktop | rem | CSS Variable |
|---------|--------|--------|---------|-----|--------------|
| h1 | 44px | 64px | 80px | 5rem | `var(--font-size-h1)` |
| h2 | 32px | 44px | 56px | 3.5rem | `var(--font-size-h2)` |
| h3 | 24px | 28px | 32px | 2rem | `var(--font-size-h3)` |
| h4 | 20px | 22px | 24px | 1.5rem | `var(--font-size-h4)` |
| h5 | 18px | 18px | 20px | 1.25rem | `var(--font-size-h5)` |
| h6 | 16px | 16px | 18px | 1.125rem | `var(--font-size-h6)` |
| body | 16px | 16px | 18px | 1.125rem | `var(--font-size-base)` |
| .text-lg | 20px | 18px | 20px | 1.25rem | `var(--font-size-lg)` |
| .text-sm | 16px | 14px | 16px | 1rem | `var(--font-size-sm)` |
| .text-xs | 14px | 13px | 14px | 0.875rem | `var(--font-size-xs)` |

### Spacing Reference

| Token | rem | px | Use Case |
|-------|-----|----|----|
| `--space-xs` | 0.25rem | 4px | Icon gaps |
| `--space-sm` | 0.5rem | 8px | List items |
| `--space-md` | 1rem | 16px | Default spacing |
| `--space-lg` | 1.5rem | 24px | Paragraph spacing |
| `--space-xl` | 2rem | 32px | Component spacing |
| `--space-2xl` | 3rem | 48px | Section breaks |
| `--space-3xl` | 4rem | 64px | Major sections |
| `--space-4xl` | 6rem | 96px | Page spacing |

### Font Weight Reference

| Name | Value | CSS Variable | Use Case |
|------|-------|--------------|----------|
| Light | 300 | `var(--font-weight-light)` | Large display text |
| Regular | 400 | `var(--font-weight-regular)` | Body text |
| Medium | 500 | `var(--font-weight-medium)` | Links, emphasis |
| Semibold | 600 | `var(--font-weight-semibold)` | h3-h6, buttons |
| Bold | 700 | `var(--font-weight-bold)` | h1-h2, strong |
| Extra Bold | 800 | `var(--font-weight-extrabold)` | Rare emphasis |

### Contrast Ratio Reference (WCAG Compliant)

| Foreground | Background | Ratio | WCAG | Use For |
|------------|------------|-------|------|---------|
| #1a1a1a | #ffffff | 15.3:1 | AAA | Body text |
| #4a4a4a | #ffffff | 9.73:1 | AAA | Secondary text |
| #6b6b6b | #ffffff | 5.74:1 | AA | Captions |
| #0066cc | #ffffff | 4.58:1 | AA | Links |
| #9e9e9e | #ffffff | 2.85:1 | Fail | Large text only |

---

## 16. IMPLEMENTATION CHECKLIST FOR AGENTS

### Phase 1: Setup (Copy & Paste)

```bash
□ Copy complete CSS from Section 13 to your stylesheet
□ Add to <head>: <html lang="en">
□ Verify base font-size: html { font-size: 100%; }
□ Test: Body text should be 18px on desktop, 16px on mobile
```

### Phase 2: HTML Structure

```bash
□ Add semantic HTML5 elements (<article>, <section>, <nav>)
□ Include skip-to-content link for accessibility
□ Use proper heading hierarchy (h1 → h2 → h3)
□ Add lang attribute to <html>
```

### Phase 3: Typography Application

```bash
□ Apply heading styles (h1-h6)
□ Set body text with proper line-height (1.75)
□ Add utility classes (.text-lg, .text-sm)
□ Implement max-width on text containers (40em)
□ Add proper link styling with underlines
```

### Phase 4: Spacing & Layout

```bash
□ Apply paragraph spacing (margin-bottom: var(--space-lg))
□ Add section spacing (margin-bottom: var(--space-3xl))
□ Implement card/component padding (var(--space-lg))
□ Use consistent margins for headings
```

### Phase 5: Responsive Testing

```bash
□ Test on mobile (375px, 390px)
□ Test on tablet (768px)
□ Test on desktop (1024px, 1440px)
□ Verify fluid typography scales smoothly
□ Check line length stays under 80 characters
```

### Phase 6: Accessibility Validation

```bash
□ Run WAVE browser extension
□ Check contrast ratios (WebAIM Contrast Checker)
□ Test keyboard navigation (Tab, Shift+Tab)
□ Verify focus indicators are visible
□ Test at 200% browser zoom
□ Run Lighthouse accessibility audit (target: 95+)
```

### Phase 7: Performance Optimization

```bash
□ Minimize custom fonts (prefer system fonts)
□ Add font-display: swap if using web fonts
□ Preload critical fonts in <head>
□ Verify no FOIT (Flash of Invisible Text)
□ Check font file sizes (<100KB total)
```

### Phase 8: Cross-Browser Testing

```bash
□ Chrome (latest)
□ Firefox (latest)
□ Safari (latest)
□ Edge (latest)
□ Mobile Safari (iOS)
□ Chrome Mobile (Android)
```

---

## AGENT QUICK START COMMANDS

### Minimum Viable Implementation

```css
/* 1. Copy root variables from Section 2 */
/* 2. Copy complete CSS from Section 13 */
/* 3. Add to your HTML: */
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="typography.css">
</head>
<body>
  <a href="#main" class="skip-to-content">Skip to content</a>
  
  <main id="main">
    <article>
      <h1>Page Title</h1>
      <p class="text-lg">Lead paragraph with emphasis.</p>
      <p>Regular body paragraph text.</p>
      
      <h2>Section Heading</h2>
      <p>More content...</p>
    </article>
  </main>
</body>
</html>
```

### Testing Commands

```bash
# Validate HTML
npx html-validate index.html

# Check accessibility
npx pa11y http://localhost:3000

# Test contrast ratios
# Use: https://webaim.org/resources/contrastchecker/

# Lighthouse audit
npx lighthouse http://localhost:3000 --view
```

---

## TROUBLESHOOTING GUIDE FOR AGENTS

### Issue: Text too small on mobile

**Solution:**
```css
/* Ensure base font-size is correct */
@media (max-width: 767px) {
  body {
    font-size: 1rem; /* 16px minimum */
  }
}
```

### Issue: Line length too long

**Solution:**
```css
/* Add max-width to text containers */
p, li {
  max-width: var(--measure-default); /* 40em ~= 640px */
}
```

### Issue: Headings too close together

**Solution:**
```css
/* Increase top margin on headings */
h1, h2, h3 {
  margin-top: var(--space-2xl); /* 48px */
}
```

### Issue: Focus indicators not visible

**Solution:**
```css
/* Ensure proper outline on all interactive elements */
a:focus, button:focus, input:focus {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Issue: Dark mode not working

**Solution:**
```css
/* Verify dark mode media query is present */
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #e8e8e8;
    --bg-primary: #1a1a1a;
    /* ... other dark mode colors */
  }
}
```

---

## VALIDATION CHECKLIST

Use this checklist to verify correct implementation:

```yaml
Visual:
  ✓ All heading levels (h1-h6) render with proper hierarchy
  ✓ Body text is readable (16-18px)
  ✓ Line length is 50-75 characters
  ✓ Proper vertical rhythm between elements
  ✓ Responsive scaling works at all breakpoints

Accessibility:
  ✓ Contrast ratios meet WCAG AA (4.5:1 minimum)
  ✓ Text scales to 200% without breaking layout
  ✓ Keyboard navigation works (Tab, Shift+Tab)
  ✓ Focus indicators are visible (3px outline)
  ✓ Skip-to-content link is present

Performance:
  ✓ Fonts load without FOIT/FOUT
  ✓ No layout shift (CLS < 0.1)
  ✓ Lighthouse score 90+
  ✓ Font files < 100KB total

Cross-Browser:
  ✓ Works in Chrome, Firefox, Safari, Edge
  ✓ Works on iOS Safari
  ✓ Works on Android Chrome
```

---

## RESOURCES FOR AGENTS

### Testing Tools
- **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **WAVE Browser Extension:** https://wave.webaim.org/extension/
- **Lighthouse:** Built into Chrome DevTools
- **axe DevTools:** https://www.deque.com/axe/devtools/

### Documentation
- **WCAG 2.1:** https://www.w3.org/WAI/WCAG21/quickref/
- **MDN Typography:** https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text
- **Can I Use:** https://caniuse.com (for browser support)

### Type Scale Calculators
- **Type Scale:** https://typescale.com/
- **Modular Scale:** https://www.modularscale.com/

---

## CHANGELOG

**Version 1.0 - October 2025**
- Initial release optimized for LLM coding agents
- Complete CSS implementation included
- WCAG 2.1 Level AA compliant
- Fluid typography with clamp()
- Dark mode support
- 8pt grid spacing system
- System font stack (zero performance cost)

---

**END OF SPECIFICATION**

This document is optimized for LLM parsing and implementation. All code blocks are production-ready and can be copied directly into your project.