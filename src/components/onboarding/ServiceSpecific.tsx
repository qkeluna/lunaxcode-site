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
      <h3 className="text-xl font-semibold text-slate-900 mb-4">
        Service-Specific Details
      </h3>
      <p className="text-slate-600 mb-6">
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
            className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Previous
          </button>

          <button
            type="submit"
            disabled={!canProceed()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-semibold transition-colors"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}