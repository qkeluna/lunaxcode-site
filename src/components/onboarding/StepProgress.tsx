// components/onboarding/StepProgress.tsx
'use client';

import { useOnboardingStore } from '@/store/onboarding-store';

const steps = [
  { number: 1, title: 'Basic Info' },
  { number: 2, title: 'Service Details' },
  { number: 3, title: 'Summary' },
  { number: 4, title: 'Success' }
];

export function StepProgress() {
  const { currentStep } = useOnboardingStore();

  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-all duration-300 ${
            step.number <= currentStep
              ? 'bg-[var(--accent-primary)] text-white shadow-lg shadow-[var(--accent-primary)]/50'
              : 'bg-[var(--surface-elevated)] text-[var(--text-tertiary)] border border-[var(--border-subtle)]'
          }`}>
            {step.number}
          </div>

          <div className="ml-3">
            <div className={`text-sm font-medium transition-colors duration-300 ${
              step.number <= currentStep ? 'text-[var(--text-primary)]' : 'text-[var(--text-tertiary)]'
            }`}>
              {step.title}
            </div>
          </div>

          {index < steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
              step.number < currentStep ? 'bg-[var(--accent-primary)]' : 'bg-[var(--border-subtle)]'
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}