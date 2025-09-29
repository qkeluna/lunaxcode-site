# Lunaxcode Website Development Plan (Frontend with Integrated Data)

## 📋 Project Overview
Develop the complete Lunaxcode frontend website with all extracted data integrated directly into the codebase. This approach allows immediate deployment while maintaining a clean architecture for future API migration.

## 🗂️ Integrated Data Structure

### Core Data Files

```typescript
// src/data/services.ts
export const SERVICES = [
  {
    id: 'landing_page',
    name: 'Landing Page',
    description: '48-Hour Landing Pages',
    details: 'While competitors take 3-5 days minimum, we deliver professional landing pages in just 48 hours. No compromises on quality.',
    icon: '⚡',
    timeline: '48 hours'
  },
  {
    id: 'basic_website',
    name: 'Basic Website',
    description: 'Full Website Development',
    details: 'Complete websites with CMS, advanced SEO, and multi-page functionality delivered in 5 days to 3 weeks depending on complexity.',
    icon: '🌐',
    timeline: '5-7 days'
  },
  {
    id: 'advanced_website',
    name: 'Advanced Website',
    description: 'Full Website Development',
    details: 'Complete websites with CMS, advanced SEO, and multi-page functionality delivered in 5 days to 3 weeks depending on complexity.',
    icon: '🌐',
    timeline: '2-3 weeks'
  },
  {
    id: 'basic_mobile_app',
    name: 'Basic Mobile App',
    description: 'Mobile App Development',
    details: 'Cross-platform iOS and Android apps with modern UI/UX, backend integration, and push notifications in 4-12 weeks.',
    icon: '📱',
    timeline: '4-6 weeks'
  },
  {
    id: 'advanced_mobile_app',
    name: 'Advanced Mobile App',
    description: 'Mobile App Development',
    details: 'Cross-platform iOS and Android apps with modern UI/UX, backend integration, and push notifications in 4-12 weeks.',
    icon: '📱',
    timeline: '8-12 weeks'
  }
] as const;

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

// src/data/features.ts
export const FEATURES = [
  {
    icon: '⚡',
    title: '48-Hour Landing Pages',
    description: 'While competitors take 3-5 days minimum, we deliver professional landing pages in just 48 hours. No compromises on quality.'
  },
  {
    icon: '🌐',
    title: 'Full Website Development',
    description: 'Complete websites with CMS, advanced SEO, and multi-page functionality delivered in 5 days to 3 weeks depending on complexity.'
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Cross-platform iOS and Android apps with modern UI/UX, backend integration, and push notifications in 4-12 weeks.'
  },
  {
    icon: '🤖',
    title: 'AI Integration Included',
    description: 'Every project comes with intelligent AI features - chat widgets for websites, smart features for mobile apps.'
  },
  {
    icon: '💰',
    title: 'SME-Friendly Pricing',
    description: 'Starting at just ₱8,000 for landing pages, ₱18,000 for websites, and ₱80,000 for mobile apps. Affordable for all business sizes.'
  },
  {
    icon: '🔧',
    title: 'AI-Powered Development',
    description: 'Using cutting-edge AI tools to accelerate development while maintaining high quality and modern design standards across all services.'
  }
] as const;

// src/data/addons.ts
export const ADDONS = [
  {
    name: 'Additional Pages',
    priceRange: '1500-2000',
    currency: 'PHP',
    unit: 'each'
  },
  {
    name: 'AI Content Generation',
    priceRange: '3000-5000',
    currency: 'PHP',
    unit: 'project'
  },
  {
    name: 'Monthly Maintenance',
    priceRange: '3000-5000',
    currency: 'PHP',
    unit: 'monthly'
  }
] as const;

// src/data/company.ts
export const COMPANY_INFO = {
  name: 'Lunaxcode',
  tagline: 'Code at the Speed of Light',
  description: 'Professional websites and mobile apps for Filipino SMEs',
  contact: {
    email: 'hello@lunaxcode.com',
    phone: '+63 912 345 6789',
    location: 'Philippines'
  },
  paymentTerms: {
    deposit: '30-50%',
    balance: 'on delivery',
    methods: ['GCash', 'PayMaya', 'Bank Transfer']
  }
} as const;

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
```

