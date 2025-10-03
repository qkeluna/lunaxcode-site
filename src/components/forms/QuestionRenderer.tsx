// components/forms/QuestionRenderer.tsx
'use client';

import type { OnboardingQuestion } from '@/types';

interface QuestionRendererProps {
  question: OnboardingQuestion;
  value: string | string[] | undefined;
  onChange: (value: string | string[]) => void;
}

export function QuestionRenderer({ question, value, onChange }: QuestionRendererProps) {
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  const handleCheckboxChange = (option: string, checked: boolean) => {
    const currentValues = Array.isArray(value) ? value : [];
    if (checked) {
      onChange([...currentValues, option]);
    } else {
      onChange(currentValues.filter(v => v !== option));
    }
  };

  const renderInput = () => {
    switch (question.type) {
      case 'text':
        return (
          <input
            type="text"
            value={value as string || ''}
            onChange={handleTextChange}
            placeholder={question.placeholder}
            required={question.required}
            className="w-full px-4 py-3 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition-all duration-300"
          />
        );

      case 'textarea':
        return (
          <textarea
            value={value as string || ''}
            onChange={handleTextChange}
            placeholder={question.placeholder}
            required={question.required}
            rows={4}
            className="w-full px-4 py-3 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition-all duration-300 resize-vertical"
          />
        );

      case 'select':
        return (
          <select
            value={value as string || ''}
            onChange={handleSelectChange}
            required={question.required}
            className="w-full px-4 py-3 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition-all duration-300"
          >
            <option value="" className="bg-[var(--bg-secondary)]">Select an option...</option>
            {question.options?.map((option) => (
              <option key={option} value={option} className="bg-[var(--bg-secondary)]">
                {option}
              </option>
            ))}
          </select>
        );

      case 'checkbox':
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <label key={option} className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={Array.isArray(value) && value.includes(option)}
                  onChange={(e) => handleCheckboxChange(option, e.target.checked)}
                  className="w-4 h-4 text-[var(--accent-primary)] bg-[var(--surface-elevated)] border-[var(--border-subtle)] rounded focus:ring-2 focus:ring-[var(--accent-primary)] transition-all duration-300"
                />
                <span className="ml-3 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">{option}</span>
              </label>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[var(--text-secondary)]">
        {question.label}
        {question.required && <span className="text-[var(--accent-error)] ml-1">*</span>}
      </label>
      {renderInput()}
    </div>
  );
}