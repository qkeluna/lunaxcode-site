// components/ui/animated-menu-toggle.tsx
'use client';

import { useEffect } from 'react';

interface AnimatedMenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export function AnimatedMenuToggle({ isOpen, onClick }: AnimatedMenuToggleProps) {
  // Sync checkbox state with isOpen prop
  useEffect(() => {
    const checkbox = document.getElementById('mobile-menu-checkbox') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = isOpen;
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <input 
        id="mobile-menu-checkbox" 
        type="checkbox" 
        className="hidden"
        checked={isOpen}
        onChange={onClick}
      />
      <label 
        className="menu-toggle cursor-pointer flex flex-col items-center justify-center gap-[6px] w-10 h-10 transition-all duration-300"
        htmlFor="mobile-menu-checkbox"
        aria-label="Toggle mobile menu"
      >
        <div className="menu-bar w-full h-[3px] bg-[var(--foreground)] rounded-[5px] transition-all duration-300" id="bar1"></div>
        <div className="menu-bar w-full h-[3px] bg-[var(--foreground)] rounded-[5px] transition-all duration-300" id="bar2"></div>
        <div className="menu-bar w-full h-[3px] bg-[var(--foreground)] rounded-[5px] transition-all duration-300" id="bar3"></div>
      </label>
    </div>
  );
}