## 🏗️ Enhanced Project Structure

```
lunaxcode-website/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Homepage
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── payment/
│   │   │   ├── page.tsx          # Payment redirect
│   │   │   ├── success/page.tsx
│   │   │   └── cancel/page.tsx
│   │   └── api/                  # Temporary API routes
│   │       ├── contact/route.ts
│   │       ├── onboarding/route.ts
│   │       └── leads/route.ts
│   ├── components/
│   │   ├── ui/                   # Shadcn/ui components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Process.tsx
│   │   │   └── Contact.tsx
│   │   ├── onboarding/
│   │   │   ├── OnboardingModal.tsx
│   │   │   ├── StepProgress.tsx
│   │   │   ├── ServiceConfirmation.tsx
│   │   │   ├── BasicInfo.tsx
│   │   │   ├── ServiceSpecific.tsx
│   │   │   ├── Summary.tsx
│   │   │   └── Success.tsx
│   │   └── forms/
│   │       ├── QuestionRenderer.tsx
│   │       ├── ContactForm.tsx
│   │       └── FormElements.tsx
│   ├── data/                     # Integrated data
│   │   ├── services.ts
│   │   ├── pricing.ts
│   │   ├── features.ts
│   │   ├── addons.ts
│   │   ├── company.ts
│   │   └── onboarding-questions.ts
│   ├── lib/
│   │   ├── validations/
│   │   ├── utils.ts
│   │   ├── storage.ts
│   │   ├── prompt-generator.ts
│   │   ├── email-service.ts      # Email integration
│   │   └── data-service.ts       # Data abstraction layer
│   ├── store/
│   │   ├── onboarding-store.ts
│   │   └── ui-store.ts
│   ├── types/
│   │   ├── onboarding.ts
│   │   ├── services.ts
│   │   └── api.ts
│   └── hooks/
│       ├── use-local-storage.ts
│       ├── use-onboarding.ts
│       └── use-data-service.ts
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon.ico
└── api-migration/                # Future API migration
    ├── migration-scripts.ts
    ├── data-mapper.ts
    └── api-client.ts
```

## 🔧 Data Service Layer

```typescript
// lib/data-service.ts - Abstraction layer for easy API migration
export class DataService {
  // Current implementation uses local data
  static getServices() {
    return SERVICES;
  }
  
  static getPricingPlans() {
    return PRICING_PLANS;
  }
  
  static getFeatures() {
    return FEATURES;
  }
  
  static getOnboardingQuestions(serviceType: string) {
    return ONBOARDING_QUESTIONS[serviceType as keyof typeof ONBOARDING_QUESTIONS];
  }
  
  static getCompanyInfo() {
    return COMPANY_INFO;
  }
  
  static getAddons() {
    return ADDONS;
  }
  
  // Temporary data persistence
  static async saveOnboarding(data: OnboardingData): Promise<{ id: string }> {
    const id = `onboarding_${Date.now()}`;
    const timestamp = new Date().toISOString();
    
    // Save to localStorage for now
    const saved = {
      id,
      ...data,
      createdAt: timestamp,
      status: 'pending'
    };
    
    localStorage.setItem(id, JSON.stringify(saved));
    
    // Also store in a list for easy retrieval
    const existingList = JSON.parse(localStorage.getItem('onboarding_list') || '[]');
    existingList.push(id);
    localStorage.setItem('onboarding_list', JSON.stringify(existingList));
    
    // Send notification email (if configured)
    await this.sendNotificationEmail(saved);
    
    return { id };
  }
  
  static async saveContact(data: ContactData): Promise<{ success: boolean }> {
    const id = `contact_${Date.now()}`;
    const timestamp = new Date().toISOString();
    
    const saved = {
      id,
      ...data,
      createdAt: timestamp
    };
    
    localStorage.setItem(id, JSON.stringify(saved));
    
    // Send notification email
    await this.sendContactEmail(saved);
    
    return { success: true };
  }
  
  private static async sendNotificationEmail(data: any) {
    // Implementation for email notifications
    console.log('Onboarding notification:', data);
    // TODO: Integrate with email service (EmailJS, Resend, etc.)
  }
  
  private static async sendContactEmail(data: any) {
    // Implementation for contact form emails
    console.log('Contact form submission:', data);
    // TODO: Integrate with email service
  }
  
  // Migration helper for future API integration
  static async migrateToAPI(apiClient: any) {
    const onboardingIds = JSON.parse(localStorage.getItem('onboarding_list') || '[]');
    
    for (const id of onboardingIds) {
      const data = JSON.parse(localStorage.getItem(id) || '{}');
      try {
        await apiClient.createOnboarding(data);
        localStorage.removeItem(id);
      } catch (error) {
        console.error('Migration failed for:', id, error);
      }
    }
  }
}
```

