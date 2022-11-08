import Link from "next/link";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const pricesmonth = [
    {
        title: "Hobby",
        price: 12,
        currency: "$",
        frecuency: "/month",
        description: "All the features you need to grow your business.",
        features: [
            "Unlimited vouchers ∞",
            "02 users",
            "Point of sale",
            "Customers",
        ],
        cta: "Buy Hobby",
        mostPopular: false,
    },

    {
        title: "Freelancer",
        price: 24,
        currency: "$",
        frecuency: "/month",
        description: "All the features you need to grow your business.",
        features: [
            "Unlimited vouchers ∞",
            "04 users",
            "02 warehouses",
            "Dashboard",
            "Point of sale",
        ],
        cta: "Buy Freelancer",
        mostPopular: true,
    },

    {
        title: "Startup",
        price: 32,
        currency: "$",
        frecuency: "/month",
        description: "All the features you need to grow your business.",
        features: [
            "Unlimited vouchers ∞",
            "08 users",
            "04 warehouses",
            "Dashboard",
            "Point of sale",
            "Finance",
            "mobile App",
        ],
        cta: "Buy Startup",
        mostPopular: false,
    },
    {
        title: "Enterprice",
        price: 48,
        currency: "$",
        frecuency: "/month",
        description: "All the features you need to grow your business.",
        features: [
            "Unlimited vouchers ∞",
            "16 users",
            "08 warehouses",
            "Dashboard",
            "Point of sale",
            "Inventory",
            "Shopping",
            "Finance",
            "mobile App",
        ],
        cta: "Buy Enterprice",
        mostPopular: false,
    },
];

type BillingInterval = 'year' | 'month';

export default function Pricing() {
    const [billingInterval, setBillingInterval] = useState<BillingInterval>('month');
    return (
        <div className="bg-gray-50 dark:bg-black" id="pricing">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                <h2 className="text-4xl font-bold text-center">
                    Pricing
                </h2>

                <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
                    We have the perfect plan for your business, choose the plan that best suits you, Try Halley free for 14 days.
                </p>
            </div>

            <div className="max-w-xs mx-auto justify-center bg-gray-200 dark:bg-neutral-800 rounded-lg flex mt-12">
                <button
                    onClick={() => setBillingInterval('month')}
                    type="button"
                    className={`${billingInterval === 'month'
                        ? 'relative w-1/2 bg-white dark:bg-neutral-600 text-black dark:text-white'
                        : 'ml-0.5 relative w-1/2 text-black dark:text-neutral-400'
                        } rounded-lg m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8`}
                >
                    Monthly billing
                </button>
                <button
                    onClick={() => setBillingInterval('year')}
                    type="button"
                    className={`${billingInterval === 'year'
                        ? 'relative w-1/2 bg-white dark:bg-neutral-600 text-black dark:text-white'
                        : 'ml-0.5 relative w-1/2 text-black dark:text-neutral-400'
                        } rounded-lg m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8`}
                >
                    Yearly billing
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
                {pricesmonth.map((plan) => (
                    <div
                        key={plan.title}
                        className={`rounded-lg py-8 relative flex flex-col ${plan.mostPopular
                            ? "border-rose-300 border-2 border-solid dark:border-rose-500"
                            : "border-gray-300 border"}      
                              `}>
                        <h3 className="px-6 text-lg font-semibold leading-5">
                            {plan.title}
                        </h3>
                        {plan.mostPopular && (
                            <p className="mx-6 absolute top-0 px-4 py-1 -translate-y-1/2 bg-rose-100 text-rose-500  rounded-full text-sm font-semibold tracking-wide shadow-md">
                                Most popular
                            </p>
                        )}


                        <p className="px-6 mt-4 leading-6">{plan.description}</p>
                        <div className="mt-2 p-6 -mx-6">
                            <p className="px-6 font-medium flex place-items-end">
                                <span className="text-4xl font-bold">{plan.currency}</span>
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className="ml-1.5">{plan.frecuency}</span>
                            </p>
                        </div>

                        {/* Call to action */}
                        <Link
                            href="#"
                            className={`mt-4 mx-6 block px-6 py-3 font-medium leading-4 text-center rounded-lg ${plan.mostPopular
                                ? "bg-rose-500 text-white shadow-md"
                                : "bg-black text-white dark:bg-white dark:text-black"}      
                                      `}>
                            {plan.cta}
                        </Link>

                        {/* features */}
                        <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-gray-300">
                            <p className="mt-6 font-semibold ">What&apos;s included</p>
                            {plan.features.map((feature) => (
                                <li key={feature} className="leading-6 flex">
                                    <FaCheck className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                                    <span className="ml-3">{feature}</span>
                                </li>
                            ))}
                        </ul>

                    </div>
                ))}
            </div>
        </div>
    );
}