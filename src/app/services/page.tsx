import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-surface-container-highest bg-ink-black">
          <div className="max-w-container-max-width mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="col-span-1 md:col-span-8 flex flex-col justify-center">
              <span className="font-label-lg text-label-lg text-power-yellow mb-4 uppercase tracking-widest inline-block border border-power-yellow/30 px-3 py-1 rounded bg-power-yellow/10 w-max">Professional Services</span>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-6 text-paper-white uppercase leading-tight">
                Buy, Sell, Trade,<br />
                <span className="text-surface-variant">&amp;</span> Valuation
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8">
                Your collection is a legacy. Whether you are looking to liquidate rare vintage comics, trade up modern sports cards, or require a certified appraisal for insurance, our experts provide transparent, authoritative, and premium service.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-hero-red text-paper-white font-label-lg text-label-lg px-8 py-4 rounded font-bold hover:bg-hero-red/90 transition-colors flex items-center gap-2">
                  Request Valuation
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <button className="border-2 border-royal-blue text-paper-white font-label-lg text-label-lg px-8 py-4 rounded font-bold hover:bg-royal-blue/10 transition-colors">
                  How We Buy
                </button>
              </div>
            </div>
          </div>
          {/* Decorative Background Element */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-l from-ink-black/0 to-ink-black z-10"></div>
            <Image 
              alt="Background texture of stacked vintage comic books" 
              className="w-full h-full object-cover object-center filter grayscale contrast-150" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCitp_S9WyTpBrEEIwb7ADJk0Htu_BIVKRr3rDUqD4mATgmM-Dd-IHap-qIR-bKy89-7mKQHihON832giDf0K2Q6ihN5Vl9yHjVp1qkL1nDgeD2tQoQ7F16jCZ15-kry_cxNSR9mY0GjHo_vAw8IyE7gMYoo-vC-_3LDpRvfabgf65A9n4BDRPtK6b95V0fmXu8Y3uOTil8U3tEv0x6N555MqNt816Yg1qnhyw2AMFw_jpEuowcGg1KA2BNTxbQxdJbx3SIz0yaP2JT"
              fill
            />
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
          <div className="max-w-container-max-width mx-auto">
            <div className="mb-16 md:w-2/3">
              <h2 className="font-headline-md text-headline-lg-mobile md:text-headline-md text-paper-white mb-4 uppercase">Our Expertise</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">We handle everything from Golden Age comics to highly-graded modern sports cards. Our transparent process ensures you know exactly what your collection is worth and how to maximize its potential.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/* Selling */}
              <div className="col-span-1 md:col-span-8 bg-surface-charcoal rounded-lg p-8 comic-panel shadow-[0_8px_30px_rgb(0,0,0,0.15)] flex flex-col md:flex-row gap-8 items-center border border-surface-container-highest">
                <div className="md:w-1/2">
                  <span className="material-symbols-outlined text-4xl text-hero-red mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                  <h3 className="font-title-lg text-title-lg text-paper-white mb-3">Selling Your Collection</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Turn your rare finds into cash. We offer competitive, market-driven cash payouts for premium collectibles. Our process is fast, discrete, and designed to respect the value of your curation.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-power-yellow text-sm">check_circle</span> Same-day evaluations
                    </li>
                    <li className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-power-yellow text-sm">check_circle</span> Secure bank transfers
                    </li>
                  </ul>
                  <Link className="inline-flex items-center gap-2 text-hero-red font-label-lg text-label-lg hover:text-hero-red/80 transition-colors" href="#">
                    Start Selling <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
                <div className="md:w-1/2 w-full h-64 rounded bg-ink-black overflow-hidden relative">
                  <Image 
                    alt="Person evaluating graded cards" 
                    className="w-full h-full object-cover opacity-80" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjbwe23gRc64BSZYYAga-nRfOb9jjWau9dL6JdC0Yp0Kspy5H-V6UPW6dzzoi5ZTJqOZIpWvJFYV0UPAJpiaQRZG2Oj5FeXUjcwXmc43XeAMWWtIs-JjuSe_486TX9tC4FFDHbxL9RvgSdHDGjdjLHCryGrBOuyh0-tiRl0kdczKcNR5V1kd9TMTcMfpwYAz5KKu_35Uo-AGsA24VGL-EYc8Py4aStRqbaRP0Zb_ZuhB5-5dAapoRfM6OHwzzU_k-smD-BDZ7aH0SD"
                    fill
                  />
                </div>
              </div>

              {/* Trading */}
              <div className="col-span-1 md:col-span-4 bg-surface-charcoal rounded-lg p-8 comic-panel shadow-[0_8px_30px_rgb(0,0,0,0.15)] flex flex-col border border-surface-container-highest">
                <span className="material-symbols-outlined text-4xl text-royal-blue mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>swap_horiz</span>
                <h3 className="font-title-lg text-title-lg text-paper-white mb-3">Trading</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
                  Upgrade your collection through our fair trade program. Exchange duplicates or pivot your focus toward a new passion seamlessly.
                </p>
                <div className="mt-auto">
                  <div className="bg-surface-container-highest rounded p-4 mb-6 border-l-2 border-royal-blue">
                    <p className="font-label-sm text-label-sm text-on-background italic">&quot;I traded two Silver Age keys for a pristine modern grail. The process was transparent and fair.&quot;</p>
                  </div>
                  <Link className="inline-flex items-center gap-2 text-royal-blue font-label-lg text-label-lg hover:text-royal-blue/80 transition-colors" href="#">
                    View Trade Ratios <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Valuations */}
              <div className="col-span-1 md:col-span-12 bg-ink-black rounded-lg p-1 border border-surface-container-highest overflow-hidden mt-8 shadow-[0_8px_30px_rgb(0,0,0,0.15)] relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-hero-red via-surface-charcoal to-royal-blue opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-surface-charcoal rounded p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 z-10">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-surface border-4 border-surface-container-highest flex items-center justify-center relative shadow-lg">
                      <div className="absolute inset-0 rounded-full border-2 border-power-yellow animate-[spin_10s_linear_infinite] opacity-50 border-dashed"></div>
                      <span className="material-symbols-outlined text-6xl text-power-yellow" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="font-headline-md text-headline-lg-mobile md:text-headline-md text-paper-white mb-4 uppercase">Professional Valuations</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 text-lg">
                      Know the true value of your collectibles. Whether for insurance purposes, estate planning, or personal curiosity, our certified appraisals are recognized by major insurers.
                    </p> 
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-surface p-4 rounded border border-surface-container-highest">
                        <div className="text-hero-red font-display-lg text-headline-md mb-1">48<span className="text-lg">hrs</span></div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Standard Turnaround</div>
                      </div>
                      <div className="bg-surface p-4 rounded border border-surface-container-highest">
                        <div className="text-royal-blue font-display-lg text-headline-md mb-1">100<span className="text-lg">%</span></div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Market Accurate</div>
                      </div>
                    </div>
                    <button className="bg-paper-white text-ink-black font-label-lg text-label-lg px-8 py-3 rounded font-bold hover:bg-on-surface-variant transition-colors">
                      Schedule Appraisal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process CTA */}
        <section className="py-20 px-margin-mobile md:px-margin-desktop bg-ink-black border-t border-surface-container-highest text-center">
          <div className="max-w-3xl mx-auto">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-6">local_shipping</span>
            <h2 className="font-headline-md text-headline-lg-mobile md:text-headline-md text-paper-white mb-6 uppercase">Ready to get started?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">Bring your items to our Klamath Falls location, or securely ship them to our appraisal vault.</p>
            <button className="bg-hero-red text-paper-white font-label-lg text-label-lg px-10 py-4 rounded font-bold hover:bg-hero-red/90 transition-colors shadow-lg shadow-hero-red/20">
              Contact The Vault
            </button>
          </div>
        </section>
      </main>

    </>
  );
}
