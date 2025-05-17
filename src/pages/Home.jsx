import React from "react";
import { Link } from "react-router-dom";
import cashappQR from '../assets/QRs/cashapp.png'
import donateQR from '../assets/QRs/donate.png'
import ticketsQR from '../assets/QRs/tickets.png'
import venmoQR from '../assets/QRs/venmo.png'
import { FullBanner, PartialBanner } from "../components/SectionBanners";

export default function Home() {
  return (
    <main id='home'>
      {/* <FullBanner color={'green'}>
        <h1 className="text-4xl md:text-5xl font-bold mb-1">
            2025 Military Heroes Gala
          </h1>
          <h2 className="text-1xl md:text-1xl mb-6">
            Kappa Sigma - Gamma-Nu (Washburn University)
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/event" className="btn-primary underline hover:scale-105 hover:text-KS_gold transition duration-200 ease-in-out">RSVP for Gala</a>
            <a href="/donate" className="btn-outline underline hover:scale-105 hover:text-KS_gold transition duration-200 ease-in-out">Make a Donation</a>
          </div>
      </FullBanner> */}

      <FullBanner color="green">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-5xl md:text-[15rem] font-bold font-greek text-white">{'\u039a'}</span>
          <img
            src="/campaign-crest.png"
            alt="Crest"
            className="w-16 h-16 md:w-64 md:h-64 object-contain"
          />
          <span className="text-5xl md:text-[15rem] font-bold font-greek text-white">{'\u03A3'}</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="/event"
            className="inline-flex items-center justify-center px-6 py-3 font-semibold text-KS_gold border-2 border-KS_gold rounded-md bg-transparent hover:bg-KS_gold hover:border-KS_gold-002 hover:text-white transition-all duration-300 shadow-sm"
          >
            🎟 RSVP for Gala
          </a>

          <a
            href="/donate"
            className="inline-flex items-center justify-center px-6 py-3 font-semibold text-KS_gold border-2 border-KS_gold rounded-md bg-transparent hover:bg-KS_gold hover:border-KS_gold-002 hover:text-white transition-all duration-300 shadow-sm"
          >
            💛 Make a Donation
          </a>
        </div>
      </FullBanner>

      <section className="py-12 px-6 mx-auto relative z-4 -mt-4 -mb-4">
        <h2 className="text-KS_green max-w-4xl mx-auto text-center text-2xl font-bold mb-4 border-b-2 border-KS_green pb-2 w-full">
          About the Campaign
        </h2>
        <div className="pb-12 px-6 max-w-4xl mx-auto">
          <p className="mb-4">
            The Military Heroes Campaign, created in 2007 by Kappa Sigma, is a nationwide initiative to support U.S. veterans.
            All chapters of the Kappa Sigma Fraternity have dedicated their time and effort into helping with this initiative.
          </p>
          <p className="">
            In November 2025, our chapter will host Military Heroes Month to support this cause.
            We've built relationships with members from the Veterans of Foreign Wars (VFW), members of the American Legion, members of the Eastern Kansas VA, as well as the Goodyear Veterans Association.
            We hope to make many more friends with other groups soon! We also plan to assist with those organizations in their efforts to recognize veterans throughout the year.
          </p>
        </div>
      </section>

      <PartialBanner fillColor={"gold"} borderColor="gold" textColor="black">
        <h2 className="max-w-4xl mx-auto text-center text-2xl font-bold my-4 border-b-2 border-neutral-900 pb-2 w-full">
          Military Heroes Gala
        </h2>
        <div className="pb-6 px-6 max-w-4xl mx-auto">
          <p className="mb-4">
            Our Gala will be held on <strong>Friday, November 14th, 2025</strong>. Join us for an evening of remembrance and giving with food, drink, two inspiring guest speakers, and a silent auction.
          </p>
          <p>
            This year's proceeds will support a transportation program at the Eastern Kansas VA to ensure veterans have access to the care they need.
          </p>
        </div>
      </PartialBanner>
      
      <section className="py-12 px-6 mx-auto z-2 -mt-4">
        <h2 className="text-KS_green max-w-4xl mx-auto text-center text-2xl font-bold mb-4 border-b-2 border-KS_green pb-2 w-full">
          Ways to Give & Participate
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="group relative max-w-min mx-auto">
              <div className="transition-all duration-1000 ease-in-out group-hover:block fixed inset-0 bg-black group-hover:opacity-50 opacity-0 z-40 pointer-events-none"></div>
              <a
                href="https://legfi.com/app/fundraisers/mhgala2025/1543"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-24 mb-2 h-24 bg-contain" style={{ backgroundImage: `url(${donateQR})`}}>
                  <img src={donateQR} alt="Donate QR" className="w-24 origin-center transition-all duration-500 ease-in-out group-hover:scale-300 scale-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none" />
                </div>
              </a>
            </div>
            <p>Donate via LegF</p>
          </div>
          <div>
            <div className="group relative max-w-min mx-auto">
              <div className="transition-all duration-1000 ease-in-out group-hover:block fixed inset-0 bg-black group-hover:opacity-50 opacity-0 z-40 pointer-events-none"></div>
              <a
                href="https://legfi.com/app/events/mhgala2025/2815"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-24 mb-2 h-24 bg-contain" style={{ backgroundImage: `url(${ticketsQR})`}}>
                  <img src={ticketsQR} alt="Tickets QR" className="w-24 origin-center transition-all duration-500 ease-in-out group-hover:scale-300 scale-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none" />
                </div>
              </a>
            </div>
            <p>Event Tickets</p>
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
                  <img src={cashappQR} alt="Cashapp: $Keegansharp27" className="w-24 origin-center transition-all duration-500 ease-in-out group-hover:scale-300 scale-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none" />
                </div>
              </a>
            </div>
            <p>Donate via Cashapp</p>
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
                  <img src={venmoQR} alt="Venmo: Keegan-Sharp2" className="w-24 origin-center transition-all duration-500 ease-in-out group-hover:scale-300 scale-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none" />
                </div>
              </a>
            </div>
            <p>Donate via Venmo</p>
          </div>
        </div>
      </section>

    </main>
  );
}

