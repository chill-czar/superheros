"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 flex flex-col px-margin-mobile md:px-margin-desktop bg-ink-black border-b border-surface-container-highest">
      <div className="flex justify-between items-center py-4 w-full">
        <Link className="font-display-lg text-headline-md text-hero-red tracking-tighter hover:opacity-80 transition-opacity" href="/" onClick={() => setIsMobileMenuOpen(false)}>
          SUPERHEROS
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-label-lg text-label-lg py-2 transition-colors ${
                  isActive
                    ? "text-hero-red font-bold border-b-2 border-hero-red pb-1 active:scale-95 duration-150"
                    : "text-on-surface-variant font-medium hover:text-hero-red"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>search</span>
            <input className="bg-surface-charcoal border border-surface-container-highest text-on-background pl-9 pr-4 py-2 rounded focus:outline-none focus:border-royal-blue transition-colors font-body-md text-body-md w-64 placeholder:text-on-surface-variant" placeholder="Search..." type="text" />
          </div>
          <Link href="/" className="hidden md:flex items-center justify-center font-label-lg text-label-lg font-bold text-paper-white bg-hero-red px-6 py-2 rounded hover:bg-inverse-primary transition-colors">
            Sign In
          </Link>
          <button 
            className="md:hidden text-on-surface hover:text-hero-red p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col border-t border-surface-container-highest py-4 gap-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-label-lg text-label-lg py-2 transition-colors ${
                  isActive
                    ? "text-hero-red font-bold"
                    : "text-on-surface-variant font-medium hover:text-hero-red"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="relative mt-2">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>search</span>
            <input className="w-full bg-surface-charcoal border border-surface-container-highest text-on-background pl-9 pr-4 py-2 rounded focus:outline-none focus:border-royal-blue transition-colors font-body-md text-body-md placeholder:text-on-surface-variant" placeholder="Search..." type="text" />
          </div>
          <Link href="/" className="w-full mt-2 flex items-center justify-center font-label-lg text-label-lg font-bold text-paper-white bg-hero-red px-6 py-3 rounded hover:bg-inverse-primary transition-colors">
            Sign In
          </Link>
        </nav>
      )}
    </header>
  );
}
