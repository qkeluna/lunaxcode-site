// src/types/index.ts
export interface OnboardingData {
  serviceType: string;
  basicInfo: {
    name: string;
    email: string;
    phone: string;
    company?: string;
  };
  serviceSpecific: Record<string, string | string[]>;
  timeline: string;
  budget: string;
  additionalNotes?: string;
  jsonPrompt?: string;
  submissionId?: string;
}

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  service?: string;
}

export interface OnboardingQuestion {
  id: string;
  label: string;
  type: 'text' | 'select' | 'checkbox' | 'textarea';
  options?: readonly string[];
  placeholder?: string;
  required: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  details: string;
  icon: string;
  timeline: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  timeline: string;
  features: string[];
  popular: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Addon {
  name: string;
  priceRange: string;
  currency: string;
  unit: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  paymentTerms: {
    deposit: string;
    balance: string;
    methods: string[];
  };
}