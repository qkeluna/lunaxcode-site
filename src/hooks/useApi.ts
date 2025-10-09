'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import {
  fallbackPricingPlans,
  fallbackServices,
  fallbackFeatures,
  fallbackAddons,
  fallbackCompanyInfo,
} from '@/lib/fallback-data';

// Custom hook for pricing plans
export function usePricingPlans() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['pricing-plans'],
    queryFn: async () => {
      try {
        return await api.getPricingPlans();
      } catch {
        console.warn('API unavailable, using fallback data for pricing plans');
        return fallbackPricingPlans;
      }
    },
    initialData: fallbackPricingPlans,
  });

  return {
    plans: data,
    loading: isLoading,
    error: error && !data ? error : null,
    refetch,
  };
}

// Custom hook for services
export function useServices() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      try {
        return await api.getServices();
      } catch {
        console.warn('API unavailable, using fallback data for services');
        return fallbackServices;
      }
    },
    initialData: fallbackServices,
  });

  return {
    services: data,
    loading: isLoading,
    error: error && !data ? error : null,
    refetch,
  };
}

// Custom hook for features
export function useFeatures() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['features'],
    queryFn: async () => {
      try {
        return await api.getFeatures();
      } catch {
        console.warn('API unavailable, using fallback data for features');
        return fallbackFeatures;
      }
    },
    initialData: fallbackFeatures,
  });

  return {
    features: data,
    loading: isLoading,
    error: error && !data ? error : null,
  };
}

// Custom hook for add-ons
export function useAddons() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['addons'],
    queryFn: async () => {
      try {
        return await api.getAddons();
      } catch {
        console.warn('API unavailable, using fallback data for addons');
        return fallbackAddons;
      }
    },
    initialData: fallbackAddons,
  });

  return {
    addons: data,
    loading: isLoading,
    error: error && !data ? error : null,
  };
}

// Custom hook for company info
export function useCompanyInfo() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['company-info'],
    queryFn: async () => {
      try {
        return await api.getCompanyInfo();
      } catch {
        console.warn('API unavailable, using fallback data for company info');
        return fallbackCompanyInfo;
      }
    },
    initialData: fallbackCompanyInfo,
    staleTime: 5 * 60 * 1000, // 5 minutes - rarely changes
  });

  return {
    company: data,
    loading: isLoading,
    error: error && !data ? error : null,
  };
}

// Custom hook for onboarding questions
export function useOnboardingQuestions(serviceType: string | null) {
  const { data, error, isLoading } = useQuery({
    queryKey: serviceType ? ['onboarding', serviceType] : ['onboarding'],
    queryFn: () => serviceType ? api.getOnboardingQuestions(serviceType) : null,
    enabled: !!serviceType,
  });

  return {
    schema: data,
    loading: isLoading,
    error,
  };
}

// Generic hook for API calls with state management
export function useApi<T>(
  fetchFunction: () => Promise<T>,
  key: string,
  options?: {
    revalidateOnFocus?: boolean;
    dedupingInterval?: number;
  }
) {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: [key],
    queryFn: fetchFunction,
    refetchOnWindowFocus: options?.revalidateOnFocus ?? false,
    staleTime: options?.dedupingInterval ?? 60000,
  });

  return {
    data,
    loading: isLoading,
    error,
    refetch,
  };
}
