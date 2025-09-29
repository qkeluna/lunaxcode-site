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
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
          />
        );

      case 'select':
        return (
          <select
            value={value as string || ''}
            onChange={handleSelectChange}
            required={question.required}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select an option...</option>
            {question.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case 'checkbox':
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  checked={Array.isArray(value) && value.includes(option)}
                  onChange={(e) => handleCheckboxChange(option, e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                />
                <span className="ml-3 text-slate-700">{option}</span>
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
      <label className="block text-sm font-medium text-slate-700">
        {question.label}
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {renderInput()}
    </div>
  );
}