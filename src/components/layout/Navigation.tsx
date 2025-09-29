// components/layout/Navigation.tsx
'use client';

import Link from 'next/link';
import { useUIStore } from '@/store/ui-store';

interface NavigationProps {
  items: Array<{ href: string; label: string }>;
}

export function Navigation({ items }: NavigationProps) {
  const { closeMobileMenu } = useUIStore();

  return (
    <nav className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-slate-300 hover:text-white transition-colors"
          onClick={closeMobileMenu}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}