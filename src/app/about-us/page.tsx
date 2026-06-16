import Image from "next/image";


export default function AboutUsPage() {
  return (
    <>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center w-full pb-24">
        {/* Hero Section */}
        <section className="w-full max-w-container-max-width px-margin-mobile md:px-margin-desktop mt-16 mb-24">
          <div className="flex flex-col md:flex-row gap-gutter items-center">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <span className="inline-block bg-hero-red text-paper-white font-label-lg text-label-lg px-3 py-1 rounded w-max uppercase tracking-wider">Our Story</span>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-paper-white uppercase leading-tight">
                Serving Collectors in <span className="text-hero-red">Klamath Falls</span> and Beyond.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Established in 2024 by Donald Wilson, Superheros was born from a profound passion for the toys you played with as a kid and the high-end collectibles you seek today.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-surface-container-highest">
              <Image 
                alt="Comic Book Store Interior" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAewVIetM9bfn3tsbhGo0h3lyjALg_zbaWeZHUpob3P4z2AYYZc2wbA1_sVZ7OX0DVAWdq4HxXptWsBsS7pb6T3tP9oZpjmZAYs-McU2B0EXH5cRhAPfFWJg8cLYqo2iC1-Se0x98Qb6NJWVmyU0FNB-qhE3rucoBavEooBsCQn7A0mP9Hkki-ddhChSZqII7JdheWK04mwHfxIyZCOnhOYpsjC56uqAQqpLpOBS-uR6LxBA9F_7RgzR3e9_p0-6x1qICBmxdL115zA"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Mission & Focus (Bento Grid) */}
        <section className="w-full max-w-container-max-width px-margin-mobile md:px-margin-desktop mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[300px]">
            {/* Passion Card */}
            <div className="md:col-span-8 bg-surface-charcoal rounded-xl border border-surface-container-highest p-8 flex flex-col justify-end relative overflow-hidden group hover:border-hero-red transition-colors">
              <Image 
                alt="Vintage Action Figures" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmZEsFmryuMb3PzWehGwEuVJr9Q4fhXrAv04tJlEWH8Nn8AhMwTA3MtmmqyOhyxAgaJ76fXY4VWJuTQWg2xZ2hnHyH64k1HYoP-iIFr6jLaFXeTmakn3QehpqolaeQZzjGJjWRREKWg5js8nhPTjQ4kFJ4-rOUNIRyrmpsAx4TcmVlriLGI2_AX6Ehz4Q0KDBVfKyRniHqyvtDwDgSUM5JvyJNmYKVdREt827aDBVw8W_s9J9u0rx4xngd6qnmhPD_ArT7Lhq-rU5V"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/60 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="font-headline-md text-headline-md text-paper-white uppercase mb-4">The Toys You Played With</h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                  We specialize in bridging the gap between childhood nostalgia and serious investment. From mint-condition vintage figures to modern masterpieces, we curate the best.
                </p>
              </div>
            </div>
            {/* Founder Card */}
            <div className="md:col-span-4 bg-surface-charcoal rounded-xl border border-surface-container-highest p-8 flex flex-col items-center justify-center text-center hover:border-royal-blue transition-colors">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-hero-red">
                <Image 
                  alt="Donald Wilson Portrait" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3DxHy-lkGTyJpLahdbl6IcZjtw_xLmlZifPK4pyrtG5KkvnpBvmgagzQrRF6coPj2FqHYgMTJp_f_Cg8BxoBShWPyH5DNyqM4OjqIg7MDOSJAJacP9iYUte_lIV3ESKhtXp5nCzN8FkRo-wWVsyNoz9vsB0zUJcecN3_TE1oQ1WiRFCbp6e4bkTVVQ7alH7q08QV5lD2sRUDP_rS7kt2HfgmazwIrH6PfVPbiVS5AivIWL5Vzc9kTAfZrlre2I0Og6cwAlaMRrg5Q"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="font-title-lg text-title-lg text-paper-white mb-2">Donald Wilson</h3>
              <p className="font-label-lg text-label-lg text-power-yellow uppercase tracking-widest mb-4">Founder</p>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Bringing premium curation to the Klamath Basin since 2024.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="w-full max-w-container-max-width px-margin-mobile md:px-margin-desktop mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display-lg text-headline-md text-paper-white uppercase mb-4">Our Territory</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              We proudly provide buying, selling, and valuation services to collectors across Southern Oregon.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-unit">
            {/* Area Chips */}
            <div className="bg-surface-charcoal border border-surface-container-highest rounded-lg py-4 px-6 text-center hover:border-hero-red hover:bg-surface-container transition-all">
              <span className="font-title-lg text-title-lg text-paper-white">Klamath</span>
            </div>
            <div className="bg-surface-charcoal border border-surface-container-highest rounded-lg py-4 px-6 text-center hover:border-hero-red hover:bg-surface-container transition-all">
              <span className="font-title-lg text-title-lg text-paper-white">Douglas</span>
            </div>
            <div className="bg-surface-charcoal border border-surface-container-highest rounded-lg py-4 px-6 text-center hover:border-hero-red hover:bg-surface-container transition-all">
              <span className="font-title-lg text-title-lg text-paper-white">Deschutes</span>
            </div>
            <div className="bg-surface-charcoal border border-surface-container-highest rounded-lg py-4 px-6 text-center hover:border-hero-red hover:bg-surface-container transition-all">
              <span className="font-title-lg text-title-lg text-paper-white">Jackson</span>
            </div>
            <div className="bg-surface-charcoal border border-surface-container-highest rounded-lg py-4 px-6 text-center hover:border-hero-red hover:bg-surface-container transition-all col-span-2 md:col-span-1">
              <span className="font-title-lg text-title-lg text-paper-white">Josephine</span>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
