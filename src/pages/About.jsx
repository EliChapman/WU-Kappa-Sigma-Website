import React from "react";
import { Link } from "react-router-dom";
import { FullBanner, PartialBanner } from "../components/SectionBanners";

export default function About() {
  return (
    <div id="about">
        <FullBanner color='scarlet'> 
            <h1 className="text-4xl md:text-5xl font-bold">About the Military Heroes Campaign</h1>
            <p className="mt-4 text-lg md:text-2xl max-w-xl mx-auto">
                A Kappa Sigma initiative dedicated to honoring and supporting veterans across North America.
            </p>
        </FullBanner>

        <section className="pb-10 pt-6 px-6 max-w-4xl mx-auto">
            <h2 className="text-KS_scarlet text-2xl font-bold mb-4 border-b-2 border-KS_scarlet pb-2">Campaign Overview</h2>
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

        <section className="px-6 max-w-4xl mx-auto rounded-md">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-KS_scarlet pb-2"></h2>

            <p className="mb-4">
                Our largest and most anticipated event each year is the <strong>Military Heroes Gala</strong> — a night of remembrance, celebration, and fundraising to directly support veterans in our community and beyond.
            </p>

            <h3 className="text-KS_scarlet text-xl font-semibold mt-6 mb-2">2024-2025 Contributions</h3>
            <ul className="list-disc list-inside">
                <li><strong>Volunteer Hours:</strong> 3,025</li>
                <li><strong>Total Donations:</strong> $9,265.61</li>
                <li><strong>Military Heroes Campaign Donations:</strong> $2,070.25</li>
            </ul>

            <p className="mt-4">
                These numbers reflect our chapter's ongoing dedication to Kappa Sigma's national mission and our local commitment to those who've served.
            </p>
        </section>

        <section className="pb-12 px-6 max-w-4xl mx-auto space-y-4">
            <h3 className="text-KS_scarlet text-xl font-semibold mt-6 mb-2">Our History</h3>
            <p>
                Kappa Sigma traces its heritage back to its founding in <strong>Bologna, Italy in 1400</strong>. The fraternity was officially established in the United States in <strong>1869 at the University of Virginia</strong>. Today, Kappa Sigma is the largest social fraternity in the world, with over <strong>20,000 undergraduate members</strong> and more than <strong>320 distinct chapters</strong>.
            </p>

            <p>
                At Washburn University, the <strong>Gamma-Nu chapter</strong> is a smaller, close-knit group of around <strong>35 brothers</strong>, which strengthens the bond between members. Our brothers are active leaders on campus, consistently winning homecoming and maintaining roles in <em>Residential Living Staff, Student Ambassadors, SOCs, Aleshire Leadership Fellows</em>, and the <em>Washburn Student Government Association</em>.
            </p>

            <p>
                Though we are currently a chapter <strong>without a house</strong>, this only pushes us to be more creative and intentional with how we connect. Some of our most meaningful memories come from volunteering together, taking spontaneous road trips to Kansas City, catching a late movie, or simply grabbing dinner together after chapter meetings.
            </p>
        </section>

    </div>
  );
}
