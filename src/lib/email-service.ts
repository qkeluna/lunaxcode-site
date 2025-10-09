// lib/email-service.ts - EmailJS integration for client-side email notifications
import emailjs from '@emailjs/browser';
import type { OnboardingData, ContactData } from '@/types';

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

// Initialize EmailJS
if (typeof window !== 'undefined' && EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export class EmailService {
  /**
   * Send onboarding notification email to admin
   */
  static async sendOnboardingNotification(data: OnboardingData): Promise<void> {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn('EmailJS not configured. Skipping email notification.');
      return;
    }

    try {
      const templateParams = {
        to_email: 'lunaxcode2030@gmail.com', // Admin email
        from_name: data.basicInfo.name,
        from_email: data.basicInfo.email,
        from_phone: data.basicInfo.phone || 'Not provided',
        from_company: data.basicInfo.company || 'Not provided',
        service_type: data.serviceType,
        budget: data.budget || 'Not specified',
        timeline: data.timeline || 'Not specified',
        message: data.additionalNotes || 'No additional notes',
        submission_type: 'Onboarding',
        // Include service-specific details as JSON string
        service_details: JSON.stringify(data.serviceSpecific, null, 2),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Onboarding notification sent successfully');
    } catch (error) {
      console.error('Failed to send onboarding notification:', error);
      // Don't throw - email failure shouldn't break the submission
    }
  }

  /**
   * Send contact form notification email to admin
   */
  static async sendContactNotification(data: ContactData): Promise<void> {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn('EmailJS not configured. Skipping email notification.');
      return;
    }

    try {
      const templateParams = {
        to_email: 'lunaxcode2030@gmail.com', // Admin email
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone || 'Not provided',
        from_company: data.company || 'Not provided',
        service_type: data.service || 'General Inquiry',
        message: data.message,
        submission_type: 'Contact Form',
        budget: 'Not specified',
        timeline: 'Not specified',
        service_details: '',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Contact notification sent successfully');
    } catch (error) {
      console.error('Failed to send contact notification:', error);
      // Don't throw - email failure shouldn't break the submission
    }
  }

  /**
   * Send auto-reply confirmation to customer
   * Note: You'll need to create a separate template in EmailJS for this
   */
  static async sendCustomerConfirmation(
    email: string,
    name: string,
    type: 'onboarding' | 'contact'
  ): Promise<void> {
    // Optional: Implement if you create a customer confirmation template
    // For now, this is a placeholder
    console.log(`Customer confirmation would be sent to ${email} (${name}) for ${type}`);
  }
}
