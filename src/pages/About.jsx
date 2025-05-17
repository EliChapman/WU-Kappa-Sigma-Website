import React from "react";
import { Link } from "react-router-dom";
import { FullBanner, PartialBanner } from "../components/SectionBanners";

export default function About() {
  return (
    <div className="">
        <FullBanner color='gold' bannerOpacity={10}> 
            <h1 className="text-4xl md:text-5xl font-bold">About the Military Heroes Campaign</h1>
            <p className="mt-4 text-lg md:text-2xl max-w-xl mx-auto">
                A Kappa Sigma initiative dedicated to honoring and supporting veterans across North America.
            </p>
        </FullBanner>

        <section className="pb-10 pt-6 px-6 max-w-4xl mx-auto">
            <h2 className="text-KS_scarlet text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">Campaign Overview</h2>
            <p className="mb-4">
                Launched in 2007, the Military Heroes Campaign is Kappa Sigma's national philanthropic initiative, solely run by undergraduate and alumni members. Its mission is clear:
                <em>“Every veteran deserves a stable life and a community full of supporters.”</em>
            </p>

            <h3 className="text-KS_scarlet text-xl font-semibold mt-8 mb-2">Key Beneficiaries</h3>
            <ul className="list-disc list-inside mb-4">
                <li>Seal Legacy Foundation</li>
                <li>Veterans Moving Forward</li>
                <li>Homes For Our Troops</li>
                <li>...and several other 100% veteran-focused organizations</li>
            </ul>

            <h3 className="text-KS_scarlet text-xl font-semibold mt-8 mb-2">Fundraising & Impact</h3>
            <p className="mb-4">
                The campaign is primarily funded by philanthropic events hosted by Kappa Sigma undergraduate chapters and alumni. These chapter-level contributions are aggregated into the national campaign to enable larger, verified gifts to veteran-focused organizations.
            </p>
            <p className="mb-4">
                <strong>100% of funds</strong> raised go directly to veterans and their families — no administrative overhead.
            </p>

            <h3 className="text-KS_scarlet text-xl font-semibold mt-8 mb-2">Financial Milestones</h3>
            <ul className="list-disc list-inside">
                <li>Over $2 million raised since the 2007 launch</li>
                <li>More than $1.67 million donated during the campaign's first decade (2007-2017)</li>
            </ul>
        </section>

        <PartialBanner imgURL={`/group-hero.png`} textColor="white" borderColor="black" bannerOpacity={50}>
            <h1 className="text-4xl md:text-6xl font-bold">Our Chapter</h1>
            <p className="mt-4 text-lg md:text-2xl max-w-xl mx-auto">
                Gamma-Nu at Washburn
            </p>
        </PartialBanner>

        <section className="pb-12 px-6 max-w-4xl mx-auto rounded-md">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-600 pb-2"></h2>

            <p className="mb-4">
                Our largest and most anticipated event each year is the <strong>Military Heroes Gala</strong> — a night of remembrance, celebration, and fundraising to directly support veterans in our community and beyond.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">2024-2025 Contributions</h3>
            <ul className="list-disc list-inside">
                <li><strong>Volunteer Hours:</strong> 3,025</li>
                <li><strong>Total Donations:</strong> $9,265.61</li>
                <li><strong>Military Heroes Campaign Donations:</strong> $2,070.25</li>
            </ul>

            <p className="mt-4">
                These numbers reflect our chapter's ongoing dedication to Kappa Sigma's national mission and our local commitment to those who've served.
            </p>
        </section>


    </div>
  );
}
