// components/onboarding/OnboardingModal.tsx
'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useOnboardingStore } from '@/store/onboarding-store';
import { StepProgress } from './StepProgress';
import { BasicInfo } from './BasicInfo';
import { ServiceSpecific } from './ServiceSpecific';
import { Summary } from './Summary';
import { Success } from './Success';

export function OnboardingModal() {
  const {
    isModalOpen,
    currentStep,
    closeModal,
    reset
  } = useOnboardingStore();

  // Reset modal when it closes
  useEffect(() => {
    if (!isModalOpen) {
      // Small delay to allow animation to complete
      setTimeout(() => reset(), 300);
    }
  }, [isModalOpen, reset]);

  if (!isModalOpen) return null;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfo />;
      case 2:
        return <ServiceSpecific />;
      case 3:
        return <Summary />;
      case 4:
        return <Success />;
      default:
        return <BasicInfo />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="pr-12">
            <h2 className="text-2xl font-bold mb-2">Start Your Project</h2>
            <p className="text-blue-100">
              Tell us about your needs and we&apos;ll create a custom solution for you.
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="px-6 pt-6">
          <StepProgress />
        </div>

        {/* Content */}
        <div className="px-6 pb-6 max-h-96 overflow-y-auto">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}