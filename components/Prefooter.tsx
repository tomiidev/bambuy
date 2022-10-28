import Link from "next/link";

export default function Prefooter() {
    return (

        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-20 pb-10">
                <h1 className="text-4xl font-bold text-center">Ready to start your membership?</h1>
            </div>

            <div className="text-center pb-20">
                <Link href="#">
                    <button className="bg-rose-500 text-white rounded-full px-6 p-3 text-base font-medium">
                        Get started
                    </button>
                </Link>
            </div>
        </div>
    )

};