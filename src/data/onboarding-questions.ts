// src/data/onboarding-questions.ts
export const ONBOARDING_QUESTIONS = {
  landing_page: {
    title: 'Landing Page Requirements',
    questions: [
      {
        id: 'pageType',
        label: 'What type of landing page?',
        type: 'select' as const,
        options: ['Product Launch', 'Lead Generation', 'Event Registration', 'App Download', 'Service Promotion', 'Newsletter Signup'],
        required: true
      },
      {
        id: 'designStyle',
        label: 'Preferred design style',
        type: 'select' as const,
        options: ['Modern/Minimalist', 'Bold/Colorful', 'Professional/Corporate', 'Creative/Artistic', 'Tech/Startup'],
        required: true
      },
      {
        id: 'sections',
        label: 'Required sections',
        type: 'checkbox' as const,
        options: ['Hero Section', 'Features/Benefits', 'Testimonials', 'Pricing', 'FAQ', 'Contact Form', 'About Us', 'Gallery/Portfolio'],
        required: true
      },
      {
        id: 'ctaGoal',
        label: 'Primary call-to-action goal',
        type: 'text' as const,
        placeholder: 'e.g., Sign up for free trial, Download app, Contact sales...',
        required: true
      }
    ]
  },
  basic_website: {
    title: 'Website Requirements',
    questions: [
      {
        id: 'websiteType',
        label: 'Website type',
        type: 'select' as const,
        options: ['Corporate Website', 'Portfolio', 'Blog/News', 'E-commerce', 'Directory/Listing', 'Educational', 'Non-profit'],
        required: true
      },
      {
        id: 'pageCount',
        label: 'Approximate number of pages',
        type: 'select' as const,
        options: ['3-5 pages', '6-10 pages', '11-20 pages', '20+ pages'],
        required: true
      },
      {
        id: 'features',
        label: 'Required features',
        type: 'checkbox' as const,
        options: ['Contact Forms', 'Blog/News Section', 'Image Gallery', 'Video Integration', 'Social Media Integration', 'Newsletter Signup', 'Online Booking', 'User Accounts'],
        required: true
      },
      {
        id: 'contentSource',
        label: 'Content source',
        type: 'select' as const,
        options: ['I will provide all content', 'I need help with copywriting', 'Mix of both'],
        required: true
      }
    ]
  },
  advanced_website: {
    title: 'Advanced Website Requirements',
    questions: [
      {
        id: 'websiteType',
        label: 'Website type',
        type: 'select' as const,
        options: ['Corporate Website', 'Portfolio', 'Blog/News', 'E-commerce', 'Directory/Listing', 'Educational', 'Non-profit'],
        required: true
      },
      {
        id: 'pageCount',
        label: 'Approximate number of pages',
        type: 'select' as const,
        options: ['3-5 pages', '6-10 pages', '11-20 pages', '20+ pages'],
        required: true
      },
      {
        id: 'features',
        label: 'Required features',
        type: 'checkbox' as const,
        options: ['Contact Forms', 'Blog/News Section', 'Image Gallery', 'Video Integration', 'Social Media Integration', 'Newsletter Signup', 'Online Booking', 'User Accounts', 'CMS', 'E-commerce', 'Multi-language'],
        required: true
      },
      {
        id: 'contentSource',
        label: 'Content source',
        type: 'select' as const,
        options: ['I will provide all content', 'I need help with copywriting', 'Mix of both'],
        required: true
      }
    ]
  },
  basic_mobile_app: {
    title: 'Mobile App Requirements',
    questions: [
      {
        id: 'appCategory',
        label: 'App category',
        type: 'select' as const,
        options: ['Business/Productivity', 'Social Networking', 'E-commerce/Shopping', 'Health/Fitness', 'Education', 'Entertainment', 'Finance', 'Food & Drink'],
        required: true
      },
      {
        id: 'platforms',
        label: 'Target platforms',
        type: 'checkbox' as const,
        options: ['iOS (iPhone/iPad)', 'Android', 'Both Platforms'],
        required: true
      },
      {
        id: 'coreFeatures',
        label: 'Core features needed',
        type: 'checkbox' as const,
        options: ['User Registration/Login', 'Push Notifications', 'Offline Mode', 'Camera/Photos', 'GPS/Location', 'Social Sharing', 'In-app Purchases', 'Real-time Chat'],
        required: true
      },
      {
        id: 'backend',
        label: 'Backend requirements',
        type: 'checkbox' as const,
        options: ['User Management', 'Data Storage', 'Push Notifications', 'Analytics', 'Payment Processing', 'File Storage', 'API Integration'],
        required: true
      }
    ]
  },
  advanced_mobile_app: {
    title: 'Advanced Mobile App Requirements',
    questions: [
      {
        id: 'appCategory',
        label: 'App category',
        type: 'select' as const,
        options: ['Business/Productivity', 'Social Networking', 'E-commerce/Shopping', 'Health/Fitness', 'Education', 'Entertainment', 'Finance', 'Food & Drink'],
        required: true
      },
      {
        id: 'platforms',
        label: 'Target platforms',
        type: 'checkbox' as const,
        options: ['iOS (iPhone/iPad)', 'Android', 'Both Platforms'],
        required: true
      },
      {
        id: 'coreFeatures',
        label: 'Core features needed',
        type: 'checkbox' as const,
        options: ['User Registration/Login', 'Push Notifications', 'Offline Mode', 'Camera/Photos', 'GPS/Location', 'Social Sharing', 'In-app Purchases', 'Real-time Chat', 'Advanced Analytics', 'Custom Integrations'],
        required: true
      },
      {
        id: 'backend',
        label: 'Backend requirements',
        type: 'checkbox' as const,
        options: ['User Management', 'Data Storage', 'Push Notifications', 'Analytics', 'Payment Processing', 'File Storage', 'API Integration', 'Real-time Features', 'Advanced Security'],
        required: true
      }
    ]
  }
} as const;