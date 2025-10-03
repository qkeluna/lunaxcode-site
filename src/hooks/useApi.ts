'use client';

import useSWR from 'swr';
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
  const { data, error, isLoading, mutate } = useSWR(
    'pricing-plans',
    async () => {
      try {
        return await api.getPricingPlans();
      } catch (err) {
        console.warn('API unavailable, using fallback data for pricing plans');
        return fallbackPricingPlans;
      }
    },
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000, // 1 minute
      fallbackData: fallbackPricingPlans,
    }
  );

  return {
    plans: data,
    loading: isLoading,
    error: error && !data ? error : null, // Don't show error if we have fallback data
    refetch: mutate,
  };
}

// Custom hook for services
export function useServices() {
  const { data, error, isLoading, mutate } = useSWR(
    'services',
    async () => {
      try {
        return await api.getServices();
      } catch (err) {
        console.warn('API unavailable, using fallback data for services');
        return fallbackServices;
      }
    },
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
      fallbackData: fallbackServices,
    }
  );

  return {
    services: data,
    loading: isLoading,
    error: error && !data ? error : null,
    refetch: mutate,
  };
}

// Custom hook for features
export function useFeatures() {
  const { data, error, isLoading } = useSWR(
    'features',
    async () => {
      try {
        return await api.getFeatures();
      } catch (err) {
        console.warn('API unavailable, using fallback data for features');
        return fallbackFeatures;
      }
    },
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
      fallbackData: fallbackFeatures,
    }
  );

  return {
    features: data,
    loading: isLoading,
    error: error && !data ? error : null,
  };
}

// Custom hook for add-ons
export function useAddons() {
  const { data, error, isLoading } = useSWR(
    'addons',
    async () => {
      try {
        return await api.getAddons();
      } catch (err) {
        console.warn('API unavailable, using fallback data for addons');
        return fallbackAddons;
      }
    },
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
      fallbackData: fallbackAddons,
    }
  );

  return {
    addons: data,
    loading: isLoading,
    error: error && !data ? error : null,
  };
}

// Custom hook for company info
export function useCompanyInfo() {
  const { data, error, isLoading } = useSWR(
    'company-info',
    async () => {
      try {
        return await api.getCompanyInfo();
      } catch (err) {
        console.warn('API unavailable, using fallback data for company info');
        return fallbackCompanyInfo;
      }
    },
    {
      revalidateOnFocus: false,
      dedupingInterval: 300000, // 5 minutes - rarely changes
      fallbackData: fallbackCompanyInfo,
    }
  );

  return {
    company: data,
    loading: isLoading,
    error: error && !data ? error : null,
  };
}

// Custom hook for onboarding questions
export function useOnboardingQuestions(serviceType: string | null) {
  const { data, error, isLoading } = useSWR(
    serviceType ? `onboarding-${serviceType}` : null,
    () => serviceType ? api.getOnboardingQuestions(serviceType) : null,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  );

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
  const { data, error, isLoading, mutate } = useSWR(
    key,
    fetchFunction,
    {
      revalidateOnFocus: options?.revalidateOnFocus ?? false,
      dedupingInterval: options?.dedupingInterval ?? 60000,
    }
  );

  return {
    data,
    loading: isLoading,
    error,
    refetch: mutate,
  };
}
