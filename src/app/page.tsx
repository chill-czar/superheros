import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              alt="High-end comic books, action figures, and sports cards arranged beautifully on a dark wood table with cinematic lighting, showcasing a premium collectibles vault aesthetic."
              className="w-full h-full object-cover opacity-40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqp4gx2T9iqlGrZhF1GG0g0GZyezK0twIqVFwZNrk0lQe8AeUbI6pn0vZptXgYAsQlGXczbIooiPMyDFkhVT7Q69wGYX0ut0-La6HGAK_y_kvwp2hQAGOzoRiNPli6CauyVXmGnbvd-SJYCNR6nFXBz54QTS3PgCfbu2K01CwlOYZQiFUdbFHnBygLBHRe_7tvwW56uq5yZZ0LWYMAcQJ15KDh-Z4gNRkCULcaV17SvDEWQMQHYuN2pK8UMyZECtai_ho5_Z53zHAm"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center flex flex-col items-center gap-6">
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-paper-white uppercase drop-shadow-lg max-w-4xl">
              Your Ultimate Destination for{" "}
              <span className="text-hero-red">Rare Collectibles</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Curating the finest selection of Comic Books, Vintage Action Figures,
              and Premium Sports Cards in Klamath County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-hero-red text-paper-white font-label-lg text-label-lg px-8 py-4 rounded font-bold hover:bg-primary-container transition-colors uppercase tracking-wider">
                Browse Collections
              </button>
              <button className="border-2 border-royal-blue text-paper-white font-label-lg text-label-lg px-8 py-4 rounded font-bold hover:bg-royal-blue/20 transition-colors uppercase tracking-wider">
                Sell/Trade with Us
              </button>
            </div>
          </div>
        </section>

        {/* About Teaser */}
        <section className="py-20 bg-surface">
          <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <div className="inline-block p-4 bg-surface-charcoal rounded-xl border border-surface-container-highest shadow-lg shadow-black/20">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Established 2024 • Located in{" "}
                <span className="text-power-yellow font-bold">
                  Klamath Falls, OR
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Featured Categories (Bento Grid) */}
        <section className="py-24 bg-background">
          <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-paper-white uppercase mb-4">
                Featured Categories
              </h2>
              <div className="h-1 w-24 bg-hero-red mx-auto rounded"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/* Diecast Card */}
              <Link
                className="group relative col-span-1 md:col-span-8 rounded-xl overflow-hidden bg-surface-charcoal border border-surface-container-highest hover:border-hero-red transition-all duration-300 shadow-lg shadow-black/15 block aspect-video md:aspect-auto h-[400px]"
                href="#"
              >
                <Image
                  alt="A pristine collection of rare Hot Wheels and diecast model cars displayed on a sleek shelf in a specialized collectibles store setting, illuminated by bright, professional studio lighting."
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuRv_3QhBkZwE3o3soHY_OufuYJq9t7pdJsRX_u_fWscHxYz8yIj5YmXgyytgQBnx0UTG-hrDx7Ci6IThwKYy3si9DgLx8LZOrIvW27viyut0symFV7VTCBLFHCrOl1_TzWxVKqRknpuzA_cLCnNInlajuDHsq_r8PrVlxoWkyfQMJyvdlUmGFiw1_RB5d30NqhlRyCF04r0SVQcidKLjI70rTNpk2WKPJDhKSbcbjCjOyHzTUshKzu4_zHmPGGfBRnavoMLGZdaKZ"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="inline-block bg-power-yellow text-ink-black font-label-sm text-label-sm px-3 py-1 rounded font-bold uppercase mb-3">
                    Popular
                  </span>
                  <h3 className="font-headline-md text-headline-md text-paper-white uppercase">
                    Diecast &amp; Hot Wheels
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-md hidden md:block">
                    Discover rare variants, limited editions, and classic models.
                  </p>
                </div>
              </Link>
              {/* Sports Cards */}
              <Link
                className="group relative col-span-1 md:col-span-4 rounded-xl overflow-hidden bg-surface-charcoal border border-surface-container-highest hover:border-royal-blue transition-all duration-300 shadow-lg shadow-black/15 block h-[400px]"
                href="#"
              >
                <Image
                  alt="Premium graded sports cards, baseball cards, and entertainment trading cards neatly stacked in protective acrylic sleeves against a clean, professionally lit background."
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtv9MbkUnTo4KQKpkhhpwu6T8II0ohZx5wZxatYOXUy6uSrHdhOjm-Rj6mEylah592471b0_g9VQzlj9q2LB3IMfo57oSbHPcj0laO30V3pvpPJO-tx9ytAaFGL4DfQ9mqhMY5PnEMWs5tdMxZ85oXiXGaJL9dnePUEXUx7uvBmVamQAlM-g10lveJ6t5JFRbmcEjxKnZm3SUnnvMTEppDB7ixUkbEfQTQtUprNtzWGiQW02GfzW-07RZEJuZ6iKSlaLAu6rHynWb1"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="inline-block bg-hero-red text-paper-white font-label-sm text-label-sm px-3 py-1 rounded font-bold uppercase mb-3">
                    Investment Grade
                  </span>
                  <h3 className="font-headline-md text-title-lg text-paper-white uppercase">
                    Sports Cards
                  </h3>
                </div>
              </Link>
              {/* Comic Books (Text Focus) */}
              <Link
                className="group relative col-span-1 md:col-span-6 rounded-xl overflow-hidden bg-surface-charcoal border border-surface-container-highest hover:border-hero-red transition-all duration-300 shadow-lg shadow-black/15 block p-8 flex flex-col justify-center items-center text-center h-[300px]"
                href="#"
              >
                <span
                  className="material-symbols-outlined text-hero-red text-6xl mb-4 group-hover:scale-110 transition-transform"
                  data-icon="menu_book"
                >
                  menu_book
                </span>
                <h3 className="font-headline-md text-headline-md text-paper-white uppercase">
                  Comic Books
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-sm">
                  From Golden Age classics to modern keys. CGC graded and raw copies
                  available.
                </p>
              </Link>
              {/* Action Figures (Text Focus) */}
              <Link
                className="group relative col-span-1 md:col-span-6 rounded-xl overflow-hidden bg-surface-charcoal border border-surface-container-highest hover:border-royal-blue transition-all duration-300 shadow-lg shadow-black/15 block p-8 flex flex-col justify-center items-center text-center h-[300px]"
                href="#"
              >
                <span
                  className="material-symbols-outlined text-royal-blue text-6xl mb-4 group-hover:scale-110 transition-transform"
                  data-icon="sports_martial_arts"
                >
                  sports_martial_arts
                </span>
                <h3 className="font-headline-md text-headline-md text-paper-white uppercase">
                  Action Figures
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-sm">
                  Vintage lines, modern imports, and sealed exclusives for serious
                  collectors.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
