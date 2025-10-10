// components/onboarding/Summary.tsx
'use client';

import { useOnboardingStore } from '@/store/onboarding-store';
import { useServices } from '@/hooks/useApi';

export function Summary() {
  const { formData, submitOnboarding, isLoading, error } = useOnboardingStore();
  const { services } = useServices();
  const service = services?.find(s => s.id === formData.serviceType);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitOnboarding();
  };

  return (
    <div>
      <h3 className="text-h4 text-primary mb-4">Review Your Information</h3>
      <p className="text-[var(--text-secondary)] mb-6">
        Please review your information before submitting your request.
      </p>

      <div className="bg-[var(--surface-elevated)] rounded-lg p-6 space-y-4 mb-6 border border-[var(--border-subtle)]">
        <div>
          <h4 className="font-semibold text-[var(--text-primary)] mb-2">Service Selected</h4>
          <p className="text-[var(--text-secondary)]">{service?.name}</p>
        </div>

        <div>
          <h4 className="font-semibold text-[var(--text-primary)] mb-2">Basic Information</h4>
          <div className="text-[var(--text-secondary)] space-y-1">
            <p><strong className="text-[var(--text-primary)]">Name:</strong> {formData.basicInfo?.name}</p>
            <p><strong className="text-[var(--text-primary)]">Email:</strong> {formData.basicInfo?.email}</p>
            <p><strong className="text-[var(--text-primary)]">Phone:</strong> {formData.basicInfo?.phone}</p>
            {formData.basicInfo?.company && (
              <p><strong className="text-[var(--text-primary)]">Company:</strong> {formData.basicInfo.company}</p>
            )}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-[var(--text-primary)] mb-2">Service Requirements</h4>
          <div className="text-[var(--text-secondary)]">
            {formData.serviceSpecific && Object.entries(formData.serviceSpecific).map(([key, value]) => (
              <p key={key}>
                <strong className="text-[var(--text-primary)]">{key}:</strong> {Array.isArray(value) ? value.join(', ') : value}
              </p>
            ))}
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-[var(--accent-error)]/10 border border-[var(--accent-error)] rounded-lg p-4 mb-4">
          <p className="text-[var(--accent-error)]">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => useOnboardingStore.getState().prevStep()}
            className="px-6 py-3 border border-[var(--border-medium)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--surface-elevated)] transition-all duration-300"
            disabled={isLoading}
          >
            Previous
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            {isLoading ? 'Submitting...' : 'Submit Request'}
          </button>
        </div>
      </form>
    </div>
  );
}