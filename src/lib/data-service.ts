// lib/data-service.ts - Abstraction layer for easy API migration
import { SERVICES } from '@/data/services';
import { PRICING_PLANS } from '@/data/pricing';
import { FEATURES } from '@/data/features';
import { ONBOARDING_QUESTIONS } from '@/data/onboarding-questions';
import { COMPANY_INFO } from '@/data/company';
import { ADDONS } from '@/data/addons';
import type { OnboardingData, ContactData } from '@/types';

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

  private static async sendNotificationEmail(data: OnboardingData & { id: string; createdAt: string; status: string }) {
    // Implementation for email notifications
    console.log('Onboarding notification:', data);
    // TODO: Integrate with email service (EmailJS, Resend, etc.)
  }

  private static async sendContactEmail(data: ContactData & { id: string; createdAt: string }) {
    // Implementation for contact form emails
    console.log('Contact form submission:', data);
    // TODO: Integrate with email service
  }

  // Migration helper for future API integration
  static async migrateToAPI(apiClient: { createOnboarding: (data: OnboardingData) => Promise<{ id: string }> }) {
    const onboardingIds = JSON.parse(localStorage.getItem('onboarding_list') || '[]');

    for (const id of onboardingIds) {
      const data = JSON.parse(localStorage.getItem(id) || '{}') as OnboardingData & { id: string; createdAt: string; status: string };
      try {
        await apiClient.createOnboarding(data);
        localStorage.removeItem(id);
      } catch (error) {
        console.error('Migration failed for:', id, error);
      }
    }
  }
}