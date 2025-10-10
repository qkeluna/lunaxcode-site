// lib/data-service.ts - Abstraction layer for API integration
import { api } from '@/lib/api';
import { EmailService } from '@/lib/email-service';
import type { OnboardingData, ContactData } from '@/types';
import type { LeadCreate } from '@/types/api';

type ErrorWithResponse = {
  message?: string;
  response?: {
    data?: unknown;
    status?: number;
  };
};

export class DataService {
  // Fetch services from API
  static async getServices() {
    try {
      return await api.getServices();
    } catch {
      console.warn('API unavailable, using fallback data for services');
      const { fallbackServices } = await import('@/lib/fallback-data');
      return fallbackServices;
    }
  }

  // Fetch pricing plans from API
  static async getPricingPlans() {
    try {
      return await api.getPricingPlans();
    } catch {
      console.warn('API unavailable, using fallback data for pricing plans');
      const { fallbackPricingPlans } = await import('@/lib/fallback-data');
      return fallbackPricingPlans;
    }
  }

  // Fetch features from API
  static async getFeatures() {
    try {
      return await api.getFeatures();
    } catch {
      console.warn('API unavailable, using fallback data for features');
      const { fallbackFeatures } = await import('@/lib/fallback-data');
      return fallbackFeatures;
    }
  }

  // Fetch onboarding questions from API
  static async getOnboardingQuestions(serviceType: string) {
    try {
      const schema = await api.getOnboardingQuestions(serviceType);
      return schema.questions;
    } catch {
      console.warn('API unavailable, using fallback data for onboarding questions');
      // Fallback to local data when API is unavailable
      const { ONBOARDING_QUESTIONS } = await import('@/data/onboarding-questions');
      const serviceQuestions = ONBOARDING_QUESTIONS[serviceType as keyof typeof ONBOARDING_QUESTIONS];
      
      if (!serviceQuestions) {
        console.error(`No onboarding questions found for service type: ${serviceType}`);
        return [];
      }
      
      return serviceQuestions.questions;
    }
  }

  // Fetch company info from API
  static async getCompanyInfo() {
    try {
      return await api.getCompanyInfo();
    } catch {
      console.warn('API unavailable, using fallback data for company info');
      const { fallbackCompanyInfo } = await import('@/lib/fallback-data');
      return fallbackCompanyInfo;
    }
  }

  // Fetch add-ons from API
  static async getAddons() {
    try {
      return await api.getAddons();
    } catch {
      console.warn('API unavailable, using fallback data for addons');
      const { fallbackAddons } = await import('@/lib/fallback-data');
      return fallbackAddons;
    }
  }

  // Submit onboarding data as lead to API
  static async saveOnboarding(data: OnboardingData): Promise<{ id: string }> {
    try {
      console.log('📤 Submitting onboarding data:', JSON.stringify(data, null, 2));
      
      // Get service info to use default timeline if not provided
      const services = await this.getServices();
      const service = services.find(s => s.id === data.serviceType);
      const defaultTimeline = service?.timeline || '1-2 weeks';
      
      // Create project description from additional notes or service-specific answers
      const projectDescription = data.additionalNotes || 
        (Object.keys(data.serviceSpecific || {}).length > 0 
          ? `Service requirements: ${JSON.stringify(data.serviceSpecific)}`
          : `${service?.name || 'Project'} request`);
      
      // Transform OnboardingData to LeadCreate format
      const leadData: LeadCreate = {
        full_name: data.basicInfo.name,
        email: data.basicInfo.email,
        phone: this.formatPhilippinePhone(data.basicInfo.phone),
        company: data.basicInfo.company || undefined,
        service_type: data.serviceType,
        budget_range: data.budget || 'not_specified',
        timeline: data.timeline || defaultTimeline,
        project_description: projectDescription,
        answers: data.serviceSpecific || {},
        source: 'onboarding_form',
      };

      console.log('📡 Sending to API:', JSON.stringify(leadData, null, 2));
      
      const lead = await api.createLead(leadData);
      
      console.log('✅ API Response:', lead);
      
      // Send email notification to admin
      try {
        await EmailService.sendOnboardingNotification(data);
      } catch (emailError) {
        console.warn('⚠️ Email notification failed (non-critical):', emailError);
      }

      return { id: lead.id.toString() };
    } catch (error) {
      console.error('❌ API Error - Using localStorage fallback:', error);

      if (typeof error === 'object' && error !== null) {
        const normalizedError = error as ErrorWithResponse;
        console.error('❌ Error details:', {
          message: normalizedError.message ?? 'Unknown error',
          response: normalizedError.response?.data,
          status: normalizedError.response?.status,
        });
      } else {
        console.error('❌ Error details:', {
          message: String(error),
        });
      }
      // Fallback to localStorage if API fails
      return this.saveOnboardingToLocalStorage(data);
    }
  }

  // Fallback method for localStorage
  private static saveOnboardingToLocalStorage(data: OnboardingData): { id: string } {
    const id = `onboarding_${Date.now()}`;
    const timestamp = new Date().toISOString();

    const saved = {
      id,
      ...data,
      createdAt: timestamp,
      status: 'pending'
    };

  localStorage.setItem(id, JSON.stringify(saved));

  const onboardingListRaw = localStorage.getItem('onboarding_list');
  const existingList: string[] = onboardingListRaw ? JSON.parse(onboardingListRaw) : [];
  existingList.push(id);
  localStorage.setItem('onboarding_list', JSON.stringify(existingList));

    return { id };
  }

  // Submit contact form as lead to API
  static async saveContact(data: ContactData): Promise<{ success: boolean }> {
    try {
      console.log('📤 Submitting contact data:', data);
      
      // Transform ContactData to LeadCreate format
      const leadData: LeadCreate = {
        full_name: data.name,
        email: data.email,
        phone: this.formatPhilippinePhone(data.phone),
        company: data.company || undefined,
        service_type: data.service || 'general_inquiry',
        budget_range: 'not_specified',
        project_description: data.message || undefined,
        answers: {},
        source: 'contact_form',
      };

      console.log('📡 Sending contact to API:', leadData);

      const lead = await api.createLead(leadData);
      console.log('✅ Contact API Response:', lead);
      
      // Send email notification to admin
      await EmailService.sendContactNotification(data);
      
      return { success: true };
    } catch (error) {
      console.error('Failed to submit contact form:', error);
      // Fallback to localStorage if API fails
      return this.saveContactToLocalStorage(data);
    }
  }

  // Fallback method for localStorage
  private static saveContactToLocalStorage(data: ContactData): { success: boolean } {
    const id = `contact_${Date.now()}`;
    const timestamp = new Date().toISOString();

    const saved = {
      id,
      ...data,
      createdAt: timestamp
    };

    localStorage.setItem(id, JSON.stringify(saved));
    
    return { success: true };
  }

  // Helper to validate and format Philippine phone numbers
  private static formatPhilippinePhone(phone: string | undefined): string | undefined {
    if (!phone) return undefined;
    
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');
    
    // Handle different Philippine phone formats
    if (digits.startsWith('63')) {
      // Already has country code
      return `+${digits}`;
    } else if (digits.startsWith('9') && digits.length === 10) {
      // Mobile number without country code (e.g., 9171234567)
      return `+63${digits}`;
    } else if (digits.startsWith('0') && digits.length === 11) {
      // Mobile with leading 0 (e.g., 09171234567)
      return `+63${digits.substring(1)}`;
    }
    
    // If format doesn't match, don't send phone
    console.warn('⚠️ Invalid phone format, skipping phone field:', phone);
    return undefined;
  }
}
