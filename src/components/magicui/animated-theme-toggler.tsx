"use client";

import { useCallback, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { useThemeStore } from "@/store/theme-store";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: Props) => {
  const { theme, toggleTheme } = useThemeStore();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isDark = theme === 'dark';

  const handleToggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    // Check if View Transition API is supported
    if (!document.startViewTransition) {
      // Fallback for browsers that don't support View Transitions
      toggleTheme();
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        toggleTheme();
      });
    }).ready;

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [toggleTheme]);

  return (
    <button
      ref={buttonRef}
      onClick={handleToggleTheme}
      className={cn(
        "relative overflow-hidden w-10 h-10 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-medium)] flex items-center justify-center hover:bg-[var(--surface-elevated)] hover:border-[var(--accent-primary)] transition-all duration-300 group",
        className
      )}
      aria-label="Toggle theme"
    >
      <div className="relative z-10">
        {isDark ? (
          <Sun className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors duration-300" />
        ) : (
          <Moon className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors duration-300" />
        )}
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[var(--accent-primary)] rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

      {/* Animated Background */}
      <div
        className={cn(
          "absolute inset-0 transition-transform duration-500 ease-in-out",
          isDark ? "translate-y-0" : "translate-y-full"
        )}
        style={{
          background: isDark
            ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
        }}
      />
    </button>
  );
};