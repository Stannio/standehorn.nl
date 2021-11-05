import { NextPage } from "next";
import Link from "next/link";

const FourOhFour: NextPage = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='grid max-w-xl grid-cols-4 grid-rows-1 gap-6'>
        <div className='h-full col-span-1 border-r border-gray-600'>
          <h1 className='text-5xl font-semibold text-purple-500'>404</h1>
        </div>
        <div className='col-span-3'>
          <h1 className='text-5xl font-semibold'>Page not found</h1>
          <p className='mt-2 text-base text-gray-300'>
            Please check the URL in the address bar and try again.
          </p>
        </div>
        <div className='self-center col-span-3 col-start-2'>
          <Link href='/' passHref>
            <button className='px-4 py-2 mt-4 text-sm text-white bg-purple-500 rounded shadow-sm'>
              Go back home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FourOhFour;
