'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { DataService } from '@/lib/data-service';
import type { OnboardingData, ContactData } from '@/types';

// Query keys for cache management
export const queryKeys = {
  services: ['services'] as const,
  pricingPlans: ['pricingPlans'] as const,
  features: ['features'] as const,
  addons: ['addons'] as const,
  companyInfo: ['companyInfo'] as const,
  onboardingQuestions: (serviceType: string) => ['onboardingQuestions', serviceType] as const,
};

// Hook for fetching services
export function useServices() {
  return useQuery({
    queryKey: queryKeys.services,
    queryFn: () => DataService.getServices(),
  });
}

// Hook for fetching pricing plans
export function usePricingPlans() {
  return useQuery({
    queryKey: queryKeys.pricingPlans,
    queryFn: () => DataService.getPricingPlans(),
  });
}

// Hook for fetching features
export function useFeatures() {
  return useQuery({
    queryKey: queryKeys.features,
    queryFn: () => DataService.getFeatures(),
  });
}

// Hook for fetching add-ons
export function useAddons() {
  return useQuery({
    queryKey: queryKeys.addons,
    queryFn: () => DataService.getAddons(),
  });
}

// Hook for fetching company info
export function useCompanyInfo() {
  return useQuery({
    queryKey: queryKeys.companyInfo,
    queryFn: () => DataService.getCompanyInfo(),
  });
}

// Hook for fetching onboarding questions
export function useOnboardingQuestions(serviceType: string) {
  return useQuery({
    queryKey: queryKeys.onboardingQuestions(serviceType),
    queryFn: () => DataService.getOnboardingQuestions(serviceType),
    enabled: !!serviceType, // Only fetch when serviceType is provided
  });
}

// Hook for submitting onboarding data
export function useSubmitOnboarding() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: OnboardingData) => DataService.saveOnboarding(data),
    onSuccess: () => {
      // Invalidate and refetch relevant queries if needed
      queryClient.invalidateQueries({ queryKey: queryKeys.services });
    },
  });
}

// Hook for submitting contact form
export function useSubmitContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ContactData) => DataService.saveContact(data),
    onSuccess: () => {
      // Invalidate and refetch relevant queries if needed
      queryClient.invalidateQueries({ queryKey: queryKeys.services });
    },
  });
}
