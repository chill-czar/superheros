import Image from "next/image";


export default function ContactPage() {
  return (
    <>

      <main className="flex-grow w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-[80px] md:py-[120px]">
        {/* Header Section */}
        <section className="mb-16 md:mb-24 text-center">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-paper-white mb-4 uppercase tracking-tighter">
            VISIT THE <span className="text-hero-red">HEADQUARTERS</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Ready to talk comics, trade collectibles, or appraise your stash? Drop by our Klamath Falls location or hit us up on the comms channel.
          </p>
        </section>

        {/* Main Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Left Column: Contact Details (Spans 4 columns) */}
          <div className="md:col-span-4 flex flex-col gap-gutter">
            
            {/* Location Card */}
            <div className="bg-surface-charcoal rounded-xl p-6 shadow-lg border border-surface-container-highest hover:border-hero-red transition-colors group">
              <div className="flex items-start gap-4">
                <div className="bg-ink-black p-3 rounded-lg text-hero-red group-hover:text-power-yellow transition-colors">
                  <span className="material-symbols-outlined text-2xl" data-icon="location_on">location_on</span>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-paper-white mb-2 uppercase">Base of Operations</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    2236 S 6th St<br />
                    Klamath Falls, OR 97601
                  </p>
                </div>
              </div>
            </div>

            {/* Comms Card */}
            <div className="bg-surface-charcoal rounded-xl p-6 shadow-lg border border-surface-container-highest hover:border-royal-blue transition-colors group">
              <div className="flex items-start gap-4">
                <div className="bg-ink-black p-3 rounded-lg text-royal-blue group-hover:text-power-yellow transition-colors">
                  <span className="material-symbols-outlined text-2xl" data-icon="perm_phone_msg">perm_phone_msg</span>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-paper-white mb-2 uppercase">Comms Channel</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-2">
                    <a className="hover:text-hero-red transition-colors" href="tel:+15418872040">+1 541-887-2040</a><br />
                    <a className="hover:text-hero-red transition-colors" href="tel:+15418917035">541-891-7035</a>
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    <a className="hover:text-royal-blue transition-colors" href="mailto:superherosusa@gmail.com">superherosusa@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-surface-charcoal rounded-xl p-6 shadow-lg border border-surface-container-highest hover:border-power-yellow transition-colors group">
              <div className="flex items-start gap-4">
                <div className="bg-ink-black p-3 rounded-lg text-power-yellow group-hover:text-hero-red transition-colors">
                  <span className="material-symbols-outlined text-2xl" data-icon="schedule">schedule</span>
                </div>
                <div className="w-full">
                  <h3 className="font-title-lg text-title-lg text-paper-white mb-4 uppercase">Operating Hours</h3>
                  <div className="flex justify-between items-center mb-2 font-body-md text-body-md text-on-surface-variant">
                    <span>Tue - Sat</span>
                    <span className="text-paper-white font-medium">11:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center font-body-md text-body-md text-hero-red">
                    <span>Sun - Mon</span>
                    <span className="font-medium uppercase">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Card */}
            <div className="bg-surface-charcoal rounded-xl p-6 shadow-lg border border-surface-container-highest">
              <h3 className="font-title-lg text-title-lg text-paper-white mb-4 uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-on-surface-variant" data-icon="payments">payments</span>
                Accepted Currency
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-ink-black text-on-surface-variant text-label-sm font-label-sm px-3 py-1 rounded border border-surface-container-highest">Visa</span>
                <span className="bg-ink-black text-on-surface-variant text-label-sm font-label-sm px-3 py-1 rounded border border-surface-container-highest">Mastercard</span>
                <span className="bg-ink-black text-on-surface-variant text-label-sm font-label-sm px-3 py-1 rounded border border-surface-container-highest">Amex</span>
                <span className="bg-ink-black text-on-surface-variant text-label-sm font-label-sm px-3 py-1 rounded border border-surface-container-highest">Discover</span>
                <span className="bg-ink-black text-on-surface-variant text-label-sm font-label-sm px-3 py-1 rounded border border-surface-container-highest">Cash</span>
                <span className="bg-ink-black text-on-surface-variant text-label-sm font-label-sm px-3 py-1 rounded border border-surface-container-highest">Check</span>
              </div>
            </div>
          </div>

          {/* Right Column: Map Graphic (Spans 8 columns) */}
          <div className="md:col-span-8 bg-surface-charcoal rounded-xl border border-surface-container-highest overflow-hidden shadow-lg relative min-h-[400px] md:min-h-[600px] group">
            {/* Decorative Frame Overlay simulating comic panel borders */}
            <div className="absolute inset-0 border-4 border-ink-black z-10 pointer-events-none"></div>
            <div className="absolute inset-2 border border-surface-container-highest opacity-50 z-10 pointer-events-none"></div>
            
            {/* Location Label Badge */}
            <div className="absolute top-6 left-6 z-20 bg-hero-red text-paper-white px-4 py-2 rounded shadow-md flex items-center gap-2">
              <span className="material-symbols-outlined" data-icon="my_location">my_location</span>
              <span className="font-label-lg text-label-lg uppercase tracking-wider">Sector: Klamath Falls</span>
            </div>

            {/* Stylized Map Placeholder Image */}
            <Image 
              alt="Stylized map showing Klamath Falls location" 
              className="absolute inset-0 w-full h-full object-cover filter contrast-125 grayscale-[30%] opacity-80 group-hover:scale-105 transition-transform duration-700 ease-in-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk2GGYnljtdu9EfUfZ9GTS9c8zFQTIqhu35_OcoDkzhRo3XHyKfIrvdg3Nj4LrPOLQ0ITSzpSkQEqTSffUvHeRT-jjURZLjP9mbDdYLj2YcTtw0drAWgwBswcFt0ImoyVMZb2CFHjvCvLAkuNXgo6SqkhXCJuI8-yGOzhbyG4BPldvMjtQxcvtT_HccYoKVqqSJJZpgOTkH8Yj53KLABUTh1RJI08-AbqzS8WP9s1JmzM54XpKul8MB-zC4ab4TAdkRDyMUN2gNmWC"
              fill
              style={{ objectFit: 'cover' }}
            />
            
            {/* Map Center Pin Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <div className="w-12 h-12 bg-hero-red rounded-full flex items-center justify-center shadow-lg border-2 border-paper-white animate-pulse">
                <span className="material-symbols-outlined text-paper-white" data-icon="storefront">storefront</span>
              </div>
              <div className="mt-2 bg-ink-black/80 backdrop-blur-sm border border-surface-container-highest px-3 py-1 rounded text-power-yellow font-label-sm text-label-sm shadow-md">
                SUPERHEROS HQ
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
