// API Types for lunaxcode-fastapi integration

// Base Types
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  timeline: string;
  features: string[];
  popular: boolean;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  details: string;
  icon: string;
  timeline: string;
  created_at: string;
  updated_at: string;
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface Addon {
  id: number;
  name: string;
  description: string;
  price_range: string;
  icon: string;
  created_at: string;
  updated_at: string;
}

export interface CompanyInfo {
  id: number;
  name: string;
  tagline: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  payment_terms: {
    deposit: string;
    balance: string;
    methods: string[];
  };
  updated_at: string;
}

export interface OnboardingQuestion {
  id: string;
  type: 'text' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'number' | 'date';
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
  display_order: number;
}

export interface OnboardingSchema {
  service_type: string;
  questions: OnboardingQuestion[];
}

// Lead Submission
export interface LeadCreate {
  full_name: string;
  email: string;
  phone?: string;
  company?: string;
  service_type: string;
  budget_range: string;
  timeline?: string;
  project_description?: string;
  answers: Record<string, string | string[] | number | boolean>;
  source?: string;
}

export interface Lead {
  id: number;
  full_name: string;
  email: string;
  phone?: string;
  company?: string;
  service_type: string;
  budget_range: string;
  timeline?: string;
  project_description?: string;
  answers: Record<string, string | string[] | number | boolean>;
  source?: string;
  ai_prompt: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// API Response Types
export interface HealthResponse {
  status: 'healthy' | 'unhealthy';
  service: string;
  version: string;
}

export interface DatabaseHealthResponse {
  status: 'healthy' | 'unhealthy';
  database: 'connected' | 'disconnected';
  error?: string;
}

export interface ApiError {
  detail: string;
}
