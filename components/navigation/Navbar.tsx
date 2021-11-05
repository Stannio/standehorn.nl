import type { ReactElement } from "react";
import Link from "next/link";
import DarkModeToggle from "../theme/DarkModeToggle";

interface NavItemProps {
  children: string;
  href: string;
}

const navItems = [
  {
    children: "Home",
    href: "/",
  },
  {
    children: "Portfolio",
    href: "/portfolio",
  },
  {
    children: "Contact",
    href: "/contact",
  },
];

const NavItem = ({ children, href }: NavItemProps): ReactElement => {
  return (
    <Link href={href} passHref>
      <div className='font-medium text-black cursor-pointer hover:text-gray-300 dark:text-gray-600'>
        {children}
      </div>
    </Link>
  );
};

const Navbar = (): ReactElement => {
  return (
    <nav className='container mx-auto'>
      <div className='flex flex-row justify-around py-4 align-middle border-b-2 border-gray-300 dark:border-gray-800'>
        {navItems.map(({ href, children }, key) => (
          <NavItem key={key} href={href}>
            {children}
          </NavItem>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
