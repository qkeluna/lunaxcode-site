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
          <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
            step.number <= currentStep
              ? 'bg-blue-600 text-white'
              : 'bg-slate-200 text-slate-600'
          }`}>
            {step.number}
          </div>

          <div className="ml-3">
            <div className={`text-sm font-medium ${
              step.number <= currentStep ? 'text-slate-900' : 'text-slate-500'
            }`}>
              {step.title}
            </div>
          </div>

          {index < steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-4 ${
              step.number < currentStep ? 'bg-blue-600' : 'bg-slate-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}