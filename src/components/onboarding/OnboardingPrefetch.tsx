'use client';

import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useServices } from '@/hooks/useApi';
import { DataService } from '@/lib/data-service';

/**
 * This component prefetches onboarding questions for all services
 * in the background, so the modal opens instantly when clicked.
 */
export function OnboardingPrefetch() {
  const queryClient = useQueryClient();
  const { services } = useServices();

  useEffect(() => {
    if (services && services.length > 0) {
      // Prefetch questions for all services in the background
      services.forEach((service) => {
        queryClient.prefetchQuery({
          queryKey: ['onboarding', service.id],
          queryFn: () => DataService.getOnboardingQuestions(service.id),
          staleTime: 5 * 60 * 1000, // Cache for 5 minutes
        });
      });
    }
  }, [services, queryClient]);

  // This component doesn't render anything
  return null;
}
