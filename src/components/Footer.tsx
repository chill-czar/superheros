import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row justify-between gap-gutter border-t border-surface-charcoal bg-ink-black text-primary mt-auto">
      <div className="flex flex-col gap-4">
        <Link className="font-headline-md text-headline-md text-hero-red uppercase tracking-tighter" href="/">SUPERHEROS</Link>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
          The premier destination for high-end collectibles, comics, and vintage memorabilia in Klamath County.
        </p>
        <p className="font-label-sm text-label-sm text-surface-variant mt-4">
          © 2024 Superheros Collectibles Store. Klamath Falls, OR.
        </p>
      </div>
      <div className="flex flex-col md:items-end gap-2">
        <h4 className="font-title-lg text-title-lg text-paper-white mb-2">Services</h4>
        <nav className="flex flex-col md:items-end gap-2">
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-hero-red transition-colors" href="#">Buying</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-hero-red transition-colors" href="#">Selling</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-hero-red transition-colors" href="#">Trading</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-hero-red transition-colors" href="#">Valuations</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-hero-red transition-colors mt-4 text-sm opacity-70" href="#">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
