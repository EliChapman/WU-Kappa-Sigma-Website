import { FullBanner } from "../components/SectionBanners";
import { PartialBanner } from "../components/SectionBanners";

export default function SponsorshipOpportunities() {
    const tiers = [
        {
            name: 'Gold',
            price: '$750',
            seats: 8,
            benefits: [
                'Logo featured on all distributed event materials and promotions',
                'Recognition during ceremony',
                'Reserved seating for 8 guests',
                'Mention in social media posts'
            ],
            
            textColorClass: 'text-KS_gold'
        },
        {
            name: 'Silver',
            price: '$500',
            seats: 6,
            benefits: [
                'Logo featured on distributed event materials and promotions',
                'Recognition during ceremony',
                'Reserved seating for 6 guests'
            ],
            textColorClass: 'text-gray-400'
        },
        {
            name: 'Bronze',
            price: '$250',
            seats: 4,
            benefits: [
                'Logo featured on distributed event materials and promotions',
                'Recognition during ceremony',
                'Reserved seating for 4 guests'
            ],
            textColorClass: 'text-amber-700'
        }
    ];

    return (
        <main id='sponsorship' className="">
            <FullBanner color='scarlet'>
                <h1 className="text-4xl md:text-5xl font-bold">Military Heroes Gala</h1>
                <h1 className="text-4xl md:text-5xl font-bold">Sponsorship Opportunities</h1>
                <p className="mt-4 text-lg md:text-2xl max-w-xl mx-auto">
                    We invite you to partner with us in honoring our nation's heroes at the
                    Veteran Appreciation Gala. Proceeds will benefit local veteran partners,
                    ensuring vital resources and support for those who have served.
                </p>
            </FullBanner>

            <PartialBanner borderColor="none" shadow={false}>
                <h2 className="text-3xl font-bold mb-4">Become a Sponsor</h2>
                <p className="mb max-w-2xl mx-auto">
                    As a Sponsor of the 2025 Military Heroes Gala,
                    you will be able to directly support our mission
                    and promote your brand. All donations are tax
                    deductible, and a receipt will be provided by us.
                </p>
            </PartialBanner>

            <section aria-labelledby="sponsorship-heading" className="max-w-6xl mx-auto px-4 pt-4 pb-10 shadow-xl">
                <h2 id="sponsorship-heading" className="text-3xl font-bold text-KS_scarlet mb-6 border-b-2 border-KS_scarlet pb-2 pl-1 pr-2 w-fit">Sponsorship Levels</h2>

                    <div className="overflow-x-auto bg-white dark:bg-neutral-900 rounded-md p-4 shadow-sm">
                        <table className="min-w-full text-sm text-left responsive-table">
                            <caption className="sr-only">Sponsorship levels and benefits</caption>
                            <thead>
                                <tr className="text-KS_scarlet">
                                    <th scope="col" className="px-4 py-2">Level</th>
                                    <th scope="col" className="px-4 py-2">Price</th>
                                    <th scope="col" className="px-4 py-2">Benefits</th>
                                    <th scope="col" className="px-4 py-2">Seats</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tiers.map((t) => (
                    <tr key={t.name} className="border-t border-neutral-800 align-top">
                        <td data-label="Level" className={`px-4 py-3 font-semibold w-40 ${t.textColorClass}`}><span className="td-value">{t.name}</span></td>
                        <td data-label="Price" className={`py-3 font-extrabold ${t.textColorClass}`}><span className="td-value">{t.price} <span className="text-sm font-normal text-neutral-500">one-time</span></span></td>
                                        <td data-label="Benefits" className="px-4 py-3 text-neutral-700 dark:text-neutral-300">
                                          <div className="td-value">
                                            <ul className="list-disc pl-5 space-y-1">
                                                {t.benefits.map((b, i) => (
                                                    <li key={i}>{b}</li>
                                                ))}
                                            </ul>
                                          </div>
                                        </td>
                                        <td data-label="Seats" className={`px-4 py-3 text-sm ${t.textColorClass}`}><span className="td-value">{t.seats}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                <div className="text-sm text-neutral-600 bg-neutral-50 dark:bg-neutral-800 p-4 rounded-md">
                    <strong>Recognition for All Sponsors:</strong> Logo placement on all flyers, programs, and digital materials. Acknowledgement at the ceremony by event hosts; public thank-you in post-event recap.
                </div>
            </section>

            <section className="py-10 px-6 max-w-4xl mx-auto text-lg text-center space-y-4">
                <h2 className="text-2xl font-bold mb-0">To confirm your sponsorship or learn more, please contact:</h2>
                <h2 className="text-2xl">Keegan Sharp <span className="font-bold text-KS_scarlet">785-409-8780</span> or Kacey Cattoor <span className="font-bold text-KS_scarlet">785-272-1616</span></h2>
                <p>Together, we can make this Gala a meaningful celebration for those who have given so much!</p>
            </section>
        </main>
    )
};
