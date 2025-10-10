"use client";

import { useCallback, useRef, useState, useEffect } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { flushSync } from "react-dom";
import { useThemeStore, type Theme } from "@/store/theme-store";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const ThemeIcon = ({ theme }: { theme: Theme }) => {
  const iconClass = "w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300";
  
  switch (theme) {
    case 'light':
      return <Sun className={iconClass} />;
    case 'dark':
      return <Moon className={iconClass} />;
    case 'system':
      return <Monitor className={iconClass} />;
    default:
      return <Sun className={iconClass} />;
  }
};

export const AnimatedThemeToggler = ({ className }: Props) => {
  const { theme, toggleTheme, initializeTheme } = useThemeStore();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  // Initialize theme and prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    initializeTheme();
  }, [initializeTheme]);

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

  // Show neutral state during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className={cn(
          "relative overflow-hidden w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center transition-all duration-300 group",
          className
        )}
        aria-label="Toggle theme"
        disabled
      >
        <div className="relative z-10">
          <Sun className="w-5 h-5 text-muted-foreground opacity-50" />
        </div>
      </button>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={handleToggleTheme}
      className={cn(
        "relative overflow-hidden w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-accent hover:border-primary transition-all duration-300 group",
        className
      )}
      aria-label={`Toggle theme (current: ${theme})`}
      title={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode`}
    >
      <div className="relative z-10">
        <ThemeIcon theme={theme} />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-primary rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

    </button>
  );
};