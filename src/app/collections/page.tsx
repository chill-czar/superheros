import Image from "next/image";
import Link from "next/link";

export default function CollectionsPage() {
  return (
    <>

      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center pb-24">
        {/* Hero Section */}
        <header className="w-full max-w-container-max-width px-margin-mobile md:px-margin-desktop py-16 md:py-24 text-center flex flex-col items-center">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-paper-white uppercase tracking-tighter mb-4">
            Curated <span className="text-hero-red">Grails</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Explore our meticulously sourced collections. From silver-age comic keys to high-grade sports cards, discover the centerpieces for your ultimate display.
          </p>
        </header>

        {/* Bento Grid Collections */}
        <section className="w-full max-w-container-max-width px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
          
          {/* Category 1: Comics & Action Figures (Large Feature) */}
          <article className="group relative flex flex-col overflow-hidden rounded-xl bg-surface-charcoal border border-surface-container-highest transition-all duration-300 hover:-translate-y-1 hover:border-hero-red hover:shadow-[0_12px_40px_-15px_rgba(239,68,68,0.2)] md:col-span-8 md:row-span-2 min-h-[400px]">
            <div className="absolute inset-0 z-0">
              <Image 
                alt="A cinematic shot of vintage comic books stacked neatly next to a highly detailed superhero action figure inside a glass display case." 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJohtdPFRKbJg7GFef-8k2-EGkmwnzzqtjs1kPNdBRQkA-9U3w-RMH8djrCfkEsQ8XeaaTFf3s5S6Anf4_OGtK744F6uvcW5R14uZDuKJerOBG7uj_zYAQwTH6FJ0aiE2mQJyUPOKpxpIzWCtNUM6WCv0X6DRZPQqc9C6TwZglVmgOIF0PskYENBr1IEruXMshYBz9M_7Kghoy2OXUdydrUPiXxFOrFQPnzaeabaP_i3FdsT1ioGs5XrUQkYcZDVdnV9xWxlLp8f4n"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/60 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full p-8">
              <span className="inline-block bg-power-yellow text-ink-black font-label-sm text-label-sm uppercase px-2 py-1 rounded-sm w-max mb-3 font-bold">Featured Catalog</span>
              <h2 className="font-headline-md text-headline-md text-paper-white mb-2 uppercase">Comic Books &amp; Action Figures</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                Dive into the golden and silver ages. We curate high-grade, slabbed comics and pristine, in-box action figures spanning classic cinematic universes and legendary sequential art runs.
              </p>
            </div>
          </article>

          {/* Category 2: Hot Wheels (Standard) */}
          <article className="group relative flex flex-col overflow-hidden rounded-xl bg-surface-charcoal border border-surface-container-highest transition-all duration-300 hover:-translate-y-1 hover:border-hero-red hover:shadow-[0_12px_40px_-15px_rgba(239,68,68,0.2)] md:col-span-4">
            <div className="h-48 w-full overflow-hidden bg-surface-container-lowest relative">
              <Image 
                alt="Hot Wheels"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuRv_3QhBkZwE3o3soHY_OufuYJq9t7pdJsRX_u_fWscHxYz8yIj5YmXgyytgQBnx0UTG-hrDx7Ci6IThwKYy3si9DgLx8LZOrIvW27viyut0symFV7VTCBLFHCrOl1_TzWxVKqRknpuzA_cLCnNInlajuDHsq_r8PrVlxoWkyfQMJyvdlUmGFiw1_RB5d30NqhlRyCF04r0SVQcidKLjI70rTNpk2WKPJDhKSbcbjCjOyHzTUshKzu4_zHmPGGfBRnavoMLGZdaKZ"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-title-lg text-title-lg text-paper-white mb-2">Hot Wheels &amp; Diecast</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                Rare redlines, treasure hunts, and premium diecast models. Perfect for completing your 1:64 scale garage showcase.
              </p>
              <Link className="mt-4 font-label-lg text-label-lg text-hero-red hover:text-inverse-primary flex items-center gap-1 uppercase tracking-wider" href="#">
                View Inventory <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </article>

          {/* Category 3: Sports Cards (Standard) */}
          <article className="group relative flex flex-col overflow-hidden rounded-xl bg-surface-charcoal border border-surface-container-highest transition-all duration-300 hover:-translate-y-1 hover:border-royal-blue hover:shadow-[0_12px_40px_-15px_rgba(30,64,175,0.2)] md:col-span-4">
            <div className="h-48 w-full overflow-hidden bg-surface-container-lowest relative">
              <Image 
                alt="Sports Cards"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtv9MbkUnTo4KQKpkhhpwu6T8II0ohZx5wZxatYOXUy6uSrHdhOjm-Rj6mEylah592471b0_g9VQzlj9q2LB3IMfo57oSbHPcj0laO30V3pvpPJO-tx9ytAaFGL4DfQ9mqhMY5PnEMWs5tdMxZ85oXiXGaJL9dnePUEXUx7uvBmVamQAlM-g10lveJ6t5JFRbmcEjxKnZm3SUnnvMTEppDB7ixUkbEfQTQtUprNtzWGiQW02GfzW-07RZEJuZ6iKSlaLAu6rHynWb1"
                fill
                style={{ objectFit: 'cover' }}
              />
              <span className="absolute top-3 right-3 z-10 bg-hero-red text-paper-white font-label-sm text-label-sm px-2 py-1 rounded-sm uppercase font-bold">Hot Market</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-title-lg text-title-lg text-paper-white mb-2">Sports Cards Vault</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                Investment-grade slabs and raw gems across Baseball, Basketball, and Football. Rookies, autos, and numbered refractors.
              </p>
              <Link className="mt-4 font-label-lg text-label-lg text-royal-blue hover:text-secondary-container flex items-center gap-1 uppercase tracking-wider" href="#">
                View Inventory <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </article>

          {/* Category 4: Entertainment Cards (Standard) */}
          <article className="group relative flex flex-col overflow-hidden rounded-xl bg-surface-charcoal border border-surface-container-highest transition-all duration-300 hover:-translate-y-1 hover:border-hero-red hover:shadow-[0_12px_40px_-15px_rgba(239,68,68,0.2)] md:col-span-4">
            <div className="h-48 w-full overflow-hidden bg-surface-container-lowest relative">
              <Image 
                alt="Entertainment Cards" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7xTSkYzCR8QIveAxwhRcsO_u_cRlsb3pWLEHHuTO2yW2Xgp2RQu_6I7_NGYz-j3C78WZ-GZs_nCNdvXLj703-3NhUYaxzxAVNA9hrqLYQ771M9YnEHraVkdb2VYPvp865he27EcxF7w-_bQUChjGb2vOe6u92K_3OicB_HGE_muQLQEpRAK9vaD2m40gv_aQpqcEma2hb-CKYGZClaNSzf0rdwA2vKK1LDT1X3AAqfXOhqGjVX0x8zohmalVpnuieHokzIh_XeFgz"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-title-lg text-title-lg text-paper-white mb-2">Entertainment Cards</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                Pop culture artifacts captured in cardboard. Discover rare pulls from classic Sitcoms, iconic Bands, and the Star Wars universe.
              </p>
              <Link className="mt-4 font-label-lg text-label-lg text-hero-red hover:text-inverse-primary flex items-center gap-1 uppercase tracking-wider" href="#">
                View Inventory <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </article>

          {/* Category 5: Nascar Memorabilia (Standard) */}
          <article className="group relative flex flex-col overflow-hidden rounded-xl bg-surface-charcoal border border-surface-container-highest transition-all duration-300 hover:-translate-y-1 hover:border-hero-red hover:shadow-[0_12px_40px_-15px_rgba(239,68,68,0.2)] md:col-span-4">
            <div className="h-48 w-full overflow-hidden bg-surface-container-lowest relative">
              <Image 
                alt="Nascar Memorabilia" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlF8Tat8C-r0VSfWFMFKarsGmCBTOSuMRpGqrxdiVSImCfBHZXxTAokn5RWw7TKCOIfCISkCgX7wPPx6SvTEhYwqlrJ07jPQS_aiW0YojQaN8Jxp8Zhh48eJcQafEJoLXj7Zh_hJnqXks4vF8IsnfutGRjou6sjXe7ObE4TumY0D4qBr_0yFjG1YmcQn624TfY-jX37QmX0_9eS-mjJRMIrEU2T5WlmcNviKRtsVFGS0y8kxLQaLt7_VKf753I7WIs0JiB5xlNEjJa"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-title-lg text-title-lg text-paper-white mb-2">Nascar Memorabilia</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                Relive the glory days of the track. Authentic sheet metal, signed gear, and limited edition team issues for the serious racing historian.
              </p>
              <Link className="mt-4 font-label-lg text-label-lg text-hero-red hover:text-inverse-primary flex items-center gap-1 uppercase tracking-wider" href="#">
                View Inventory <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </article>

          {/* Category 6: Rare & Hard to Find (Wide Feature) */}
          <article className="group relative flex flex-col overflow-hidden rounded-xl bg-surface-charcoal border border-surface-container-highest transition-all duration-300 hover:-translate-y-1 hover:border-power-yellow hover:shadow-[0_12px_40px_-15px_rgba(250,204,21,0.15)] md:col-span-8 flex-row md:flex-row min-h-[240px]">
            <div className="md:w-2/5 w-full h-48 md:h-auto overflow-hidden bg-surface-container-lowest shrink-0 relative">
              <Image 
                alt="Rare item" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1X9DSnWwn3OJ9Rtt5th8vLHkPUCVXYL9V_Z3bva_v6oN7RHxXGEceF4qn9-xrQasGtwJLru6hd0GzfjbdFI0hXEQtE7F5aw_ZZkHe7JOEf_I5rAWBqQcZ07v1uujzVjPousOv3P-NPXghPieYWLvTQykt_L5qfnSaygIkgpuNqJdG6X12H_yK0UiKpy-4HFQmgfG349-4vh9qgqRTY-bqmseCOeuHq1d4MoltReZjt0Q10tMabw6kAb0BJiUPj1NxersD8yuAeKuo"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-8 flex flex-col justify-center flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-power-yellow" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                <span className="text-power-yellow font-label-sm text-label-sm uppercase font-bold tracking-widest">Premium Sourced</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-paper-white mb-3 uppercase">Rare &amp; Hard to Find</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-md">
                The ultimate pursuit. One-of-a-kind prototypes, error prints, and museum-grade artifacts that rarely see the open market. Inquire for valuation and acquisition services.
              </p>
              <button className="self-start font-label-lg text-label-lg font-bold text-ink-black bg-power-yellow px-6 py-2 rounded-DEFAULT hover:bg-white transition-colors">
                Request Concierge Service
              </button>
            </div>
          </article>

        </section>
      </main>

    </>
  );
}
