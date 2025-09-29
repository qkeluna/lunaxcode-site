// components/ui/ThemeToggle.tsx
'use client';

import { useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '@/store/theme-store';

export function ThemeToggle() {
  const { theme, toggleTheme, setTheme } = useThemeStore();

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const initialTheme = savedTheme || systemPreference;

      setTheme(initialTheme);
    }
  }, [setTheme]);

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-medium)] flex items-center justify-center hover:bg-[var(--surface-elevated)] hover:border-[var(--accent-primary)] transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors duration-300" />
      )}

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[var(--accent-primary)] rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    </button>
  );
}