// components/layout/Header.tsx
'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useUIStore } from '@/store/ui-store';
import { COMPANY_INFO } from '@/data/company';

export function Header() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold hover:text-blue-300 transition-colors">
            {COMPANY_INFO.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-blue-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="#pricing"
            className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-blue-300 transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#pricing"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                onClick={closeMobileMenu}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}