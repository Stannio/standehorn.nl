import type { ReactElement } from "react";

const Navbar = (): ReactElement => {
  return (
    <nav className="container mx-auto">
      <div className="flex flex-row align-middle justify-around text-black dark:text-gray-600 font-normal border-b-2 border-gray-300 dark:border-gray-800 py-4">
        <div className="hover:text-gray-300 cursor-pointer">Home</div>
        <div className="hover:text-gray-300 cursor-pointer">Portfolio</div>
        <div className="hover:text-gray-300 cursor-pointer">Contact</div>
      </div>
    </nav>
  );
};

export default Navbar;
