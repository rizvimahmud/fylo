import Link from "next/link";
import { Logo } from "./Logo";

const navItems = [
  { href: "#features", text: "Features" },
  { href: "#team", text: "Team" },
  { href: "#signin", text: "Sign In" },
];

export const Nav = () => {
  return (
    <nav>
      <div className="flex justify-between items-center px-6 md:px-16  py-10">
        <Logo />
        <ul className="flex items-center gap-4 md:gap-10">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="font-heading text-gray-300 font-medium tracking-wide hover:text-gray-100 hover:underline transition duration-150 ease-in"
            >
              <Link href={item.href}>
                <a>{item.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
