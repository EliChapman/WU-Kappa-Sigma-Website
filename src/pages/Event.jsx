import OmittedSection from "../components/OmittedSection";
import { FullBanner } from "../components/SectionBanners";
import { FileText } from 'lucide-react'

export default function Event() {
  return (
    <main id='event' className="">
      <FullBanner color={'gold'}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Military Heroes Gala</h1>
          <p className="text-lg sm:text-2xl mb-6 max-w-xl mx-auto">
            Honoring those who serve. Supporting those who've returned.
          </p>
      </FullBanner>

      {/* Details Section */}
      <section className="pt-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-KS_gold text-2xl font-bold mb-4 border-b-2 border-KS_gold-100 pb-2">Event Details</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><strong>Date:</strong> Friday, November 14th, 2025</li>
          <li><strong>Location:</strong> <a href="https://www.google.com/maps?q=1701+SW+Jewell+Ave,+Topeka,+KS+66621" target="_blank" rel="noopener noreferrer" className="underline hover:text-KS_gold-001 transition">
            1701 SW Jewell Ave, Topeka, KS 66621
            </a></li>
          <li><strong>Time:</strong> 5:30PM - 8:30PM </li>
          <li><strong>Features:</strong> Guest speakers, catered dinner, silent auction</li>
        </ul>
        <div className="mt-4">
          <a
            href="/MilitaryHeroesFlyer2025.pdf"
            download
            className="inline-flex items-center gap-2 bg-KS_gold text-white font-semibold py-2 px-4 rounded hover:bg-KS_gold-100 hover:scale-105 transition"
          >
            <FileText size={20} />
            Download Event Flyer (PDF)
          </a>
        </div>
      </section>

      {/* Gala Purpose */}
      <section className="pt-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-KS_gold text-2xl font-bold mb-4 border-b-2 border-KS_gold-100 pb-2">Why We Host The Gala</h2>
        <p className="mb-4">
          While our chapter hosts small fundraisers during the week of Veterans Day, Gamma-Nu's showstopper has traditionally been our <strong>Military Heroes Gala</strong>.
        </p>
        <p className="mb-4">
          We will have food and drink, two guest speakers with personal experience in the military or in organizations that support the military, and finally, a silent auction. The primary goal of our Gala is to first provide a nostalgic and memorable night for — and in honor of — those who have served our country.
        </p>
        <p>
          Second, to auction off items donated by our sponsors to attendees and send <strong>100% of the proceeds</strong> to a veterans organization. <OmittedSection> This year, we plan to donate the funds to a program within the <strong>Eastern Kansas Veterans Association</strong> that is designed to provide <em>convenient and accessible transportation</em> for American veterans.</OmittedSection>
        </p>
      </section>

      {/* RSVP Section */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-KS_gold text-2xl font-bold mb-4 border-b-2 border-KS_gold-100 pb-2">Reserve Your Spot</h2>
        <p className="mb-6 max-w-xl mx-auto">
          All proceeds go toward supporting our veteran partners. You can RSVP online using the link below.
        </p>
        <a
          href="https://legfi.com/app/events/mhgala2025/2815"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xl bg-KS_gold hover:bg-KS_gold-100 text-white font-semibold py-4 px-12 rounded-lg transition transform hover:scale-105"
        >
          RSVP on LegFi
        </a>
      </section>
    </main>
  )
}
