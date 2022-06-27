import { Logo } from "./Logo";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SubscriptionCard } from "./SubscriptionCard";
import { PhoneIcon, EmailIcon, LocationIcon } from "./Icons";

const links = [
  { url: "#aboutus", name: "About Us" },
  { url: "#jobs", name: "Jobs" },
  { url: "#press", name: "Press" },
  { url: "#blog", name: "Blog" },
  { url: "#contact", name: "Contact Us" },
  { url: "#team", name: "Teams" },
  { url: "#privacy", name: "Privacy" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-primary-blue-4">
      <div className="px-6 md:px-16 pt-48">
        <Link href="#">
          <a>
            <Logo />
          </a>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 py-10">
          <div className="col-span-1 flex flex-row gap-3 items-start">
            <span>
              <LocationIcon />
            </span>
            <span className="text-gray-300 text-xs leading-6 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              perferendis veritatis possimus maxime laudantium facilis.
            </span>
          </div>
          <div className="col-span-1">
            <div className="flex flex-row gap-3">
              <span>
                <PhoneIcon />
              </span>
              <span className="text-xs text-gray-300">+1-543-123-4567</span>
            </div>
            <div className="flex flex-row gap-3 mt-4">
              <span>
                <EmailIcon />
              </span>
              <span className="text-xs text-gray-300">example@fylo.com</span>
            </div>
          </div>
          <div className="col-span-1">
            <ul className="flex flex-col gap-4 items-start flex-wrap h-32">
              {links.map((link) => (
                <li key={link.url}>
                  <Link href={link.url}>
                    <a className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-100">
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 flex flex-row justify-start items-start gap-4 text-gray-300">
            <span className="w-8 h-8 rounded-full border border-gray-400 grid place-items-center cursor-pointer hover:border-gray-300 transition-colors duration-100">
              <FaFacebook />
            </span>
            <span className="w-8 h-8 rounded-full border border-gray-400 grid place-items-center cursor-pointer hover:border-gray-300 transition-colors duration-100">
              <FaTwitter />
            </span>
            <span className="w-8 h-8 rounded-full border border-gray-400 grid place-items-center cursor-pointer hover:border-gray-300 transition-colors duration-100">
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
      <SubscriptionCard />
    </footer>
  );
};