## 🔄 Enhanced Business Logic Implementation

### Onboarding Store with Data Integration
```typescript
// store/onboarding-store.ts
import { create } from 'zustand';
import { DataService } from '@/lib/data-service';
import { ONBOARDING_QUESTIONS } from '@/data/onboarding-questions';

interface OnboardingStore {
  // State
  isModalOpen: boolean;
  currentStep: number;
  serviceType: string | null;
  formData: Partial<OnboardingData>;
  questions: OnboardingQuestion[];
  isLoading: boolean;
  error: string | null;
  
  // Actions
  openModal: (serviceType: string) => void;
  closeModal: () => void;
  setStep: (step: number) => void;
  updateFormData: (data: Partial<OnboardingData>) => void;
  submitOnboarding: () => Promise<void>;
  reset: () => void;
  
  // Navigation
  nextStep: () => boolean;
  prevStep: () => void;
  canProceed: () => boolean;
}

export const useOnboardingStore = create<OnboardingStore>((set, get) => ({
  // Initial state
  isModalOpen: false,
  currentStep: 1,
  serviceType: null,
  formData: {},
  questions: [],
  isLoading: false,
  error: null,
  
  // Actions
  openModal: (serviceType) => {
    const questions = DataService.getOnboardingQuestions(serviceType);
    set({ 
      isModalOpen: true, 
      serviceType,
      questions: questions?.questions || [],
      currentStep: 1,
      formData: { serviceType }
    });
  },
  
  closeModal: () => {
    set({ isModalOpen: false });
  },
  
  setStep: (step) => {
    set({ currentStep: step });
  },
  
  updateFormData: (data) => {
    set(state => ({
      formData: { ...state.formData, ...data }
    }));
  },
  
  submitOnboarding: async () => {
    const { formData } = get();
    set({ isLoading: true, error: null });
    
    try {
      const result = await DataService.saveOnboarding(formData as OnboardingData);
      
      // Generate JSON prompt
      const prompt = generateProjectPrompt(formData as OnboardingData);
      
      // Update form data with generated prompt
      set(state => ({
        formData: { ...state.formData, jsonPrompt: prompt, submissionId: result.id }
      }));
      
      // Move to success step
      set({ currentStep: 5, isLoading: false });
      
      // Redirect to payment after delay
      setTimeout(() => {
        window.location.href = `/payment?id=${result.id}&service=${formData.serviceType}`;
      }, 3000);
      
    } catch (error) {
      set({ error: 'Failed to submit onboarding. Please try again.', isLoading: false });
    }
  },
  
  reset: () => {
    set({
      isModalOpen: false,
      currentStep: 1,
      serviceType: null,
      formData: {},
      questions: [],
      isLoading: false,
      error: null
    });
  },
  
  nextStep: () => {
    const { currentStep, canProceed } = get();
    if (canProceed()) {
      set({ currentStep: currentStep + 1 });
      return true;
    }
    return false;
  },
  
  prevStep: () => {
    const { currentStep } = get();
    if (currentStep > 1) {
      set({ currentStep: currentStep - 1 });
    }
  },
  
  canProceed: () => {
    const { currentStep, formData, questions } = get();
    
    switch (currentStep) {
      case 1: // Service confirmation
        return !!formData.serviceType;
      case 2: // Basic info
        return !!(formData.projectName && formData.companyName && formData.industry && formData.projectDescription);
      case 3: // Service-specific questions
        return questions.filter(q => q.required).every(q => formData[q.id]);
      default:
        return true;
    }
  }
}));
```

