import { FullBanner } from "../components/SectionBanners";
import OmittedSection from "../components/OmittedSection"
import cashappQR from '../assets/QRs/cashapp.png'
import donateQR from '../assets/QRs/donate.png'
import venmoQR from '../assets/QRs/venmo.png'

export default function Donate() {
  return (
    <main id='donate' className="">
      {/* Hero Banner */}
      <FullBanner color={'gold'}>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Support the Mission</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            100% of your donation supports veterans through verified nonprofit partners.
          </p>
      </FullBanner>

      {/* Final CTA */}
      <section className="py-12 text-center px-6 bg-KS_green text-white">
        <h2 className="text-2xl font-bold mb-4">Every dollar matters.</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Whether you're giving $5 or $50, your donation goes directly to helping real veterans in our community and beyond.
        </p>
        <a
          href="https://legfi.com/app/fundraisers/mhgala2025/1543"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-KS_green transition-all duration-300"
        >
          Donate Now
        </a>
      </section>

      <section className="py-10 px-6 max-w-3xl mx-auto text-lg space-y-4">
        <h2 className="text-KS_gold text-2xl font-bold mb-4 border-b-2 border-KS_gold-100 pb-2">Who You're Supporting</h2>
        <p>
          <strong>The Military Heroes Campaign</strong>, launched in 2007 by Kappa Sigma, supports veteran-focused nonprofits across North America.
          Our Gamma-Nu chapter proudly contributes through fundraising, partnerships, and volunteerism during <strong>Military Heroes Month</strong>.
        </p>
        <p>
          We've built relationships with members of the <strong>Veterans of Foreign Wars</strong>, <strong>American Legion</strong>,<OmittedSection> <strong>Eastern Kansas VA</strong>,</OmittedSection> and more. Your donation helps these organizations recognize and support those who’ve served.
        </p>
        <OmittedSection><p>
          <strong>This year, all proceeds will benefit a transportation program</strong> for American veterans through the Eastern Kansas VA — ensuring they have access to the care and resources they deserve.
        </p></OmittedSection>
      </section>


      {/* Donation Info */}
      <section className="py-12 px-6 max-w-3xl mx-auto text-lg">
        <h2 className="text-KS_gold text-2xl font-bold mb-4 border-b-2 border-KS_gold-100 pb-2">Ways to Donate</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Online:</strong>{' '}
            <a
              href="https://legfi.com/app/fundraisers/mhgala2025/1543"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-KS_gold-001 transition"
            >
              Donate via LegFi
            </a>
          </li>
          <li>
            <strong>Cash App:</strong>{' '}
            <a
              href="https://cash.app/$Keegansharp27?qr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-KS_gold-001 transition"
            >
              $Keegansharp27
            </a>
          </li>
          <li>
            <strong>Venmo:</strong>{' '}
            <a
              href="https://venmo.com/code?user_id=4200718885979512201&created=1743609125.588942"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-KS_gold-001 transition"
            >
              @Keegan-Sharp-2
            </a>
          </li>
          <li>
            <strong>In person:</strong> At our gala or during philanthropy week events
          </li>
        </ul>
      </section>

      {/* QR Codes Section */}
      <section className="py-8 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">Scan to Donate</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div>
            <div className="group relative max-w-min mx-auto">
              <div className="transition-all duration-1000 ease-in-out group-hover:block fixed inset-0 bg-black group-hover:opacity-50 opacity-0 z-40 pointer-events-none"></div>
              <a
                href="https://legfi.com/app/fundraisers/mhgala2025/1543"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-24 mb-2 h-24 bg-contain" style={{ backgroundImage: `url(${donateQR})`}}>
                  <img src={donateQR} alt="LegFi QR" className="w-24 origin-center transition-all duration-500 ease-in-out group-hover:scale-300 scale-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none" />
                </div>
              </a>
            </div>
            <p>LegFi</p>
          </div>
          <div>
            <div className="group relative max-w-min mx-auto">
              <div className="transition-all duration-1000 ease-in-out group-hover:block fixed inset-0 bg-black group-hover:opacity-50 opacity-0 z-40 pointer-events-none"></div>
              <a
                href="https://cash.app/$Keegansharp27?qr=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-24 mb-2 h-24 bg-contain" style={{ backgroundImage: `url(${cashappQR})`}}>
                  <img src={cashappQR} alt="CashApp QR" className="w-24 origin-center transition-all duration-500 ease-in-out group-hover:scale-300 scale-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none" />
                </div>
              </a>
            </div>
            <p>CashApp</p>
          </div>
          <div>
            <div className="group relative max-w-min mx-auto">
              <div className="transition-all duration-1000 ease-in-out group-hover:block fixed inset-0 bg-black group-hover:opacity-50 opacity-0 z-40 pointer-events-none"></div>
              <a
                href="https://venmo.com/code?user_id=4200718885979512201&created=1743609125.588942"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-24 mb-2 h-24 bg-contain" style={{ backgroundImage: `url(${venmoQR})`}}>
                  <img src={venmoQR} alt="Venmo QR" className="w-24 origin-center transition-all duration-500 ease-in-out group-hover:scale-300 scale-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none" />
                </div>
              </a>
            </div>
            <p>Venmo</p>
          </div>
        </div>
      </section>
    </main>
  );
}
