// components/onboarding/ServiceSpecific.tsx
'use client';

import { useOnboardingStore } from '@/store/onboarding-store';
import { QuestionRenderer } from '../forms/QuestionRenderer';

export function ServiceSpecific() {
  const { questions, formData, updateFormData, nextStep, canProceed } = useOnboardingStore();

  const handleQuestionChange = (questionId: string, value: string | string[]) => {
    updateFormData({
      serviceSpecific: {
        ...formData.serviceSpecific,
        [questionId]: value
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canProceed()) {
      nextStep();
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
        Service-Specific Details
      </h3>
      <p className="text-[var(--text-secondary)] mb-6">
        Help us understand your specific requirements for this service.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map((question) => (
          <QuestionRenderer
            key={question.id}
            question={question}
            value={formData.serviceSpecific?.[question.id]}
            onChange={(value: string | string[]) => handleQuestionChange(question.id, value)}
          />
        ))}

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={() => useOnboardingStore.getState().prevStep()}
            className="px-6 py-3 border border-[var(--border-medium)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--surface-elevated)] transition-all duration-300"
          >
            Previous
          </button>

          <button
            type="submit"
            disabled={!canProceed()}
            className="px-6 py-3 bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}