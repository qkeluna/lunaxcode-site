// lib/data-service.ts - Abstraction layer for API integration
import { api } from '@/lib/api';
import type { OnboardingData, ContactData } from '@/types';
import type { LeadCreate } from '@/types/api';

export class DataService {
  // Fetch services from API
  static async getServices() {
    try {
      return await api.getServices();
    } catch (error) {
      console.error('Failed to fetch services:', error);
      throw error;
    }
  }

  // Fetch pricing plans from API
  static async getPricingPlans() {
    try {
      return await api.getPricingPlans();
    } catch (error) {
      console.error('Failed to fetch pricing plans:', error);
      throw error;
    }
  }

  // Fetch features from API
  static async getFeatures() {
    try {
      return await api.getFeatures();
    } catch (error) {
      console.error('Failed to fetch features:', error);
      throw error;
    }
  }

  // Fetch onboarding questions from API
  static async getOnboardingQuestions(serviceType: string) {
    try {
      const schema = await api.getOnboardingQuestions(serviceType);
      return schema.questions;
    } catch (error) {
      console.error('Failed to fetch onboarding questions:', error);
      throw error;
    }
  }

  // Fetch company info from API
  static async getCompanyInfo() {
    try {
      return await api.getCompanyInfo();
    } catch (error) {
      console.error('Failed to fetch company info:', error);
      throw error;
    }
  }

  // Fetch add-ons from API
  static async getAddons() {
    try {
      return await api.getAddons();
    } catch (error) {
      console.error('Failed to fetch addons:', error);
      throw error;
    }
  }

  // Submit onboarding data as lead to API
  static async saveOnboarding(data: OnboardingData): Promise<{ id: string }> {
    try {
      // Transform OnboardingData to LeadCreate format
      const leadData: LeadCreate = {
        name: data.basicInfo.name,
        email: data.basicInfo.email,
        phone: data.basicInfo.phone,
        company: data.basicInfo.company,
        service_type: data.serviceType,
        budget_range: data.budget,
        timeline: data.timeline,
        project_description: data.additionalNotes || '',
        answers: data.serviceSpecific,
        source: 'onboarding_form',
      };

      const lead = await api.createLead(leadData);
      
      return { id: lead.id.toString() };
    } catch (error) {
      console.error('Failed to submit onboarding:', error);
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

    const existingList = JSON.parse(localStorage.getItem('onboarding_list') || '[]');
    existingList.push(id);
    localStorage.setItem('onboarding_list', JSON.stringify(existingList));

    return { id };
  }

  // Submit contact form as lead to API
  static async saveContact(data: ContactData): Promise<{ success: boolean }> {
    try {
      // Transform ContactData to LeadCreate format
      const leadData: LeadCreate = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        service_type: data.service || 'general_inquiry',
        budget_range: 'not_specified',
        project_description: data.message,
        answers: {},
        source: 'contact_form',
      };

      await api.createLead(leadData);
      
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
}