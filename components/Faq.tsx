import { Disclosure } from '@headlessui/react'
import { RiArrowUpSLine } from "react-icons/ri";

export default function Faq() {
    return (
        <div className="bg-white w-full px-4 pt-16 pb-16" id="faq">
            <h2 className="text-4xl font-bold text-center">
                Frequently Asked Questions
            </h2>

            <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto">
                Answer your customers possible questions here, it will increase the conversion rate as well as support or chat requests.
            </p>
            <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-4 text-left text-base font-medium hover:bg-gray-100">
                                <span>What is your refund policy?</span>
                                <RiArrowUpSLine
                                    className={`${open ? 'rotate-180 transition-transform' : ''
                                        } h-5 w-5`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-base">
                                If youre unhappy with your purchase for any reason, email us
                                within 90 days and well refund you in full, no questions asked.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-3">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-4 text-left text-base font-medium hover:bg-gray-100">
                                <span>Do you offer technical support?</span>
                                <RiArrowUpSLine
                                    className={`${open ? 'rotate-180 transition-transform' : ''
                                        } h-5 w-5`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-base">
                                No, we dont offer technical support for free downloads. Please purchase a support plan to get 6 months of support.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-3">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-4 text-left text-base font-medium hover:bg-gray-100">
                                <span>What is your refund policy?</span>
                                <RiArrowUpSLine
                                    className={`${open ? 'rotate-180 transition-transform' : ''
                                        } h-5 w-5`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-base">
                                If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-3">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-4 text-left text-base font-medium hover:bg-gray-100">
                                <span>What forms of payment do you accept?</span>
                                <RiArrowUpSLine
                                    className={`${open ? 'rotate-180 transition-transform' : ''
                                        } h-5 w-5`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-base">
                                You can use any debit or credit card to pay for a subscription. We secure your card details and process payments via Stripe.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>

    );
}

