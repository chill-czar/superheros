"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop bg-ink-black py-4 border-b border-surface-container-highest">
      <Link className="font-display-lg text-headline-md text-hero-red tracking-tighter hover:opacity-80 transition-opacity" href="/">
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
        <button className="hidden md:flex items-center justify-center font-label-lg text-label-lg font-bold text-paper-white bg-hero-red px-6 py-2 rounded hover:bg-inverse-primary transition-colors">
          Sign In
        </button>
        <button className="md:hidden text-on-surface hover:text-hero-red">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
}
