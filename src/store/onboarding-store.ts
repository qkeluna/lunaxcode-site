// store/onboarding-store.ts
import { create } from 'zustand';
import { DataService } from '@/lib/data-service';
import type { OnboardingData, OnboardingQuestion } from '@/types';

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
      questions: questions?.questions ? [...questions.questions] : [],
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
      console.error('Onboarding submission error:', error);
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
        return !!(formData.basicInfo?.name && formData.basicInfo?.email && formData.basicInfo?.phone);
      case 3: // Service-specific questions
        return questions.filter(q => q.required).every(q => {
          const value = formData.serviceSpecific?.[q.id];
          return value && (Array.isArray(value) ? value.length > 0 : value.length > 0);
        });
      default:
        return true;
    }
  }
}));

// Helper function to generate project prompt
function generateProjectPrompt(data: OnboardingData): string {
  const serviceQuestions = DataService.getOnboardingQuestions(data.serviceType);
  const serviceSpecificData = data.serviceSpecific;

  let prompt = `Project Requirements for ${data.serviceType}:\n\n`;
  prompt += `Basic Information:\n`;
  prompt += `- Name: ${data.basicInfo.name}\n`;
  prompt += `- Email: ${data.basicInfo.email}\n`;
  prompt += `- Phone: ${data.basicInfo.phone}\n`;
  if (data.basicInfo.company) {
    prompt += `- Company: ${data.basicInfo.company}\n`;
  }

  prompt += `\nService-Specific Requirements:\n`;
  if (serviceQuestions?.questions) {
    serviceQuestions.questions.forEach(question => {
      const answer = serviceSpecificData?.[question.id];
      if (answer) {
        prompt += `- ${question.label}: ${Array.isArray(answer) ? answer.join(', ') : answer}\n`;
      }
    });
  }

  if (data.additionalNotes) {
    prompt += `\nAdditional Notes: ${data.additionalNotes}\n`;
  }

  return prompt;
}