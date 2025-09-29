// src/data/pricing.ts
export const PRICING_PLANS = [
  {
    id: 'landing_page',
    name: 'Landing Page',
    price: 8000,
    currency: 'PHP',
    timeline: '48-hour delivery',
    features: [
      '1 Professional Landing Page',
      'AI Chat Widget Integration',
      'Mobile Responsive Design',
      'Basic SEO Optimization',
      'Google Analytics Setup',
      '1 Round of Revisions'
    ],
    popular: false
  },
  {
    id: 'basic_website',
    name: 'Basic Website',
    price: 18000,
    currency: 'PHP',
    timeline: '5-7 days delivery',
    features: [
      '3-5 Static Pages',
      'AI Chat Widget',
      'Mobile Responsive Design',
      'SEO Optimization',
      'Analytics Integration',
      'Contact Forms',
      '2 Rounds of Revisions'
    ],
    popular: false
  },
  {
    id: 'advanced_website',
    name: 'Advanced Website',
    price: 40000,
    currency: 'PHP',
    timeline: '2-3 weeks delivery',
    features: [
      '8-12 Pages',
      'Content Management System',
      'Advanced AI Features',
      'Advanced SEO & Analytics',
      'Blog Setup',
      'E-commerce Ready',
      '3 Rounds of Revisions'
    ],
    popular: true
  },
  {
    id: 'basic_mobile_app',
    name: 'Basic Mobile App',
    price: 80000,
    currency: 'PHP',
    timeline: '4-6 weeks delivery',
    features: [
      'iOS + Android (Cross-platform)',
      'Basic UI/UX Design',
      'Core Functionality',
      'AI Integration',
      'App Store Submission',
      'Basic Analytics',
      '3 Months Support'
    ],
    popular: false
  },
  {
    id: 'advanced_mobile_app',
    name: 'Advanced Mobile App',
    price: 150000,
    currency: 'PHP',
    timeline: '8-12 weeks delivery',
    features: [
      'iOS + Android (Cross-platform)',
      'Custom UI/UX Design',
      'Backend Integration',
      'Push Notifications',
      'Advanced AI Features',
      'Payment Integration',
      '6 Months Support'
    ],
    popular: false
  }
] as const;