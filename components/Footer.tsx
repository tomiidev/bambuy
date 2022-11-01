import Image from "next/image";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const social = [
  {
    name: "twitter",
    href: "https://twitter.com/",
    icon: <FaTwitter size={16} />,
  },
  {
    name: "facebook",
    href: "https://facebook.com/",
    icon: <FaFacebook size={16} />,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/",
    icon: <FaInstagram size={16} />,
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/",
    icon: <FaYoutube size={16} />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-6">
        <div className="col-span-2">
          <Link href="/">
            <Image
              className="h-8 w-auto"
              src="/images/logos/logo-white.svg"
              alt="Logo Your Company"
              width={150}
              height={150}
              quality={75}
              sizes="100vw"
            />
          </Link>

          <p className="text-sm pt-6 w-auto sm:w-10/12 md:w-8/12 lg:w-10/12"><span className="text-rose-500 font-bold">Halley</span> is the sit amet fuga tempora magnam fugiat dolorem quas consectetur, voluptates inventore amet dignissimos dicta.</p>

          <div className="flex gap-2 pt-6 sm:pt-6 md:pt-6 lg:pt-12 max-w-[300px]">
            {social.map((red) => (
              <Link key={red.name} href={red.href} target="_blank" className="text-white">
                <div className="w-9 h-9 bg-neutral-700 hover:bg-neutral-600 rounded-full flex items-center justify-center transition-all">
                  {red.icon}
                </div>

              </Link>
            ))}
          </div>

          <div className="pt-6 text-sm">
            <h3>Av Tomas Marsano 700</h3>
            <h3>Surco, Lima</h3>
            <h3>Perú</h3>
            <h3><Link href="tel:51931133631"> Phone: +51 931133631</Link></h3>

          </div>

        </div>
        <div>
          <h3 className="text-xs font-bold pb-4 pt-12 sm:pt-0">PRODUCT</h3>
          <ul className="text-sm leading-7">
            <li className="hover:text-rose-500"><a href="#">Lite</a></li>
            <li className="hover:text-rose-500"><a href="#">Pro</a></li>
            <li className="hover:text-rose-500"><a href="#">Premium</a></li>
            <li className="hover:text-rose-500"><a href="#">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold pb-4 pt-12 lg:pt-0">FOR CREATORS</h3>
          <ul className="text-sm leading-7">
            <li className="hover:text-rose-500"><a href="#">Podcasters</a></li>
            <li className="hover:text-rose-500"><a href="#">Creators</a></li>
            <li className="hover:text-rose-500"><a href="#">Musicians</a></li>
            <li className="hover:text-rose-500"><a href="#">Communities</a></li>
            <li className="hover:text-rose-500"><a href="#">Developers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold pb-4 pt-12 lg:pt-0">RESOURCES</h3>
          <ul className="text-sm leading-7">
            <li className="hover:text-rose-500"><a href="#">Help Center & FAQ</a></li>
            <li className="hover:text-rose-500"><a href="#">Privacy Preferences</a></li>
            <li className="hover:text-rose-500"><a href="#">Policy & Terms</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold pb-4 pt-12 lg:pt-0">COMPANY</h3>
          <ul className="text-sm leading-7">
            <li className="hover:text-rose-500"><a href="#">Home</a></li>
            <li className="hover:text-rose-500"><a href="#">About</a></li>
            <li className="hover:text-rose-500"><a href="#">Projects</a></li>
            <li className="hover:text-rose-500"><a href="#">Services</a></li>
            <li className="hover:text-rose-500"><a href="#">Contact</a></li>
          </ul>
        </div>

      </div>

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-6 text-center border-t border-neutral-800">
        <Link
          href="https://humbersanchez.com"
          target="_blank"
          className="text-white text-sm hover:text-rose-500 "
        >
          &copy; Copyright {new Date().getFullYear()}. All rights reserved.
        </Link>
      </div>
    </footer>
  );
}