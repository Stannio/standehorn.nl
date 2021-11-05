import { ReactElement } from "react";
import DarkModeToggle from "../theme/DarkModeToggle";

const Footer = (): ReactElement => {
  return (
    <footer className='w-full py-6 bg-gray-100 dark:bg-gray-800'>
      <div className='container mx-auto'>
        <div className='flex flex-row items-center justify-between'>
          <div>
            <h2 className='font-mono text-black dark:text-white'>
              standehorn.nl
            </h2>
          </div>
          <div>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