### Enhanced Components with Data Integration

```typescript
// components/sections/Pricing.tsx
import { PRICING_PLANS } from '@/data/pricing';
import { useOnboardingStore } from '@/store/onboarding-store';

export function Pricing() {
  const openModal = useOnboardingStore(state => state.openModal);
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Package</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <PricingCard 
              key={plan.id}
              plan={plan}
              onSelect={() => openModal(plan.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// components/sections/Features.tsx
import { FEATURES } from '@/data/features';

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Lunaxcode?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

// components/sections/Hero.tsx
import { COMPANY_INFO } from '@/data/company';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">{COMPANY_INFO.name}</h1>
        <p className="text-xl mb-8">{COMPANY_INFO.tagline}</p>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          {COMPANY_INFO.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#pricing">Start Your Project</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#process">How It Works</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
```

## 📧 Email Integration for Lead Capture

```typescript
// lib/email-service.ts
export class EmailService {
  // Using EmailJS for client-side email sending
  static async sendOnboardingNotification(data: OnboardingData) {
    const templateParams = {
      to_email: 'hello@lunaxcode.com',
      client_name: data.companyName,
      project_name: data.projectName,
      service_type: data.serviceType,
      client_email: data.contactEmail,
      description: data.projectDescription,
      created_at: new Date().toLocaleDateString(),
      json_prompt: data.jsonPrompt || 'Not generated'
    };
    
    try {
      // Replace with your EmailJS configuration
      await window.emailjs.send(
        'YOUR_SERVICE_ID',
        'onboarding_template',
        templateParams
      );
    } catch (error) {
      console.error('Failed to send notification email:', error);
    }
  }
  
  static async sendContactForm(data: ContactData) {
    const templateParams = {
      to_email: 'hello@lunaxcode.com',
      from_name: data.name,
      from_email: data.email,
      company: data.company || 'Not provided',
      message: data.message,
      created_at: new Date().toLocaleDateString()
    };
    
    try {
      await window.emailjs.send(
        'YOUR_SERVICE_ID',
        'contact_template',
        templateParams
      );
    } catch (error) {
      console.error('Failed to send contact email:', error);
    }
  }
}
```

## 🔌 API Migration Preparation

```typescript
// api-migration/api-client.ts
export class ApiClient {
  private baseUrl: string;
  
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  
  async createOnboarding(data: OnboardingData): Promise<{ id: string }> {
    const response = await fetch(`${this.baseUrl}/api/onboarding`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
  
  async createContact(data: ContactData): Promise<{ success: boolean }> {
    const response = await fetch(`${this.baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
  
  async getServices(): Promise<Service[]> {
    const response = await fetch(`${this.baseUrl}/api/services`);
    return response.json();
  }
  
  async getPricing(): Promise<PricingPlan[]> {
    const response = await fetch(`${this.baseUrl}/api/pricing`);
    return response.json();
  }
}

// api-migration/data-mapper.ts
export class DataMapper {
  static mapLocalOnboardingToAPI(localData: any): OnboardingData {
    return {
      serviceType: localData.serviceType,
      projectName: localData.projectName,
      companyName: localData.companyName,
      industry: localData.industry,
      projectDescription: localData.projectDescription,
      contactEmail: localData.contactEmail,
      contactPhone: localData.contactPhone,
      requirements: localData.requirements || {},
      jsonPrompt: localData.jsonPrompt,
      completedAt: localData.createdAt
    };
  }
  
  static async migrateAllLocalData(apiClient: ApiClient) {
    const onboardingIds = JSON.parse(localStorage.getItem('onboarding_list') || '[]');
    const migrationResults = [];
    
    for (const id of onboardingIds) {
      try {
        const localData = JSON.parse(localStorage.getItem(id) || '{}');
        const mappedData = this.mapLocalOnboardingToAPI(localData);
        const result = await apiClient.createOnboarding(mappedData);
        
        migrationResults.push({ id, status: 'success', newId: result.id });
        localStorage.removeItem(id);
      } catch (error) {
        migrationResults.push({ id, status: 'failed', error: error.message });
      }
    }
    
    // Clear the list after migration attempt
    localStorage.setItem('onboarding_list', JSON.stringify(
      migrationResults.filter(r => r.status === 'failed').map(r => r.id)
    ));
    
    return migrationResults;
  }
}
```

## 🚀 Deployment Configuration

### Vercel Configuration
```json
// vercel.json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm ci",
  "functions": {
    "app/api/**/*.ts": {
      "runtime": "nodejs18.x"
    }
  },
  "env": {
    "NEXT_PUBLIC_SITE_URL": "https://lunaxcode.vercel.app",
    "NEXT_PUBLIC_EMAILJS_SERVICE_ID": "service_xxxxx",
    "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID": "template_xxxxx",
    "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY": "public_key_xxxxx"
  }
}
```

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Future API integration
NEXT_PUBLIC_API_URL=https://api.lunaxcode.com
NEXT_PUBLIC_PAYMENT_URL=https://payment.lunaxcode.com
```

## 📋 Implementation Checklist

### Week 1: Foundation with Data Integration
- [ ] Set up Next.js 15 project structure
- [ ] Create all data files with extracted information
- [ ] Implement DataService abstraction layer
- [ ] Set up Zustand stores with data integration
- [ ] Configure TypeScript types and interfaces

### Week 2: Core Components
- [ ] Build layout components (Header, Footer, Navigation)
- [ ] Create homepage sections with integrated data
- [ ] Implement PricingCard with onboarding trigger
- [ ] Build FeatureCard with dynamic content
- [ ] Add responsive design and animations

### Week 3: Onboarding System
- [ ] Create OnboardingModal with step navigation
- [ ] Build QuestionRenderer for dynamic forms
- [ ] Implement form validation with Zod
- [ ] Add progress tracking and data persistence
- [ ] Create success flow and prompt generation

### Week 4: Business Logic & Data Flow
- [ ] Implement complete onboarding workflows
- [ ] Add JSON prompt generation with service-specific templates
- [ ] Create contact form with email integration
- [ ] Build payment redirect pages
- [ ] Add localStorage management and backup

### Week 5: Email Integration & Notifications
- [ ] Set up EmailJS for client-side email sending
- [ ] Create email templates for onboarding notifications
- [ ] Implement contact form email delivery
- [ ] Add confirmation emails for clients
- [ ] Test email delivery and error handling

### Week 6: API Migration Preparation
- [ ] Create API client structure
- [ ] Build data mapping utilities
- [ ] Implement migration scripts
- [ ] Add environment configuration
- [ ] Test with mock API endpoints

### Week 7: Testing & Optimization
- [ ] Write unit tests for components
- [ ] Test onboarding workflows end-to-end
- [ ] Optimize performance and bundle size
- [ ] Add error boundaries and loading states
- [ ] Test responsive design across devices

### Week 8: Deployment & Launch
- [ ] Configure Vercel deployment
- [ ] Set up domain and SSL
- [ ] Configure environment variables
- [ ] Test production deployment
- [ ] Monitor performance and errors

## 🔄 Future API Migration Strategy

When your API endpoints are ready, the migration process will be:

1. **Update DataService**: Replace local data calls with API calls
2. **Environment Switch**: Toggle between local and API modes
3. **Data Migration**: Run migration scripts for existing local data
4. **Testing**: Ensure all functionality works with real API
5. **Deployment**: Deploy with API integration enabled

The current architecture makes this migration seamless without requiring major code changes, just updating the DataService implementation and adding proper error handling for network requests.

This approach gives you a fully functional website immediately while maintaining a clean path to API integration later.